import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProduct, getDepartment, PRODUCTS, formatPrice, getDiscount } from '../data/products';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';

const MOCK_REVIEWS = [
  { name: 'Priya S.', rating: 5, text: 'Outstanding quality — exactly as described. Packaging was immaculate and delivery was quick!', date: '3 days ago', verified: true },
  { name: 'Arjun M.', rating: 4, text: 'Great product overall. Minor gripe with delivery time but the product itself is excellent.', date: '1 week ago', verified: true },
  { name: 'Deepika R.', rating: 5, text: 'I was skeptical ordering online but this exceeded every expectation. Will be a repeat buyer!', date: '2 weeks ago', verified: true },
  { name: 'Karthik V.', rating: 4, text: 'Good build quality, looks premium in person. Delivery was on time.', date: '3 weeks ago', verified: false },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProduct(id);
  const { addToCart, toggleWishlist, wishlist, toast } = useStore();

  const [selectedVariants, setSelectedVariants] = useState({});
  const [qty, setQty]          = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [tab, setTab]          = useState('desc');

  /* ── 404 ──────────────────────────────────────── */
  if (!product) return (
    <div className="flex-center" style={{ height: '60vh', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontSize: '3rem' }}>😕</div>
      <h2>Product not found</h2>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );

  const dept      = getDepartment(product.department);
  const isWished  = wishlist.includes(product.id);
  const discount  = getDiscount(product.price, product.originalPrice);
  const variantKeys = Object.keys(product.variants || {});

  /* Build variant key string */
  const resolvedVariants = useMemo(() => {
    const resolved = {};
    variantKeys.forEach(k => {
      resolved[k] = selectedVariants[k] || product.variants[k][0];
    });
    return resolved;
  }, [selectedVariants, variantKeys, product.variants]);

  const variantKey = variantKeys.length > 0
    ? variantKeys.map(k => `${k}:${resolvedVariants[k]}`).join('|')
    : 'default';

  /* Stock status */
  const stockStatus =
    product.stock === 0     ? { label: 'Out of Stock',    color: '#DC2626', icon: '✕' } :
    product.stock <= 10     ? { label: `Only ${product.stock} left!`, color: '#D97706', icon: '⚡' } :
    product.stock <= 30     ? { label: 'Low Stock',       color: '#D97706', icon: '⚠️' } :
                              { label: 'In Stock',         color: '#16A34A', icon: '✓' };

  const handleAdd = () => {
    if (product.stock === 0) return;
    addToCart(product, variantKey, qty);
  };

  const handleBuyNow = () => {
    if (product.stock === 0) return;
    addToCart(product, variantKey, qty);
    navigate('/cart');
  };

  const handleWishlist = () => {
    toggleWishlist(product.id);
    toast(isWished ? 'Removed from wishlist' : '♥ Added to wishlist', 'info');
  };

  const related = PRODUCTS
    .filter(p => p.department === product.department && p.id !== product.id)
    .slice(0, 4);

  /* Rating distribution (mock) */
  const ratingBars = [5,4,3,2,1].map(r => ({
    r, pct: r === 5 ? 62 : r === 4 ? 24 : r === 3 ? 8 : r === 2 ? 4 : 2,
  }));

  return (
    <main className="pd-page">
      <div className="container">

        {/* Breadcrumb */}
        <nav className="pd-bread" aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/department/${dept?.id}`}>{dept?.name}</Link>
          <span>/</span>
          <Link to={`/department/${dept?.id}`}>{product.category}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="pd-layout">

          {/* ── Left: Images ─────────────────── */}
          <div className="pd-gallery">
            {/* Main image */}
            <div className="pd-gallery__main">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="pd-gallery__img"
                key={activeImg}
              />
              {discount > 0 && (
                <span className="pd-disc-badge">{discount}% OFF</span>
              )}
              <button
                className={`pd-wish-fab ${isWished ? 'active' : ''}`}
                onClick={handleWishlist}
                aria-label={isWished ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                {isWished ? '♥' : '♡'}
              </button>
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="pd-gallery__thumbs">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    className={`pd-gallery__thumb ${i === activeImg ? 'active' : ''}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={img} alt={`${product.name} view ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Right: Info ──────────────────── */}
          <div className="pd-info">

            {/* Brand + dept pill */}
            <div className="pd-info__meta">
              <span className="pd-info__brand">{product.brand}</span>
              <Link to={`/department/${dept?.id}`} className="pd-info__dept-pill" style={{ background: dept?.color + '18', color: dept?.color }}>
                {dept?.icon} {dept?.name}
              </Link>
              {product.badge && (
                <span className={`badge ${product.badge === 'Sale' ? 'badge-coral' : product.badge === 'Premium' ? 'badge-lavender' : 'badge-magenta'}`}>
                  {product.badge}
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="pd-info__name">{product.name}</h1>

            {/* Rating row */}
            <div className="pd-info__rating">
              <div className="stars" style={{ fontSize: '1rem' }}>
                {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
              </div>
              <span className="fw-600" style={{ fontSize: '0.9rem' }}>{product.rating}</span>
              <span className="text-sm text-muted">({product.reviews} reviews)</span>
              <span className="pd-info__category-pill">{product.category}</span>
            </div>

            {/* Price */}
            <div className="pd-info__pricing">
              <span className="pd-info__price">{formatPrice(product.price)}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="pd-info__orig">{formatPrice(product.originalPrice)}</span>
                  <span className="badge badge-coral">{discount}% off</span>
                </>
              )}
            </div>
            {product.originalPrice > product.price && (
              <div className="pd-info__saving">
                You save {formatPrice(product.originalPrice - product.price)} on this item
              </div>
            )}

            {/* Stock indicator */}
            <div className="pd-stock" style={{ color: stockStatus.color }}>
              <span className="pd-stock__icon">{stockStatus.icon}</span>
              {stockStatus.label}
              {product.stock > 30 && (
                <span style={{ color: 'var(--ink-light)', marginLeft: 8, fontWeight: 400 }}>
                  ({product.stock} units available)
                </span>
              )}
            </div>

            {/* Variants */}
            {variantKeys.map(key => (
              <div key={key} className="pd-variant">
                <div className="pd-variant__label">
                  <span className="label" style={{ margin: 0 }}>{key}</span>
                  <span className="text-sm fw-600 text-magenta">{resolvedVariants[key]}</span>
                </div>
                <div className="pd-variant__opts">
                  {product.variants[key].map(val => (
                    <button
                      key={val}
                      className={`pd-var-opt ${resolvedVariants[key] === val ? 'active' : ''}`}
                      onClick={() => setSelectedVariants(prev => ({ ...prev, [key]: val }))}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Quantity */}
            <div className="pd-qty-row">
              <span className="label" style={{ margin: 0 }}>Quantity</span>
              <div className="pd-qty">
                <button
                  className="pd-qty__btn"
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  disabled={qty <= 1}
                  aria-label="Decrease quantity"
                >−</button>
                <span className="pd-qty__val">{qty}</span>
                <button
                  className="pd-qty__btn"
                  onClick={() => setQty(q => Math.min(product.stock || 99, q + 1))}
                  disabled={qty >= product.stock}
                  aria-label="Increase quantity"
                >+</button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="pd-ctas">
              <button
                id={`pdp-add-cart-${product.id}`}
                className="btn btn-primary btn-lg w-full"
                onClick={handleAdd}
                disabled={product.stock === 0}
              >
                🛒 {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
              <button
                id={`pdp-buy-now-${product.id}`}
                className="btn btn-secondary btn-lg w-full"
                onClick={handleBuyNow}
                disabled={product.stock === 0}
              >
                ⚡ Buy Now
              </button>
              <button
                id={`pdp-wishlist-${product.id}`}
                className={`btn w-full ${isWished ? 'pd-wish-active' : 'btn-secondary'}`}
                onClick={handleWishlist}
              >
                {isWished ? '♥ Saved to Wishlist' : '♡ Add to Wishlist'}
              </button>
            </div>

            {/* Trust badges */}
            <div className="pd-trust">
              {[
                ['🚚', 'Free delivery above ₹499'],
                ['↩️', '30-day easy returns'],
                ['🔒', 'Secure checkout'],
                ['✓',  'Genuine product'],
              ].map(([icon, text]) => (
                <div key={text} className="pd-trust__item">
                  <span className="pd-trust__icon">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Tabs: Description / Specs / Reviews / Shipping ── */}
        <div className="pd-tabs">
          <div className="pd-tabs__nav" role="tablist">
            {['desc', 'specs', 'reviews', 'shipping'].map(t => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                className={`pd-tab-btn ${tab === t ? 'active' : ''}`}
                onClick={() => setTab(t)}
                id={`tab-${t}`}
              >
                {{ desc: 'Description', specs: 'Specifications', reviews: `Reviews (${MOCK_REVIEWS.length})`, shipping: 'Shipping & Returns' }[t]}
              </button>
            ))}
          </div>

          <div className="pd-tabs__panel">
            {/* Description */}
            {tab === 'desc' && (
              <p style={{ lineHeight: 1.85, color: 'var(--ink-muted)', fontSize: '0.95rem', maxWidth: 720 }}>
                {product.description}
              </p>
            )}

            {/* Specs */}
            {tab === 'specs' && (
              <div className="pd-specs">
                {product.specs && Object.entries(product.specs).length > 0 ? (
                  <table className="pd-specs-table">
                    <tbody>
                      {Object.entries(product.specs).map(([k, v]) => (
                        <tr key={k}>
                          <td className="pd-specs-table__key">{k}</td>
                          <td className="pd-specs-table__val">{v}</td>
                        </tr>
                      ))}
                      <tr>
                        <td className="pd-specs-table__key">Brand</td>
                        <td className="pd-specs-table__val">{product.brand}</td>
                      </tr>
                      <tr>
                        <td className="pd-specs-table__key">Category</td>
                        <td className="pd-specs-table__val">{product.category}</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <p className="text-muted">Specifications not available for this product.</p>
                )}
              </div>
            )}

            {/* Reviews */}
            {tab === 'reviews' && (
              <div className="pd-reviews">
                {/* Summary */}
                <div className="pd-reviews__summary">
                  <div className="pd-reviews__avg-block">
                    <span className="pd-reviews__avg-num">{product.rating}</span>
                    <div className="stars" style={{ fontSize: '1.4rem' }}>
                      {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
                    </div>
                    <div className="text-sm text-muted">{product.reviews} verified reviews</div>
                  </div>
                  <div className="pd-reviews__bars">
                    {ratingBars.map(({ r, pct }) => (
                      <div key={r} className="pd-reviews__bar-row">
                        <span className="text-xs fw-600">{r}★</span>
                        <div className="pd-reviews__bar-track">
                          <div className="pd-reviews__bar-fill" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-xs text-muted">{pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Review cards */}
                <div className="pd-review-list">
                  {MOCK_REVIEWS.map((r, i) => (
                    <div key={i} className="pd-review-card">
                      <div className="pd-review-card__head">
                        <div className="pd-review-card__avatar">{r.name[0]}</div>
                        <div>
                          <div className="fw-600 text-sm">{r.name}
                            {r.verified && <span className="pd-verified">✓ Verified</span>}
                          </div>
                          <div className="stars" style={{ fontSize: '0.82rem' }}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                        </div>
                        <span className="text-xs text-muted" style={{ marginLeft: 'auto' }}>{r.date}</span>
                      </div>
                      <p className="text-sm" style={{ color: 'var(--ink-muted)', marginTop: 4 }}>{r.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Shipping */}
            {tab === 'shipping' && (
              <div className="pd-shipping">
                {[
                  { icon: '🚚', title: 'Standard Delivery', desc: '3–5 business days. Free on orders above ₹499.' },
                  { icon: '⚡', title: 'Express Delivery',  desc: '1–2 business days. Flat ₹99 fee.' },
                  { icon: '↩️', title: 'Returns Policy',   desc: '30-day hassle-free returns. Initiate from My Orders.' },
                  { icon: '📦', title: 'Packaging',        desc: 'Safely bubble-wrapped and sealed for secure transit.' },
                ].map(s => (
                  <div key={s.title} className="pd-shipping__item">
                    <span className="pd-shipping__icon">{s.icon}</span>
                    <div>
                      <div className="fw-600 text-sm">{s.title}</div>
                      <p className="text-sm" style={{ marginTop: 2 }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Related Products ──────────────────────── */}
        {related.length > 0 && (
          <section style={{ marginBottom: 'var(--space-16)' }}>
            <div className="flex-between" style={{ marginBottom: 'var(--space-6)' }}>
              <h2 style={{ fontSize: '1.5rem' }}>More from {dept?.name}</h2>
              <Link to={`/department/${dept?.id}`} className="btn btn-secondary btn-sm">
                View All →
              </Link>
            </div>
            <div className="product-grid">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>

      <style>{`
        .pd-page { padding: var(--space-6) 0 var(--space-16); }

        /* Breadcrumb */
        .pd-bread {
          display: flex; align-items: center; flex-wrap: wrap; gap: 6px;
          font-size: 0.78rem; color: var(--ink-muted); margin-bottom: var(--space-8);
        }
        .pd-bread a { color: var(--ink-muted); transition: color var(--duration) var(--ease); }
        .pd-bread a:hover { color: var(--magenta); }
        .pd-bread span { color: var(--border-dark); }
        .pd-bread span:last-child { color: var(--ink); font-weight: 600; }

        /* Layout */
        .pd-layout {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: var(--space-12); margin-bottom: var(--space-12);
          align-items: start;
        }

        /* Gallery */
        .pd-gallery { display: flex; flex-direction: column; gap: var(--space-3); }
        .pd-gallery__main {
          position: relative; border-radius: var(--radius-xl);
          overflow: hidden; background: var(--ivory-dark); aspect-ratio: 1/1;
        }
        .pd-gallery__img {
          width: 100%; height: 100%; object-fit: cover;
          animation: img-fade 300ms var(--ease);
        }
        @keyframes img-fade { from { opacity:.5 } to { opacity:1 } }
        .pd-disc-badge {
          position: absolute; top: 16px; left: 16px;
          background: #EF4444; color: white;
          padding: 5px 12px; border-radius: var(--radius-full);
          font-size: 0.8rem; font-weight: 700;
        }
        .pd-wish-fab {
          position: absolute; top: 16px; right: 16px;
          width: 46px; height: 46px; border-radius: 50%;
          background: white; border: none; cursor: pointer;
          font-size: 1.3rem;
          display: flex; align-items: center; justify-content: center;
          color: var(--ink-muted); box-shadow: var(--shadow-md);
          transition: all var(--duration) var(--ease);
        }
        .pd-wish-fab.active, .pd-wish-fab:hover { color: var(--magenta); transform: scale(1.1); }
        .pd-gallery__thumbs { display: flex; gap: var(--space-3); }
        .pd-gallery__thumb {
          width: 74px; height: 74px; border-radius: var(--radius-md);
          border: 2px solid var(--border); overflow: hidden; cursor: pointer;
          background: none; padding: 0;
          transition: border-color var(--duration) var(--ease);
        }
        .pd-gallery__thumb.active { border-color: var(--magenta); }
        .pd-gallery__thumb img { width: 100%; height: 100%; object-fit: cover; }

        /* Info */
        .pd-info { display: flex; flex-direction: column; gap: var(--space-5); }
        .pd-info__meta { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-2); }
        .pd-info__brand { font-size: 0.78rem; font-weight: 700; color: var(--ink-muted); text-transform: uppercase; letter-spacing: 0.08em; }
        .pd-info__dept-pill {
          padding: 3px 10px; border-radius: var(--radius-full);
          font-size: 0.72rem; font-weight: 700; text-decoration: none;
          text-transform: uppercase; letter-spacing: 0.04em;
          transition: opacity var(--duration) var(--ease);
        }
        .pd-info__dept-pill:hover { opacity: 0.8; }
        .pd-info__name { font-size: clamp(1.6rem,3vw,2.2rem); line-height: 1.15; }
        .pd-info__rating { display: flex; align-items: center; gap: var(--space-2); flex-wrap: wrap; }
        .pd-info__category-pill {
          padding: 2px 10px; border-radius: var(--radius-full);
          background: var(--ivory-dark); border: 1px solid var(--border);
          font-size: 0.72rem; font-weight: 600; color: var(--ink-muted);
        }
        .pd-info__pricing { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-3); }
        .pd-info__price { font-size: 2.1rem; font-weight: 900; color: var(--ink); font-family: 'Inter',sans-serif; line-height: 1; }
        .pd-info__orig { font-size: 1rem; color: var(--ink-light); text-decoration: line-through; font-family: 'Inter',sans-serif; }
        .pd-info__saving { font-size: 0.82rem; color: var(--success); font-weight: 600; background: #DCFCE7; padding: 4px 12px; border-radius: var(--radius-full); display: inline-block; }

        /* Stock */
        .pd-stock { display: flex; align-items: center; gap: 6px; font-size: 0.875rem; font-weight: 700; }
        .pd-stock__icon { font-size: 0.9rem; }

        /* Variants */
        .pd-variant { display: flex; flex-direction: column; gap: var(--space-3); }
        .pd-variant__label { display: flex; align-items: center; justify-content: space-between; }
        .pd-variant__opts { display: flex; flex-wrap: wrap; gap: var(--space-2); }
        .pd-var-opt {
          padding: 7px 16px; border-radius: var(--radius-full);
          border: 1.5px solid var(--border); font-size: 0.82rem; font-weight: 600;
          color: var(--ink); cursor: pointer; background: var(--surface);
          transition: all var(--duration) var(--ease);
        }
        .pd-var-opt.active, .pd-var-opt:hover {
          border-color: var(--magenta); color: var(--magenta);
          background: #FDE8F3; box-shadow: var(--shadow-glow);
        }

        /* Quantity */
        .pd-qty-row { display: flex; align-items: center; gap: var(--space-5); }
        .pd-qty {
          display: inline-flex; align-items: center;
          border: 1.5px solid var(--border); border-radius: var(--radius-full); overflow: hidden;
        }
        .pd-qty__btn {
          width: 42px; height: 42px; background: var(--ivory); border: none;
          font-size: 1.2rem; font-weight: 700; cursor: pointer; color: var(--ink);
          transition: all var(--duration) var(--ease);
        }
        .pd-qty__btn:hover:not(:disabled) { background: var(--lavender-soft); color: var(--magenta); }
        .pd-qty__btn:disabled { opacity: 0.4; cursor: default; }
        .pd-qty__val { min-width: 48px; text-align: center; font-weight: 800; font-size: 1rem; }

        /* CTAs */
        .pd-ctas { display: flex; flex-direction: column; gap: var(--space-3); }
        .pd-wish-active {
          background: #FDE8F3; color: var(--magenta); border: 1.5px solid #F9A8D4;
        }

        /* Trust */
        .pd-trust {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: var(--space-3); padding-top: var(--space-4);
          border-top: 1px solid var(--border);
        }
        .pd-trust__item { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; color: var(--ink-muted); }
        .pd-trust__icon { font-size: 1rem; }

        /* Tabs */
        .pd-tabs { margin-bottom: var(--space-12); }
        .pd-tabs__nav {
          display: flex; border-bottom: 2px solid var(--border);
          margin-bottom: var(--space-7); overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .pd-tab-btn {
          padding: 12px var(--space-6); font-weight: 600; font-size: 0.875rem;
          color: var(--ink-muted); border: none; background: none; cursor: pointer;
          border-bottom: 2px solid transparent; margin-bottom: -2px; white-space: nowrap;
          transition: all var(--duration) var(--ease);
        }
        .pd-tab-btn.active { color: var(--magenta); border-bottom-color: var(--magenta); }
        .pd-tab-btn:hover { color: var(--magenta); }
        .pd-tabs__panel {}

        /* Specs table */
        .pd-specs-table { width: 100%; border-collapse: collapse; max-width: 600px; }
        .pd-specs-table tr:nth-child(even) td { background: var(--ivory); }
        .pd-specs-table td { padding: 10px 16px; font-size: 0.875rem; border-bottom: 1px solid var(--border); }
        .pd-specs-table__key { font-weight: 700; color: var(--ink-muted); width: 40%; }
        .pd-specs-table__val { color: var(--ink); }

        /* Reviews */
        .pd-reviews { display: flex; flex-direction: column; gap: var(--space-6); }
        .pd-reviews__summary {
          display: flex; gap: var(--space-8); align-items: flex-start;
          padding: var(--space-6); background: var(--ivory);
          border-radius: var(--radius-xl); flex-wrap: wrap;
        }
        .pd-reviews__avg-block { display: flex; flex-direction: column; align-items: center; gap: 4px; min-width: 80px; }
        .pd-reviews__avg-num { font-size: 3.5rem; font-weight: 900; color: var(--ink); font-family: 'Inter',sans-serif; line-height: 1; }
        .pd-reviews__bars { flex: 1; min-width: 200px; display: flex; flex-direction: column; gap: 8px; }
        .pd-reviews__bar-row { display: flex; align-items: center; gap: var(--space-3); }
        .pd-reviews__bar-track { flex: 1; height: 8px; background: var(--border); border-radius: 4px; overflow: hidden; }
        .pd-reviews__bar-fill { height: 100%; background: #FBBF24; border-radius: 4px; }
        .pd-review-list { display: flex; flex-direction: column; gap: var(--space-4); }
        .pd-review-card {
          padding: var(--space-5); background: var(--surface);
          border: 1px solid var(--border); border-radius: var(--radius-lg);
        }
        .pd-review-card__head { display: flex; align-items: center; gap: var(--space-3); margin-bottom: 6px; }
        .pd-review-card__avatar {
          width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
          background: linear-gradient(135deg, var(--magenta), var(--coral));
          color: white; font-weight: 800; font-size: 0.9rem;
          display: flex; align-items: center; justify-content: center;
        }
        .pd-verified { margin-left: 6px; font-size: 0.7rem; color: var(--success); font-weight: 700; }

        /* Shipping */
        .pd-shipping { display: flex; flex-direction: column; gap: var(--space-3); max-width: 600px; }
        .pd-shipping__item {
          display: flex; gap: var(--space-4); align-items: flex-start;
          padding: var(--space-4); background: var(--ivory); border-radius: var(--radius-md);
        }
        .pd-shipping__icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }

        @media (max-width: 860px) {
          .pd-layout { grid-template-columns: 1fr; gap: var(--space-8); }
          .pd-trust { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .pd-ctas { gap: var(--space-2); }
          .pd-info__price { font-size: 1.6rem; }
        }
      `}</style>
    </main>
  );
}
