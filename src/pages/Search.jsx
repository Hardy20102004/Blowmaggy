import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS, DEPARTMENTS, searchProducts, sortProducts, formatPrice, getCategories } from '../data/products';
import ProductCard from '../components/ProductCard';

const SORT_OPTIONS = [
  { value: 'featured',   label: 'Featured' },
  { value: 'price-asc',  label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'rating',     label: 'Highest Rated' },
  { value: 'discount',   label: 'Best Discount' },
];

export default function Search() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || '';

  const [dept, setDept]       = useState('all');
  const [sort, setSort]       = useState('featured');
  const [maxPrice, setMaxPrice] = useState(20000);
  const [minRating, setMinRating] = useState(0);

  const raw = useMemo(() => searchProducts(q), [q]);

  const results = useMemo(() => {
    let list = [...raw];
    if (dept !== 'all')   list = list.filter(p => p.department === dept);
    if (maxPrice < 20000) list = list.filter(p => p.price <= maxPrice);
    if (minRating > 0)    list = list.filter(p => p.rating >= minRating);
    return sortProducts(list, sort);
  }, [raw, dept, sort, maxPrice, minRating]);

  return (
    <main className="container" style={{ padding: 'var(--space-8) var(--space-6) var(--space-16)' }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <h1 style={{ marginBottom: 6 }}>Search Results</h1>
        <p className="text-muted">
          {raw.length === 0
            ? 'No matches found'
            : `${results.length} result${results.length !== 1 ? 's' : ''} for`
          } {q && <strong>"{q}"</strong>}
        </p>
      </div>

      {/* Dept + sort toolbar */}
      <div className="search-toolbar">
        <div className="search-toolbar__depts">
          <button className={`tag ${dept==='all'?'active':''}`} onClick={() => setDept('all')}>
            All ({raw.length})
          </button>
          {DEPARTMENTS.map(d => {
            const cnt = raw.filter(p => p.department === d.id).length;
            if (!cnt) return null;
            return (
              <button key={d.id} className={`tag ${dept===d.id?'active':''}`} onClick={() => setDept(d.id)}>
                {d.icon} {d.name} ({cnt})
              </button>
            );
          })}
        </div>

        <div className="search-toolbar__right">
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <label className="label" style={{ margin:0, whiteSpace:'nowrap' }}>Max Price:</label>
            <select className="input" style={{ width:'auto', padding:'7px 12px' }} value={maxPrice} onChange={e => setMaxPrice(+e.target.value)}>
              <option value={20000}>Any Price</option>
              <option value={500}>Under ₹500</option>
              <option value={1000}>Under ₹1,000</option>
              <option value={3000}>Under ₹3,000</option>
              <option value={5000}>Under ₹5,000</option>
              <option value={10000}>Under ₹10,000</option>
            </select>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <label className="label" style={{ margin:0, whiteSpace:'nowrap' }}>Rating:</label>
            <select className="input" style={{ width:'auto', padding:'7px 12px' }} value={minRating} onChange={e => setMinRating(+e.target.value)}>
              <option value={0}>Any</option>
              <option value={4}>4★+</option>
              <option value={4.5}>4.5★+</option>
              <option value={4.8}>4.8★+</option>
            </select>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <label className="label" style={{ margin:0, whiteSpace:'nowrap' }}>Sort:</label>
            <select className="input" style={{ width:'auto', padding:'7px 12px' }} value={sort} onChange={e => setSort(e.target.value)}>
              {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Results count */}
      {q && (
        <div className="text-sm text-muted" style={{ marginBottom: 'var(--space-5)' }}>
          Showing {results.length} of {raw.length} results
          {(dept !== 'all' || maxPrice < 20000 || minRating > 0) && ' (filtered)'}
        </div>
      )}

      {/* Grid or empty */}
      {results.length > 0 ? (
        <div className="product-grid">
          {results.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <div className="search-empty">
          <div className="search-empty__icon">🔍</div>
          <h2>{q ? `No results for "${q}"` : 'Start searching'}</h2>
          <p className="text-muted">
            {q
              ? 'Try different keywords, check spelling, or browse a department below.'
              : 'Type in the search bar above to find products.'}
          </p>
          {q && (
            <div className="search-empty__depts">
              {DEPARTMENTS.map(d => (
                <Link key={d.id} to={`/department/${d.id}`} className="dept-chip" id={`empty-${d.id}`}>
                  <span className="dept-chip__icon" style={{ background: d.gradient }}>{d.icon}</span>
                  <span className="dept-chip__name">{d.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      <style>{`
        .search-toolbar {
          display: flex; align-items: flex-start; flex-wrap: wrap;
          gap: var(--space-4); margin-bottom: var(--space-5);
          padding: var(--space-4) var(--space-5);
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); box-shadow: var(--shadow-sm);
        }
        .search-toolbar__depts { display: flex; flex-wrap: wrap; gap: var(--space-2); flex: 1; }
        .search-toolbar__right { display: flex; flex-wrap: wrap; gap: var(--space-3); align-items: center; }
        .search-empty {
          text-align: center; padding: var(--space-16) var(--space-8);
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl);
        }
        .search-empty__icon { font-size: 4rem; margin-bottom: var(--space-4); }
        .search-empty h2 { margin-bottom: var(--space-3); }
        .search-empty .text-muted { max-width: 400px; margin: 0 auto var(--space-8); }
        .search-empty__depts {
          display: flex; flex-wrap: wrap; gap: var(--space-3);
          justify-content: center;
        }
        .dept-chip {
          display: flex; align-items: center; gap: var(--space-2);
          padding: 10px 18px; background: var(--ivory);
          border: 1.5px solid var(--border); border-radius: var(--radius-full);
          text-decoration: none; transition: all 200ms var(--ease);
        }
        .dept-chip:hover { border-color: var(--magenta); box-shadow: var(--shadow-glow); transform: translateY(-2px); }
        .dept-chip__icon {
          width: 28px; height: 28px; border-radius: 7px;
          display: flex; align-items: center; justify-content: center; font-size: 0.9rem;
        }
        .dept-chip__name { font-size: 0.85rem; font-weight: 700; color: var(--ink); }
        @media (max-width: 700px) {
          .search-toolbar { flex-direction: column; }
          .search-toolbar__right { width: 100%; }
        }
      `}</style>
    </main>
  );
}
