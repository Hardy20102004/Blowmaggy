import React from 'react';
import { Link } from 'react-router-dom';
import { DEPARTMENTS } from '../data/products';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      {/* Top wave */}
      <div className="footer__wave" />

      <div className="container">
        <div className="footer__top">

          {/* Brand col */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              BLOW<span className="footer__logo-slash">/</span>MAGGY
            </Link>
            <p className="footer__tagline">Every Department. One Cart. One Checkout.</p>
            <p className="footer__desc">
              The multi-departmental online store bringing Fashion, Beauty, Electronics,
              Home & Living, Grocery, and Kids & Toys under one roof.
            </p>
            <div className="footer__socials">
              {[['IG', 'Instagram'], ['PT', 'Pinterest'], ['TW', 'Twitter / X'], ['YT', 'YouTube']].map(([abbr, name]) => (
                <button key={name} className="footer__social" title={name} aria-label={name}>{abbr}</button>
              ))}
            </div>
          </div>

          {/* Departments col */}
          <div className="footer__col">
            <h5 className="footer__col-title">Departments</h5>
            {DEPARTMENTS.map(d => (
              <Link key={d.id} to={`/department/${d.id}`} className="footer__link" id={`footer-dept-${d.id}`}>
                {d.icon} {d.name}
              </Link>
            ))}
          </div>

          {/* Customer Support col */}
          <div className="footer__col">
            <h5 className="footer__col-title">Customer Support</h5>
            <Link to="/orders" className="footer__link">Track My Order</Link>
            <span className="footer__link">Returns & Refunds</span>
            <span className="footer__link">Size Guide</span>
            <span className="footer__link">Shipping Policy</span>
            <span className="footer__link">Contact Us</span>
            <span className="footer__link">FAQs</span>
          </div>

          {/* Policies + Newsletter */}
          <div className="footer__col">
            <h5 className="footer__col-title">Policies</h5>
            <span className="footer__link">Privacy Policy</span>
            <span className="footer__link">Terms of Service</span>
            <span className="footer__link">Cookie Policy</span>
            <span className="footer__link">Accessibility</span>

            <div className="footer__newsletter">
              <h5 className="footer__col-title" style={{ marginTop: 'var(--space-5)' }}>Stay Updated</h5>
              <p className="footer__newsletter-note">Get exclusive deals & new arrivals:</p>
              <div className="footer__nl-form">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="footer__nl-input"
                  aria-label="Email for newsletter"
                />
                <button className="footer__nl-btn" aria-label="Subscribe">→</button>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2026 BLOWMAGGY · Built for Vibe Coding Competition 2026 · Vol. 01 — The Everything Issue
          </p>
          <div className="footer__payments">
            {['UPI', 'Visa', 'Mastercard', 'Rupay', 'Net Banking', 'COD'].map(p => (
              <span key={p} className="footer__pay-chip">{p}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          background: #0D0D16;
          color: rgba(255,255,255,.75);
          padding-top: 0;
          margin-top: var(--space-16);
          position: relative;
        }
        .footer__wave {
          height: 80px;
          background: var(--ivory);
          clip-path: ellipse(55% 100% at 50% 0%);
          margin-bottom: -1px;
        }

        /* Grid */
        .footer__top {
          display: grid;
          grid-template-columns: 2fr 1fr 1.2fr 1.5fr;
          gap: var(--space-10);
          padding: var(--space-12) 0 var(--space-10);
        }

        /* Brand */
        .footer__logo {
          font-family: 'Inter', sans-serif; font-weight: 900;
          font-size: 1.5rem; letter-spacing: -0.04em; color: white;
          display: block; margin-bottom: var(--space-3); text-decoration: none;
        }
        .footer__logo-slash { color: var(--magenta); }
        .footer__tagline {
          font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.12em;
          color: var(--magenta); font-weight: 700; margin-bottom: var(--space-4);
        }
        .footer__desc {
          font-size: 0.84rem; color: rgba(255,255,255,.45);
          line-height: 1.75; max-width: 280px; margin-bottom: var(--space-5);
        }
        .footer__socials { display: flex; gap: var(--space-2); }
        .footer__social {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(255,255,255,.08);
          border: none; cursor: pointer;
          color: rgba(255,255,255,.6); font-size: 0.65rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          transition: all var(--duration) var(--ease);
        }
        .footer__social:hover { background: var(--magenta); color: white; }

        /* Columns */
        .footer__col { display: flex; flex-direction: column; gap: 6px; }
        .footer__col-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem; text-transform: uppercase;
          letter-spacing: 0.12em; color: white;
          font-weight: 800; margin-bottom: 6px;
        }
        .footer__link {
          font-size: 0.84rem; color: rgba(255,255,255,.5);
          cursor: pointer; transition: color var(--duration) var(--ease);
          text-decoration: none; padding: 1px 0;
          display: inline-block;
        }
        .footer__link:hover { color: var(--magenta); }

        /* Newsletter */
        .footer__newsletter-note { font-size: 0.78rem; color: rgba(255,255,255,.45); margin-bottom: 8px; }
        .footer__nl-form { display: flex; }
        .footer__nl-input {
          flex: 1; padding: 10px 14px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: var(--radius-md) 0 0 var(--radius-md);
          color: white; font-size: 0.84rem;
        }
        .footer__nl-input::placeholder { color: rgba(255,255,255,.3); }
        .footer__nl-input:focus { outline: none; border-color: var(--magenta); }
        .footer__nl-btn {
          padding: 10px 18px;
          background: linear-gradient(135deg, var(--magenta), var(--coral));
          color: white; border: none; cursor: pointer;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          font-size: 1rem; font-weight: 700;
          transition: opacity var(--duration) var(--ease);
        }
        .footer__nl-btn:hover { opacity: 0.88; }

        /* Bottom */
        .footer__divider {
          border: none; border-top: 1px solid rgba(255,255,255,.07);
          margin: 0 0 var(--space-6);
        }
        .footer__bottom {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: var(--space-4);
          padding-bottom: var(--space-8);
        }
        .footer__copy { font-size: 0.78rem; color: rgba(255,255,255,.3); }
        .footer__payments { display: flex; gap: var(--space-2); flex-wrap: wrap; }
        .footer__pay-chip {
          padding: 4px 10px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: var(--radius-sm);
          font-size: 0.7rem; font-weight: 600; color: rgba(255,255,255,.5);
        }

        @media (max-width: 960px) {
          .footer__top { grid-template-columns: 1fr 1fr; gap: var(--space-8); }
        }
        @media (max-width: 540px) {
          .footer__top { grid-template-columns: 1fr; }
          .footer__bottom { flex-direction: column; align-items: flex-start; }
          .footer__wave { height: 40px; }
        }
      `}</style>
    </footer>
  );
}
