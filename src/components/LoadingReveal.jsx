import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ElementCharacter from './ElementCharacter';

// The saju calculation itself is instant (client-side, no server round
// trip) — there's no real "loading" to fill. This is a deliberate minimum
// display time so the character actually gets seen instead of flashing for
// one frame. Kept short enough not to feel like a fake delay.
const REVEAL_MS = 1500;

/**
 * Wraps a finished result: shows the dominant-element character + a short
 * "reading your saju" line for REVEAL_MS, then swaps to `children`. Only
 * meant to wrap the already-computed result branch of a page — pages still
 * show BirthDateForm directly (no reveal) when there's nothing to compute
 * yet.
 */
export default function LoadingReveal({ element, children }) {
  const { t } = useTranslation();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(false);
    const timer = setTimeout(() => setRevealed(true), REVEAL_MS);
    return () => clearTimeout(timer);
  }, [element]);

  if (revealed) return children;

  return (
    <main className="page">
      <div className="page-content" style={{ justifyContent: 'center', minHeight: '55vh' }}>
        <ElementCharacter element={element} size={140} />
        <p className="subtitle" style={{ marginTop: 20 }}>
          {t('loading.analyzing', { element: t(`elements.${element}`) })}
        </p>
      </div>
    </main>
  );
}
