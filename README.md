# BLOWMAGGY — The Everything Issue

> **Every Department. One Cart. One Checkout.**  
> Vol. 01 · Vibe Coding Competition 2026

A full-stack-style, fully functional multi-department e-commerce prototype built with **React + Vite** — zero backend, all data persisted in `localStorage`.

---

## 🏬 Departments

| # | Department | Products |
|---|-----------|---------|
| 1 | 👗 Fashion | T-Shirt, Sneakers, Watch, Denim Jacket |
| 2 | 💄 Beauty | Face Serum, Moisturizer, Lipstick, Cleanser |
| 3 | ⚡ Electronics | Headphones, Smartwatch, Speaker, Keyboard |
| 4 | 🏡 Home & Living | Coffee Mug, Desk Lamp, Cushion, Organizer |
| 5 | 🛒 Grocery | Oats, Coffee, Dry Fruits, Snack Box |
| 6 | 🧸 Kids & Toys | Building Blocks, Puzzle, Teddy Bear, Art Kit |

---

## ✨ Features

### Customer Experience
- **Unified Cart** — add products from all 6 departments into one cart
- **localStorage persistence** — cart, wishlist, and orders survive page refresh
- **Product detail** with variant selection (size, colour, style)
- **Wishlist** with Move to Cart
- **Search** across all departments
- **3-step Checkout** — Delivery → Payment → Review
- **Demo payment methods** — UPI, Card, Net Banking, COD (clearly labelled DEMO)
- **Order confirmation** with unique ID + confetti animation
- **My Orders** with 5-step tracking timeline
- **Coupon codes**: `SAVE10` · `FLAT150` · `NEWUSER`

### Admin Dashboard (`/admin`)
- Product table with **search + department filter**
- **Edit product** modal (name, price, stock, badge, description)
- **Stock management** — changes reflect instantly on the storefront
- **Order status updates** — reflected on customer My Orders page
- **Soft delete + restore** products
- Department overview with low-stock indicators

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173

# Build for production
npm run build
```

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build | Vite 5 |
| Routing | react-router-dom v6 |
| State | React Context + useReducer |
| Styling | Vanilla CSS (custom design system) |
| Persistence | localStorage |
| Fonts | Inter + Playfair Display (Google Fonts) |
| Images | Unsplash (free CDN) |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Nav, search, cart badge, mobile menu
│   ├── Footer.jsx        # Brand footer with links
│   ├── ProductCard.jsx   # Reusable card with wishlist
│   └── Toast.jsx         # Notification system
├── context/
│   └── StoreContext.jsx  # Global state (cart, wishlist, orders, admin)
├── data/
│   ├── products.js       # 24 products + selector utilities
│   └── coupons.js        # Demo coupon definitions
├── pages/
│   ├── Home.jsx          # Hero, departments, product grids
│   ├── Department.jsx    # Product listing with filters
│   ├── ProductDetail.jsx # Detail page with variants + reviews
│   ├── Cart.jsx          # Unified cross-dept cart
│   ├── Checkout.jsx      # 3-step checkout wizard
│   ├── Orders.jsx        # Order history + tracking timeline
│   ├── Wishlist.jsx      # Saved items
│   ├── Search.jsx        # Full-text search
│   └── Admin.jsx         # Admin dashboard
└── index.css             # Global design system (tokens, components)
```

---

## ⚠️ Important Notices

- **Demo prototype** — no real server, backend, or authentication
- **Demo payments** — no real financial transactions occur
- **Demo tracking** — order status updates are simulated
- All data is stored in browser `localStorage` only

---

## 🏆 Vibe Coding Competition 2026

Built end-to-end in one session as a competition prototype demonstrating:
- Full shopping workflow (browse → cart → checkout → confirmation)
- Cross-department unified commerce
- Admin product & order management
- Real-time storefront updates from admin actions
