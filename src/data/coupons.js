/* ═══════════════════════════════════════════════════════════
   BLOWMAGGY — Demo Coupon Definitions
   Separate file to avoid Vite Fast Refresh warnings
═══════════════════════════════════════════════════════════ */

export const COUPONS = {
  SAVE10: {
    code: 'SAVE10',
    type: 'percent',
    value: 10,
    minOrder: 999,
    desc: '10% off on orders above ₹999',
    maxUses: 1,
  },
  FLAT150: {
    code: 'FLAT150',
    type: 'flat',
    value: 150,
    minOrder: 1499,
    desc: '₹150 off on orders above ₹1,499',
    maxUses: 1,
  },
  NEWUSER: {
    code: 'NEWUSER',
    type: 'percent',
    value: 15,
    minOrder: 0,
    desc: '15% off — Welcome offer (no minimum)',
    maxUses: 1,
  },
};
