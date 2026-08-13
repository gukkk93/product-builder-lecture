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
        "There's a version of parasocial connection that feels less like fantasy and more like familiarity, and this is it. You'd get their sense of humor immediately, no explanation needed.",
        "Matching energy like this means you'd never have to perform enthusiasm around them — it would just already be there, easy and mutual.",
        "This bias would feel less like admiring someone different from you and more like watching a slightly more glamorous version of your own energy.",
      ],
    },
    otherGeneratesMe: {
      tier: 'Endless Support',
      lines: [
        "Their energy feeds yours — this bias would quietly make everything in your life feel a little easier, a little lighter, without either of you having to try very hard. That's the kind of pairing you don't question, you just enjoy.",
        "They'd be the steady, generous presence that keeps your cup full without you even having to ask. Not a flashy dynamic, but a deeply comfortable one — the kind of bias who feels like home.",
        "Being a fan of theirs would feel less like chasing and more like being gently looked after — their energy has a way of settling yours.",
        "This bias would show up in your life as comfort content — the interview you rewatch when you need to feel okay, the voice that's easy to fall asleep to.",
        "They'd be the kind of bias who makes your bad days better just by existing, without either of you doing anything dramatic about it.",
      ],
    },
    iGenerateOther: {
      tier: 'Your Biggest Cheerleader',
      lines: [
        "You'd be the one doing the giving here — hype, support, energy, attention. Lucky for them, you never seem to run out, and honestly, being their number one fan would probably bring out your most devoted, most generous self.",
        "This bias would turn you into the loudest, most enthusiastic version of yourself. You'd stream, you'd vote, you'd defend them in every group chat — and somehow it would never feel like a chore.",
        "You'd be the one making fan edits at 2am, not because you have to, but because the enthusiasm just pours out of you around them.",
        "This bias would turn you into the friend who brings them up unprompted in every conversation — not annoying, just genuinely, helplessly proud of them.",
        "You'd find yourself defending their skills, their choices, their era in ways that surprise even you. That's the kind of devotion this pairing brings out.",
      ],
    },
    otherOvercomesMe: {
      tier: 'Magnetic Tension',
      lines: [
        "There's real friction in this pairing — the uncomfortable, can't-look-away kind that turns a casual interest into a full-blown obsession. Not a soft, easy bias; a consuming one.",
        "Not a comfortable match, but a compelling one — the kind of dynamic where you'd overanalyze every glance and read too much into every lyric. This is exactly the energy that turns into a years-long bias without you fully choosing it.",
        "This is the kind of bias that sneaks up on you — you'd insist you're \"just curious\" right up until you're not.",
        "There's an edge to this pairing that keeps things interesting; you'd never fully predict them, and that unpredictability is exactly the hook.",
        "Not a soft landing of a bias — more like the one you'd end up thinking about at inconvenient times, unable to fully explain why.",
      ],
    },
    iOvercomeOther: {
      tier: 'You Call the Shots',
      lines: [
        "You'd be the calm, grounding force in this dynamic — the one who keeps them steady, whether they know it or not. There's something quietly protective about how you'd root for them.",
        "This bias would bring out your protective, take-charge side. You'd be the fan defending them in comment sections, correcting misinformation, and generally acting like their unofficial, self-appointed hype team captain — firmly and happily in charge of this bond.",
        "You'd be the fan who somehow ends up moderating the group chat about them — organized, protective, quietly in charge of the vibe.",
        "This bias would bring out your steady side; you'd be the one keeping perspective when everyone else is spiraling over a single tweet.",
        "You'd root for them the way you'd root for a friend, not just a star — grounded, a little protective, always in their corner.",
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
