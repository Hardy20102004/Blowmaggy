import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { getDepartment, formatPrice } from '../data/products';

export default function Cart() {
  const {
    cart, cartSubtotal, shipping, couponDiscount, cartTotal, cartCount,
    cartDepartments,
    removeFromCart, updateQty, clearCart,
    appliedCoupon, applyCoupon, removeCoupon,
    COUPONS,
  } = useStore();

  const navigate  = useNavigate();
  const [couponInput, setCouponInput] = useState('');
  const [couponBusy,  setCouponBusy]  = useState(false);

  /* ── Coupon apply ─────────────────────────────────── */
  const handleCoupon = () => {
    if (!couponInput.trim()) return;
    setCouponBusy(true);
    applyCoupon(couponInput, cartSubtotal);
    setTimeout(() => {
      setCouponBusy(false);
      setCouponInput('');
    }, 400);
  };

  /* ── Empty state ─────────────────────────────────── */
  if (!cart.length) return (
    <main className="container cart-empty-page">
      <div className="cart-empty">
        <div className="cart-empty__art">
          <div className="cart-empty__icon">🛒</div>
          <div className="cart-empty__ring" />
        </div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.<br />Let's change that across all six departments!</p>
        <Link to="/" className="btn btn-primary btn-lg" id="cart-continue-shopping">
          Continue Shopping →
        </Link>
        <div className="cart-empty__depts">
          {['fashion','beauty','electronics','home','grocery','kids'].map(id => {
            const d = getDepartment(id);
            return (
              <Link key={id} to={`/department/${id}`} className="cart-empty__dept-chip">
                {d?.icon} {d?.name}
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        .cart-empty-page { padding: var(--space-16) var(--space-6); }
        .cart-empty {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; padding: var(--space-16) var(--space-8);
          max-width: 520px; margin: 0 auto;
        }
        .cart-empty__art { position: relative; margin-bottom: var(--space-8); }
        .cart-empty__icon {
          font-size: 5rem; position: relative; z-index: 1;
          animation: bob 3s ease-in-out infinite;
        }
        @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .cart-empty__ring {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          width: 120px; height: 120px; border-radius: 50%;
          background: radial-gradient(circle, rgba(233,30,140,.12) 0%, transparent 70%);
        }
        .cart-empty h2 { margin-bottom: var(--space-3); }
        .cart-empty p { color: var(--ink-muted); line-height: 1.75; margin-bottom: var(--space-8); }
        .cart-empty__depts {
          display: flex; flex-wrap: wrap; gap: var(--space-2); justify-content: center;
          margin-top: var(--space-8);
        }
        .cart-empty__dept-chip {
          padding: 7px 16px; border: 1.5px solid var(--border);
          border-radius: var(--radius-full); font-size: 0.82rem; font-weight: 600;
          color: var(--ink); text-decoration: none;
          transition: all var(--duration) var(--ease);
        }
        .cart-empty__dept-chip:hover { border-color: var(--magenta); color: var(--magenta); }
      `}</style>
    </main>
  );

  return (
    <main className="container" style={{ padding: 'var(--space-8) var(--space-6) var(--space-16)' }}>

      {/* ── Header ─────────────────────────────────── */}
      <div className="cart-header">
        <div>
          <h1>My Cart</h1>
          <p className="cart-header__sub text-muted text-sm">
            {cartCount} item{cartCount !== 1 ? 's' : ''} from {cartDepartments.length} department{cartDepartments.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button className="btn btn-ghost text-sm" onClick={clearCart}>
          Clear All
        </button>
      </div>

      {/* ── Department pills (cross-dept proof) ─────── */}
      {cartDepartments.length > 0 && (
        <div className="cart-dept-row">
          <span className="text-xs text-muted fw-600" style={{ textTransform:'uppercase', letterSpacing:'.07em' }}>
            Departments in this cart:
          </span>
          {cartDepartments.map(dId => {
            const d = getDepartment(dId);
            return (
              <span key={dId} className="cart-dept-badge" style={{ background: d?.color + '15', color: d?.color }}>
                {d?.icon} {d?.name}
              </span>
            );
          })}
        </div>
      )}

      <div className="cart-layout">

        {/* ── LEFT: Items ──────────────────────────── */}
        <div className="cart-items">
          {cart.map(item => {
            const dept = getDepartment(item.product.department);
            const variantParts = item.variantKey !== 'default'
              ? item.variantKey.split('|').map(v => {
                  const [k, val] = v.split(':');
                  return `${k}: ${val}`;
                })
              : [];
            const maxStock = item.product.stock ?? 9999;

            return (
              <div key={item.itemId} className="cart-item" id={`cartitem-${item.itemId}`}>

                {/* Image */}
                <Link to={`/product/${item.product.id}`} className="cart-item__img-link">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="cart-item__img"
                  />
                </Link>

                {/* Info */}
                <div className="cart-item__info">
                  <div className="cart-item__dept" style={{ color: dept?.color }}>
                    {dept?.icon} {dept?.name}
                  </div>
                  <Link to={`/product/${item.product.id}`} className="cart-item__name">
                    {item.product.name}
                  </Link>
                  {item.product.brand && (
                    <div className="cart-item__brand">{item.product.brand}</div>
                  )}
                  {variantParts.length > 0 && (
                    <div className="cart-item__variants">
                      {variantParts.map(v => (
                        <span key={v} className="cart-item__var-chip">{v}</span>
                      ))}
                    </div>
                  )}
                  <div className="cart-item__unit-price">
                    {formatPrice(item.product.price)} × {item.qty}
                  </div>
                </div>

                {/* Actions */}
                <div className="cart-item__actions">
                  {/* Qty stepper */}
                  <div className="cart-item__qty" role="group" aria-label="Quantity">
                    <button
                      className="cart-item__qty-btn"
                      onClick={() => updateQty(item.itemId, item.qty - 1)}
                      aria-label="Decrease quantity"
                    >−</button>
                    <span className="cart-item__qty-val">{item.qty}</span>
                    <button
                      className="cart-item__qty-btn"
                      onClick={() => updateQty(item.itemId, item.qty + 1)}
                      disabled={item.qty >= maxStock}
                      aria-label="Increase quantity"
                    >+</button>
                  </div>

                  {/* Stock warning */}
                  {item.qty >= maxStock && (
                    <div className="cart-item__stock-warn">Max stock reached</div>
                  )}

                  {/* Subtotal */}
                  <div className="cart-item__subtotal">
                    {formatPrice(item.product.price * item.qty)}
                  </div>

                  {/* Remove */}
                  <button
                    className="cart-item__remove"
                    onClick={() => removeFromCart(item.itemId)}
                    aria-label={`Remove ${item.product.name}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── RIGHT: Order Summary ──────────────────── */}
        <div className="cart-summary">
          <h3 className="cart-summary__title">Order Summary</h3>

          {/* Line items */}
          <div className="cart-summary__lines">
            <div className="cart-summary__line">
              <span>Subtotal ({cartCount} items)</span>
              <span>{formatPrice(cartSubtotal)}</span>
            </div>
            <div className="cart-summary__line">
              <span>Delivery fee</span>
              <span className={shipping === 0 ? 'free-tag' : ''}>
                {shipping === 0 ? 'FREE' : formatPrice(shipping)}
              </span>
            </div>
            {couponDiscount > 0 && (
              <div className="cart-summary__line cart-summary__line--discount">
                <span>
                  Coupon ({appliedCoupon?.code})
                  <button className="remove-coupon-link" onClick={removeCoupon}>Remove</button>
                </span>
                <span>−{formatPrice(couponDiscount)}</span>
              </div>
            )}
            {shipping > 0 && (
              <div className="cart-summary__free-tip">
                Add {formatPrice(499 - cartSubtotal)} more for free delivery
              </div>
            )}
          </div>

          <hr className="divider" />

          <div className="cart-summary__total">
            <span>Total</span>
            <span className="cart-summary__total-amt">{formatPrice(cartTotal)}</span>
          </div>
          {couponDiscount > 0 && (
            <div className="cart-summary__saved">
              🎉 You're saving {formatPrice(couponDiscount)} with coupon!
            </div>
          )}

          {/* Coupon */}
          <div className="coupon-block">
            {appliedCoupon ? (
              <div className="coupon-applied">
                <div className="coupon-applied__left">
                  <span className="coupon-applied__icon">🏷️</span>
                  <div>
                    <div className="fw-700 text-sm">{appliedCoupon.code}</div>
                    <div className="text-xs text-muted">{appliedCoupon.desc}</div>
                  </div>
                </div>
                <button className="coupon-applied__remove" onClick={removeCoupon}>✕</button>
              </div>
            ) : (
              <>
                <div className="coupon-input-row">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="input coupon-input"
                    value={couponInput}
                    onChange={e => setCouponInput(e.target.value.toUpperCase())}
                    onKeyDown={e => e.key === 'Enter' && handleCoupon()}
                    id="coupon-input"
                    aria-label="Coupon code"
                  />
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={handleCoupon}
                    disabled={couponBusy || !couponInput.trim()}
                    id="apply-coupon-btn"
                  >
                    {couponBusy ? '...' : 'Apply'}
                  </button>
                </div>
                <div className="coupon-hints">
                  Try: <button onClick={() => setCouponInput('SAVE10')} className="coupon-hint-btn">SAVE10</button>
                  {' · '}<button onClick={() => setCouponInput('FLAT150')} className="coupon-hint-btn">FLAT150</button>
                  {' · '}<button onClick={() => setCouponInput('NEWUSER')} className="coupon-hint-btn">NEWUSER</button>
                </div>
              </>
            )}
          </div>

          {/* CTA */}
          <button
            className="btn btn-primary btn-lg w-full"
            id="proceed-checkout-btn"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout →
          </button>

          {/* Security note */}
          <div className="cart-summary__secure">
            <span>🔒</span>
            <span>This is a demo — no real payment processing</span>
          </div>

          {/* Cross-dept breakdown */}
          <div className="cart-dept-breakdown">
            <div className="text-xs text-muted fw-600" style={{ textTransform:'uppercase', letterSpacing:'.06em', marginBottom:8 }}>
              Departments
            </div>
            {cartDepartments.map(dId => {
              const d = getDepartment(dId);
              const deptItems = cart.filter(i => i.product.department === dId);
              const deptTotal = deptItems.reduce((s, i) => s + i.product.price * i.qty, 0);
              return (
                <div key={dId} className="cart-dept-line" style={{ '--dept-color': d?.color }}>
                  <span>{d?.icon} {d?.name}</span>
                  <span className="fw-600">{formatPrice(deptTotal)}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* Header */
        .cart-header {
          display: flex; align-items: flex-start; justify-content: space-between;
          margin-bottom: var(--space-5); flex-wrap: wrap; gap: var(--space-3);
        }
        .cart-header__sub { margin-top: 3px; }

        /* Dept row */
        .cart-dept-row {
          display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-2);
          margin-bottom: var(--space-6);
          padding: var(--space-3) var(--space-4);
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-lg);
        }
        .cart-dept-badge {
          padding: 3px 10px; border-radius: var(--radius-full);
          font-size: 0.72rem; font-weight: 700;
        }

        /* Layout */
        .cart-layout {
          display: grid; grid-template-columns: 1fr 360px;
          gap: var(--space-8); align-items: start;
        }

        /* Items */
        .cart-items { display: flex; flex-direction: column; gap: var(--space-3); }
        .cart-item {
          display: grid;
          grid-template-columns: 100px 1fr auto;
          gap: var(--space-5);
          align-items: start;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-5);
          transition: box-shadow var(--duration) var(--ease), border-color var(--duration) var(--ease);
        }
        .cart-item:hover { box-shadow: var(--shadow-md); border-color: rgba(233,30,140,.15); }

        /* Image */
        .cart-item__img-link { flex-shrink: 0; }
        .cart-item__img {
          width: 100px; height: 100px; object-fit: cover;
          border-radius: var(--radius-md); background: var(--ivory-dark);
          transition: transform 300ms var(--ease);
        }
        .cart-item:hover .cart-item__img { transform: scale(1.04); }

        /* Info */
        .cart-item__info { display: flex; flex-direction: column; gap: 4px; }
        .cart-item__dept {
          font-size: 0.68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: .07em;
        }
        .cart-item__name {
          font-family: 'Inter', sans-serif; font-size: 0.9rem; font-weight: 700;
          color: var(--ink); line-height: 1.3;
        }
        .cart-item__name:hover { color: var(--magenta); }
        .cart-item__brand { font-size: 0.72rem; color: var(--ink-light); }
        .cart-item__variants { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 3px; }
        .cart-item__var-chip {
          padding: 2px 8px; background: var(--ivory-dark);
          border: 1px solid var(--border); border-radius: var(--radius-full);
          font-size: 0.68rem; color: var(--ink-muted); font-weight: 600;
        }
        .cart-item__unit-price {
          font-size: 0.8rem; color: var(--ink-light); margin-top: 4px;
          font-family: 'Inter', sans-serif;
        }

        /* Actions */
        .cart-item__actions {
          display: flex; flex-direction: column;
          align-items: flex-end; gap: var(--space-3); min-width: 110px;
        }
        .cart-item__qty {
          display: flex; align-items: center;
          border: 1.5px solid var(--border); border-radius: var(--radius-full);
          overflow: hidden;
        }
        .cart-item__qty-btn {
          width: 34px; height: 34px; font-size: 1.1rem; font-weight: 700;
          color: var(--ink); background: var(--ivory); border: none; cursor: pointer;
          transition: all var(--duration) var(--ease);
          display: flex; align-items: center; justify-content: center;
        }
        .cart-item__qty-btn:hover:not(:disabled) { background: var(--lavender-soft); color: var(--magenta); }
        .cart-item__qty-btn:disabled { opacity: 0.35; cursor: default; }
        .cart-item__qty-val {
          min-width: 36px; text-align: center;
          font-weight: 800; font-size: 0.9rem; color: var(--ink);
        }
        .cart-item__stock-warn {
          font-size: 0.68rem; font-weight: 700; color: var(--warning);
          background: #FEF3C7; padding: 2px 8px; border-radius: var(--radius-full);
        }
        .cart-item__subtotal {
          font-size: 1.05rem; font-weight: 900; color: var(--ink);
          font-family: 'Inter', sans-serif;
        }
        .cart-item__remove {
          display: flex; align-items: center; gap: 5px;
          padding: 5px 10px; border-radius: var(--radius-full);
          font-size: 0.72rem; font-weight: 600; color: var(--ink-muted);
          border: 1px solid var(--border); background: none; cursor: pointer;
          transition: all var(--duration) var(--ease);
        }
        .cart-item__remove:hover { color: var(--error); background: #FEE2E2; border-color: #FCA5A5; }

        /* Summary */
        .cart-summary {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-6);
          box-shadow: var(--shadow-md); position: sticky; top: 88px;
          display: flex; flex-direction: column; gap: var(--space-5);
        }
        .cart-summary__title {
          font-family: 'Inter', sans-serif; font-size: 1.05rem; font-weight: 800;
        }
        .cart-summary__lines { display: flex; flex-direction: column; gap: var(--space-3); }
        .cart-summary__line {
          display: flex; justify-content: space-between;
          font-size: 0.875rem; color: var(--ink-muted);
        }
        .cart-summary__line--discount { color: var(--success); }
        .free-tag { color: var(--magenta); font-weight: 700; }
        .remove-coupon-link {
          margin-left: 8px; font-size: 0.7rem; font-weight: 700;
          color: var(--error); text-decoration: underline; cursor: pointer;
          background: none; border: none;
        }
        .cart-summary__free-tip {
          font-size: 0.78rem; color: var(--magenta); font-weight: 600;
          background: #FDE8F3; padding: 6px 10px; border-radius: var(--radius-sm);
          text-align: center;
        }
        .cart-summary__total {
          display: flex; justify-content: space-between;
          font-size: 1.05rem; font-weight: 800; color: var(--ink);
        }
        .cart-summary__total-amt { font-size: 1.3rem; }
        .cart-summary__saved {
          font-size: 0.8rem; font-weight: 600; color: var(--success);
          background: #DCFCE7; padding: 8px 12px; border-radius: var(--radius-md);
          text-align: center;
        }
        .cart-summary__secure {
          display: flex; align-items: center; justify-content: center;
          gap: 6px; font-size: 0.72rem; color: var(--ink-light); text-align: center;
          padding-top: var(--space-2); border-top: 1px solid var(--border);
        }

        /* Coupon */
        .coupon-block { display: flex; flex-direction: column; gap: var(--space-2); }
        .coupon-input-row { display: flex; gap: var(--space-2); }
        .coupon-input {
          border-radius: var(--radius-full); padding: 9px 16px; font-size: 0.85rem;
          letter-spacing: 0.08em; font-weight: 600; text-transform: uppercase;
        }
        .coupon-hints { font-size: 0.72rem; color: var(--ink-light); }
        .coupon-hint-btn {
          background: none; border: none; cursor: pointer;
          color: var(--magenta); font-weight: 700; font-size: 0.72rem;
          text-decoration: underline;
        }

        .coupon-applied {
          display: flex; align-items: center; justify-content: space-between;
          padding: var(--space-3) var(--space-4);
          background: #DCFCE7; border: 1.5px dashed #86EFAC;
          border-radius: var(--radius-md);
        }
        .coupon-applied__left { display: flex; align-items: center; gap: var(--space-3); }
        .coupon-applied__icon { font-size: 1.2rem; }
        .coupon-applied__remove {
          background: none; border: none; cursor: pointer;
          color: var(--ink-muted); font-size: 1rem;
          transition: color var(--duration) var(--ease);
        }
        .coupon-applied__remove:hover { color: var(--error); }

        /* Dept breakdown */
        .cart-dept-breakdown {
          padding-top: var(--space-4); border-top: 1px solid var(--border);
        }
        .cart-dept-line {
          display: flex; justify-content: space-between;
          font-size: 0.8rem; color: var(--ink-muted);
          padding: 4px 0; border-bottom: 1px solid var(--ivory-dark);
        }
        .cart-dept-line:last-child { border-bottom: none; }

        /* Responsive */
        @media (max-width: 960px) {
          .cart-layout { grid-template-columns: 1fr; }
          .cart-summary { position: static; }
        }
        @media (max-width: 600px) {
          .cart-item { grid-template-columns: 80px 1fr; }
          .cart-item__actions {
            grid-column: 1 / -1;
            flex-direction: row; flex-wrap: wrap;
            align-items: center; justify-content: space-between;
          }
          .cart-item__img { width: 80px; height: 80px; }
        }
      `}</style>
    </main>
  );
}
