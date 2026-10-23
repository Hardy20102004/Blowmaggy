import React, { useState, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { getDepartment, formatPrice } from '../data/products';

/* ── Step Indicator ─────────────────────────────────────── */
const STEPS = ['Delivery', 'Payment', 'Review'];
function StepBar({ step }) {
  return (
    <div className="step-bar">
      {STEPS.map((label, i) => (
        <React.Fragment key={label}>
          <div className={`step-node ${i < step ? 'done' : i === step ? 'active' : 'pending'}`}>
            <div className="step-node__circle">
              {i < step ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              ) : i + 1}
            </div>
            <span className="step-node__label">{label}</span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`step-connector ${i < step ? 'done' : ''}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ── Field validation ───────────────────────────────────── */
const VALIDATORS = {
  name:    v => v.trim().length >= 2   ? '' : 'Please enter your full name',
  email:   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? '' : 'Enter a valid email address',
  phone:   v => /^\d{10}$/.test(v.replace(/\s/g,'')) ? '' : 'Enter a valid 10-digit mobile number',
  line1:   v => v.trim().length >= 5   ? '' : 'Enter your street address',
  city:    v => v.trim().length >= 2   ? '' : 'Enter your city',
  state:   v => v.trim().length >= 2   ? '' : 'Select your state',
  pincode: v => /^\d{6}$/.test(v)     ? '' : 'Enter a valid 6-digit PIN code',
};

function Field({ label, id, type = 'text', value, onChange, error, placeholder, maxLength, pattern, required = true, half }) {
  return (
    <div className={`form-field ${half ? 'half' : ''}`}>
      <label className="label" htmlFor={id}>
        {label}{required && <span style={{ color: 'var(--magenta)' }}> *</span>}
      </label>
      <input
        id={id}
        type={type}
        className={`input ${error ? 'input--error' : ''}`}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder || label}
        maxLength={maxLength}
        pattern={pattern}
        autoComplete="on"
      />
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}

const INDIA_STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana',
  'Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur',
  'Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',
  'Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
  'Delhi','Chandigarh','Puducherry','Jammu & Kashmir','Ladakh',
];

/* ── Confirmation screen ────────────────────────────────── */
function OrderConfirmation({ order }) {
  return (
    <div className="confirm-screen">
      <div className="confirm-screen__confetti" aria-hidden>
        {['🎉','✨','🛍️','🎊','⭐','💫'].map((e,i) => (
          <span key={i} className="confetti-piece" style={{ '--delay': `${i * 0.12}s`, '--x': `${(i * 37) % 100}%` }}>{e}</span>
        ))}
      </div>

      <div className="confirm-screen__card">
        {/* Success badge */}
        <div className="confirm-screen__badge">
          <div className="confirm-screen__check">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h2 className="confirm-screen__title">Order Placed!</h2>
          <p className="confirm-screen__sub">
            Thank you for shopping with BLOWMAGGY. Your demo order is confirmed.
          </p>
        </div>

        {/* Order ID */}
        <div className="confirm-screen__id-box">
          <span className="text-xs text-muted fw-600" style={{ textTransform:'uppercase', letterSpacing:'.1em' }}>Order ID</span>
          <div className="confirm-screen__id">{order.id}</div>
          <div className="text-xs text-muted">{new Date(order.date).toLocaleString('en-IN', { dateStyle:'long', timeStyle:'short' })}</div>
        </div>

        {/* Demo payment banner */}
        <div className="confirm-screen__demo-notice">
          <span>🎯</span>
          <div>
            <div className="fw-700 text-sm">Demo Payment — No real transaction</div>
            <div className="text-xs" style={{ color:'rgba(255,255,255,.75)' }}>
              Payment via {order.payment?.method?.toUpperCase()} · Status: <strong>Simulated Success</strong>
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="confirm-screen__items">
          <h4 className="text-sm fw-700" style={{ marginBottom:8 }}>Items ordered:</h4>
          {order.items.map(item => {
            const dept = getDepartment(item.product.department);
            const variants = item.variantKey !== 'default'
              ? item.variantKey.split('|').map(v => v.split(':')[1]).join(', ')
              : '';
            return (
              <div key={item.itemId} className="confirm-item">
                <img src={item.product.image} alt={item.product.name} className="confirm-item__img" />
                <div className="confirm-item__info">
                  <div className="fw-600 text-sm">{item.product.name}</div>
                  <div className="text-xs" style={{ color: dept?.color }}>{dept?.icon} {dept?.name}</div>
                  {variants && <div className="text-xs text-muted">{variants}</div>}
                </div>
                <div className="confirm-item__price">
                  <div className="fw-700 text-sm">{formatPrice(item.product.price * item.qty)}</div>
                  <div className="text-xs text-muted">Qty {item.qty}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Price summary */}
        <div className="confirm-screen__totals">
          <div className="confirm-total-row"><span>Subtotal</span><span>{formatPrice(order.subtotal)}</span></div>
          <div className="confirm-total-row"><span>Delivery</span><span className={order.shipping === 0 ? 'free-tag' : ''}>{order.shipping === 0 ? 'FREE' : formatPrice(order.shipping)}</span></div>
          {order.discount > 0 && (
            <div className="confirm-total-row" style={{ color:'var(--success)' }}>
              <span>Coupon discount</span><span>−{formatPrice(order.discount)}</span>
            </div>
          )}
          <hr className="divider" style={{ margin:'8px 0' }} />
          <div className="confirm-total-row confirm-total-row--total">
            <span>Total Paid</span><span>{formatPrice(order.total)}</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="confirm-screen__btns">
          <Link to="/orders" className="btn btn-primary btn-lg" id="view-order-btn">
            View My Orders
          </Link>
          <Link to="/" className="btn btn-secondary btn-lg" id="continue-shopping-confirm-btn">
            Continue Shopping
          </Link>
        </div>

        <p className="confirm-screen__disclaimer">
          This is a demo prototype built for Vibe Coding Competition 2026.
          No real payment has been processed. Order tracking is simulated.
        </p>
      </div>

      <style>{`
        .confirm-screen {
          position: relative; overflow: hidden;
          min-height: 60vh; padding: var(--space-12) var(--space-6);
          display: flex; justify-content: center; align-items: flex-start;
        }
        .confirm-screen__confetti {
          position: fixed; inset: 0; pointer-events: none; z-index: 0; overflow: hidden;
        }
        .confetti-piece {
          position: absolute; top: -40px; left: var(--x);
          font-size: 1.8rem;
          animation: fall 3s ease-in var(--delay) forwards;
          opacity: 0;
        }
        @keyframes fall {
          0%   { opacity:1; transform: translateY(0)   rotate(0deg); }
          100% { opacity:0; transform: translateY(110vh) rotate(720deg); }
        }
        .confirm-screen__card {
          position: relative; z-index: 1;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-8);
          box-shadow: var(--shadow-xl); max-width: 580px; width: 100%;
          display: flex; flex-direction: column; gap: var(--space-6);
        }
        .confirm-screen__badge {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; gap: var(--space-3);
        }
        .confirm-screen__check {
          width: 80px; height: 80px; border-radius: 50%;
          background: linear-gradient(135deg, #22C55E, #16A34A);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(34,197,94,.3);
          animation: pop-in 500ms cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        @keyframes pop-in {
          from { transform: scale(0); opacity:0; }
          to   { transform: scale(1); opacity:1; }
        }
        .confirm-screen__title { font-size: 2rem; margin: 0; }
        .confirm-screen__sub { color: var(--ink-muted); max-width: 340px; }
        .confirm-screen__id-box {
          text-align: center; padding: var(--space-4);
          background: var(--ivory); border-radius: var(--radius-lg);
          display: flex; flex-direction: column; gap: 4px;
        }
        .confirm-screen__id {
          font-family: 'Inter',sans-serif; font-size: 1.4rem; font-weight: 900;
          color: var(--ink); letter-spacing: 0.04em;
        }
        .confirm-screen__demo-notice {
          display: flex; align-items: center; gap: var(--space-4);
          padding: var(--space-4); border-radius: var(--radius-lg);
          background: linear-gradient(135deg,#7C3AED,#C026D3);
          color: white;
        }
        .confirm-screen__demo-notice span { font-size: 1.5rem; }
        .confirm-screen__items { display: flex; flex-direction: column; gap: var(--space-3); }
        .confirm-item {
          display: flex; align-items: center; gap: var(--space-3);
          padding: var(--space-3); background: var(--ivory); border-radius: var(--radius-md);
        }
        .confirm-item__img {
          width: 52px; height: 52px; object-fit: cover;
          border-radius: var(--radius-sm); flex-shrink: 0;
        }
        .confirm-item__info { flex: 1; }
        .confirm-item__price { text-align: right; flex-shrink: 0; }
        .confirm-screen__totals {
          background: var(--ivory); border-radius: var(--radius-lg); padding: var(--space-4);
        }
        .confirm-total-row {
          display: flex; justify-content: space-between;
          font-size: 0.875rem; color: var(--ink-muted); padding: 4px 0;
        }
        .confirm-total-row--total {
          font-size: 1.05rem; font-weight: 800; color: var(--ink);
          padding-top: var(--space-3);
        }
        .free-tag { color: var(--magenta); font-weight: 700; }
        .confirm-screen__btns {
          display: flex; flex-direction: column; gap: var(--space-3);
        }
        .confirm-screen__disclaimer {
          text-align: center; font-size: 0.72rem;
          color: var(--ink-light); line-height: 1.65;
          border-top: 1px solid var(--border); padding-top: var(--space-4);
        }
      `}</style>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   CHECKOUT PAGE
══════════════════════════════════════════════════════════ */
export default function Checkout() {
  const { cart, cartSubtotal, shipping, couponDiscount, cartTotal, appliedCoupon, placeOrder, toast } = useStore();
  const navigate  = useNavigate();
  const placingRef = useRef(false); // duplicate-click guard

  const [step,    setStep]    = useState(0); // 0=delivery 1=payment 2=review
  const [placing, setPlacing] = useState(false);
  const [placed,  setPlaced]  = useState(null); // confirmed order object
  const [errors,  setErrors]  = useState({});

  /* ── Form state ─────────────────────────────────────── */
  const [form, setForm] = useState({
    name:'', email:'', phone:'', line1:'', line2:'', city:'', state:'', pincode:'',
  });
  const [payMethod, setPayMethod] = useState('upi');
  const [upiId,     setUpiId]     = useState('');
  const [card,      setCard]      = useState({ number:'', name:'', expiry:'', cvv:'' });

  const setF = (key, val) => {
    setForm(f => ({ ...f, [key]: val }));
    setErrors(e => ({ ...e, [key]: '' }));
  };
  const setC = (key, val) => setCard(c => ({ ...c, [key]: val }));

  /* ── Validate delivery ──────────────────────────────── */
  const validateDelivery = () => {
    const fields = ['name','email','phone','line1','city','state','pincode'];
    const newErr = {};
    fields.forEach(k => { newErr[k] = VALIDATORS[k]?.(form[k]) || ''; });
    setErrors(newErr);
    return Object.values(newErr).every(e => !e);
  };

  /* ── Cart-empty guard ───────────────────────────────── */
  if (!cart.length && !placed) {
    return (
      <main className="container" style={{ padding:'var(--space-20) var(--space-6)', textAlign:'center' }}>
        <div style={{ fontSize:'4rem', marginBottom:'var(--space-5)' }}>🛒</div>
        <h2>Your cart is empty</h2>
        <p className="text-muted" style={{ marginBottom:'var(--space-7)' }}>Add items before proceeding to checkout.</p>
        <Link to="/" className="btn btn-primary btn-lg">Start Shopping →</Link>
      </main>
    );
  }

  /* ── Post-order confirmation ───────────────────────── */
  if (placed) return <OrderConfirmation order={placed} />;

  /* ── Place Order ───────────────────────────────────── */
  const handlePlaceOrder = useCallback(() => {
    // Duplicate-click guard
    if (placingRef.current) return;

    // Validate cart
    if (!cart.length) {
      toast('Your cart is empty — add products before ordering.', 'error', '✕');
      return;
    }

    // Check out-of-stock items
    const oos = cart.filter(i => i.product.stock === 0);
    if (oos.length) {
      toast(`${oos[0].product.name} is out of stock. Remove it to continue.`, 'error', '✕');
      return;
    }

    // Check qty > stock
    const overStock = cart.find(i => i.qty > (i.product.stock ?? Infinity));
    if (overStock) {
      toast(`Only ${overStock.product.stock} units of "${overStock.product.name}" available.`, 'warning', '⚠');
      return;
    }

    placingRef.current = true;
    setPlacing(true);

    // Simulate processing delay
    setTimeout(() => {
      const orderData = {
        id: 'BMG' + Date.now().toString(36).toUpperCase(),
        date: new Date().toISOString(),
        items: cart.map(i => ({ ...i })), // deep snapshot
        subtotal: cartSubtotal,
        shipping,
        discount: couponDiscount,
        total: cartTotal,
        coupon: appliedCoupon?.code || null,
        address: { ...form },
        payment: {
          method: payMethod,
          upiId:  payMethod === 'upi'  ? (upiId || 'demo@upi') : undefined,
          last4:  payMethod === 'card' ? card.number.replace(/\s/g,'').slice(-4) || '****' : undefined,
          status: 'Simulated Success (Demo)',
        },
        status: 'Confirmed',
        timeline: [
          { label: 'Order Placed',     done: true,  time: new Date().toLocaleString() },
          { label: 'Confirmed',        done: true,  time: new Date().toLocaleString() },
          { label: 'Processing',       done: false, time: '' },
          { label: 'Shipped',          done: false, time: '' },
          { label: 'Delivered',        done: false, time: '' },
        ],
      };

      placeOrder(
        { subtotal: cartSubtotal, shipping, discount: couponDiscount, total: cartTotal },
        form,
        orderData.payment,
        orderData // pass full order so context stores it
      );

      setPlaced(orderData);
      setPlacing(false);
      // don't reset placingRef — order has been placed, prevent any retry
    }, 2200);
  }, [cart, cartSubtotal, shipping, couponDiscount, cartTotal, appliedCoupon, form, payMethod, upiId, card, placeOrder, toast]);

  return (
    <main className="container" style={{ padding:'var(--space-8) var(--space-6) var(--space-16)' }}>
      <div style={{ marginBottom:'var(--space-8)' }}>
        <h1>Checkout</h1>
        <p className="text-muted text-sm" style={{ marginTop:4 }}>
          {cart.reduce((s,i) => s+i.qty, 0)} items · Demo checkout — no real payment will be processed
        </p>
      </div>

      <StepBar step={step} />

      <div className="co-layout">
        {/* ── LEFT PANEL ──────────────────────── */}
        <div className="co-main">

          {/* ─── STEP 0: Delivery ───────────────── */}
          {step === 0 && (
            <div className="co-card" id="delivery-form">
              <h3 className="co-card__title">📍 Delivery Details</h3>

              <div className="form-row-2">
                <Field id="name"  label="Full Name"     value={form.name}  onChange={v => setF('name',v)}  error={errors.name}  placeholder="Priya Sharma" />
                <Field id="phone" label="Mobile Number" type="tel" value={form.phone} onChange={v => setF('phone',v)} error={errors.phone} placeholder="10-digit number" maxLength={10} />
              </div>
              <Field id="email" label="Email Address" type="email" value={form.email} onChange={v => setF('email',v)} error={errors.email} placeholder="you@example.com" />
              <Field id="line1" label="Address Line 1" value={form.line1} onChange={v => setF('line1',v)} error={errors.line1} placeholder="Flat / House no., Street, Colony" />
              <Field id="line2" label="Address Line 2" value={form.line2} onChange={v => setF('line2',v)} error="" placeholder="Landmark, Area (optional)" required={false} />

              <div className="form-row-3">
                <Field id="city"    label="City"    value={form.city}    onChange={v => setF('city',v)}    error={errors.city}    placeholder="Mumbai" />
                <div className="form-field">
                  <label className="label" htmlFor="state">State <span style={{color:'var(--magenta)'}}>*</span></label>
                  <select
                    id="state"
                    className={`input ${errors.state ? 'input--error' : ''}`}
                    value={form.state}
                    onChange={e => setF('state', e.target.value)}
                  >
                    <option value="">Select state</option>
                    {INDIA_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.state && <span className="field-error">{errors.state}</span>}
                </div>
                <Field id="pincode" label="PIN Code" type="tel" value={form.pincode} onChange={v => setF('pincode',v)} error={errors.pincode} placeholder="400001" maxLength={6} />
              </div>

              <button
                id="continue-to-payment-btn"
                className="btn btn-primary btn-lg"
                onClick={() => { if (validateDelivery()) setStep(1); else toast('Please fix the highlighted fields.', 'error', '✕'); }}
              >
                Continue to Payment →
              </button>
            </div>
          )}

          {/* ─── STEP 1: Payment ─────────────────── */}
          {step === 1 && (
            <div className="co-card" id="payment-form">
              <h3 className="co-card__title">💳 Payment Method</h3>

              <div className="demo-banner">
                <span>🎯</span>
                <div>
                  <div className="fw-700 text-sm">Demo Mode — Simulated Payments Only</div>
                  <div className="text-xs" style={{ color:'rgba(255,255,255,.75)', marginTop:2 }}>
                    No real card numbers, UPI PINs, or banking credentials are collected or processed.
                  </div>
                </div>
              </div>

              <div className="pay-methods">
                {[
                  { id:'upi',         icon:'📱', label:'UPI',              sub:'Google Pay · PhonePe · BHIM · Paytm' },
                  { id:'card',        icon:'💳', label:'Debit / Credit Card', sub:'Visa · Mastercard · Rupay · Amex' },
                  { id:'netbanking',  icon:'🏦', label:'Net Banking',        sub:'All major Indian banks' },
                  { id:'cod',         icon:'💵', label:'Cash on Delivery',   sub:'Pay when your order arrives' },
                ].map(m => (
                  <label key={m.id} className={`pay-method ${payMethod === m.id ? 'active' : ''}`} id={`pay-${m.id}`}>
                    <input type="radio" name="payMethod" value={m.id} checked={payMethod === m.id} onChange={() => setPayMethod(m.id)} />
                    <span className="pay-method__icon">{m.icon}</span>
                    <div className="pay-method__info">
                      <div className="pay-method__label">{m.label}</div>
                      <div className="pay-method__sub">{m.sub}</div>
                    </div>
                    {payMethod === m.id && <span className="pay-method__check">✓</span>}
                  </label>
                ))}
              </div>

              {/* UPI demo input */}
              {payMethod === 'upi' && (
                <div className="pay-detail-box">
                  <div className="form-field">
                    <label className="label" htmlFor="upi-id">UPI ID (demo)</label>
                    <input id="upi-id" type="text" className="input" value={upiId} onChange={e => setUpiId(e.target.value)} placeholder="yourname@upi (demo)" />
                  </div>
                  <p className="pay-detail-note">Any value is accepted in demo mode. No real UPI transaction occurs.</p>
                </div>
              )}

              {/* Card demo inputs */}
              {payMethod === 'card' && (
                <div className="pay-detail-box">
                  <div className="card-demo-warning">
                    ⚠️ <strong>Demo only</strong> — Do NOT enter real card details. Any digits are accepted for simulation.
                  </div>
                  <div className="form-field">
                    <label className="label" htmlFor="card-num">Card Number (demo)</label>
                    <input id="card-num" type="text" className="input" value={card.number} maxLength={19}
                      onChange={e => setC('number', e.target.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim())}
                      placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="form-field">
                    <label className="label" htmlFor="card-name">Cardholder Name (demo)</label>
                    <input id="card-name" type="text" className="input" value={card.name} onChange={e => setC('name',e.target.value)} placeholder="Name on card" />
                  </div>
                  <div className="form-row-2">
                    <div className="form-field">
                      <label className="label" htmlFor="card-exp">Expiry (demo)</label>
                      <input id="card-exp" type="text" className="input" value={card.expiry} maxLength={5}
                        onChange={e => setC('expiry',e.target.value)} placeholder="MM/YY" />
                    </div>
                    <div className="form-field">
                      <label className="label" htmlFor="card-cvv">CVV (demo)</label>
                      <input id="card-cvv" type="password" className="input" value={card.cvv} maxLength={4}
                        onChange={e => setC('cvv',e.target.value)} placeholder="•••" />
                    </div>
                  </div>
                </div>
              )}

              {payMethod === 'netbanking' && (
                <div className="pay-detail-box">
                  <p className="pay-detail-note">Net banking redirect is simulated. No actual bank login page is shown.</p>
                </div>
              )}

              {payMethod === 'cod' && (
                <div className="pay-detail-box">
                  <p className="pay-detail-note">Pay in cash when your order is delivered. Applicable for all pin codes in demo mode.</p>
                </div>
              )}

              <div className="co-card__btns">
                <button className="btn btn-secondary" onClick={() => setStep(0)}>← Back</button>
                <button id="continue-to-review-btn" className="btn btn-primary btn-lg" onClick={() => setStep(2)}>
                  Review Order →
                </button>
              </div>
            </div>
          )}

          {/* ─── STEP 2: Review ──────────────────── */}
          {step === 2 && (
            <div className="co-card" id="review-section">
              <h3 className="co-card__title">📋 Review Your Order</h3>

              {/* Address summary */}
              <div className="review-block">
                <div className="review-block__head">
                  <h4>📍 Delivery Address</h4>
                  <button className="btn btn-ghost btn-sm" onClick={() => setStep(0)}>Edit</button>
                </div>
                <p className="text-sm fw-600">{form.name}</p>
                <p className="text-sm text-muted">{form.phone} · {form.email}</p>
                <p className="text-sm text-muted">
                  {[form.line1, form.line2, form.city, form.state, form.pincode].filter(Boolean).join(', ')}
                </p>
              </div>

              {/* Payment summary */}
              <div className="review-block">
                <div className="review-block__head">
                  <h4>💳 Payment</h4>
                  <button className="btn btn-ghost btn-sm" onClick={() => setStep(1)}>Edit</button>
                </div>
                <p className="text-sm fw-600">
                  {payMethod === 'upi'        && `UPI — ${upiId || 'demo@upi'}`}
                  {payMethod === 'card'       && `Card ****${card.number.replace(/\s/g,'').slice(-4) || '0000'}`}
                  {payMethod === 'netbanking' && 'Net Banking (simulated)'}
                  {payMethod === 'cod'        && 'Cash on Delivery'}
                </p>
                <p className="text-xs" style={{ color:'var(--warning)', marginTop:4, fontWeight:600 }}>
                  🎯 Demo Mode — No real payment will occur
                </p>
              </div>

              {/* Items */}
              <div className="review-block">
                <h4 style={{ marginBottom:10 }}>🛍️ Items ({cart.reduce((s,i)=>s+i.qty,0)})</h4>
                {cart.map(item => {
                  const dept = getDepartment(item.product.department);
                  const variants = item.variantKey !== 'default'
                    ? item.variantKey.split('|').map(v=>v.split(':')[1]).join(', ') : '';
                  return (
                    <div key={item.itemId} className="review-item">
                      <img src={item.product.image} alt={item.product.name} className="review-item__img" />
                      <div className="review-item__info">
                        <div className="fw-600 text-sm">{item.product.name}</div>
                        <div className="text-xs" style={{ color: dept?.color }}>{dept?.icon} {dept?.name}</div>
                        {variants && <div className="text-xs text-muted">{variants}</div>}
                        <div className="text-xs text-muted">Qty: {item.qty}</div>
                      </div>
                      <div className="fw-700 text-sm">{formatPrice(item.product.price * item.qty)}</div>
                    </div>
                  );
                })}
              </div>

              {/* Stock check warnings */}
              {cart.some(i => i.qty > (i.product.stock ?? Infinity)) && (
                <div className="co-stock-warning">
                  ⚠️ Some items exceed available stock. Quantities will be auto-adjusted.
                </div>
              )}

              <div className="co-card__btns">
                <button className="btn btn-secondary" onClick={() => setStep(1)} disabled={placing}>← Back</button>
                <button
                  id="place-order-btn"
                  className="btn btn-primary btn-lg"
                  onClick={handlePlaceOrder}
                  disabled={placing}
                  style={{ minWidth: 200, position:'relative' }}
                >
                  {placing ? (
                    <span className="placing-spinner">
                      <span className="spinner-dot" /><span className="spinner-dot" /><span className="spinner-dot" />
                      Placing Order…
                    </span>
                  ) : (
                    `✓ Place Order · ${formatPrice(cartTotal)}`
                  )}
                </button>
              </div>

              <p className="co-disclaimer">
                By placing this order you acknowledge this is a demo prototype with no real financial transaction.
              </p>
            </div>
          )}
        </div>

        {/* ── RIGHT: Mini Order Summary ──────────── */}
        <aside className="co-summary">
          <h3 className="co-summary__title">Order Summary</h3>

          {/* Items */}
          <div className="co-summary__items">
            {cart.map(item => (
              <div key={item.itemId} className="co-summary__item">
                <div className="co-summary__item-img-wrap">
                  <img src={item.product.image} alt={item.product.name} />
                  <span className="co-summary__qty-badge">{item.qty}</span>
                </div>
                <div className="co-summary__item-name text-sm fw-600">{item.product.name}</div>
                <div className="co-summary__item-price text-sm fw-700 text-muted">{formatPrice(item.product.price * item.qty)}</div>
              </div>
            ))}
          </div>

          <hr className="divider" />

          {/* Totals */}
          <div className="co-summary__rows">
            <div className="co-summary__row">
              <span>Subtotal</span><span>{formatPrice(cartSubtotal)}</span>
            </div>
            <div className="co-summary__row">
              <span>Delivery</span>
              <span className={shipping===0?'free-tag':''}>{shipping===0?'FREE':formatPrice(shipping)}</span>
            </div>
            {couponDiscount > 0 && (
              <div className="co-summary__row" style={{ color:'var(--success)' }}>
                <span>Coupon ({appliedCoupon?.code})</span>
                <span>−{formatPrice(couponDiscount)}</span>
              </div>
            )}
            <hr className="divider" style={{ margin:'8px 0' }} />
            <div className="co-summary__row co-summary__row--total">
              <span>Total</span><span>{formatPrice(cartTotal)}</span>
            </div>
          </div>

          {couponDiscount > 0 && (
            <div className="co-summary__saved">🎉 Saving {formatPrice(couponDiscount)}</div>
          )}
        </aside>
      </div>

      {/* ── Global styles ─────────────────────── */}
      <style>{`
        /* Step bar */
        .step-bar {
          display: flex; align-items: center; margin-bottom: var(--space-10);
        }
        .step-node { display: flex; flex-direction: column; align-items: center; gap: 6px; flex-shrink: 0; }
        .step-node__circle {
          width: 38px; height: 38px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.88rem; font-weight: 700;
          transition: all 300ms var(--ease);
        }
        .step-node.pending .step-node__circle { background: var(--ivory-dark); color: var(--ink-muted); border: 2px solid var(--border); }
        .step-node.active  .step-node__circle { background: linear-gradient(135deg,var(--magenta),var(--coral)); color: white; box-shadow: var(--shadow-glow); }
        .step-node.done    .step-node__circle { background: #22C55E; color: white; }
        .step-node__label { font-size: 0.72rem; font-weight: 700; color: var(--ink-muted); white-space: nowrap; }
        .step-node.active .step-node__label { color: var(--magenta); }
        .step-node.done   .step-node__label { color: #16A34A; }
        .step-connector {
          flex: 1; height: 2px; background: var(--border);
          margin: 0 8px; margin-bottom: 22px;
          transition: background 300ms var(--ease);
        }
        .step-connector.done { background: #22C55E; }

        /* Layout */
        .co-layout { display: grid; grid-template-columns: 1fr 340px; gap: var(--space-8); align-items: start; }
        .co-main { display: flex; flex-direction: column; gap: var(--space-6); }

        /* Card */
        .co-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-8);
          display: flex; flex-direction: column; gap: var(--space-5);
          box-shadow: var(--shadow-sm);
          animation: fadeUp 250ms var(--ease);
        }
        @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .co-card__title { font-family:'Inter',sans-serif; font-size:1.1rem; font-weight:800; }
        .co-card__btns { display:flex; gap:var(--space-3); align-items:center; margin-top:var(--space-2); }

        /* Form fields */
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
        .form-row-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: var(--space-4); }
        .form-field { display: flex; flex-direction: column; gap: var(--space-2); }
        .input--error { border-color: var(--error) !important; }
        .input--error:focus { box-shadow: 0 0 0 3px rgba(220,38,38,.18) !important; }
        .field-error { font-size: 0.72rem; color: var(--error); font-weight: 600; margin-top: 2px; }

        /* Demo banner */
        .demo-banner {
          display: flex; align-items: center; gap: var(--space-4);
          padding: var(--space-4); border-radius: var(--radius-lg);
          background: linear-gradient(135deg,#7C3AED,#C026D3); color: white;
        }
        .demo-banner span { font-size: 1.4rem; }
        .card-demo-warning {
          padding: var(--space-3) var(--space-4);
          background: #FEF3C7; border: 1px solid #FDE68A;
          border-radius: var(--radius-md); font-size: 0.82rem; color: #92400E;
        }

        /* Pay methods */
        .pay-methods { display: flex; flex-direction: column; gap: var(--space-3); }
        .pay-method {
          display: flex; align-items: center; gap: var(--space-4);
          padding: var(--space-4); border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); cursor: pointer;
          transition: all var(--duration) var(--ease);
        }
        .pay-method:hover { border-color: var(--magenta); background: var(--ivory); }
        .pay-method.active { border-color: var(--magenta); background: #FDE8F3; }
        .pay-method input { accent-color: var(--magenta); }
        .pay-method__icon { font-size: 1.5rem; flex-shrink: 0; }
        .pay-method__info { flex: 1; }
        .pay-method__label { font-size: 0.9rem; font-weight: 700; color: var(--ink); }
        .pay-method__sub   { font-size: 0.72rem; color: var(--ink-muted); }
        .pay-method__check { color: #22C55E; font-weight: 800; font-size: 1.1rem; }

        .pay-detail-box {
          padding: var(--space-5); background: var(--ivory);
          border-radius: var(--radius-lg); display: flex; flex-direction: column; gap: var(--space-4);
        }
        .pay-detail-note { font-size: 0.78rem; color: var(--ink-muted); font-style: italic; }

        /* Review */
        .review-block {
          background: var(--ivory); border-radius: var(--radius-lg); padding: var(--space-5);
          display: flex; flex-direction: column; gap: 5px;
        }
        .review-block__head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
        .review-block__head h4 { font-family:'Inter',sans-serif; font-size:0.9rem; font-weight:800; }
        .review-item { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); background: var(--surface); border-radius: var(--radius-md); margin-top: var(--space-2); }
        .review-item__img { width: 48px; height: 48px; object-fit: cover; border-radius: var(--radius-sm); flex-shrink: 0; }
        .review-item__info { flex: 1; display: flex; flex-direction: column; gap: 2px; }

        .co-stock-warning {
          padding: var(--space-3) var(--space-4); background: #FEF3C7;
          border: 1px solid #FDE68A; border-radius: var(--radius-md);
          font-size: 0.82rem; color: #92400E; font-weight: 600;
        }
        .co-disclaimer {
          font-size: 0.72rem; color: var(--ink-light); text-align: center; line-height: 1.65;
          border-top: 1px solid var(--border); padding-top: var(--space-4);
        }

        /* Spinner */
        .placing-spinner { display: flex; align-items: center; gap: 8px; }
        .spinner-dot {
          width: 7px; height: 7px; border-radius: 50%; background: white;
          animation: dot-bounce 1.2s ease-in-out infinite;
        }
        .spinner-dot:nth-child(1) { animation-delay: 0s; }
        .spinner-dot:nth-child(2) { animation-delay: .2s; }
        .spinner-dot:nth-child(3) { animation-delay: .4s; }
        @keyframes dot-bounce { 0%,80%,100% { transform:scale(.6); opacity:.4; } 40% { transform:scale(1); opacity:1; } }

        /* Summary */
        .co-summary {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-6);
          box-shadow: var(--shadow-md); position: sticky; top: 88px;
          display: flex; flex-direction: column; gap: var(--space-4);
        }
        .co-summary__title { font-family:'Inter',sans-serif; font-size:1rem; font-weight:800; }
        .co-summary__items { display: flex; flex-direction: column; gap: var(--space-3); max-height: 280px; overflow-y: auto; }
        .co-summary__item { display: flex; align-items: center; gap: var(--space-3); }
        .co-summary__item-img-wrap { position: relative; flex-shrink: 0; }
        .co-summary__item-img-wrap img { width: 46px; height: 46px; object-fit: cover; border-radius: var(--radius-sm); }
        .co-summary__qty-badge {
          position: absolute; top: -5px; right: -5px;
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--ink); color: white;
          font-size: 0.62rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid white;
        }
        .co-summary__item-name { flex: 1; }
        .co-summary__rows { display: flex; flex-direction: column; gap: var(--space-3); }
        .co-summary__row {
          display: flex; justify-content: space-between;
          font-size: 0.875rem; color: var(--ink-muted);
        }
        .co-summary__row--total { font-size: 1rem; font-weight: 800; color: var(--ink); }
        .co-summary__saved {
          padding: 7px 12px; background: #DCFCE7; border-radius: var(--radius-md);
          font-size: 0.78rem; font-weight: 700; color: var(--success); text-align: center;
        }
        .free-tag { color: var(--magenta); font-weight: 700; }

        @media (max-width: 900px) {
          .co-layout { grid-template-columns: 1fr; }
          .co-summary { position: static; }
          .form-row-2, .form-row-3 { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
