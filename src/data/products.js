/* ═══════════════════════════════════════════════════════════
   BLOWMAGGY — Centralized Product Catalogue
   24 curated products across 6 departments
   ═══════════════════════════════════════════════════════════ */

export const DEPARTMENTS = [
  {
    id: 'fashion',
    name: 'Fashion',
    icon: '👗',
    color: '#E91E8C',
    gradient: 'linear-gradient(135deg,#E91E8C,#FF6B6B)',
    tagline: 'Wear Your Story',
    description: 'Curated everyday styles for every occasion.',
    heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80',
  },
  {
    id: 'beauty',
    name: 'Beauty',
    icon: '💄',
    color: '#FF6B6B',
    gradient: 'linear-gradient(135deg,#FF6B6B,#FFA07A)',
    tagline: 'Your Routine, Upgraded',
    description: 'Premium skincare, cosmetics & everyday beauty.',
    heroImage: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80',
  },
  {
    id: 'electronics',
    name: 'Electronics',
    icon: '⚡',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg,#7C3AED,#C4B5FD)',
    tagline: 'Smart Picks, Better Living',
    description: 'Cutting-edge tech for modern everyday life.',
    heroImage: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&q=80',
  },
  {
    id: 'home',
    name: 'Home & Living',
    icon: '🏡',
    color: '#059669',
    gradient: 'linear-gradient(135deg,#059669,#34D399)',
    tagline: 'Make Your Space Yours',
    description: 'Design-forward homewares, décor & organizers.',
    heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  },
  {
    id: 'grocery',
    name: 'Grocery',
    icon: '🛒',
    color: '#D97706',
    gradient: 'linear-gradient(135deg,#D97706,#FBBF24)',
    tagline: 'Everyday Essentials, Sorted',
    description: 'Organic, fresh, and pantry staples delivered fast.',
    heroImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80',
  },
  {
    id: 'kids',
    name: 'Kids & Toys',
    icon: '🧸',
    color: '#0284C7',
    gradient: 'linear-gradient(135deg,#0284C7,#38BDF8)',
    tagline: 'Little Things, Big Joy',
    description: 'Safe, fun and educational products for little ones.',
    heroImage: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=80',
  },
];

export const PRODUCTS = [

  /* ══════════ FASHION ══════════ */
  {
    id: 'f1',
    name: 'Oversized Cotton T-Shirt',
    brand: 'BLOWMAGGY Basics',
    department: 'fashion',
    category: 'Tops',
    price: 799,
    originalPrice: 1299,
    rating: 4.6,
    reviews: 384,
    stock: 120,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
      'https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&q=80',
    ],
    description: 'The everyday essential you never knew you needed. Cut from 100% ring-spun cotton in a relaxed oversized fit. Pre-washed for softness from the very first wear. Pairs effortlessly with jeans, joggers, or layered under a jacket.',
    variants: {
      Size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      Colour: ['White', 'Black', 'Sage Green', 'Dusty Pink', 'Navy'],
    },
    specs: { Material: '100% Ring-Spun Cotton', Fit: 'Oversized', Wash: 'Machine Washable', Origin: 'Made in India' },
    tags: ['cotton', 'basics', 'casual', 'everyday'],
  },
  {
    id: 'f2',
    name: 'Everyday Sneakers',
    brand: 'StepOut',
    department: 'fashion',
    category: 'Footwear',
    price: 2499,
    originalPrice: 3999,
    rating: 4.5,
    reviews: 217,
    stock: 64,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
    ],
    description: 'Minimal canvas sneakers built for all-day comfort. Cushioned insole, rubber outsole with grip, and a clean low-profile silhouette that goes with everything. Available in UK sizes 6–12.',
    variants: {
      Size: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12'],
      Colour: ['White/White', 'Black/Black', 'Cream/Tan', 'Navy/White'],
    },
    specs: { Upper: 'Canvas', Sole: 'Rubber', Insole: 'Foam Cushion', Closure: 'Lace-Up' },
    tags: ['sneakers', 'casual', 'footwear', 'canvas'],
  },
  {
    id: 'f3',
    name: 'Minimalist Wristwatch',
    brand: 'Timecraft',
    department: 'fashion',
    category: 'Accessories',
    price: 3499,
    originalPrice: 5499,
    rating: 4.7,
    reviews: 142,
    stock: 35,
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80',
      'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=600&q=80',
    ],
    description: 'A clean Japanese-movement quartz watch with a 38mm brushed stainless steel case and sapphire-coated mineral glass. Genuine leather strap with quick-release pins. Water resistant to 3 ATM.',
    variants: {
      Strap: ['Black Leather', 'Brown Leather', 'Mesh Steel', 'NATO Olive'],
    },
    specs: { Movement: 'Japanese Quartz', Case: '38mm Stainless Steel', Glass: 'Sapphire-Coated Mineral', 'Water Resistance': '3 ATM' },
    tags: ['watch', 'accessories', 'minimalist', 'quartz'],
  },
  {
    id: 'f4',
    name: 'Classic Denim Jacket',
    brand: 'DenimCo',
    department: 'fashion',
    category: 'Outerwear',
    price: 2999,
    originalPrice: 4499,
    rating: 4.4,
    reviews: 198,
    stock: 48,
    badge: null,
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
    ],
    description: 'A timeless denim jacket in 12oz washed cotton denim. Chest pockets, button-front closure, and a slightly cropped fit. Gets better with every wash. A wardrobe investment that never goes out of style.',
    variants: {
      Size: ['XS', 'S', 'M', 'L', 'XL'],
      Wash: ['Light Wash', 'Mid Wash', 'Dark Indigo', 'Black'],
    },
    specs: { Material: '100% Cotton Denim', Weight: '12 oz', Fit: 'Regular-Slightly Cropped', Closure: 'Button-Front' },
    tags: ['denim', 'jacket', 'outerwear', 'classic'],
  },

  /* ══════════ BEAUTY ══════════ */
  {
    id: 'b1',
    name: 'Hydrating Face Serum',
    brand: 'GlowLab',
    department: 'beauty',
    category: 'Skincare',
    price: 1499,
    originalPrice: 1999,
    rating: 4.8,
    reviews: 512,
    stock: 200,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
      'https://images.unsplash.com/photo-1617897903246-719242758050?w=600&q=80',
    ],
    description: 'Powered by 2% Hyaluronic Acid + Vitamin C, this serum delivers deep hydration and visible brightness in 2 weeks. Lightweight, non-sticky, and fragrance-free. Suitable for all skin types including sensitive skin.',
    variants: { Size: ['15ml', '30ml', '50ml'] },
    specs: { 'Key Ingredients': 'Hyaluronic Acid, Vitamin C, Niacinamide', 'Skin Type': 'All Types', 'Fragrance': 'Fragrance-Free', SPF: 'None' },
    tags: ['serum', 'hydration', 'vitamin-c', 'skincare'],
  },
  {
    id: 'b2',
    name: 'Daily Moisturizer SPF 30',
    brand: 'GlowLab',
    department: 'beauty',
    category: 'Skincare',
    price: 899,
    originalPrice: 1299,
    rating: 4.6,
    reviews: 341,
    stock: 175,
    badge: null,
    image: 'https://images.unsplash.com/photo-1556228578-dd539282b964?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1556228578-dd539282b964?w=600&q=80'],
    description: 'An everyday moisturizer that doubles as SPF 30 sun protection. Ceramide-rich formula repairs the skin barrier, locks in moisture for 48 hours, and leaves a matte-satin finish. Dermatologically tested.',
    variants: { Size: ['50ml', '100ml'], Type: ['Normal-Oily', 'Dry-Combination'] },
    specs: { 'Key Ingredients': 'Ceramides, Hyaluronic Acid, SPF 30', 'Skin Type': 'All Types', 'Finish': 'Matte-Satin', 'Fragrance': 'Lightly Scented' },
    tags: ['moisturizer', 'spf', 'skincare', 'daily'],
  },
  {
    id: 'b3',
    name: 'Matte Lipstick',
    brand: 'ColorKiss',
    department: 'beauty',
    category: 'Makeup',
    price: 599,
    originalPrice: 899,
    rating: 4.5,
    reviews: 629,
    stock: 300,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2919?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4e6232bf2919?w=600&q=80',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80',
    ],
    description: 'Highly-pigmented, long-wear matte lipstick with a velvety finish that lasts up to 12 hours. Enriched with Vitamin E and jojoba oil to keep lips comfortable and conditioned. No feathering, no fading.',
    variants: {
      Shade: ['Ruby Red', 'Nude Blush', 'Berry Plum', 'Rosewood', 'Coral Crush', 'Deep Bordeaux'],
    },
    specs: { Finish: 'Matte', 'Wear Time': '12+ Hours', Formula: 'Vitamin E + Jojoba Oil', 'Tested': 'Dermatologically Tested' },
    tags: ['lipstick', 'matte', 'makeup', 'long-wear'],
  },
  {
    id: 'b4',
    name: 'Gentle Face Cleanser',
    brand: 'PureForm',
    department: 'beauty',
    category: 'Skincare',
    price: 449,
    originalPrice: 649,
    rating: 4.7,
    reviews: 289,
    stock: 250,
    badge: null,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80'],
    description: 'A pH-balanced, sulphate-free gel cleanser that removes makeup, sunscreen, and impurities without stripping the skin. Infused with Aloe Vera and Green Tea extract. Safe for daily use, morning and evening.',
    variants: { Size: ['100ml', '200ml'] },
    specs: { Formula: 'Sulphate-Free Gel', 'Key Ingredients': 'Aloe Vera, Green Tea Extract', pH: 'Balanced (~5.5)', Usage: 'AM & PM' },
    tags: ['cleanser', 'skincare', 'gentle', 'sulphate-free'],
  },

  /* ══════════ ELECTRONICS ══════════ */
  {
    id: 'e1',
    name: 'Wireless Headphones',
    brand: 'SoundWave',
    department: 'electronics',
    category: 'Audio',
    price: 6999,
    originalPrice: 9999,
    rating: 4.7,
    reviews: 748,
    stock: 55,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80',
    ],
    description: 'Over-ear wireless headphones with 40mm dynamic drivers, Active Noise Cancellation, and 30-hour battery life. Foldable design with memory foam ear cushions. Bluetooth 5.3 with multipoint pairing for two devices simultaneously.',
    variants: { Colour: ['Matte Black', 'Pearl White', 'Midnight Blue'] },
    specs: { 'Driver Size': '40mm Dynamic', ANC: 'Active Noise Cancellation', Battery: '30 Hours', Bluetooth: '5.3', Charging: 'USB-C (2hr fast charge)' },
    tags: ['headphones', 'anc', 'wireless', 'bluetooth', 'audio'],
  },
  {
    id: 'e2',
    name: 'Smart Fitness Watch',
    brand: 'FitTech',
    department: 'electronics',
    category: 'Wearables',
    price: 8499,
    originalPrice: 12999,
    rating: 4.5,
    reviews: 423,
    stock: 42,
    badge: 'Sale',
    image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&q=80',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80',
    ],
    description: '1.43" AMOLED always-on display with GPS, SpO2 blood oxygen monitoring, ECG, sleep tracking, and 100+ workout modes. 7-day battery, 5ATM water resistance. Compatible with Android & iOS.',
    variants: {
      Colour: ['Graphite Black', 'Silver White', 'Rose Gold'],
      Size: ['41mm', '45mm'],
    },
    specs: { Display: '1.43" AMOLED', GPS: 'Built-in GPS', Battery: '7 Days', 'Water Resistance': '5ATM', Health: 'SpO2 + ECG + Sleep' },
    tags: ['smartwatch', 'fitness', 'wearable', 'gps', 'health'],
  },
  {
    id: 'e3',
    name: 'Portable Bluetooth Speaker',
    brand: 'SoundWave',
    department: 'electronics',
    category: 'Audio',
    price: 3299,
    originalPrice: 4999,
    rating: 4.4,
    reviews: 312,
    stock: 88,
    badge: null,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80'],
    description: '360° surround sound in a rugged IPX7 waterproof cylinder. 20W output with dual passive radiators for deep bass. 18-hour battery, built-in mic for hands-free calls, and a bungee cord for easy attachment.',
    variants: { Colour: ['Forest Green', 'Ocean Blue', 'Charcoal Black', 'Sunset Orange'] },
    specs: { Output: '20W', 'Sound Stage': '360° Surround', Battery: '18 Hours', 'Water Resistance': 'IPX7', Connectivity: 'Bluetooth 5.0 + AUX' },
    tags: ['speaker', 'bluetooth', 'portable', 'waterproof', 'audio'],
  },
  {
    id: 'e4',
    name: 'Mechanical Keyboard',
    brand: 'TypeMaster',
    department: 'electronics',
    category: 'Computing',
    price: 5499,
    originalPrice: 7999,
    rating: 4.8,
    reviews: 189,
    stock: 30,
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80'],
    description: 'TKL (Tenkeyless) mechanical keyboard with Cherry MX-compatible switches. Per-key RGB backlighting with 18 preset effects, PBT double-shot keycaps, and a hot-swap PCB so you can change switches without soldering.',
    variants: {
      Switch: ['Red (Linear)', 'Brown (Tactile)', 'Blue (Clicky)'],
      Layout: ['US QWERTY', 'UK QWERTY'],
    },
    specs: { Layout: 'TKL 87-key', Switches: 'Hot-Swappable MX-Compatible', Keycaps: 'PBT Double-Shot', Backlight: 'Per-Key RGB', Interface: 'USB-C Detachable' },
    tags: ['keyboard', 'mechanical', 'gaming', 'computing', 'rgb'],
  },

  /* ══════════ HOME & LIVING ══════════ */
  {
    id: 'h1',
    name: 'Ceramic Coffee Mug',
    brand: 'KilnWorks',
    department: 'home',
    category: 'Kitchen & Dining',
    price: 549,
    originalPrice: 799,
    rating: 4.6,
    reviews: 284,
    stock: 350,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80'],
    description: 'Hand-thrown stoneware mug with a speckled glaze finish. 350ml capacity, comfortable C-handle, and a lead-free food-safe glaze. Dishwasher and microwave safe. Each piece has subtle handmade variations that make it uniquely yours.',
    variants: {
      Colour: ['Speckled White', 'Sage Green', 'Terracotta', 'Charcoal', 'Dusty Blue'],
      Size: ['250ml', '350ml', '450ml'],
    },
    specs: { Material: 'Stoneware Ceramic', Capacity: '350ml (standard)', Safe: 'Microwave & Dishwasher Safe', Finish: 'Food-Safe Glaze' },
    tags: ['mug', 'ceramic', 'coffee', 'kitchen', 'handmade'],
  },
  {
    id: 'h2',
    name: 'Minimal Desk Lamp',
    brand: 'LightForm',
    department: 'home',
    category: 'Lighting',
    price: 2199,
    originalPrice: 2999,
    rating: 4.5,
    reviews: 147,
    stock: 65,
    badge: null,
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80'],
    description: 'Architect-style adjustable desk lamp with a weighted base, flexible gooseneck arm, and a touch-dimmable LED. 3 colour temperatures (warm / neutral / daylight), 5 brightness levels, and a built-in USB-A charging port.',
    variants: {
      Colour: ['Matte Black', 'Brushed Brass', 'Matte White'],
    },
    specs: { Bulb: 'Built-in LED (10W)', 'Colour Temps': '2700K / 4000K / 6500K', Brightness: '5 Levels', 'Extra Port': 'USB-A Charging', Control: 'Touch Dimmer' },
    tags: ['lamp', 'desk', 'lighting', 'led', 'home-office'],
  },
  {
    id: 'h3',
    name: 'Decorative Cushion',
    brand: 'CasaLux',
    department: 'home',
    category: 'Bedroom & Décor',
    price: 699,
    originalPrice: 999,
    rating: 4.4,
    reviews: 193,
    stock: 200,
    badge: null,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80'],
    description: 'A 45×45cm cushion cover in textured boucle fabric with a concealed zip. Plump poly-fill insert included. Elevates any sofa, chair, or bed with minimal effort. Cover is machine washable.',
    variants: {
      Colour: ['Cream', 'Sage Green', 'Dusty Rose', 'Terracotta', 'Slate Grey'],
      Fill: ['With Insert', 'Cover Only'],
    },
    specs: { Size: '45×45 cm', Material: 'Boucle Fabric Cover', Fill: 'Poly-Fill Insert', Care: 'Machine Washable Cover' },
    tags: ['cushion', 'decor', 'boucle', 'living-room', 'bedroom'],
  },
  {
    id: 'h4',
    name: 'Modular Storage Organizer',
    brand: 'NeatNest',
    department: 'home',
    category: 'Storage & Organization',
    price: 1299,
    originalPrice: 1799,
    rating: 4.7,
    reviews: 326,
    stock: 110,
    badge: null,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'],
    description: 'A 6-compartment modular desk organizer in sustainable bamboo. Holds pens, scissors, phone, cards, notes, and miscellaneous items. Stackable design for expanding storage. Smooth, splinter-free finish.',
    variants: {
      Material: ['Natural Bamboo', 'White Bamboo', 'Walnut-Finish Bamboo'],
      Compartments: ['4 Slots', '6 Slots', '9 Slots'],
    },
    specs: { Material: 'Sustainable Bamboo', Compartments: '6 (standard)', Stackable: 'Yes', 'Eco-Certified': 'FSC-Certified Bamboo' },
    tags: ['organizer', 'storage', 'bamboo', 'desk', 'sustainable'],
  },

  /* ══════════ GROCERY ══════════ */
  {
    id: 'g1',
    name: 'Organic Rolled Oats',
    brand: 'GrainGood',
    department: 'grocery',
    category: 'Breakfast & Cereals',
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 672,
    stock: 800,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1587049352847-ec7daf4e0f3c?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1587049352847-ec7daf4e0f3c?w=600&q=80'],
    description: 'USDA Organic certified whole rolled oats. Stone-ground from non-GMO oat groats for maximum fibre and nutrients. Cooks in 5 minutes. Perfect for porridge, overnight oats, smoothies, or baking. No additives or preservatives.',
    variants: { Size: ['500g', '1kg', '2kg'] },
    specs: { Certification: 'USDA Organic / India Organic', 'Fibre per 100g': '10.6g', Gluten: 'Processed in Gluten-Free Facility', 'Cook Time': '5 Minutes' },
    tags: ['oats', 'organic', 'breakfast', 'healthy', 'whole-grain'],
  },
  {
    id: 'g2',
    name: 'Premium Filter Coffee',
    brand: 'BrewCraft',
    department: 'grocery',
    category: 'Beverages',
    price: 649,
    originalPrice: 849,
    rating: 4.9,
    reviews: 914,
    stock: 500,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80'],
    description: 'A medium-dark roast blend of 70% Arabica (Chikmagalur) and 30% Robusta (Coorg). Rich, full-bodied with notes of dark chocolate, caramel, and a smoky finish. Available as whole beans or freshly ground to your preference.',
    variants: {
      Weight: ['250g', '500g', '1kg'],
      Grind: ['Whole Bean', 'Filter Grind', 'Espresso Fine', 'French Press Coarse'],
    },
    specs: { Blend: '70% Arabica + 30% Robusta', Roast: 'Medium-Dark', Origin: 'Chikmagalur + Coorg, India', 'Flavour Notes': 'Dark Chocolate, Caramel, Smoky' },
    tags: ['coffee', 'filter', 'arabica', 'robusta', 'beverages'],
  },
  {
    id: 'g3',
    name: 'Mixed Dry Fruits Box',
    brand: 'NutriNest',
    department: 'grocery',
    category: 'Nuts & Dry Fruits',
    price: 799,
    originalPrice: 999,
    rating: 4.6,
    reviews: 378,
    stock: 420,
    badge: null,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80'],
    description: 'A curated gift-quality box of premium dry fruits: Afghani almonds, Chilean walnuts, Iranian pistachios, dried cranberries, and golden raisins. No added sugar, no preservatives. Packed in a resealable airtight box.',
    variants: { Size: ['250g', '500g', '1kg'] },
    specs: { Contents: 'Almonds, Walnuts, Pistachios, Cranberries, Raisins', Preservatives: 'None', 'Added Sugar': 'None', Packaging: 'Resealable Airtight Box' },
    tags: ['dry-fruits', 'nuts', 'healthy', 'snacks', 'gift'],
  },
  {
    id: 'g4',
    name: 'Healthy Snack Box',
    brand: 'MunchRight',
    department: 'grocery',
    category: 'Snacks & Munchies',
    price: 549,
    originalPrice: 749,
    rating: 4.5,
    reviews: 241,
    stock: 300,
    badge: null,
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=600&q=80'],
    description: 'A curated box of 10 guilt-free snacks: roasted makhana, multigrain crackers, dark chocolate bites, trail mix, and more. All items are <200 kcal per serving. No maida, no refined sugar, no artificial flavours.',
    variants: { Box: ['10-Piece Assorted', '20-Piece Assorted', 'Custom Build'] },
    specs: { Items: '10 Snacks per Box', Calories: '<200 kcal/serving', 'Free From': 'Maida, Refined Sugar, Artificial Flavours', 'Shelf Life': '3 Months' },
    tags: ['snacks', 'healthy', 'guilt-free', 'munchies', 'box'],
  },

  /* ══════════ KIDS & TOYS ══════════ */
  {
    id: 'k1',
    name: 'Building Blocks Set',
    brand: 'PlayBrix',
    department: 'kids',
    category: 'Building & STEM',
    price: 1799,
    originalPrice: 2499,
    rating: 4.8,
    reviews: 543,
    stock: 145,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80'],
    description: '120-piece classic building blocks set in ABS plastic. Compatible with all major brick brands. Includes baseplates, standard bricks, windows, doors, wheels, and character figures. Develops creativity, spatial reasoning, and fine motor skills.',
    variants: {
      Pieces: ['60-Piece Starter', '120-Piece Classic', '250-Piece Deluxe'],
      Theme: ['City', 'Nature', 'Space', 'Fantasy'],
    },
    specs: { Pieces: '120 (standard)', Material: 'BPA-Free ABS Plastic', 'Age Range': '3+ Years', Compatibility: 'Universal Brick Compatible', Safety: 'CE / BIS Certified' },
    tags: ['blocks', 'building', 'stem', 'educational', 'lego-compatible'],
  },
  {
    id: 'k2',
    name: 'Wooden Educational Puzzle',
    brand: 'WoodLearn',
    department: 'kids',
    category: 'Puzzles & Games',
    price: 699,
    originalPrice: 999,
    rating: 4.7,
    reviews: 318,
    stock: 220,
    badge: null,
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80'],
    description: 'Chunky wooden puzzle with raised handles for easy gripping. Comes in three themes: Alphabet (26 pieces), Animals (20 pieces), or Numbers & Shapes (30 pieces). Finished with non-toxic, child-safe paint. Perfect for toddlers 2–5 years.',
    variants: {
      Theme: ['Alphabet A-Z', 'Farm Animals', 'Numbers & Shapes', 'World Map'],
    },
    specs: { Material: 'Rubber Wood', Paint: 'Non-Toxic, Child-Safe', 'Age Range': '2–5 Years', Handles: 'Raised Grip Knobs', Certifications: 'EN71 / BIS Certified' },
    tags: ['puzzle', 'wooden', 'educational', 'toddler', 'montessori'],
  },
  {
    id: 'k3',
    name: 'Soft Teddy Bear',
    brand: 'HugBuddy',
    department: 'kids',
    category: 'Soft Toys',
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    reviews: 721,
    stock: 310,
    badge: null,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'],
    description: 'Ultra-soft plush teddy bear made from OEKO-TEX certified hypoallergenic polyester. Embroidered safe eyes (no choking hazard), inner PP cotton fill for a huggable shape. Machine washable. Safe from birth — a perfect first soft toy.',
    variants: {
      Size: ['Small 20cm', 'Medium 35cm', 'Large 50cm', 'Giant 75cm'],
      Colour: ['Classic Brown', 'Honey Gold', 'Grey', 'Cream White', 'Blush Pink'],
    },
    specs: { Material: 'OEKO-TEX Certified Polyester Plush', Fill: 'PP Cotton', Eyes: 'Embroidered (Safe)', Washable: 'Machine Washable', 'Safe From': 'Birth+' },
    tags: ['teddy', 'plush', 'soft-toy', 'baby', 'gift'],
  },
  {
    id: 'k4',
    name: 'Kids Art & Craft Kit',
    brand: 'CreativeKids',
    department: 'kids',
    category: 'Arts & Crafts',
    price: 1199,
    originalPrice: 1599,
    rating: 4.6,
    reviews: 264,
    stock: 185,
    badge: null,
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
    images: ['https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80'],
    description: 'A complete creative kit with 24 washable watercolours, 12 oil pastels, 6 acrylic paint tubes, 3 brushes, 2 sponges, a mixing palette, and 20 sheets of 160gsm cartridge paper. All materials are non-toxic and washable. Ideal for ages 4–12.',
    variants: {
      Kit: ['Watercolour Starter', 'Full Art Kit', 'Deluxe Craft Box'],
    },
    specs: { Contents: '24 Watercolours + 12 Pastels + 6 Acrylics + Brushes + Paper', 'Age Range': '4–12 Years', Washable: 'Yes', 'Non-Toxic': 'ASTM D-4236 Certified' },
    tags: ['art', 'craft', 'kids', 'creative', 'painting', 'watercolour'],
  },
];

/* ─── Selectors & Utilities ─────────────────────────── */

/** Read admin overrides from localStorage at call time */
const _getOverrides  = () => { try { return JSON.parse(localStorage.getItem('bmg_prod_overrides')) || {}; } catch { return {}; } };
const _getDeletedIds = () => { try { return JSON.parse(localStorage.getItem('bmg_deleted_ids'))    || []; } catch { return []; } };

/** Apply admin overrides to a product object */
const _applyOverride = (product) => {
  const overrides = _getOverrides();
  const o = overrides[product.id];
  return o ? { ...product, ...o } : product;
};

/** All products with overrides applied and deleted items removed */
export const getEffectiveProducts = () => {
  const deleted = _getDeletedIds();
  return PRODUCTS
    .filter(p => !deleted.includes(p.id))
    .map(_applyOverride);
};

export const getDepartment     = (id)   => DEPARTMENTS.find(d => d.id === id);
export const getProduct        = (id)   => { const p = PRODUCTS.find(p => p.id === id); return p ? _applyOverride(p) : undefined; };
export const getProductsByDept = (dept) => getEffectiveProducts().filter(p => p.department === dept);

export const getFeaturedProducts = () => getEffectiveProducts().filter(p => p.badge === 'Best Seller');

export const searchProducts = (query = '') => {
  const q = query.toLowerCase().trim();
  const all = getEffectiveProducts();
  if (!q) return all;
  return all.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    (p.brand || '').toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.tags.some(t => t.includes(q)) ||
    DEPARTMENTS.find(d => d.id === p.department)?.name.toLowerCase().includes(q)
  );
};

/** Get all unique categories for a department (or all) */
export const getCategories = (deptId) => {
  const prods = deptId ? PRODUCTS.filter(p => p.department === deptId) : PRODUCTS;
  return [...new Set(prods.map(p => p.category))];
};

export const formatPrice = (p) => '₹' + p.toLocaleString('en-IN');

export const getDiscount = (price, orig) =>
  orig && orig > price ? Math.round((1 - price / orig) * 100) : 0;

/** Sort a product array by a sort key */
export const sortProducts = (list, sortKey) => {
  const arr = [...list];
  switch (sortKey) {
    case 'price-asc':  return arr.sort((a, b) => a.price - b.price);
    case 'price-desc': return arr.sort((a, b) => b.price - a.price);
    case 'rating':     return arr.sort((a, b) => b.rating - a.rating);
    case 'discount':   return arr.sort((a, b) => getDiscount(b.price, b.originalPrice) - getDiscount(a.price, a.originalPrice));
    default:           return arr.sort((a, b) => b.reviews - a.reviews); // featured
  }
};
