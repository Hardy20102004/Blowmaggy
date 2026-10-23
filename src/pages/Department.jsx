import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  getDepartment, getProductsByDept, getCategories,
  formatPrice, getDiscount, sortProducts,
} from '../data/products';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';

const SORT_OPTIONS = [
  { value: 'featured',   label: 'Featured' },
  { value: 'price-asc',  label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'rating',     label: 'Highest Rated' },
  { value: 'discount',   label: 'Best Discount' },
];

export default function Department() {
  const { id } = useParams();
  const dept = getDepartment(id);
  const allProducts = getProductsByDept(id);
  const categories = getCategories(id);

  /* ── Filter state ─────────────────────────────── */
  const maxPossible = Math.max(...allProducts.map(p => p.price), 100000);
  const [sort,      setSort]      = useState('featured');
  const [category,  setCategory]  = useState('all');
  const [maxPrice,  setMaxPrice]  = useState(maxPossible);
  const [minRating, setMinRating] = useState(0);
  const [inStock,   setInStock]   = useState(false);
  const [showSale,  setShowSale]  = useState(false);

  const activeFilterCount = [
    category !== 'all',
    maxPrice < maxPossible,
    minRating > 0,
    inStock,
    showSale,
  ].filter(Boolean).length;

  const clearFilters = () => {
    setCategory('all'); setMaxPrice(maxPossible);
    setMinRating(0); setInStock(false); setShowSale(false);
  };

  /* ── Derived products ──────────────────────────── */
  const products = useMemo(() => {
    let list = [...allProducts];
    if (category !== 'all') list = list.filter(p => p.category === category);
    if (maxPrice < maxPossible) list = list.filter(p => p.price <= maxPrice);
    if (minRating > 0) list = list.filter(p => p.rating >= minRating);
    if (inStock)  list = list.filter(p => p.stock > 0);
    if (showSale) list = list.filter(p => p.originalPrice > p.price);
    return sortProducts(list, sort);
  }, [allProducts, category, maxPrice, maxPossible, minRating, inStock, showSale, sort]);

  if (!dept) return (
    <div className="flex-center" style={{ height: '60vh', flexDirection: 'column', gap: 16 }}>
      <div style={{ fontSize: '3rem' }}>🔍</div>
      <h2>Department not found</h2>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );

  return (
    <main>
      {/* ── Hero Banner ──────────────────────────── */}
      <div className="dept-hero" style={{ '--dept-color': dept.color }}>
        <div className="dept-hero__bg" style={{ backgroundImage: `url(${dept.heroImage})` }} />
        <div className="dept-hero__overlay" />
        <div className="container">
          <nav className="dept-hero__bread">
            <Link to="/">Home</Link> <span>/</span>
            <span>{dept.name}</span>
          </nav>
          <span className="dept-hero__icon">{dept.icon}</span>
          <h1 className="dept-hero__title">{dept.name}</h1>
          <p className="dept-hero__sub">{dept.description}</p>
          <div className="dept-hero__meta">
            <span className="badge badge-lavender">{allProducts.length} Products</span>
            <span className="dept-hero__tagline">{dept.tagline}</span>
          </div>
        </div>
      </div>

      <div className="container dept-body">
        {/* ── Sidebar filters ──────────────────── */}
        <aside className="dept-filters">
          <div className="dept-filters__head">
            <h3>Filters</h3>
            {activeFilterCount > 0 && (
              <button className="btn btn-ghost btn-sm text-magenta" onClick={clearFilters}>
                Clear ({activeFilterCount})
              </button>
            )}
          </div>

          {/* Category */}
          <div className="filter-group">
            <h4 className="filter-group__label">Category</h4>
            <div className="filter-group__opts">
              <label className={`filter-radio ${category === 'all' ? 'active' : ''}`}>
                <input type="radio" name="cat" value="all" checked={category === 'all'} onChange={() => setCategory('all')} />
                All Categories
              </label>
              {categories.map(c => (
                <label key={c} className={`filter-radio ${category === c ? 'active' : ''}`}>
                  <input type="radio" name="cat" value={c} checked={category === c} onChange={() => setCategory(c)} />
                  {c}
                </label>
              ))}
            </div>
          </div>

          {/* Price range */}
          <div className="filter-group">
            <h4 className="filter-group__label">
              Price Range
              <span className="filter-group__val">{formatPrice(maxPrice)}</span>
            </h4>
            <input
              type="range"
              min={0}
              max={maxPossible}
              step={100}
              value={maxPrice}
              onChange={e => setMaxPrice(+e.target.value)}
              className="price-slider"
            />
            <div className="price-slider-labels">
              <span>₹0</span>
              <span>{formatPrice(maxPossible)}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="filter-group">
            <h4 className="filter-group__label">Minimum Rating</h4>
            <div className="filter-group__opts">
              {[0, 4, 4.5, 4.8].map(r => (
                <label key={r} className={`filter-radio ${minRating === r ? 'active' : ''}`}>
                  <input type="radio" name="rating" value={r} checked={minRating === r} onChange={() => setMinRating(r)} />
                  {r === 0 ? 'Any Rating' : `${r}★ & above`}
                </label>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="filter-group">
            <h4 className="filter-group__label">Availability</h4>
            <label className="filter-toggle">
              <span>In Stock Only</span>
              <button
                className={`toggle-btn ${inStock ? 'on' : ''}`}
                onClick={() => setInStock(v => !v)}
                role="switch" aria-checked={inStock}
              />
            </label>
            <label className="filter-toggle" style={{ marginTop: 8 }}>
              <span>On Sale</span>
              <button
                className={`toggle-btn ${showSale ? 'on' : ''}`}
                onClick={() => setShowSale(v => !v)}
                role="switch" aria-checked={showSale}
              />
            </label>
          </div>
        </aside>

        {/* ── Main Content ─────────────────────── */}
        <div className="dept-main">
          {/* Toolbar */}
          <div className="dept-toolbar">
            <span className="dept-toolbar__count">
              {products.length} product{products.length !== 1 ? 's' : ''}
              {activeFilterCount > 0 && ' (filtered)'}
            </span>
            <div className="dept-toolbar__sort">
              <label className="label" style={{ margin: 0 }}>Sort by:</label>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="input"
                style={{ width: 'auto', padding: '8px 14px' }}
              >
                {SORT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Active filter pills */}
          {activeFilterCount > 0 && (
            <div className="active-filters">
              {category !== 'all'    && <span className="filter-pill">{category} <button onClick={() => setCategory('all')}>×</button></span>}
              {maxPrice < maxPossible && <span className="filter-pill">Under {formatPrice(maxPrice)} <button onClick={() => setMaxPrice(maxPossible)}>×</button></span>}
              {minRating > 0         && <span className="filter-pill">{minRating}★+ <button onClick={() => setMinRating(0)}>×</button></span>}
              {inStock               && <span className="filter-pill">In Stock <button onClick={() => setInStock(false)}>×</button></span>}
              {showSale              && <span className="filter-pill">On Sale <button onClick={() => setShowSale(false)}>×</button></span>}
            </div>
          )}

          {/* Grid or empty state */}
          {products.length > 0 ? (
            <div className="product-grid">
              {products.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          ) : (
            <div className="dept-empty">
              <div className="dept-empty__icon">🫙</div>
              <h3>No products match</h3>
              <p>Try adjusting your filters or browse the full catalogue.</p>
              <button className="btn btn-primary" onClick={clearFilters}>Clear All Filters</button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        /* Hero */
        .dept-hero {
          position: relative; padding: var(--space-12) 0;
          overflow: hidden; min-height: 260px; display: flex; align-items: center;
        }
        .dept-hero__bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          opacity: 0.22;
        }
        .dept-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,.2) 100%);
        }
        .dept-hero > .container { position: relative; z-index: 1; color: white; }
        .dept-hero__bread {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.78rem; color: rgba(255,255,255,.6); margin-bottom: var(--space-4);
        }
        .dept-hero__bread a { color: rgba(255,255,255,.6); }
        .dept-hero__bread a:hover { color: white; }
        .dept-hero__icon { font-size: 2.5rem; display: block; margin-bottom: var(--space-2); }
        .dept-hero__title { font-size: clamp(2rem,5vw,3.5rem); color: white; margin-bottom: var(--space-2); }
        .dept-hero__sub { font-size: 1rem; color: rgba(255,255,255,.7); margin-bottom: var(--space-4); }
        .dept-hero__meta { display: flex; align-items: center; gap: var(--space-4); }
        .dept-hero__tagline { font-size: 0.82rem; color: rgba(255,255,255,.55); font-style: italic; }

        /* Layout */
        .dept-body {
          display: grid; grid-template-columns: 260px 1fr;
          gap: var(--space-8); padding-top: var(--space-8); padding-bottom: var(--space-16);
          align-items: start;
        }

        /* Filters */
        .dept-filters {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); padding: var(--space-5);
          position: sticky; top: 100px;
          display: flex; flex-direction: column; gap: var(--space-5);
        }
        .dept-filters__head {
          display: flex; align-items: center; justify-content: space-between;
        }
        .dept-filters__head h3 { font-family: 'Inter',sans-serif; font-size: 1rem; font-weight: 800; }

        .filter-group { display: flex; flex-direction: column; gap: var(--space-3); }
        .filter-group + .filter-group { border-top: 1px solid var(--border); padding-top: var(--space-4); }
        .filter-group__label {
          font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.08em; color: var(--ink-muted);
          display: flex; justify-content: space-between;
        }
        .filter-group__val { color: var(--magenta); font-weight: 700; text-transform: none; }
        .filter-group__opts { display: flex; flex-direction: column; gap: 6px; }

        .filter-radio {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.85rem; cursor: pointer; color: var(--ink-muted);
          padding: 5px 8px; border-radius: var(--radius-sm);
          transition: background var(--duration) var(--ease);
        }
        .filter-radio:hover { background: var(--ivory); }
        .filter-radio.active { color: var(--magenta); font-weight: 600; }
        .filter-radio input { accent-color: var(--magenta); }

        .price-slider {
          width: 100%; accent-color: var(--magenta);
          -webkit-appearance: none; height: 4px;
          background: var(--border); border-radius: 2px; outline: none;
        }
        .price-slider::-webkit-slider-thumb {
          -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%;
          background: var(--magenta); cursor: pointer; border: 2px solid white;
          box-shadow: var(--shadow-sm);
        }
        .price-slider-labels { display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--ink-light); margin-top: 4px; }

        .filter-toggle {
          display: flex; align-items: center; justify-content: space-between;
          font-size: 0.85rem; cursor: pointer; color: var(--ink-muted);
        }
        .toggle-btn {
          width: 40px; height: 22px; border-radius: 11px;
          background: var(--border); border: none; cursor: pointer;
          position: relative; transition: background 200ms var(--ease);
          flex-shrink: 0;
        }
        .toggle-btn::after {
          content: ''; position: absolute;
          top: 3px; left: 3px; width: 16px; height: 16px;
          border-radius: 50%; background: white;
          transition: transform 200ms var(--ease); box-shadow: var(--shadow-sm);
        }
        .toggle-btn.on { background: var(--magenta); }
        .toggle-btn.on::after { transform: translateX(18px); }

        /* Toolbar */
        .dept-main { display: flex; flex-direction: column; gap: var(--space-5); }
        .dept-toolbar {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: var(--space-3);
          padding: var(--space-4) var(--space-5);
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);
        }
        .dept-toolbar__count { font-size: 0.875rem; color: var(--ink-muted); font-weight: 600; }
        .dept-toolbar__sort { display: flex; align-items: center; gap: var(--space-3); }

        /* Active pills */
        .active-filters { display: flex; flex-wrap: wrap; gap: var(--space-2); }
        .filter-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 12px; border-radius: var(--radius-full);
          background: #FDE8F3; color: var(--magenta);
          font-size: 0.78rem; font-weight: 600;
          border: 1px solid #F9A8D4;
        }
        .filter-pill button {
          background: none; border: none; cursor: pointer;
          color: var(--magenta); font-size: 1rem; line-height: 1; padding: 0;
        }

        /* Empty */
        .dept-empty {
          text-align: center; padding: var(--space-20) var(--space-8);
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl);
        }
        .dept-empty__icon { font-size: 4rem; margin-bottom: var(--space-4); }
        .dept-empty h3 { margin-bottom: var(--space-3); }
        .dept-empty p { color: var(--ink-muted); margin-bottom: var(--space-6); }

        @media (max-width: 900px) {
          .dept-body { grid-template-columns: 1fr; }
          .dept-filters { position: static; }
        }
      `}</style>
    </main>
  );
}
