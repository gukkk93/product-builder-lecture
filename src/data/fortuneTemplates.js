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
      caution: {
        overall: "Even on an easy day like this, it's worth double-checking details before finalizing anything — smooth days can make you skip the fine print.",
        love: "Things feel easy right now, so there's no need to rush a conversation or a confession — let it happen at its own pace instead of forcing it today.",
        wealth: "Because spending feels easy and guilt-free today, it's worth pausing before any bigger purchase — comfort can blur the line between a treat and overspending.",
        health: "Feeling good today doesn't mean you can skip the basics — keep your usual sleep and meals steady instead of overextending just because you feel fine.",
        comeback: "Hype is running high today, so it's worth checking a rumor or price twice before acting on it — excitement makes things feel more urgent than they are.",
      },
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
      caution: {
        overall: "Good things are landing on their own today, but it's still worth reading the fine print on anything you're offered — easy doesn't always mean risk-free.",
        love: "Being cared for today feels good, but there's no need to rush returning the favor or over-explaining your feelings — let the ease stay easy.",
        wealth: "If money or a good deal comes your way today, it's still worth checking the details before committing — a gift can come with strings you didn't expect.",
        health: "Comfort and rest feel good today, but don't let a restful mood turn into skipping something your body actually needs, like water or movement.",
        comeback: "If merch, a ticket, or a deal falls into your lap today, it's still worth double-checking authenticity or seller reviews before paying.",
      },
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
      caution: {
        overall: "You're in a giving mood today, so it's worth pausing before committing time or money you can't easily take back — enthusiasm can outrun your actual bandwidth.",
        love: "Your instinct to give a lot today is genuine, but it's worth pacing your words and effort instead of pouring everything out at once — some things land better in smaller doses.",
        wealth: "Generosity is the theme today, so set a rough limit before you start spending on others — a kind impulse can quietly turn into overspending.",
        health: "You'll want to push your body harder for someone or something today — just don't skip the actual rest you need to keep up the pace tomorrow.",
        comeback: "Before buying extra merch, tickets, or gifting something to support your bias today, it's worth checking your budget first — enthusiasm spends faster than plans do.",
      },
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
      caution: {
        overall: "Today has some friction built in, so it's not the day for big, hard-to-reverse decisions — sleep on anything that isn't urgent.",
        love: "If a conversation feels tense today, it's worth waiting for a calmer moment rather than trying to resolve everything in one sitting — timing matters more than usual.",
        wealth: "Financial decisions made under today's pressure are more likely to be regretted later — avoid big purchases or commitments until the friction eases.",
        health: "Your body is more likely to protest today, so skip the urge to push through fatigue — rest now costs less than pushing costs later.",
        comeback: "Rumors and unclear info spread easily on a day like today — it's worth waiting for an official announcement before reacting or spending based on speculation.",
      },
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
      caution: {
        overall: "Confidence is running high today, which is great for decisions, but it's worth double-checking the details on anything big before you commit — certainty isn't the same as being right.",
        love: "Your opinion carries extra weight today, so it's worth pausing before saying something bluntly — a lighter touch lands just as clearly.",
        wealth: "You're likely to win negotiations today, but it's still worth reading contracts or terms carefully before signing — confidence shouldn't skip the fine print.",
        health: "You can push your limits today, but it's worth stopping at a reasonable point — today's extra stamina isn't a permanent upgrade.",
        comeback: "Your read on fandom debates or predictions is sharp today, but it's still worth fact-checking before posting something as certain — confidence can outpace accuracy.",
      },
    },
  },
  ko: {
    same: {
      overall: [
        "오늘은 내 기운과 하루의 기운이 완전히 같은 방향으로 흘러요. 억지로 애쓸 필요 없이, 지금 자연스럽게 하고 싶은 걸 하면 그게 정답이에요.",
        "머릿속이 유난히 맑은 날이에요. 오늘 내린 결정은 나중에도 흔들리지 않을 확률이 높으니, 미뤄뒀던 일이 있다면 오늘 움직여보세요.",
        "안개가 걷힌 듯 또렷한 하루예요. 계속 미루기만 했던 그 연락, 그 결정, 오늘 해보세요.",
        "오늘은 애써 나답지 않은 모습을 보일 필요가 없어요. 편한 대로 있어도 다 잘 풀리는 날이에요.",
        "망설이기보다 일단 움직이는 게 이득인 하루예요. 이미 세워둔 계획이 있다면 그대로 밀고 나가세요.",
      ],
      love: [
        "가까운 사람들과 이미 맞춰온 리듬 그대로 가면 돼요 — 특별한 이벤트 없이도 오늘은 잘 통해요. 사소하지만 꾸준한 표현이 오늘은 더 크게 와닿아요.",
        "애쓰지 않아도 자연스럽게 매력이 흘러나오는 날이에요. 요즘 살짝 어긋났던 관계가 있다면, 오늘의 편안함이 다시 가까워질 좋은 발판이 돼요.",
        "오늘은 돌려 말하지 않고 솔직하게 말해도 다정하게 들리는 날이에요. 마음에 있던 말, 그냥 해보세요.",
        "같이 있는 것만으로 충분한 하루예요. 거창한 이벤트보다 편하게 함께 시간 보내는 게 오늘의 정답이에요.",
        "그동안 참았던 진심 어린 이야기가 있다면, 오늘의 편안한 기운이 그 말을 더 부드럽게 전해줄 거예요.",
      ],
      wealth: [
        "돈 문제에서 유난히 머리가 복잡하지 않은 날이에요. 죄책감 없는 소비, 불안하지 않은 잔고 확인 — 오늘은 그냥 편하게 흘러가요.",
        "'무리 없이 순항 중'이라는 말이 딱 맞는 하루예요. 괜히 뭔가 바꾸려 하지 말고, 지금 하던 대로 가는 게 제일 나아요.",
        "돈과의 관계가 유난히 단순하게 느껴지는 날이에요. 이 여유, 자주 오는 게 아니니 즐기세요.",
        "오늘 하루 소비 내역보다 큰 그림을 보기 좋은 날이에요 — 저축 목표나 깜빡했던 구독 서비스 같은 거요.",
        "요즘 만들어가던 돈 습관이 잘 자리잡고 있다는 신호가 오는 날이에요. 지금 흐름 그대로 이어가세요.",
      ],
      health: [
        "몸의 리듬과 오늘의 기운이 딱 맞아떨어져요 — 평소 자던 시간, 평소 먹던 만큼, 평소 걷던 만큼이 오늘따라 유난히 잘 맞아요.",
        "특별히 조심할 건 없는 날이에요. 지금 하던 루틴 잘 지키면서, 남는 에너지로는 다음에 시작할 걸 미리 계획해보세요.",
        "몸이 오늘만큼은 순순히 협조해주는 날이에요. 그냥 그 느낌을 즐기세요.",
        "무리하지 않고도 스스로를 잘 챙기고 있는지 솔직하게 체크해보기 좋은 날이에요. 생각보다 잘하고 있을 확률이 높아요.",
        "요즘 지켜온 건강 습관이 조용히 쌓이고 있다는 걸 느끼게 되는 날이에요. 지금처럼만 계속 가세요.",
      ],
      comeback: [
        "오늘 최애가 컴백해도 바로 차트 올킬 각이에요 — 내 취향과 우주의 타이밍이 딱 맞아떨어지는 날이거든요. 예감, 소비, 플레이리스트 뭐든 오늘은 감을 믿어보세요.",
        "컴백 시즌 같은 기운이 흐르는 날이에요 — 뮤비 나오기도 전에 안무 다 외운 그 느낌으로, 오늘은 감이 유난히 잘 맞아요.",
        "최애 레이더가 유난히 정확한 날이에요 — 세트리스트든, 의상이든, 깜짝 콜라보든 오늘 예감은 믿어도 좋아요.",
        "비교도 불안도 없이 순수하게 덕질을 즐기기 좋은 날이에요. 오늘만큼은 그냥 좋아하는 마음 그대로 즐기세요.",
        "데뷔 무대나 옛날 직캠 다시 보고 싶어졌다면, 오늘이 딱 그런 추억팔이 하기 좋은 날이에요. 마음껏 감성에 젖어보세요.",
      ],
      caution: {
        overall: "이렇게 수월한 날에도 뭔가 확정하기 전에 세부사항은 한 번 더 체크하는 게 좋아요 — 순조로운 날일수록 작은 디테일을 놓치기 쉬워요.",
        love: "지금은 마음이 편하니까, 고백이나 진지한 대화를 굳이 서두를 필요 없어요 — 오늘 억지로 밀어붙이기보다 자연스러운 타이밍을 기다려보세요.",
        wealth: "소비가 죄책감 없이 편하게 느껴지는 날이라, 큰 지출 전에는 한 번 멈춰서 생각해보세요 — 편안함이 과소비랑 구분이 잘 안 될 수 있어요.",
        health: "컨디션이 좋다고 기본을 건너뛰면 안 돼요 — 괜찮다고 느껴져도 평소 수면과 식사는 그대로 챙기세요.",
        comeback: "오늘은 기대감이 유난히 높은 날이라, 루머나 가격은 행동하기 전에 한 번 더 확인하는 게 좋아요 — 설렘이 실제보다 더 급하게 느껴지게 만들거든요.",
      },
    },
    otherGeneratesMe: {
      overall: [
        "오늘 하루는 은근히 내 편이에요 — 필요한 줄도 몰랐던 힘과 자원이 알아서 채워지는 날이거든요. 쫓아다니지 말고 그냥 받아들이세요.",
        "받는 게 자연스러운 날이에요 — 도움이든, 피드백이든, 호의든요. 평소보다 사람들이 더 잘 도와주려 하니, 습관처럼 사양하지 말고 받아들이세요.",
        "오늘은 천천히 가는 게 오히려 더 멀리 가는 날이에요. 필요한 도움이 내 스케줄이 아니라 자기 타이밍에 알아서 찾아오거든요. 믿고 기다려보세요.",
        "억지로 애쓰지 않아도 좋은 일이 알아서 굴러들어오는 날이에요. 그 여유, 그냥 누리세요.",
        "사람들이 평소보다 더 다정하게 챙겨주는 날이에요. 확인하러 온 연락, 그냥 편하게 받아들이세요.",
      ],
      love: [
        "오늘은 상대가 애쓰는 날이에요. 자꾸 곱씹거나 뭘로 갚아야 하나 계산하지 말고, 그냥 편하게 사랑받으세요.",
        "별거 아닌 듯한 다정함이 오늘따라 유난히 크게 느껴져요 — 안부 문자든, 무심한 배려든요. 그냥 알아차려주세요.",
        "누군가 조용히 내 곁을 챙겨주고 있는 날이에요, 눈치 못 챘더라도요. 작은 고마움이라도 표현하면 오늘은 더 따뜻해져요.",
        "그동안 늘 주기만 하는 쪽이었다면, 오늘은 균형이 반대로 기우는 날이에요. 불편하게 느끼지 말고 그냥 좋게 받아들이세요.",
        "오늘은 애정이 먼저 나를 찾아오는 날이에요 — 칭찬이든, 다정한 배려든, 나를 기억해준 취향이든요. 온전히 받아들이세요.",
      ],
      wealth: [
        "돈이 나를 쫓지 않아도 알아서 찾아오는 날이에요 — 환급이든, 선물이든, 예상치 못한 행운이든요. 마음 편히 받아들이세요.",
        "자원이나 기회, 인연이 애쓰지 않아도 알아서 다가오는 날이에요. 오늘은 열심히 뛰기보다 열려 있는 게 더 중요해요.",
        "재정적인 여유 — 실질적이든 심리적이든 — 가 오늘 나도 모르게 조금씩 쌓이고 있어요. 좋은 소식이 오면 의심하지 말고 그냥 받아들이세요.",
        "누가 오늘 커피값이든 큰 금액이든 대신 내주겠다고 하면, 그냥 감사히 받으세요. 굳이 자존심 세울 필요 없는 날이에요.",
        "잊고 있던 구독이나 적립금, 계좌를 확인해보기 좋은 날이에요. 오늘은 몰랐던 돈이 슬쩍 나타나기도 해요.",
      ],
      health: [
        "쉬는 게 진짜로 회복이 되는 날이에요 — 낮잠이든, 늘어지게 자는 아침이든, 일찍 자는 밤이든 평소보다 두 배로 효과 있어요. 몸이 채워달라고 하는 거니 들어주세요.",
        "따뜻한 한 끼, 좋아하는 프로그램, 잠깐 남에게 맡기는 것 — 오늘은 이런 여유가 진짜 도움이 되는 날이에요.",
        "누군가의 배려 — 집밥이든, 태워다주는 거든, 물 마시라는 잔소리든 — 가 오늘은 내가 혼자 챙기는 것보다 더 크게 작용해요.",
        "몸이 유난히 휴식에 잘 반응하는 날이에요. 낮잠이나 일찍 잠드는 게 평소보다 효과가 좋아요.",
        "오늘은 혼자 다 하려 하지 말고 도움을 받아들이기 좋은 날이에요. 누가 뭔가 대신 들어준다면, 그냥 맡기세요.",
      ],
      comeback: [
        "알고리즘이 오늘 나한테 유난히 잘해주는 날이에요 — 찾지도 않았는데 직캠이나 티저가 알아서 떠요. 오늘은 그 토끼굴에 좀 빠져도 괜찮아요.",
        "깜짝 컴백 소식이나 오래 기다린 업데이트가 알아서 피드에 뜨는 날이에요. 평소보다 조금 더 폰을 붙잡고 있어도 좋아요.",
        "덕메가 오늘 딱 필요했던 그 콘텐츠를 먼저 보내주는 날이에요. 알림 꺼두지 마세요.",
        "누가 굿즈든 티켓이든 취향 저격 추천이든 선물해주는 날이에요. 팬덤의 다정함을 그냥 받아들이세요.",
        "커뮤니티 전체가 유난히 따뜻하게 느껴지는 날이에요 — 뮤튜얼의 편집물, 낯선 사람의 다정한 댓글, 마음 잘 맞는 단톡방까지요. 그냥 그 안에 머무르세요.",
      ],
      caution: {
        overall: "좋은 일이 알아서 굴러들어오는 날이지만, 뭔가 제안받으면 세부 조건은 그래도 확인해보세요 — 쉽게 온다고 다 안전한 건 아니에요.",
        love: "오늘 받는 배려가 기분 좋더라도, 굳이 바로 갚으려 하거나 마음을 다 설명하려 애쓸 필요는 없어요 — 편안함은 편안한 채로 둬도 괜찮아요.",
        wealth: "돈이나 좋은 조건이 오늘 알아서 찾아와도, 결정하기 전에 세부 내용은 확인해보세요 — 선물처럼 보여도 예상 못한 조건이 붙어 있을 수 있어요.",
        health: "편안하고 쉬기 좋은 날이지만, 그 기분에 취해서 물 마시기나 몸 움직이기처럼 꼭 필요한 걸 건너뛰지는 마세요.",
        comeback: "오늘 굿즈나 티켓, 좋은 조건의 딜이 갑자기 나타나도, 결제 전에 판매자 후기나 진위 여부는 확인해보세요.",
      },
    },
    iGenerateOther: {
      overall: [
        "오늘은 내가 주는 쪽이에요 — 아이디어든, 감정이든, 관계든요. 출력량이 많은 날이니 에너지 관리만 잘하세요, 충전 계획 없이 베풀면 금방 방전돼요.",
        "뭔가를 세상에 내놓기 좋은 날이에요 — 미뤄둔 프로젝트든, 아이디어든, 계속 참았던 연락이든요. 흐름은 확실히 내 편이니, 저녁까지 힘 남겨서 페이스 조절하세요.",
        "오늘 남들보다 더 많이 베풀 여력이 있으니, 습관처럼 아끼지 마세요. 주변 사람들이 그 노력을 알아채고 오래 기억할 거예요.",
        "먼저 시작하기 좋은 날이에요 — 프로젝트든, 메시지든, 부탁받기 전에 나서는 도움이든요. 오늘의 실행력은 계속 쌓여요.",
        "오늘은 예산 쓰듯 에너지를 신경 써서 써야 하는 날이에요. 정말 중요한 곳에 집중하고, 관심 끄는 모든 곳에 다 쏟지 마세요.",
      ],
      love: [
        "오늘은 관계의 분위기를 내가 정하는 날이에요 — 메시지든, 계획이든, 사과든요. 먼저 다가가면 대체로 좋은 반응이 돌아오니, '적절한 타이밍'만 기다렸다면 지금이 딱이에요.",
        "먼저 연락하기 좋은 날이에요, 연락 오길 기다리지 말고요. 지금 내 에너지는 사람들이 자연스럽게 끌리는 종류니까, 이 기회를 잘 써보세요.",
        "오늘은 방 안의 온기가 나예요, 의도하지 않았더라도요. 평소보다 사람들이 더 기대게 될 테니, 나도 어딘가에서 채워지고 있는지 챙기세요.",
        "요즘 관계에서 계속 받기만 했다면, 오늘이 자연스럽게 방향을 바꿀 타이밍이에요 — 먼저 다가가고, 먼저 제안하고, 먼저 계획해보세요.",
        "오늘의 다정함은 궁색하기보다 여유 있게 느껴져요. 마음에 있던 좋은 말, 참지 말고 해보세요. 딱 원하는 만큼 잘 전해질 거예요.",
      ],
      wealth: [
        "오늘은 내가 에너지(그리고 어쩌면 돈도) 쓰는 쪽이에요 — 남을 위해서든, 프로젝트를 위해서든요. 나쁜 게 아니에요, 시간이든 돈이든 노력이든 오늘 투자한 건 나중에 돌아오니까요, 오늘 당장은 아니어도요.",
        "오늘 재정적인 기운은 베풂이에요 — 누굴 대접하든, 프로젝트에 후원하든, 소중한 가치에 돈 쓰든요. 다만 전체 그림을 놓치지 않게, 베풂이 과함으로 넘어가지 않도록 신경 쓰세요.",
        "오늘은 돈으로 마음을 표현하고 싶은 기분이 드는 날이에요 — 친구 대접하든, 믿는 곳에 후원하든요. 그래도 큰 그림은 놓치지 마세요.",
        "나 아닌 다른 사람이나 것에 투자하기 좋은 날이에요 — 선물이든, 기부든, 굳이 안 내도 될 돈 내는 거든요. 그만한 가치가 있을 거예요.",
        "오늘 재정적인 기운은 받기보다 베풂에 가까워요 — 대신 계산하기, 통 크게 쏘기, 팁 조금 더 주기요. 작은 제스처가 평소보다 크게 다가가요.",
      ],
      health: [
        "오늘은 에너지가 빨리 소진되는 날이에요 — 운동도 평소랑 다르게 느껴질 거예요, 좋은 쪽이든 힘든 쪽이든요. 생각보다 물 더 마시고, 제대로 쿨다운하세요.",
        "몸을 쓰기 좋은 날이에요 — 운동, 춤, 오래 걷기, 뭐든 남는 에너지를 써버리는 활동이요. 다만 '컨디션 최고'를 '무적'으로 착각하지는 마세요.",
        "오늘은 남는 에너지가 있고, 몸을 움직이는 게 힘들기보다 오히려 개운하게 느껴지는 날이에요 — 오래 걷기, 연습, 대청소 뭐든요.",
        "오늘은 나 말고 다른 사람을 몸으로 챙기기 좋은 날이에요 — 요리해주기, 데려다주기, 안부 확인하기요. 지치기보다 오히려 에너지가 생길 거예요.",
        "몸이 오늘 쉬기보다 움직이고 싶어해요. 그 신호, 억지로 무시하지 말고 따라가 보세요.",
      ],
      comeback: [
        "오늘은 내가 단톡방 분위기를 살리는 사람이에요 — 스밍이든, 투표든, 홍보든 팬덤이 필요로 하는 거요. 오늘 내 에너지가 다 이끌고 가는 날이에요. 말은 안 해도 다들 고마워하고 있어요.",
        "팬 프로젝트나 같이 보는 모임을 준비하기 좋은 날이에요. 최애나 그룹 위해 뭔가 기획해보고 싶었다면, 오늘 그 열정이 사람들을 진짜로 움직여요.",
        "오늘은 내가 단톡방에 컨셉 사진 해석해주는 사람이에요, 다들 티는 안 내도 고마워하고 있어요.",
        "팬덤을 위해 뭔가 만들기 좋은 날이에요 — 트윗 스레드든, 편집물이든, 플레이리스트든요. 오늘의 창작 에너지는 널리 퍼져나가는 종류예요.",
        "오늘은 내가 공구 모으고, 같이 보기 모임 열고, 생일 프로젝트 진행하는 사람이에요. 손이 많이 가지만, 지금 딱 그럴 능력이 있는 날이에요.",
      ],
      caution: {
        overall: "오늘은 베푸는 기분이 강한 날이라, 되돌리기 어려운 시간이나 돈을 쓰기 전에 한 번 멈춰보세요 — 의욕이 실제 여력보다 앞서갈 수 있어요.",
        love: "오늘 뭔가 많이 주고 싶은 마음은 진심이지만, 한 번에 다 쏟아내기보다 말과 정성을 조금씩 나눠서 표현하는 게 더 잘 전해져요.",
        wealth: "오늘의 테마는 베풂이니, 다른 사람한테 쓰기 전에 대략적인 한도를 미리 정해두세요 — 좋은 마음이 어느새 과소비로 이어질 수 있어요.",
        health: "오늘은 누군가를 위해 몸을 더 쓰고 싶어질 텐데, 내일도 그 페이스를 유지하려면 꼭 필요한 휴식은 건너뛰지 마세요.",
        comeback: "오늘 최애를 위해 굿즈나 티켓을 더 사거나 선물하고 싶어질 텐데, 결제 전에 예산은 한 번 확인해보세요 — 의욕이 계획보다 빨리 지갑을 비울 수 있어요.",
      },
    },
    otherOvercomesMe: {
      overall: [
        "오늘은 살짝 오르막을 걷는 기분이에요, 그리고 그건 뭔가 잘못하고 있다는 신호가 아니라 그냥 저항 훈련 같은 거예요. 작은 걸림돌 하나둘은 각오하되, 버티면 다 넘어갈 수 있어요.",
        "오늘은 흐름을 거스르는 것처럼 살짝 힘들게 느껴질 수 있어요. 이런 압박감 속에서 큰 결정 내리지 말고, 작고 확실한 걸음으로 가는 게 더 깔끔해요.",
        "오늘은 살짝 오르막 느낌이에요, 그래도 밀어붙이기보다 페이스 조절이 답이에요. 자잘한 일에 다 힘 빼지 말고 진짜 중요한 데만 에너지 쓰세요.",
        "계획 하나 정도는 예고 없이 틀어질 수 있어요. 짜증나긴 해도 큰일은 아니고, 생각보다 잘 넘길 수 있어요.",
        "오늘은 굳이 이기려고 논쟁할 날이 아니에요. 싸울 거 고르는 게 무조건 싸우는 것보다 에너지를 훨씬 아껴줘요.",
      ],
      love: [
        "오늘은 오해가 생기기 쉬운 날이에요 — 보내기 전에 문자 한 번 더 읽어보고, 답장하기 전에 잠깐 숨 고르세요. 지금 감정이 잘 안 읽히는 거지, 대부분 나 때문은 아니에요.",
        "오늘 관계에서 뭔가 어긋난 느낌이 든다면, 진심보다는 타이밍 문제일 확률이 높아요 — 답장이 늦거나 짧다고 너무 곱씹지 마세요.",
        "오늘은 인내심이 필요한 날이에요 — 느린 답장이든, 취소된 약속이든, 이해 안 되는 기분이든요. 나 때문이 아닐 확률이 높아요.",
        "오늘 관계에서 살짝 긴장감이 느껴져도, 바로 고치려 하지 마세요. 어떤 마찰은 그냥 시간이 필요할 뿐, 지금 당장의 대화가 필요한 게 아니에요.",
        "오늘은 누군가와 살짝 안 맞는 느낌이 들 수 있어요, 그래도 괜찮아요 — 매일이 완벽하게 잘 맞을 필요는 없으니까요. 너무 깊게 생각하지 말고 흘려보내세요.",
      ],
      wealth: [
        "오늘 돈 스트레스가 슬쩍 찾아올 수 있어요 — 깜빡한 청구서든, 평소보다 아프게 느껴지는 가격표든요. 이런 압박 속에서 큰 재정 결정은 미루고, 급하지 않은 건 하루 재워두세요.",
        "오늘따라 유혹적인 소비가 유난히 더 매력적으로 보여요, 판단력이 살짝 흐려져 있거든요. 원래 사려던 게 아니었다면, 24시간만 참았다가 결정하세요.",
        "예상 못한 지출이 생길 수 있어요. 짜증나지만 감당할 수 있는 수준이니, 너무 곱씹거나 더 큰 재정 결정으로 이어가지 마세요.",
        "평소 돈에 대한 촉이 오늘은 살짝 흔들려요. 지금은 구매나 투자에 대한 직감을 그대로 믿을 날이 아니에요. 더 맑은 날을 기다리세요.",
        "청구서나 가격표가 오늘따라 유난히 아프게 느껴진다면, 그건 실제 재정 상황이 아니라 오늘 기운이 하는 말이에요. 너무 크게 받아들이지 마세요.",
      ],
      health: [
        "가벼운 피로감이나 두통이 슬쩍 찾아올 수 있어요, 고집으로 밀어붙이려는 그 마음을 오늘은 참아보세요. 몸이 지금 더 가벼운 하루를 원하고 있어요.",
        "오늘은 몸이 계획에 조용히 반항할 수 있어요 — 빡빡한 일정, 거른 끼니, 부족한 잠 다 평소보다 더 크게 느껴져요. 줄일 수 있는 만큼 줄이고, 쉬는 것도 생산적인 거라고 생각하세요.",
        "오늘은 평소보다 컨디션 회복이 더디 갈 수 있어요, 무리해서 밀어붙이면 내일 더 힘들어져요. 쉴 타이밍을 미리 챙기세요.",
        "목이 뻐근하거나, 잠을 설치거나, 두통이 안 가시거나 — 오늘은 이런 자잘한 불편함이 생기기 쉬운 날이에요. 심각한 건 아니고 그냥 좀 성가신 정도예요.",
        "오늘은 '생산적인 하루'의 기준을 좀 낮춰도 괜찮은 날이에요. 부드럽게 하루를 넘기는 것만으로 충분해요, 뭔가 최적화하려 애쓰지 않아도 돼요.",
      ],
      comeback: [
        "컴백 불안이 오늘은 유난히 크게 느껴질 수 있어요 — 스포일러든, 유출이든, 일정 겹침이든요. 타임라인 때문에 스트레스 받는다면, 오늘 하루 로그아웃해도 충분히 괜찮은 선택이에요.",
        "다음 시즌을 기다리는 게 오늘따라 유난히 길게 느껴져요, 타임라인도 딱히 원하는 방향으로 안 움직이는 것 같고요. 업데이트 찾아 헤매기보다 옛날 시대 다시 보며 위로받으세요.",
        "지연되거나, 애매한 티저나, 헷갈리는 공지가 오늘은 인내심을 시험할 수 있어요. 팬덤 타임라인이 내 스케줄대로 안 움직이는 것뿐, 그냥 오늘 기운이 그래요.",
        "오늘은 다들 나보다 더 신나 보이는 것처럼, 하이프에서 살짝 떨어진 느낌이 들 수 있어요. 괜찮아요 — 팬도 가끔은 텐션 낮은 날이 있어도 돼요.",
        "댓글창이나 팬덤 논쟁이 오늘 스트레스로 다가온다면, 얽히기보다 로그아웃하세요. 오늘의 논쟁은 쏟을 에너지만큼의 가치가 없어요.",
      ],
      caution: {
        overall: "오늘은 살짝 마찰이 있는 날이라, 크고 되돌리기 힘든 결정은 미루는 게 좋아요 — 급하지 않은 건 하루 재워두세요.",
        love: "오늘 대화가 좀 팽팽하게 느껴진다면, 한 번에 다 풀려고 하기보다 좀 더 차분한 순간을 기다리는 게 나아요 — 오늘은 타이밍이 평소보다 중요해요.",
        wealth: "오늘 같은 압박감 속에서 내린 재정 결정은 나중에 후회할 확률이 높아요 — 마찰이 가라앉을 때까지 큰 지출이나 약속은 미뤄두세요.",
        health: "오늘은 몸이 평소보다 더 반항할 수 있으니, 피곤한 걸 억지로 참고 밀어붙이지 마세요 — 지금 쉬는 게 나중에 밀어붙이는 것보다 훨씬 덜 힘들어요.",
        comeback: "오늘 같은 날은 루머나 불확실한 정보가 유난히 잘 퍼져요 — 공식 발표가 나오기 전까지는 추측성 정보로 반응하거나 돈 쓰는 건 잠깐 미뤄두세요.",
      },
    },
    iOvercomeOther: {
      overall: [
        "오늘은 내가 우위에 있는 날이에요 — 결정이 잘 통하고, 계획이 잘 유지되고, 사람들이 평소보다 내 판단을 더 믿어줘요. 이 흐름, 신중하게 쓰세요. 이런 확신은 매일 오는 게 아니니까요.",
        "오늘은 내가 주도권을 쥐고 있어요, 근데 '주도권'이 어느새 '통제'로 넘어가지 않게 조심하세요. 뭐 하나쯤은 힘을 좀 빼도 괜찮아요, 모든 걸 다 관리하고 싶은 마음이 굴뚝같아도요.",
        "오늘은 확실한 입지에서 움직이고 있어요 — 이 힘을 뭔가 앞으로 밀고 나가는 데 쓰세요, 괜히 승부 겨루는 데 쓰지 말고요. 잘못 쓰면 이 이점도 금방 사라져요.",
        "평소보다 사람들이 내 리드를 더 잘 따라오는 날이에요, 그러니 어디로 이끌지는 신중하게 정하세요. 이런 영향력, 매일 생기는 게 아니에요.",
        "미뤄왔던 그 전화, 오늘 해보기 좋은 날이에요, 지금 판단력이 평소보다 더 날카롭고 단호하거든요.",
      ],
      love: [
        "오늘은 내가 패를 쥐고 있어요 — 내 의견이 힘을 갖고, 내 계획대로 흘러가고, 내 기분이 분위기를 만들어요. 근데 그 패, 너무 세게 쓰지는 마세요. 관계에서는 은근한 힘이 강한 힘보다 오래가요.",
        "오늘은 내 말 한마디가 가까운 사람들에게 평소보다 더 무겁게 다가가요. 다정하고 신중하게 쓰세요. 이런 영향력을 오늘 어떻게 쓰느냐가 평소보다 더 오래 기억에 남아요.",
        "오늘은 자신감이 남을 압도하기보다 자연스럽게 끌리게 만드는 날이에요 — 상대에게도 자리를 내주기만 한다면요.",
        "관계에서 누군가 리드가 필요하다면, 오늘은 그게 나예요. 다만 가끔 확인해서, 나 혼자 이끄는 게 아니라 같이 가고 있는지 챙기세요.",
        "오늘은 내 존재감이 작은 순간에도 상대에게 평소보다 크게 다가가요. 그 힘, 조심스럽게 다정하게 쓰세요.",
      ],
      wealth: [
        "오늘은 협상에서 유리한 자리에 있어요 — 할인 요청이든, 연봉 협상이든, 뭔가 부당한 가격에 반박하는 거든요. 평소보다 '예스'가 나올 확률이 높으니, 밑져야 본전이라도 일단 물어보세요.",
        "오늘의 절제는 지금 당장은 티가 안 나도 결국 빛을 봐요 — 작은 절약, 지킨 소비 원칙, 참은 충동구매요. 당장은 별거 아닌 것 같아도 나중에 쌓여서 느껴질 거예요.",
        "오늘은 거의 모든 재정적인 상황에서 유리하게 흘러가요 — 협상, 환불, 더치페이든요. 오늘은 나서서 요구해도 되는 날이에요.",
        "오늘은 판단력이 평소보다 날카로워요, 그러니 남의 의견보다 내 판단을 믿으세요, 돈 문제에서는요.",
        "환불이든, 더 나은 조건이든, 정당한 대가든 요청을 미뤄왔다면, 오늘은 그 요청이 유난히 잘 받아들여지는 날이에요.",
      ],
      health: [
        "오늘은 평소보다 체력이 좋아요, 그걸 무적이라는 증거로 착각하기 쉬운 날이기도 해요. 조금 더 밀어붙여도 괜찮지만, 오늘의 여분 에너지를 영구적인 업그레이드로 착각하지는 마세요.",
        "오늘은 조금 더 무리해도 괜찮아요 — 운동을 더 오래 하든, 늦게까지 깨어있든, 평소보다 더 많이 하든요. 딱 한 번만요, 그걸 매번의 기준으로 삼지는 마세요.",
        "몸이 평소보다 스트레스와 무리를 잘 견디는 날이에요. 이 기회를 잘 쓰되, 매번 이럴 거라고 단정 짓지는 마세요.",
        "오늘은 나한테 안 좋은 걸 거절할 만한 단호함이 있는 날이에요 — 한 잔 더, 늦은 밤, 빠진 운동 같은 거요. 그 힘, 잘 쓰세요.",
        "오늘은 건강 관련 결단을 내리기 좋은 날이에요 — 루틴 시작하기, 습관 끊기, 예약 잡기요. 평소보다 결심이 훨씬 단단해요.",
      ],
      comeback: [
        "오늘은 팬덤보다 한 수 앞서가는 날이에요 — 다음 컨셉이나 숨은 떡밥에 대한 내 예감이 생각보다 정확할 확률이 높아요. 예감 믿고 그냥 말해보세요.",
        "오늘은 신규 팬들에게 세계관 설명해주는 믿음직한 존재예요, 논쟁도 정리해주고, 팬덤의 비공식 진실 공급원 역할까지 해요. 그 타이틀 당당하게 달고 다니세요.",
        "오늘은 내가 팬덤 여론을 이끄는 날이에요 — 컨트로버시나 컴백에 대한 내 해석에 다들 결국 동의하게 돼요.",
        "오늘은 조직력이 평소보다 좋은 날이에요 — 스밍 파티든, 투표 운동이든, 생일 프로젝트든 내가 나서면 훨씬 매끄럽게 굴러가요.",
        "팬덤에 잘못된 정보가 돌고 있다면, 오늘은 그걸 차분하고 명확하게 바로잡을 인내심과 근거 둘 다 갖춘 날이에요.",
      ],
      caution: {
        overall: "오늘은 자신감이 넘치는 날이라 결정에는 좋지만, 큰 일일수록 확정 전에 세부사항은 한 번 더 확인하세요 — 확신이 항상 정답인 건 아니에요.",
        love: "오늘은 내 말에 평소보다 힘이 실리니까, 직설적으로 말하기 전에 한 번 더 생각해보세요 — 조금 부드럽게 말해도 충분히 잘 전달돼요.",
        wealth: "오늘은 협상에서 유리하겠지만, 계약서나 조건은 그래도 꼼꼼히 확인하고 서명하세요 — 자신감이 있어도 세부사항 확인은 건너뛰면 안 돼요.",
        health: "오늘은 평소보다 무리해도 괜찮지만, 적당한 선에서 멈추는 게 좋아요 — 오늘의 여분 체력이 계속 유지되는 건 아니에요.",
        comeback: "오늘은 팬덤 논쟁이나 예측에 대한 감이 날카롭지만, 확신에 차서 올리기 전에 사실 확인은 한 번 더 하세요 — 자신감이 정확도를 앞지를 수 있어요.",
      },
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

/**
 * A short, practical "worth keeping in mind" note for a relation/category
 * pair — unlike getFortuneLine, this is a single fixed string (no seed
 * variants needed for a one-liner tip), always shown alongside the main
 * fortune line rather than gated, since /result has stayed a free page
 * from the start.
 */
export function getFortuneCaution(lang, relation, category) {
  const entry = (fortuneTemplates[lang] || fortuneTemplates.en)[relation];
  return entry.caution[category];
}
