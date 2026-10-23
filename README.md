# 🛍️ BLOWMAGGY — The Everything Issue

<div align="center">

**Every Department. One Cart. One Checkout.**

*Vol. 01 · Vibe Coding Competition 2026*

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)](https://vitejs.dev)
[![React Router](https://img.shields.io/badge/React_Router-v6-CA4245?logo=reactrouter)](https://reactrouter.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

</div>

---

## 📖 What is BLOWMAGGY?

BLOWMAGGY is a **complete multi-department e-commerce prototype** built as a single-page application. It simulates a real online shopping experience spanning six departments — Fashion, Beauty, Electronics, Home & Living, Grocery, and Kids & Toys — all sharing one unified cart and one checkout.

> ⚠️ **This is a frontend-only competition prototype.** No real backend, no real payments, no real authentication. All data persists in the browser's `localStorage`.

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/Hardy20102004/Blowmaggy.git
cd Blowmaggy

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
# → Opens at http://localhost:5173

# 4. Build for production (optional)
npm run build
```

---

## 🗺️ All Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | **Home** | Hero, announcement bar, 6 department cards, featured products, newsletter |
| `/department/:id` | **Department** | Product grid with sidebar filters and sort |
| `/product/:id` | **Product Detail** | Images, variants, reviews, add to cart |
| `/cart` | **Cart** | Unified cross-department cart with coupon support |
| `/checkout` | **Checkout** | 3-step form: Delivery → Payment → Review |
| `/orders` | **My Orders** | Order history list + individual order detail |
| `/wishlist` | **Wishlist** | Saved products with move-to-cart |
| `/search` | **Search** | Full-text search across all departments |
| `/admin` | **Admin Dashboard** | Product & order management (DEMO) |

Department IDs: `fashion` · `beauty` · `electronics` · `home` · `grocery` · `kids`

---

## 🏬 Six Departments

| Icon | Department | Products |
|------|-----------|---------|
| 👗 | **Fashion** | Oversized Cotton T-Shirt · Everyday Sneakers · Minimalist Wristwatch · Classic Denim Jacket |
| 💄 | **Beauty** | Hydrating Face Serum · Daily Moisturizer · Matte Lipstick · Gentle Face Cleanser |
| ⚡ | **Electronics** | Wireless Headphones · Smartwatch · Bluetooth Speaker · Mechanical Keyboard |
| 🏡 | **Home & Living** | Ceramic Coffee Mug · Minimal Desk Lamp · Decorative Cushion · Storage Organizer |
| 🛒 | **Grocery** | Organic Oats · Premium Coffee · Mixed Dry Fruits · Healthy Snack Box |
| 🧸 | **Kids & Toys** | Building Blocks Set · Educational Puzzle · Soft Teddy Bear · Kids Art Kit |

**Total: 24 products** across 6 departments, each with:
- Unique ID, name, brand, description
- Price (₹) + optional original/discounted price
- Stock quantity (enforced on add-to-cart)
- Variants (size, colour, style — per product)
- Star rating + review count
- Tags for search
- Badge (Best Seller, Sale, Premium, New)
- Unsplash product image

---

## 🧩 Feature-by-Feature Breakdown

### 1. 📢 Announcement Bar
- Rotates 3 promotional messages every 4 seconds
- Displays at the very top of every page
- Gradient dark background with magenta shimmer

---

### 2. 🔝 Header & Navigation
- **BLOWMAGGY logo** (coral/magenta gradient text)
- **Department dropdown** — click to reveal all 6 departments with icons
- **Search bar** — type to navigate to `/search` with results
- **Account icon** — placeholder (no auth in demo)
- **Wishlist icon** — shows filled heart if any items saved
- **Cart icon** — live badge showing total item count
- **Mobile hamburger menu** — full-screen slide-in menu on small screens
- Sticky on scroll with shadow elevation change

---

### 3. 🏠 Homepage Sections

| Section | Description |
|---------|-------------|
| **Hero** | Split editorial layout — headline, CTA buttons, image mosaic, animated stats |
| **Department Cards** | 6 clickable cards with gradient backgrounds and product counts |
| **Featured Products** | Horizontal scrollable row of Best Seller products |
| **All Departments Strip** | Compact quick-nav row for all 6 departments |
| **Newsletter** | Email capture form (demo — no backend) |
| **Footer** | Brand info, department links, policy links, payment method chips |

---

### 4. 📦 Department Page (`/department/:id`)

**Left Sidebar Filters:**
- Category filter (chips)
- Price range slider
- Minimum rating filter
- In-stock only toggle
- On-sale only toggle
- Active filter count badge + Reset All

**Product Grid:**
- Responsive auto-fill grid (min 240px columns)
- Sort by: Featured · Price Low→High · Price High→Low · Highest Rated · Best Discount
- Product count display
- Empty state when no products match filters

**ProductCard (used everywhere):**
- Product image with hover zoom
- Wishlist toggle heart button
- Discount badge (% off)
- "Out of Stock" overlay
- Star rating + review count
- Price with strikethrough original price
- "Add to Cart" hover button
- Department color-coded label

---

### 5. 🔍 Product Detail Page (`/product/:id`)

- **Image gallery** — main image + thumbnail strip, click to switch
- **Breadcrumb navigation** — Home → Department → Product
- **Wishlist toggle** — heart button saves/removes from wishlist
- **Variant selector** — dynamic options per product (e.g. Size: S/M/L, Colour: Black/White)
- **Quantity stepper** — enforces maximum stock limit
- **Add to Cart** — adds selected variant + quantity to shared cart
- **Buy Now** — adds to cart and navigates directly to checkout
- **Stock indicator** — shows remaining units, "Low stock" warning, "Out of stock" block
- **Tabs:** Description · Specifications · Reviews (3 mock reviews per product)
- **Related products** — shows other products from same department

---

### 6. 🛒 Unified Cart (`/cart`)

> **The core feature** — one cart for ALL six departments simultaneously.

**Cart Items Display:**
- Product image (clickable → product detail)
- Department label with department colour
- Product name + brand
- Selected variant chips (e.g. Size: M · Colour: Black)
- Unit price × quantity
- Quantity stepper (min 1, max = product stock)
- "Max stock reached" warning badge
- Item subtotal (price × qty)
- Remove button (with trash icon)

**Department Proof Strip:**
- Shows all departments represented in the current cart as coloured badges

**Order Summary (right sidebar):**
- Subtotal (all items)
- Delivery fee (FREE over ₹499, else ₹99)
- "Add ₹X for free delivery" tip
- Coupon discount (if applied)
- **Final total**
- Savings callout ("You're saving ₹X!")

**Coupon Codes:**

| Code | Discount | Minimum Order |
|------|----------|--------------|
| `SAVE10` | 10% off | ₹999 |
| `FLAT150` | ₹150 flat off | ₹1,499 |
| `NEWUSER` | 15% off | No minimum |

- One-click hint buttons to fill coupon field
- Applied coupon shown with green dashed border + remove button
- Each coupon is single-use per session

**Department Breakdown:**
- Per-department subtotal shown at the bottom of the summary

**Empty Cart State:**
- Animated floating cart icon
- Quick-link chips to all 6 departments

---

### 7. 💳 Checkout — 3-Step Wizard (`/checkout`)

#### Step 1 — Delivery Details
**Required fields (validated before proceeding):**
- Full Name (min 2 chars)
- Mobile Number (10 digits)
- Email Address (valid format)
- Address Line 1 (min 5 chars)
- Address Line 2 (optional landmark)
- City
- State (dropdown — all 34 Indian states/UTs)
- PIN Code (6 digits)

Inline field-level error messages appear on failed validation.

#### Step 2 — Payment Method
All methods are clearly labelled **DEMO MODE** — no real payment data is collected.

| Method | Demo Behaviour |
|--------|---------------|
| 📱 UPI | Enter any UPI ID (accepted as-is) |
| 💳 Debit/Credit Card | Enter any card number/expiry/CVV (demo fields, not stored) |
| 🏦 Net Banking | Shown as simulated — no bank redirect |
| 💵 Cash on Delivery | Select and continue |

> ⚠️ A prominent purple banner reads: *"Demo Mode — No real financial transaction"*  
> Card fields include an amber warning: *"Do NOT enter real card details"*

#### Step 3 — Review & Place Order
- Address summary (editable — click Back)
- Payment method summary (editable — click Back)
- Full item list with images, departments, variants, quantities
- Stock validation warning (if qty > available stock)
- Animated 3-dot spinner while processing (2.2s simulated delay)
- **Duplicate-order guard** — `useRef` flag prevents double-click placement

**Place Order validation checks (in order):**
1. Cart not empty
2. No out-of-stock items
3. No quantity exceeding stock
4. All delivery fields valid

**Mini Order Summary** (sticky sidebar throughout checkout):
- Thumbnail grid with quantity badge overlays
- Running totals matching cart

---

### 8. 🎉 Order Confirmation Screen

Displayed immediately after successful order placement (same page, no redirect):

- **Confetti animation** (emoji fall from top)
- **Animated green ✓** check circle
- **Unique Order ID** format: `BMG` + base36 timestamp (e.g. `BMGLK3F4XQ`)
- Order date + time
- **Purple "Demo Payment" banner** — explicitly states no real transaction
- Full item list with images, departments, variants
- Price breakdown (subtotal / delivery / coupon / total)
- **"View My Orders"** button → `/orders`
- **"Continue Shopping"** button → `/`
- Disclaimer paragraph about prototype status

---

### 9. 📋 My Orders (`/orders`)

#### Order List View
Each order card shows:
- Order ID (monospace font)
- Customer name (from delivery form)
- Order date
- Product thumbnails (up to 4, then "+N more")
- Department badges for all departments in the order
- Total amount
- Status badge (colour-coded)
- Payment method
- Payment status (Simulated Success)
- Click anywhere on card → Order Detail

#### Order Detail View
- Back button → returns to list
- Status badge (top right)
- Order ID + timestamp
- **Blue "Demo Tracking" banner** — identifies simulated tracking
- **5-Step Timeline:**

```
Order Placed ✓ → Confirmed ✓ → Processing ⟳ → Shipped → Delivered
```

  - Green dots for completed steps
  - Pulsing magenta dot for current step
  - Grey dots for pending steps
  - Timestamps shown on completed steps
  - "In progress (demo tracking)" text on current step

- Full item list (image · name · brand · department · variant · qty · subtotal)
- Price breakdown (frozen at order time — never changes)
- Payment details (method, UPI ID or card last 4, status)
- Delivery address
- Department breakdown
- Continue Shopping + Back buttons

**Persistence:** Orders survive browser refresh via `localStorage`. Historical prices never change even if admin edits product prices later.

---

### 10. ❤️ Wishlist (`/wishlist`)

- Grid of saved products (4-column responsive)
- Each card shows: image · discount badge · out-of-stock overlay · department · name · brand · star rating · price
- **"Move to Cart"** button — adds to cart AND removes from wishlist in one action
- **"Move All to Cart"** button (top right) — moves all in-stock items at once
- Out-of-stock items cannot be moved to cart (button disabled)
- Remove button — removes from wishlist without adding to cart
- Animated empty state with beating heart icon
- Quick-links to all 6 departments

---

### 11. 🔎 Search (`/search`)

- Searches across: product name · description · brand · category · tags · department name
- Results update as user types (from URL query param)
- Department filter tabs (All + 6 department chips)
- Result count display
- ProductCard grid (same card used everywhere)
- Empty state with suggestion to browse departments

---

### 12. 🛠️ Admin Dashboard (`/admin`)

> Accessible at `/admin` — clearly labelled **"DEMO ADMIN — Not production secure"**  
> No login screen — this is a frontend prototype.

#### Sidebar Navigation
- BLOWMAGGY logo + DEMO ADMIN badge
- Tab buttons: Dashboard · Products · Orders · Inventory
- Badge on Orders (order count) and Inventory (low-stock count)
- "← Back to Store" link

#### Dashboard Tab
**4 Stat Cards:**
- 💰 Total Demo Revenue (sum of all order totals)
- 📦 Total Products (with removed count)
- 🛒 Total Orders
- ⚠️ Low Stock (≤ 20 units)

**Department Overview Table:**
- Department name · Product count · Low-stock count · Average price · "View" button

**Recent Orders Table:**
- Last 5 orders with ID, customer, date, items, total, status

#### Products Tab
**Toolbar:**
- Search input (by name or brand)
- Department filter dropdown
- Clear filters button

**Product Table columns:**
- Thumbnail + Name + Brand (with "edited" label if admin modified)
- Department badge
- Price (with strikethrough original)
- Stock badge (colour: green/amber/red)
- Badge label (Best Seller / Sale / etc.)
- Actions: 👁 View (opens storefront) · ✏️ Edit · 🗑 Delete

**Edit Product Modal:**
- Product image preview
- Name field
- Price (₹) + Original Price (₹)
- Stock quantity
- Badge dropdown (None / Best Seller / Sale / Premium / New)
- Description textarea
- Cancel + Save Changes buttons
- **Changes immediately apply to the storefront** (no page reload needed)

**Removed Products section:**
- Lists soft-deleted products as chips
- "Restore" button brings them back to catalogue

#### Orders Tab
**Full order table with:**
- Order ID · Customer · Date · Items · Total · Payment method · Status badge
- **Status update buttons** for each order:
  - → Confirmed · → Processing · → Shipped · → Delivered
  - Only statuses *different* from current are shown
  - **Status change reflects immediately on the customer's My Orders page**

#### Inventory Tab
- Products sorted by stock level (lowest first)
- Out-of-stock rows highlighted in light red
- Low-stock rows highlighted in light amber
- Current stock badge per product
- Number input to enter new stock quantity
- "Update" button — saves to localStorage and reflects on storefront
- Alert banner shows count of low-stock products

---

## 🔄 Data Flow & Architecture

```
products.js ──(static data)──► getProduct() / getProductsByDept()
                                    │
                              applyOverride()  ◄── bmg_prod_overrides (localStorage)
                                    │
                              filteredByDeleted ◄── bmg_deleted_ids (localStorage)
                                    │
                              ▼ All storefront pages see admin changes instantly

StoreContext (useReducer)
├── cart         ─► bmg_cart         (localStorage)
├── wishlist     ─► bmg_wishlist     (localStorage)
├── orders       ─► bmg_orders       (localStorage)
├── appliedCoupon─► bmg_coupon       (localStorage)
├── usedCoupons  ─► bmg_used_coupons (localStorage)
├── productOverrides ─► bmg_prod_overrides (localStorage)
└── deletedProductIds ─► bmg_deleted_ids  (localStorage)
```

---

## 🎨 Design System

### Colour Palette
| Token | Hex | Use |
|-------|-----|-----|
| `--magenta` | `#E91E8C` | Primary accent, CTAs |
| `--coral` | `#FF6B6B` | Secondary accent, gradient |
| `--lavender` | `#C4B5FD` | Highlights, badges |
| `--ivory` | `#FDF8F5` | Page background |
| `--ink` | `#1C1917` | Primary text |
| `--ink-muted` | `#78716C` | Secondary text |
| `--surface` | `#FFFFFF` | Cards and panels |

### Typography
- **Headings:** Playfair Display (serif) — loaded from Google Fonts
- **Body / UI:** Inter (sans-serif) — loaded from Google Fonts

### Components (global CSS classes)
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.btn-icon`, `.btn-sm`, `.btn-lg`
- `.badge`, `.badge-magenta`, `.badge-success`, `.badge-warning`, `.badge-coral`, `.badge-lavender`
- `.input`, `.label`
- `.card`
- `.container` (max-width 1280px, centred)
- `.product-grid` (responsive auto-fill)
- `.toast`, `.toast-container`
- `.skeleton` (shimmer loading placeholder)
- `.tag` (filter pill)
- `.divider`, `.stars`

### Spacing Scale
`4px → 8px → 12px → 16px → 20px → 24px → 28px → 32px → 40px → 48px → 64px → 80px`

### Shadows
`sm → md → lg → xl → glow (magenta ring)`

---

## 🗂️ Project File Structure

```
Blowmaggy/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx                    # Root component with router + layout
│   ├── main.jsx                   # React entry point
│   ├── index.css                  # Global design system
│   │
│   ├── components/
│   │   ├── Header.jsx             # Sticky header, nav, search, cart badge
│   │   ├── Footer.jsx             # Brand footer, links, payment chips
│   │   ├── ProductCard.jsx        # Reusable product card (used on all grids)
│   │   └── Toast.jsx              # Floating notification system
│   │
│   ├── context/
│   │   └── StoreContext.jsx       # Global state: cart, wishlist, orders, admin actions
│   │
│   ├── data/
│   │   ├── products.js            # 24 products, 6 departments, selector functions
│   │   └── coupons.js             # Coupon definitions (SAVE10, FLAT150, NEWUSER)
│   │
│   └── pages/
│       ├── Home.jsx               # Landing page (hero, departments, products)
│       ├── Department.jsx         # Department listing with filters + sort
│       ├── ProductDetail.jsx      # Product page (gallery, variants, reviews)
│       ├── Cart.jsx               # Unified cart with coupon + order summary
│       ├── Checkout.jsx           # 3-step checkout + order confirmation screen
│       ├── Orders.jsx             # Order history list + detail with timeline
│       ├── Wishlist.jsx           # Saved products + move-to-cart
│       ├── Search.jsx             # Cross-department search
│       └── Admin.jsx              # Admin dashboard (products, orders, inventory)
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 📦 Dependencies

```json
{
  "react": "^18",
  "react-dom": "^18",
  "react-router-dom": "^6",
  "vite": "^5",
  "@vitejs/plugin-react": "latest"
}
```

No UI library, no CSS framework, no state management library — pure React + custom CSS.

---

## 🔌 State Management Reference

### `useStore()` — exposed values

| Value | Type | Description |
|-------|------|-------------|
| `cart` | Array | `[{ itemId, product, variantKey, qty }]` |
| `cartCount` | Number | Total items in cart |
| `cartSubtotal` | Number | Sum of price × qty |
| `shipping` | Number | 0 if subtotal ≥ ₹499, else 99 |
| `couponDiscount` | Number | Calculated discount amount |
| `cartTotal` | Number | Final payable amount |
| `cartDepartments` | Array | Unique dept IDs in cart |
| `wishlist` | Array | Product IDs |
| `orders` | Array | Placed order snapshots |
| `appliedCoupon` | Object/null | Currently applied coupon |
| `productOverrides` | Object | Admin-edited product fields |
| `deletedProductIds` | Array | Admin-removed product IDs |

### Action Creators

| Function | Description |
|----------|-------------|
| `addToCart(product, variantKey, qty)` | Add item; respects stock limit |
| `removeFromCart(itemId)` | Remove specific cart item |
| `updateQty(itemId, qty)` | Update quantity (0 = remove) |
| `clearCart()` | Empty entire cart |
| `toggleWishlist(productId)` | Add or remove from wishlist |
| `moveToCart(product)` | Wishlist → Cart (removes from wishlist) |
| `applyCoupon(code, subtotal)` | Validate and apply coupon |
| `removeCoupon()` | Remove applied coupon |
| `placeOrder(totals, address, payment, order)` | Save order, clear cart |
| `adminUpdateProduct(id, changes)` | Edit product fields |
| `adminDeleteProduct(id, name)` | Soft delete product |
| `adminRestoreProduct(id)` | Restore deleted product |
| `adminUpdateOrderStatus(orderId, status, label)` | Update order + timeline |
| `toast(message, type, icon)` | Show notification |
| `setSearch(query)` | Update search query state |

### Coupon Validation Logic
1. Check code exists in `COUPONS` definition
2. Check it hasn't been used this session (`usedCoupons` array)
3. Check cart subtotal meets `minOrder` threshold
4. Apply and add to `usedCoupons` (prevents reuse)

---

## 🧪 Key User Flows

### Complete Shopping Flow
```
Homepage → Click Department → Browse Products → Click Product →
Select Variant → Add to Cart → (repeat for other departments) →
Open Cart → Apply Coupon → Proceed to Checkout →
Fill Delivery Form → Select Payment Method → Review → Place Order →
View Confirmation → Check My Orders
```

### Admin Product Edit Flow
```
/admin → Products tab → Find product → Click ✏️ Edit →
Change name/price/stock/badge → Save Changes →
Go to /department/[dept] → See updated product instantly
```

### Admin Order Status Update Flow
```
/admin → Orders tab → Find order → Click → Processing →
Customer goes to /orders → Clicks order → Timeline shows Processing active
```

---

## ⚠️ Known Limitations (Demo Prototype)

| Limitation | Reason |
|-----------|--------|
| No user authentication | Frontend-only demo |
| No real payment processing | Demo simulation only |
| No server/database | localStorage only |
| Data clears on "Clear Site Data" | Expected for a prototype |
| Admin accessible without login | No auth implemented |
| Product images from Unsplash CDN | Requires internet connection |
| Order tracking is simulated | No real courier integration |
| Stock does not actually decrement on order | Prototype simplification |

---

## 📜 License

MIT — Free to use, modify, and distribute.

---

<div align="center">

**BLOWMAGGY** · Built for Vibe Coding Competition 2026  
*Every Department. One Cart. One Checkout.*

</div>
