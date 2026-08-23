// Roommate-lens compatibility copy for IdolMatch/DramaMatch's "룸메이트"
// relationshipMode — keyed by the same Five Element relation values
// getElementRelation() returns (see utils/saju.js). Same principle as
// friendshipTemplates.js: no romantic framing, shared by both idol and
// drama match since this reading is about everyday cohabitation, not
// the idol/actor's profession.
export const roommateTemplates = {
  en: {
    same: {
      tier: 'Perfectly Matched Schedules',
      line: "The kind of roommates whose routines line up without either of you trying.",
      explanation: {
        subheading: 'A Pairing Where Even the Habits Line Up',
        text: "With matching elements, your daily rhythm probably runs on a similar schedule — bedtime, shower order, even when you get around to chores tend to quietly overlap. This level of alignment between roommates is genuinely rare, so you'd likely settle into each other's routines naturally, without ever needing to set formal rules. With so little to actually clash over, living together probably feels a lot easier than either of you expected.",
      },
      livingPattern: {
        subheading: 'Probably the Same Kind of Early Bird or Night Owl',
        text: "If you're both early risers or both night owls, you avoid the whole situation where one person's up and moving while the other's trying to sleep. Your tidiness levels probably match too, so you skip the imbalance of one person being a neat freak and the other leaving things everywhere. Your sense of respecting each other's space naturally lines up as well — you probably never have to say \"this is my area\" out loud, since it just gets respected on its own.",
      },
      conflictStyle: {
        subheading: 'Not Much Room For Fights To Start',
        text: "Your habits are similar enough that there's little room for small friction to build up in the first place. If something does bother one of you, you probably reach for the same kind of fix — a slightly awkward stretch, then someone orders food and things ease back to normal on their own. Your timing for reaching out first tends to match too, so you avoid the one-sided dynamic where one person keeps waiting and slowly gets more frustrated.",
      },
      dailyMoment: {
        subheading: "The Late-Night 'Should We Order Food' Moment — Together",
        text: "Around 11pm, standing in front of the fridge weighing whether to order food — there's a good chance you'll catch your roommate mid-thought doing the exact same thing. You probably don't even need to ask what the other wants, which makes deciding on late-night food quick and painless. Small moments like this add up to a comfort that goes well beyond just sharing an address.",
      },
      watchFor: {
        subheading: "Don't Let the Ease Turn Into Neglect",
        text: "Because things run so smoothly, you might stop feeling the need to check in on each other at all. Even in an easy roommate relationship, it's worth deliberately asking how the other's doing and sharing the small stuff now and then. Leaning on familiarity alone can get stale — trying something new together every so often keeps this pairing feeling fresh.",
      },
    },
    otherGeneratesMe: {
      tier: 'The Roommate Who Puts You At Ease',
      line: 'The kind of roommate who turns the apartment into an actual retreat.',
      explanation: {
        subheading: 'A Home That Feels Restful Just By Sharing It',
        text: "Their energy feeds yours in the Five Element cycle, so living together probably makes the apartment itself feel like a retreat. Coming home exhausted and feeling your shoulders drop just from knowing they're there — you've probably had that exact moment. They don't have to do anything in particular; sharing the space with them is comfort enough on its own.",
      },
      livingPattern: {
        subheading: "A Rhythm That Falls Into Place Without Forcing It",
        text: "Your schedules don't have to match perfectly — they tend to adjust to your rhythm without making a thing of it. On a night you stayed up late, they were probably quietly considerate about it, and they don't seem to mind much when things are a little messy either. That kind of ease probably makes the apartment feel less like a space you have to manage and more like a place you can actually breathe in.",
      },
      conflictStyle: {
        subheading: 'Quick to Resolve, With Them Reaching Out First',
        text: "If something does come up, they're probably the one who steps in first to smooth things over. You don't have to agonize over the right way to apologize — they just casually start talking again like nothing happened, and things naturally ease back to normal. Relying on that too much can turn into a habit of leaving reconciliation to them, so it's worth being the one to reach out first every once in a while.",
      },
      dailyMoment: {
        subheading: 'The One Who Asks First When Late-Night Food Is On Your Mind',
        text: 'When you\'re craving something at night but can\'t quite decide alone, they\'re probably the one who asks first — "want to order something?" That one small gesture tends to melt away a surprising amount of the day\'s exhaustion. Small moments like this are exactly why living with this roommate feels unusually easy.',
      },
      watchFor: {
        subheading: 'Getting Used to Receiving? Take a Turn Giving Back',
        text: "Because they accommodate you so well, you might get used to always being the one who receives without noticing. Suggesting late-night food first sometimes, or looking out for them on a night they get home late, helps balance things out. Just occasionally showing you don't take that comfort for granted makes the relationship even sturdier.",
      },
    },
    iGenerateOther: {
      tier: 'The Roommate Who Runs the House',
      line: 'The kind of roommate who ends up handling the household without anyone assigning it to them.',
      explanation: {
        subheading: 'The One Who Ends Up Handling the Chores',
        text: "Your energy feeds theirs in the Five Element cycle, so living together probably means you end up looking after the household without really deciding to. If they seem busy, you quietly do the dishes for them; if something runs out, you're the one who restocks it first. Instead of feeling like a burden, taking care of things this way tends to feel natural — even satisfying.",
      },
      livingPattern: {
        subheading: 'The One Who Sets the Household Mood',
        text: "You probably end up shaping the tidiness and daily rhythm of the place, without it feeling like a heavy lift. They tend to settle comfortably into whatever rhythm you set, so things fall into sync without you ever having to ask them to match you. Respecting each other's space works the same way — once you lead with consideration, they naturally follow.",
      },
      conflictStyle: {
        subheading: 'Probably the One Who Steps In to Fix Things First',
        text: "If something does feel off, there's a good chance you're the one who speaks up first and smooths things over. Seeing them look uncomfortable, you can't just let it slide — you're the one who steps in to start the conversation. Since reaching out first comes so naturally to you, it's worth occasionally waiting to see if they'll reach out to you too, just to keep things balanced.",
      },
      dailyMoment: {
        subheading: 'The One Who Suggests Late-Night Food First',
        text: 'Noticing them looking hungry at night, you\'re probably the one who asks first — "want to order something?" You\'ve probably quietly remembered their favorite order and suggested it before they even said anything. Small moments of care like that end up playing a bigger role than you\'d think in making this place feel comfortable for them.',
      },
      watchFor: {
        subheading: "Check In Now and Then So the Care Doesn't Get Taken for Granted",
        text: "Because looking after things comes so naturally to you, there's a real risk that effort just gets taken for granted. It's worth checking whether they actually notice it, and letting them know you sometimes want to be looked after too. To avoid burning out as the household's default caretaker, give yourself permission to lean on them sometimes as well.",
      },
    },
    otherOvercomesMe: {
      tier: 'The Rollercoaster Roommate',
      line: "Living together isn't always smooth, which is exactly why it's never boring.",
      explanation: {
        subheading: "Not Always Easy — Which Is Why It's Never Boring",
        text: "In the Five Element cycle, their energy overcomes yours, so living together probably isn't purely smooth sailing. There have probably been moments where a comment or a habit of theirs caught you a little off guard. But that same unpredictability is exactly what keeps living together from ever feeling dull.",
      },
      livingPattern: {
        subheading: 'Schedules That Keep Clashing — In a Weirdly Fun Way',
        text: "With opposite sleep schedules or opposite tidiness levels, it might take a while to actually adjust to each other at first. But that difference also means you get a front-row seat to a completely different way of living. Watching them bustle around late at night and thinking \"we could not be more different\" with a laugh — you've probably had that moment.",
      },
      conflictStyle: {
        subheading: 'Friction Happens, But So Does Real Resolution',
        text: "With such different habits, small friction probably comes up more often than it would with a more matched pairing. But once you do clash, you tend to actually clear the air instead of letting it fester. Ordering late-night food together the next day like nothing happened — that scenario probably isn't hard to picture.",
      },
      dailyMoment: {
        subheading: 'A Quiet Standoff Over What to Order',
        text: "Even picking a late-night order can turn into a small standoff — one of you wants spicy, the other wants mild. But that back-and-forth usually ends in the fun compromise of just ordering both and splitting it. Compared to living with someone who orders the exact same thing every time, this makes for a much more varied set of memories.",
      },
      watchFor: {
        subheading: "Enjoy the Friction, But Don't Let It Tip Into Real Hurt",
        text: "The bickering is part of the charm here, but every so often it can genuinely tip into hurt feelings. It helps to stay aware of the line between joking and something real, and to be able to just say \"that actually stung\" when it matters. The more a relationship runs on this kind of friction, the more it needs solid trust underneath to actually last.",
      },
    },
    iOvercomeOther: {
      tier: 'The Roommate Who Holds It Together',
      line: 'The kind of roommate the whole household quietly runs on.',
      explanation: {
        subheading: 'The One Who Naturally Runs the Household',
        text: "In the Five Element cycle, your energy overcomes theirs, so living together probably means you end up leading the big and small decisions around the house without really deciding to. Whether it's sorting out bills or setting house rules, you're probably the one who steps up first. They tend to lean on you comfortably, which makes for a pretty stable pairing.",
      },
      livingPattern: {
        subheading: 'The One Who Sets the House Rules',
        text: "You probably end up sorting out the small stuff first — trash day, who cleans what — without much friction. They tend to go along with it without much resistance, which quietly keeps the household running on a real system. Setting that tone without it ever feeling naggy is exactly this pairing's strength.",
      },
      conflictStyle: {
        subheading: 'Probably the One Who De-escalates First',
        text: "If a conflict does come up, you're probably the one who steps in to sort it out before things get too heated. There's a good chance you've calmly offered a \"how about this instead?\" while they were flustered, and it resolved things fast. That said, always being the one to smooth things over can rob them of the chance to work through a problem themselves, so it's worth stepping back sometimes.",
      },
      dailyMoment: {
        subheading: 'The One Who Decides on Late-Night Food Without Much Fuss',
        text: 'Even ordering late-night food, you probably lead with a quick "how about this?" and get things decided fast. They tend to go along comfortably with your suggestion, which noticeably cuts down the energy spent on small decisions. Little moments like this add up to you feeling like a genuinely steadying presence for them.',
      },
      watchFor: {
        subheading: "Don't Decide Everything — Ask Sometimes",
        text: 'Once leading decisions becomes second nature, it\'s easy to forget to actually ask what they want. Occasionally asking "what do you feel like doing?" first makes this relationship feel more balanced. Being the reliable one is great, but regularly leaving room for them to choose is what makes it last.',
      },
    },
  },
  ko: {
    same: {
      tier: '생활 패턴 완벽 일치',
      line: '따로 맞추지 않아도 이미 리듬이 겹치는, 그런 룸메이트예요.',
      explanation: {
        subheading: '생활 방식까지 자연스럽게 맞는 조합',
        text: '오행이 같아서 생활 리듬 자체가 비슷하게 흘러갈 확률이 높아요 — 잠드는 시간, 씻는 순서, 집안일 하는 타이밍까지 은근히 겹치는 편이에요. 룸메이트 사이에서 생활 패턴이 이 정도로 맞는 건 흔치 않은 일이라, 딱히 규칙을 정하지 않아도 자연스럽게 서로의 루틴에 스며들게 될 거예요. 부딪힐 일 자체가 적어서, 같이 사는 게 생각보다 훨씬 수월하게 느껴질 확률이 높아요.',
      },
      livingPattern: {
        subheading: '아침형이든 저녁형이든, 같은 쪽일 확률이 높음',
        text: '아침형이면 둘 다 아침형, 저녁형이면 둘 다 저녁형일 확률이 높아서, 한 사람이 자고 있을 때 다른 사람이 부산스럽게 움직이다 눈치 보는 상황 자체가 잘 안 생겨요. 정리정돈 성향도 비슷해서, 한쪽만 유난히 깔끔 떨거나 한쪽만 어지르는 그런 불균형이 별로 없을 거고요. 서로의 공간을 존중하는 감각도 자연스럽게 비슷해서, 굳이 "여긴 내 구역이야" 같은 말을 할 필요 없이 각자의 영역이 자연스럽게 지켜지는 편이에요.',
      },
      conflictStyle: {
        subheading: '싸울 일 자체가 잘 안 생기는 조합',
        text: '생활 방식이 워낙 비슷해서 자잘한 갈등이 생길 여지 자체가 적은 편이에요. 그래도 혹시 서운한 게 생기면, 둘 다 비슷한 방식으로 화해를 시도할 확률이 높아요 — 어색하게 눈치 보다가 먼저 배달 음식 하나 시키면서 자연스럽게 풀리는 그런 흐름이요. 서로 먼저 말 거는 타이밍도 비슷해서, 한쪽만 계속 기다리다 지치는 그런 일방적인 화해 구도는 잘 안 생겨요.',
      },
      dailyMoment: {
        subheading: '야식 먹을지 말지, 동시에 고민하는 밤',
        text: '밤 11시쯤 냉장고 앞에서 "먹을까 말까" 고민하다가, 마침 상대도 같은 생각으로 나와서 눈이 마주치는 그런 순간이 자주 생길 확률이 높아요. 굳이 물어보지 않아도 서로 뭘 원하는지 대충 알아서, 야식 메뉴 정하는 데 걸리는 시간도 짧은 편이고요. 이런 사소한 순간들이 쌓여서, 같이 사는 사람 이상의 편안함을 만들어주는 조합이에요.',
      },
      watchFor: {
        subheading: '너무 편해서 서로에게 소홀해지지 않기',
        text: '생활이 워낙 잘 맞다 보니, 오히려 서로에게 굳이 신경 쓸 필요를 못 느끼게 될 수도 있어요. 편한 사이일수록 가끔은 의식적으로 안부를 묻고, 사소한 것도 나눠보는 노력이 필요해요. 익숙함에 기대기만 하지 않고, 가끔은 새로운 걸 같이 시도해보는 것도 이 조합을 계속 신선하게 만들어줘요.',
      },
    },
    otherGeneratesMe: {
      tier: '같이 있으면 마음이 편한 룸메',
      line: '집 자체가 쉼터처럼 느껴지게 만들어주는, 그런 룸메이트예요.',
      explanation: {
        subheading: '같이 있는 것만으로 저절로 마음이 편안해지는 집',
        text: '오행 상 상대의 기운이 나를 채워주는 관계라, 룸메이트로 함께 지내면 집 자체가 쉼터처럼 느껴질 확률이 높아요. 밖에서 지친 하루를 보내고 돌아왔는데, 상대가 있다는 사실만으로 긴장이 스르르 풀렸던 경험, 있을 수도 있어요. 딱히 뭘 해주지 않아도, 그냥 같은 공간에 있다는 것만으로 위안이 되는 그런 룸메이트예요.',
      },
      livingPattern: {
        subheading: '무리하지 않아도 자연스럽게 맞춰지는 리듬',
        text: '생활 패턴이 완벽히 같지는 않아도, 상대가 알아서 내 리듬에 맞춰주는 편이라 크게 부딪힐 일이 없어요. 내가 늦게 자는 날이면 조용히 배려해주고, 정리가 덜 된 날에도 크게 개의치 않아 하는 그런 여유가 있는 상대예요. 그 여유 덕분에, 집이 규칙으로 관리되는 공간이 아니라 편하게 숨 쉴 수 있는 공간으로 느껴질 확률이 높아요.',
      },
      conflictStyle: {
        subheading: '싸워도 금방 풀리는, 상대가 먼저 다가와 주는 화해',
        text: '혹시 갈등이 생겨도, 상대 쪽에서 먼저 다가와 분위기를 풀어주는 경우가 많을 거예요. 굳이 먼저 사과할 말을 고민하지 않아도, 상대가 먼저 아무렇지 않게 말을 걸어줘서 자연스럽게 화해가 되는 흐름이고요. 그 편안함에 기대다 보면, 나도 모르게 화해를 상대에게 미루는 습관이 생길 수 있으니 가끔은 먼저 다가가 보는 것도 필요해요.',
      },
      dailyMoment: {
        subheading: '야식 고민할 때, 먼저 물어봐 주는 쪽',
        text: '밤에 뭔가 먹고 싶은데 혼자 결정하기 애매할 때, 상대가 먼저 "뭐 시켜 먹을까?" 하고 물어봐 주는 경우가 많을 거예요. 그 사소한 배려 하나가 하루의 피로를 꽤 많이 풀어주는 편이고요. 이런 작은 순간들이 쌓여서, 이 룸메이트와 사는 게 유난히 편안하게 느껴지는 이유가 돼요.',
      },
      watchFor: {
        subheading: '받는 게 익숙해져도 가끔은 먼저 챙겨보기',
        text: '상대가 워낙 잘 맞춰주다 보니, 나도 모르게 계속 받는 쪽에만 익숙해질 수 있어요. 가끔은 내가 먼저 야식을 제안하거나, 상대가 늦게 들어오는 날 먼저 챙겨주는 식으로 균형을 맞춰보는 게 좋아요. 편안함이 당연한 게 아니라는 걸 가끔 표현해주는 것만으로도 관계가 더 단단해져요.',
      },
    },
    iGenerateOther: {
      tier: '내가 먼저 챙기는 살림꾼 룸메',
      line: '나도 모르게 집안일을 먼저 챙기게 되는, 그런 룸메이트가 될 확률이 높아요.',
      explanation: {
        subheading: '내가 먼저 집안일을 챙기게 되는 관계',
        text: '오행 상 내가 상대의 기운을 채워주는 관계라, 룸메이트로 지내면 나도 모르게 집안일이나 생활을 먼저 챙기는 쪽이 될 확률이 높아요. 상대가 바빠 보이면 대신 설거지를 해놓거나, 필요한 게 떨어지면 먼저 채워놓는 그런 살림꾼 포지션이요. 부담스럽기보다는, 그렇게 챙기는 게 오히려 자연스럽고 뿌듯하게 느껴지는 조합이에요.',
      },
      livingPattern: {
        subheading: '내가 자연스럽게 집안 분위기를 만드는 쪽',
        text: '정리정돈이나 생활 루틴을 내가 먼저 만들어가는 쪽이 되기 쉬워요 — 크게 부담스럽지 않게, 그냥 자연스럽게요. 상대는 그 분위기에 편하게 스며드는 편이라, 억지로 맞춰달라고 요구할 필요 없이 자연스럽게 리듬이 맞춰져요. 각자의 공간을 존중하는 것도, 내가 먼저 배려하는 태도를 보이면 상대도 자연스럽게 따라오는 편이고요.',
      },
      conflictStyle: {
        subheading: '먼저 다가가서 풀어주는 쪽이 되기 쉬움',
        text: '혹시 서운한 일이 생겨도, 먼저 말을 걸어서 분위기를 풀어주는 쪽이 나일 확률이 높아요. 상대가 어색해하는 게 보이면 그냥 넘어가지 못하고 먼저 다가가서 대화를 시도하게 되고요. 그렇게 먼저 다가가는 게 자연스러운 만큼, 가끔은 상대도 먼저 다가와 주길 기다려보는 것도 균형을 위해 필요해요.',
      },
      dailyMoment: {
        subheading: '야식 먼저 제안하는 쪽',
        text: '밤에 출출해 보이는 상대를 보면 먼저 "뭐 시켜 먹을까?" 하고 물어보는 쪽이 되기 쉬워요. 상대가 좋아하는 메뉴를 은근히 기억해뒀다가 먼저 제안하는 것도 자연스러운 일이고요. 그런 사소한 챙김들이 쌓여서, 이 집이 상대에게 편안한 공간으로 느껴지는 데 은근히 큰 역할을 하게 돼요.',
      },
      watchFor: {
        subheading: '챙기는 게 당연해지지 않게 가끔 확인하기',
        text: '내가 먼저 챙기는 게 자연스럽다 보니, 정작 그 노력이 당연하게 여겨질 위험도 있어요. 가끔은 그 챙김을 상대가 알아채고 있는지, 그리고 나도 챙김을 받고 싶을 때가 있다는 걸 표현해보는 게 좋아요. 일방적인 살림꾼 역할에 지치지 않으려면, 가끔은 나도 기대도 된다는 걸 스스로에게 허락해주세요.',
      },
    },
    otherOvercomesMe: {
      tier: '티키타카 롤러코스터 룸메',
      line: '편하지만은 않은데, 그래서 심심할 틈이 없는 동거예요.',
      explanation: {
        subheading: '편하지만은 않은데, 그래서 심심할 틈이 없는 동거',
        text: '오행 상 상대가 나를 극하는 관계라, 룸메이트로 지내면 마냥 편하지만은 않을 확률이 높아요. 예상 못 한 순간에 훅 들어오는 말이나 생활 습관에 살짝 부딪히는 순간이 있을 수도 있고요. 그런데 그 예측 불가능함이 오히려 같이 사는 걸 심심하지 않게 만들어주는 포인트예요.',
      },
      livingPattern: {
        subheading: '생활 패턴이 자꾸 어긋나는데, 그게 은근히 재밌음',
        text: '아침형/저녁형이 다르거나 정리정돈 성향이 반대라서, 처음엔 서로 맞춰가는 데 시간이 좀 걸릴 수 있어요. 그런데 그 다름 때문에 오히려 서로의 다른 세계를 구경하는 재미가 있고요. 상대가 늦은 밤 부산스럽게 뭔가 하는 모습을 보다가 "쟤는 진짜 나랑 다르네" 하고 웃었던 경험, 있을 수도 있어요.',
      },
      conflictStyle: {
        subheading: '부딪히는 빈도는 있지만 화해도 확실한 편',
        text: '생활 방식이 다른 만큼 자잘하게 부딪힐 일이 다른 조합보다는 많을 수 있어요. 그런데 한번 부딪히고 나면 오히려 확실하게 풀고 넘어가는 편이라, 앙금이 오래 남지는 않아요. 싸운 다음 날 아무 일 없었다는 듯 같이 야식을 시켜 먹으면서 풀렸던 경험, 상상해보면 낯설지 않을 거예요.',
      },
      dailyMoment: {
        subheading: '야식 메뉴로 은근히 신경전 벌이는 밤',
        text: '야식 메뉴 하나를 정할 때도 취향이 갈려서 은근한 신경전이 벌어질 수 있어요 — 한쪽은 매운 걸, 한쪽은 순한 걸 원하는 식으로요. 그런데 그렇게 티격태격하다가 결국 둘 다 시켜서 나눠 먹는 쪽으로 타협하게 되는, 그런 유쾌한 결말이 많은 편이에요. 매번 똑같은 메뉴만 시키는 동거보다, 이 쪽이 훨씬 다채로운 추억을 만들어줘요.',
      },
      watchFor: {
        subheading: '마찰을 즐기되 진짜 서운함으로 넘어가지 않게',
        text: '티격태격하는 게 이 조합의 매력이지만, 가끔은 그게 진짜 서운함으로 넘어갈 수도 있어요. 장난과 진심의 경계를 서로 잘 알아채는 게 중요하고, 필요하면 솔직하게 "그건 좀 서운했어"라고 말할 수 있는 사이가 되는 게 좋아요. 마찰 자체를 즐기는 관계일수록, 그 밑바탕에는 확실한 신뢰가 깔려 있어야 오래가요.',
      },
    },
    iOvercomeOther: {
      tier: '집안의 든든한 기둥 룸메',
      line: '집안의 크고 작은 일을 자연스럽게 이끌어가는, 그런 룸메이트예요.',
      explanation: {
        subheading: '내가 자연스럽게 집안을 이끌어가는 관계',
        text: '오행 상 내가 상대를 극하는 관계라, 룸메이트로 지내면 나도 모르게 집안의 크고 작은 결정을 이끌어가는 쪽이 될 확률이 높아요. 공과금 정리든, 집안 규칙이든, 먼저 나서서 정리하는 쪽이 당신일 확률이 높고요. 상대는 그런 당신 옆에서 오히려 편하게 기대는, 안정적인 조합이에요.',
      },
      livingPattern: {
        subheading: '생활 규칙을 자연스럽게 세우는 쪽',
        text: '쓰레기 버리는 요일, 청소 담당 같은 자잘한 규칙을 자연스럽게 먼저 정리하는 쪽이 되기 쉬워요. 상대는 그 규칙을 큰 저항 없이 따라오는 편이라, 집안이 은근히 체계적으로 굴러가게 돼요. 잔소리처럼 느껴지지 않게, 자연스럽게 분위기를 만들어가는 게 이 조합의 강점이에요.',
      },
      conflictStyle: {
        subheading: '갈등을 먼저 정리하는 쪽이 되기 쉬움',
        text: '혹시 갈등이 생겨도, 감정적으로 격해지기 전에 먼저 상황을 정리하려는 쪽이 당신일 확률이 높아요. 상대가 어쩔 줄 몰라 할 때 침착하게 "이렇게 하면 어때?" 하고 제안해서 상황을 풀어준 경험이 있을 수도 있고요. 다만 매번 내가 먼저 정리하다 보면, 상대가 스스로 문제를 풀어볼 기회를 뺏을 수도 있으니 가끔은 지켜봐 주는 것도 필요해요.',
      },
      dailyMoment: {
        subheading: '야식도 알아서 척척 정하는 쪽',
        text: '야식 메뉴를 정할 때도 큰 고민 없이 "이거 어때?" 하고 먼저 제안해서 결정을 빠르게 이끄는 편이에요. 상대는 그 제안에 편하게 따라오는 경우가 많고, 그 덕분에 사소한 결정에 드는 에너지가 확실히 줄어들어요. 이런 작은 순간들이 쌓여서, 상대에게는 당신이 있는 게 꽤 든든하게 느껴질 거예요.',
      },
      watchFor: {
        subheading: '다 정해주지 말고 가끔은 물어보기',
        text: '결정을 이끄는 게 익숙해지다 보면, 상대의 의견을 물어보는 걸 깜빡할 때가 있어요. 가끔은 "너는 뭐 하고 싶어?" 하고 먼저 물어봐 주는 게, 이 관계를 더 균형 잡히게 만들어줘요. 든든한 리더 역할도 좋지만, 상대에게도 선택할 기회를 자주 열어주는 게 오래가는 비결이에요.',
      },
    },
  },
};

export function getRoommateCopy(lang, relation) {
  return (roommateTemplates[lang] || roommateTemplates.en)[relation];
}
