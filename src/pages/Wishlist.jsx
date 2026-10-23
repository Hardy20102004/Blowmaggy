import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { PRODUCTS, getDepartment, formatPrice, getDiscount } from '../data/products';

function WishCard({ product }) {
  const { toggleWishlist, moveToCart, wishlist } = useStore();
  const dept     = getDepartment(product.department);
  const discount = getDiscount(product.price, product.originalPrice);
  const isWished = wishlist.includes(product.id);

  return (
    <div className="wish-card" id={`wishcard-${product.id}`}>
      {/* Image */}
      <Link to={`/product/${product.id}`} className="wish-card__img-wrap">
        <img src={product.image} alt={product.name} className="wish-card__img" loading="lazy" />
        {discount > 0 && <span className="wish-card__disc">{discount}% OFF</span>}
        {product.stock === 0 && <div className="wish-card__oos">Out of Stock</div>}
      </Link>

      {/* Info */}
      <div className="wish-card__body">
        <div className="wish-card__dept" style={{ color: dept?.color }}>
          {dept?.icon} {dept?.name}
        </div>
        <Link to={`/product/${product.id}`} className="wish-card__name">{product.name}</Link>
        <div className="wish-card__brand">{product.brand}</div>
        <div className="wish-card__stars">
          {'★'.repeat(Math.round(product.rating))}
          <span className="wish-card__rev"> ({product.reviews})</span>
        </div>
        <div className="wish-card__price-row">
          <span className="wish-card__price">{formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="wish-card__orig">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        {/* Actions */}
        <div className="wish-card__btns">
          <button
            className="btn btn-primary btn-sm w-full"
            onClick={() => moveToCart(product)}
            disabled={product.stock === 0}
            id={`wish-move-cart-${product.id}`}
          >
            {product.stock === 0 ? 'Out of Stock' : '🛒 Move to Cart'}
          </button>
          <button
            className="wish-card__remove"
            onClick={() => toggleWishlist(product.id)}
            aria-label={`Remove ${product.name} from wishlist`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Wishlist() {
  const { wishlist, moveToCart } = useStore();
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));
  const inStockItems = items.filter(p => p.stock > 0);

  return (
    <main className="container" style={{ padding: 'var(--space-8) var(--space-6) var(--space-16)' }}>

      {/* Header */}
      <div className="flex-between" style={{ marginBottom: 'var(--space-8)' }}>
        <div>
          <h1>My Wishlist</h1>
          <p className="text-muted text-sm" style={{ marginTop: 4 }}>
            {items.length} saved item{items.length !== 1 ? 's' : ''}
            {inStockItems.length < items.length && ` · ${items.length - inStockItems.length} out of stock`}
          </p>
        </div>
        {inStockItems.length > 0 && (
          <button
            className="btn btn-primary"
            onClick={() => inStockItems.forEach(p => moveToCart(p))}
            id="wishlist-add-all-btn"
          >
            🛒 Move All to Cart ({inStockItems.length})
          </button>
        )}
      </div>

      {items.length === 0 ? (
        /* ── Empty state ── */
        <div className="wishlist-empty">
          <div className="wishlist-empty__icon">♡</div>
          <h2>Your wishlist is empty</h2>
          <p className="text-muted">
            Save items you love by clicking the heart icon on any product.
            They'll appear here, ready to move to your cart any time.
          </p>
          <Link to="/" className="btn btn-primary btn-lg" id="wishlist-browse-btn">
            Discover Products →
          </Link>
          <div className="wishlist-empty__depts">
            {['fashion','beauty','electronics','home','grocery','kids'].map(id => {
              const d = getDepartment(id);
              return (
                <Link key={id} to={`/department/${id}`} className="wishlist-dept-chip">
                  {d?.icon} {d?.name}
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="wish-grid">
          {items.map(p => <WishCard key={p.id} product={p} />)}
        </div>
      )}

      <style>{`
        /* Grid */
        .wish-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: var(--space-5);
        }

        /* Card */
        .wish-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: var(--radius-xl); overflow: hidden;
          display: flex; flex-direction: column;
          transition: box-shadow 250ms var(--ease), transform 250ms var(--ease);
        }
        .wish-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-4px); }

        .wish-card__img-wrap {
          display: block; position: relative; overflow: hidden; aspect-ratio: 4/3;
          background: var(--ivory-dark);
        }
        .wish-card__img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 400ms var(--ease);
        }
        .wish-card:hover .wish-card__img { transform: scale(1.05); }
        .wish-card__disc {
          position: absolute; top: 10px; left: 10px;
          background: #EF4444; color: white; padding: 3px 8px;
          border-radius: var(--radius-full); font-size: 0.68rem; font-weight: 700;
        }
        .wish-card__oos {
          position: absolute; inset: 0;
          background: rgba(0,0,0,.4);
          display: flex; align-items: center; justify-content: center;
          color: white; font-weight: 700; font-size: 0.875rem; letter-spacing: .04em;
        }

        .wish-card__body {
          padding: var(--space-4) var(--space-4) var(--space-5);
          display: flex; flex-direction: column; gap: 4px; flex: 1;
        }
        .wish-card__dept { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: .06em; }
        .wish-card__name {
          font-family: 'Inter',sans-serif; font-size: 0.875rem; font-weight: 700;
          color: var(--ink); line-height: 1.3;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .wish-card__name:hover { color: var(--magenta); }
        .wish-card__brand { font-size: 0.7rem; color: var(--ink-light); }
        .wish-card__stars { color: #FBBF24; font-size: 0.75rem; }
        .wish-card__rev   { color: var(--ink-light); font-size: 0.7rem; font-family: 'Inter',sans-serif; }
        .wish-card__price-row { display: flex; align-items: center; gap: 7px; margin-top: 4px; }
        .wish-card__price { font-size: 0.95rem; font-weight: 800; color: var(--ink); font-family: 'Inter',sans-serif; }
        .wish-card__orig  { font-size: 0.78rem; color: var(--ink-light); text-decoration: line-through; }

        .wish-card__btns  { display: flex; flex-direction: column; gap: var(--space-2); margin-top: var(--space-4); }
        .wish-card__remove {
          display: flex; align-items: center; justify-content: center; gap: 5px;
          padding: 7px; border-radius: var(--radius-full);
          font-size: 0.75rem; font-weight: 600; color: var(--ink-muted);
          border: 1px solid var(--border); background: none; cursor: pointer;
          transition: all var(--duration) var(--ease);
        }
        .wish-card__remove:hover { color: var(--error); background: #FEE2E2; border-color: #FCA5A5; }

        /* Empty */
        .wishlist-empty {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; padding: var(--space-16) var(--space-8);
          max-width: 480px; margin: 0 auto;
        }
        .wishlist-empty__icon {
          font-size: 5rem; color: var(--magenta);
          animation: heartbeat 2s ease-in-out infinite;
          margin-bottom: var(--space-5); line-height: 1;
        }
        @keyframes heartbeat {
          0%,100% { transform: scale(1); }
          14%     { transform: scale(1.15); }
          28%     { transform: scale(1); }
          42%     { transform: scale(1.1); }
          70%     { transform: scale(1); }
        }
        .wishlist-empty h2 { margin-bottom: var(--space-3); }
        .wishlist-empty .text-muted { margin-bottom: var(--space-7); line-height: 1.75; }
        .wishlist-empty__depts {
          display: flex; flex-wrap: wrap; gap: var(--space-2);
          justify-content: center; margin-top: var(--space-8);
        }
        .wishlist-dept-chip {
          padding: 6px 14px; border: 1.5px solid var(--border);
          border-radius: var(--radius-full); font-size: 0.8rem; font-weight: 600;
          color: var(--ink); text-decoration: none;
          transition: all var(--duration) var(--ease);
        }
        .wishlist-dept-chip:hover { border-color: var(--magenta); color: var(--magenta); }

        @media (max-width: 480px) {
          .wish-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </main>
  );
}
