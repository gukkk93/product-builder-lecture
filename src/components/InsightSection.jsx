import ElementCharacter from './ElementCharacter';
import PremiumLock from './PremiumLock';

/**
 * Renders a numbered list of insight paragraphs (badge + title + body),
 * optionally introduced by an ElementCharacter speech bubble. Always renders
 * the full `sections` array via .map() — no .slice() here on purpose, so the
 * free/paid split is decided by each section's own `locked` flag when the
 * array is built, not by this component. A section with `locked: true` gets
 * wrapped in PremiumLock individually (blurred + its own lock overlay)
 * rather than the whole list sharing one lock.
 *
 * `text` may contain multiple paragraphs separated by "\n\n" — each is
 * rendered as its own <p>. An optional `subheading` renders as a bold lead
 * line above the body, for sections deep enough to want one; most callers
 * leave it out and just rely on the numbered `title`.
 *
 * `sections`: Array<{ title: string, subheading?: string, text: string, locked?: boolean }>
 */
export default function InsightSection({ element, intro, sections }) {
  if (!sections || sections.length === 0) return null;

  return (
    <div style={{ width: '100%', marginTop: 24, textAlign: 'left' }}>
      {element && intro && (
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, marginBottom: 20 }}>
          <ElementCharacter element={element} size={56} style={{ flexShrink: 0 }} />
          <div
            className="insight-bubble"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '14px 14px 14px 4px',
              padding: '10px 14px',
              fontSize: 13,
              lineHeight: 1.5,
              color: 'var(--text-muted)',
            }}
          >
            {intro}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {sections.map((section, i) => {
          const card = (
            <div
              style={{
                padding: '14px 16px',
                borderRadius: 14,
                background: 'var(--bg)',
                border: '1px solid var(--border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span
                  style={{
                    flexShrink: 0,
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    color: 'var(--accent-contrast)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {i + 1}
                </span>
                <strong style={{ fontSize: 14 }}>{section.title}</strong>
              </div>
              {section.subheading && (
                <p style={{ margin: '0 0 6px', fontSize: 13, fontWeight: 700, color: 'var(--accent)' }}>
                  {section.subheading}
                </p>
              )}
              {section.text.split('\n\n').map((para, pi) => (
                <p
                  key={pi}
                  style={{ margin: pi === 0 ? 0 : '8px 0 0', fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}
                >
                  {para}
                </p>
              ))}
            </div>
          );
          return <div key={i}>{section.locked ? <PremiumLock>{card}</PremiumLock> : card}</div>;
        })}
      </div>
    </div>
  );
}
