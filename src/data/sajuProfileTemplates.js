// Content about the saju chart itself — personality/temperament — as
// opposed to fortuneTemplates.js, which is entirely about "today" relative
// to the chart. Nothing in this file changes based on the date.
import {
  getTenGodCategoryCounts,
  getDayBranchTenGodCategory,
  getWeakestElement,
  getElementRelation,
  getOvercomingElement,
  getNobleman,
  getCurrentDaeunPeriod,
} from '../utils/saju';

export const sajuProfileTemplates = {
  en: {
    dominant: {
      Wood: {
        title: 'Wood: The Grower',
        paragraphs: [
          "Wood energy is about growth — reaching for more, expanding, refusing to stay small. If Wood dominates your chart, you're probably the friend who's always mid-project, mid-plan, or mid-glow-up, because standing still has never really suited you. You take initiative naturally and recover from setbacks by immediately starting the next thing.",
          "The flip side: growth without direction turns into overextension. Wood-dominant people can spread themselves across too many projects, too many people, too many group chats, and burn out from sheer forward motion. The lesson your chart is quietly handing you is that not every branch needs to be climbed — some just need to be let go.",
        ],
      },
      Fire: {
        title: 'Fire: The Spark',
        paragraphs: [
          "Fire energy is charisma, warmth, and a kind of magnetism that draws people in without you trying very hard. If Fire dominates your chart, you're probably the one who makes a group chat feel alive, the one people quote back to you without realizing it, the one whose mood sets the room's mood.",
          "The flip side: fire that burns bright can also burn fast. Fire-dominant people are prone to intense highs followed by real crashes — big enthusiasm for something that fizzles out in a week, relationships that flare hot then cool suddenly. Your chart's advice: bank some embers for later instead of spending every spark the moment you feel it.",
        ],
      },
      Earth: {
        title: 'Earth: The Anchor',
        paragraphs: [
          "Earth energy is stability — the friend everyone calls when something's falling apart, the one who remembers birthdays, the one whose word actually means something. If Earth dominates your chart, you're probably the emotional infrastructure of your friend group, whether or not anyone's ever said it out loud.",
          "The flip side: being everyone's anchor is exhausting when no one's anchoring you back. Earth-dominant people tend to under-ask for help and over-deliver on everyone else's needs, quietly resentful long before they'd ever admit it. Your chart's advice: being needed and being used aren't the same thing — it's fine to let some weight drop.",
        ],
      },
      Metal: {
        title: 'Metal: The Blade',
        paragraphs: [
          "Metal energy is precision, discipline, and a refusal to accept sloppy anything — sloppy thinking, sloppy plans, sloppy relationships. If Metal dominates your chart, you're probably the one who notices the typo, holds the boundary, and says the honest thing everyone else was too polite to say.",
          "The flip side: a blade that's always sharp can cut people who didn't ask to be cut. Metal-dominant people can come across as cold or overly critical, even when the intent is just clarity. Your chart's advice: precision is a gift, but not everything needs to be corrected the moment it's noticed.",
        ],
      },
      Water: {
        title: 'Water: The Current',
        paragraphs: [
          "Water energy is intuition, adaptability, and a kind of quiet depth that takes people a while to actually reach. If Water dominates your chart, you're probably the one who reads a room before anyone speaks, adjusts without announcing it, and somehow always knows more than you're letting on.",
          "The flip side: water that only flows around obstacles never actually breaks through them. Water-dominant people can avoid confrontation so thoroughly that real problems just get rerouted instead of resolved. Your chart's advice: sometimes the current needs to hit the rock head-on instead of finding the tenth way around it.",
        ],
      },
    },
    dayMaster: {
      Wood: "Your day pillar — the part of your chart considered the truest read of who you are underneath everything else — runs on Wood. Whatever else is happening in your chart, at your core you're building toward something, always slightly further along than you were yesterday.",
      Fire: "Your day pillar runs on Fire, considered your chart's most honest read of you. Underneath whatever else is going on, your core self needs to be seen, needs to be felt, and lights up brightest when there's someone around to share it with.",
      Earth: "Your day pillar runs on Earth, the part of your chart considered closest to your true self. Underneath everything else, you're built for consistency — the version of you that shows up is the same one, day after day, whether or not anyone's watching.",
      Metal: "Your day pillar runs on Metal, considered the most accurate read of your core self. Underneath whatever else your chart says, you're built around standards — for yourself first, and for everyone else by extension, whether they asked for it or not.",
      Water: "Your day pillar runs on Water, the part of your chart considered the truest version of you. Underneath everything else, you adapt faster than people give you credit for, and you're holding more depth than most people ever get to see.",
    },
    // Based on the Day Branch's (일지, the "spouse palace") Ten God
    // category relative to the day master — traditionally the chart
    // position most associated with how someone experiences a romantic
    // partner. Doesn't need gender or a strength reading, so it's always
    // computable. See getDayBranchTenGodCategory in utils/saju.js.
    romanceStyle: {
      title: 'Your Love Style',
      subtopicTitles: {
        overall: 'Overall Love Style',
        attraction: 'What Draws People In',
        avoidType: 'A Type to Watch For',
        marriageTiming: 'On Marriage Timing',
      },
      companion: "Your spouse palace (일지, the Day Branch — traditionally the chart's marker for how you experience a partner) carries Companion energy. This tends to mean you look for a partner who feels like an equal — someone you relate to easily, almost like a close friend first, romance second. You likely value a relationship where both people show up as themselves without one person outshining the other.",
      output: "Your spouse palace (일지, the Day Branch) carries Output energy — traditionally linked to expression and creativity. This tends to mean you're drawn to a partner who lets you be genuinely expressive, playful, or unguarded, and relationships work best for you when there's room for real fun and self-expression, not just seriousness.",
      wealth: "Your spouse palace (일지, the Day Branch) carries Wealth energy, which traditionally points to a partner-oriented, providing kind of love — you likely show affection through concrete care (time, effort, resources) rather than just words, and you tend to value a partner who's grounded and practical alongside being warm.",
      officer: "Your spouse palace (일지, the Day Branch) carries Officer energy — traditionally the placement most associated with commitment and structure in a relationship. This tends to mean you take relationships seriously once you're in one, value clear expectations and follow-through, and are drawn to a partner who feels dependable and consistent rather than unpredictable.",
      resource: "Your spouse palace (일지, the Day Branch) carries Resource energy, traditionally linked to comfort and emotional support. This tends to mean you're drawn to a partner who feels nurturing or steadying to be around — someone who makes things feel easier just by being there — and you likely give that same quality back once you feel safe in a relationship.",
      attraction: {
        companion: "People tend to feel your spouse palace's Companion energy as approachability — you read as easy to be around, someone they could see becoming close to without a lot of formality first. That equal-footing energy is often what draws someone in before they've fully articulated why.",
        output: "People tend to feel your spouse palace's Output energy as charm — your expressiveness and playfulness make you memorable, and people are often drawn in by how unguarded and genuinely fun you are to be around.",
        wealth: "People tend to feel your spouse palace's Wealth energy as dependability — you come across as someone who'd actually show up and follow through, which reads as attractive in a quieter, more grounded way than flash or charm.",
        officer: "People tend to feel your spouse palace's Officer energy as seriousness in a good way — you read as someone who takes things (and people) seriously once committed, which is its own kind of magnetic to someone looking for something real.",
        resource: "People tend to feel your spouse palace's Resource energy as warmth — you come across as nurturing or easy to open up to, and people are often drawn in by how safe it feels to be around you.",
      },
      avoidType: {
        Wood: "Someone whose chart runs heavily on Wood energy may end up feeling like a mismatch in pace for you — their constant forward motion and need for more room to grow can clash with the rhythm you're comfortable at. Not a hard rule, just worth noticing if the pace feels consistently off.",
        Fire: "Someone whose chart runs heavily on Fire energy may end up feeling like a mismatch in pace for you — their intensity and need for constant spark can clash with the rhythm you're comfortable at. Not a hard rule, just worth noticing if the pace feels consistently off.",
        Earth: "Someone whose chart runs heavily on Earth energy may end up feeling like a mismatch in pace for you — their steadiness and resistance to change can clash with the rhythm you're comfortable at. Not a hard rule, just worth noticing if the pace feels consistently off.",
        Metal: "Someone whose chart runs heavily on Metal energy may end up feeling like a mismatch in pace for you — their bluntness and need for precision can clash with the rhythm you're comfortable at. Not a hard rule, just worth noticing if the pace feels consistently off.",
        Water: "Someone whose chart runs heavily on Water energy may end up feeling like a mismatch in pace for you — their tendency to hold back and avoid direct confrontation can clash with the rhythm you're comfortable at. Not a hard rule, just worth noticing if the pace feels consistently off.",
      },
      marriageTiming: {
        'strong-companion': "With a strong day master and Companion energy in your spouse palace, you tend to move at your own pace in relationships and won't be rushed into commitment. When the time is right, it'll likely be because you've genuinely decided, not because of outside pressure.",
        'strong-output': "With a strong day master and Output energy in your spouse palace, commitment tends to follow naturally once you've found someone who lets you be fully yourself. There's no need to force a timeline — it tends to become obvious to you when it's right.",
        'strong-wealth': "With a strong day master and Wealth energy in your spouse palace, you likely feel ready for commitment once the practical foundation feels solid — not just the feelings, but the sense that a life together could actually work day to day.",
        'strong-officer': "With a strong day master and Officer energy in your spouse palace, you tend to take commitment seriously once you decide to move toward it, and you're unlikely to drag your feet once the decision is made. Trust that instinct when it arrives.",
        'strong-resource': "With a strong day master and Resource energy in your spouse palace, you tend to feel ready for commitment once a relationship feels genuinely steadying rather than effortful. That sense of ease, when it shows up consistently, is usually the sign worth trusting.",
        'weak-companion': "With a gentler day master and Companion energy in your spouse palace, commitment tends to feel right once you've found someone who feels like a true equal — patience here pays off more than rushing toward a milestone.",
        'weak-output': "With a gentler day master and Output energy in your spouse palace, you likely need to feel fully comfortable being yourself before commitment feels right — that comfort, once it's genuinely there, tends to be the real signal.",
        'weak-officer': "With a gentler day master and Officer energy in your spouse palace, having a stable, dependable partner tends to matter more to your sense of readiness than any particular timeline — the right steadiness will make the timing feel obvious on its own.",
        'weak-wealth': "With a gentler day master and Wealth energy in your spouse palace, feeling genuinely taken care of tends to matter more than a specific timeline — when that steadiness is consistently there, the timing tends to feel right on its own.",
        'weak-resource': "With a gentler day master and Resource energy in your spouse palace, you likely need to feel truly supported before commitment feels right — once that foundation is solid, the timing has a way of resolving itself without forcing anything.",
      },
    },
    // Based on how many of the chart's 7 non-day-gan characters fall into
    // the Wealth Star (財星) Ten God category — a direct count, not a
    // strength reading, so "many" genuinely means several Wealth-category
    // characters, not just a strong dominant element. See
    // getTenGodCategoryCounts in utils/saju.js.
    wealthStyle: {
      title: 'Your Money Style',
      subtopicTitles: {
        overall: 'Overall Money Style',
        timing: 'Timing Read',
        spendingHabit: 'Spending Habit',
        luckyItem: 'Lucky Item',
      },
      none: "There's little to no Wealth Star (財星) energy in your chart, which tends to mean money just isn't your primary motivator — you're more likely to chase meaning, mastery, or relationships first and let income follow as a side effect. This isn't a bad placement; it just means financial ambition probably needs to be built deliberately rather than relied on as a natural drive, since it's not where your instincts already point.",
      moderate: "Your chart carries a moderate amount of Wealth Star (財星) energy — enough that money matters to you, but not so much that it dominates your decisions. You likely lean toward financial stability over big swings: steady saving, planning ahead, and building security gradually rather than chasing a windfall.",
      many: "Your chart is rich in Wealth Star (財星) energy, which tends to show up as a genuinely active relationship with money — you notice opportunities, you're comfortable pursuing them, and building income is likely to feel natural rather than effortful. Worth watching: this same drive can tip into overextending financially if it isn't paired with equally strong discipline.",
      timing: {
        needGender: "Enter a gender above to see which Major Luck Cycle you're currently in, and what that means for your money flow right now.",
        good: "The Major Luck Cycle you're in right now favors wealth — this decade tends to bring opportunities or income that arrive with less friction than usual. It's a reasonable window to be a little more active: pursuing something, not just sitting on what you've already saved.",
        neutral: "The Major Luck Cycle you're in right now is a steady one for money — no dramatic swing in either direction. Staying the course with whatever approach has already been working tends to serve you better here than trying to force a change.",
        caution: "The Major Luck Cycle you're in right now asks for a bit more caution with money — this decade tends to bring more spending pressure or unexpected cost than windfall. Worth holding off on big purchases or major financial commitments until the flow eases.",
      },
      spendingHabit: {
        none: "With light Wealth Star energy, your spending tends to lean careful — you're more likely to plan a purchase than impulse into one, and there's real comfort for you in watching savings grow rather than watching things arrive.",
        moderate: "With a moderate amount of Wealth Star energy, your spending tends to be balanced — you'll spend without much guilt on what actually matters to you, while still keeping an eye on the bigger picture instead of letting purchases add up unnoticed.",
        many: "With rich Wealth Star energy, you tend to spend as actively as you earn — comfortable investing in experiences, people, or opportunities without much hesitation. Worth pairing that comfort with a deliberate savings habit, since the same ease can make money move through your hands quickly.",
      },
      luckyItem: {
        Wood: "In traditional Five Element symbolism, green tones and living plants are considered a natural match for Wood energy — a small potted plant on your desk, or a green accessory somewhere you pass by often, is the classic pairing.",
        Fire: "In traditional Five Element symbolism, red tones and warm lighting are considered a natural match for Fire energy — a candle, a warm-toned lamp, or a small red accessory is the classic pairing.",
        Earth: "In traditional Five Element symbolism, yellow or ochre tones and ceramics are considered a natural match for Earth energy — a ceramic mug, bowl, or small pottery piece is the classic pairing.",
        Metal: "In traditional Five Element symbolism, white tones and metal accessories are considered a natural match for Metal energy — a simple silver or white-toned accessory, like a ring or a watch, is the classic pairing.",
        Water: "In traditional Five Element symbolism, black or navy tones and water-related objects are considered a natural match for Water energy — a water bottle, a small fish tank, or a navy accessory is the classic pairing.",
      },
    },
    // Based on how many of the chart's 7 non-day-gan characters fall into
    // the Officer Star (官星) Ten God category — same counting method as
    // wealthStyle above, just a different category.
    careerStyle: {
      title: 'Your Career Fit',
      subtopicTitles: {
        overall: 'Overall Career Fit',
        talent: 'Your Talent',
        workplaceType: 'Workplace Type',
        helpers: 'Who Helps You',
      },
      none: "There's little to no Officer Star (官星) energy in your chart, which tends to mean rigid hierarchy and top-down structure aren't where you do your best work. You're likely better suited to independent, self-directed roles — freelance, entrepreneurship, or a job with real autonomy — where you set your own standards rather than answering to someone else's.",
      moderate: "Your chart carries a moderate amount of Officer Star (官星) energy — you can work within a structured organization without much friction, and you're comfortable following a system when it makes sense, while still wanting some room to operate on your own judgment. A balanced mix of structure and autonomy tends to suit you best.",
      many: "Your chart is rich in Officer Star (官星) energy, which tends to mean you actually thrive inside structure and hierarchy — clear roles, defined chains of command, and organizational systems tend to bring out your best rather than holding you back. You're likely well-suited to leadership within an established institution, where the structure itself becomes something you can work with rather than around.",
      talent: {
        base: {
          Wood: "Your natural talent leans toward growth and initiative — starting things, expanding scope, pushing a plan further than the original ask.",
          Fire: "Your natural talent leans toward visibility and momentum — pitching an idea, energizing a room, getting people excited about something before it's even finished.",
          Earth: "Your natural talent leans toward reliability and follow-through — being the person a project can actually depend on to hold steady from start to finish.",
          Metal: "Your natural talent leans toward precision and standards — catching what others miss, refining something until it's actually right, not just good enough.",
          Water: "Your natural talent leans toward adaptability and read — sensing where a situation is headed before it's obvious, and adjusting your approach accordingly.",
        },
        officerNote: {
          none: "Given how little structure your chart carries, that talent shows up best when you're setting your own direction rather than executing someone else's plan.",
          moderate: "With a balanced amount of structure in your chart, that talent tends to come through best in mixed environments — some framework to work within, but still real room to make your own calls.",
          many: "With strong structure in your chart, that talent is most visible inside a clear system — it shows up as drive to rise within it, not just to build something on your own.",
        },
      },
      workplaceType: {
        none: "You're likely best matched to independent-leaning work — freelance, founding something of your own, or a role where you're mostly answering to your own standards rather than a chain of command.",
        moderate: "You're likely best matched to a mixed environment — enough structure to know what's expected of you, enough freedom to actually do it your way.",
        many: "You're likely best matched to an established organization with clear structure — a well-defined team, a known chain of command, a system you can actually work within rather than build from scratch.",
      },
      helpers: {
        yes: "Your chart carries the Heavenly Nobleman (天乙貴人) — traditionally read as a sign that the right person tends to show up at the right time in your career, whether that's a mentor, a well-timed introduction, or someone who simply vouches for you when it matters.",
        no: "Your chart doesn't carry the Heavenly Nobleman (天乙貴人) placement — which traditionally means less reliance on being helped along, and more of your progress coming from opportunities you built yourself. That tends to make the wins feel more earned, even if they take a bit longer to arrive.",
      },
    },
    // Based on the chart's weakest Five Element (lowest character count),
    // read through the traditional Five Element-organ correspondence —
    // deliberately the weakest element, not the dominant one, since that's
    // the system traditionally worth paying closer attention to. See
    // getWeakestElement in utils/saju.js.
    healthStyle: {
      title: 'Your Health Tendencies',
      subtopicTitles: {
        overall: 'Overall Health Tendencies',
        injuryRisk: 'Injury Risk Areas',
        exercise: 'Exercise That Fits You',
        diet: 'Eating for Balance',
      },
      Wood: "Wood is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the liver and gallbladder as the system worth paying a little extra attention to. Practically, that often means being mindful of stress management and not bottling up frustration, since Wood's traditional domain is exactly that — smooth, unblocked flow.",
      Fire: "Fire is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the heart and small intestine as the system worth paying a little extra attention to. Practically, that often means being mindful of circulation and getting enough genuine rest, since Fire's traditional domain is warmth and circulation throughout the body.",
      Earth: "Earth is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the spleen and stomach as the system worth paying a little extra attention to. Practically, that often means being mindful of digestion and regular, unhurried meals, since Earth's traditional domain is exactly that — steady nourishment and absorption.",
      Metal: "Metal is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the lungs and large intestine as the system worth paying a little extra attention to. Practically, that often means being mindful of breathing and air quality, since Metal's traditional domain is exactly that — clean intake and letting go of what doesn't need to be held onto.",
      Water: "Water is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the kidneys and bladder as the system worth paying a little extra attention to. Practically, that often means being mindful of staying warm, staying hydrated, and getting real rest, since Water's traditional domain is exactly that — deep reserves and recovery.",
      injuryRisk: {
        Wood: "In the traditional Five Element-body correspondence, Wood governs the muscles and tendons — with Wood running quiet in your chart, sudden overstretching or jumping into intense movement without warming up is worth being a little more careful about.",
        Fire: "In the traditional Five Element-body correspondence, Fire governs circulation and the blood vessels — with Fire running quiet in your chart, it's worth being a little more careful with anything involving heat (burns, overheating during exercise) and giving your body real recovery time after intense activity.",
        Earth: "In the traditional Five Element-body correspondence, Earth governs the muscles around the limbs and digestive tract — with Earth running quiet in your chart, knee strain and digestive discomfort during or after activity are worth being a little more careful about.",
        Metal: "In the traditional Five Element-body correspondence, Metal governs the skin and respiratory system, with a traditional link to the joints as well — with Metal running quiet in your chart, repetitive strain on the shoulders and wrists, plus dry skin, are worth being a little more careful about.",
        Water: "In the traditional Five Element-body correspondence, Water governs the bones and joints — with Water running quiet in your chart, lower back and knee strain (especially from cold or overexertion) are worth being a little more careful about.",
      },
      exercise: {
        Wood: "Light cardio and stretching tend to suit you best — a jog, a bike ride, or a proper stretching routine gives Wood energy the steady, unblocked movement it's looking for.",
        Fire: "High-intensity interval training tends to suit you best — short, intense bursts of effort match Fire energy's natural rhythm better than something slow and steady.",
        Earth: "Strength training tends to suit you best — building steady, grounded muscle matches Earth energy's preference for stability over quick bursts.",
        Metal: "A consistent, structured routine tends to suit you best — the same schedule, the same sets, the same discipline each time, which matches Metal energy's preference for order over spontaneity.",
        Water: "Swimming and flexibility work tend to suit you best — anything in or around water, or slow, deliberate stretching, matches Water energy's natural affinity for fluid, adaptive movement.",
      },
      diet: {
        Wood: "In the traditional Five Element-food correspondence, sour flavors and green vegetables are linked to Wood — leafy greens, citrus, and lightly fermented foods are the traditional pairing worth leaning into.",
        Fire: "In the traditional Five Element-food correspondence, bitter flavors and red foods are linked to Fire — bitter greens, tomatoes, and red fruit are the traditional pairing worth leaning into.",
        Earth: "In the traditional Five Element-food correspondence, sweet flavors and yellow foods are linked to Earth — squash, sweet potato, and grains are the traditional pairing worth leaning into (naturally sweet, not sugar-heavy).",
        Metal: "In the traditional Five Element-food correspondence, pungent flavors and white foods are linked to Metal — garlic, onion, radish, and white-fleshed fruit are the traditional pairing worth leaning into.",
        Water: "In the traditional Five Element-food correspondence, salty flavors and dark foods are linked to Water — seaweed, black beans, and dark leafy greens are the traditional pairing worth leaning into.",
      },
    },
  },
  ko: {
    dominant: {
      Wood: {
        title: '목: 성장하는 사람',
        paragraphs: [
          "목의 기운은 성장이에요 — 더 많은 걸 향해 손을 뻗고, 넓혀가고, 작은 채로 머무르길 거부하는 힘이죠. 사주에 목이 강하다면, 늘 뭔가 진행 중이고 뭔가 계획 중인 사람일 확률이 높아요. 가만히 있는 게 원래 안 맞는 타입이거든요. 주도적으로 시작하고, 좌절을 겪어도 곧바로 다음 걸 시작하며 회복해요.",
          "다만 방향 없는 성장은 과잉 확장이 되기 쉬워요. 목의 기운이 강한 사람은 너무 많은 프로젝트, 너무 많은 사람, 너무 많은 단톡방으로 스스로를 흩뜨려서, 순전한 추진력만으로 지쳐버리기도 해요. 사주가 조용히 건네는 조언은, 모든 가지를 다 오를 필요는 없다는 것 — 어떤 건 그냥 놓아줘도 괜찮다는 거예요.",
        ],
      },
      Fire: {
        title: '화: 불꽃 같은 사람',
        paragraphs: [
          "화의 기운은 카리스마와 온기, 그리고 별로 애쓰지 않아도 사람을 끌어당기는 매력이에요. 사주에 화가 강하다면, 단톡방을 활기차게 만드는 사람, 다들 자기도 모르게 따라 인용하는 말을 하는 사람, 분위기를 좌우하는 사람일 확률이 높아요.",
          "다만 밝게 타는 불은 빨리 타버릴 수도 있어요. 화의 기운이 강한 사람은 극심한 텐션 뒤에 확실한 다운을 겪기 쉬워요 — 일주일 만에 식어버리는 큰 열정, 확 타올랐다가 갑자기 식는 관계처럼요. 사주의 조언은, 느끼는 순간마다 불꽃을 다 써버리지 말고 나중을 위해 조금씩 남겨두라는 거예요.",
        ],
      },
      Earth: {
        title: '토: 든든한 사람',
        paragraphs: [
          "토의 기운은 안정감이에요 — 뭔가 무너질 때 다들 찾는 친구, 생일을 잊지 않는 사람, 말 한마디에 진짜 무게가 있는 사람이죠. 사주에 토가 강하다면, 아무도 대놓고 말은 안 해도 친구 그룹의 정서적 기둥일 확률이 높아요.",
          "다만 모두의 기둥 역할은, 정작 나를 받쳐주는 사람이 없을 땐 지치는 일이에요. 토의 기운이 강한 사람은 도움을 잘 요청하지 않으면서 남의 필요는 과하게 채워주는 경향이 있어요, 그러다 스스로도 인정하기 전에 조용히 서운함이 쌓이곤 하죠. 사주의 조언은, 필요한 존재인 것과 이용당하는 건 다르다는 것 — 어느 정도 무게는 내려놔도 괜찮다는 거예요.",
        ],
      },
      Metal: {
        title: '금: 날카로운 사람',
        paragraphs: [
          "금의 기운은 정교함과 절제, 그리고 어설픈 건 뭐든 받아들이지 않는 단호함이에요 — 어설픈 생각도, 어설픈 계획도, 어설픈 관계도요. 사주에 금이 강하다면, 오타를 제일 먼저 발견하는 사람, 선을 지키는 사람, 다들 예의상 참고 있던 솔직한 말을 하는 사람일 확률이 높아요.",
          "다만 늘 날카로운 칼날은 베일 생각이 없던 사람도 베게 돼요. 금의 기운이 강한 사람은 의도가 그저 명확함이었을 뿐인데도 차갑거나 과하게 비판적으로 보일 수 있어요. 사주의 조언은, 정교함은 재능이지만 알아차린 순간 바로 모든 걸 지적할 필요는 없다는 거예요.",
        ],
      },
      Water: {
        title: '수: 흐르는 사람',
        paragraphs: [
          "수의 기운은 직관과 유연함, 그리고 사람들이 시간을 들여야 겨우 닿을 수 있는 조용한 깊이예요. 사주에 수가 강하다면, 누가 말하기도 전에 분위기를 읽는 사람, 티 내지 않고 조율하는 사람, 어쩐지 겉으로 드러내는 것보다 늘 더 많이 알고 있는 사람일 확률이 높아요.",
          "다만 장애물을 피해서만 흐르는 물은 결국 뚫고 나가지 못해요. 수의 기운이 강한 사람은 갈등을 너무 철저히 피하다 보니, 진짜 문제가 해결되지 못하고 그냥 우회로만 계속 만들어지는 경우가 있어요. 사주의 조언은, 가끔은 열 번째 우회로를 찾기보다 바위에 정면으로 부딪혀야 할 때도 있다는 거예요.",
        ],
      },
    },
    dayMaster: {
      Wood: "일주는 사주에서 나의 본모습을 가장 정직하게 보여주는 부분인데, 목의 기운을 갖고 있어요. 사주에 다른 어떤 기운이 있든, 본질적으로는 뭔가를 향해 계속 나아가는 사람이에요 — 어제보다 늘 조금씩 더 앞서 있는.",
      Fire: "일주는 화의 기운이에요, 사주에서 나를 가장 솔직하게 보여주는 부분이죠. 다른 기운이 뭐라고 말하든, 마음 깊은 곳에서는 보여지고 느껴지고 싶어 하고, 누군가와 나눌 사람이 있을 때 가장 환하게 빛나요.",
      Earth: "일주는 토의 기운이에요, 사주에서 진짜 나에 가장 가까운 부분이죠. 다른 모든 것과 상관없이, 일관성을 위해 태어난 사람이에요 — 오늘 보여주는 내 모습이, 누가 보든 안 보든 늘 똑같은 그 모습이에요.",
      Metal: "일주는 금의 기운이에요, 사주에서 진짜 나를 가장 정확하게 보여주는 부분이죠. 다른 어떤 것과도 상관없이, 기준을 중심으로 만들어진 사람이에요 — 나 자신에게 먼저, 그리고 원하든 원치 않든 주변 사람들에게도요.",
      Water: "일주는 수의 기운이에요, 사주에서 가장 진짜에 가까운 나를 보여주는 부분이죠. 다른 모든 것과 상관없이, 사람들이 생각하는 것보다 훨씬 빠르게 적응하고, 대부분의 사람들이 못 보는 깊이를 품고 있어요.",
    },
    // 일지(배우자궁) 십성 기준 — 성별/신강신약 상관없이 항상 계산 가능
    romanceStyle: {
      title: '당신의 연애 스타일',
      subtopicTitles: {
        overall: '연애 총운',
        attraction: '이성이 느끼는 매력',
        avoidType: '페이스 조심할 유형',
        marriageTiming: '결혼 시기 조언',
      },
      companion: "배우자궁(일지 — 전통적으로 연애 상대를 어떻게 경험하는지를 보여주는 자리예요)에 비겁(比劫) 기운이 있어요. 이건 보통 나와 대등하게 느껴지는 상대를 찾는다는 뜻이에요 — 연애보다 먼저 친한 친구처럼 편하게 통하는 사람이요. 한쪽이 다른 쪽을 압도하지 않고 둘 다 있는 그대로의 자기 모습으로 있을 수 있는 관계를 중요하게 여기는 편이에요.",
      output: "배우자궁(일지)에 식상(食傷) 기운이 있어요 — 전통적으로 표현력·창의성과 연결되는 자리예요. 보통 나를 진짜로 표현하고, 장난스럽고, 편안하게 있을 수 있게 해주는 상대에게 끌린다는 뜻이에요. 진지함만 있는 관계보다는 진짜 재미와 자기표현의 여지가 있는 관계가 잘 맞는 편이에요.",
      wealth: "배우자궁(일지)에 재성(財星) 기운이 있어요 — 전통적으로 상대를 챙기고 베푸는 성향의 사랑을 가리키는 자리예요. 말보다는 구체적인 행동(시간, 노력, 물질적인 것)으로 애정을 표현하는 편이고, 다정함과 더불어 현실적이고 안정된 상대를 중요하게 여기는 편이에요.",
      officer: "배우자궁(일지)에 관성(官星) 기운이 있어요 — 전통적으로 관계 안에서 책임감·안정성과 가장 많이 연결되는 자리예요. 한번 관계를 시작하면 진지하게 임하는 편이고, 명확한 약속과 그걸 지키는 걸 중요하게 여기고, 예측 불가능한 사람보다는 믿음직하고 한결같은 상대에게 끌리는 편이에요.",
      resource: "배우자궁(일지)에 인성(印星) 기운이 있어요 — 전통적으로 편안함·정서적 지지와 연결되는 자리예요. 곁에 있는 것만으로 마음이 편해지고 다독여지는 느낌을 주는 상대에게 끌리는 편이고, 관계 안에서 안전하다고 느끼면 나도 그런 편안함을 상대에게 돌려주는 편이에요.",
      attraction: {
        companion: "배우자궁의 비겁(比劫) 기운은 상대에게 '편안함'으로 느껴지는 편이에요 — 격식 없이도 금방 가까워질 수 있을 것 같은 사람으로 비치고, 그 대등한 느낌이 이유를 설명하기도 전에 상대를 끌어당기는 경우가 많아요.",
        output: "배우자궁의 식상(食傷) 기운은 상대에게 '매력'으로 느껴지는 편이에요 — 표현력과 장난스러움이 인상에 오래 남고, 꾸밈없이 진짜 재밌는 사람이라는 인상이 상대를 끌어당기는 경우가 많아요.",
        wealth: "배우자궁의 재성(財星) 기운은 상대에게 '믿음직함'으로 느껴지는 편이에요 — 실제로 곁에서 챙겨주고 끝까지 해낼 사람이라는 인상을 주고, 화려함보다는 조용하고 든든한 매력으로 상대를 끌어당기는 경우가 많아요.",
        officer: "배우자궁의 관성(官星) 기운은 상대에게 '진지함'으로 느껴지는 편이에요 — 한번 마음을 정하면 사람도 관계도 진지하게 대한다는 인상을 주고, 그게 진짜를 찾는 사람에게는 나름의 매력으로 다가가는 경우가 많아요.",
        resource: "배우자궁의 인성(印星) 기운은 상대에게 '다정함'으로 느껴지는 편이에요 — 곁에 있으면 마음을 터놓기 편한 사람이라는 인상을 주고, 그렇게 안전하게 느껴지는 분위기가 상대를 끌어당기는 경우가 많아요.",
      },
      avoidType: {
        Wood: "목(木) 기운이 강한 상대는 페이스가 살짝 안 맞을 수 있어요 — 끊임없이 앞으로 나아가고 더 넓혀가려는 성향이, 지금 편안한 리듬과 부딪힐 수 있거든요. 절대적인 경고는 아니고, 유난히 페이스가 안 맞는 느낌이 계속되면 한번 짚어볼 만한 정도예요.",
        Fire: "화(火) 기운이 강한 상대는 페이스가 살짝 안 맞을 수 있어요 — 강한 텐션과 끊임없는 자극을 원하는 성향이, 지금 편안한 리듬과 부딪힐 수 있거든요. 절대적인 경고는 아니고, 유난히 페이스가 안 맞는 느낌이 계속되면 한번 짚어볼 만한 정도예요.",
        Earth: "토(土) 기운이 강한 상대는 페이스가 살짝 안 맞을 수 있어요 — 변화에 저항하는 강한 안정 지향이, 지금 편안한 리듬과 부딪힐 수 있거든요. 절대적인 경고는 아니고, 유난히 페이스가 안 맞는 느낌이 계속되면 한번 짚어볼 만한 정도예요.",
        Metal: "금(金) 기운이 강한 상대는 페이스가 살짝 안 맞을 수 있어요 — 직설적이고 정확함을 요구하는 성향이, 지금 편안한 리듬과 부딪힐 수 있거든요. 절대적인 경고는 아니고, 유난히 페이스가 안 맞는 느낌이 계속되면 한번 짚어볼 만한 정도예요.",
        Water: "수(水) 기운이 강한 상대는 페이스가 살짝 안 맞을 수 있어요 — 속을 잘 안 드러내고 직접적인 부딪힘을 피하는 성향이, 지금 편안한 리듬과 부딪힐 수 있거든요. 절대적인 경고는 아니고, 유난히 페이스가 안 맞는 느낌이 계속되면 한번 짚어볼 만한 정도예요.",
      },
      marriageTiming: {
        'strong-companion': "신강한 일간에 배우자궁 비겁 기운이면, 연애에서도 내 페이스를 지키는 편이라 재촉당한다고 서두르지 않아요. 때가 되면 그건 아마 외부 압박이 아니라 스스로 진짜 결정했기 때문일 거예요.",
        'strong-output': "신강한 일간에 배우자궁 식상 기운이면, 나답게 있을 수 있는 사람을 만났을 때 자연스럽게 관계가 무르익는 편이에요. 시기를 억지로 정할 필요 없이, 때가 되면 스스로 분명하게 느껴질 거예요.",
        'strong-wealth': "신강한 일간에 배우자궁 재성 기운이면, 감정뿐 아니라 현실적인 기반까지 탄탄하게 느껴질 때 비로소 준비됐다고 느끼는 편이에요 — 같이 살아가는 게 실제로 될 것 같다는 감각이요.",
        'strong-officer': "신강한 일간에 배우자궁 관성 기운이면, 한번 결심하면 진지하게 밀고 나가는 편이라 마음을 정한 뒤엔 크게 미적거리지 않아요. 그 결심이 올 때 믿고 따라가면 돼요.",
        'strong-resource': "신강한 일간에 배우자궁 인성 기운이면, 관계가 애쓰는 느낌이 아니라 진짜로 편안하게 느껴질 때 준비됐다고 느끼는 편이에요. 그 편안함이 꾸준히 이어진다면, 그게 믿을 만한 신호예요.",
        'weak-companion': "신약한 일간에 배우자궁 비겁 기운이면, 진짜 대등하다고 느껴지는 사람을 만났을 때 때가 무르익는 편이에요 — 서두르기보다 기다리는 쪽이 오히려 더 잘 맞아요.",
        'weak-output': "신약한 일간에 배우자궁 식상 기운이면, 나답게 있어도 괜찮다는 확신이 먼저 필요한 편이에요 — 그 편안함이 진짜로 자리 잡으면, 그게 진짜 신호예요.",
        'weak-officer': "신약한 일간에 배우자궁 관성 기운이면, 특정 시기보다는 안정적이고 믿을 수 있는 상대인지가 더 중요한 편이에요 — 그런 든든함을 만나면 때는 자연스럽게 느껴질 거예요.",
        'weak-wealth': "신약한 일간에 배우자궁 재성 기운이면, 특정 시기보다는 진짜로 보살핌받는다는 느낌이 더 중요한 편이에요 — 그 든든함이 꾸준히 이어지면 때는 자연스럽게 느껴질 거예요.",
        'weak-resource': "신약한 일간에 배우자궁 인성 기운이면, 진짜로 지지받는다는 느낌이 먼저 필요한 편이에요 — 그 기반이 탄탄해지면, 억지로 밀어붙이지 않아도 때는 저절로 풀려요.",
      },
    },
    // 일간 제외 나머지 7글자 중 재성(財星) 개수 기준 (없음/보통/많음)
    wealthStyle: {
      title: '당신의 재물 성향',
      subtopicTitles: {
        overall: '재물 총운',
        timing: '시기별 분석',
        spendingHabit: '소비 습관',
        luckyItem: '행운 아이템',
      },
      none: "사주에 재성(財星) 기운이 거의 없는 편이에요 — 돈이 삶의 첫 번째 동기는 아닌 타입일 확률이 높아요. 의미, 실력, 관계 같은 걸 먼저 좇고 돈은 그 결과로 따라오는 쪽에 가까워요. 나쁜 배치는 아니고, 다만 재정적인 욕심은 타고난 본능에 기대기보다 의식적으로 키워야 하는 부분이라는 뜻이에요.",
      moderate: "사주에 재성(財星) 기운이 적당히 있는 편이에요 — 돈이 신경 쓰이긴 하지만 모든 결정을 좌우할 정도는 아니에요. 큰 한 방보다는 재정적 안정을 선호하는 편이라, 꾸준히 저축하고 미리 계획하면서 천천히 안정을 쌓아가는 쪽에 가까워요.",
      many: "사주에 재성(財星) 기운이 풍부한 편이에요 — 돈과의 관계가 꽤 적극적인 타입일 확률이 높아요. 기회를 잘 알아채고, 그걸 추구하는 데도 거리낌이 없고, 수입을 늘리는 일이 애쓰지 않아도 자연스럽게 느껴질 거예요. 다만 그만큼 절제도 같이 갖추지 않으면 재정적으로 무리하게 확장할 위험도 있으니 주의하세요.",
      timing: {
        needGender: "위에서 성별을 입력하면 지금 어느 대운을 지나고 있는지, 그리고 그게 지금 재물 흐름에 어떤 의미인지 확인할 수 있어요.",
        good: "지금 흐르는 대운은 재물운이 좋은 흐름이에요 — 평소보다 마찰 없이 기회나 수입이 따라오는 시기예요. 이미 가진 걸 지키기만 하기보다, 조금 더 적극적으로 움직여봐도 좋은 흐름이에요.",
        neutral: "지금 흐르는 대운은 재물운이 무난하게 흘러가는 시기예요 — 극적인 변화는 없는 흐름이에요. 지금까지 해온 방식을 꾸준히 이어가는 게, 억지로 흐름을 바꾸려는 것보다 잘 맞아요.",
        caution: "지금 흐르는 대운은 재물 흐름에 조금 더 신경 써야 할 시기예요 — 뜻밖의 지출이나 부담이 생기기 쉬운 흐름이에요. 큰 지출이나 무리한 투자 결정은 이 흐름이 지나갈 때까지 미뤄두는 게 좋아요.",
      },
      spendingHabit: {
        none: "재성 기운이 적은 편이라, 소비보다는 신중하게 모으는 쪽에 가까워요. 충동구매보다는 계획적인 지출을 선호하고, 목돈이 쌓이는 걸 지켜보는 데서 오히려 더 큰 안정감을 느끼는 타입이에요.",
        moderate: "재성 기운이 적당한 편이라, 필요한 데는 쓰고 아낄 데는 아끼는 균형 잡힌 소비를 하는 편이에요. 극단적으로 아끼거나 펑펑 쓰기보다는, 상황에 맞게 조절하는 쪽에 가까워요.",
        many: "재성 기운이 풍부한 편이라, 버는 데도 쓰는 데도 적극적인 타입이에요. 경험이나 관계에 아낌없이 투자하는 편인데, 그만큼 계획적인 저축 습관을 따로 챙겨두면 돈이 손에서 너무 빨리 빠져나가는 걸 막을 수 있어요.",
      },
      luckyItem: {
        Wood: "전통 오행 상징에서 초록색 계열과 살아있는 식물은 목(木) 기운과 잘 맞는 조합으로 여겨져요 — 책상 위 작은 화분이나 자주 지나는 자리에 초록색 소품을 두는 게 대표적인 조합이에요.",
        Fire: "전통 오행 상징에서 빨간색 계열과 따뜻한 조명은 화(火) 기운과 잘 맞는 조합으로 여겨져요 — 캔들이나 따뜻한 색감의 조명, 작은 빨간색 소품이 대표적인 조합이에요.",
        Earth: "전통 오행 상징에서 노란색·황토색 계열과 도자기는 토(土) 기운과 잘 맞는 조합으로 여겨져요 — 도자기 머그컵이나 그릇, 작은 도자기 소품이 대표적인 조합이에요.",
        Metal: "전통 오행 상징에서 흰색 계열과 금속 액세서리는 금(金) 기운과 잘 맞는 조합으로 여겨져요 — 반지나 시계 같은 은색·흰색 계열의 심플한 액세서리가 대표적인 조합이에요.",
        Water: "전통 오행 상징에서 검정·남색 계열과 물 관련 아이템은 수(水) 기운과 잘 맞는 조합으로 여겨져요 — 텀블러나 작은 어항, 남색 계열 소품이 대표적인 조합이에요.",
      },
    },
    // 일간 제외 나머지 7글자 중 관성(官星) 개수 기준 (없음/보통/많음)
    careerStyle: {
      title: '당신의 커리어 적성',
      subtopicTitles: {
        overall: '직업 총운',
        talent: '재능',
        workplaceType: '잘 맞는 직장 유형',
        helpers: '도와줄 사람들',
      },
      none: "사주에 관성(官星) 기운이 거의 없는 편이에요 — 딱딱한 위계질서나 위에서 정해주는 구조 안에서는 실력이 잘 안 나오는 타입일 확률이 높아요. 프리랜서, 창업, 또는 재량이 많은 자리처럼 스스로 기준을 세우고 움직이는 독립적인 역할이 더 잘 맞아요.",
      moderate: "사주에 관성(官星) 기운이 적당히 있는 편이에요 — 체계 잡힌 조직 안에서도 큰 마찰 없이 잘 지내는 편이고, 필요하면 시스템을 따르는 것도 어렵지 않아 해요. 다만 어느 정도는 스스로 판단할 여지도 원하는 편이라, 구조와 자율성이 적당히 섞인 환경이 제일 잘 맞아요.",
      many: "사주에 관성(官星) 기운이 풍부한 편이에요 — 오히려 체계와 위계질서 안에서 진짜 실력이 나오는 타입일 확률이 높아요. 역할이 명확하고 지휘 체계가 잡힌 조직, 체계적인 시스템이 오히려 발목을 잡기보다 최고의 모습을 끌어내줘요. 이미 자리 잡힌 조직 안에서 리더십을 발휘하는 자리가 잘 맞을 확률이 높아요, 구조 자체를 거스르기보다 활용하는 쪽이 되니까요.",
      talent: {
        base: {
          Wood: "타고난 재능은 성장과 추진력 쪽에 가까워요 — 일을 새로 시작하고, 범위를 넓히고, 원래 요청받은 것보다 더 멀리 밀고 나가는 힘이요.",
          Fire: "타고난 재능은 존재감과 추진력 쪽에 가까워요 — 아이디어를 설득력 있게 제시하고, 분위기를 살리고, 아직 완성되지도 않은 걸로 사람들을 설레게 만드는 힘이요.",
          Earth: "타고난 재능은 신뢰와 끝까지 해내는 힘 쪽에 가까워요 — 프로젝트가 처음부터 끝까지 진짜로 믿고 맡길 수 있는 사람이 되는 능력이요.",
          Metal: "타고난 재능은 정교함과 기준 쪽에 가까워요 — 남들이 놓치는 걸 짚어내고, 적당히가 아니라 진짜 맞을 때까지 다듬어내는 힘이요.",
          Water: "타고난 재능은 유연함과 상황 파악 쪽에 가까워요 — 흐름이 뻔해지기 전에 방향을 감지하고, 그에 맞춰 접근 방식을 조율하는 힘이요.",
        },
        officerNote: {
          none: "사주에 구조가 약한 편이라, 이 재능은 누군가의 계획을 실행할 때보다 스스로 방향을 정할 때 제일 잘 드러나요.",
          moderate: "사주에 구조가 적당히 있는 편이라, 이 재능은 어느 정도 틀은 있지만 내 방식대로 움직일 여지도 있는 환경에서 제일 잘 드러나요.",
          many: "사주에 구조가 강한 편이라, 이 재능은 명확한 시스템 안에 있을 때 제일 잘 드러나요 — 혼자 뭔가를 쌓아 올리기보다, 그 안에서 위로 올라가려는 추진력으로 나타나요.",
        },
      },
      workplaceType: {
        none: "독립적인 성향의 일이 잘 맞을 확률이 높아요 — 프리랜서, 스스로 뭔가를 시작하는 창업, 또는 위계보다 스스로의 기준에 답하는 자리요.",
        moderate: "적당히 섞인 환경이 잘 맞을 확률이 높아요 — 무엇을 해야 할지는 분명하지만, 그걸 어떻게 할지는 내 방식대로 정할 수 있는 자리요.",
        many: "구조가 명확한 조직이 잘 맞을 확률이 높아요 — 역할이 뚜렷하고, 지휘 체계가 분명하고, 처음부터 만들어가기보다 그 안에서 제 몫을 하는 시스템이요.",
      },
      helpers: {
        yes: "사주에 천을귀인(天乙貴人)이 있어요 — 전통적으로 커리어에서 적절한 시기에 적절한 사람이 나타난다는 신호로 읽혀요. 멘토가 되어줄 사람이든, 타이밍 좋은 소개든, 결정적인 순간에 나를 대신 보증해줄 사람이든요.",
        no: "사주에 천을귀인(天乙貴人) 배치는 없어요 — 전통적으로 누군가의 도움에 기대기보다, 스스로 만든 기회로 나아가는 편이라는 뜻이에요. 그만큼 시간은 조금 더 걸릴 수 있어도, 얻는 성과는 더 온전히 내 것으로 느껴질 거예요.",
      },
    },
    // 사주에서 가장 약한(개수 최소) 오행 기준 — dominantElement 아님
    healthStyle: {
      title: '당신의 건강 기질',
      subtopicTitles: {
        overall: '건강 총운',
        injuryRisk: '부상 위험 부위',
        exercise: '잘 맞는 운동',
        diet: '식습관',
      },
      Wood: "사주에서 목(木) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 간·담을 조금 더 챙겨볼 부위로 가리켜요. 실질적으로는 스트레스 관리와 화를 쌓아두지 않는 게 중요하다는 뜻이에요, 목의 전통적인 영역이 정확히 '막힘없이 흐르는 것'이라서요.",
      Fire: "사주에서 화(火) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 심장·소장을 조금 더 챙겨볼 부위로 가리켜요. 실질적으로는 혈액순환과 충분한 진짜 휴식을 챙기는 게 중요하다는 뜻이에요, 화의 전통적인 영역이 몸 전체의 온기와 순환이라서요.",
      Earth: "사주에서 토(土) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 비장·위를 조금 더 챙겨볼 부위로 가리켜요. 실질적으로는 소화와 규칙적이고 여유 있는 식사를 챙기는 게 중요하다는 뜻이에요, 토의 전통적인 영역이 정확히 꾸준한 영양 섭취와 흡수라서요.",
      Metal: "사주에서 금(金) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 폐·대장을 조금 더 챙겨볼 부위로 가리켜요. 실질적으로는 호흡과 공기의 질을 챙기는 게 중요하다는 뜻이에요, 금의 전통적인 영역이 정확히 깨끗하게 받아들이고 필요 없는 건 놓아주는 거라서요.",
      Water: "사주에서 수(水) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 신장·방광을 조금 더 챙겨볼 부위로 가리켜요. 실질적으로는 몸을 따뜻하게 하고, 수분을 챙기고, 진짜 휴식을 취하는 게 중요하다는 뜻이에요, 수의 전통적인 영역이 정확히 깊은 비축과 회복이라서요.",
      injuryRisk: {
        Wood: "전통 오행-신체 대응론에서 목(木)은 근육과 힘줄을 주관해요 — 사주에서 목 기운이 약한 편이라, 준비운동 없이 갑자기 강도 높게 움직이거나 무리하게 스트레칭하는 건 조금 더 조심하는 게 좋아요.",
        Fire: "전통 오행-신체 대응론에서 화(火)는 혈액순환과 혈관을 주관해요 — 사주에서 화 기운이 약한 편이라, 화상 같은 열 관련 위험이나 운동 중 과열, 그리고 격한 활동 후 회복 시간을 충분히 갖는 데 조금 더 신경 쓰는 게 좋아요.",
        Earth: "전통 오행-신체 대응론에서 토(土)는 사지 근육과 소화기를 주관해요 — 사주에서 토 기운이 약한 편이라, 무릎에 부담 가는 동작이나 활동 전후 소화 불편은 조금 더 조심하는 게 좋아요.",
        Metal: "전통 오행-신체 대응론에서 금(金)은 피부·호흡기와 함께 관절과도 전통적으로 연결돼요 — 사주에서 금 기운이 약한 편이라, 어깨·손목의 반복 사용으로 인한 부담과 피부 건조는 조금 더 조심하는 게 좋아요.",
        Water: "전통 오행-신체 대응론에서 수(水)는 뼈와 관절을 주관해요 — 사주에서 수 기운이 약한 편이라, 특히 냉기나 과로로 인한 허리·무릎 부담은 조금 더 조심하는 게 좋아요.",
      },
      exercise: {
        Wood: "가벼운 유산소 운동과 스트레칭이 잘 맞는 편이에요 — 조깅이나 자전거, 제대로 된 스트레칭 루틴이 목 기운이 필요로 하는 막힘없는 움직임을 채워줘요.",
        Fire: "고강도 인터벌 트레이닝이 잘 맞는 편이에요 — 짧고 강렬하게 몰아치는 운동이 느리고 꾸준한 것보다 화 기운의 리듬과 더 잘 맞아요.",
        Earth: "근력 운동이 잘 맞는 편이에요 — 꾸준하고 단단한 근육을 만드는 게 토 기운이 선호하는 안정감과 잘 맞아요.",
        Metal: "규칙적이고 체계적인 루틴이 잘 맞는 편이에요 — 매번 같은 스케줄, 같은 세트, 같은 절제가 즉흥적인 것보다 금 기운의 질서 선호와 잘 맞아요.",
        Water: "수영과 유연성 운동이 잘 맞는 편이에요 — 물 안팎에서 하는 운동이나 천천히 신경 써서 하는 스트레칭이, 유동적이고 적응하는 움직임을 선호하는 수 기운과 잘 맞아요.",
      },
      diet: {
        Wood: "전통 오행-음식 대응론에서 신맛과 초록빛 음식은 목(木)과 연결돼요 — 잎채소, 감귤류, 가볍게 발효된 음식이 전통적으로 챙기면 좋은 조합이에요.",
        Fire: "전통 오행-음식 대응론에서 쓴맛과 붉은빛 음식은 화(火)와 연결돼요 — 쌉싸름한 채소, 토마토, 붉은 과일이 전통적으로 챙기면 좋은 조합이에요.",
        Earth: "전통 오행-음식 대응론에서 단맛과 노란빛 음식은 토(土)와 연결돼요 — 호박, 고구마, 곡물류가 전통적으로 챙기면 좋은 조합이에요(설탕이 아니라 자연스러운 단맛 기준이에요).",
        Metal: "전통 오행-음식 대응론에서 매운맛과 흰빛 음식은 금(金)과 연결돼요 — 마늘, 양파, 무, 흰 과육의 과일이 전통적으로 챙기면 좋은 조합이에요.",
        Water: "전통 오행-음식 대응론에서 짠맛과 검은빛 음식은 수(水)와 연결돼요 — 해조류, 검은콩, 짙은 잎채소가 전통적으로 챙기면 좋은 조합이에요.",
      },
    },
  },
};

export function getSajuProfile(lang, dominantElement) {
  return (sajuProfileTemplates[lang] || sajuProfileTemplates.en).dominant[dominantElement];
}

export function getDayMasterLine(lang, dayGanElement) {
  return (sajuProfileTemplates[lang] || sajuProfileTemplates.en).dayMaster[dayGanElement];
}

function countTier(count) {
  if (count === 0) return 'none';
  if (count <= 2) return 'moderate';
  return 'many';
}

/**
 * Looks up one of the four domain sections, each keyed by a different
 * piece of the chart so the four readings don't all collapse into the
 * same "dominant element + strength" message:
 *   - romanceStyle: Day Branch (일지, "spouse palace") Ten God category
 *   - wealthStyle:  count of Wealth Star (財星) characters, bucketed
 *   - careerStyle:  count of Officer Star (官星) characters, bucketed
 *   - healthStyle:  the chart's weakest Five Element (not the dominant one)
 * Returns { title, text }.
 */
export function getDomainInsight(lang, domain, saju) {
  const bank = (sajuProfileTemplates[lang] || sajuProfileTemplates.en)[domain];
  let key;
  if (domain === 'romanceStyle') {
    key = getDayBranchTenGodCategory(saju);
  } else if (domain === 'wealthStyle') {
    key = countTier(getTenGodCategoryCounts(saju).wealth);
  } else if (domain === 'careerStyle') {
    key = countTier(getTenGodCategoryCounts(saju).officer);
  } else if (domain === 'healthStyle') {
    key = getWeakestElement(saju);
  }
  return { title: bank.title, text: bank[key] };
}

// Traditional reading for "is this a wealth-favorable period": the period
// most favorable for wealth is the one where the Wealth Star (財星, "what
// my dominant element overcomes") is active. Resource/Companion periods
// (the period generates me, or matches me) are steady but not wealth-active;
// Output/Officer periods (I generate the period, or it overcomes me) tend
// to mean spending or pressure rather than accumulation.
const WEALTH_TIMING_TIER = {
  iOvercomeOther: 'good',
  same: 'neutral',
  otherGeneratesMe: 'neutral',
  iGenerateOther: 'caution',
  otherOvercomesMe: 'caution',
};

/**
 * Expands a domain's single "총운" (getDomainInsight above) into a 4-item
 * chapter: the same overall reading, plus 3 subtopics unique to that domain.
 * `daeun` (from getDaeun in utils/saju.js) is only needed for wealthStyle's
 * timing subtopic — every other subtopic is derivable from `saju` alone,
 * same as the overall reading. Returns { title, sections: [{ title, text
 * }, ...] } — 4 entries, `title` on each entry drawn from the domain's own
 * `subtopicTitles` bank (kept alongside the body copy, same convention as
 * every other title in this file).
 */
export function getDomainChapter(lang, domain, saju, daeun = null) {
  const bank = (sajuProfileTemplates[lang] || sajuProfileTemplates.en)[domain];
  const overall = getDomainInsight(lang, domain, saju);
  const titled = (key, text) => ({ title: bank.subtopicTitles[key], text });

  const sections = [titled('overall', overall.text)];

  if (domain === 'romanceStyle') {
    const spouseCategory = getDayBranchTenGodCategory(saju);
    const avoidElement = getOvercomingElement(saju.dominantElement);
    sections.push(
      titled('attraction', bank.attraction[spouseCategory]),
      titled('avoidType', bank.avoidType[avoidElement]),
      titled('marriageTiming', bank.marriageTiming[`${saju.dayGanStrength}-${spouseCategory}`]),
    );
  } else if (domain === 'wealthStyle') {
    const wealthCount = getTenGodCategoryCounts(saju).wealth;
    const period = daeun ? getCurrentDaeunPeriod(daeun) : null;
    const timingText = !daeun
      ? bank.timing.needGender
      : period
        ? bank.timing[WEALTH_TIMING_TIER[getElementRelation(saju.dominantElement, period.ganElement)]]
        : bank.timing.neutral;
    sections.push(
      titled('timing', timingText),
      titled('spendingHabit', bank.spendingHabit[countTier(wealthCount)]),
      titled('luckyItem', bank.luckyItem[saju.dominantElement]),
    );
  } else if (domain === 'careerStyle') {
    const officerCount = getTenGodCategoryCounts(saju).officer;
    const officerTier = countTier(officerCount);
    const nobleman = getNobleman(saju, lang);
    sections.push(
      titled('talent', `${bank.talent.base[saju.dominantElement]} ${bank.talent.officerNote[officerTier]}`),
      titled('workplaceType', bank.workplaceType[officerTier]),
      titled('helpers', bank.helpers[nobleman.hasNobleman ? 'yes' : 'no']),
    );
  } else if (domain === 'healthStyle') {
    const weakest = getWeakestElement(saju);
    sections.push(
      titled('injuryRisk', bank.injuryRisk[weakest]),
      titled('exercise', bank.exercise[weakest]),
      titled('diet', bank.diet[weakest]),
    );
  }

  return { title: bank.title, sections };
}
