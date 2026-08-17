import ElementCharacter from './ElementCharacter';

/**
 * Renders a numbered list of insight paragraphs (badge + title + body),
 * optionally introduced by an ElementCharacter speech bubble. Always renders
 * the full `sections` array via .map() — no .slice() here on purpose, so a
 * future free/paid split can be added later just by slicing the array
 * passed in, without touching this component.
 *
 * `sections`: Array<{ title: string, text: string }>
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
        {sections.map((section, i) => (
          <div
            key={i}
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
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
