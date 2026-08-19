// Content for the dedicated Ten God (십성) / Twelve Stage (십이운성) chapter —
// promotes what was previously only available in the tap-to-reveal
// PillarGrid glossary into standalone chapter content. Unlike
// sajuProfileTemplates.js's domain chapters (each keyed by a different
// slice of the chart), everything here reads the chart's *overall*
// tendency: which Ten God category dominates the whole chart
// (getTenGodProfile), and which Twelve Stage cluster dominates it
// (getTwelveStageProfile) — both in utils/saju.js.
import { getTenGodProfile, getTwelveStageProfile, getNobleman } from '../utils/saju';

export const sajuTenGodTemplates = {
  en: {
    chapterTitle: 'Ten Gods & Energy Flow',
    chapterIntro: "A deeper layer of your chart — which kind of energy runs strongest, and how that shapes the way you move through relationships and daily life.",
    subtopicTitles: {
      temperament: 'Your Dominant Ten God',
      relationships: 'How You Relate to Others',
      charm: 'Your Charm Point',
      energyFlow: 'Your Energy Flow',
    },
    temperament: {
      companion: "Companion (比劫) energy runs strongest in your chart, which tends to show up as a strong, independent sense of self. You don't need much external validation to know your own worth, you hold your ground once you've decided something, and you tend to see people as equals rather than looking up to or down on anyone. The flip side is a stubborn streak — once you've made up your mind, you can be genuinely hard to move.",
      output: "Output (食傷) energy runs strongest in your chart, which tends to show up as expressiveness and creative drive. You're likely the one turning ideas into something real — a project, a piece of writing, a performance, a joke that lands — and you do your best thinking out loud rather than in silence. The flip side is a tendency to say the unfiltered thing before fully considering how it'll land.",
      wealth: "Wealth (財星) energy runs strongest in your chart, which tends to show up as practicality and a results-first mindset. You're likely the one who turns plans into tangible outcomes, notices real-world opportunities before others do, and measures progress by what's actually been accomplished rather than how it felt. The flip side is a risk of reducing everything — including relationships — to a return-on-investment question.",
      officer: "Officer (官星) energy runs strongest in your chart, which tends to show up as discipline and a strong sense of responsibility. You're likely the one who follows through on commitments without being asked twice, respects structure and rules even when no one's watching, and takes on responsibility more readily than most. The flip side is a tendency to be harder on yourself than the situation actually calls for.",
      resource: "Resource (印星) energy runs strongest in your chart, which tends to show up as thoughtfulness and a genuine love of learning. You're likely the one who researches before acting, absorbs new ideas easily, and finds real comfort in being supported and cared for, not just in supporting others. The flip side is a tendency to overthink instead of act, holding back until you feel fully prepared.",
    },
    relationships: {
      companion: "In traditional symbolism, Companion (比劫) energy is linked to siblings, friends, and peers — your relationships tend to center on people you consider equals. You likely build your closest bonds through shared effort or friendly competition, and you probably feel most yourself around people who don't need you to perform any particular role.",
      output: "In traditional symbolism, Output (食傷) energy is linked to those younger than you or in your care — juniors, mentees, the next generation. You likely take naturally to a mentoring or nurturing role with people coming up behind you, generous with your knowledge and time in a way that isn't always mirrored back up the chain.",
      wealth: "In traditional symbolism, Wealth (財星) energy is linked to material resources and, traditionally, a father figure. Your closest relationships tend to run on practical care — showing up, providing, being useful in concrete ways — more than words alone, and you likely value people who do the same for you.",
      officer: {
        male: "In traditional symbolism, Officer (官星) energy is linked to superiors, and in the classic gendered reading, it's also the placement most connected to a man's spouse — his wife. You likely expect the same clarity and follow-through from a partner that you'd expect from a boss you actually respect.",
        female: "In traditional symbolism, Officer (官星) energy is linked to superiors, and in the classic gendered reading, it's also the placement most connected to a woman's spouse — her husband. You likely expect the same clarity and follow-through from a partner that you'd expect from a boss you actually respect.",
        neutral: "In traditional symbolism, Officer (官星) energy is linked to superiors, and depending on the school of thought, sometimes to a spouse as well. You likely expect the same clarity and follow-through from the people closest to you that you'd expect from a boss you actually respect.",
      },
      resource: "In traditional symbolism, Resource (印星) energy is linked to a mother figure and those older or more experienced than you. You likely gravitate toward mentors, teachers, or elders who can guide you, and you tend to draw real comfort and steadiness from people who've been where you're headed.",
    },
    charm: {
      'companion-yes': "Your Companion energy gives you a magnetic self-assuredness, and with the Heavenly Nobleman in your chart, that confidence tends to draw the right people toward you rather than pushing them away — people are drawn to how comfortable you are simply being yourself.",
      'companion-no': "Your Companion energy gives you a magnetic self-assuredness — people are drawn to how comfortable you are simply being yourself, confidence that doesn't need anyone else's approval to hold steady.",
      'output-yes': "Your Output energy makes you genuinely expressive and fun to be around, and with the Heavenly Nobleman in your chart, that charm tends to open doors — the right people notice your creativity at the right moments.",
      'output-no': "Your Output energy makes you genuinely expressive and fun to be around — your charm comes from how freely you let your personality show, unfiltered and alive.",
      'wealth-yes': "Your Wealth energy gives you a grounded, capable charm, and with the Heavenly Nobleman in your chart, people tend to trust that competence quickly — your reliability reads as attractive almost on sight.",
      'wealth-no': "Your Wealth energy gives you a grounded, capable charm — people are drawn to how dependable and resourceful you clearly are, even before they get to know you well.",
      'officer-yes': "Your Officer energy gives you a quiet, dependable charm, and with the Heavenly Nobleman in your chart, the right people tend to recognize your integrity quickly — your consistency is what draws them in.",
      'officer-no': "Your Officer energy gives you a quiet, dependable charm — your consistency and follow-through are what draw people in, even if it takes them a little time to notice it.",
      'resource-yes': "Your Resource energy gives you a warm, comforting charm, and with the Heavenly Nobleman in your chart, that warmth tends to attract people who genuinely need what you offer — you become someone's safe place easily.",
      'resource-no': "Your Resource energy gives you a warm, comforting charm — people are drawn to how easy it is to open up around you, even if you don't try to make that happen.",
    },
    energyFlow: {
      vigorous: "Your Twelve Stages lean toward the vigorous cluster (건록/Career, 제왕/Peak) — overall, that points to an active, driven energy flow. You likely draw energy from starting things and pushing forward, and you probably feel more like yourself in motion than sitting still.",
      declining: "Your Twelve Stages lean toward the declining cluster (사/Death, 절/Void, 묘/Storage) — overall, that points to an inward, restorative energy flow. You likely draw strength from processing and recovering rather than constant outward motion, and you tend to do your best work after real quiet time, not despite it.",
      balanced: "Your Twelve Stages don't lean heavily toward either the vigorous or declining cluster — overall, that points to a balanced energy flow that shifts between active and inward as the situation calls for it. Rather than constantly pushing or constantly withdrawing, your strength is being able to shift gears when you actually need to.",
    },
  },
  ko: {
    chapterTitle: '십성과 에너지 흐름',
    chapterIntro: '사주를 한 겹 더 들여다보는 챕터예요 — 어떤 기운이 가장 강하게 흐르는지, 그게 관계와 일상에서 어떤 식으로 드러나는지를 보여줘요.',
    subtopicTitles: {
      temperament: '나의 십성은?',
      relationships: '내가 맺는 관계',
      charm: '매력 포인트',
      energyFlow: '나의 에너지 흐름',
    },
    temperament: {
      companion: "사주에서 비겁(比劫) 기운이 제일 강하게 흘러요 — 보통 독립적이고 단단한 자기중심으로 나타나요. 남의 인정 없이도 스스로의 가치를 아는 편이고, 한번 정하면 잘 흔들리지 않고, 사람을 위아래로 보기보다 대등하게 대하는 편이에요. 다만 그만큼 한번 마음먹으면 정말 잘 안 움직이는 고집도 있어요.",
      output: "사주에서 식상(食傷) 기운이 제일 강하게 흘러요 — 보통 표현력과 창의적인 추진력으로 나타나요. 아이디어를 실제로 뭔가로 만들어내는 쪽일 확률이 높고, 프로젝트든 글이든 무대든 딱 맞는 농담이든요, 조용히 생각하기보다 소리 내어 생각하는 편이에요. 다만 여과 없는 말이 먼저 나오고 나서야 그게 어떻게 들릴지 생각하는 경향도 있어요.",
      wealth: "사주에서 재성(財星) 기운이 제일 강하게 흘러요 — 보통 현실적이고 결과 중심적인 성향으로 나타나요. 계획을 실제 결과물로 만들어내는 쪽일 확률이 높고, 남들보다 먼저 현실적인 기회를 알아채고, 느낌보다 실제로 이룬 것으로 진전을 판단하는 편이에요. 다만 관계를 포함해서 모든 걸 손익 문제로 환원할 위험도 있어요.",
      officer: "사주에서 관성(官星) 기운이 제일 강하게 흘러요 — 보통 절제력과 강한 책임감으로 나타나요. 두 번 말 안 해도 약속을 지키는 편이고, 아무도 안 볼 때도 규칙과 체계를 존중하고, 남들보다 책임을 더 쉽게 떠맡는 편이에요. 다만 상황이 실제로 요구하는 것보다 스스로에게 더 엄격해지는 경향도 있어요.",
      resource: "사주에서 인성(印星) 기운이 제일 강하게 흘러요 — 보통 사려 깊음과 진짜 배움을 향한 애정으로 나타나요. 행동하기 전에 먼저 알아보는 편이고, 새로운 생각을 잘 흡수하고, 남을 챙기는 것뿐 아니라 챙김을 받는 데서도 진짜 편안함을 느끼는 편이에요. 다만 충분히 준비됐다고 느낄 때까지 미루면서, 행동보다 생각이 너무 많아지는 경향도 있어요.",
    },
    relationships: {
      companion: "전통 상징에서 비겁(比劫)은 형제자매·친구·동료와 연결돼요 — 관계의 중심이 대등하다고 느끼는 사람들 쪽에 가까운 편이에요. 함께 노력하거나 선의의 경쟁을 통해 가장 가까운 관계를 쌓는 편이고, 특정 역할을 연기할 필요 없는 사람들 곁에서 가장 나답게 느끼는 편이에요.",
      output: "전통 상징에서 식상(食傷)은 손아랫사람·후배·다음 세대와 연결돼요 — 뒤따라오는 사람들을 챙기고 이끄는 역할이 자연스럽게 몸에 맞는 편이에요. 아는 것과 시간을 아낌없이 나누는 편인데, 그게 항상 위쪽에서 똑같이 돌아오는 건 아닐 수 있어요.",
      wealth: "전통 상징에서 재성(財星)은 물질적 자원, 그리고 전통적으로는 아버지 상과 연결돼요. 가장 가까운 관계도 말보다는 현실적인 챙김 — 곁에 있어주고, 채워주고, 구체적으로 쓸모 있는 것 — 을 중심으로 돌아가는 편이고, 나에게도 그렇게 해주는 사람을 소중히 여기는 편이에요.",
      officer: {
        male: "전통 상징에서 관성(官星)은 상사와 연결되고, 전통적인 성별 해석에서는 남성의 사주에서 배우자(아내)를 상징하는 자리로도 읽혀요. 존경할 만한 상사에게 기대하는 것과 비슷한 명확함과 책임감을, 관계에서도 상대에게 기대하는 편이에요.",
        female: "전통 상징에서 관성(官星)은 상사와 연결되고, 전통적인 성별 해석에서는 여성의 사주에서 배우자(남편)를 상징하는 자리로도 읽혀요. 존경할 만한 상사에게 기대하는 것과 비슷한 명확함과 책임감을, 관계에서도 상대에게 기대하는 편이에요.",
        neutral: "전통 상징에서 관성(官星)은 상사와 연결되고, 학파에 따라 배우자를 상징하는 자리로 읽히기도 해요. 존경할 만한 상사에게 기대하는 것과 비슷한 명확함과 책임감을, 가까운 관계에서도 상대에게 기대하는 편이에요.",
      },
      resource: "전통 상징에서 인성(印星)은 어머니 상, 그리고 나보다 나이 많거나 경험 많은 사람들과 연결돼요. 이끌어줄 수 있는 멘토·스승·연장자에게 자연스럽게 끌리는 편이고, 내가 가려는 길을 이미 걸어본 사람들에게서 진짜 편안함과 든든함을 얻는 편이에요.",
    },
    charm: {
      'companion-yes': "비겁 기운은 흔들리지 않는 당당함이라는 매력을 줘요 — 사주에 천을귀인까지 있어서, 그 자신감이 사람을 밀어내기보다 오히려 딱 맞는 사람들을 끌어당기는 편이에요. 나답게 있는 게 편안해 보이는 그 모습에 사람들이 끌려요.",
      'companion-no': "비겁 기운은 흔들리지 않는 당당함이라는 매력을 줘요 — 남의 인정 없이도 단단한 그 자신감에, 있는 그대로의 나로 편안해하는 모습에 사람들이 끌려요.",
      'output-yes': "식상 기운은 진짜 표현력과 함께 있으면 즐거운 매력을 줘요 — 사주에 천을귀인까지 있어서, 그 매력이 딱 맞는 타이밍에 딱 맞는 사람에게 닿는 편이에요.",
      'output-no': "식상 기운은 진짜 표현력과 함께 있으면 즐거운 매력을 줘요 — 걸러지지 않고 생생하게 드러나는 성격 그 자체가 매력이에요.",
      'wealth-yes': "재성 기운은 단단하고 능력 있어 보이는 매력을 줘요 — 사주에 천을귀인까지 있어서, 그 능력을 사람들이 금방 신뢰하는 편이에요. 믿음직함이 거의 첫인상부터 매력으로 읽혀요.",
      'wealth-no': "재성 기운은 단단하고 능력 있어 보이는 매력을 줘요 — 잘 알기도 전에 믿음직하고 수완 좋아 보이는 모습에 사람들이 끌려요.",
      'officer-yes': "관성 기운은 조용하지만 믿음직한 매력을 줘요 — 사주에 천을귀인까지 있어서, 딱 맞는 사람들이 그 성실함을 금방 알아보는 편이에요. 한결같음이 사람을 끌어당기는 포인트예요.",
      'officer-no': "관성 기운은 조용하지만 믿음직한 매력을 줘요 — 한결같음과 끝까지 해내는 모습이 매력 포인트인데, 알아채는 데 시간이 조금 걸릴 수도 있어요.",
      'resource-yes': "인성 기운은 따뜻하고 편안하게 만들어주는 매력을 줘요 — 사주에 천을귀인까지 있어서, 그 따뜻함이 정말 필요한 사람들을 잘 끌어당기는 편이에요. 누군가에게 안전한 존재가 되는 게 자연스러워요.",
      'resource-no': "인성 기운은 따뜻하고 편안하게 만들어주는 매력을 줘요 — 딱히 애쓰지 않아도 곁에서 마음을 터놓기 쉬운 그 편안함에 사람들이 끌려요.",
    },
    energyFlow: {
      vigorous: "십이운성 상 왕성 계열(건록·제왕)의 기운이 두드러진 편이에요 — 전반적으로 활동적이고 추진력 있는 에너지 흐름을 갖고 있다는 뜻이에요. 뭔가를 시작하고 밀어붙이는 데서 에너지를 얻는 편이고, 가만히 있는 시간보다 움직이는 시간에 더 컨디션이 좋게 느껴질 확률이 높아요.",
      declining: "십이운성 상 쇠약 계열(사·절·묘)의 기운이 두드러진 편이에요 — 전반적으로 내면적이고 축적하는 에너지 흐름을 갖고 있다는 뜻이에요. 밖으로 뻗어나가기보다 안으로 정리하고 회복하는 데서 힘을 얻는 편이고, 조용한 시간을 충분히 가질 때 오히려 더 잘 풀리는 타입이에요.",
      balanced: "십이운성 상 왕성 계열과 쇠약 계열이 어느 한쪽으로 크게 치우치지 않는 편이에요 — 활동적인 흐름과 내면적인 흐름을 상황에 따라 오가는 균형 잡힌 에너지를 갖고 있다는 뜻이에요. 계속 밀어붙이기만 하거나 계속 웅크리기만 하기보다, 필요에 따라 기어를 바꿀 수 있는 게 강점이에요.",
    },
  },
};

/**
 * Builds the Ten God / Twelve Stage chapter — 4 sections, all intended to
 * render locked (premium) in the UI. `gender` ('M'|'F'|undefined) only
 * affects the officer-category relationships text; every other subtopic is
 * gender-independent, same as the rest of /saju.
 */
export function getTenGodChapter(lang, saju, gender) {
  const bank = sajuTenGodTemplates[lang] || sajuTenGodTemplates.en;
  const profile = getTenGodProfile(saju);
  const stageProfile = getTwelveStageProfile(saju);
  const nobleman = getNobleman(saju, lang);

  const relationshipsText = profile === 'officer'
    ? bank.relationships.officer[gender === 'M' ? 'male' : gender === 'F' ? 'female' : 'neutral']
    : bank.relationships[profile];

  return {
    title: bank.chapterTitle,
    intro: bank.chapterIntro,
    sections: [
      { title: bank.subtopicTitles.temperament, text: bank.temperament[profile] },
      { title: bank.subtopicTitles.relationships, text: relationshipsText },
      { title: bank.subtopicTitles.charm, text: bank.charm[`${profile}-${nobleman.hasNobleman ? 'yes' : 'no'}`] },
      { title: bank.subtopicTitles.energyFlow, text: bank.energyFlow[stageProfile] },
    ],
  };
}
