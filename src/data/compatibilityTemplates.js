// General two-person compatibility copy — same Five Element relationship
// keys as idolMatchTemplates.js, but without fandom vocabulary (bias,
// comeback, stream...) since this applies to anyone: a friend, a partner,
// a coworker. Keep the tone (casual, a little wry) but keep it universal.
export const compatibilityTemplates = {
  en: {
    same: {
      tier: 'Mirror Match',
      lines: [
        "You two run on the exact same frequency — this relationship probably feels less like getting to know someone and more like recognizing them. Less explaining yourself, more just being understood on sight.",
        "Same element, same wavelength. You'd finish each other's sentences and rarely have to explain a reference, a mood, or a decision — it just already makes sense to both of you.",
        "There's an ease to this pairing that's hard to manufacture with anyone else. Neither of you has to perform a version of yourselves around the other.",
        "Matching energy like this means conflict, when it happens, resolves fast — you're arguing from the same playbook, not two different ones.",
        "This connection would feel less like opposites attracting and more like finding your own reflection in someone else's life.",
      ],
    },
    otherGeneratesMe: {
      tier: 'Steady Support',
      lines: [
        "Their energy feeds yours — this relationship would quietly make everything easier, without either of you having to try very hard for it. The kind of pairing you don't overthink, you just lean into.",
        "They'd be the steady, generous presence that keeps your cup full without you even having to ask. Not a dramatic dynamic, but a deeply comfortable one.",
        "Being around them would feel less like effort and more like being gently looked after — their presence has a way of settling yours.",
        "This relationship would show up in your life as a kind of quiet relief — the person you call when things are hard, without knowing exactly why they help so much.",
        "They'd make your harder days easier just by being around, without either of you doing anything dramatic about it.",
      ],
    },
    iGenerateOther: {
      tier: 'The Giver',
      lines: [
        "You'd be the one doing the giving here — energy, support, attention. Lucky for them; the risk is running yourself a little thin if you're not careful.",
        "This relationship would bring out your most generous, most devoted self. You'd notice what they need before they say it out loud.",
        "You'd likely be the one initiating plans, checking in first, keeping the connection alive — not because you have to, but because it comes naturally to you here.",
        "Being close to them would turn you into a more attentive, more encouraging version of yourself, even if it's not something you consciously decide to do.",
        "You'd find yourself rooting for them in ways that surprise even you — that's the kind of generosity this pairing tends to bring out.",
      ],
    },
    otherOvercomesMe: {
      tier: 'Push and Pull',
      lines: [
        "There's real friction in this pairing — the uncomfortable, can't-quite-relax kind that keeps you a little on edge around them. Not necessarily bad, but not effortless either.",
        "Not a comfortable match, but a compelling one — the kind of dynamic where you'd overanalyze a text or a tone of voice more than you would with anyone else.",
        "This relationship might ask more of you than most — more patience, more communication, more willingness to sit with discomfort instead of avoiding it.",
        "There's an edge to this pairing that keeps things interesting, for better or worse — you'd rarely fully predict them, and that unpredictability cuts both ways.",
        "This isn't the easiest connection on paper, but the ones that challenge you a little are often the ones that teach you the most about yourself.",
      ],
    },
    iOvercomeOther: {
      tier: 'The Steady One',
      lines: [
        "You'd be the calm, grounding force in this relationship — the one who keeps things steady, whether they notice it or not. There's something quietly protective about how you'd show up for them.",
        "This relationship would bring out your take-charge side. You'd be the one making the call, holding the plan together, setting the tone more often than not.",
        "You'd likely be the one they lean on when things get uncertain — not because you asked for that role, but because it tends to land on you anyway.",
        "Your presence carries real weight with them, even in small moments. Worth using that influence carefully rather than carelessly.",
        "You'd be the steadier one in this pairing — grounded, a little protective, generally the one keeping perspective when things get chaotic.",
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

/** Picks a compatibility blurb for a relation, stable per pair of birthdates. */
export function getCompatibilityCopy(lang, relation, seedInput) {
  const entry = (compatibilityTemplates[lang] || compatibilityTemplates.en)[relation];
  const seed = hashCode(seedInput);
  return { tier: entry.tier, line: entry.lines[seed % entry.lines.length] };
}
