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

  async function download(filename, analyticsContext, shareText) {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 3 });
      const file = await dataUrlToFile(dataUrl, filename);

      if (supportsShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], text: shareText });
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
