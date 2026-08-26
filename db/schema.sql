-- Cloudflare D1 schema for the Paddle credits system (idolMatch/dramaMatch
-- per-member unlocks only — saju/compatibility/romance stay on the
-- existing localStorage-only PremiumContext, untouched).
--
-- Apply with: wrangler d1 execute ohaeng-credits --file=db/schema.sql
-- (add --remote to apply against the live D1 database instead of the
-- local dev shadow copy).

-- One row per anonymous browser (anon_id, see src/utils/credits.js).
-- A row is created lazily on that anon_id's first GET /api/credits/state
-- call, seeded with a 1-credit welcome bonus (see functions/api/credits/state.js)
-- — there is no separate "signup" step since there's no login system.
CREATE TABLE IF NOT EXISTS credits (
  anon_id TEXT PRIMARY KEY,
  balance INTEGER NOT NULL DEFAULT 0,
  updated_at TEXT NOT NULL
);

-- Which specific idol member / drama actor a given anon_id has permanently
-- unlocked. item_key is namespaced ('idol:<memberId>' or 'actor:<actorId>')
-- so the two id spaces (idols.js's group-prefixed ids vs kdramaActors.js's
-- flat slugs) can never collide even though neither is centrally enforced
-- unique across files.
CREATE TABLE IF NOT EXISTS unlocks (
  anon_id TEXT NOT NULL,
  item_key TEXT NOT NULL,
  unlocked_at TEXT NOT NULL,
  PRIMARY KEY (anon_id, item_key)
);

-- Every processed Paddle transaction id, purely so the webhook can no-op on
-- a retry (Paddle retries on any non-2xx response, or if it simply doesn't
-- get one in time) instead of crediting the same purchase twice.
CREATE TABLE IF NOT EXISTS processed_transactions (
  transaction_id TEXT PRIMARY KEY,
  anon_id TEXT NOT NULL,
  credits_added INTEGER NOT NULL,
  processed_at TEXT NOT NULL
);
