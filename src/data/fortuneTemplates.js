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
        "There's an unusual clarity to today — like static finally clearing off a signal. Use it: send the message, book the appointment, make the call you've been circling.",
        "You don't have to try very hard to be yourself today, and that's exactly the point. Let today be proof that the easy path is sometimes also the right one.",
        "Today rewards momentum over hesitation. If you've been waiting for a sign to just start, this is close enough — go with the version of the plan you already have.",
      ],
      love: [
        "Whatever rhythm you and the people you love have already settled into, today rewards more of the same — no grand gestures required. Consistency reads as devotion right now, so showing up in the small, ordinary ways matters more than anything dramatic.",
        "You're radiating a version of yourself that feels effortless and easy to be around, and people will notice. If there's a relationship that's felt slightly out of sync lately, today's steadiness is a good foundation to quietly rebuild on.",
        "You and the people you love are speaking the same emotional language today, so say the thing plainly instead of hinting at it. Directness reads as intimacy right now, not bluntness.",
        "This is a good day for low-key togetherness — a shared meal, a long call, doing nothing side by side. The bond doesn't need an occasion to deepen today.",
        "If you've been holding back an honest conversation, today's steadiness makes it land softer than you'd expect. Say it plainly and trust the relationship to hold the weight.",
      ],
      wealth: [
        "Nothing about your money situation needs fixing today — normal spending, normal saving, no dramatic interventions required. It's actually a good day to just check in on your budget calmly, since your judgment is unusually level-headed right now.",
        "Financially, today is \"steady as she goes,\" which is its own kind of good luck. Resist the urge to shake things up just for the sake of it — the safest move is also the smartest one today.",
        "Your relationship with money feels unusually uncomplicated today — no guilt spending, no anxious checking of your balance. Enjoy the calm; it's not always this easy.",
        "This is a good day to look at the bigger picture instead of today's transactions — a savings goal, a subscription you forgot to cancel, a plan for next month.",
        "Whatever financial habit you've been building lately, today reinforces that it's working. Keep the streak going rather than reinventing your approach.",
      ],
      health: [
        "Your body's rhythm and today's rhythm are in agreement, so ordinary routines — your usual sleep schedule, your usual meals, your usual walk — will feel especially good and especially effective. This is a day to reinforce good habits, not overhaul them.",
        "No red flags today, and that's worth appreciating rather than taking for granted. Keep doing what already works for you, and maybe use the extra bandwidth to plan (not necessarily start) something more ambitious for later.",
        "Your energy levels match the day's demands almost perfectly, so you shouldn't feel like you're dragging yourself through anything today. Enjoy feeling like your body is finally cooperating.",
        "A good day to check in with yourself honestly — not to fix anything, just to notice how you're actually doing. Chances are the answer is better than you expected.",
        "Whatever wellness routine you've been sticking to, today is proof it's paying off in small, steady ways. Keep showing up for it exactly as you have been.",
      ],
      comeback: [
        "If your bias dropped a comeback today, it would chart — your taste and the universe's timing are perfectly aligned right now. Trust your gut on anything comeback-related today, whether that's a prediction, a purchase, or a playlist pick.",
        "Comeback season energy: you already know all the choreo before the MV even drops, and today that instinct is sharper than usual. It's a great day to dive back into an old era for comfort or finally start that fan project you've been putting off.",
        "Your bias radar is unusually accurate today — trust whatever you're predicting about setlists, outfits, or surprise collabs. The vibes are, for once, backed by actual instinct.",
        "This is a good day to fully enjoy being a fan without any of the anxiety that usually comes with it — no comparison, no scarcity mindset, just pure enjoyment of the art.",
        "If you've been meaning to rewatch a debut stage or an old fancam for the nostalgia, today is exactly that kind of comfort-watching day. Let yourself be a little sentimental about it.",
      ],
    },
    otherGeneratesMe: {
      overall: [
        "The day is quietly on your side today, feeding you energy and resources you didn't even realize you needed. Let things come to you instead of chasing them — passive doesn't mean lazy, it means well-timed.",
        "This is a good day to receive: help, feedback, a favor, an unexpected assist. People are more willing to show up for you than usual, so don't wave it off out of habit — let yourself be supported for once.",
        "You don't have to earn today's good fortune — it's showing up regardless of how hard you're pushing. Let that be permission to ease off a little.",
        "People are unusually willing to meet you halfway today, whether that's covering for you, offering advice, or simply checking in. Say yes to the help instead of insisting you've got it.",
        "This is a day where slowing down actually gets you further, because the support you need is arriving on its own schedule, not yours. Trust the timing.",
      ],
      love: [
        "Someone else is putting in the effort today, and the healthiest thing you can do is let yourself be cared for instead of immediately overthinking it or trying to even the score. Not every gesture needs to be reciprocated on the spot.",
        "A small, maybe even ordinary gesture from someone means more than usual today — a check-in text, a thoughtful comment, someone remembering something small about you. Notice it, and let it land instead of brushing past it.",
        "Someone in your life is quietly taking care of the details today, whether or not you've noticed yet. A little gratitude, even unspoken, goes a long way right now.",
        "If you've felt like you're always the one giving in a relationship, today tips the balance the other way. Let it feel good instead of suspicious.",
        "This is a day where affection comes to you without you chasing it — a compliment, a thoughtful favor, someone remembering your preferences unprompted. Receive it fully.",
      ],
      wealth: [
        "Good day for money to come to you rather than the other way around — a refund, a gift, a bit of unexpected good luck, or simply an opportunity landing in your inbox unprompted. Stay open and don't overthink accepting help.",
        "Resources, connections, or opportunities may show up today without you having to chase them down. This is less about hustling and more about being available when good timing knocks — so keep your calendar a little flexible.",
        "A financial cushion — literal or emotional — is being built for you today by circumstances outside your control. Don't second-guess good news when it shows up.",
        "If someone offers to cover something today, from a coffee to a bigger expense, let them. Refusing generosity out of pride isn't necessary today.",
        "This is a good day to check in on subscriptions, rewards programs, or accounts you forgot about — today has a way of surfacing money you didn't know was there.",
      ],
      health: [
        "Rest actually restores you today in a way it might not on an ordinary day — a nap, a slow morning, an early night all count double right now. Your body is asking to be nourished, not pushed, and today it will actually listen.",
        "This is a good day to lean on comfort: a warm meal, a favorite show, letting someone else take care of the details for once. Recovery isn't laziness when your energy is genuinely being replenished like this.",
        "Someone else's care — a home-cooked meal, a ride somewhere, a reminder to drink water — does more for you today than anything you could manufacture on your own.",
        "Your body responds unusually well to rest today, so if you can build in a nap or an early bedtime, it'll pay off more than usual.",
        "This is a day to accept help with physical tasks instead of insisting on independence. Let someone carry something, literally or otherwise.",
      ],
      comeback: [
        "The algorithm is feeding you good content today — expect a fancam, a teaser, or a throwback edit to find you before you even go looking for it. Let yourself fall down the rabbit hole a little; it's a good day for it.",
        "Good day for a surprise comeback announcement or a long-awaited update to land right in your feed. Stay logged on a little longer than usual — today has main-character-finds-out-good-news energy.",
        "A friend in the fandom is going to send you exactly the content you needed today, without you even asking. Keep your notifications on.",
        "Good day for someone to gift you merch, a ticket, or a recommendation that turns into your new favorite thing. Say yes to the fandom generosity coming your way.",
        "The community is going to feel unusually warm and giving today — a mutual's fan edit, a stranger's kind comment, a group chat that just gets you. Let it in.",
      ],
    },
    iGenerateOther: {
      overall: [
        "You're the one doing the giving today — creatively, emotionally, socially — and it's a big-output kind of day. Just keep an eye on your energy levels, because generosity without a refill plan runs out faster than you expect.",
        "This is a day for putting things out into the world: a project, an idea, a favor, a message you've been sitting on. Momentum is genuinely on your side, but pace yourself so you don't hit empty before evening.",
        "You have more to give today than you might expect, so don't hold back out of habit. The people around you will notice and remember the effort.",
        "This is a day built for initiative — starting the project, sending the first message, offering the help before it's asked for. Your output today compounds.",
        "Watch your energy like a budget today: spend it deliberately on the things that matter, not on everything that asks for attention.",
      ],
      love: [
        "You're the one setting the tone in your relationships today — a message, a plan, an effort, an apology, whatever it is. Whatever you initiate is likely to land well, so if you've been waiting for the \"right moment\" to reach out, this is close enough.",
        "Good day to reach out first instead of waiting to be asked. Your energy right now is the kind that makes people want to be around you, so use it — it won't always feel this easy.",
        "You're the warmth in the room today, whether you planned to be or not. People will lean on that more than usual, so make sure you're also getting refilled somewhere.",
        "If a relationship has felt one-sided lately in the other direction, today is a natural moment to shift that — show up, initiate, be the one who plans it.",
        "Your affection today reads as generous rather than needy, so don't hold back saying the nice thing you're thinking. It'll land exactly as intended.",
      ],
      wealth: [
        "You'll be the one spending energy today — on others, on projects, on ideas, and maybe on your wallet too. That's not necessarily a bad thing; investing in something today, whether it's time, money, or effort, tends to pay off later, just not immediately.",
        "Generosity is the theme of today's financial energy, whether that's treating someone, funding a project, or putting money toward something that matters to you. Just keep a loose mental note of your limits so generosity doesn't tip into overextension.",
        "You're in a giving mood financially today, whether that's treating a friend or funding something you believe in. Just keep one eye on the bigger picture so generosity stays sustainable.",
        "This is a good day to invest in someone or something outside yourself — a gift, a donation, a group expense you don't mind covering. It'll feel worth it.",
        "Your financial energy today is about output, not intake — paying it forward, splitting the bill generously, tipping a little extra. Small gestures land bigger than usual.",
      ],
      health: [
        "You'll burn through energy fast today — a workout will hit different, for better or worse, and your body is primed for output rather than rest. Hydrate more than you think you need to and build in a real cool-down.",
        "Good day for physical output — training, dancing, a long walk, anything that gets your body moving and using the energy you clearly have to spare today. Just don't mistake \"I feel great\" for \"I'm invincible\" by the end of the day.",
        "You have energy to spare today, and physical activity will actually feel good rather than draining — a long walk, a dance practice, cleaning the whole apartment in one go.",
        "This is a good day to take care of someone else physically — cooking for them, walking them somewhere, checking in on how they're doing. It'll energize you more than tire you.",
        "Your body is asking to move today, not rest. Feed that instinct instead of second-guessing it, just don't run yourself completely empty by tonight.",
      ],
      comeback: [
        "You're the one hyping the group chat today — stream, vote, post, whatever the fandom needs, your energy is what carries it. People are quietly grateful for that kind of consistency, even if no one says it out loud.",
        "Big main-character energy for a fan project or stream party today. If you've been thinking about organizing something for your bias or group, today's the day your enthusiasm is contagious enough to actually rally people.",
        "You're the one explaining the concept photos to the group chat today, and everyone's grateful for it even if they don't say so directly.",
        "Good day to make something for the fandom — a thread, an edit, a playlist. Your creative energy today is the kind that gets shared around.",
        "You'll be the one organizing the group order, the watch party, or the birthday project today. It's a lot of effort, but it's effort you're clearly built for right now.",
      ],
    },
    otherOvercomesMe: {
      overall: [
        "Today's energy is pushing back a little, and that friction isn't a sign you're doing something wrong — it's closer to resistance training. Expect a small obstacle or two, but nothing you can't out-stubborn if you stay patient.",
        "Things might feel slightly harder than they should today, like you're moving against a current instead of with one. Don't force big decisions under this kind of pressure; smaller, steadier steps will get you through cleaner.",
        "Today has a slightly uphill feel to it, and pushing harder isn't the answer — pacing is. Save your energy for what actually matters instead of every small fire.",
        "Expect at least one plan to shift without warning today. It's annoying, not catastrophic, and you'll handle it better than you think you will.",
        "This isn't the day to prove a point or win an argument just to win it. Choosing your battles today will save you more energy than choosing to fight them.",
      ],
      love: [
        "Miscommunication risk is a little higher today, so it's worth rereading that text before you send it, or waiting a beat before reacting to someone else's. Tone gets lost easily right now, and most of it isn't personal.",
        "If something feels off in a relationship today, it's more likely to be timing than truth — try not to read too much into a slow reply or a short answer. Give it a beat before drawing conclusions.",
        "Patience is the theme today — with a slow reply, a canceled plan, a mood you don't fully understand. None of it is really about you.",
        "If today feels a little tense in a relationship, resist the urge to fix it immediately. Some friction just needs time, not a conversation right this second.",
        "You might feel slightly out of step with someone today, and that's okay — not every day needs to feel perfectly in sync. Let it pass without overanalyzing it.",
      ],
      wealth: [
        "Money stress might knock today, whether that's a bill you forgot about or a price tag that stings more than usual. Don't make big financial calls under this kind of pressure; sleep on anything that isn't urgent.",
        "A tempting purchase will look extra tempting today, precisely because your judgment is a little clouded by today's friction. If it's not something you were already planning to buy, give it 24 hours before deciding.",
        "An expense you didn't plan for might show up today. Annoying, but manageable — resist the urge to spiral about it or make a bigger financial decision in response.",
        "Your usual money instincts feel slightly off today, so this isn't the day to trust a gut feeling about a purchase or investment. Wait for a clearer day.",
        "If a bill or a price tag stings more than it should today, that's the day talking, not your actual financial situation. Don't catastrophize it.",
      ],
      health: [
        "Low-grade fatigue or a small headache might sneak in today, and the instinct to push through it out of stubbornness is exactly the instinct to resist. Your body is asking for a lighter day, not a harder one.",
        "Your body might quietly protest today's plans — a tight schedule, a skipped meal, not enough sleep will all cost you more than usual. Scale back where you can and treat rest as productive, not optional.",
        "Your energy might dip earlier than usual today, and forcing your way through it will cost you tomorrow. Build in the rest before you're forced to take it.",
        "Small annoyances — a stiff neck, a restless night, a headache that won't quite go away — are more likely today. None of it is serious, just inconvenient.",
        "This is a day to lower the bar on what counts as a productive day. Getting through it gently is enough; you don't need to optimize anything.",
      ],
      comeback: [
        "Comeback anxiety is valid today — spoilers, leaks, or scheduling conflicts might test your patience more than they normally would. It's a completely fair day to log off for a while if the timeline is stressing you out.",
        "The wait for the next era feels extra long today, and nothing about the timeline seems to be moving the way you want. Rewatch an old era for comfort instead of doom-scrolling for updates that aren't coming yet.",
        "Delays, vague teasers, or confusing announcements might test your patience today. The fandom timeline is not moving on your schedule, and that's just today's mood.",
        "You might feel a little disconnected from the hype today, like everyone else is more excited than you are. That's fine — you're allowed an off day as a fan too.",
        "If a comment section or a fan war is stressing you out today, log off rather than engaging. Today's discourse isn't worth the energy it's asking for.",
      ],
    },
    iOvercomeOther: {
      overall: [
        "You have the upper hand today — decisions land, plans stick, and people are more likely to defer to your read on things. Use the momentum deliberately, because this kind of clarity doesn't show up on command every day.",
        "You're in control today, but \"in control\" can quietly tip into \"controlling\" if you're not paying attention. Loosen your grip in at least one place, even if everything in you wants to manage every detail.",
        "You're operating from a position of strength today — use it to move something forward, not to settle a score. The advantage fades if you spend it on the wrong thing.",
        "People are more likely to follow your lead today than usual, so be intentional about where you're leading them. Influence like this doesn't show up every day.",
        "This is a good day to make the call you've been putting off, precisely because your judgment is sharper and more assertive than usual right now.",
      ],
      love: [
        "You're holding the cards today — your opinion carries weight, your plans get followed, your mood sets the tone. Just don't play that hand too hard; soft power wins more often than force does in relationships.",
        "Your word carries extra weight with the people close to you today, so use it kindly and deliberately. A little influence goes a long way, and how you spend it today will be remembered longer than usual.",
        "You're the more confident one in the room today, and that confidence is magnetic rather than overpowering — as long as you leave space for the other person too.",
        "If a relationship needs someone to take the lead today, that someone is you. Just check in occasionally to make sure you're leading together, not alone.",
        "Your presence carries extra weight in someone's day today, even in small interactions. Use that awareness kindly rather than carelessly.",
      ],
      wealth: [
        "You're in a strong negotiating position today, whether that's asking for a discount, asking for a raise, or simply pushing back on a price that felt off. People are more likely to say yes than usual, so it's worth actually asking.",
        "Your discipline pays off today in a way that's easy to overlook in the moment — small savings, a boundary you held, a purchase you talked yourself out of. It'll compound into something you notice later, even if it feels unremarkable right now.",
        "You'll come out ahead in most financial interactions today — a negotiation, a return, a split bill. Advocate for yourself; today rewards it.",
        "Your financial judgment is sharper than usual today, so trust it over anyone else's opinion about what you should do with your money.",
        "If you've been putting off asking for something — a refund, a better rate, fair payment for your work — today is unusually receptive to that ask.",
      ],
      health: [
        "You have more stamina than usual today, and it's tempting to treat that as proof you're invincible. Push your limits a little if you want to, just don't mistake today's extra energy for a permanent upgrade.",
        "You can get away with pushing harder today — training longer, staying up later, taking on more than usual. Just do it once, consciously, rather than making it the new baseline your body has to keep up with.",
        "Your body is more resilient than usual today, handling stress and exertion better than it typically would. Take advantage of it, but don't assume it'll last forever.",
        "You have the discipline today to say no to something that doesn't serve you — an extra drink, a late night, a skipped workout. Use it.",
        "Today favors decisive health choices — starting the routine, ending the habit, making the appointment. Your resolve is stronger than it usually is.",
      ],
      comeback: [
        "You'll out-theory the fandom today — your read on the next concept, the hidden lore, or the comeback timeline is probably more accurate than you're giving yourself credit for. Trust the prediction and say it out loud.",
        "Today you're the reliable one explaining lore to newer fans, settling debates, and generally being the fandom's unofficial source of truth. Wear the title proudly; you've earned the credibility today more than most days.",
        "You're the one setting the narrative in the fandom today — your take on a comeback or controversy is the one people end up agreeing with.",
        "Your organizing energy is unusually strong today — streaming parties, voting drives, birthday projects all go more smoothly with you in charge.",
        "If there's fandom misinformation going around, today you have both the patience and the receipts to correct it clearly and calmly.",
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
