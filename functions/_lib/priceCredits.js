// Maps a Paddle price id to how many credits a purchase of it grants.
// Filled in with real ids by scripts/setup-paddle.mjs after it creates the
// "Ohaeng Credit Pack" product's 3 prices — see that script's printed
// output. Placeholder ids below will never match a real webhook payload,
// so the webhook safely no-ops (credits nothing) until this is updated.
export const PRICE_CREDITS = {
  'pri_REPLACE_WITH_1_CREDIT_PRICE_ID': 1,
  'pri_REPLACE_WITH_3_CREDIT_PRICE_ID': 3,
  'pri_REPLACE_WITH_5_CREDIT_PRICE_ID': 5,
};
