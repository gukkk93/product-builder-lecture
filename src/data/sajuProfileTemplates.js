// Content about the saju chart itself — personality/temperament — as
// opposed to fortuneTemplates.js, which is entirely about "today" relative
// to the chart. Nothing in this file changes based on the date.
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
    romanceStyle: {
      title: 'Your Love Style',
      Wood: {
        strong: "In relationships, Wood-strong energy shows up as someone who initiates, plans the next date, and pushes things forward before the other person even realizes there's a decision to make. You fall for growth and momentum — a partner who's also going somewhere tends to hold your interest longer than one who's content to stay still.",
        weak: "Your Wood energy in relationships leans quieter — less about chasing and more about steady, patient interest that builds slowly rather than all at once. You're drawn to partners who give you room to grow at your own pace instead of pulling you along faster than feels natural.",
      },
      Fire: {
        strong: "In relationships, Fire-strong energy runs hot and expressive — you fall fast, say what you feel out loud, and want a partner who matches your intensity rather than politely tolerating it. The challenge is pacing that spark so it doesn't burn through the relationship before it's had time to build a real foundation.",
        weak: "Your Fire energy in relationships shows up as warmth rather than intensity — less about grand gestures and more about steady, genuine care that builds over time. You're drawn to partners who notice the quieter signs of affection, not just the loud ones.",
      },
      Earth: {
        strong: "In relationships, Earth-strong energy makes you the reliable one — showing up consistently, remembering the small things, being the partner people describe as 'always there.' The thing to watch is making sure you're getting cared for in return, not just doing all the caretaking yourself.",
        weak: "Your Earth energy in relationships is steady but a little more understated — you're not the flashiest partner, but you're consistent, and that consistency tends to matter more over time than people initially give it credit for.",
      },
      Metal: {
        strong: "In relationships, Metal-strong energy means high standards and real honesty — you'd rather have an uncomfortable true conversation than a comfortable dishonest one. Partners who can handle direct feedback without taking it personally tend to bring out the best version of this dynamic.",
        weak: "Your Metal energy in relationships shows up as quiet discernment rather than sharp critique — you notice what matters and let the small stuff go, which makes you an easier partner to be direct with than you might expect.",
      },
      Water: {
        strong: "In relationships, Water-strong energy makes you intuitive and adaptable — you read your partner's mood before they say anything and adjust accordingly, sometimes without either of you fully realizing it. The risk is adapting so much that your own needs quietly go unspoken.",
        weak: "Your Water energy in relationships is calmer and less reactive — you don't need constant reassurance, and you tend to give partners real space to be themselves, which some people find more relaxing than they expected.",
      },
    },
    wealthStyle: {
      title: 'Your Money Style',
      Wood: {
        strong: "With money, Wood-strong energy tends to invest in growth — new ventures, self-improvement, things that compound over time rather than sitting still. The risk is spreading resources across too many growing things at once instead of letting a few actually mature.",
        weak: "Your Wood energy around money is more cautious about growth — you'd rather grow savings slowly and steadily than chase a fast return, which tends to serve you well over a long enough timeline.",
      },
      Fire: {
        strong: "With money, Fire-strong energy tends to spend in bursts — generous, spontaneous, sometimes impulsive, especially on experiences and people you care about. The lesson here is building in a little structure so spending highs don't get followed by real financial crashes.",
        weak: "Your Fire energy around money shows up as occasional, considered generosity rather than frequent impulse spending — you enjoy treating yourself and others, just not so often that it derails your bigger plans.",
      },
      Earth: {
        strong: "With money, Earth-strong energy is naturally steady — saving consistently, planning ahead, being the reliable one who actually has an emergency fund. The thing to watch is being so cautious that you miss chances worth taking a calculated risk on.",
        weak: "Your Earth energy around money is stable but a little more flexible — you save consistently without being rigid about it, which tends to leave room for both security and occasional spontaneity.",
      },
      Metal: {
        strong: "With money, Metal-strong energy means precision — budgets, spreadsheets, knowing exactly where every dollar goes. That discipline serves you well, as long as it doesn't tip into anxiety over small, low-stakes purchases.",
        weak: "Your Metal energy around money is discerning without being rigid — you know good value when you see it and can spot a bad deal quickly, without needing to track every transaction to the cent.",
      },
      Water: {
        strong: "With money, Water-strong energy is adaptable — you're comfortable adjusting your financial plans as circumstances shift, and you tend to sense opportunities before they're obvious to everyone else. The risk is staying so flexible that you never commit to a plan long enough to see it through.",
        weak: "Your Water energy around money is calm and unhurried — you don't panic over short-term dips, and you tend to trust that things even out over time, which is a genuinely useful trait for long-term financial health.",
      },
    },
    careerStyle: {
      title: 'Your Career Fit',
      Wood: {
        strong: "At work, Wood-strong energy makes you a natural starter — pitching new ideas, pushing projects forward, rarely content with the status quo. You do best in roles with room to grow and build, and can feel stifled fast in anything too static or repetitive.",
        weak: "Your Wood energy at work is steadier growth rather than constant pushing — you build skills and responsibility gradually, which tends to make your progress more sustainable than the people sprinting past you early on.",
      },
      Fire: {
        strong: "At work, Fire-strong energy makes you the one who energizes a room — presenting, pitching, rallying a team around an idea. You do best in roles that involve visibility and people, and can lose momentum fast in isolated, low-feedback work.",
        weak: "Your Fire energy at work shows up as quiet enthusiasm rather than the loudest voice in the room — you care just as much, you just don't need center stage to do good work.",
      },
      Earth: {
        strong: "At work, Earth-strong energy makes you the person a team actually relies on — dependable, organized, the one who remembers what everyone else forgot. You do best in roles that reward consistency, and should watch for being handed everyone else's responsibilities by default.",
        weak: "Your Earth energy at work is reliable without being the designated fixer of everything — you show up consistently, which coworkers notice and value, without carrying more than your fair share.",
      },
      Metal: {
        strong: "At work, Metal-strong energy makes you the quality control — the one who catches the error before it ships, who holds the standard even when it's inconvenient. You do best in roles that value precision, and should watch for burning out on things that don't actually need to be perfect.",
        weak: "Your Metal energy at work is discerning rather than exacting — you know good work from sloppy work, and you can say so clearly, without needing every detail to be flawless.",
      },
      Water: {
        strong: "At work, Water-strong energy makes you adaptable under pressure — good at reading a room, adjusting a pitch on the fly, navigating office politics without much friction. You do best in roles with variety, and can feel boxed in by rigid, unchanging processes.",
        weak: "Your Water energy at work is calm under pressure without needing constant change — you adapt when you need to, but you're just as comfortable with a steady, predictable routine.",
      },
    },
    healthStyle: {
      title: 'Your Health Tendencies',
      Wood: {
        strong: "Physically, Wood-strong energy tends to run on momentum — you feel best with regular movement and can get restless or irritable if you're too sedentary for too long. Stretching and stress around tension (shoulders, jaw) are worth paying attention to.",
        weak: "Your Wood energy physically leans gentler — steady, moderate movement tends to serve you better than intense bursts of activity, and consistency matters more here than intensity.",
      },
      Fire: {
        strong: "Physically, Fire-strong energy runs hot — you may notice your energy spikes and crashes more than most, and sleep and heart-rate related habits (caffeine, screen time before bed) are worth watching more closely than average.",
        weak: "Your Fire energy physically is steadier than intense — you don't run as hot, but making sure you're getting enough genuine rest and warmth (both literal and social) still matters for keeping your energy even.",
      },
      Earth: {
        strong: "Physically, Earth-strong energy tends toward steady digestion and stable energy, but can be prone to carrying stress in the stomach and taking on physical tension from constantly supporting others. Regular, unhurried meals tend to serve you well.",
        weak: "Your Earth energy physically is generally stable, with digestion and energy levels that respond well to routine — consistent meal times tend to matter more for you than what specifically you're eating.",
      },
      Metal: {
        strong: "Physically, Metal-strong energy is often linked to the lungs and skin — breathing exercises and attention to air quality can matter more for you than for most, and grief or sadness may show up physically more than emotionally at first.",
        weak: "Your Metal energy physically is generally resilient, though it's still worth paying attention to breathing and posture, especially during high-stress periods where tension tends to quietly build.",
      },
      Water: {
        strong: "Physically, Water-strong energy is often linked to the kidneys and lower back — staying warm, staying hydrated, and getting real rest (not just sleep, but actual downtime) tend to matter more for you than for most.",
        weak: "Your Water energy physically is adaptable, though it's worth watching for low energy dips when you're running on too little rest — recovery matters more for you than pushing through.",
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
    romanceStyle: {
      title: '당신의 연애 스타일',
      Wood: {
        strong: "연애에서 목의 기운이 강하면 먼저 다가가고, 다음 데이트를 계획하고, 상대가 뭔가 결정해야 한다는 걸 눈치채기도 전에 관계를 앞으로 밀고 나가는 편이에요. 성장과 추진력에 끌리는 편이라, 가만히 머무는 사람보다 같이 어딘가로 나아가는 상대에게 더 오래 마음이 가요.",
        weak: "연애에서 목의 기운이 약하면 좀 더 조용한 쪽이에요 — 적극적으로 쫓기보다는, 한 번에 확 타오르기보다 천천히 쌓여가는 꾸준하고 인내심 있는 관심에 가까워요. 빠르게 끌고 가기보다 내 페이스대로 성장할 여지를 주는 상대에게 끌려요.",
      },
      Fire: {
        strong: "연애에서 화의 기운이 강하면 뜨겁고 표현이 확실한 편이에요 — 빠르게 빠지고, 느끼는 걸 소리 내서 말하고, 그 강렬함을 그냥 받아주는 상대보다 나만큼 맞춰주는 상대를 원해요. 관건은 그 불꽃이 진짜 기반을 다질 시간도 없이 관계를 태워버리지 않게 속도를 조절하는 거예요.",
        weak: "연애에서 화의 기운이 약하면 강렬함보다는 따뜻함으로 드러나요 — 화려한 제스처보다는 시간이 지나며 쌓이는 꾸준하고 진심 어린 배려에 가까워요. 요란한 애정 표현보다 조용한 신호를 알아채주는 상대에게 끌려요.",
      },
      Earth: {
        strong: "연애에서 토의 기운이 강하면 든든한 쪽이에요 — 꾸준히 곁에 있고, 작은 것까지 기억하고, '항상 그 자리에 있는 사람'으로 불릴 확률이 높아요. 신경 써야 할 건, 내가 다 챙기기만 하고 정작 나는 잘 받고 있는지 확인하는 거예요.",
        weak: "연애에서 토의 기운이 약하면 꾸준하지만 좀 더 은근한 쪽이에요 — 제일 화려한 상대는 아니어도 일관성이 있고, 그 꾸준함은 시간이 지날수록 처음 생각했던 것보다 훨씬 큰 의미를 갖게 돼요.",
      },
      Metal: {
        strong: "연애에서 금의 기운이 강하면 기준이 높고 솔직한 편이에요 — 편안한 거짓말보다 불편한 진실을 택하는 쪽이죠. 직접적인 피드백을 감정적으로 안 받아들이는 상대를 만나면 이 관계가 제일 잘 풀려요.",
        weak: "연애에서 금의 기운이 약하면 날카로운 지적보다는 조용한 분별력으로 드러나요 — 중요한 건 알아채고 사소한 건 넘어가는 편이라, 생각보다 훨씬 솔직하게 다가가도 괜찮은 상대예요.",
      },
      Water: {
        strong: "연애에서 수의 기운이 강하면 직관적이고 유연한 편이에요 — 상대가 말하기도 전에 기분을 읽고 거기에 맞추는데, 가끔은 둘 다 눈치 못 챌 정도로 자연스럽게요. 위험한 건 너무 맞추기만 해서 정작 내 필요는 조용히 묻혀버리는 거예요.",
        weak: "연애에서 수의 기운이 약하면 더 차분하고 덜 반응적인 편이에요 — 계속되는 확인을 필요로 하지 않고, 상대에게 자기답게 있을 진짜 여지를 주는 편이라, 생각보다 훨씬 편안한 상대로 느껴질 수 있어요.",
      },
    },
    wealthStyle: {
      title: '당신의 재물 성향',
      Wood: {
        strong: "돈 앞에서 목의 기운이 강하면 성장에 투자하는 편이에요 — 새로운 시도, 자기계발, 가만히 있기보다 시간이 지나며 불어나는 것들에요. 위험한 건 자라나는 여러 가지에 한꺼번에 자원을 흩뿌리다가 정작 하나도 제대로 무르익히지 못하는 거예요.",
        weak: "돈 앞에서 목의 기운이 약하면 성장에 좀 더 신중한 편이에요 — 빠른 수익을 좇기보다 저축을 천천히 꾸준히 늘려가는 쪽을 선호하고, 이 방식은 충분히 긴 시간이 지나면 대체로 잘 맞아요.",
      },
      Fire: {
        strong: "돈 앞에서 화의 기운이 강하면 씀씀이가 확 몰아치는 편이에요 — 관대하고, 즉흥적이고, 가끔은 충동적이에요, 특히 경험이나 아끼는 사람에게요. 여기서 배울 점은 지출이 확 늘어난 다음 진짜 재정적인 위기가 오지 않게 약간의 구조를 만들어두는 거예요.",
        weak: "돈 앞에서 화의 기운이 약하면 자주 충동구매하기보다는, 가끔씩 마음먹고 베푸는 쪽에 가까워요 — 나와 남에게 선물하는 걸 즐기지만, 큰 계획을 흔들 정도로 자주는 아니에요.",
      },
      Earth: {
        strong: "돈 앞에서 토의 기운이 강하면 원래부터 안정적인 편이에요 — 꾸준히 저축하고, 미리 계획하고, 진짜 비상금이 있는 든든한 사람이죠. 신경 써야 할 건 너무 조심스러운 나머지 계산된 위험을 감수할 가치가 있는 기회까지 놓치는 거예요.",
        weak: "돈 앞에서 토의 기운이 약하면 안정적이면서도 조금 더 유연한 편이에요 — 딱딱하지 않게 꾸준히 저축하는 편이라, 안정감과 가끔의 즉흥적인 소비 둘 다에 여지를 남겨둬요.",
      },
      Metal: {
        strong: "돈 앞에서 금의 기운이 강하면 꼼꼼함이 특징이에요 — 예산, 가계부, 돈 한 푼이 어디로 가는지 정확히 아는 편이죠. 그 절제력은 좋은 자산이지만, 사소하고 별로 중요하지 않은 지출까지 불안해하는 쪽으로 흐르지 않게 조심하세요.",
        weak: "돈 앞에서 금의 기운이 약하면 딱딱하지 않으면서도 분별력 있는 편이에요 — 좋은 가치를 알아보고 나쁜 거래를 빠르게 알아채지만, 모든 지출을 원 단위까지 기록할 필요는 없어요.",
      },
      Water: {
        strong: "돈 앞에서 수의 기운이 강하면 유연한 편이에요 — 상황이 바뀌면 재정 계획도 편하게 조정하고, 다른 사람들보다 먼저 기회를 감지하는 경향이 있어요. 위험한 건 너무 유연하기만 해서 하나의 계획을 끝까지 밀고 나가는 걸 못 해보는 거예요.",
        weak: "돈 앞에서 수의 기운이 약하면 차분하고 서두르지 않는 편이에요 — 단기적인 하락에 당황하지 않고, 시간이 지나면 결국 평균으로 돌아온다고 믿는 편이라, 이건 장기적인 재정 건강에 진짜 유용한 성향이에요.",
      },
    },
    careerStyle: {
      title: '당신의 커리어 적성',
      Wood: {
        strong: "일에서 목의 기운이 강하면 타고난 시작하는 사람이에요 — 새로운 아이디어를 제안하고, 프로젝트를 앞으로 밀고, 현재 상태에 만족하는 경우가 드물어요. 성장하고 쌓아나갈 여지가 있는 역할에서 제일 잘하고, 너무 정적이거나 반복적인 일에서는 금방 답답함을 느껴요.",
        weak: "일에서 목의 기운이 약하면 끊임없이 밀어붙이기보다 꾸준한 성장 쪽이에요 — 실력과 책임을 천천히 쌓아가는 편이라, 초반에 앞서 나가는 사람들보다 오히려 더 지속 가능한 성장을 하게 돼요.",
      },
      Fire: {
        strong: "일에서 화의 기운이 강하면 공간에 활기를 불어넣는 사람이에요 — 발표하고, 제안하고, 팀을 아이디어 중심으로 결집시키는 쪽이죠. 사람들과 눈에 띄는 역할에서 제일 잘하고, 고립되고 피드백이 별로 없는 일에서는 빠르게 동력을 잃어요.",
        weak: "일에서 화의 기운이 약하면 방 안에서 제일 목소리 큰 사람이기보다 조용한 열정으로 드러나요 — 관심은 똑같이 크지만, 좋은 결과를 내는 데 굳이 스포트라이트가 필요하진 않아요.",
      },
      Earth: {
        strong: "일에서 토의 기운이 강하면 팀이 진짜로 의지하는 사람이에요 — 믿음직하고, 정리를 잘하고, 다른 사람이 잊은 걸 기억하는 사람이죠. 꾸준함을 보상해주는 역할에서 제일 잘하고, 다른 사람들 몫까지 은근슬쩍 떠맡게 되는 건 아닌지 조심해야 해요.",
        weak: "일에서 토의 기운이 약하면 모든 걸 고쳐주는 담당자가 되지 않으면서도 믿음직한 편이에요 — 꾸준히 제 몫을 해내는 게 동료들 눈에 띄고 인정받는 편이라, 필요 이상으로 짊어지지 않아도 돼요.",
      },
      Metal: {
        strong: "일에서 금의 기운이 강하면 품질 관리 담당이에요 — 나가기 전에 오류를 잡아내고, 불편해도 기준을 지키는 사람이죠. 정교함을 중요시하는 역할에서 제일 잘하고, 굳이 완벽할 필요 없는 것까지 완벽하게 만들려다 지치지 않게 조심해야 해요.",
        weak: "일에서 금의 기운이 약하면 지나치게 까다롭기보다 분별력 있는 편이에요 — 좋은 결과물과 대충 한 결과물을 구분할 줄 알고, 모든 디테일이 완벽할 필요 없이도 그걸 명확하게 말할 수 있어요.",
      },
      Water: {
        strong: "일에서 수의 기운이 강하면 압박 속에서도 유연한 편이에요 — 분위기를 잘 읽고, 즉석에서 제안을 조정하고, 큰 마찰 없이 사내 정치를 헤쳐 나가요. 다양성이 있는 역할에서 제일 잘하고, 딱딱하고 안 바뀌는 프로세스에서는 갇힌 느낌을 받을 수 있어요.",
        weak: "일에서 수의 기운이 약하면 계속되는 변화 없이도 압박 속에서 차분한 편이에요 — 필요할 땐 적응하지만, 꾸준하고 예측 가능한 루틴도 똑같이 편하게 느껴요.",
      },
    },
    healthStyle: {
      title: '당신의 건강 기질',
      Wood: {
        strong: "몸으로는 목의 기운이 강하면 추진력으로 움직이는 편이에요 — 규칙적으로 움직여야 컨디션이 좋고, 너무 오래 가만히 있으면 답답하거나 예민해질 수 있어요. 스트레칭과 긴장(어깨, 턱)에 신경 쓰는 게 좋아요.",
        weak: "몸으로는 목의 기운이 약하면 좀 더 부드러운 쪽이에요 — 강렬하게 몰아치는 운동보다 꾸준하고 적당한 움직임이 더 잘 맞고, 여기선 강도보다 꾸준함이 더 중요해요.",
      },
      Fire: {
        strong: "몸으로는 화의 기운이 강하면 열이 많은 편이에요 — 에너지가 확 올랐다가 확 떨어지는 걸 남들보다 자주 느낄 수 있고, 수면이나 심박과 관련된 습관(카페인, 자기 전 스크린 시간)을 평소보다 더 신경 써야 해요.",
        weak: "몸으로는 화의 기운이 약하면 강렬하기보다 꾸준한 쪽이에요 — 열이 많이 오르진 않지만, 그래도 충분한 휴식과 온기(몸도, 관계도)를 챙기는 게 에너지를 고르게 유지하는 데 여전히 중요해요.",
      },
      Earth: {
        strong: "몸으로는 토의 기운이 강하면 소화와 에너지가 안정적인 편이지만, 스트레스가 위장으로 가고 남을 계속 지지하다 보니 신체적 긴장을 떠안기 쉬워요. 규칙적이고 여유 있는 식사가 잘 맞아요.",
        weak: "몸으로는 토의 기운이 약하면 전반적으로 안정적인 편이라, 소화와 에너지 수준이 규칙적인 생활에 잘 반응해요 — 뭘 먹는지보다 언제 먹는지가 더 중요한 편이에요.",
      },
      Metal: {
        strong: "몸으로는 금의 기운이 강하면 폐와 피부와 자주 연결돼요 — 호흡 운동과 공기 질에 신경 쓰는 게 남들보다 더 중요할 수 있고, 슬픔이나 상실감이 감정보다 몸으로 먼저 나타날 수 있어요.",
        weak: "몸으로는 금의 기운이 약하면 전반적으로 회복력이 좋은 편이지만, 특히 스트레스가 많은 시기엔 호흡과 자세에 신경 쓰는 게 좋아요, 그럴 때 조용히 긴장이 쌓이는 경향이 있거든요.",
      },
      Water: {
        strong: "몸으로는 수의 기운이 강하면 신장과 허리 쪽과 자주 연결돼요 — 몸을 따뜻하게 하고, 수분을 챙기고, 잠만이 아니라 진짜 쉬는 시간(다운타임)을 갖는 게 남들보다 더 중요할 수 있어요.",
        weak: "몸으로는 수의 기운이 약하면 적응력이 좋은 편이지만, 휴식이 너무 부족할 때 에너지가 뚝 떨어지는 걸 조심하는 게 좋아요 — 억지로 버티는 것보다 회복이 더 중요해요.",
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

/**
 * Looks up one of the four domain sections (romanceStyle/wealthStyle/
 * careerStyle/healthStyle), keyed by dominant element and day-master
 * strength — no new calculation needed, both already come from
 * calculateSaju(). Returns { title, text }.
 */
export function getDomainInsight(lang, domain, element, strength) {
  const bank = (sajuProfileTemplates[lang] || sajuProfileTemplates.en)[domain];
  return { title: bank.title, text: bank[element][strength] };
}
