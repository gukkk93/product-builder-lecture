// Compatibility copy bank, keyed by the same Five Element relationship
// values getElementRelation() returns (see src/utils/saju.js), just applied
// to "user vs. idol" instead of "user vs. today". Keyed by language so a
// future locale can add a sibling object, same pattern as fortuneTemplates.js.
export const idolMatchTemplates = {
  en: {
    same: {
      tier: 'Twin Flame',
      lines: [
        "You two run on the exact same frequency — this wouldn't feel like a crush so much as recognition. There's a comfort in matching energy like this: less performing for each other, more just being understood on sight.",
        "Same element, same wavelength. This would be an easy, no-translation-needed kind of bond, the kind where you'd finish each other's sentences and never have to explain the reference.",
      ],
    },
    otherGeneratesMe: {
      tier: 'Endless Support',
      lines: [
        "Their energy feeds yours — this bias would quietly make everything in your life feel a little easier, a little lighter, without either of you having to try very hard. That's the kind of pairing you don't question, you just enjoy.",
        "They'd be the steady, generous presence that keeps your cup full without you even having to ask. Not a flashy dynamic, but a deeply comfortable one — the kind of bias who feels like home.",
      ],
    },
    iGenerateOther: {
      tier: 'Your Biggest Cheerleader',
      lines: [
        "You'd be the one doing the giving here — hype, support, energy, attention. Lucky for them, you never seem to run out, and honestly, being their number one fan would probably bring out your most devoted, most generous self.",
        "This bias would turn you into the loudest, most enthusiastic version of yourself. You'd stream, you'd vote, you'd defend them in every group chat — and somehow it would never feel like a chore.",
      ],
    },
    otherOvercomesMe: {
      tier: 'Magnetic Tension',
      lines: [
        "There's real friction in this pairing — the uncomfortable, can't-look-away kind that turns a casual interest into a full-blown obsession. Not a soft, easy bias; a consuming one.",
        "Not a comfortable match, but a compelling one — the kind of dynamic where you'd overanalyze every glance and read too much into every lyric. This is exactly the energy that turns into a years-long bias without you fully choosing it.",
      ],
    },
    iOvercomeOther: {
      tier: 'You Call the Shots',
      lines: [
        "You'd be the calm, grounding force in this dynamic — the one who keeps them steady, whether they know it or not. There's something quietly protective about how you'd root for them.",
        "This bias would bring out your protective, take-charge side. You'd be the fan defending them in comment sections, correcting misinformation, and generally acting like their unofficial, self-appointed hype team captain — firmly and happily in charge of this bond.",
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
