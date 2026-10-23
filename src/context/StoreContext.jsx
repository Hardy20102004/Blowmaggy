import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { COUPONS } from '../data/coupons';
export { COUPONS }; // re-export for Cart.jsx

/* ══════════════════════════════════════════════════════════
   BLOWMAGGY — Shared Store Context
   ONE cart for ALL six departments.
   Persisted to localStorage with stock validation.
══════════════════════════════════════════════════════════ */

/* ── Helpers ─────────────────────────────────────────── */
const load = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};
const save = (key, val) => localStorage.setItem(key, JSON.stringify(val));


/* ── Initial State ───────────────────────────────────── */
const init = () => ({
  /* cart: [{ itemId, product, variantKey, qty }] */
  cart:     load('bmg_cart',     []),
  wishlist: load('bmg_wishlist', []),
  orders:   load('bmg_orders',   []),
  toasts:   [],
  searchQuery: '',
  /* coupon */
  appliedCoupon: load('bmg_coupon', null),
  usedCoupons:   load('bmg_used_coupons', []),
  /* admin overrides — keyed by product id */
  productOverrides: load('bmg_prod_overrides', {}),
  deletedProductIds: load('bmg_deleted_ids', []),
});

/* ── Reducer ─────────────────────────────────────────── */
function reducer(state, action) {
  switch (action.type) {

    /* ── CART ──────────────────────────────────────── */
    case 'CART_ADD': {
      const { product, variantKey, qty = 1 } = action.payload;
      const itemId = `${product.id}__${variantKey}`;
      const existing = state.cart.find(i => i.itemId === itemId);
      const maxStock = product.stock ?? Infinity;

      if (existing) {
        const newQty = Math.min(existing.qty + qty, maxStock);
        if (newQty === existing.qty) {
          // Already at max stock — signal via payload flag (handled in action creator)
          return state;
        }
        const cart = state.cart.map(i =>
          i.itemId === itemId ? { ...i, qty: newQty } : i
        );
        return { ...state, cart };
      }
      const cart = [...state.cart, {
        itemId, product, variantKey, qty: Math.min(qty, maxStock),
      }];
      return { ...state, cart };
    }

    case 'CART_REMOVE': {
      const cart = state.cart.filter(i => i.itemId !== action.payload);
      return { ...state, cart };
    }

    case 'CART_UPDATE_QTY': {
      const { itemId, qty } = action.payload;
      if (qty < 1) {
        return { ...state, cart: state.cart.filter(i => i.itemId !== itemId) };
      }
      const cart = state.cart.map(i => {
        if (i.itemId !== itemId) return i;
        const maxStock = i.product.stock ?? Infinity;
        return { ...i, qty: Math.min(qty, maxStock) };
      });
      return { ...state, cart };
    }

    case 'CART_CLEAR':
      return { ...state, cart: [], appliedCoupon: null };

    /* ── WISHLIST ───────────────────────────────────── */
    case 'WISHLIST_TOGGLE': {
      const id = action.payload;
      const wishlist = state.wishlist.includes(id)
        ? state.wishlist.filter(i => i !== id)
        : [...state.wishlist, id];
      return { ...state, wishlist };
    }
    case 'WISHLIST_REMOVE': {
      return { ...state, wishlist: state.wishlist.filter(id => id !== action.payload) };
    }

    /* ── COUPON ─────────────────────────────────────── */
    case 'COUPON_APPLY': {
      const { coupon } = action.payload;
      return {
        ...state,
        appliedCoupon: coupon,
        usedCoupons: [...state.usedCoupons, coupon.code],
      };
    }
    case 'COUPON_REMOVE':
      return { ...state, appliedCoupon: null };

    /* ── ORDERS ─────────────────────────────────────── */
    case 'ORDER_PLACE': {
      // Use pre-built snapshot from Checkout (prices frozen at purchase time)
      // or build a default one from current state
      const order = action.payload.order || {
        id: 'BMG' + Date.now().toString(36).toUpperCase(),
        date: new Date().toISOString(),
        items: state.cart.map(i => ({ ...i })),
        subtotal: action.payload.subtotal,
        shipping: action.payload.shipping,
        discount: action.payload.discount,
        total: action.payload.total,
        coupon: state.appliedCoupon?.code || null,
        address: action.payload.address,
        payment: action.payload.payment,
        status: 'Confirmed',
        timeline: [
          { label: 'Order Placed',     done: true,  time: new Date().toLocaleString() },
          { label: 'Confirmed',        done: true,  time: new Date().toLocaleString() },
          { label: 'Processing',       done: false, time: '' },
          { label: 'Shipped',          done: false, time: '' },
          { label: 'Delivered',        done: false, time: '' },
        ],
      };
      return {
        ...state,
        orders: [order, ...state.orders],
        cart: [],
        appliedCoupon: null,
      };
    }

    /* ── ADMIN ──────────────────────────────────────── */
    case 'ADMIN_UPDATE_PRODUCT': {
      const { id, changes } = action.payload;
      const existing = state.productOverrides[id] || {};
      return {
        ...state,
        productOverrides: {
          ...state.productOverrides,
          [id]: { ...existing, ...changes },
        },
      };
    }
    case 'ADMIN_DELETE_PRODUCT': {
      return {
        ...state,
        deletedProductIds: [...state.deletedProductIds, action.payload],
      };
    }
    case 'ADMIN_RESTORE_PRODUCT': {
      return {
        ...state,
        deletedProductIds: state.deletedProductIds.filter(id => id !== action.payload),
      };
    }
    case 'ADMIN_UPDATE_ORDER_STATUS': {
      const { orderId, status, timelineLabel } = action.payload;
      const orders = state.orders.map(o => {
        if (o.id !== orderId) return o;
        const timeline = (o.timeline || []).map(step => {
          if (step.label === timelineLabel) {
            return { ...step, done: true, time: new Date().toLocaleString() };
          }
          return step;
        });
        return { ...o, status, timeline };
      });
      return { ...state, orders };
    }

    /* ── TOASTS ─────────────────────────────────────── */
    case 'TOAST_ADD': {
      const toast = { id: Date.now() + Math.random(), ...action.payload };
      return { ...state, toasts: [...state.toasts.slice(-3), toast] }; // max 4 toasts
    }
    case 'TOAST_REMOVE':
      return { ...state, toasts: state.toasts.filter(t => t.id !== action.payload) };

    /* ── SEARCH ─────────────────────────────────────── */
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload };

    default: return state;
  }
}

/* ── Context ─────────────────────────────────────────── */
const StoreCtx = createContext(null);

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null, init);

  /* ── Persist to localStorage ── */
  useEffect(() => { save('bmg_cart',           state.cart);             }, [state.cart]);
  useEffect(() => { save('bmg_wishlist',       state.wishlist);         }, [state.wishlist]);
  useEffect(() => { save('bmg_orders',         state.orders);           }, [state.orders]);
  useEffect(() => { save('bmg_coupon',         state.appliedCoupon);    }, [state.appliedCoupon]);
  useEffect(() => { save('bmg_used_coupons',   state.usedCoupons);      }, [state.usedCoupons]);
  useEffect(() => { save('bmg_prod_overrides', state.productOverrides); }, [state.productOverrides]);
  useEffect(() => { save('bmg_deleted_ids',    state.deletedProductIds);}, [state.deletedProductIds]);

  /* ── Auto-dismiss toasts ── */
  useEffect(() => {
    if (!state.toasts.length) return;
    const last = state.toasts[state.toasts.length - 1];
    const t = setTimeout(() =>
      dispatch({ type: 'TOAST_REMOVE', payload: last.id }), 3800);
    return () => clearTimeout(t);
  }, [state.toasts]);

  /* ── Action creators ─────────────────────────────── */
  const toast = useCallback((message, type = 'info', icon) =>
    dispatch({ type: 'TOAST_ADD', payload: { message, type, icon } }), []);

  const addToCart = useCallback((product, variantKey, qty = 1) => {
    const itemId = `${product.id}__${variantKey}`;
    const existing = state.cart.find(i => i.itemId === itemId);
    const maxStock = product.stock ?? 9999;

    if (maxStock === 0) {
      toast('This item is out of stock.', 'error', '✕');
      return;
    }
    if (existing && existing.qty >= maxStock) {
      toast(`Only ${maxStock} units in stock — you've already added the maximum.`, 'warning', '⚠️');
      return;
    }

    dispatch({ type: 'CART_ADD', payload: { product, variantKey, qty } });

    const variantDisplay = variantKey !== 'default'
      ? ' · ' + variantKey.split('|').map(v => v.split(':')[1]).join(', ')
      : '';
    toast(`${product.name}${variantDisplay} added to cart!`, 'success', '🛒');
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [state.cart]);

  const removeFromCart = useCallback((itemId) => {
    dispatch({ type: 'CART_REMOVE', payload: itemId });
    toast('Item removed from cart.', 'info', '🗑️');
  }, [toast]);

  const updateQty = useCallback((itemId, qty) => {
    const item = state.cart.find(i => i.itemId === itemId);
    if (!item) return;
    const maxStock = item.product.stock ?? 9999;

    if (qty < 1) {
      dispatch({ type: 'CART_REMOVE', payload: itemId });
      toast('Item removed from cart.', 'info', '🗑️');
      return;
    }
    if (qty > maxStock) {
      toast(`Only ${maxStock} units available in stock.`, 'warning', '⚠️');
      dispatch({ type: 'CART_UPDATE_QTY', payload: { itemId, qty: maxStock } });
      return;
    }
    dispatch({ type: 'CART_UPDATE_QTY', payload: { itemId, qty } });
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [state.cart, toast]);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CART_CLEAR' });
    toast('Cart cleared.', 'info', '🗑️');
  }, [toast]);

  const toggleWishlist = useCallback((id, productName) => {
    const isInWishlist = state.wishlist.includes(id);
    dispatch({ type: 'WISHLIST_TOGGLE', payload: id });
    toast(
      isInWishlist ? 'Removed from wishlist.' : '♥ Saved to wishlist!',
      isInWishlist ? 'info' : 'success',
      isInWishlist ? '♡' : '♥'
    );
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [state.wishlist, toast]);

  const moveToCart = useCallback((product) => {
    const vk = Object.keys(product.variants || {}).length > 0
      ? Object.keys(product.variants).map(k => `${k}:${product.variants[k][0]}`).join('|')
      : 'default';
    addToCart(product, vk, 1);
    dispatch({ type: 'WISHLIST_REMOVE', payload: product.id });
  }, [addToCart]);

  /* ── Coupon ─────────────────────────────────────── */
  const applyCoupon = useCallback((code, cartSubtotal) => {
    const normalized = code.trim().toUpperCase();
    const coupon = COUPONS[normalized];

    if (!coupon) {
      toast(`"${normalized}" is not a valid coupon code.`, 'error', '✕');
      return false;
    }
    if (state.usedCoupons.includes(normalized)) {
      toast(`You've already used coupon "${normalized}".`, 'error', '✕');
      return false;
    }
    if (state.appliedCoupon) {
      toast('Remove the current coupon before applying another.', 'warning', '⚠️');
      return false;
    }
    if (cartSubtotal < coupon.minOrder) {
      toast(
        `Minimum order ₹${coupon.minOrder.toLocaleString('en-IN')} required for this coupon. (current: ₹${cartSubtotal.toLocaleString('en-IN')})`,
        'warning', '⚠️'
      );
      return false;
    }

    dispatch({ type: 'COUPON_APPLY', payload: { coupon } });
    const saved = coupon.type === 'percent'
      ? `${coupon.value}% off`
      : `₹${coupon.value} off`;
    toast(`Coupon "${normalized}" applied — ${saved}!`, 'success', '🎉');
    return true;
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [state.appliedCoupon, state.usedCoupons, toast]);

  const removeCoupon = useCallback(() => {
    dispatch({ type: 'COUPON_REMOVE' });
    toast('Coupon removed.', 'info', '🏷️');
  }, [toast]);

  /* ── Orders ─────────────────────────────────────── */
  const placeOrder = useCallback((totals, address, payment, order) => {
    dispatch({ type: 'ORDER_PLACE', payload: { ...totals, address, payment, order } });
  }, []);

  /* ── Search ─────────────────────────────────────── */
  const setSearch = useCallback((q) =>
    dispatch({ type: 'SET_SEARCH', payload: q }), []);

  /* ── Derived values ─────────────────────────────── */
  const cartCount   = state.cart.reduce((s, i) => s + i.qty, 0);
  const cartSubtotal = state.cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const shipping    = cartSubtotal === 0 ? 0 : cartSubtotal >= 499 ? 0 : 99;

  let couponDiscount = 0;
  if (state.appliedCoupon) {
    const c = state.appliedCoupon;
    couponDiscount = c.type === 'percent'
      ? Math.round(cartSubtotal * c.value / 100)
      : c.value;
    couponDiscount = Math.min(couponDiscount, cartSubtotal);
  }

  const cartTotal   = cartSubtotal + shipping - couponDiscount;

  /* Departments in cart (for cross-dept display) */
  const cartDepartments = [...new Set(state.cart.map(i => i.product.department))];

  /* ── Admin actions ──────────────────────────────── */
  const adminUpdateProduct = useCallback((id, changes) => {
    dispatch({ type: 'ADMIN_UPDATE_PRODUCT', payload: { id, changes } });
    toast('Product updated successfully.', 'success', '✓');
  }, [toast]);

  const adminDeleteProduct = useCallback((id, name) => {
    dispatch({ type: 'ADMIN_DELETE_PRODUCT', payload: id });
    toast(`"${name}" removed from catalogue.`, 'info', '🗑️');
  }, [toast]);

  const adminRestoreProduct = useCallback((id) => {
    dispatch({ type: 'ADMIN_RESTORE_PRODUCT', payload: id });
    toast('Product restored.', 'success', '✓');
  }, [toast]);

  const adminUpdateOrderStatus = useCallback((orderId, status, timelineLabel) => {
    dispatch({ type: 'ADMIN_UPDATE_ORDER_STATUS', payload: { orderId, status, timelineLabel } });
    toast(`Order ${orderId} → ${status}`, 'success', '✓');
  }, [toast]);

  return (
    <StoreCtx.Provider value={{
      /* state */
      ...state,
      /* derived */
      cartCount, cartSubtotal, shipping, couponDiscount, cartTotal,
      cartDepartments,
      /* actions */
      toast,
      addToCart, removeFromCart, updateQty, clearCart,
      toggleWishlist, moveToCart,
      applyCoupon, removeCoupon,
      placeOrder, setSearch,
      /* admin */
      adminUpdateProduct, adminDeleteProduct, adminRestoreProduct, adminUpdateOrderStatus,
      dispatch,
    }}>
      {children}
    </StoreCtx.Provider>
  );
}

export const useStore = () => {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error('useStore must be used inside <StoreProvider>');
  return ctx;
};
