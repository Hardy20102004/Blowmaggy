import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { PRODUCTS, DEPARTMENTS, formatPrice } from '../data/products';

const ADMIN_TABS = [
  { id: 'Dashboard', icon: '📊' },
  { id: 'Products',  icon: '📦' },
  { id: 'Orders',    icon: '🧾' },
  { id: 'Inventory', icon: '🏭' },
];

const ORDER_STATUSES = ['Confirmed', 'Processing', 'Shipped', 'Delivered'];
const STATUS_TIMELINE = {
  'Processing': 'Processing',
  'Shipped':    'Shipped',
  'Delivered':  'Delivered',
};

/* ── Merge product with any admin overrides ─────────── */
function useEffectiveProducts() {
  const { productOverrides, deletedProductIds } = useStore();
  return useMemo(() =>
    PRODUCTS
      .filter(p => !deletedProductIds.includes(p.id))
      .map(p => ({ ...p, ...(productOverrides[p.id] || {}) })),
    [productOverrides, deletedProductIds]
  );
}

/* ── Stat Card ──────────────────────────────────────── */
function StatCard({ icon, label, value, sub, color }) {
  return (
    <div className="admin-stat">
      <div className="admin-stat__icon" style={{ background: color + '18', color }}>{icon}</div>
      <div>
        <div className="admin-stat__val">{value}</div>
        <div className="admin-stat__lbl">{label}</div>
        {sub && <div className="admin-stat__sub">{sub}</div>}
      </div>
    </div>
  );
}

/* ── Edit Product Modal ─────────────────────────────── */
function EditModal({ product, onSave, onClose }) {
  const [form, setForm] = useState({
    name:          product.name,
    price:         product.price,
    originalPrice: product.originalPrice || '',
    stock:         product.stock,
    badge:         product.badge || '',
    description:   product.description || '',
  });
  const setF = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSave = () => {
    const changes = {
      name:          form.name.trim() || product.name,
      price:         Math.max(0, Number(form.price) || product.price),
      originalPrice: form.originalPrice ? Number(form.originalPrice) : product.originalPrice,
      stock:         Math.max(0, Math.floor(Number(form.stock))),
      badge:         form.badge || null,
      description:   form.description.trim() || product.description,
    };
    onSave(changes);
  };

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" role="dialog" aria-modal="true" aria-label="Edit Product">
        <div className="modal-header">
          <div>
            <h3 className="modal-title">Edit Product</h3>
            <p className="text-xs text-muted" style={{ marginTop:3 }}>{product.id} · {product.category}</p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <div className="modal-body">
          <div className="modal-img-preview">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="modal-fields">
            <div className="mf-row">
              <div className="mf-field">
                <label className="label" htmlFor="edit-name">Product Name</label>
                <input id="edit-name" className="input" value={form.name} onChange={e => setF('name', e.target.value)} />
              </div>
            </div>
            <div className="mf-row-2">
              <div className="mf-field">
                <label className="label" htmlFor="edit-price">Price (₹)</label>
                <input id="edit-price" type="number" min="0" className="input" value={form.price} onChange={e => setF('price', e.target.value)} />
              </div>
              <div className="mf-field">
                <label className="label" htmlFor="edit-orig">Original Price (₹)</label>
                <input id="edit-orig" type="number" min="0" className="input" value={form.originalPrice} onChange={e => setF('originalPrice', e.target.value)} placeholder="Optional" />
              </div>
            </div>
            <div className="mf-row-2">
              <div className="mf-field">
                <label className="label" htmlFor="edit-stock">Stock Quantity</label>
                <input id="edit-stock" type="number" min="0" className="input" value={form.stock} onChange={e => setF('stock', e.target.value)} />
              </div>
              <div className="mf-field">
                <label className="label" htmlFor="edit-badge">Badge</label>
                <select id="edit-badge" className="input" value={form.badge} onChange={e => setF('badge', e.target.value)}>
                  <option value="">None</option>
                  <option value="Best Seller">Best Seller</option>
                  <option value="Sale">Sale</option>
                  <option value="Premium">Premium</option>
                  <option value="New">New</option>
                </select>
              </div>
            </div>
            <div className="mf-field">
              <label className="label" htmlFor="edit-desc">Description</label>
              <textarea id="edit-desc" className="input" rows={3} value={form.description} onChange={e => setF('description', e.target.value)} style={{ resize:'vertical' }} />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" id="edit-save-btn" onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   ADMIN PAGE
════════════════════════════════════════════════════════ */
export default function Admin() {
  const {
    orders,
    productOverrides, deletedProductIds,
    adminUpdateProduct, adminDeleteProduct, adminRestoreProduct, adminUpdateOrderStatus,
    toast,
  } = useStore();

  const products = useEffectiveProducts();

  const [tab,        setTab]        = useState('Dashboard');
  const [searchQ,    setSearchQ]    = useState('');
  const [deptFilter, setDeptFilter] = useState('all');
  const [editingProd,setEditingProd]= useState(null);
  const [stockEdits, setStockEdits] = useState({});  // {id: newQtyString}

  /* ── Derived stats ──────────────────────────────── */
  const totalRevenue = orders.reduce((s, o) => s + (o.total || 0), 0);
  const lowStockProds = products.filter(p => p.stock <= 20);

  /* ── Filtered products for table ──────────────────── */
  const filteredProducts = useMemo(() => {
    let list = products;
    if (deptFilter !== 'all') list = list.filter(p => p.department === deptFilter);
    if (searchQ.trim()) {
      const q = searchQ.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.brand?.toLowerCase().includes(q));
    }
    return list;
  }, [products, deptFilter, searchQ]);

  /* ── Stock bulk save ──────────────────────────────── */
  const handleStockSave = (pid) => {
    const val = parseInt(stockEdits[pid], 10);
    if (isNaN(val) || val < 0) {
      toast('Enter a valid non-negative stock value.', 'error', '✕');
      return;
    }
    adminUpdateProduct(pid, { stock: val });
    setStockEdits(e => { const n = { ...e }; delete n[pid]; return n; });
  };

  return (
    <main className="admin-page">

      {/* ── Sidebar ──────────────────────────────── */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">
          <div className="admin-logo">BLOW<span>/</span>MAGGY</div>
          <div className="admin-demo-tag">DEMO ADMIN</div>
        </div>
        <nav className="admin-sidebar__nav">
          {ADMIN_TABS.map(t => (
            <button
              key={t.id}
              id={`admin-nav-${t.id.toLowerCase()}`}
              className={`admin-nav-btn ${tab === t.id ? 'active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              <span>{t.icon}</span> {t.id}
              {t.id === 'Orders'    && orders.length > 0    && <span className="nav-badge">{orders.length}</span>}
              {t.id === 'Inventory' && lowStockProds.length > 0 && <span className="nav-badge nav-badge--warn">{lowStockProds.length}</span>}
            </button>
          ))}
        </nav>
        <div className="admin-sidebar__footer">
          <Link to="/" className="btn btn-ghost btn-sm w-full" style={{ color:'rgba(255,255,255,.55)', justifyContent:'flex-start' }}>
            ← Back to Store
          </Link>
          <p className="admin-sidebar__disc">
            Frontend demo — no server auth
          </p>
        </div>
      </aside>

      {/* ── Main area ────────────────────────────── */}
      <div className="admin-main">
        {/* Topbar */}
        <div className="admin-topbar">
          <div>
            <h2 className="admin-topbar__title">{tab}</h2>
            <div className="text-xs text-muted">{new Date().toLocaleDateString('en-IN', { weekday:'long', day:'numeric', month:'long', year:'numeric' })}</div>
          </div>
          <div className="admin-topbar__right">
            <div className="admin-demo-chip">🎯 DEMO ADMIN — Not production secure</div>
          </div>
        </div>

        <div className="admin-content">

          {/* ══ DASHBOARD ═══════════════════════════════ */}
          {tab === 'Dashboard' && (
            <>
              {/* Stats */}
              <div className="admin-stats">
                <StatCard icon="💰" label="Demo Revenue"  value={formatPrice(totalRevenue)} sub={`${orders.length} demo order${orders.length!==1?'s':''}`} color="var(--magenta)" />
                <StatCard icon="📦" label="Products"      value={products.length}  sub={`${deletedProductIds.length} removed`} color="#7C3AED" />
                <StatCard icon="🛒" label="Total Orders"  value={orders.length}    sub="Stored in localStorage" color="#059669" />
                <StatCard icon="⚠️" label="Low Stock"     value={lowStockProds.length} sub="≤20 units" color="#D97706" />
              </div>

              {/* Department breakdown */}
              <div className="admin-section">
                <div className="admin-section__head">
                  <h3 className="admin-section__title">Department Overview</h3>
                </div>
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead><tr><th>Department</th><th>Products</th><th>Low Stock</th><th>Avg Price</th><th>Action</th></tr></thead>
                    <tbody>
                      {DEPARTMENTS.map(d => {
                        const dp = products.filter(p => p.department === d.id);
                        const dLow = dp.filter(p => p.stock <= 20).length;
                        const avgP = dp.length ? Math.round(dp.reduce((s,p)=>s+p.price,0)/dp.length) : 0;
                        return (
                          <tr key={d.id}>
                            <td>
                              <span className="admin-dept-chip" style={{ background:d.color+'18', color:d.color }}>
                                {d.icon} {d.name}
                              </span>
                            </td>
                            <td className="fw-700">{dp.length}</td>
                            <td>{dLow > 0 ? <span className="badge badge-warning">{dLow} low</span> : <span className="badge badge-success">OK</span>}</td>
                            <td className="text-muted">{formatPrice(avgP)}</td>
                            <td>
                              <button className="btn btn-ghost btn-sm text-magenta"
                                onClick={() => { setDeptFilter(d.id); setTab('Products'); }}>
                                View →
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent orders */}
              {orders.length > 0 ? (
                <div className="admin-section">
                  <div className="admin-section__head">
                    <h3 className="admin-section__title">Recent Orders</h3>
                    <button className="btn btn-ghost btn-sm text-magenta" onClick={() => setTab('Orders')}>See All →</button>
                  </div>
                  <div className="admin-table-wrap">
                    <table className="admin-table">
                      <thead><tr><th>Order ID</th><th>Customer</th><th>Date</th><th>Items</th><th>Total</th><th>Status</th></tr></thead>
                      <tbody>
                        {orders.slice(0,5).map(o => (
                          <tr key={o.id}>
                            <td className="fw-700 text-sm" style={{ fontFamily:"'Inter',sans-serif" }}>{o.id}</td>
                            <td className="text-sm">{o.address?.name || '—'}</td>
                            <td className="text-sm text-muted">{new Date(o.date).toLocaleDateString()}</td>
                            <td className="text-sm">{o.items.reduce((s,i)=>s+i.qty,0)}</td>
                            <td className="fw-700 text-sm">{formatPrice(o.total)}</td>
                            <td><span className={`badge ${o.status==='Delivered'?'badge-success':o.status==='Shipped'?'badge-lavender':o.status==='Processing'?'badge-warning':'badge-magenta'}`}>{o.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="admin-empty">
                  <div style={{ fontSize:'3rem' }}>🧾</div>
                  <p>No orders yet. Place a demo order from the storefront.</p>
                  <Link to="/" className="btn btn-primary btn-sm">Go to Store →</Link>
                </div>
              )}
            </>
          )}

          {/* ══ PRODUCTS ════════════════════════════════ */}
          {tab === 'Products' && (
            <>
              <div className="admin-section">
                <div className="admin-section__head">
                  <h3 className="admin-section__title">Product Catalogue ({filteredProducts.length})</h3>
                </div>

                {/* Toolbar */}
                <div className="admin-toolbar">
                  <input
                    type="text"
                    className="input admin-search"
                    placeholder="Search by name or brand…"
                    value={searchQ}
                    onChange={e => setSearchQ(e.target.value)}
                    id="admin-product-search"
                  />
                  <select
                    className="input"
                    style={{ width:'auto', padding:'9px 14px' }}
                    value={deptFilter}
                    onChange={e => setDeptFilter(e.target.value)}
                    id="admin-dept-filter"
                  >
                    <option value="all">All Departments</option>
                    {DEPARTMENTS.map(d => <option key={d.id} value={d.id}>{d.icon} {d.name}</option>)}
                  </select>
                  {(searchQ || deptFilter !== 'all') && (
                    <button className="btn btn-ghost btn-sm" onClick={() => { setSearchQ(''); setDeptFilter('all'); }}>
                      Clear
                    </button>
                  )}
                </div>

                {/* Table */}
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Department</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.length === 0 && (
                        <tr><td colSpan="6" style={{ textAlign:'center', padding:'var(--space-8)', color:'var(--ink-muted)' }}>No products match your search.</td></tr>
                      )}
                      {filteredProducts.map(p => {
                        const d = DEPARTMENTS.find(d => d.id === p.department);
                        const isModified = !!productOverrides[p.id];
                        return (
                          <tr key={p.id}>
                            <td>
                              <div className="admin-product-cell">
                                <img src={p.image} alt={p.name} className="admin-product-img"
                                  onError={e => { e.target.src = `https://placehold.co/40x40/f5ede6/78716c?text=${p.name[0]}`; }} />
                                <div>
                                  <div className="fw-600 text-sm">{p.name}</div>
                                  <div className="text-xs text-muted">{p.brand} {isModified && <span style={{ color:'var(--warning)', fontWeight:700 }}> · edited</span>}</div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="admin-dept-chip" style={{ background:d?.color+'18', color:d?.color }}>
                                {d?.icon} {d?.name}
                              </span>
                            </td>
                            <td>
                              <div className="fw-700 text-sm">{formatPrice(p.price)}</div>
                              {p.originalPrice > p.price && (
                                <div className="text-xs text-muted line-through">{formatPrice(p.originalPrice)}</div>
                              )}
                            </td>
                            <td>
                              <span className={`badge ${p.stock === 0 ? 'badge-coral' : p.stock <= 20 ? 'badge-warning' : 'badge-success'}`}>
                                {p.stock === 0 ? 'OOS' : `${p.stock} units`}
                              </span>
                            </td>
                            <td>
                              {p.badge
                                ? <span className="badge badge-magenta">{p.badge}</span>
                                : <span className="text-xs text-muted">—</span>}
                            </td>
                            <td>
                              <div className="admin-row-actions">
                                <Link to={`/product/${p.id}`} target="_blank" className="btn btn-ghost btn-sm" title="View on storefront">👁</Link>
                                <button
                                  className="btn btn-ghost btn-sm"
                                  id={`edit-prod-${p.id}`}
                                  onClick={() => setEditingProd(p)}
                                  title="Edit product"
                                >✏️ Edit</button>
                                <button
                                  className="btn btn-ghost btn-sm"
                                  style={{ color:'var(--error)' }}
                                  id={`del-prod-${p.id}`}
                                  onClick={() => {
                                    if (window.confirm(`Remove "${p.name}" from catalogue?`)) {
                                      adminDeleteProduct(p.id, p.name);
                                    }
                                  }}
                                  title="Delete product"
                                >🗑</button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Deleted products (restore) */}
              {deletedProductIds.length > 0 && (
                <div className="admin-section">
                  <div className="admin-section__head">
                    <h3 className="admin-section__title">Removed Products ({deletedProductIds.length})</h3>
                  </div>
                  <div style={{ padding:'var(--space-4) var(--space-5)', display:'flex', flexWrap:'wrap', gap:'var(--space-3)' }}>
                    {deletedProductIds.map(id => {
                      const p = PRODUCTS.find(p => p.id === id);
                      if (!p) return null;
                      return (
                        <div key={id} className="restore-chip">
                          <span className="text-sm fw-600">{p.name}</span>
                          <button className="btn btn-ghost btn-sm" onClick={() => adminRestoreProduct(id)}>Restore</button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}

          {/* ══ ORDERS ══════════════════════════════════ */}
          {tab === 'Orders' && (
            <div className="admin-section">
              <div className="admin-section__head">
                <h3 className="admin-section__title">All Orders ({orders.length})</h3>
              </div>
              {orders.length === 0 ? (
                <div className="admin-empty">
                  <div style={{ fontSize:'3rem' }}>🧾</div>
                  <p>No orders yet. <Link to="/" className="text-magenta">Place a demo order</Link> to see it here.</p>
                </div>
              ) : (
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Update Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map(o => (
                        <tr key={o.id}>
                          <td className="fw-700 text-sm" style={{ fontFamily:"'Inter',sans-serif", whiteSpace:'nowrap' }}>{o.id}</td>
                          <td className="text-sm">{o.address?.name || '—'}</td>
                          <td className="text-sm text-muted" style={{ whiteSpace:'nowrap' }}>
                            {new Date(o.date).toLocaleDateString('en-IN', { day:'numeric', month:'short' })}
                          </td>
                          <td className="text-sm">{o.items.reduce((s,i)=>s+i.qty,0)}</td>
                          <td className="fw-700 text-sm">{formatPrice(o.total)}</td>
                          <td className="text-sm text-muted">{o.payment?.method?.toUpperCase() || 'Demo'}</td>
                          <td>
                            <span className={`badge ${
                              o.status==='Delivered' ? 'badge-success' :
                              o.status==='Shipped'   ? 'badge-lavender' :
                              o.status==='Processing'? 'badge-warning' : 'badge-magenta'
                            }`}>{o.status}</span>
                          </td>
                          <td>
                            <div className="admin-row-actions">
                              {ORDER_STATUSES.filter(s => s !== o.status).map(s => (
                                <button
                                  key={s}
                                  className="btn btn-ghost btn-sm"
                                  id={`order-${o.id}-${s.toLowerCase()}`}
                                  onClick={() => adminUpdateOrderStatus(o.id, s, STATUS_TIMELINE[s] || s)}
                                  title={`Mark as ${s}`}
                                >→ {s}</button>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* ══ INVENTORY ═══════════════════════════════ */}
          {tab === 'Inventory' && (
            <>
              {lowStockProds.length > 0 && (
                <div className="admin-alert">
                  ⚠️ <strong>{lowStockProds.length} product{lowStockProds.length!==1?'s':''}</strong> with ≤20 units — restock recommended.
                </div>
              )}

              <div className="admin-section">
                <div className="admin-section__head">
                  <h3 className="admin-section__title">Inventory Management</h3>
                  <span className="text-xs text-muted">Sorted by stock level (lowest first)</span>
                </div>
                <div className="admin-table-wrap">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Dept</th>
                        <th>Current Stock</th>
                        <th>New Quantity</th>
                        <th>Save</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...products].sort((a,b) => a.stock - b.stock).map(p => {
                        const d = DEPARTMENTS.find(d => d.id === p.department);
                        return (
                          <tr key={p.id} className={p.stock === 0 ? 'oos-row' : p.stock <= 10 ? 'low-row' : ''}>
                            <td>
                              <div className="admin-product-cell">
                                <img src={p.image} alt={p.name} className="admin-product-img"
                                  onError={e => { e.target.src=`https://placehold.co/40x40/f5ede6/78716c?text=${p.name[0]}`; }} />
                                <div className="fw-600 text-sm">{p.name}</div>
                              </div>
                            </td>
                            <td>
                              <span className="admin-dept-chip" style={{ background:d?.color+'18', color:d?.color }}>
                                {d?.icon}
                              </span>
                            </td>
                            <td>
                              <span className={`badge ${p.stock===0?'badge-coral':p.stock<=10?'badge-warning':p.stock<=20?'badge-warning':'badge-success'}`}>
                                {p.stock === 0 ? 'Out of Stock' : `${p.stock} units`}
                              </span>
                            </td>
                            <td>
                              <input
                                type="number"
                                className="input inv-input"
                                min="0"
                                placeholder={p.stock}
                                value={stockEdits[p.id] ?? ''}
                                onChange={e => setStockEdits(s => ({ ...s, [p.id]: e.target.value }))}
                                id={`inv-stock-${p.id}`}
                                aria-label={`Stock for ${p.name}`}
                              />
                            </td>
                            <td>
                              <button
                                className="btn btn-primary btn-sm"
                                disabled={stockEdits[p.id] === undefined || stockEdits[p.id] === ''}
                                onClick={() => handleStockSave(p.id)}
                                id={`inv-save-${p.id}`}
                              >
                                Update
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ── Edit Modal ─────────────────────────── */}
      {editingProd && (
        <EditModal
          product={editingProd}
          onSave={changes => {
            adminUpdateProduct(editingProd.id, changes);
            setEditingProd(null);
          }}
          onClose={() => setEditingProd(null)}
        />
      )}

      <style>{`
        /* ── Layout ── */
        .admin-page {
          display: flex; min-height: 100vh; background: var(--ivory);
          font-family: 'Inter', sans-serif;
        }

        /* ── Sidebar ── */
        .admin-sidebar {
          width: 240px; flex-shrink: 0; background: #0D0D1A; color: white;
          display: flex; flex-direction: column;
          position: sticky; top: 0; height: 100vh; overflow: hidden;
        }
        .admin-sidebar__brand {
          padding: var(--space-6);
          border-bottom: 1px solid rgba(255,255,255,.07);
        }
        .admin-logo {
          font-size: 1.2rem; font-weight: 900; color: white;
          letter-spacing: -0.04em;
        }
        .admin-logo span { color: var(--magenta); }
        .admin-demo-tag {
          display: inline-block; margin-top: 6px;
          padding: 2px 8px; background: rgba(233,30,140,.2); color: var(--magenta);
          border-radius: var(--radius-full); font-size: 0.62rem; font-weight: 800;
          letter-spacing: 0.1em; text-transform: uppercase;
        }
        .admin-sidebar__nav {
          flex: 1; padding: var(--space-3);
          display: flex; flex-direction: column; gap: 2px;
          overflow-y: auto;
        }
        .admin-nav-btn {
          width: 100%; text-align: left;
          padding: 10px 14px; border-radius: var(--radius-md);
          font-size: 0.875rem; font-weight: 600; color: rgba(255,255,255,.55);
          transition: all 180ms var(--ease);
          display: flex; align-items: center; gap: var(--space-3);
        }
        .admin-nav-btn:hover { background: rgba(255,255,255,.06); color: white; }
        .admin-nav-btn.active {
          background: linear-gradient(135deg, var(--magenta), var(--coral));
          color: white; box-shadow: 0 4px 12px rgba(233,30,140,.3);
        }
        .nav-badge {
          margin-left: auto; min-width: 20px; height: 20px; border-radius: 10px;
          background: rgba(255,255,255,.15); color: white;
          font-size: 0.65rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center; padding: 0 5px;
        }
        .nav-badge--warn { background: #D97706; }
        .admin-sidebar__footer {
          padding: var(--space-4); border-top: 1px solid rgba(255,255,255,.07);
          display: flex; flex-direction: column; gap: var(--space-2);
        }
        .admin-sidebar__disc {
          font-size: 0.65rem; color: rgba(255,255,255,.25); text-align: center;
          line-height: 1.5;
        }

        /* ── Main ── */
        .admin-main {
          flex: 1; display: flex; flex-direction: column; overflow: hidden;
          min-width: 0;
        }
        .admin-topbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px var(--space-7);
          background: var(--surface); border-bottom: 1px solid var(--border);
          box-shadow: var(--shadow-sm); gap: var(--space-4); flex-wrap: wrap;
        }
        .admin-topbar__title { font-size: 1.2rem; font-weight: 800; color: var(--ink); }
        .admin-topbar__right { display: flex; align-items: center; gap: var(--space-3); }
        .admin-demo-chip {
          padding: 5px 12px; background: #FEF3C7; border: 1px solid #FDE68A;
          border-radius: var(--radius-full); font-size: 0.72rem; font-weight: 700;
          color: #92400E;
        }
        .admin-content {
          flex: 1; padding: var(--space-6);
          display: flex; flex-direction: column; gap: var(--space-5);
          overflow-y: auto;
        }

        /* ── Stats ── */
        .admin-stats {
          display: grid; grid-template-columns: repeat(4,1fr); gap: var(--space-4);
        }
        .admin-stat {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-5);
          display: flex; gap: var(--space-4); align-items: center;
          box-shadow: var(--shadow-sm);
        }
        .admin-stat__icon {
          width: 50px; height: 50px; border-radius: var(--radius-lg);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.3rem; flex-shrink: 0;
        }
        .admin-stat__val { font-size: 1.35rem; font-weight: 900; color: var(--ink); line-height: 1; }
        .admin-stat__lbl { font-size: 0.78rem; color: var(--ink-muted); font-weight: 600; margin-top: 3px; }
        .admin-stat__sub { font-size: 0.68rem; color: var(--ink-light); margin-top: 2px; }

        /* ── Sections ── */
        .admin-section {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); overflow: hidden;
        }
        .admin-section__head {
          display: flex; align-items: center; justify-content: space-between;
          padding: var(--space-4) var(--space-5);
          border-bottom: 1px solid var(--border);
        }
        .admin-section__title { font-size: 0.95rem; font-weight: 800; }

        /* ── Toolbar ── */
        .admin-toolbar {
          display: flex; align-items: center; gap: var(--space-3); flex-wrap: wrap;
          padding: var(--space-4) var(--space-5); border-bottom: 1px solid var(--border);
        }
        .admin-search { flex: 1; min-width: 200px; padding: 9px 14px; }

        /* ── Tables ── */
        .admin-table-wrap { overflow-x: auto; }
        .admin-table {
          width: 100%; border-collapse: collapse; font-size: 0.875rem;
        }
        .admin-table th {
          text-align: left; padding: 10px 14px;
          background: var(--ivory); border-bottom: 1px solid var(--border);
          font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: .06em; color: var(--ink-muted); white-space: nowrap;
        }
        .admin-table td {
          padding: 10px 14px; border-bottom: 1px solid var(--border);
          vertical-align: middle;
        }
        .admin-table tr:last-child td { border-bottom: none; }
        .admin-table tr:hover td { background: var(--ivory); }
        .oos-row td { background: #FFF5F5 !important; }
        .low-row td { background: #FFFBEB !important; }

        /* ── Product cell ── */
        .admin-product-cell { display: flex; align-items: center; gap: 10px; }
        .admin-product-img {
          width: 40px; height: 40px; object-fit: cover;
          border-radius: var(--radius-sm); flex-shrink: 0;
          border: 1px solid var(--border);
        }
        .admin-dept-chip {
          padding: 3px 10px; border-radius: var(--radius-full);
          font-size: 0.7rem; font-weight: 700; white-space: nowrap;
        }
        .admin-row-actions { display: flex; gap: 4px; flex-wrap: wrap; }
        .line-through { text-decoration: line-through; }

        /* ── Inventory input ── */
        .inv-input { width: 90px; padding: 7px 10px; font-size: 0.875rem; }

        /* ── Alert ── */
        .admin-alert {
          padding: var(--space-4) var(--space-5);
          background: #FEF3C7; border: 1px solid #FDE68A;
          border-radius: var(--radius-lg); font-size: 0.875rem; color: #92400E;
        }
        .admin-empty {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; padding: var(--space-12); gap: var(--space-4);
          color: var(--ink-muted);
        }

        /* ── Restore chip ── */
        .restore-chip {
          display: flex; align-items: center; gap: var(--space-2);
          padding: 6px 12px; background: var(--ivory);
          border: 1px solid var(--border); border-radius: var(--radius-md);
        }

        /* ── Modal ── */
        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,.55);
          z-index: 9000; display: flex; align-items: center; justify-content: center;
          padding: var(--space-6);
          animation: fadeIn 150ms var(--ease);
        }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        .modal-box {
          background: var(--surface); border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl); width: 100%; max-width: 620px;
          max-height: 90vh; overflow-y: auto;
          animation: slideUp 200ms cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes slideUp { from { transform:translateY(30px); opacity:0; } to { transform:translateY(0); opacity:1; } }
        .modal-header {
          display: flex; align-items: flex-start; justify-content: space-between;
          padding: var(--space-6); border-bottom: 1px solid var(--border);
        }
        .modal-title { font-size: 1.1rem; font-weight: 800; }
        .modal-close {
          font-size: 1.1rem; color: var(--ink-muted); padding: 4px 8px;
          border-radius: var(--radius-sm); transition: all 150ms var(--ease);
        }
        .modal-close:hover { background: var(--ivory); color: var(--error); }
        .modal-body {
          padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-5);
        }
        .modal-img-preview img {
          width: 100%; height: 160px; object-fit: cover;
          border-radius: var(--radius-lg);
        }
        .modal-fields { display: flex; flex-direction: column; gap: var(--space-4); }
        .mf-row  { display: flex; flex-direction: column; gap: var(--space-2); }
        .mf-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); }
        .mf-field { display: flex; flex-direction: column; gap: var(--space-2); }
        .modal-footer {
          display: flex; justify-content: flex-end; gap: var(--space-3);
          padding: var(--space-5) var(--space-6);
          border-top: 1px solid var(--border); background: var(--ivory);
          border-radius: 0 0 var(--radius-xl) var(--radius-xl);
        }

        /* ── Responsive ── */
        @media (max-width: 960px) {
          .admin-sidebar { width: 200px; }
          .admin-stats { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 700px) {
          .admin-page { flex-direction: column; }
          .admin-sidebar { width: 100%; height: auto; position: static; flex-direction: row; flex-wrap: wrap; }
          .admin-sidebar__brand { padding: var(--space-4); border-bottom: none; border-right: 1px solid rgba(255,255,255,.07); }
          .admin-sidebar__nav { flex-direction: row; flex-wrap: wrap; padding: var(--space-2); flex: 1; }
          .admin-nav-btn { width: auto; padding: 8px 12px; font-size: 0.78rem; }
          .admin-sidebar__footer { display: none; }
          .admin-stats { grid-template-columns: 1fr 1fr; }
          .admin-content { padding: var(--space-4); }
          .mf-row-2 { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .admin-stats { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
