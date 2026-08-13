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
        "Your energy and today's energy are running on the exact same frequency — nothing to fight, nothing to force. Whatever feels most natural to you right now is probably the right move, so trust the instinct instead of second-guessing it.",
        "It's a rare high-clarity day where what you feel lines up with what's actually true. Decisions you make today will hold up later, so if something's been sitting on your mind, today is a good day to finally act on it.",
      ],
      love: [
        "Whatever rhythm you and the people you love have already settled into, today rewards more of the same — no grand gestures required. Consistency reads as devotion right now, so showing up in the small, ordinary ways matters more than anything dramatic.",
        "You're radiating a version of yourself that feels effortless and easy to be around, and people will notice. If there's a relationship that's felt slightly out of sync lately, today's steadiness is a good foundation to quietly rebuild on.",
      ],
      wealth: [
        "Nothing about your money situation needs fixing today — normal spending, normal saving, no dramatic interventions required. It's actually a good day to just check in on your budget calmly, since your judgment is unusually level-headed right now.",
        "Financially, today is \"steady as she goes,\" which is its own kind of good luck. Resist the urge to shake things up just for the sake of it — the safest move is also the smartest one today.",
      ],
      health: [
        "Your body's rhythm and today's rhythm are in agreement, so ordinary routines — your usual sleep schedule, your usual meals, your usual walk — will feel especially good and especially effective. This is a day to reinforce good habits, not overhaul them.",
        "No red flags today, and that's worth appreciating rather than taking for granted. Keep doing what already works for you, and maybe use the extra bandwidth to plan (not necessarily start) something more ambitious for later.",
      ],
      comeback: [
        "If your bias dropped a comeback today, it would chart — your taste and the universe's timing are perfectly aligned right now. Trust your gut on anything comeback-related today, whether that's a prediction, a purchase, or a playlist pick.",
        "Comeback season energy: you already know all the choreo before the MV even drops, and today that instinct is sharper than usual. It's a great day to dive back into an old era for comfort or finally start that fan project you've been putting off.",
      ],
    },
    otherGeneratesMe: {
      overall: [
        "The day is quietly on your side today, feeding you energy and resources you didn't even realize you needed. Let things come to you instead of chasing them — passive doesn't mean lazy, it means well-timed.",
        "This is a good day to receive: help, feedback, a favor, an unexpected assist. People are more willing to show up for you than usual, so don't wave it off out of habit — let yourself be supported for once.",
      ],
      love: [
        "Someone else is putting in the effort today, and the healthiest thing you can do is let yourself be cared for instead of immediately overthinking it or trying to even the score. Not every gesture needs to be reciprocated on the spot.",
        "A small, maybe even ordinary gesture from someone means more than usual today — a check-in text, a thoughtful comment, someone remembering something small about you. Notice it, and let it land instead of brushing past it.",
      ],
      wealth: [
        "Good day for money to come to you rather than the other way around — a refund, a gift, a bit of unexpected good luck, or simply an opportunity landing in your inbox unprompted. Stay open and don't overthink accepting help.",
        "Resources, connections, or opportunities may show up today without you having to chase them down. This is less about hustling and more about being available when good timing knocks — so keep your calendar a little flexible.",
      ],
      health: [
        "Rest actually restores you today in a way it might not on an ordinary day — a nap, a slow morning, an early night all count double right now. Your body is asking to be nourished, not pushed, and today it will actually listen.",
        "This is a good day to lean on comfort: a warm meal, a favorite show, letting someone else take care of the details for once. Recovery isn't laziness when your energy is genuinely being replenished like this.",
      ],
      comeback: [
        "The algorithm is feeding you good content today — expect a fancam, a teaser, or a throwback edit to find you before you even go looking for it. Let yourself fall down the rabbit hole a little; it's a good day for it.",
        "Good day for a surprise comeback announcement or a long-awaited update to land right in your feed. Stay logged on a little longer than usual — today has main-character-finds-out-good-news energy.",
      ],
    },
    iGenerateOther: {
      overall: [
        "You're the one doing the giving today — creatively, emotionally, socially — and it's a big-output kind of day. Just keep an eye on your energy levels, because generosity without a refill plan runs out faster than you expect.",
        "This is a day for putting things out into the world: a project, an idea, a favor, a message you've been sitting on. Momentum is genuinely on your side, but pace yourself so you don't hit empty before evening.",
      ],
      love: [
        "You're the one setting the tone in your relationships today — a message, a plan, an effort, an apology, whatever it is. Whatever you initiate is likely to land well, so if you've been waiting for the \"right moment\" to reach out, this is close enough.",
        "Good day to reach out first instead of waiting to be asked. Your energy right now is the kind that makes people want to be around you, so use it — it won't always feel this easy.",
      ],
      wealth: [
        "You'll be the one spending energy today — on others, on projects, on ideas, and maybe on your wallet too. That's not necessarily a bad thing; investing in something today, whether it's time, money, or effort, tends to pay off later, just not immediately.",
        "Generosity is the theme of today's financial energy, whether that's treating someone, funding a project, or putting money toward something that matters to you. Just keep a loose mental note of your limits so generosity doesn't tip into overextension.",
      ],
      health: [
        "You'll burn through energy fast today — a workout will hit different, for better or worse, and your body is primed for output rather than rest. Hydrate more than you think you need to and build in a real cool-down.",
        "Good day for physical output — training, dancing, a long walk, anything that gets your body moving and using the energy you clearly have to spare today. Just don't mistake \"I feel great\" for \"I'm invincible\" by the end of the day.",
      ],
      comeback: [
        "You're the one hyping the group chat today — stream, vote, post, whatever the fandom needs, your energy is what carries it. People are quietly grateful for that kind of consistency, even if no one says it out loud.",
        "Big main-character energy for a fan project or stream party today. If you've been thinking about organizing something for your bias or group, today's the day your enthusiasm is contagious enough to actually rally people.",
      ],
    },
    otherOvercomesMe: {
      overall: [
        "Today's energy is pushing back a little, and that friction isn't a sign you're doing something wrong — it's closer to resistance training. Expect a small obstacle or two, but nothing you can't out-stubborn if you stay patient.",
        "Things might feel slightly harder than they should today, like you're moving against a current instead of with one. Don't force big decisions under this kind of pressure; smaller, steadier steps will get you through cleaner.",
      ],
      love: [
        "Miscommunication risk is a little higher today, so it's worth rereading that text before you send it, or waiting a beat before reacting to someone else's. Tone gets lost easily right now, and most of it isn't personal.",
        "If something feels off in a relationship today, it's more likely to be timing than truth — try not to read too much into a slow reply or a short answer. Give it a beat before drawing conclusions.",
      ],
      wealth: [
        "Money stress might knock today, whether that's a bill you forgot about or a price tag that stings more than usual. Don't make big financial calls under this kind of pressure; sleep on anything that isn't urgent.",
        "A tempting purchase will look extra tempting today, precisely because your judgment is a little clouded by today's friction. If it's not something you were already planning to buy, give it 24 hours before deciding.",
      ],
      health: [
        "Low-grade fatigue or a small headache might sneak in today, and the instinct to push through it out of stubbornness is exactly the instinct to resist. Your body is asking for a lighter day, not a harder one.",
        "Your body might quietly protest today's plans — a tight schedule, a skipped meal, not enough sleep will all cost you more than usual. Scale back where you can and treat rest as productive, not optional.",
      ],
      comeback: [
        "Comeback anxiety is valid today — spoilers, leaks, or scheduling conflicts might test your patience more than they normally would. It's a completely fair day to log off for a while if the timeline is stressing you out.",
        "The wait for the next era feels extra long today, and nothing about the timeline seems to be moving the way you want. Rewatch an old era for comfort instead of doom-scrolling for updates that aren't coming yet.",
      ],
    },
    iOvercomeOther: {
      overall: [
        "You have the upper hand today — decisions land, plans stick, and people are more likely to defer to your read on things. Use the momentum deliberately, because this kind of clarity doesn't show up on command every day.",
        "You're in control today, but \"in control\" can quietly tip into \"controlling\" if you're not paying attention. Loosen your grip in at least one place, even if everything in you wants to manage every detail.",
      ],
      love: [
        "You're holding the cards today — your opinion carries weight, your plans get followed, your mood sets the tone. Just don't play that hand too hard; soft power wins more often than force does in relationships.",
        "Your word carries extra weight with the people close to you today, so use it kindly and deliberately. A little influence goes a long way, and how you spend it today will be remembered longer than usual.",
      ],
      wealth: [
        "You're in a strong negotiating position today, whether that's asking for a discount, asking for a raise, or simply pushing back on a price that felt off. People are more likely to say yes than usual, so it's worth actually asking.",
        "Your discipline pays off today in a way that's easy to overlook in the moment — small savings, a boundary you held, a purchase you talked yourself out of. It'll compound into something you notice later, even if it feels unremarkable right now.",
      ],
      health: [
        "You have more stamina than usual today, and it's tempting to treat that as proof you're invincible. Push your limits a little if you want to, just don't mistake today's extra energy for a permanent upgrade.",
        "You can get away with pushing harder today — training longer, staying up later, taking on more than usual. Just do it once, consciously, rather than making it the new baseline your body has to keep up with.",
      ],
      comeback: [
        "You'll out-theory the fandom today — your read on the next concept, the hidden lore, or the comeback timeline is probably more accurate than you're giving yourself credit for. Trust the prediction and say it out loud.",
        "Today you're the reliable one explaining lore to newer fans, settling debates, and generally being the fandom's unofficial source of truth. Wear the title proudly; you've earned the credibility today more than most days.",
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
