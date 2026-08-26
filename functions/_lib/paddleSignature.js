// Verifies a Paddle Billing webhook's `Paddle-Signature` header against the
// notification destination's endpoint secret key (see PADDLE_WEBHOOK_SECRET
// in Cloudflare Pages env vars — comes from the response of creating the
// notification destination, see scripts/setup-paddle.mjs).
//
// Per developer.paddle.com/webhooks/signature-verification: the header is
// `ts=<unix_timestamp>;h1=<hex_hmac>`, and h1 is HMAC-SHA256 of
// `${ts}:${rawBody}` (the *raw* bytes — no JSON re-serialization) keyed by
// the endpoint secret. Uses Web Crypto (crypto.subtle), available natively
// in the Workers/Pages Functions runtime — no Node `crypto` module needed.

function hexToBytes(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

/**
 * @param {string} rawBody - the exact request body bytes as a string (read
 *   via request.text(), not request.json() — re-serializing would change
 *   whitespace and break the signature).
 * @param {string} signatureHeader - the raw `Paddle-Signature` header value.
 * @param {string} secret - the notification destination's endpoint secret
 *   key (starts with `pdl_ntfset_`).
 * @returns {Promise<boolean>}
 */
export async function verifyPaddleSignature(rawBody, signatureHeader, secret) {
  if (!signatureHeader || !secret) return false;

  const parts = Object.fromEntries(
    signatureHeader.split(';').map((part) => {
      const [key, value] = part.split('=');
      return [key, value];
    })
  );
  const { ts, h1 } = parts;
  if (!ts || !h1) return false;

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signed = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${ts}:${rawBody}`));
  const computedHex = [...new Uint8Array(signed)].map((b) => b.toString(16).padStart(2, '0')).join('');

  try {
    return timingSafeEqual(hexToBytes(computedHex), hexToBytes(h1));
  } catch {
    return false;
  }
}
