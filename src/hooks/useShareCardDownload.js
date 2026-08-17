import { useMemo, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { trackShareDownload } from '../utils/analytics';

// Feature-detected once per session: iOS Safari and Android Chrome support
// navigator.share() with files, which opens the OS share sheet (Instagram,
// KakaoTalk, Messages, WhatsApp, etc. all show up automatically — no need
// to hand-build a button per app). Desktop browsers mostly don't, so they
// fall back to a plain download. This only checks that the API shape
// exists; the actual file is checked via canShare({ files }) at share time,
// since some browsers support navigator.share but not file sharing.
const supportsShare =
  typeof navigator !== 'undefined' &&
  typeof navigator.share === 'function' &&
  typeof navigator.canShare === 'function';

async function dataUrlToFile(dataUrl, filename) {
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  return new File([blob], filename, { type: 'image/png' });
}

/**
 * Renders an off-screen share card (via cardRef) to a PNG, then either
 * opens the native OS share sheet (mobile, when file sharing is supported)
 * or falls back to a plain download link (desktop / unsupported browsers).
 */
export function useShareCardDownload() {
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const canShareFiles = useMemo(() => supportsShare, []);

  async function download(filename, analyticsContext, { text, url } = {}) {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 3 });
      const file = await dataUrlToFile(dataUrl, filename);

      if (supportsShare && navigator.canShare({ files: [file] })) {
        try {
          // The link is folded into `text` rather than also passed as a
          // separate `url`, since some share targets (KakaoTalk included)
          // render each field as its own outgoing message/preview when
          // both are set alongside `files` — sending file + url + text
          // shows up as two separate link previews. Just text keeps it to
          // one image + one link.
          const combinedText = url ? [text, url].filter(Boolean).join('\n') : text;
          await navigator.share({ files: [file], text: combinedText });
          trackShareDownload(analyticsContext);
          return;
        } catch (err) {
          // AbortError means the user closed the share sheet on purpose —
          // treat that as done, not as a reason to force a download too.
          if (err?.name === 'AbortError') return;
          // Any other failure (rare) falls through to the download below.
        }
      }

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
