import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getCompatibility, getCompatibilityScore } from '../utils/saju';
import { getIdolMatchCopy } from '../data/idolMatchTemplates';
import MemberAvatar from './MemberAvatar';

/** Ranks every member of a group by compatibility with userSaju, best first. */
export default function GroupRankList({ group, userSaju }) {
  const { i18n } = useTranslation();

  const ranked = useMemo(() => {
    return group.members
      .map((member) => {
        const compat = getCompatibility(
          userSaju,
          { year: member.year, month: member.month, day: member.day, hour: null, calendar: 'solar' },
          false
        );
        const copy = getIdolMatchCopy(i18n.language, compat.relation, `${member.id}-group-${group.id}`);
        const score = getCompatibilityScore(compat.relation, `${member.id}-group-${group.id}`);
        return {
          member,
          element: compat.otherSaju.dominantElement,
          strength: compat.otherSaju.dayGanStrength,
          relation: compat.relation,
          tier: copy.tier,
          score,
        };
      })
      .sort((a, b) => b.score - a.score);
  }, [group, userSaju, i18n.language]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {ranked.map((row, i) => (
        <div
          key={row.member.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '10px 0',
            borderTop: i === 0 ? 'none' : '1px solid var(--border)',
          }}
        >
          <strong style={{ width: 20, flexShrink: 0, color: 'var(--text-muted)', fontSize: 13 }}>{i + 1}</strong>
          <MemberAvatar element={row.element} strength={row.strength} size={40} />
          <div style={{ flex: 1, minWidth: 0, textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: 14 }}>{row.member.name}</div>
            <div style={{ fontSize: 12, color: 'var(--accent)' }}>{row.tier}</div>
          </div>
          <strong style={{ flexShrink: 0, fontSize: 15, color: 'var(--accent)' }}>{row.score}%</strong>
        </div>
      ))}
    </div>
  );
}
