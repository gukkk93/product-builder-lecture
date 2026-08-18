import { useMemo, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { trackShareDownload } from '../utils/analytics';

// Feature-detected once per session: iOS Safari and Android Chrome support
// navigator.share(), which opens the OS share sheet (Instagram, KakaoTalk,
// Messages, WhatsApp, etc. all show up automatically — no need to
// hand-build a button per app). Desktop browsers mostly don't, so they
// fall back to a plain PNG download. Kept the name `canShareFiles` even
// though native share is link-only now (see below) — it still means "can
// use the native share sheet" for the button-label branch pages use it for.
const supportsShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';

/**
 * Opens the native OS share sheet with a link-only share (mobile, when
 * supported) or falls back to rendering the off-screen share card (via
 * cardRef) to a PNG and downloading it (desktop / unsupported browsers).
 *
 * The native-share path no longer attaches the rendered PNG as a file:
 * `url` now carries the full result state as query params, so Cloudflare's
 * OG-preview middleware (functions/_middleware.js + og-image.png.js) can
 * render a matching dynamic preview image itself for whatever surface the
 * link lands in (KakaoTalk, iMessage, Discord, ...) — a static file
 * attached here would just be a second, unrelated image alongside that
 * preview. Skipping the file also means the PNG never needs to be rendered
 * at all in the common (share-sheet-supported) case.
 */
export function useShareCardDownload() {
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const canShareFiles = useMemo(() => supportsShare, []);

  async function download(filename, analyticsContext, { text, url } = {}) {
    setDownloading(true);
    try {
      const combinedText = url ? [text, url].filter(Boolean).join('\n') : text;

      if (supportsShare) {
        try {
          await navigator.share({ text: combinedText });
          trackShareDownload(analyticsContext);
          return;
        } catch (err) {
          // AbortError means the user closed the share sheet on purpose —
          // treat that as done, not as a reason to force a download too.
          if (err?.name === 'AbortError') return;
          // Any other failure (rare) falls through to the download below.
        }
      }

      if (!cardRef.current) return;
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 3 });
      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      link.click();
      trackShareDownload(analyticsContext);
    } finally {
      setDownloading(false);
    }
  }

  return { cardRef, download, downloading, canShareFiles };
}
