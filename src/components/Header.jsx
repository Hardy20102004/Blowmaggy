import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { DEPARTMENTS } from '../data/products';

/* ── Announcement Bar ───────────────────────────────── */
function AnnouncementBar() {
  const msgs = [
    'THE EVERYTHING SALE IS LIVE — Discover something for every part of your life.',
    'FREE SHIPPING on orders above ₹499 · All departments, one cart.',
    'NEW ARRIVALS just dropped in Fashion, Beauty & Electronics. Shop now →',
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % msgs.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="ann-bar">
      <span className="ann-bar__text">{msgs[idx]}</span>
      <style>{`
        .ann-bar {
          background: linear-gradient(90deg, var(--ink) 0%, #2d1040 50%, var(--ink) 100%);
          color: white; text-align: center;
          padding: 10px var(--space-4);
          font-size: 0.78rem; font-weight: 600; letter-spacing: 0.04em;
          position: relative; overflow: hidden;
        }
        .ann-bar::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(233,30,140,.15) 50%, transparent 100%);
        }
        .ann-bar__text { position: relative; z-index: 1; }
        .ann-bar__text .ann-magenta { color: var(--magenta); }
      `}</style>
    </div>
  );
}

export default function Header() {
  const { cartCount, searchQuery, setSearch } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [localQ, setLocalQ] = useState(searchQuery || '');
  const navigate = useNavigate();
  const location = useLocation();
  const deptRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); setDeptOpen(false); }, [location.pathname]);

  useEffect(() => {
    const fn = (e) => {
      if (deptRef.current && !deptRef.current.contains(e.target)) setDeptOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (localQ.trim()) {
      if (setSearch) setSearch(localQ.trim());
      navigate(`/search?q=${encodeURIComponent(localQ.trim())}`);
    }
  };

  return (
    <>
      <AnnouncementBar />
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="container">
          <div className="header__inner">
            {/* Logo */}
            <Link to="/" className="header__logo">
              <span className="logo-text">BLOW<span className="logo-slash">/</span>MAGGY</span>
            </Link>

            {/* Dept Nav */}
            <nav className="header__nav" ref={deptRef}>
              <button
                className="header__depts-btn"
                onClick={() => setDeptOpen(v => !v)}
                aria-expanded={deptOpen}
                id="dept-nav-btn"
              >
                Departments
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              {deptOpen && (
                <div className="dept-dropdown" role="menu">
                  {DEPARTMENTS.map(d => (
                    <Link
                      key={d.id}
                      to={`/department/${d.id}`}
                      className="dept-dropdown__item"
                      onClick={() => setDeptOpen(false)}
                      role="menuitem"
                    >
                      <span className="dept-dropdown__icon" style={{ background: d.gradient }}>{d.icon}</span>
                      <div>
                        <div className="dept-dropdown__name">{d.name}</div>
                        <div className="dept-dropdown__tagline">{d.tagline}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </nav>

            {/* Search */}
            <form className="header__search" onSubmit={handleSearch} role="search">
              <svg className="header__search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Search products, brands, departments…"
                value={localQ}
                onChange={e => setLocalQ(e.target.value)}
                className="header__search-input"
                id="global-search"
                aria-label="Search"
              />
              {localQ && (
                <button type="button" onClick={() => setLocalQ('')} className="header__search-clear">×</button>
              )}
            </form>

            {/* Actions */}
            <div className="header__actions">
              <Link to="/wishlist" className="header__action-btn" title="Wishlist" id="wishlist-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </Link>
              <Link to="/orders" className="header__action-btn" title="My Orders" id="orders-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </Link>
              <Link to="/admin" className="header__action-btn" title="Account / Admin" id="account-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </Link>
              <Link to="/cart" className="header__cart-btn" id="cart-btn" aria-label={`Cart, ${cartCount} items`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                {cartCount > 0 && (
                  <span className="header__cart-badge">{cartCount > 99 ? '99+' : cartCount}</span>
                )}
              </Link>
              <button
                className="header__burger"
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Toggle mobile menu"
                aria-expanded={menuOpen}
                id="mobile-menu-btn"
              >
                <span className={menuOpen ? 'open' : ''} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="header__mobile-menu" id="mobile-menu">
              <form onSubmit={handleSearch} className="header__mobile-search">
                <input
                  type="text"
                  placeholder="Search products…"
                  value={localQ}
                  onChange={e => setLocalQ(e.target.value)}
                  className="input"
                  aria-label="Mobile search"
                />
                <button type="submit" className="btn btn-primary btn-sm">Go</button>
              </form>
              <div className="header__mobile-depts">
                {DEPARTMENTS.map(d => (
                  <Link key={d.id} to={`/department/${d.id}`} className="header__mobile-dept">
                    <span>{d.icon}</span> {d.name}
                  </Link>
                ))}
              </div>
              <div className="header__mobile-links">
                <Link to="/wishlist">♡ &nbsp;Wishlist</Link>
                <Link to="/orders">📦 &nbsp;My Orders</Link>
                <Link to="/cart">🛒 &nbsp;Cart {cartCount > 0 && `(${cartCount})`}</Link>
                <Link to="/admin">👤 &nbsp;Account / Admin</Link>
              </div>
            </div>
          )}
        </div>

        <style>{`
          .header {
            position: sticky; top: 0; z-index: 1000;
            background: rgba(253,248,245,0.88);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid transparent;
            transition: all 300ms var(--ease);
          }
          .header--scrolled {
            background: rgba(253,248,245,0.98);
            border-bottom-color: var(--border);
            box-shadow: 0 2px 20px rgba(0,0,0,.06);
          }
          .header__inner {
            display: flex; align-items: center; gap: var(--space-5);
            height: 68px;
          }
          .header__logo { flex-shrink: 0; text-decoration: none; }
          .logo-text {
            font-family: 'Inter', sans-serif;
            font-weight: 900; font-size: 1.35rem;
            letter-spacing: -0.04em; color: var(--ink);
          }
          .logo-slash { color: var(--magenta); }

          /* Nav */
          .header__nav { position: relative; flex-shrink: 0; }
          .header__depts-btn {
            display: flex; align-items: center; gap: 6px;
            font-size: 0.875rem; font-weight: 600;
            color: var(--ink); padding: 8px 16px;
            border-radius: var(--radius-full);
            background: var(--surface);
            border: 1.5px solid var(--border);
            transition: all var(--duration) var(--ease);
            cursor: pointer;
          }
          .header__depts-btn:hover { border-color: var(--magenta); color: var(--magenta); }

          .dept-dropdown {
            position: absolute; top: calc(100% + 12px); left: 0;
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: var(--radius-xl);
            box-shadow: var(--shadow-xl);
            padding: var(--space-3);
            display: grid; grid-template-columns: 1fr 1fr;
            gap: var(--space-2); min-width: 480px;
            animation: fadeDown 200ms var(--ease);
            z-index: 200;
          }
          @keyframes fadeDown {
            from { opacity:0; transform:translateY(-8px); }
            to   { opacity:1; transform:translateY(0); }
          }
          .dept-dropdown__item {
            display: flex; align-items: center; gap: var(--space-3);
            padding: 10px var(--space-4);
            border-radius: var(--radius-md);
            transition: background var(--duration) var(--ease);
            text-decoration: none;
          }
          .dept-dropdown__item:hover { background: var(--ivory); }
          .dept-dropdown__icon {
            width: 40px; height: 40px; border-radius: var(--radius-md);
            display: flex; align-items: center; justify-content: center;
            font-size: 1.2rem; flex-shrink: 0;
          }
          .dept-dropdown__name  { font-weight: 600; font-size: 0.875rem; color: var(--ink); }
          .dept-dropdown__tagline { font-size: 0.72rem; color: var(--ink-light); margin-top: 1px; }

          /* Search */
          .header__search {
            flex: 1; max-width: 420px;
            display: flex; align-items: center; gap: var(--space-2);
            background: var(--surface);
            border: 1.5px solid var(--border);
            border-radius: var(--radius-full);
            padding: 9px 16px;
            transition: border-color var(--duration) var(--ease), box-shadow var(--duration) var(--ease);
          }
          .header__search:focus-within {
            border-color: var(--magenta);
            box-shadow: var(--shadow-glow);
          }
          .header__search-icon { color: var(--ink-light); flex-shrink: 0; }
          .header__search-input {
            flex: 1; border: none; background: none;
            font-size: 0.875rem; color: var(--ink);
          }
          .header__search-input:focus { outline: none; }
          .header__search-input::placeholder { color: var(--ink-light); }
          .header__search-clear {
            background: none; border: none; color: var(--ink-light);
            cursor: pointer; font-size: 1.1rem; line-height: 1;
            padding: 0 2px; flex-shrink: 0;
          }
          .header__search-clear:hover { color: var(--magenta); }

          /* Actions */
          .header__actions {
            display: flex; align-items: center; gap: var(--space-2);
            margin-left: auto; flex-shrink: 0;
          }
          .header__action-btn {
            width: 40px; height: 40px; border-radius: var(--radius-full);
            display: flex; align-items: center; justify-content: center;
            color: var(--ink-muted);
            transition: all var(--duration) var(--ease);
            text-decoration: none;
          }
          .header__action-btn:hover { color: var(--magenta); background: var(--lavender-soft); }

          .header__cart-btn {
            position: relative;
            display: flex; align-items: center; justify-content: center;
            width: 44px; height: 44px;
            background: linear-gradient(135deg, var(--magenta), var(--coral));
            color: white; border-radius: var(--radius-full);
            box-shadow: 0 4px 14px rgba(233,30,140,.3);
            transition: all var(--duration) var(--ease);
            text-decoration: none;
          }
          .header__cart-btn:hover {
            transform: scale(1.06);
            box-shadow: 0 6px 20px rgba(233,30,140,.45);
          }
          .header__cart-badge {
            position: absolute; top: -5px; right: -5px;
            background: var(--ink); color: white;
            font-size: 0.65rem; font-weight: 800;
            min-width: 19px; height: 19px;
            border-radius: 10px; padding: 0 5px;
            display: flex; align-items: center; justify-content: center;
            border: 2px solid var(--ivory);
            animation: pop 200ms var(--ease);
          }
          @keyframes pop {
            from { transform: scale(0); }
            to   { transform: scale(1); }
          }

          /* Burger */
          .header__burger {
            display: none; width: 36px; height: 36px;
            align-items: center; justify-content: center;
            background: none; border: none; cursor: pointer; flex-shrink: 0;
          }
          .header__burger span,
          .header__burger span::before,
          .header__burger span::after {
            display: block; width: 22px; height: 2px;
            background: var(--ink); border-radius: 2px;
            transition: all 300ms var(--ease); position: relative;
          }
          .header__burger span::before,
          .header__burger span::after { content: ''; position: absolute; }
          .header__burger span::before { top: -7px; }
          .header__burger span::after  { top:  7px; }
          .header__burger span.open { background: transparent; }
          .header__burger span.open::before { top: 0; transform: rotate(45deg); }
          .header__burger span.open::after  { top: 0; transform: rotate(-45deg); }

          /* Mobile menu */
          .header__mobile-menu {
            padding: var(--space-4) 0 var(--space-6);
            border-top: 1px solid var(--border);
            animation: fadeDown 200ms var(--ease);
          }
          .header__mobile-search {
            display: flex; gap: var(--space-3); margin-bottom: var(--space-5);
          }
          .header__mobile-search .input { border-radius: var(--radius-full); }
          .header__mobile-depts {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: var(--space-2); margin-bottom: var(--space-4);
          }
          .header__mobile-dept {
            display: flex; align-items: center; gap: var(--space-2);
            padding: var(--space-3); border-radius: var(--radius-md);
            background: var(--surface); border: 1px solid var(--border);
            font-size: 0.85rem; font-weight: 600; color: var(--ink);
            text-decoration: none; transition: all var(--duration) var(--ease);
          }
          .header__mobile-dept:hover { border-color: var(--magenta); color: var(--magenta); }
          .header__mobile-links {
            display: flex; flex-direction: column; gap: var(--space-1);
          }
          .header__mobile-links a {
            padding: 10px var(--space-3); border-radius: var(--radius-md);
            font-weight: 600; color: var(--ink); text-decoration: none;
            transition: all var(--duration) var(--ease);
          }
          .header__mobile-links a:hover { color: var(--magenta); background: var(--lavender-soft); }

          /* Responsive */
          @media (max-width: 960px) {
            .header__nav, .header__search { display: none; }
            .header__burger { display: flex; }
          }
          @media (max-width: 600px) {
            .header__action-btn { display: none; }
          }
        `}</style>
      </header>
    </>
  );
}
