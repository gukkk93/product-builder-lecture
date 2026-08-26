// Maps a Paddle price id to how many credits a purchase of it grants.
// Filled in with real ids by scripts/setup-paddle.mjs after it creates the
// "Ohaeng Credit Pack" product's 3 prices — see that script's printed
// output. Placeholder ids below will never match a real webhook payload,
// so the webhook safely no-ops (credits nothing) until this is updated.
export const PRICE_CREDITS = {
  'pri_01m0ywx9ewhq0ttraa42k4wvv0': 1,
  'pri_01m0ywx9pgyc9wz2adbvcnr5pn': 3,
  'pri_01m0ywx9ycvz8gaeqw52b21j9j': 5,
};
