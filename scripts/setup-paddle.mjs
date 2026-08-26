#!/usr/bin/env node
// One-time setup script: creates the "Ohaeng Credit Pack" product + its 3
// one-time prices ($0.99/1 credit, $2.49/3 credits, $3.99/5 credits) and
// registers the Paddle webhook destination, via the Paddle Billing REST API
// (developer.paddle.com/api-reference). Patches the real price ids straight
// into functions/_lib/priceCredits.js and src/data/creditPacks.js so there's
// no manual copy-paste step for those.
//
// Requires PADDLE_API_KEY, either as an env var or in a local .env.local
// (gitignored via the *.local pattern) — never pass it on the command line
// or paste it in chat. Get it from the Paddle dashboard: Developer Tools ->
// Authentication -> API keys (needs product.write/price.write/
// notification_setting.write). Also reads PADDLE_ENV (defaults to
// 'sandbox' — pass 'live' only once you're ready for real payments).
//
// Usage: node scripts/setup-paddle.mjs https://getohaeng.com/webhooks/paddle
import fs from 'fs';
import path from 'path';

function loadEnvLocal() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  const vars = {};
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim().replace(/^['"]|['"]$/g, '');
      vars[key] = value;
    }
  }
  return vars;
}

const envLocal = loadEnvLocal();
const apiKey = process.env.PADDLE_API_KEY || envLocal.PADDLE_API_KEY;
if (!apiKey) {
  console.error('PADDLE_API_KEY not found. Add it to .env.local (PADDLE_API_KEY=...) and re-run — never as a command-line argument or in chat.');
  process.exit(1);
}

const paddleEnv = (process.env.PADDLE_ENV || envLocal.PADDLE_ENV || 'sandbox').toLowerCase();
const baseUrl = paddleEnv === 'live' ? 'https://api.paddle.com' : 'https://sandbox-api.paddle.com';

const webhookUrl = process.argv[2];
if (!webhookUrl) {
  console.error('Usage: node scripts/setup-paddle.mjs <webhook-url>  (e.g. https://getohaeng.com/webhooks/paddle)');
  process.exit(1);
}

async function paddleFetch(pathname, options = {}) {
  const res = await fetch(`${baseUrl}${pathname}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`${pathname} failed (${res.status}): ${JSON.stringify(json)}`);
  return json.data;
}

function patchFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  for (const [placeholder, real] of replacements) content = content.split(placeholder).join(real);
  fs.writeFileSync(filePath, content);
}

console.log(`Using Paddle ${paddleEnv} environment (${baseUrl})`);

const product = await paddleFetch('/products', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Ohaeng Credit Pack',
    // 'digital-goods' isn't approved on every account by default and
    // returns product_tax_category_not_approved until Paddle enables it —
    // 'standard' works out of the box on a fresh sandbox account.
    tax_category: 'standard',
    description: 'Credits for unlocking individual idol/actor readings on Ohaeng.',
  }),
});
console.log('Created product:', product.id);

const PACKS = [
  { credits: 1, amount: '99' },
  { credits: 3, amount: '249' },
  { credits: 5, amount: '399' },
];

const prices = [];
for (const pack of PACKS) {
  const price = await paddleFetch('/prices', {
    method: 'POST',
    body: JSON.stringify({
      product_id: product.id,
      name: `${pack.credits} Credit${pack.credits > 1 ? 's' : ''}`,
      description: `${pack.credits} credit${pack.credits > 1 ? 's' : ''}`,
      unit_price: { amount: pack.amount, currency_code: 'USD' },
    }),
  });
  console.log(`Created price for ${pack.credits} credit(s):`, price.id);
  prices.push({ ...pack, id: price.id });
}

const replacements = [
  ['pri_REPLACE_WITH_1_CREDIT_PRICE_ID', prices[0].id],
  ['pri_REPLACE_WITH_3_CREDIT_PRICE_ID', prices[1].id],
  ['pri_REPLACE_WITH_5_CREDIT_PRICE_ID', prices[2].id],
];
patchFile('functions/_lib/priceCredits.js', replacements);
patchFile('src/data/creditPacks.js', replacements);
console.log('Patched functions/_lib/priceCredits.js and src/data/creditPacks.js with the real price ids.');

const notification = await paddleFetch('/notification-settings', {
  method: 'POST',
  body: JSON.stringify({
    description: 'Ohaeng credits webhook',
    type: 'url',
    destination: webhookUrl,
    subscribed_events: ['transaction.completed'],
  }),
});
console.log('Created webhook destination:', notification.id);

// The endpoint secret is only ever shown once, right here — write it to
// .env.local (gitignored) instead of printing it, so it doesn't need to
// pass through anyone reading this script's terminal output. Open
// .env.local yourself to grab it for the next step.
fs.appendFileSync(
  path.resolve(process.cwd(), '.env.local'),
  `\n# From scripts/setup-paddle.mjs — copy this into Cloudflare Pages > Settings > Environment variables (as a Secret, Production + Preview), then it's safe to delete this line here.\nPADDLE_WEBHOOK_SECRET=${notification.endpoint_secret_key}\n`
);

console.log('\nDone. Webhook secret was appended to .env.local as PADDLE_WEBHOOK_SECRET — open that file yourself and copy it into Cloudflare Pages > Settings > Environment variables (Secret, both Production and Preview).');
