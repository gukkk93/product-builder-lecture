import { getCompatibility, getCompatibilityScore } from './saju';

/**
 * Scans every candidate in `pool` whose gender is opposite to `myGender`
 * ('M' or 'F') and returns the single highest-scoring Five Element match.
 * Each pool item needs at least { id, year, month, day, gender }.
 */
export function findBestMatch(pool, userSaju, myGender) {
  const targetGender = myGender === 'M' ? 'F' : 'M';
  const candidates = pool.filter((p) => p.gender === targetGender);

  let best = null;
  for (const candidate of candidates) {
    const compat = getCompatibility(
      userSaju,
      { year: candidate.year, month: candidate.month, day: candidate.day, hour: null, calendar: 'solar' },
      false
    );
    const score = getCompatibilityScore(compat.relation, candidate.id, userSaju.dayGanStrength, compat.otherSaju.dayGanStrength);
    if (!best || score > best.score) {
      best = { candidate, saju: compat.otherSaju, relation: compat.relation, score };
    }
  }
  return best;
}
