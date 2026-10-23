import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DEPARTMENTS, PRODUCTS, formatPrice, getDiscount } from '../data/products';
import { useStore } from '../context/StoreContext';

/* ─────────────────────────────────────────────────────────
   1. HERO SECTION — Split editorial layout
───────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero-split">
      {/* Left: text */}
      <div className="hero-split__text">
        <div className="hero-split__eyebrow">
          <span className="hero-eyebrow-dot" />
          Vol. 01 · Vibe Coding Competition 2026
        </div>
        <h1 className="hero-split__title">
          Everything You Love.<br />
          <span className="hero-split__title-accent">All in One Place.</span>
        </h1>
        <p className="hero-split__desc">
          Discover fashion, beauty, technology, home essentials, groceries, and more —
          all with one seamless shopping experience.
        </p>
        <div className="hero-split__ctas">
          <Link to="/department/fashion" className="btn btn-primary btn-lg" id="hero-shop-btn">
            Shop the Collection
          </Link>
          <Link to="/#departments" className="hero-outline-btn" id="hero-explore-btn"
            onClick={e => {
              e.preventDefault();
              document.getElementById('departments')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore Departments
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
        <div className="hero-split__stats">
          {[['6', 'Departments'], ['24+', 'Products'], ['1', 'Unified Cart'], ['₹0', 'Hidden Fees']].map(([n, l]) => (
            <div key={l} className="hero-stat">
              <span className="hero-stat__num">{n}</span>
              <span className="hero-stat__lbl">{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: image mosaic */}
      <div className="hero-split__visual">
        <div className="hero-mosaic">
          <div className="hero-mosaic__main">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=85"
              alt="Fashion editorial"
              loading="eager"
            />
            <div className="hero-mosaic__badge">
              <span>✦</span> The Everything Issue
            </div>
          </div>
          <div className="hero-mosaic__side">
            <div className="hero-mosaic__small">
              <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80" alt="Electronics" loading="eager" />
              <span className="hero-mosaic__label">Electronics</span>
            </div>
            <div className="hero-mosaic__small">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80" alt="Beauty" loading="eager" />
              <span className="hero-mosaic__label">Beauty</span>
            </div>
            <div className="hero-mosaic__small">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80" alt="Grocery" loading="eager" />
              <span className="hero-mosaic__label">Grocery</span>
            </div>
          </div>
        </div>
        {/* Floating trust pill */}
        <div className="hero-trust-pill">
          <span>🔒</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.8rem' }}>Secure Checkout</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--ink-muted)' }}>UPI · Cards · COD</div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-split {
          display: grid; grid-template-columns: 1fr 1fr;
          min-height: 88vh; overflow: hidden;
          background: var(--ivory);
        }
        .hero-split__text {
          display: flex; flex-direction: column; justify-content: center;
          padding: var(--space-16) var(--space-12) var(--space-16) 0;
          padding-left: calc((100vw - 1280px) / 2 + var(--space-6));
        }
        .hero-split__eyebrow {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: var(--magenta);
          margin-bottom: var(--space-5);
        }
        .hero-eyebrow-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--magenta);
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:.5; transform:scale(1.4); }
        }
        .hero-split__title {
          font-size: clamp(2.5rem, 4.5vw, 4rem);
          font-family: 'Playfair Display', serif;
          line-height: 1.1; margin-bottom: var(--space-6);
          color: var(--ink);
        }
        .hero-split__title-accent {
          background: linear-gradient(135deg, var(--magenta), var(--coral));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-split__desc {
          font-size: 1.05rem; line-height: 1.75;
          color: var(--ink-muted); max-width: 480px;
          margin-bottom: var(--space-8);
        }
        .hero-split__ctas {
          display: flex; align-items: center; flex-wrap: wrap;
          gap: var(--space-4); margin-bottom: var(--space-10);
        }
        .hero-outline-btn {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.9rem; font-weight: 700; color: var(--ink);
          text-decoration: none;
          border-bottom: 2px solid var(--magenta);
          padding-bottom: 2px;
          transition: color var(--duration) var(--ease), gap var(--duration) var(--ease);
        }
        .hero-outline-btn:hover { color: var(--magenta); gap: 12px; }
        .hero-split__stats {
          display: flex; gap: var(--space-8);
        }
        .hero-stat { display: flex; flex-direction: column; }
        .hero-stat__num {
          font-size: 1.75rem; font-weight: 900;
          font-family: 'Inter', sans-serif;
          color: var(--ink); line-height: 1;
        }
        .hero-stat__lbl {
          font-size: 0.72rem; color: var(--ink-light);
          text-transform: uppercase; letter-spacing: 0.08em; margin-top: 3px;
        }

        /* Mosaic */
        .hero-split__visual {
          position: relative; overflow: hidden;
          background: var(--ivory-dark);
        }
        .hero-mosaic {
          display: grid; grid-template-columns: 2fr 1fr;
          height: 100%; gap: 4px;
        }
        .hero-mosaic__main {
          position: relative; overflow: hidden;
        }
        .hero-mosaic__main img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 600ms var(--ease);
        }
        .hero-mosaic__main:hover img { transform: scale(1.04); }
        .hero-mosaic__badge {
          position: absolute; bottom: 24px; left: 24px;
          background: rgba(255,255,255,.92); backdrop-filter: blur(10px);
          padding: 10px 18px; border-radius: var(--radius-full);
          font-size: 0.8rem; font-weight: 700; color: var(--ink);
          display: flex; align-items: center; gap: 6px;
          box-shadow: var(--shadow-lg);
        }
        .hero-mosaic__badge span { color: var(--magenta); }
        .hero-mosaic__side {
          display: grid; grid-template-rows: 1fr 1fr 1fr; gap: 4px;
        }
        .hero-mosaic__small {
          position: relative; overflow: hidden;
        }
        .hero-mosaic__small img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 400ms var(--ease);
        }
        .hero-mosaic__small:hover img { transform: scale(1.06); }
        .hero-mosaic__label {
          position: absolute; bottom: 8px; left: 8px;
          background: rgba(0,0,0,.55); color: white;
          font-size: 0.65rem; font-weight: 700;
          padding: 3px 8px; border-radius: var(--radius-full);
          text-transform: uppercase; letter-spacing: 0.06em;
        }

        /* Trust pill */
        .hero-trust-pill {
          position: absolute; top: 24px; right: 24px;
          background: white; border-radius: var(--radius-xl);
          padding: 12px 16px; display: flex; align-items: center; gap: 10px;
          box-shadow: var(--shadow-lg);
          animation: float 4s ease-in-out infinite;
        }
        .hero-trust-pill span { font-size: 1.3rem; }
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }

        @media (max-width: 960px) {
          .hero-split {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .hero-split__text {
            padding: var(--space-12) var(--space-6);
          }
          .hero-split__visual { height: 50vw; min-height: 280px; }
          .hero-trust-pill { display: none; }
        }
        @media (max-width: 480px) {
          .hero-split__stats { gap: var(--space-5); }
          .hero-split__ctas { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   2. DEPARTMENT NAV STRIP
───────────────────────────────────────────────────────── */
function DeptStrip() {
  return (
    <section className="dept-strip" id="departments">
      <div className="container">
        <div className="dept-strip__inner">
          {DEPARTMENTS.map(d => (
            <Link key={d.id} to={`/department/${d.id}`} className="dept-chip" id={`dept-chip-${d.id}`}>
              <span className="dept-chip__icon" style={{ background: d.gradient }}>{d.icon}</span>
              <span className="dept-chip__name">{d.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .dept-strip {
          padding: var(--space-6) 0;
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          border-top: 1px solid var(--border);
        }
        .dept-strip__inner {
          display: flex; gap: var(--space-3);
          justify-content: center; flex-wrap: wrap;
        }
        .dept-chip {
          display: flex; align-items: center; gap: var(--space-2);
          padding: 10px 18px;
          background: var(--ivory);
          border: 1.5px solid var(--border);
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: all 200ms var(--ease);
        }
        .dept-chip:hover {
          border-color: var(--magenta);
          background: var(--surface);
          box-shadow: var(--shadow-glow);
          transform: translateY(-2px);
        }
        .dept-chip__icon {
          width: 30px; height: 30px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem;
        }
        .dept-chip__name { font-size: 0.85rem; font-weight: 700; color: var(--ink); }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   3. DEPARTMENT CARDS GRID
───────────────────────────────────────────────────────── */
const DEPT_CARDS = [
  {
    id: 'fashion',
    title: 'Fashion',
    desc: 'Find your everyday style.',
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
    color: '#E91E8C',
  },
  {
    id: 'beauty',
    title: 'Beauty',
    desc: 'Your routine, upgraded.',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
    color: '#FF6B6B',
  },
  {
    id: 'electronics',
    title: 'Electronics',
    desc: 'Smart picks, better living.',
    img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80',
    color: '#7C3AED',
  },
  {
    id: 'home',
    title: 'Home & Living',
    desc: 'Make your space yours.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    color: '#059669',
  },
  {
    id: 'grocery',
    title: 'Grocery',
    desc: 'Everyday essentials, sorted.',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80',
    color: '#D97706',
  },
  {
    id: 'kids',
    title: 'Kids & Toys',
    desc: 'Little things, big joy.',
    img: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',
    color: '#0284C7',
  },
];

function DeptCards() {
  return (
    <section className="dept-cards section">
      <div className="container">
        <div className="section-header">
          <h2>Shop by Department</h2>
          <p>Six curated worlds under one roof — find everything you need, all in one place.</p>
        </div>
        <div className="dept-cards__grid">
          {DEPT_CARDS.map((d, i) => (
            <Link
              key={d.id}
              to={`/department/${d.id}`}
              className={`dept-card ${i === 0 ? 'dept-card--feature' : ''}`}
              id={`dept-card-${d.id}`}
            >
              <div className="dept-card__img-wrap">
                <img src={d.img} alt={d.title} loading="lazy" className="dept-card__img" />
                <div className="dept-card__overlay" style={{ background: `linear-gradient(to top, ${d.color}ee 0%, ${d.color}44 50%, transparent 80%)` }} />
              </div>
              <div className="dept-card__body">
                <h3 className="dept-card__title">{d.title}</h3>
                <p className="dept-card__desc">{d.desc}</p>
                <span className="dept-card__cta">
                  Shop Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .dept-cards__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: 300px 300px;
          gap: var(--space-4);
        }
        .dept-card--feature { grid-column: span 1; grid-row: span 2; }
        .dept-card {
          position: relative; border-radius: var(--radius-xl);
          overflow: hidden; display: flex; flex-direction: column;
          justify-content: flex-end; text-decoration: none;
          cursor: pointer;
          transition: transform 300ms var(--ease), box-shadow 300ms var(--ease);
        }
        .dept-card:hover { transform: scale(1.02); box-shadow: var(--shadow-xl); }
        .dept-card__img-wrap {
          position: absolute; inset: 0;
        }
        .dept-card__img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 500ms var(--ease);
        }
        .dept-card:hover .dept-card__img { transform: scale(1.06); }
        .dept-card__overlay { position: absolute; inset: 0; }
        .dept-card__body {
          position: relative; z-index: 1;
          padding: var(--space-5) var(--space-5) var(--space-5);
          display: flex; flex-direction: column; gap: 4px;
        }
        .dept-card--feature .dept-card__body { padding: var(--space-8); }
        .dept-card__title {
          font-size: 1.3rem; color: white;
          font-family: 'Playfair Display', serif; font-weight: 700;
        }
        .dept-card--feature .dept-card__title { font-size: 2.2rem; }
        .dept-card__desc { font-size: 0.82rem; color: rgba(255,255,255,.8); margin-bottom: var(--space-3); }
        .dept-card--feature .dept-card__desc { font-size: 1rem; }
        .dept-card__cta {
          display: inline-flex; align-items: center; gap: 6px;
          color: white; font-size: 0.8rem; font-weight: 700;
          background: rgba(255,255,255,.18); backdrop-filter: blur(6px);
          padding: 7px 14px; border-radius: var(--radius-full);
          border: 1px solid rgba(255,255,255,.3);
          transition: background var(--duration) var(--ease), gap var(--duration) var(--ease);
          width: fit-content;
        }
        .dept-card:hover .dept-card__cta { background: rgba(255,255,255,.3); gap: 10px; }

        @media (max-width: 900px) {
          .dept-cards__grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }
          .dept-card--feature { grid-column: span 2; height: 300px; }
        }
        @media (max-width: 540px) {
          .dept-cards__grid { grid-template-columns: 1fr; }
          .dept-card--feature { grid-column: span 1; }
          .dept-card { height: 220px; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   4. PRODUCT CARD (inline, no external import needed)
───────────────────────────────────────────────────────── */
function ProdCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWished = wishlist.includes(product.id);
  const dept = DEPARTMENTS.find(d => d.id === product.department);
  const discount = getDiscount(product.price, product.originalPrice);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const firstVarKey = Object.keys(product.variants || {})[0];
    const firstVarVal = firstVarKey ? product.variants[firstVarKey][0] : null;
    const vk = firstVarKey ? `${firstVarKey}:${firstVarVal}` : 'default';
    addToCart(product, vk, 1);
  };

  const handleWish = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <Link to={`/product/${product.id}`} className="pc" id={`product-${product.id}`}>
      <div className="pc__img-wrap">
        <img src={product.image} alt={product.name} className="pc__img" loading="lazy" />
        {product.badge && (
          <span className={`pc__badge ${product.badge === 'Sale' ? 'badge-coral' : product.badge === 'Premium' ? 'badge-lavender' : 'badge-magenta'}`}>
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="pc__disc">{discount}% OFF</span>
        )}
        <button className={`pc__wish ${isWished ? 'active' : ''}`} onClick={handleWish} aria-label="Wishlist">
          {isWished ? '♥' : '♡'}
        </button>
        <button className="pc__add" onClick={handleAdd} id={`add-cart-${product.id}`}>
          + Add to Cart
        </button>
      </div>
      <div className="pc__body">
        <div className="pc__dept" style={{ color: dept?.color }}>{dept?.icon} {dept?.name}</div>
        <h3 className="pc__name">{product.name}</h3>
        <div className="pc__stars">
          {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
          <span className="pc__rev">({product.reviews})</span>
        </div>
        <div className="pc__price-row">
          <span className="pc__price">{formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="pc__orig">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
      <style>{`
        .pc {
          display: flex; flex-direction: column;
          background: var(--surface); border-radius: var(--radius-lg);
          border: 1px solid var(--border); overflow: hidden;
          text-decoration: none;
          transition: box-shadow 250ms var(--ease), transform 250ms var(--ease);
        }
        .pc:hover { box-shadow: var(--shadow-lg); transform: translateY(-5px); }
        .pc__img-wrap {
          position: relative; overflow: hidden;
          aspect-ratio: 4/3; background: var(--ivory-dark);
        }
        .pc__img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 400ms var(--ease);
        }
        .pc:hover .pc__img { transform: scale(1.05); }
        .pc__badge {
          position: absolute; top: 10px; left: 10px;
          padding: 3px 9px; border-radius: var(--radius-full);
          font-size: 0.68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.05em;
        }
        .pc__disc {
          position: absolute; top: 10px; right: 10px;
          background: #EF4444; color: white;
          padding: 3px 8px; border-radius: var(--radius-full);
          font-size: 0.68rem; font-weight: 700;
        }
        .pc__wish {
          position: absolute; bottom: 10px; right: 10px;
          width: 30px; height: 30px; border-radius: 50%;
          background: rgba(255,255,255,.9); border: none;
          font-size: 1rem; cursor: pointer; color: var(--ink-muted);
          display: flex; align-items: center; justify-content: center;
          transition: all var(--duration) var(--ease);
        }
        .pc__wish.active, .pc__wish:hover { color: var(--magenta); transform: scale(1.1); }
        .pc__add {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(135deg, var(--magenta), var(--coral));
          color: white; padding: 9px;
          font-size: 0.78rem; font-weight: 700; border: none; cursor: pointer;
          transform: translateY(100%);
          transition: transform 250ms var(--ease); letter-spacing: 0.03em;
        }
        .pc:hover .pc__add { transform: translateY(0); }
        .pc__body { padding: 12px 14px 14px; display: flex; flex-direction: column; gap: 3px; }
        .pc__dept { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
        .pc__name {
          font-family: 'Inter', sans-serif; font-size: 0.875rem; font-weight: 700;
          color: var(--ink); line-height: 1.3;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .pc__stars { color: #FBBF24; font-size: 0.75rem; margin: 2px 0; }
        .pc__rev { color: var(--ink-light); font-size: 0.7rem; margin-left: 4px; font-family: 'Inter',sans-serif; }
        .pc__price-row { display: flex; align-items: center; gap: 7px; margin-top: 3px; }
        .pc__price { font-size: 0.95rem; font-weight: 800; color: var(--ink); font-family: 'Inter',sans-serif; }
        .pc__orig { font-size: 0.78rem; color: var(--ink-light); text-decoration: line-through; font-family: 'Inter',sans-serif; }
      `}</style>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────
   5. PRODUCT SECTIONS — Trending / Best Sellers / New Arrivals
───────────────────────────────────────────────────────── */
function ProductSection({ title, desc, products, id }) {
  const [dept, setDept] = useState('all');
  const filtered = dept === 'all' ? products : products.filter(p => p.department === dept);
  const depts = [...new Set(products.map(p => p.department))];

  return (
    <section className="ps section" id={id}>
      <div className="container">
        <div className="ps__header">
          <div>
            <h2>{title}</h2>
            {desc && <p className="text-muted" style={{ marginTop: 6 }}>{desc}</p>}
          </div>
          <div className="ps__filters">
            <button className={`tag ${dept==='all'?'active':''}`} onClick={() => setDept('all')}>All</button>
            {depts.map(d => {
              const dept_obj = DEPARTMENTS.find(x => x.id === d);
              return (
                <button key={d} className={`tag ${dept===d?'active':''}`} onClick={() => setDept(d)}>
                  {dept_obj?.icon} {dept_obj?.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="product-grid">
          {filtered.map(p => <ProdCard key={p.id} product={p} />)}
        </div>
      </div>
      <style>{`
        .ps__header {
          display: flex; align-items: flex-start; justify-content: space-between;
          gap: var(--space-4); flex-wrap: wrap; margin-bottom: var(--space-8);
        }
        .ps__filters {
          display: flex; flex-wrap: wrap; gap: var(--space-2);
          justify-content: flex-end; flex: 1; max-width: 600px;
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   6. TRUST SECTION
───────────────────────────────────────────────────────── */
function TrustSection() {
  const items = [
    {
      icon: '🛍️',
      title: 'Easy Shopping',
      desc: 'Browse six departments with filters, search, and wishlists. One seamless flow.',
    },
    {
      icon: '🔐',
      title: 'Secure Checkout Design',
      desc: 'Demo UPI, card, and net-banking flows — built with security-first architecture.',
    },
    {
      icon: '🏬',
      title: 'Multiple Departments',
      desc: 'Fashion, Beauty, Electronics, Home & Living, Grocery, and Kids & Toys — all in one cart.',
    },
    {
      icon: '📦',
      title: 'Convenient Order Tracking',
      desc: 'Real-time order status from placement to delivery, right in your account.',
    },
  ];
  return (
    <section className="trust section" style={{ background: 'var(--ivory-dark)', margin: 0, padding: 'var(--space-16) 0' }}>
      <div className="container">
        <div className="section-header">
          <h2>Why Shop with BLOWMAGGY?</h2>
          <p>Built for a seamless, all-in-one shopping experience.</p>
        </div>
        <div className="trust__grid">
          {items.map(item => (
            <div key={item.title} className="trust-card">
              <div className="trust-card__icon">{item.icon}</div>
              <h4 className="trust-card__title">{item.title}</h4>
              <p className="trust-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .trust__grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: var(--space-5);
        }
        .trust-card {
          background: var(--surface); border: 1.5px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-7) var(--space-5);
          text-align: center; display: flex; flex-direction: column;
          align-items: center; gap: var(--space-3);
          transition: all 250ms var(--ease);
          box-shadow: var(--shadow-sm);
        }
        .trust-card:hover {
          box-shadow: var(--shadow-md); transform: translateY(-4px);
          border-color: var(--magenta);
        }
        .trust-card__icon { font-size: 2.5rem; }
        .trust-card__title {
          font-family: 'Inter', sans-serif; font-size: 1rem; font-weight: 800;
          color: var(--ink);
        }
        .trust-card__desc { font-size: 0.83rem; color: var(--ink-muted); line-height: 1.65; }
        @media (max-width: 900px) { .trust__grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 480px) { .trust__grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   7. SALE BANNER
───────────────────────────────────────────────────────── */
function SaleBanner() {
  return (
    <section className="sale-banner">
      <div className="container">
        <div className="sale-banner__inner">
          <div className="sale-banner__text">
            <h2 className="sale-banner__title">The Everything Sale Is Live</h2>
            <p className="sale-banner__desc">
              Deals across all six departments. One cart, one checkout. Don't miss out.
            </p>
          </div>
          <div className="sale-banner__ctas">
            <Link to="/department/fashion" className="btn btn-primary btn-lg" id="sale-fashion-btn">Fashion Deals</Link>
            <Link to="/department/electronics" className="sale-link" id="sale-electronics-btn">Electronics →</Link>
            <Link to="/department/beauty" className="sale-link" id="sale-beauty-btn">Beauty →</Link>
          </div>
        </div>
      </div>
      <style>{`
        .sale-banner {
          background: linear-gradient(135deg, var(--ink) 0%, #2d0a2e 50%, var(--ink) 100%);
          padding: var(--space-16) 0;
          position: relative; overflow: hidden;
        }
        .sale-banner::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 60% 50%, rgba(233,30,140,.2) 0%, transparent 70%);
          pointer-events: none;
        }
        .sale-banner__inner {
          position: relative; z-index: 1;
          display: flex; align-items: center; justify-content: space-between;
          gap: var(--space-8); flex-wrap: wrap;
        }
        .sale-banner__title {
          font-size: clamp(1.8rem, 3vw, 2.5rem); color: white;
          margin-bottom: var(--space-3);
        }
        .sale-banner__desc { color: rgba(255,255,255,.65); font-size: 1rem; max-width: 420px; }
        .sale-banner__ctas {
          display: flex; align-items: center; gap: var(--space-5); flex-wrap: wrap;
          flex-shrink: 0;
        }
        .sale-link {
          color: rgba(255,255,255,.75); font-size: 0.9rem; font-weight: 700;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,.35);
          padding-bottom: 2px;
          transition: color var(--duration) var(--ease), border-color var(--duration) var(--ease);
        }
        .sale-link:hover { color: white; border-color: var(--magenta); }
        @media (max-width: 700px) {
          .sale-banner__inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   8. HOME PAGE — Compose all sections
───────────────────────────────────────────────────────── */
const TRENDING   = PRODUCTS.filter(p => p.reviews > 200).slice(0, 8);
const BESTSELLERS = PRODUCTS.filter(p => p.badge === 'Best Seller').slice(0, 8);
const NEW_ARRIVALS = PRODUCTS.filter(p => p.badge === 'Premium' || p.badge === 'Educational' || p.badge === 'Organic').concat(
  PRODUCTS.filter(p => !p.badge)
).slice(0, 8);

export default function Home() {
  return (
    <div>
      <Hero />
      <DeptStrip />
      <DeptCards />
      <ProductSection
        id="trending"
        title="Trending Now"
        desc="What everyone's adding to cart right now."
        products={TRENDING.length >= 4 ? TRENDING : PRODUCTS.slice(0, 8)}
      />
      <SaleBanner />
      <ProductSection
        id="bestsellers"
        title="Best Sellers"
        desc="Our most loved products, trusted by thousands."
        products={BESTSELLERS.length >= 4 ? BESTSELLERS : PRODUCTS.filter(p => p.badge).slice(0, 8)}
      />
      <ProductSection
        id="new-arrivals"
        title="New Arrivals"
        desc="Fresh picks from across every department."
        products={NEW_ARRIVALS.slice(0, 8)}
      />
      <TrustSection />
    </div>
  );
}
