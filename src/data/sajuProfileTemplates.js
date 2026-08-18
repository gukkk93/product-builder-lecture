// Content about the saju chart itself — personality/temperament — as
// opposed to fortuneTemplates.js, which is entirely about "today" relative
// to the chart. Nothing in this file changes based on the date.
import { getTenGodCategoryCounts, getDayBranchTenGodCategory, getWeakestElement } from '../utils/saju';

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
      companion: "Your spouse palace (일지, the Day Branch — traditionally the chart's marker for how you experience a partner) carries Companion energy. This tends to mean you look for a partner who feels like an equal — someone you relate to easily, almost like a close friend first, romance second. You likely value a relationship where both people show up as themselves without one person outshining the other.",
      output: "Your spouse palace (일지, the Day Branch) carries Output energy — traditionally linked to expression and creativity. This tends to mean you're drawn to a partner who lets you be genuinely expressive, playful, or unguarded, and relationships work best for you when there's room for real fun and self-expression, not just seriousness.",
      wealth: "Your spouse palace (일지, the Day Branch) carries Wealth energy, which traditionally points to a partner-oriented, providing kind of love — you likely show affection through concrete care (time, effort, resources) rather than just words, and you tend to value a partner who's grounded and practical alongside being warm.",
      officer: "Your spouse palace (일지, the Day Branch) carries Officer energy — traditionally the placement most associated with commitment and structure in a relationship. This tends to mean you take relationships seriously once you're in one, value clear expectations and follow-through, and are drawn to a partner who feels dependable and consistent rather than unpredictable.",
      resource: "Your spouse palace (일지, the Day Branch) carries Resource energy, traditionally linked to comfort and emotional support. This tends to mean you're drawn to a partner who feels nurturing or steadying to be around — someone who makes things feel easier just by being there — and you likely give that same quality back once you feel safe in a relationship.",
    },
    // Based on how many of the chart's 7 non-day-gan characters fall into
    // the Wealth Star (財星) Ten God category — a direct count, not a
    // strength reading, so "many" genuinely means several Wealth-category
    // characters, not just a strong dominant element. See
    // getTenGodCategoryCounts in utils/saju.js.
    wealthStyle: {
      title: 'Your Money Style',
      none: "There's little to no Wealth Star (財星) energy in your chart, which tends to mean money just isn't your primary motivator — you're more likely to chase meaning, mastery, or relationships first and let income follow as a side effect. This isn't a bad placement; it just means financial ambition probably needs to be built deliberately rather than relied on as a natural drive, since it's not where your instincts already point.",
      moderate: "Your chart carries a moderate amount of Wealth Star (財星) energy — enough that money matters to you, but not so much that it dominates your decisions. You likely lean toward financial stability over big swings: steady saving, planning ahead, and building security gradually rather than chasing a windfall.",
      many: "Your chart is rich in Wealth Star (財星) energy, which tends to show up as a genuinely active relationship with money — you notice opportunities, you're comfortable pursuing them, and building income is likely to feel natural rather than effortful. Worth watching: this same drive can tip into overextending financially if it isn't paired with equally strong discipline.",
    },
    // Based on how many of the chart's 7 non-day-gan characters fall into
    // the Officer Star (官星) Ten God category — same counting method as
    // wealthStyle above, just a different category.
    careerStyle: {
      title: 'Your Career Fit',
      none: "There's little to no Officer Star (官星) energy in your chart, which tends to mean rigid hierarchy and top-down structure aren't where you do your best work. You're likely better suited to independent, self-directed roles — freelance, entrepreneurship, or a job with real autonomy — where you set your own standards rather than answering to someone else's.",
      moderate: "Your chart carries a moderate amount of Officer Star (官星) energy — you can work within a structured organization without much friction, and you're comfortable following a system when it makes sense, while still wanting some room to operate on your own judgment. A balanced mix of structure and autonomy tends to suit you best.",
      many: "Your chart is rich in Officer Star (官星) energy, which tends to mean you actually thrive inside structure and hierarchy — clear roles, defined chains of command, and organizational systems tend to bring out your best rather than holding you back. You're likely well-suited to leadership within an established institution, where the structure itself becomes something you can work with rather than around.",
    },
    // Based on the chart's weakest Five Element (lowest character count),
    // read through the traditional Five Element-organ correspondence —
    // deliberately the weakest element, not the dominant one, since that's
    // the system traditionally worth paying closer attention to. See
    // getWeakestElement in utils/saju.js.
    healthStyle: {
      title: 'Your Health Tendencies',
      Wood: "Wood is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the liver and gallbladder as the system worth paying a little extra attention to. Practically, that often means being mindful of stress management and not bottling up frustration, since Wood's traditional domain is exactly that — smooth, unblocked flow.",
      Fire: "Fire is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the heart and small intestine as the system worth paying a little extra attention to. Practically, that often means being mindful of circulation and getting enough genuine rest, since Fire's traditional domain is warmth and circulation throughout the body.",
      Earth: "Earth is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the spleen and stomach as the system worth paying a little extra attention to. Practically, that often means being mindful of digestion and regular, unhurried meals, since Earth's traditional domain is exactly that — steady nourishment and absorption.",
      Metal: "Metal is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the lungs and large intestine as the system worth paying a little extra attention to. Practically, that often means being mindful of breathing and air quality, since Metal's traditional domain is exactly that — clean intake and letting go of what doesn't need to be held onto.",
      Water: "Water is the quietest element in your chart, which in the traditional Five Element-organ correspondence points to the kidneys and bladder as the system worth paying a little extra attention to. Practically, that often means being mindful of staying warm, staying hydrated, and getting real rest, since Water's traditional domain is exactly that — deep reserves and recovery.",
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
      companion: "배우자궁(일지 — 전통적으로 연애 상대를 어떻게 경험하는지를 보여주는 자리예요)에 비겁(比劫) 기운이 있어요. 이건 보통 나와 대등하게 느껴지는 상대를 찾는다는 뜻이에요 — 연애보다 먼저 친한 친구처럼 편하게 통하는 사람이요. 한쪽이 다른 쪽을 압도하지 않고 둘 다 있는 그대로의 자기 모습으로 있을 수 있는 관계를 중요하게 여기는 편이에요.",
      output: "배우자궁(일지)에 식상(食傷) 기운이 있어요 — 전통적으로 표현력·창의성과 연결되는 자리예요. 보통 나를 진짜로 표현하고, 장난스럽고, 편안하게 있을 수 있게 해주는 상대에게 끌린다는 뜻이에요. 진지함만 있는 관계보다는 진짜 재미와 자기표현의 여지가 있는 관계가 잘 맞는 편이에요.",
      wealth: "배우자궁(일지)에 재성(財星) 기운이 있어요 — 전통적으로 상대를 챙기고 베푸는 성향의 사랑을 가리키는 자리예요. 말보다는 구체적인 행동(시간, 노력, 물질적인 것)으로 애정을 표현하는 편이고, 다정함과 더불어 현실적이고 안정된 상대를 중요하게 여기는 편이에요.",
      officer: "배우자궁(일지)에 관성(官星) 기운이 있어요 — 전통적으로 관계 안에서 책임감·안정성과 가장 많이 연결되는 자리예요. 한번 관계를 시작하면 진지하게 임하는 편이고, 명확한 약속과 그걸 지키는 걸 중요하게 여기고, 예측 불가능한 사람보다는 믿음직하고 한결같은 상대에게 끌리는 편이에요.",
      resource: "배우자궁(일지)에 인성(印星) 기운이 있어요 — 전통적으로 편안함·정서적 지지와 연결되는 자리예요. 곁에 있는 것만으로 마음이 편해지고 다독여지는 느낌을 주는 상대에게 끌리는 편이고, 관계 안에서 안전하다고 느끼면 나도 그런 편안함을 상대에게 돌려주는 편이에요.",
    },
    // 일간 제외 나머지 7글자 중 재성(財星) 개수 기준 (없음/보통/많음)
    wealthStyle: {
      title: '당신의 재물 성향',
      none: "사주에 재성(財星) 기운이 거의 없는 편이에요 — 돈이 삶의 첫 번째 동기는 아닌 타입일 확률이 높아요. 의미, 실력, 관계 같은 걸 먼저 좇고 돈은 그 결과로 따라오는 쪽에 가까워요. 나쁜 배치는 아니고, 다만 재정적인 욕심은 타고난 본능에 기대기보다 의식적으로 키워야 하는 부분이라는 뜻이에요.",
      moderate: "사주에 재성(財星) 기운이 적당히 있는 편이에요 — 돈이 신경 쓰이긴 하지만 모든 결정을 좌우할 정도는 아니에요. 큰 한 방보다는 재정적 안정을 선호하는 편이라, 꾸준히 저축하고 미리 계획하면서 천천히 안정을 쌓아가는 쪽에 가까워요.",
      many: "사주에 재성(財星) 기운이 풍부한 편이에요 — 돈과의 관계가 꽤 적극적인 타입일 확률이 높아요. 기회를 잘 알아채고, 그걸 추구하는 데도 거리낌이 없고, 수입을 늘리는 일이 애쓰지 않아도 자연스럽게 느껴질 거예요. 다만 그만큼 절제도 같이 갖추지 않으면 재정적으로 무리하게 확장할 위험도 있으니 주의하세요.",
    },
    // 일간 제외 나머지 7글자 중 관성(官星) 개수 기준 (없음/보통/많음)
    careerStyle: {
      title: '당신의 커리어 적성',
      none: "사주에 관성(官星) 기운이 거의 없는 편이에요 — 딱딱한 위계질서나 위에서 정해주는 구조 안에서는 실력이 잘 안 나오는 타입일 확률이 높아요. 프리랜서, 창업, 또는 재량이 많은 자리처럼 스스로 기준을 세우고 움직이는 독립적인 역할이 더 잘 맞아요.",
      moderate: "사주에 관성(官星) 기운이 적당히 있는 편이에요 — 체계 잡힌 조직 안에서도 큰 마찰 없이 잘 지내는 편이고, 필요하면 시스템을 따르는 것도 어렵지 않아 해요. 다만 어느 정도는 스스로 판단할 여지도 원하는 편이라, 구조와 자율성이 적당히 섞인 환경이 제일 잘 맞아요.",
      many: "사주에 관성(官星) 기운이 풍부한 편이에요 — 오히려 체계와 위계질서 안에서 진짜 실력이 나오는 타입일 확률이 높아요. 역할이 명확하고 지휘 체계가 잡힌 조직, 체계적인 시스템이 오히려 발목을 잡기보다 최고의 모습을 끌어내줘요. 이미 자리 잡힌 조직 안에서 리더십을 발휘하는 자리가 잘 맞을 확률이 높아요, 구조 자체를 거스르기보다 활용하는 쪽이 되니까요.",
    },
    // 사주에서 가장 약한(개수 최소) 오행 기준 — dominantElement 아님
    healthStyle: {
      title: '당신의 건강 기질',
      Wood: "사주에서 목(木) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 간·담을 조금 더 챙겨볼 부위로 가리켜요. 실질적으로는 스트레스 관리와 화를 쌓아두지 않는 게 중요하다는 뜻이에요, 목의 전통적인 영역이 정확히 '막힘없이 흐르는 것'이라서요.",
      Fire: "사주에서 화(火) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 심장·소장을 조금 더 챙겨볼 부위로 가리켜요. 실질적으로는 혈액순환과 충분한 진짜 휴식을 챙기는 게 중요하다는 뜻이에요, 화의 전통적인 영역이 몸 전체의 온기와 순환이라서요.",
      Earth: "사주에서 토(土) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 비장·위를 조금 더 챙겨볼 부위로 가리켜요. 실질적으로는 소화와 규칙적이고 여유 있는 식사를 챙기는 게 중요하다는 뜻이에요, 토의 전통적인 영역이 정확히 꾸준한 영양 섭취와 흡수라서요.",
      Metal: "사주에서 금(金) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 폐·대장을 조금 더 챙겨볼 부위로 가리켜요. 실질적으로는 호흡과 공기의 질을 챙기는 게 중요하다는 뜻이에요, 금의 전통적인 영역이 정확히 깨끗하게 받아들이고 필요 없는 건 놓아주는 거라서요.",
      Water: "사주에서 수(水) 기운이 가장 약한 편이에요 — 전통 오행-장기 대응론에서는 이게 신장·방광을 조금 더 챙겨볼 부위로 가리켜요. 실질적으로는 몸을 따뜻하게 하고, 수분을 챙기고, 진짜 휴식을 취하는 게 중요하다는 뜻이에요, 수의 전통적인 영역이 정확히 깊은 비축과 회복이라서요.",
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
