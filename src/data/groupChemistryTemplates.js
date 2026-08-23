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
//
// The 5 relation values each map to one fixed "케미 유형" tier — not an
// arbitrary pick, each is grounded in what that Five Element relation
// actually means:
//   - same            → 찐친 (ride-or-die besties): identical element
//     means near-identical instincts, so there's just a lot that already
//     clicks without either side adjusting for the other.
//   - otherGeneratesMe → 서로 의지하는 관계 (lean on each other): their
//     element feeds yours in the generating cycle, i.e. their energy
//     actively supports/replenishes yours — the literal mechanism of
//     "leaning on someone."
//   - iGenerateOther   → 맏언니·막내 케미 (big sibling, little sibling):
//     your element feeds theirs, so you're the one doing the supporting
//     — the senior/junior, look-after-them role a team's oldest member
//     traditionally takes, independent of either person's actual age.
//   - otherOvercomesMe → 티격태격 콤비 (bickering duo): their element
//     overcomes yours in the controlling cycle, i.e. real friction — but
//     that same tension is what reads as compelling, can't-look-away
//     chemistry rather than a flaw.
//   - iOvercomeOther   → 무대 위 최강 듀오 (strongest duo on stage): you
//     overcome their element, so you naturally anchor and direct the
//     pairing — the leadership dynamic that makes for a stage presence
//     fans read as "strongest duo."
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
        subheading: 'Trying a New Part Together Could Be Fun',
        text: "The better the match, the more fun it can be to take on a different part or an unfamiliar style together every once in a while. Trying a new combination instead of the usual sync tends to turn up surprising fun. Layering a new challenge on top of the comfort is what keeps this chemistry feeling fresh.",
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
        subheading: 'Being the One Who Gives Strength Sometimes Could Be Nice',
        text: "Constantly drawing strength from them, flipping it and being the one to cheer them on first every once in a while could add a new layer to this chemistry. Trading off who supports whom lets fans feel even more clearly that \"those two really do look out for each other.\"",
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
        subheading: 'Letting Them Take the Lead Sometimes Could Be Fun',
        text: "Since you're usually the one looking out for them first, letting them step up and lead every once in a while could make for a fun visual. Fans might be pleasantly surprised by how capably they handle it. Setting the caretaker role down now and then makes this chemistry look even more layered.",
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
        subheading: 'Turn the Bickering Into a Team Bit',
        text: "Since unpredictable tension is the whole appeal, leaning into the bickering like a recurring vlog or variety segment could be a lot of fun. Turning the teasing back and forth into actual content lets fans enjoy the chemistry even more. Rather than smoothing the tension away, playing it up as the team's own flavor works well here.",
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
        subheading: 'Handing Them the Center Stage Sometimes Would Be Great',
        text: "Since you usually anchor the center, stepping back and letting them hold that spot every once in a while could make for a striking moment. Creating a moment where their color gets to shine fully lets fans enjoy the duo's chemistry from even more angles. Trading off between leading and supporting is what keeps this strongest-duo status lasting.",
      },
    },
    // See friendshipTemplates.js for the full explanation — same idea,
    // team/stage-flavored: an axis independent of the 5 Five Element
    // relations, comparing each person's dominant Ten God category.
    chemistryPoints: {
      same: {
        companion: {
          subheading: 'The Same Kind of Charm, Twice',
          text: "You both run heavy on Companion energy, so the sense of treating each other as equal partners on stage already matches. On the same team, the natural picture would've been standing side by side rather than either of you outshining the other.",
        },
        output: {
          subheading: 'The Same Kind of Charm, Twice',
          text: "You both run heavy on Output energy, so the expressiveness and energy you each bring to the stage overlap directly. On the same team, the segments you shared would've probably gotten cut into the liveliest, most energetic parts.",
        },
        wealth: {
          subheading: 'The Same Kind of Charm, Twice',
          text: "You both run heavy on Wealth energy, so your instinct for handling the practical side of being on a team — schedules, logistics — already matches. Whichever one of you was managing things, the other would've handled it the same capable way.",
        },
        officer: {
          subheading: 'The Same Kind of Charm, Twice',
          text: "You both run heavy on Officer energy, so your responsible, serious approach to the stage already matches. On the same team, your shared instinct for showing up fully prepared would've clicked easily.",
        },
        resource: {
          subheading: 'The Same Kind of Charm, Twice',
          text: "You both run heavy on Resource energy, so your instinct for comforting and looking out for teammates already matches. On the same team, the two of you would've likely carried the emotional steadiness of the whole group together.",
        },
      },
      different: {
        subheading: 'Two Different Kinds of Charm Meeting',
        text: "By Ten God profile, your standout traits run in different directions, so you'd probably show different colors on stage too. That difference is exactly what would've made the team's overall chemistry feel more varied.",
      },
    },
    noblemanBonus: {
      subheading: 'This Chemistry Might Be Part of Your Nobleman Luck',
      text: "One of your charts carries the Heavenly Nobleman (天乙貴人) — traditionally a sign that good connections follow you. Even the idea of being on the same team might be one of those good connections worth noticing.",
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
        subheading: '새로운 파트에 도전해보는 것도 재밌을 거예요',
        text: '이렇게 잘 맞을수록, 가끔은 서로 다른 파트나 낯선 스타일에 함께 도전해보는 것도 좋은 자극이 될 거예요. 늘 하던 합 대신 새로운 조합을 시도해보면 의외의 재미가 생기고요. 편안함 위에 새로운 도전을 얹어보는 게, 이 케미를 계속 신선하게 만들어줘요.',
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
        subheading: '가끔은 내가 먼저 힘이 되어주는 것도 좋을 거예요',
        text: '계속 힘을 받기만 하다 보면, 가끔은 내가 먼저 나서서 상대를 응원해주는 것도 이 케미에 새로운 매력을 더해줄 거예요. 서로 힘이 되어주는 역할을 번갈아 해보면, 팬들도 "둘이 서로 챙기는 게 진짜다"라는 걸 더 크게 느낄 수 있고요.',
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
        subheading: '가끔은 상대가 먼저 이끌게 해보는 것도 재밌을 거예요',
        text: '늘 먼저 챙기는 쪽이다 보니, 가끔은 상대가 먼저 나서서 리드하게 맡겨보는 것도 재밌는 그림이 될 거예요. 의외로 야무지게 이끄는 모습에 팬들도 놀랄 수 있고요. 챙기는 역할을 가끔 내려놓아 보면, 이 케미가 훨씬 다채롭게 보여요.',
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
        subheading: '티격태격도 팀의 코너로 만들어보기',
        text: '예측 불가능한 텐션 자체가 매력이니, 아예 그 티격태격을 브이로그나 예능 코너처럼 즐겨보는 것도 재밌을 거예요. 서로 놀리고 놀림받는 걸 콘텐츠로 만들어보면, 팬들도 그 케미를 더 즐겁게 볼 수 있고요. 이 텐션을 굳이 눌러 없애려 하지 말고, 팀의 특색으로 살려보는 게 좋아요.',
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
        subheading: '가끔은 상대에게 무대를 맡겨보는 것도 멋질 거예요',
        text: '늘 중심을 잡는 쪽이다 보니, 가끔은 상대에게 무대의 중심을 맡기고 한 발 물러나 보는 것도 멋진 그림이 될 거예요. 상대의 색깔이 온전히 드러나는 순간을 만들어주면, 팬들도 두 사람의 케미를 더 다각도로 즐길 수 있고요. 리드와 서포트를 번갈아 해보는 게, 이 최강 듀오를 더 오래가게 해요.',
      },
    },
    chemistryPoints: {
      same: {
        companion: {
          subheading: '같은 결의 매력을 가진 둘',
          text: '둘 다 비겁 기운이 강한 편이라, 무대 위에서도 서로를 대등한 파트너로 여기는 감각이 비슷해요. 같은 팀이었다면 어느 한쪽이 튀기보다, 나란히 서 있는 그림이 훨씬 자연스러웠을 거예요.',
        },
        output: {
          subheading: '같은 결의 매력을 가진 둘',
          text: '둘 다 식상 기운이 강한 편이라, 무대에서 뿜어내는 표현력과 텐션이 서로 겹쳐요. 같은 팀이었다면 둘이 함께 있는 파트가 유난히 생동감 넘치는 구간으로 편집됐을 거예요.',
        },
        wealth: {
          subheading: '같은 결의 매력을 가진 둘',
          text: '둘 다 재성 기운이 강한 편이라, 무대 밖에서 현실적으로 팀을 챙기는 감각이 서로 닮아 있어요. 스케줄 관리든 팀 살림이든, 같은 방식으로 야무지게 챙겼을 조합이에요.',
        },
        officer: {
          subheading: '같은 결의 매력을 가진 둘',
          text: '둘 다 관성 기운이 강한 편이라, 책임감 있고 진지하게 무대를 대하는 감각이 서로 닮아 있어요. 같은 팀이었다면 연습부터 완벽하게 준비하는 태도가 서로 잘 통했을 거예요.',
        },
        resource: {
          subheading: '같은 결의 매력을 가진 둘',
          text: '둘 다 인성 기운이 강한 편이라, 팀 안에서 서로를 다독이고 챙기는 감각이 닮아 있어요. 같은 팀이었다면 팀 전체의 정서적 안정감을 둘이 함께 책임졌을 확률이 높아요.',
        },
      },
      different: {
        subheading: '서로 다른 매력이 만나는 조합',
        text: '십성으로 보면 서로 강조되는 매력 포인트가 다른 편이라, 무대 위에서도 서로 다른 색깔을 보여줬을 조합이에요. 그 다름이 오히려 팀 전체의 케미를 더 다채롭게 만들어줬을 거예요.',
      },
    },
    noblemanBonus: {
      subheading: '이 케미 자체가 귀인 기운의 일부일 수도 있어요',
      text: '둘 중 한쪽 사주에 천을귀인이 있는 조합이에요 — 전통적으로 좋은 인연이 따라오는 자리로 읽혀요. 같은 팀이 됐다는 상상 자체가, 그냥 지나칠 수도 있었던 좋은 인연의 한 형태일 수 있어요.',
    },
  },
};

export function getGroupChemistryCopy(lang, relation) {
  return (groupChemistryTemplates[lang] || groupChemistryTemplates.en)[relation];
}

export function getChemistryPoints(lang, myCategory, otherCategory) {
  const bank = (groupChemistryTemplates[lang] || groupChemistryTemplates.en).chemistryPoints;
  return myCategory === otherCategory ? bank.same[myCategory] : bank.different;
}

export function getNoblemanBonus(lang) {
  return (groupChemistryTemplates[lang] || groupChemistryTemplates.en).noblemanBonus;
}
