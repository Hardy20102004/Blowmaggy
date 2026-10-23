import React from 'react';
import { Link } from 'react-router-dom';
import { getDepartment, formatPrice, getDiscount } from '../data/products';
import { useStore } from '../context/StoreContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWished = wishlist.includes(product.id);
  const dept = getDepartment(product.department);
  const discount = getDiscount(product.price, product.originalPrice);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const keys = Object.keys(product.variants || {});
    const vk = keys.length > 0
      ? keys.map(k => `${k}:${product.variants[k][0]}`).join('|')
      : 'default';
    addToCart(product, vk, 1);
  };

  const handleWish = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const badgeClass =
    product.badge === 'Sale'        ? 'badge-coral'    :
    product.badge === 'Premium'     ? 'badge-lavender' :
    product.badge === 'Best Seller' ? 'badge-magenta'  : 'badge-magenta';

  return (
    <Link to={`/product/${product.id}`} className="product-card" id={`pcard-${product.id}`}>
      {/* Image */}
      <div className="product-card__img-wrap">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__img"
          loading="lazy"
          onError={e => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x600/f5ede6/78716c?text=${encodeURIComponent(product.name.split(' ').slice(0,2).join('+')).replace(/%2B/g,'+')}`;
          }}
        />
        {product.badge && (
          <span className={`product-card__badge badge ${badgeClass}`}>{product.badge}</span>
        )}
        {discount > 0 && (
          <span className="product-card__disc">{discount}% OFF</span>
        )}
        <button
          className={`product-card__wish ${isWished ? 'active' : ''}`}
          onClick={handleWish}
          aria-label={isWished ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {isWished ? '♥' : '♡'}
        </button>
        <button
          className="product-card__cart-hover"
          onClick={handleAdd}
          id={`add-${product.id}`}
          aria-label={`Add ${product.name} to cart`}
        >
          + Add to Cart
        </button>
      </div>

      {/* Body */}
      <div className="product-card__body">
        <div className="product-card__dept" style={{ color: dept?.color }}>
          {dept?.icon} {dept?.name}
        </div>
        <h3 className="product-card__name">{product.name}</h3>
        {product.brand && (
          <div className="product-card__brand">{product.brand}</div>
        )}
        <div className="product-card__stars">
          {'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}
          <span className="product-card__rev">({product.reviews})</span>
        </div>
        <div className="product-card__price-row">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="product-card__orig">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
        {product.stock === 0 && (
          <span className="product-card__oos">Out of Stock</span>
        )}
      </div>

      <style>{`
        .product-card {
          display: flex; flex-direction: column;
          background: var(--white, var(--surface)); border-radius: var(--radius-lg);
          border: 1px solid var(--border); overflow: hidden;
          text-decoration: none;
          transition: box-shadow 250ms var(--ease), transform 250ms var(--ease);
          height: 100%;
        }
        .product-card:hover {
          box-shadow: var(--shadow-lg); transform: translateY(-5px);
          border-color: rgba(233,30,140,.15);
        }

        /* Image area */
        .product-card__img-wrap {
          position: relative; overflow: hidden;
          aspect-ratio: 4/3; background: var(--ivory-dark);
        }
        .product-card__img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 400ms var(--ease);
        }
        .product-card:hover .product-card__img { transform: scale(1.06); }

        /* Badges */
        .product-card__badge {
          position: absolute; top: 10px; left: 10px;
          font-size: 0.68rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.05em;
        }
        .product-card__disc {
          position: absolute; top: 10px; right: 10px;
          background: #EF4444; color: white;
          padding: 3px 8px; border-radius: var(--radius-full);
          font-size: 0.68rem; font-weight: 700;
        }

        /* Wishlist btn */
        .product-card__wish {
          position: absolute; bottom: 44px; right: 10px;
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,.9); border: none;
          font-size: 1rem; cursor: pointer; color: var(--ink-muted);
          display: flex; align-items: center; justify-content: center;
          transition: all var(--duration) var(--ease);
          box-shadow: var(--shadow-sm);
          opacity: 0;
        }
        .product-card:hover .product-card__wish { opacity: 1; }
        .product-card__wish.active {
          opacity: 1; color: var(--magenta);
        }
        .product-card__wish.active:hover, .product-card__wish:hover {
          color: var(--magenta); transform: scale(1.15);
        }

        /* Add-to-cart hover bar */
        .product-card__cart-hover {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(135deg, var(--magenta), var(--coral));
          color: white; padding: 10px;
          font-size: 0.8rem; font-weight: 700; border: none; cursor: pointer;
          transform: translateY(100%);
          transition: transform 250ms var(--ease); letter-spacing: 0.03em;
        }
        .product-card:hover .product-card__cart-hover { transform: translateY(0); }

        /* Body */
        .product-card__body {
          padding: 12px 14px 16px;
          display: flex; flex-direction: column; gap: 3px;
          flex: 1;
        }
        .product-card__dept {
          font-size: 0.7rem; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.06em;
        }
        .product-card__name {
          font-family: 'Inter', sans-serif; font-size: 0.875rem; font-weight: 700;
          color: var(--ink); line-height: 1.3; margin-top: 2px;
          display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
        }
        .product-card__brand {
          font-size: 0.72rem; color: var(--ink-light); font-weight: 600;
        }
        .product-card__stars {
          color: #FBBF24; font-size: 0.75rem; margin: 2px 0;
        }
        .product-card__rev {
          color: var(--ink-light); font-size: 0.7rem;
          margin-left: 4px; font-family: 'Inter',sans-serif;
        }
        .product-card__price-row {
          display: flex; align-items: center; gap: 7px; margin-top: 4px;
        }
        .product-card__price {
          font-size: 0.95rem; font-weight: 800; color: var(--ink); font-family: 'Inter',sans-serif;
        }
        .product-card__orig {
          font-size: 0.78rem; color: var(--ink-light);
          text-decoration: line-through; font-family: 'Inter',sans-serif;
        }
        .product-card__oos {
          font-size: 0.72rem; font-weight: 700; color: #DC2626;
          background: #FEE2E2; padding: 2px 8px; border-radius: var(--radius-full);
          width: fit-content; margin-top: 3px;
        }
      `}</style>
    </Link>
  );
}
