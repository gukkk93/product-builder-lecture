// Group-chemistry-lens compatibility copy for IdolMatch/DramaMatch's
// "그룹케미" relationshipMode — the fantasy of "what if we were on the
// same team together" (stage vs. off-stage chemistry), keyed by the same
// Five Element relation values getElementRelation() returns (see
// utils/saju.js). No romantic framing — teammate/group-chemistry
// language only. Unlike friendshipTemplates.js/roommateTemplates.js,
// this mode only has 2 mode-specific sections (stagePresence + offstage,
// a deliberate on-stage/off-stage contrast pair) instead of 3, so its
// sections array is 4 long (explanation, stagePresence, offstage,
// watchFor), not 5 — see IdolMatch.jsx/DramaMatch.jsx's MODE_CONFIG.
export const groupChemistryTemplates = {
  en: {
    same: {
      tier: 'Ride-or-Die Besties',
      line: "If you were in the group together, you'd probably be the two who click instantly.",
      explanation: {
        subheading: 'Chemistry That Was Already There',
        text: "With matching elements, if you'd been in the same group, you probably wouldn't have needed to work at syncing up — it would've already been there. Whether it's choreography or stage energy, you'd move on the same wavelength naturally, clicking from the very first practice. This kind of chemistry is rare on a team, the kind that gets a \"we just get each other\" in every interview.",
      },
      stagePresence: {
        subheading: 'A Stage Where You Both Know the Blocking Without Speaking',
        text: "On the same stage, you'd probably read each other's next move with just a glance. If something went off-script, neither of you would panic — you'd play off it naturally, and that moment would probably become the clip fans keep bringing up. While other members focus on staying in sync, you two would already be moving to the same rhythm.",
      },
      offstage: {
        subheading: 'The Easiest Duo Backstage',
        text: "Off stage, you'd probably be the pair sitting side by side in the dorm playing games or eating late-night food, losing track of time. Even on an exhausting schedule day, being near each other tends to let the tension out naturally. In vlogs and behind-the-scenes clips, you'd probably be the chemistry that consistently reads as the most natural and relaxed.",
      },
      watchFor: {
        subheading: 'The Better the Match, the More You Both Need New Challenges',
        text: "Matching this well can mean you stop pushing each other to try new things. For this chemistry to keep shining on a team, it helps to occasionally take on different parts or different styles. Not just leaning on comfort, and continuing to build new kinds of sync, is what keeps this pairing lasting.",
      },
    },
    otherGeneratesMe: {
      tier: 'The Ones Who Lean On Each Other',
      line: 'The kind of teammates who quietly become each other\'s source of strength.',
      explanation: {
        subheading: 'Chemistry That Draws Strength From Just Being Nearby',
        text: "Their energy feeds yours in the Five Element cycle, so on the same team, they'd probably be a quiet source of strength for you. Whether it's grueling trainee days or a packed post-debut schedule, just having them nearby would probably be enough to get you through it. The kind of pairing that ends up in an interview as \"I got through the hard days because of them.\"",
      },
      stagePresence: {
        subheading: 'A Stage Where You Trust Each Other to Lean On',
        text: "Even in a moment tense enough to worry about a mistake, just having them there would probably be enough to steady you. In parts where you overlap or need to sync closely, you two would likely show an unusually easy, natural chemistry. The kind of pairing fans notice and say \"you can tell those two lean on each other.\"",
      },
      offstage: {
        subheading: "Off Stage, They Notice Without You Saying Anything",
        text: "Off stage, if they looked tired, you'd probably be the one to check in on them first — or vice versa. On a hard day, neither of you would need to say anything out loud; the other would just quietly be there. Not the flashiest chemistry, but the kind that ends up steadying both of you for years.",
      },
      watchFor: {
        subheading: 'Take a Turn Reaching Out, Not Just Receiving',
        text: "Constantly drawing strength from this relationship can tip you toward leaning on it a little too much without noticing. Being the one who checks in on them first sometimes helps keep this chemistry balanced. In a relationship built on mutual strength, it's worth making sure that strength doesn't flow in just one direction.",
      },
    },
    iGenerateOther: {
      tier: 'Big Sibling, Little Sibling Energy',
      line: 'The kind of chemistry where you naturally end up looking out for them, like a big sibling would.',
      explanation: {
        subheading: 'Chemistry Where You End Up Looking Out For Them First',
        text: "Your energy feeds theirs in the Five Element cycle, so on the same team, you'd probably be the one who steps in to look out for them first. If practice looked rough on them, you'd be the one to check in and comfort them, the one who makes sure they have what they need. From their side, having you around would probably be a real source of stability.",
      },
      stagePresence: {
        subheading: 'A Stage Where You Naturally Guide Them',
        text: "If they looked nervous on stage, you'd probably be the one to reassure them with a look or a small gesture, almost without thinking. You'd likely be the one quietly making sure their part landed well too. The kind of chemistry fans notice and describe as \"you can tell she looks out for her\" — a gentle kind of leadership.",
      },
      offstage: {
        subheading: "Off Stage, You're the One Making Sure They Eat",
        text: "Off stage, you'd probably be the one making sure they don't skip a meal, the one who notices something's off even when they don't say it and checks in anyway. That attentiveness would probably mean a lot to them, and it likely warmed up the whole team's mood along the way.",
      },
      watchFor: {
        subheading: "Let the Care Show So It's Easier For Them to Lean On You",
        text: "Because looking out for people comes so naturally, it's worth making sure that care doesn't quietly become a pressure they feel. Saying it plainly sometimes — \"tell me if it's hard\" — makes it easier for them to actually lean on you. Give yourself permission to lean on someone else once in a while too.",
      },
    },
    otherOvercomesMe: {
      tier: 'The Bickering Duo',
      line: 'Unpredictable chemistry that ends up being one of the team\'s most watchable parts.',
      explanation: {
        subheading: 'Not Easy — Which Is Exactly Why Eyes Stay On It',
        text: "In the Five Element cycle, their energy overcomes yours, so on the same team, this probably wouldn't have been a purely easy pairing. Your styles clashing enough that it took some time to find your groove together is entirely plausible. But that same back-and-forth tension is exactly what reads to fans as chemistry impossible to look away from.",
      },
      stagePresence: {
        subheading: 'Tension That Makes the Stage More Gripping',
        text: "On stage, two different energies colliding would probably spark unexpected moments of real synergy. A pairing this charged with tension tends to make for a more striking stage than a perfectly predictable, matched one. The kind of chemistry that gets a \"their stages always have something different going on.\"",
      },
      offstage: {
        subheading: 'Bickering Off Stage, But First to Check on Each Other',
        text: "Off stage, you'd probably bicker over small things, and yet still be the first to check on each other when it counts — that kind of ironic chemistry. This is exactly the type of dynamic that gets cut into the funniest moments on variety shows and vlogs. Acting like you don't get along on the surface, while actually being each other's first call in a real crisis.",
      },
      watchFor: {
        subheading: "Enjoy the Bickering Without Letting It Sour the Team Mood",
        text: "The appeal here is unpredictable tension, but too much of it can start to affect the whole team's atmosphere. Staying aware of the line between joking around and something real matters here. Underneath it all, there needs to be real, solid trust off camera for this chemistry to stay loved for the long haul.",
      },
    },
    iOvercomeOther: {
      tier: 'The Strongest Duo On Stage',
      line: 'The kind of duo that brings the strongest synergy the moment the stage lights come up.',
      explanation: {
        subheading: 'The One Who Naturally Anchors the Stage',
        text: "In the Five Element cycle, your energy overcomes theirs, so on the same team, you'd probably be the one who naturally holds the center on stage. Whether it's formation or energy, you set the direction and they follow — a chemistry with real leadership built into it. The kind of pairing that earns a \"the stage feels steadier when those two are together.\"",
      },
      stagePresence: {
        subheading: "Synergy Strong Enough to Earn the 'Strongest Duo' Title",
        text: "In a duet part or a section where you're paired up, the chemistry of you leading and them backing it up would probably land unusually strong. Even in a moment that calls for improvising, you'd probably be the one who stays calm and naturally takes the lead. That combination of stability and tension is exactly what earns a pairing the fan title \"strongest duo on stage.\"",
      },
      offstage: {
        subheading: 'Off Stage, the One They Can Actually Lean On',
        text: "Off stage, you'd probably be the presence that lets them finally relax and lean on someone. The kind of relationship where they can be honest about what's worrying them, because that trust has been built up over time. Unlike the flash of the stage, off stage you'd probably be remembered as warm, easy chemistry.",
      },
      watchFor: {
        subheading: 'Lead, But Let Their Colors Show Too',
        text: "Constantly being the one who leads means it's worth watching that their individuality doesn't get overshadowed. Stepping back sometimes and giving them room to lead makes this duo more balanced. Even the strongest duos need both people's colors to stay visible to be loved for the long run.",
      },
    },
  },
  ko: {
    same: {
      tier: '찐친',
      line: '그룹에 있었다면 누구보다 죽이 잘 맞는 멤버였을 조합이에요.',
      explanation: {
        subheading: '굳이 안 맞춰도 이미 맞는 케미',
        text: '오행이 같아서, 같은 그룹 멤버였다면 굳이 맞추려 애쓰지 않아도 이미 합이 맞는 조합이었을 확률이 높아요. 안무 동선이든 텐션이든, 자연스럽게 같은 파장으로 움직이는 편이라 연습 때부터 손발이 척척 맞았을 거예요. 팀 안에서 이런 케미는 흔치 않은 조합이라, 인터뷰에서 "저희는 워낙 잘 맞아요"라는 말이 나올 법한 그런 사이예요.',
      },
      stagePresence: {
        subheading: '말 안 해도 서로 동선을 아는 무대',
        text: '같은 무대에 섰다면, 눈빛 하나로 다음 동선을 알아채는 그런 조합이었을 확률이 높아요. 애드리브가 나와도 당황하지 않고 자연스럽게 받아치면서, 오히려 그 순간이 팬들 사이에서 회자되는 명장면이 됐을 거예요. 다른 멤버들이 합을 맞추려 신경 쓸 때, 둘은 이미 같은 리듬으로 움직이고 있었을 거고요.',
      },
      offstage: {
        subheading: '무대 뒤에서는 제일 편한 콤비',
        text: '무대 밖에서는 숙소에서 나란히 앉아 게임하거나 야식 먹으면서 시간 가는 줄 모르는, 그런 편안한 콤비였을 확률이 높아요. 스케줄로 지친 날에도 서로 옆에 있으면 자연스럽게 텐션이 풀리는 편이고요. 브이로그나 비하인드 영상에서 유난히 자연스럽고 편해 보이는 케미로 자주 포착됐을 거예요.',
      },
      watchFor: {
        subheading: '잘 맞을수록 서로에게 새로운 자극도 필요',
        text: '너무 잘 맞으면 오히려 새로운 시도를 덜 하게 될 수도 있어요. 팀 안에서 이 케미가 계속 빛나려면, 가끔은 서로 다른 파트나 다른 스타일에도 도전해보는 게 좋아요. 편안함에만 기대지 않고 계속 새로운 합을 맞춰나가는 게, 이 조합을 오래가게 하는 비결이에요.',
      },
    },
    otherGeneratesMe: {
      tier: '서로 의지하는 관계',
      line: '그룹 안에서 서로에게 힘이 되어주는, 그런 관계가 될 확률이 높아요.',
      explanation: {
        subheading: '옆에 있는 것만으로 힘이 되는 케미',
        text: '오행 상 상대의 기운이 나를 채워주는 관계라, 같은 그룹이었다면 상대가 은근히 힘이 되는 존재였을 확률이 높아요. 데뷔 전 힘든 연습생 시절이든, 데뷔 후 바쁜 스케줄이든, 옆에 있는 것만으로 버틸 힘이 생기는 그런 케미예요. 인터뷰에서 "힘들 때 얘 덕분에 버텼어요" 같은 말이 나올 법한 조합이에요.',
      },
      stagePresence: {
        subheading: '서로를 믿고 기대는 무대 위 케미',
        text: '무대에서 실수할까 봐 긴장되는 순간에도, 상대가 옆에 있다는 것만으로 안정감을 얻는 조합이었을 확률이 높아요. 파트가 겹치거나 호흡을 맞춰야 하는 구간에서, 유난히 편안하고 자연스러운 합을 보여줬을 거고요. 팬들 사이에서 "저 둘은 서로한테 의지하는 게 보인다"는 반응이 나올 만한 케미예요.',
      },
      offstage: {
        subheading: '말 안 해도 챙겨주는 무대 밖 케미',
        text: '무대 밖에서는 상대가 지쳐 보이면 먼저 다가가서 챙겨주는, 그런 편안한 관계였을 확률이 높아요. 힘든 날 굳이 말하지 않아도 상대가 먼저 알아채고 조용히 옆에 있어주는 케미고요. 화려한 케미는 아니어도, 오래도록 서로를 지탱해주는 든든한 관계로 남을 거예요.',
      },
      watchFor: {
        subheading: '받는 만큼 가끔은 먼저 손 내밀어보기',
        text: '이 관계에서 계속 힘을 받기만 하다 보면, 나도 모르게 의존하는 쪽으로 기울 수 있어요. 가끔은 내가 먼저 상대를 챙기는 쪽이 되어보는 것도, 이 케미를 더 균형 잡히게 만들어줘요. 서로에게 힘이 되어주는 관계일수록, 그 힘이 한쪽으로만 흐르지 않게 신경 쓰는 게 좋아요.',
      },
    },
    iGenerateOther: {
      tier: '맏언니·막내 케미',
      line: '내가 먼저 챙기게 되는, 맏언니 같은 케미가 될 확률이 높아요.',
      explanation: {
        subheading: '내가 먼저 나서서 챙기게 되는 케미',
        text: '오행 상 내가 상대의 기운을 채워주는 관계라, 같은 그룹이었다면 내가 먼저 나서서 상대를 챙기는 쪽이었을 확률이 높아요. 연습이 힘들어 보이면 먼저 다가가서 다독여주고, 필요한 걸 먼저 챙겨주는 그런 포지션이요. 상대 입장에서는 그런 당신이 있어서 훨씬 든든했을, 그런 케미예요.',
      },
      stagePresence: {
        subheading: '상대를 자연스럽게 이끄는 무대 위 케미',
        text: '무대에서 상대가 긴장한 기색을 보이면, 눈빛이나 작은 손짓으로 안심시켜주는 역할을 자연스럽게 맡았을 확률이 높아요. 상대의 파트가 잘 살도록 은근히 힘을 실어주는 것도 당신 쪽일 거고요. 팬들 사이에서 "저 언니가 챙겨주는 게 보인다"는 반응이 나올 만한, 다정한 리더십이 느껴지는 케미예요.',
      },
      offstage: {
        subheading: '무대 밖에서는 먼저 밥 챙기는 케미',
        text: '무대 밖에서는 상대가 끼니를 거를까 봐 먼저 챙기거나, 힘든 티를 내지 않아도 먼저 알아채고 말 걸어주는 쪽이었을 확률이 높아요. 그런 세심함이 상대에게는 큰 의지가 됐을 거고, 은근히 팀 전체 분위기를 따뜻하게 만드는 역할도 했을 거예요.',
      },
      watchFor: {
        subheading: '챙기는 것도 티가 나야 서로 더 편해짐',
        text: '먼저 챙기는 게 자연스럽다 보니, 정작 그 마음이 상대에게 부담으로 느껴지지 않게 조절하는 것도 필요해요. 가끔은 직접적으로 "힘들면 말해"라고 얘기해주는 게, 상대가 더 편하게 기댈 수 있게 만들어줘요. 나 역시 가끔은 기대도 괜찮다는 걸 스스로에게도 허락해주세요.',
      },
    },
    otherOvercomesMe: {
      tier: '티격태격 콤비',
      line: '케미가 예측이 안 되는데, 그게 오히려 팀의 재미 포인트가 될 확률이 높아요.',
      explanation: {
        subheading: '쉽지 않아서 더 눈이 가는 케미',
        text: '오행 상 상대가 나를 극하는 관계라, 같은 그룹이었다면 마냥 편한 케미는 아니었을 확률이 높아요. 서로 스타일이 부딪혀서 초반엔 합을 맞추는 데 시간이 좀 걸렸을 수도 있고요. 그런데 그 티격태격하는 텐션 자체가 팬들에게는 오히려 눈을 떼기 힘든 케미로 읽혔을 거예요.',
      },
      stagePresence: {
        subheading: '긴장감이 팽팽한, 그래서 더 몰입되는 무대',
        text: '무대에서 서로 다른 텐션이 부딪히면서, 예상 못 한 순간에 시너지가 터지는 그런 케미였을 확률이 높아요. 안무 합이 완벽하게 예측 가능한 조합보다, 이런 긴장감 있는 조합이 오히려 더 강렬한 무대를 만들어냈을 거고요. "저 둘 무대는 항상 뭔가 다르다"는 반응이 나올 만한 케미예요.',
      },
      offstage: {
        subheading: '투닥거리다가도 결국 서로를 챙기는 무대 밖 케미',
        text: '무대 밖에서는 사소한 걸로 티격태격하다가도, 결국은 서로를 제일 먼저 챙기는 그런 아이러니한 케미였을 확률이 높아요. 예능이나 브이로그에서 이런 케미가 자주 재밌는 케미로 편집돼서 나왔을 거예요. 겉으로는 안 맞는 척해도, 위기의 순간엔 제일 먼저 서로를 찾는 사이였을 거고요.',
      },
      watchFor: {
        subheading: '티격태격을 즐기되 팀 분위기까지 해치지 않게',
        text: '이 케미의 매력은 예측 불가능한 텐션이지만, 그게 너무 잦으면 팀 전체 분위기에 영향을 줄 수도 있어요. 장난과 진심 사이 선을 서로 잘 지키는 게 중요하고요. 카메라 밖에서는 확실하게 서로를 신뢰하는 사이라는 게 밑바탕에 깔려 있어야, 이 케미가 오래 사랑받을 수 있어요.',
      },
    },
    iOvercomeOther: {
      tier: '무대 위 최강 듀오',
      line: '무대 위에서 제일 강렬한 시너지를 내는, 최강 듀오가 될 확률이 높아요.',
      explanation: {
        subheading: '내가 자연스럽게 이끄는, 무대의 중심축 케미',
        text: '오행 상 내가 상대를 극하는 관계라, 같은 그룹이었다면 무대에서 자연스럽게 중심을 잡는 쪽이 당신이었을 확률이 높아요. 대형이든 텐션이든, 당신이 먼저 방향을 잡으면 상대가 자연스럽게 따라오는 그런 리더십 있는 케미고요. 팀 안에서 "저 둘이 있으면 무대가 안정된다"는 평가를 받을 만한 조합이에요.',
      },
      stagePresence: {
        subheading: '무대 위 최강 듀오로 불릴 만한 시너지',
        text: '듀엣 파트나 함께 서는 구간에서, 당신이 이끌고 상대가 받쳐주는 합이 유난히 강렬하게 나올 확률이 높아요. 애드리브가 필요한 순간에도 당황하지 않고 자연스럽게 상황을 이끌어가는 쪽이 당신일 거고요. 그 안정감과 텐션의 조합이, 팬들 사이에서 "무대 위 최강 듀오"로 불릴 만한 케미를 만들어내요.',
      },
      offstage: {
        subheading: '무대 밖에서는 편하게 기대게 해주는 든든함',
        text: '무대 밖에서는 상대가 긴장을 풀고 편하게 기댈 수 있는 존재가 당신이었을 확률이 높아요. 걱정거리가 있어도 당신 앞에서는 솔직하게 털어놓을 수 있는, 그런 신뢰가 쌓인 관계였을 거고요. 화려한 무대 위 모습과 다르게, 무대 밖에서는 편안하고 따뜻한 케미로 남았을 거예요.',
      },
      watchFor: {
        subheading: '이끄는 것도 좋지만 상대의 색깔도 살려주기',
        text: '계속 이끄는 역할을 하다 보면, 상대의 개성이 묻히지 않게 신경 쓰는 것도 필요해요. 가끔은 한 발 물러나서 상대가 스스로 이끌어볼 기회를 만들어주는 게, 이 듀오를 더 균형 잡히게 만들어줘요. 최강 듀오일수록, 두 사람 각자의 색깔이 다 살아있어야 오래 사랑받아요.',
      },
    },
  },
};

export function getGroupChemistryCopy(lang, relation) {
  return (groupChemistryTemplates[lang] || groupChemistryTemplates.en)[relation];
}
