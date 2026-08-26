// Keep these price ids in sync with functions/_lib/priceCredits.js — both
// get the same 3 placeholder strings filled in by scripts/setup-paddle.mjs
// once the "Ohaeng Credit Pack" product's prices actually exist in Paddle.
// priceLabel is just display text (Paddle's own checkout UI shows the real
// localized price at payment time) — amounts must match what
// scripts/setup-paddle.mjs actually creates: $0.99 / $2.49 / $3.99.
export const CREDIT_PACKS = [
  { id: 'pri_01m0ywx9ewhq0ttraa42k4wvv0', credits: 1, priceLabel: '$0.99' },
  { id: 'pri_01m0ywx9pgyc9wz2adbvcnr5pn', credits: 3, priceLabel: '$2.49' },
  { id: 'pri_01m0ywx9ycvz8gaeqw52b21j9j', credits: 5, priceLabel: '$3.99' },
];
