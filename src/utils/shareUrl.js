import { SITE_URL } from '../components/ShareCard';

/** Absolute, shareable link to a route — e.g. buildShareUrl('/result'). */
export function buildShareUrl(path) {
  return `https://${SITE_URL}${path}`;
}
