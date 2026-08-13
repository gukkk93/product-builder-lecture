// Fortune line bank, organized by the Five Element relationship between the
// user's dominant element and today's day-master element (see
// getElementRelation in src/utils/saju.js), then by fortune category.
//
// Keyed by language so a future locale can add a sibling object with the
// same shape (see src/i18n for the matching pattern for UI copy).
export const fortuneTemplates = {
  en: {
    same: {
      overall: [
        "Your energy and today's energy are in perfect sync — lean into whatever feels most \"you\" right now.",
        "It's a high-clarity day. What you feel is what's real, so trust your gut.",
      ],
      love: [
        'Romantic energy matches your natural style today — no need to perform, just be yourself.',
        "Whatever you're already doing in your relationships, keep doing it. The rhythm is right.",
      ],
      wealth: [
        "Your money instincts are reliable today — normal spending, normal saving, no drama needed.",
        'Financially, today is "steady as she goes." Nothing to fix, nothing to force.',
      ],
      health: [
        "Your body's rhythm and today's rhythm agree — normal routines will feel especially good.",
        'No red flags today. Keep doing what already works for you.',
      ],
      comeback: [
        "If your bias dropped a comeback today, it'd chart. Your taste and the universe's timing are aligned.",
        'Comeback season energy: you already know all the choreo before the MV even drops.',
      ],
    },
    otherGeneratesMe: {
      overall: [
        "The day is quietly on your side, feeding you energy you didn't know you needed.",
        'Good day to receive — help, feedback, a favor. Let people show up for you.',
      ],
      love: [
        'Someone else is putting in the effort today. Let yourself be cared for instead of overthinking it.',
        'A small gesture from someone means more than usual today — notice it.',
      ],
      wealth: [
        'Good day for money to come to you — a refund, a gift, an unexpected bit of good luck.',
        'Opportunities may show up without you chasing them. Stay open.',
      ],
      health: [
        'Rest actually restores you today — a nap, a slow morning, an early night all count double.',
        "Your body is asking to be nourished, not pushed. Listen to it.",
      ],
      comeback: [
        'The algorithm is feeding you good content today — expect a fancam or teaser to find you first.',
        'Good day for a surprise comeback announcement to land in your feed. Stay logged on.',
      ],
    },
    iGenerateOther: {
      overall: [
        "You're the one doing the giving today — creatively, emotionally, socially. Budget your energy.",
        "Big output day. Just don't forget to refuel before you hit empty.",
      ],
      love: [
        "You're the one setting the romantic tone today — a message, a plan, an effort. It'll land well.",
        'Good day to reach out first. Your energy is the kind people want to be around.',
      ],
      wealth: [
        "You'll be the one spending energy (and maybe cash) today — on others, on projects, on ideas.",
        'Investing in something today — time, money, effort — pays off later. Just not today.',
      ],
      health: [
        "You'll burn energy fast today — a workout will hit different, for better or worse. Pace yourself.",
        'Good day for physical output, but hydrate more than you think you need to.',
      ],
      comeback: [
        "You're the one hyping the group chat today — stream, vote, post. Your energy carries the fandom.",
        'Big main-character energy for a fan project or stream party today. Rally the troops.',
      ],
    },
    otherOvercomesMe: {
      overall: [
        "Today's energy is pushing back a little. Friction isn't failure — it's just resistance training.",
        "Expect a small obstacle or two. Nothing you can't out-stubborn.",
      ],
      love: [
        'Miscommunication risk is a little higher today — reread that text before you send it.',
        "If something feels off in a relationship today, it's probably timing, not truth. Give it a beat.",
      ],
      wealth: [
        "Money stress might knock today. Don't make big financial calls under pressure.",
        'A tempting purchase will look extra tempting today. Sleep on it.',
      ],
      health: [
        "Low-grade fatigue or a small headache might sneak in. Don't power through it out of stubbornness.",
        "Your body might protest today's plans. A lighter schedule is the smart move.",
      ],
      comeback: [
        'Comeback anxiety is valid today — spoilers, leaks, or scheduling conflicts might test your patience.',
        'The wait for the next era feels extra long today. Rewatch an old era for comfort.',
      ],
    },
    iOvercomeOther: {
      overall: [
        'You have the upper hand today — decisions land, plans stick. Use the momentum.',
        "You're in control, but \"in control\" can tip into \"controlling.\" Loosen your grip once in a while.",
      ],
      love: [
        "You're holding the cards today — just don't play them too hard. Soft power wins.",
        'Your word carries extra weight in relationships today. Use it kindly.',
      ],
      wealth: [
        "You're in a strong negotiating position today — ask for the discount, ask for the raise.",
        "Your discipline pays off today. Small savings compound into something you'll notice later.",
      ],
      health: [
        "You have more stamina than usual today — just don't mistake that for invincibility.",
        "You can push limits today and get away with it. Once. Don't make it a habit.",
      ],
      comeback: [
        "You'll out-theory the fandom today — your prediction about the next concept is probably right.",
        "Today you're the reliable one explaining lore to newer fans. Wear the title proudly.",
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

/**
 * Picks a fortune line for a relation/category pair. `seedInput` should be
 * derived from the user's birth date + today's date so the same person sees
 * the same wording all day, and different wording tomorrow.
 */
export function getFortuneLine(lang, relation, category, seedInput) {
  const bank = (fortuneTemplates[lang] || fortuneTemplates.en)[relation][category];
  const seed = hashCode(`${seedInput}-${category}`);
  return bank[seed % bank.length];
}
