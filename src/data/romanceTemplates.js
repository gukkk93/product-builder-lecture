// Romance copy bank for /romance — same 5 Five Element relation keys as
// compatibilityTemplates.js, layered under 3 "situations" (reunion, crush,
// theirFeelings). No fandom vocabulary; this is general relationship
// content. Reunion also gets one shared closing line (see
// getRomanceClosing) appended after the per-relation line at render time,
// rather than duplicated into all 25 reunion lines — keeps that one editable
// in one place.
export const romanceTemplates = {
  en: {
    reunion: {
      same: {
        tier: 'Same Wavelength, Still',
        lines: [
          "The reason this is hard to let go of is simple — you two were never really out of sync to begin with. That kind of ease doesn't just disappear because the relationship did.",
          "You'd probably fall back into old rhythms faster than either of you expects. Familiarity like this doesn't fade, it just goes quiet for a while.",
          "Getting back together wouldn't feel like starting over — it would feel like picking up a conversation you paused, not ended.",
          "This is the kind of history that doesn't really close. Even apart, you'd likely still finish each other's sentences without trying.",
          "If you're wondering whether the connection is still there, it probably is — this pairing rarely fully switches off, it just dims.",
        ],
      },
      otherGeneratesMe: {
        tier: 'They Still Show Up For You',
        lines: [
          "Even now, their energy has a way of steadying yours — that's probably part of why moving on has felt harder than you expected.",
          "This is the kind of ex who, if they reached out, would still know exactly what to say to make your day easier. That doesn't wear off quickly.",
          "You'd likely notice, if you got back in touch, that being around them still feels like relief rather than effort.",
          "Some relationships take from you even after they end. This isn't that kind — whatever you got from them probably still lingers, quietly.",
          "If there's a version of them showing up again that would actually help you, it's this one — steady, generous, in no rush.",
        ],
      },
      iGenerateOther: {
        tier: 'You Were the One Giving',
        lines: [
          "You were likely the one keeping the relationship fed — the effort, the initiating, the emotional labor. If you're considering reunion, ask what would be different this time.",
          "This dynamic tends to leave the giver a little depleted. Before reaching back out, it's worth knowing whether you'd be doing the same thing again.",
          "You probably gave more than you got here, and that doesn't just resolve itself with time apart — it resolves with an actual conversation.",
          "If you go back, go back with clearer terms. This pairing works best when the generosity runs both ways, not just from you.",
          "Missing someone you gave a lot to isn't the same as missing a relationship that worked. Worth separating those two feelings before deciding anything.",
        ],
      },
      otherOvercomesMe: {
        tier: 'Unfinished Tension',
        lines: [
          "This wasn't an easy relationship, and it's probably not an easy thing to move on from either — the ones with real friction tend to stay unresolved the longest.",
          "If you're still thinking about them, it's likely because something here never got fully worked out, not because the relationship itself was simple or good.",
          "This is the kind of ex you'd overanalyze a single text from. That tension hasn't gone anywhere, whether or not the relationship should have.",
          "Reunion here isn't a clean idea — it's a complicated one, and it's okay to admit that's exactly why it's tempting.",
          "Some connections don't end quietly. If this is one of them, the pull back isn't really about them being right for you — it's about the story feeling unfinished.",
        ],
      },
      iOvercomeOther: {
        tier: 'You Held the Steadier Hand',
        lines: [
          "You were probably the more grounded one in this relationship — the one holding things together more often than not. That's worth remembering before you go back to doing it again.",
          "If they've reached out, or you're considering reaching out, ask honestly whether they've grown into meeting you halfway, or whether you'd still be carrying most of it.",
          "This dynamic can look like devotion from the outside and feel like exhaustion from the inside. Worth being honest with yourself about which one it actually was.",
          "You'd likely be the one steadying things again if you got back together — not necessarily a bad thing, just worth going in with eyes open.",
          "Missing being needed isn't quite the same as missing the relationship. Worth sitting with that difference before deciding anything.",
        ],
      },
    },
    crush: {
      same: {
        tier: 'Kindred Spirits',
        lines: [
          "There's a real chance this isn't one-sided for long — matching energy like this tends to get noticed, even if nothing's been said yet.",
          "You'd probably feel unusually understood around them, like they get your sense of humor without you having to explain it. That's rarely one-directional.",
          "This is the kind of crush that could turn into something real fast, precisely because there'd be so little translating to do between you two.",
          "If you're overthinking every interaction, it might be worth remembering — people this in sync with you tend to notice you back.",
          "This isn't a crush you'd have to talk yourself into. The ease you feel around them is a pretty good sign, not just wishful thinking.",
        ],
      },
      otherGeneratesMe: {
        tier: 'They Make Everything Easier',
        lines: [
          "Just being around them probably makes your day better without much effort on their part — which is exactly the kind of energy that's easy to fall for.",
          "This is the kind of crush that sneaks up on you. You didn't decide to like them so much as you noticed, one day, that they'd become a bright spot.",
          "If you're looking for a sign this feeling is worth acting on, it's this: they make things feel lighter, and that's not nothing.",
          "You'd likely feel more like yourself around them, not less — a good sign for a crush that could turn into something steadier.",
          "This crush isn't complicated to explain, even if it's hard to admit out loud: they're just genuinely good for your mood.",
        ],
      },
      iGenerateOther: {
        tier: "You're Already All In",
        lines: [
          "You're probably the one noticing every little thing about them — that's this pairing's signature. The risk is caring before you know if it's mutual.",
          "This crush would bring out your most generous, most attentive self. Just make sure you're getting some of that energy reflected back before you go all in.",
          "You'd likely find yourself making excuses to talk to them, remembering small details, rooting for their good days. That's real investment — worth eventually finding out if it's returned.",
          "This is the kind of crush where you give first and hope the timing works out. It often does, but it's fair to want to know sooner rather than later.",
          "You're the type to fall for someone through their actual personality, not just the idea of them — which makes this crush a little more real than most.",
        ],
      },
      otherOvercomesMe: {
        tier: 'The Magnetic, Confusing Kind',
        lines: [
          "This isn't a calm, easy crush — it's the kind that keeps you a little off-balance, replaying moments you can't quite read.",
          "You'd probably overanalyze one glance from them more than a whole conversation with anyone else. That's not comfortable, but it is compelling.",
          "This crush has an edge to it — you never fully know where you stand, and that uncertainty is exactly what keeps you hooked.",
          "Not every crush is supposed to feel simple. This one asks a little more of you — more patience, more nerve — which is part of why it feels so real.",
          "If this crush has you a little unsettled, that's on brand for this pairing — the confusing ones often turn out to be the ones worth paying attention to.",
        ],
      },
      iOvercomeOther: {
        tier: "You're the Calm in Their Storm",
        lines: [
          "You'd probably come across as the steady, grounded one to them — which is a quietly attractive quality, even if it doesn't feel exciting from the inside.",
          "This crush would bring out your protective side before you even realize it. Not a bad look, just worth knowing that about yourself.",
          "You might be the person they didn't expect to feel calm around — and calm, it turns out, is more magnetic than most people think.",
          "There's a good chance they notice your steadiness before you notice their interest. Worth paying attention either way.",
          "This isn't a chaotic crush — it's one where you'd likely be the anchor. Being someone's calm can be its own kind of romantic.",
        ],
      },
    },
    theirFeelings: {
      same: {
        tier: 'They See Themselves in You',
        lines: [
          "There's a good chance they feel unusually understood around you — like they don't have to explain themselves as much as they do with other people.",
          "To them, you probably read as familiar in a good way — not boring, just easy. That's rarer than it sounds, and they likely notice it.",
          "They'd probably describe you, if asked, as someone who just gets it — gets them — without needing much explained.",
          "In their head, you're likely filed under 'easy to be around,' which from this pairing is a genuine compliment, not a small one.",
          "If they think about it, they probably feel like less of a performance is required around you than around most people.",
        ],
      },
      otherGeneratesMe: {
        tier: 'They Feel Steadied By You',
        lines: [
          "You likely have a settling effect on them, even if neither of you has named it — they probably feel calmer, not more anxious, after spending time with you.",
          "In their mind, you're probably the person who makes things feel more manageable. That's a quiet but real kind of importance.",
          "They may not say it outright, but you likely function as a kind of relief for them — someone who makes hard days a little easier.",
          "If you asked them what they liked about you, 'you make things easier' is a strong guess for what they'd land on, even if it's not the first thing they'd say.",
          "They probably don't fully realize how much they lean on your presence until it's missing — that's this pairing's quiet signature.",
        ],
      },
      iGenerateOther: {
        tier: 'They Notice You Trying',
        lines: [
          "They're likely aware, on some level, that you put in effort for them — and it probably reads as genuine, not performative.",
          "In their head, you're probably someone who shows up — reliably, generously, without making a big deal of it. That doesn't go unnoticed.",
          "They may not always reciprocate at the same pace, but they likely do register how much thought you put in. That awareness counts for something.",
          "If they had to describe your role in their life, 'someone who's there for me' is a likely answer, whether or not they've said it out loud.",
          "They probably feel a quiet gratitude toward you, even if it doesn't come up in conversation — this dynamic tends to register more than it announces.",
        ],
      },
      otherOvercomesMe: {
        tier: "You're Hard for Them to Read",
        lines: [
          "You probably keep them a little on their toes, which — whether or not you intend it — tends to hold someone's attention rather than lose it.",
          "In their head, you're likely someone they can't quite predict, and that unpredictability is doing more work than you'd expect.",
          "They may find you a little hard to figure out, and that's not necessarily a bad sign — this pairing tends to stay interested precisely because nothing's fully settled.",
          "There's a good chance they think about your interactions more than they let on, replaying them the way people do with things they can't quite resolve.",
          "You probably don't fully register as 'easy' to them — but easy isn't always what keeps someone's attention. This might be.",
        ],
      },
      iOvercomeOther: {
        tier: 'They Feel Safe With You',
        lines: [
          "They likely feel a kind of quiet safety around you — like you're someone who wouldn't let things get out of hand, even if they never said that out loud.",
          "In their mind, you're probably the dependable one — the person they'd trust to keep a level head when they can't.",
          "They may lean on your steadiness more than they'd admit, especially when things around them feel unpredictable.",
          "If asked to describe you, 'grounded' or 'someone I trust' would be a reasonable guess for what they'd say.",
          "They probably feel more like themselves, not less, when you're around — which is this pairing's quiet strength.",
        ],
      },
    },
  },
  ko: {
    reunion: {
      same: {
        tier: '여전히 같은 파장',
        lines: [
          "쉽게 못 놓는 이유가 간단해요 — 애초에 두 사람, 결이 어긋난 적이 없었거든요. 이런 편안함은 관계가 끝났다고 갑자기 사라지지 않아요.",
          "다시 만나면 예상보다 빨리 예전 리듬으로 돌아갈 확률이 높아요. 이런 익숙함은 사라지는 게 아니라 잠깐 조용해질 뿐이에요.",
          "재회한다면 처음부터 다시 시작하는 느낌보다는, 잠깐 멈췄던 대화를 이어가는 느낌에 가까울 거예요.",
          "쉽게 안 끝나는 인연이에요. 떨어져 있어도 애쓰지 않고 서로 말을 알아듣는 사이일 확률이 높아요.",
          "아직 연결이 남아있는지 궁금하다면, 아마 남아있을 거예요 — 이런 조합은 완전히 꺼지기보다 잠깐 어두워지는 쪽에 가까워요.",
        ],
      },
      otherGeneratesMe: {
        tier: '여전히 채워주는 사람',
        lines: [
          "지금도 그 사람 기운이 은근히 나를 다독여주고 있을 거예요 — 그래서 놓는 게 생각보다 힘들었던 걸지도요.",
          "연락이 다시 닿으면, 그 사람은 여전히 뭐라고 말해야 내 하루가 편해지는지 정확히 아는 사람일 확률이 높아요.",
          "다시 연락해보면 알 수 있을 거예요 — 옆에 있는 게 애쓰는 느낌이 아니라 여전히 편안함에 가깝다는 걸요.",
          "어떤 관계는 끝나도 계속 뭔가를 가져가요. 이건 그런 관계가 아니에요 — 그 사람에게서 받았던 건 아마 지금도 조용히 남아있을 거예요.",
          "다시 나타나서 진짜 도움이 될 사람이 있다면, 이 조합이에요 — 든든하고, 베풀 줄 알고, 서두르지 않는 쪽이요.",
        ],
      },
      iGenerateOther: {
        tier: '내가 더 많이 준 쪽',
        lines: [
          "관계를 먹여 살리던 쪽은 아마 나였을 거예요 — 노력도, 먼저 다가가는 것도, 감정 노동도요. 재회를 생각한다면 이번엔 뭐가 달라질지부터 물어보세요.",
          "이 조합은 주는 쪽을 자꾸 지치게 만들어요. 다시 연락하기 전에, 또 같은 걸 반복하게 되는 건 아닌지부터 확인하는 게 좋아요.",
          "받은 것보다 준 게 많았을 확률이 높고, 이건 그냥 시간이 지난다고 저절로 풀리는 문제가 아니에요 — 진짜 대화가 필요해요.",
          "다시 만난다면, 이번엔 조건을 좀 더 명확히 하세요. 이 조합은 베푸는 게 한쪽에서만이 아니라 양쪽에서 오갈 때 제일 잘 작동해요.",
          "많이 줬던 사람이 그리운 것과, 잘 맞았던 관계가 그리운 건 다른 감정이에요. 결정 내리기 전에 이 둘을 구분해보는 게 좋아요.",
        ],
      },
      otherOvercomesMe: {
        tier: '끝나지 않은 긴장감',
        lines: [
          "편한 연애는 아니었을 거고, 놓는 것도 쉽지 않았을 거예요 — 진짜 마찰이 있던 관계일수록 오래 마음에 남거든요.",
          "여전히 그 사람 생각이 난다면, 관계가 단순히 좋았기 때문이 아니라 뭔가 제대로 풀리지 않은 게 남아있어서일 확률이 높아요.",
          "문자 하나에도 유난히 신경 쓰게 만드는 상대였을 거예요. 그 긴장감은 관계가 끝났다고 사라지지 않아요.",
          "여기서 재회는 깔끔한 선택이 아니에요 — 복잡한 선택이고, 그게 오히려 끌리는 이유라는 걸 인정해도 괜찮아요.",
          "어떤 인연은 조용히 끝나지 않아요. 이게 그런 경우라면, 다시 끌리는 이유는 그 사람이 맞아서가 아니라 이야기가 아직 안 끝난 것 같아서일 거예요.",
        ],
      },
      iOvercomeOther: {
        tier: '더 단단했던 건 나',
        lines: [
          "이 관계에서 더 중심을 잡던 쪽은 아마 나였을 거예요 — 다시 그 역할로 돌아가기 전에, 그걸 기억해두는 게 좋아요.",
          "연락이 왔거나 먼저 연락을 고민 중이라면, 그 사람이 이제는 나만큼 다가올 줄 아는 사람이 됐는지, 아니면 여전히 내가 대부분을 짊어지게 될지 솔직하게 확인해보세요.",
          "이 조합은 밖에서 보면 헌신처럼 보이고 안에서 느끼면 지침처럼 느껴질 수 있어요. 실제로 어느 쪽이었는지 스스로에게 솔직해지는 게 좋아요.",
          "다시 만난다면 또 한 번 중심을 잡는 쪽이 될 확률이 높아요 — 나쁜 건 아니지만, 알고 시작하는 게 나아요.",
          "필요한 사람이 되는 게 그리운 것과, 그 관계 자체가 그리운 건 조금 달라요. 결정하기 전에 그 차이를 한번 들여다보세요.",
        ],
      },
    },
    crush: {
      same: {
        tier: '닮은 마음',
        lines: [
          "이 마음, 짝사랑으로 오래 안 남을 가능성이 꽤 있어요 — 이렇게 결이 비슷하면 아직 말 안 했어도 상대도 눈치챘을 확률이 높거든요.",
          "그 사람 앞에서 유난히 이해받는 느낌이 들 거예요 — 농담 코드까지 설명 안 해도 통하는 그런 느낌이요. 이런 건 보통 일방적이지 않아요.",
          "이런 짝사랑은 생각보다 빨리 진짜가 될 수 있어요, 서로 맞춰갈 게 별로 없어서요.",
          "매 순간을 너무 곱씹고 있다면 이걸 기억하세요 — 이렇게 잘 통하는 사람은 보통 나도 눈치채고 있을 확률이 높다는 거요.",
          "억지로 좋아하려고 애쓸 필요 없는 마음이에요. 함께 있을 때 느끼는 편안함 자체가 꽤 괜찮은 신호예요, 그냥 희망 사항이 아니라요.",
        ],
      },
      otherGeneratesMe: {
        tier: '모든 걸 편하게 만드는 사람',
        lines: [
          "그 사람 옆에 있는 것만으로 하루가 나아지는 느낌일 거예요, 별로 애쓰지 않아도요 — 딱 빠지기 쉬운 그런 에너지예요.",
          "이런 짝사랑은 어느새 스며들어요. 좋아하기로 결심했다기보다, 어느 날 문득 그 사람이 내 하루의 밝은 부분이 됐다는 걸 깨닫는 쪽에 가까워요.",
          "이 마음이 행동으로 옮길 만한 가치가 있는지 신호를 찾고 있다면, 이거예요 — 그 사람만 있으면 뭔가 가벼워진다는 것, 그게 작은 게 아니에요.",
          "그 사람 앞에서 나답지 않아지는 게 아니라 오히려 더 나다워질 확률이 높아요 — 더 단단한 관계로 이어질 만한 좋은 신호예요.",
          "이 마음은 설명하기 어렵지 않아요, 말로 꺼내기 조금 민망할 뿐이죠 — 그 사람은 그냥 내 기분을 진짜로 좋게 만들어주는 사람이라는 것뿐이에요.",
        ],
      },
      iGenerateOther: {
        tier: '이미 마음 다 준 쪽',
        lines: [
          "그 사람의 사소한 것까지 다 눈치채는 쪽은 아마 나일 거예요 — 이 조합의 특징이죠. 위험한 건 마음이 닿았는지 모른 채 먼저 마음을 쏟는다는 거예요.",
          "이 짝사랑은 가장 다정하고 배려 깊은 내 모습을 끌어내요. 다만 그만큼의 마음이 돌아오고 있는지도 챙기면서 가는 게 좋아요.",
          "그 사람과 이야기할 핑계를 자꾸 만들고, 사소한 걸 기억하고, 좋은 날을 응원하게 될 거예요. 이건 진짜 마음이에요 — 언젠가는 이게 서로인지 확인해볼 가치가 있어요.",
          "이런 짝사랑은 내가 먼저 주고 타이밍이 맞기를 바라는 쪽이에요. 대체로 잘 맞긴 하지만, 너무 늦지 않게 알고 싶은 마음도 당연해요.",
          "이미지가 아니라 그 사람의 진짜 성격에 반하는 타입이에요 — 그래서 이 짝사랑이 다른 것보다 조금 더 진짜에 가까워요.",
        ],
      },
      otherOvercomesMe: {
        tier: '설레면서도 헷갈리는 마음',
        lines: [
          "편안하고 잔잔한 짝사랑은 아니에요 — 순간순간을 자꾸 곱씹게 만들고, 살짝 흔들리게 만드는 쪽이에요.",
          "다른 사람과의 대화 전체보다 그 사람의 눈빛 하나를 더 오래 곱씹게 될 거예요. 편하진 않지만, 확실히 끌려요.",
          "이 마음엔 날카로운 구석이 있어요 — 내가 어디 서 있는지 잘 모르겠는 느낌, 그 불확실함이 오히려 계속 신경 쓰이게 만들어요.",
          "모든 짝사랑이 다 단순해야 하는 건 아니에요. 이건 조금 더 많은 걸 요구해요 — 인내심도, 용기도요. 그래서 더 진짜처럼 느껴지는 거고요.",
          "이 마음이 좀 불안정하게 느껴진다면, 이 조합답게 흘러가는 거예요 — 헷갈리는 마음일수록 결국 신경 쓸 가치가 있는 경우가 많아요.",
        ],
      },
      iOvercomeOther: {
        tier: '폭풍 속 나만 침착한 쪽',
        lines: [
          "그 사람 눈엔 내가 든든하고 중심 잡힌 사람으로 보일 확률이 높아요 — 설레는 매력은 아니어도 은근히 끌리는 포인트예요.",
          "이 짝사랑은 나도 모르게 보호 본능을 끌어내요. 나쁜 인상은 아니니, 내가 그런 사람이라는 것만 알아두면 돼요.",
          "그 사람이 예상 못 했던 방식으로 내 옆에서 편안함을 느낄 수도 있어요 — 그리고 편안함은 생각보다 훨씬 매력적이에요.",
          "내가 그 사람한테 관심 있다는 걸 눈치채기 전에, 그 사람이 먼저 내 안정감을 눈치챌 확률이 커요. 어느 쪽이든 주의 깊게 볼 만해요.",
          "혼란스러운 짝사랑이 아니에요 — 오히려 내가 중심이 되는 쪽이에요. 누군가의 안정감이 돼주는 것도 하나의 로맨스예요.",
        ],
      },
    },
    theirFeelings: {
      same: {
        tier: '당신에게서 자신을 봐요',
        lines: [
          "그 사람도 나와 있을 때 유난히 이해받는 느낌을 받을 확률이 높아요 — 다른 사람들 앞에서보다 덜 설명해도 되는 느낌이요.",
          "그 사람에게 나는 좋은 의미로 익숙한 사람일 거예요 — 지루한 게 아니라 편한 쪽으로요. 생각보다 흔치 않은 거라 아마 눈치챘을 거예요.",
          "물어보면 아마 이렇게 말할 거예요 — 굳이 설명 안 해도 이해해주는 사람이라고요.",
          "그 사람 머릿속에서 나는 '편한 사람' 카테고리에 들어가 있을 확률이 높아요, 이 조합에선 이게 진짜 칭찬이에요.",
          "곰곰이 생각해보면, 그 사람은 나랑 있을 때 다른 사람들 앞에서보다 덜 애써도 된다고 느낄 거예요.",
        ],
      },
      otherGeneratesMe: {
        tier: '당신 덕분에 편안해져요',
        lines: [
          "둘 다 말한 적은 없어도, 나는 그 사람을 은근히 안정시켜주는 존재일 확률이 높아요 — 같이 있으면 더 불안해지는 게 아니라 더 차분해질 거예요.",
          "그 사람 마음속에서 나는 상황을 더 감당할 만하게 만들어주는 사람일 거예요. 조용하지만 진짜 중요한 존재감이에요.",
          "대놓고 말은 안 해도, 나는 그 사람에게 일종의 위안 같은 존재일 확률이 높아요 — 힘든 날을 조금 덜 힘들게 만들어주는요.",
          "내 어떤 점이 좋냐고 물으면, '네가 있으면 편해져'가 가장 유력한 답일 거예요, 첫마디로 안 나올 수는 있어도요.",
          "내 존재를 얼마나 많이 의지하고 있는지 그 사람도 모를 수 있어요 — 없어져 봐야 알게 되는 게 이 조합의 특징이에요.",
        ],
      },
      iGenerateOther: {
        tier: '노력을 알아채는 사람',
        lines: [
          "내가 그 사람을 위해 애쓰고 있다는 걸 어느 정도는 알아채고 있을 확률이 높아요 — 그리고 그게 진심으로 느껴질 거예요, 과하게 티 내지 않아도요.",
          "그 사람 머릿속에서 나는 꾸준히, 아낌없이, 별로 티 안 내면서 곁에 있어주는 사람일 거예요. 그런 건 눈에 안 띄어도 잊히지 않아요.",
          "속도는 나랑 다를 수 있어도, 내가 얼마나 신경 쓰고 있는지는 분명히 느끼고 있을 거예요. 그 정도 알아채는 것만으로도 의미가 있어요.",
          "내 역할을 한마디로 말해달라면, '내 곁에 있어주는 사람'이라고 답할 확률이 높아요, 입 밖으로 안 냈어도요.",
          "말로 꺼내진 않아도 조용한 고마움을 느끼고 있을 거예요 — 이 조합은 대놓고 티 내기보다 조용히 쌓이는 쪽이에요.",
        ],
      },
      otherOvercomesMe: {
        tier: '쉽게 안 읽히는 사람',
        lines: [
          "나는 그 사람을 살짝 긴장하게 만드는 존재일 확률이 높아요 — 의도했든 안 했든, 그런 예측 불가함이 관심을 놓치게 하기보단 더 붙잡아둬요.",
          "그 사람 머릿속에서 나는 쉽게 예측이 안 되는 사람일 거예요, 그리고 그 예측불가함이 생각보다 훨씬 큰 역할을 하고 있어요.",
          "나를 조금 어려운 사람으로 느낄 수도 있어요, 근데 그게 꼭 나쁜 신호는 아니에요 — 이 조합은 뭔가 완전히 정리되지 않았을 때 오히려 계속 관심이 가는 쪽이거든요.",
          "겉으로 티는 안 내도, 나와의 대화를 생각보다 자주 곱씹고 있을 확률이 높아요 — 딱 떨어지지 않는 걸 계속 되짚어보는 사람들이 그렇듯이요.",
          "그 사람에게 나는 딱히 '편한' 사람으로 안 느껴질 수도 있어요 — 근데 관심을 붙잡아두는 게 항상 편안함은 아니에요. 이게 그 경우일 수도 있고요.",
        ],
      },
      iOvercomeOther: {
        tier: '당신 곁에서 안심해요',
        lines: [
          "나와 있을 때 그 사람은 조용한 안전함을 느낄 확률이 높아요 — 입 밖으로 낸 적은 없어도, 내가 상황을 크게 흔들지 않을 사람이라는 걸 아는 거죠.",
          "그 사람 머릿속에서 나는 믿을 수 있는 사람, 흔들릴 때 중심을 잡아줄 사람일 확률이 높아요.",
          "인정은 안 해도 내 안정감에 은근히 기대고 있을 거예요, 특히 주변이 예측 불가능하게 느껴질 때요.",
          "나를 어떻게 설명할지 물으면, '든든한 사람' 또는 '믿을 수 있는 사람'이라는 답이 나올 확률이 높아요.",
          "내가 옆에 있을 때 그 사람은 오히려 더 자기다워질 확률이 높아요 — 이 조합의 조용한 강점이에요.",
        ],
      },
    },
  },
};

// Reunion-only closing line, appended after the per-relation line at render
// time rather than baked into all 25 reunion lines — one place to edit.
export const romanceClosing = {
  en: {
    reunion: "Whether you get back together or not, what matters most is what you do from here.",
  },
  ko: {
    reunion: '다시 만나든 아니든, 지금부터가 중요해요.',
  },
};

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/** Picks a copy blurb for a situation+relation, stable per pair of birthdates. */
export function getRomanceCopy(lang, situation, relation, seedInput) {
  const bank = romanceTemplates[lang] || romanceTemplates.en;
  const entry = bank[situation][relation];
  const seed = hashCode(seedInput);
  return { tier: entry.tier, line: entry.lines[seed % entry.lines.length] };
}

/** Shared closing line for a situation, if one exists (currently just reunion). */
export function getRomanceClosing(lang, situation) {
  const bank = romanceClosing[lang] || romanceClosing.en;
  return bank[situation] || null;
}
