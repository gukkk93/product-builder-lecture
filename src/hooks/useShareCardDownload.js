import { useRef, useState } from 'react';
import { toPng } from 'html-to-image';

/** Renders an off-screen share card (via cardRef) to a PNG and downloads it. */
export function useShareCardDownload() {
  const cardRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  async function download(filename) {
    if (!cardRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(cardRef.current, { pixelRatio: 3 });
      const link = document.createElement('a');
      link.download = filename;
      link.href = dataUrl;
      link.click();
    } finally {
      setDownloading(false);
    }
  }

  return { cardRef, download, downloading };
}
