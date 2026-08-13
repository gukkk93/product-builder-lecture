// Compatibility copy bank, keyed by the same Five Element relationship
// values getElementRelation() returns (see src/utils/saju.js), just applied
// to "user vs. idol" instead of "user vs. today". Keyed by language so a
// future locale can add a sibling object, same pattern as fortuneTemplates.js.
export const idolMatchTemplates = {
  en: {
    same: {
      tier: 'Twin Flame',
      lines: [
        "You two run on the exact same frequency — it would feel less like a crush and more like recognition.",
        "Same element, same energy. This would be an easy, no-translation-needed kind of bond.",
      ],
    },
    otherGeneratesMe: {
      tier: 'Endless Support',
      lines: [
        "Their energy feeds yours — this bias would quietly make everything in your life feel a little easier.",
        "They'd be the steady, generous presence that keeps your cup full without you even asking.",
      ],
    },
    iGenerateOther: {
      tier: 'Your Biggest Cheerleader',
      lines: [
        "You'd be the one giving — hype, support, energy. Lucky for them, you never seem to run out.",
        "This bias would bring out your most generous, most devoted self. They'd feel it too.",
      ],
    },
    otherOvercomesMe: {
      tier: 'Magnetic Tension',
      lines: [
        "There's real friction in this pairing — the kind that makes a bias impossible to look away from.",
        "Not a comfortable match, but a compelling one. This is exactly the energy that turns into an obsession.",
      ],
    },
    iOvercomeOther: {
      tier: 'You Call the Shots',
      lines: [
        "You'd be the calm, grounding force in this dynamic — the one who keeps them steady.",
        "This bias would bring out your protective side. You'd be quietly, firmly in charge of this bond.",
      ],
    },
  },
};

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/** Picks a compatibility blurb for a relation, stable per user+idol pair. */
export function getIdolMatchCopy(lang, relation, seedInput) {
  const entry = (idolMatchTemplates[lang] || idolMatchTemplates.en)[relation];
  const seed = hashCode(seedInput);
  return { tier: entry.tier, line: entry.lines[seed % entry.lines.length] };
}
