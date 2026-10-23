import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { getDepartment, formatPrice } from '../data/products';

/* ─── Status colours ──────────────────────────────────── */
const STATUS = {
  Confirmed:        { color: '#7C3AED', bg: '#EDE9FF' },
  Processing:       { color: '#D97706', bg: '#FEF3C7' },
  Shipped:          { color: '#0284C7', bg: '#E0F2FE' },
  'Out for Delivery':{ color: '#059669', bg: '#DCFCE7' },
  Delivered:        { color: '#16A34A', bg: '#DCFCE7' },
  Cancelled:        { color: '#DC2626', bg: '#FEE2E2' },
};

/* ─── Order Timeline ──────────────────────────────────── */
function Timeline({ steps }) {
  return (
    <div className="timeline">
      {steps.map((s, i) => (
        <div key={i} className={`tl-step ${s.done ? 'done' : i === steps.findIndex(x => !x.done) ? 'current' : 'pending'}`}>
          <div className="tl-step__rail">
            <div className="tl-step__dot">
              {s.done && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </div>
            {i < steps.length - 1 && <div className="tl-step__line" />}
          </div>
          <div className="tl-step__content">
            <div className="tl-step__label">{s.label}</div>
            {s.done && s.time && (
              <div className="tl-step__time">{s.time}</div>
            )}
            {!s.done && i === steps.findIndex(x => !x.done) && (
              <div className="tl-step__eta">⏱ In progress (demo tracking)</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Order Detail ────────────────────────────────────── */
function OrderDetail({ order, onBack }) {
  const statusStyle = STATUS[order.status] || STATUS.Confirmed;
  const depts = [...new Set(order.items.map(i => i.product.department))];

  return (
    <div className="od-page" id={`order-detail-${order.id}`}>
      {/* Back + ID */}
      <div className="od-page__top">
        <button className="btn btn-ghost" onClick={onBack} id="back-to-orders-btn">
          ← All Orders
        </button>
        <div
          className="order-status-badge"
          style={{ background: statusStyle.bg, color: statusStyle.color }}
        >
          {order.status}
        </div>
      </div>

      <div className="od-grid">
        {/* LEFT */}
        <div className="od-left">
          {/* Order meta card */}
          <div className="od-card">
            <div className="od-card__row-2">
              <div>
                <div className="text-xs text-muted fw-600" style={{ textTransform:'uppercase', letterSpacing:'.08em', marginBottom:4 }}>Order ID</div>
                <div className="od-order-id">{order.id}</div>
                <div className="text-xs text-muted" style={{ marginTop:4 }}>
                  {new Date(order.date).toLocaleString('en-IN', { dateStyle:'long', timeStyle:'short' })}
                </div>
              </div>
              <div style={{ textAlign:'right' }}>
                <div className="text-xs text-muted fw-600" style={{ textTransform:'uppercase', letterSpacing:'.08em', marginBottom:4 }}>Total Paid</div>
                <div style={{ fontSize:'1.4rem', fontWeight:900, fontFamily:"'Inter',sans-serif", color:'var(--ink)' }}>
                  {formatPrice(order.total)}
                </div>
                {order.coupon && (
                  <div className="text-xs" style={{ color:'var(--success)', fontWeight:700, marginTop:2 }}>
                    🏷️ {order.coupon} applied
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Demo tracking notice */}
          <div className="demo-track-banner">
            <span>📡</span>
            <div>
              <div className="fw-700 text-sm">Demo Order Tracking</div>
              <div className="text-xs" style={{ color:'rgba(255,255,255,.75)', marginTop:2 }}>
                Tracking is simulated for this prototype. Real delivery does not occur.
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="od-card">
            <h4 className="od-card__title">📍 Delivery Status</h4>
            <Timeline steps={order.timeline || []} />
          </div>

          {/* Items */}
          <div className="od-card">
            <h4 className="od-card__title">
              🛍️ Items ({order.items.reduce((s,i)=>s+i.qty,0)})
            </h4>
            {order.items.map(item => {
              const dept = getDepartment(item.product.department);
              const variants = item.variantKey !== 'default'
                ? item.variantKey.split('|').map(v => {
                    const [k, val] = v.split(':');
                    return `${k}: ${val}`;
                  }).join(' · ')
                : '';
              return (
                <div key={item.itemId} className="od-item">
                  <img src={item.product.image} alt={item.product.name} className="od-item__img" />
                  <div className="od-item__info">
                    <div className="fw-700 text-sm">{item.product.name}</div>
                    {item.product.brand && <div className="text-xs text-muted">{item.product.brand}</div>}
                    <div className="text-xs" style={{ color:dept?.color }}>{dept?.icon} {dept?.name}</div>
                    {variants && <div className="text-xs text-muted">{variants}</div>}
                    <div className="text-xs text-muted">Qty: {item.qty}</div>
                  </div>
                  <div className="od-item__price">
                    <div className="fw-800 text-sm">{formatPrice(item.product.price * item.qty)}</div>
                    <div className="text-xs text-muted">{formatPrice(item.product.price)} each</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="od-right">
          {/* Price breakdown */}
          <div className="od-card">
            <h4 className="od-card__title">💰 Price Breakdown</h4>
            <div className="od-price-rows">
              <div className="od-price-row"><span>Subtotal</span><span>{formatPrice(order.subtotal || order.total)}</span></div>
              <div className="od-price-row">
                <span>Delivery</span>
                <span className={order.shipping === 0 ? 'free-tag' : ''}>
                  {order.shipping === 0 ? 'FREE' : formatPrice(order.shipping)}
                </span>
              </div>
              {order.discount > 0 && (
                <div className="od-price-row" style={{ color:'var(--success)' }}>
                  <span>Coupon Discount</span><span>−{formatPrice(order.discount)}</span>
                </div>
              )}
              <hr className="divider" style={{ margin:'8px 0' }} />
              <div className="od-price-row od-price-row--total">
                <span>Total</span><span>{formatPrice(order.total)}</span>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="od-card">
            <h4 className="od-card__title">💳 Payment</h4>
            <div className="od-payment">
              <div className="od-payment__method">
                {order.payment?.method === 'upi'        && '📱 UPI'}
                {order.payment?.method === 'card'       && '💳 Debit/Credit Card'}
                {order.payment?.method === 'netbanking' && '🏦 Net Banking'}
                {order.payment?.method === 'cod'        && '💵 Cash on Delivery'}
                {!order.payment?.method                 && '💳 Demo Payment'}
              </div>
              {order.payment?.upiId  && <div className="text-sm text-muted">{order.payment.upiId}</div>}
              {order.payment?.last4  && <div className="text-sm text-muted">Card ****{order.payment.last4}</div>}
              <div className="od-payment__status">
                <span className="od-payment__dot" />
                {order.payment?.status || 'Simulated Success (Demo)'}
              </div>
              <div className="od-payment__note">
                🎯 Demo mode — No real payment was processed
              </div>
            </div>
          </div>

          {/* Address */}
          {order.address && (
            <div className="od-card">
              <h4 className="od-card__title">📍 Delivery Address</h4>
              <div className="od-address">
                <div className="fw-600 text-sm">{order.address.name}</div>
                <div className="text-sm text-muted">{order.address.phone}{order.address.email ? ` · ${order.address.email}` : ''}</div>
                <div className="text-sm text-muted" style={{ marginTop:4 }}>
                  {[order.address.line1, order.address.line2, order.address.city, order.address.state, order.address.pincode].filter(Boolean).join(', ')}
                </div>
              </div>
            </div>
          )}

          {/* Departments in this order */}
          <div className="od-card">
            <h4 className="od-card__title">🏬 Departments</h4>
            <div className="od-depts">
              {depts.map(dId => {
                const d = getDepartment(dId);
                return (
                  <span key={dId} className="od-dept-chip" style={{ background:d?.color+'15', color:d?.color }}>
                    {d?.icon} {d?.name}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="od-actions">
            <Link to="/" className="btn btn-primary w-full" id="od-continue-shopping-btn">
              Continue Shopping →
            </Link>
            <button className="btn btn-secondary w-full" onClick={onBack}>
              ← All Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ORDERS PAGE
═══════════════════════════════════════════════════════════ */
export default function Orders() {
  const { orders } = useStore();
  const [selectedId, setSelectedId] = useState(null);

  const selectedOrder = selectedId ? orders.find(o => o.id === selectedId) : null;

  /* ── Empty state ──────────────────────────────────── */
  if (!orders.length) {
    return (
      <main className="container" style={{ padding:'var(--space-8) var(--space-6) var(--space-16)' }}>
        <div className="orders-empty">
          <div className="orders-empty__icon">📦</div>
          <h2>No orders yet</h2>
          <p className="text-muted">
            Your order history will appear here after you complete a demo checkout.
          </p>
          <Link to="/" className="btn btn-primary btn-lg" id="orders-shop-btn">
            Start Shopping →
          </Link>
        </div>
        <style>{`
          .orders-empty {
            display: flex; flex-direction: column; align-items: center;
            text-align: center; padding: var(--space-20);
          }
          .orders-empty__icon { font-size: 5rem; margin-bottom: var(--space-5); animation: bob 3s ease-in-out infinite; }
          @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          .orders-empty h2 { margin-bottom: var(--space-3); }
          .orders-empty .text-muted { margin-bottom: var(--space-7); max-width: 360px; }
        `}</style>
      </main>
    );
  }

  /* ── Detail view ──────────────────────────────────── */
  if (selectedOrder) {
    return (
      <main className="container" style={{ padding:'var(--space-8) var(--space-6) var(--space-16)' }}>
        <OrderDetail order={selectedOrder} onBack={() => setSelectedId(null)} />
        <OrderStyles />
      </main>
    );
  }

  /* ── List view ────────────────────────────────────── */
  return (
    <main className="container" style={{ padding:'var(--space-8) var(--space-6) var(--space-16)' }}>
      <div style={{ marginBottom:'var(--space-8)' }}>
        <h1>My Orders</h1>
        <p className="text-muted text-sm" style={{ marginTop:4 }}>
          {orders.length} order{orders.length !== 1 ? 's' : ''} · All purchases are demo transactions
        </p>
      </div>

      <div className="orders-list">
        {orders.map(order => {
          const statusStyle = STATUS[order.status] || STATUS.Confirmed;
          const depts = [...new Set(order.items.map(i => i.product.department))];
          const totalItems = order.items.reduce((s,i)=>s+i.qty,0);

          return (
            <div
              key={order.id}
              className="order-card"
              onClick={() => setSelectedId(order.id)}
              id={`ordercard-${order.id}`}
              tabIndex={0}
              role="button"
              onKeyDown={e => e.key==='Enter' && setSelectedId(order.id)}
            >
              {/* Header row */}
              <div className="order-card__head">
                <div>
                  <div className="order-card__id">{order.id}</div>
                  <div className="text-xs text-muted" style={{ marginTop:2 }}>
                    {new Date(order.date).toLocaleDateString('en-IN', { day:'numeric', month:'long', year:'numeric' })}
                  </div>
                </div>
                <div className="order-card__right">
                  <span
                    className="order-status-badge"
                    style={{ background:statusStyle.bg, color:statusStyle.color }}
                  >
                    {order.status}
                  </span>
                  <div className="order-card__total">{formatPrice(order.total)}</div>
                </div>
              </div>

              {/* Items thumbnails */}
              <div className="order-card__thumbs">
                {order.items.slice(0,4).map(item => (
                  <img
                    key={item.itemId}
                    src={item.product.image}
                    alt={item.product.name}
                    className="order-card__thumb"
                    title={item.product.name}
                  />
                ))}
                {order.items.length > 4 && (
                  <div className="order-card__thumb-more">+{order.items.length - 4}</div>
                )}
              </div>

              {/* Footer */}
              <div className="order-card__foot">
                {/* Dept chips */}
                <div className="order-card__depts">
                  {depts.map(dId => {
                    const d = getDepartment(dId);
                    return (
                      <span key={dId} className="order-card__dept-chip" style={{ background:d?.color+'15', color:d?.color }}>
                        {d?.icon} {d?.name}
                      </span>
                    );
                  })}
                </div>
                {/* Meta */}
                <div className="order-card__meta">
                  <span className="text-xs text-muted">{totalItems} item{totalItems!==1?'s':''}</span>
                  {order.coupon && (
                    <span className="text-xs" style={{ color:'var(--success)', fontWeight:700 }}>🏷️ {order.coupon}</span>
                  )}
                  <span className="text-xs text-magenta fw-700">View Details →</span>
                </div>
              </div>

              {/* Payment row */}
              <div className="order-card__payment">
                <span className="text-xs text-muted">
                  {order.payment?.method === 'upi'        && '📱 UPI'}
                  {order.payment?.method === 'card'       && '💳 Card'}
                  {order.payment?.method === 'netbanking' && '🏦 Net Banking'}
                  {order.payment?.method === 'cod'        && '💵 Cash on Delivery'}
                  {!order.payment?.method                 && '💳 Demo Payment'}
                </span>
                <span className="text-xs" style={{ color:'#16A34A', fontWeight:700 }}>
                  ✓ {order.payment?.status || 'Simulated Success (Demo)'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <OrderStyles />
    </main>
  );
}

/* ── Shared styles component ────────────────────────── */
function OrderStyles() {
  return (
    <style>{`
      /* List */
      .orders-list { display: flex; flex-direction: column; gap: var(--space-4); }
      .order-card {
        background: var(--surface); border: 1px solid var(--border);
        border-radius: var(--radius-xl); padding: var(--space-5);
        cursor: pointer; display: flex; flex-direction: column; gap: var(--space-4);
        transition: all var(--duration) var(--ease);
      }
      .order-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); border-color: var(--magenta); }
      .order-card__head { display: flex; justify-content: space-between; align-items: flex-start; }
      .order-card__id   { font-family:'Inter',sans-serif; font-size:0.95rem; font-weight:800; color:var(--ink); letter-spacing:.02em; }
      .order-card__right { display:flex; flex-direction:column; align-items:flex-end; gap:5px; }
      .order-card__total { font-family:'Inter',sans-serif; font-size:1.1rem; font-weight:900; color:var(--ink); }

      .order-status-badge {
        padding: 3px 10px; border-radius: var(--radius-full);
        font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing:.04em;
      }

      .order-card__thumbs { display:flex; gap:var(--space-2); align-items:center; }
      .order-card__thumb {
        width: 56px; height: 56px; object-fit: cover;
        border-radius: var(--radius-md); border: 1px solid var(--border);
        transition: transform 200ms var(--ease);
      }
      .order-card:hover .order-card__thumb { transform: scale(1.05); }
      .order-card__thumb-more {
        width: 56px; height: 56px; border-radius: var(--radius-md);
        background: var(--ivory-dark); display:flex; align-items:center; justify-content:center;
        font-size:0.82rem; font-weight:700; color:var(--ink-muted);
      }
      .order-card__foot { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:var(--space-2); }
      .order-card__depts { display:flex; flex-wrap:wrap; gap:5px; }
      .order-card__dept-chip { padding:2px 8px; border-radius:var(--radius-full); font-size:0.68rem; font-weight:700; }
      .order-card__meta { display:flex; align-items:center; gap:var(--space-4); }
      .order-card__payment {
        display:flex; align-items:center; justify-content:space-between;
        padding:var(--space-2) var(--space-3);
        background:var(--ivory); border-radius:var(--radius-md);
      }

      /* Detail page */
      .od-page { display:flex; flex-direction:column; gap:var(--space-6); }
      .od-page__top { display:flex; align-items:center; justify-content:space-between; }

      .od-grid { display:grid; grid-template-columns:1fr 340px; gap:var(--space-8); align-items:start; }
      .od-left  { display:flex; flex-direction:column; gap:var(--space-5); }
      .od-right { display:flex; flex-direction:column; gap:var(--space-4); position:sticky; top:88px; }

      .od-card {
        background:var(--surface); border:1px solid var(--border);
        border-radius:var(--radius-xl); padding:var(--space-5);
        display:flex; flex-direction:column; gap:var(--space-4);
      }
      .od-card__title { font-family:'Inter',sans-serif; font-size:0.9rem; font-weight:800; }
      .od-card__row-2 { display:flex; justify-content:space-between; align-items:flex-start; }
      .od-order-id { font-family:'Inter',sans-serif; font-size:1.2rem; font-weight:900; color:var(--ink); letter-spacing:.04em; }

      /* Demo banner */
      .demo-track-banner {
        display:flex; align-items:center; gap:var(--space-4);
        padding:var(--space-4); border-radius:var(--radius-lg);
        background:linear-gradient(135deg,#0284C7,#0EA5E9); color:white;
      }
      .demo-track-banner span { font-size:1.4rem; }

      /* Timeline */
      .timeline { display:flex; flex-direction:column; }
      .tl-step { display:flex; gap:var(--space-4); }
      .tl-step__rail { display:flex; flex-direction:column; align-items:center; width:28px; flex-shrink:0; }
      .tl-step__dot {
        width:28px; height:28px; border-radius:50%; flex-shrink:0;
        display:flex; align-items:center; justify-content:center;
        transition:all 300ms var(--ease);
      }
      .tl-step.done    .tl-step__dot { background:#22C55E; box-shadow:0 0 0 4px #DCFCE7; }
      .tl-step.current .tl-step__dot { background:var(--magenta); box-shadow:var(--shadow-glow); animation:pulse-ring 2s infinite; }
      .tl-step.pending .tl-step__dot { background:var(--border); }
      @keyframes pulse-ring { 0%,100% { box-shadow:0 0 0 4px rgba(233,30,140,.15); } 50% { box-shadow:0 0 0 8px rgba(233,30,140,.05); } }
      .tl-step__line { flex:1; width:2px; background:var(--border); margin:4px 0; min-height:36px; transition:background 300ms var(--ease); }
      .tl-step.done .tl-step__line { background:#22C55E; }
      .tl-step__content { padding-bottom:var(--space-5); flex:1; }
      .tl-step__label { font-size:0.875rem; font-weight:700; color:var(--ink); }
      .tl-step.pending .tl-step__label { color:var(--ink-light); }
      .tl-step__time   { font-size:0.72rem; color:var(--ink-muted); margin-top:2px; }
      .tl-step__eta    { font-size:0.72rem; color:var(--magenta); margin-top:2px; font-weight:600; }

      /* Items */
      .od-item { display:flex; align-items:center; gap:var(--space-3); padding:var(--space-3); background:var(--ivory); border-radius:var(--radius-md); }
      .od-item__img { width:60px; height:60px; object-fit:cover; border-radius:var(--radius-sm); flex-shrink:0; }
      .od-item__info { flex:1; display:flex; flex-direction:column; gap:2px; }
      .od-item__price { text-align:right; flex-shrink:0; }

      /* Price rows */
      .od-price-rows { display:flex; flex-direction:column; gap:var(--space-3); }
      .od-price-row { display:flex; justify-content:space-between; font-size:0.875rem; color:var(--ink-muted); }
      .od-price-row--total { font-size:1.05rem; font-weight:800; color:var(--ink); }
      .free-tag { color:var(--magenta); font-weight:700; }

      /* Payment */
      .od-payment { display:flex; flex-direction:column; gap:5px; }
      .od-payment__method { font-size:0.9rem; font-weight:700; color:var(--ink); }
      .od-payment__status { display:flex; align-items:center; gap:7px; font-size:0.78rem; font-weight:600; color:#16A34A; margin-top:4px; }
      .od-payment__dot { width:8px; height:8px; border-radius:50%; background:#22C55E; flex-shrink:0; }
      .od-payment__note { font-size:0.72rem; color:var(--ink-light); font-style:italic; }

      /* Address */
      .od-address { display:flex; flex-direction:column; gap:3px; }

      /* Depts */
      .od-depts { display:flex; flex-wrap:wrap; gap:var(--space-2); }
      .od-dept-chip { padding:4px 12px; border-radius:var(--radius-full); font-size:0.78rem; font-weight:700; }

      /* Actions */
      .od-actions { display:flex; flex-direction:column; gap:var(--space-3); }

      @media (max-width:900px) {
        .od-grid { grid-template-columns:1fr; }
        .od-right { position:static; }
      }
    `}</style>
  );
}
