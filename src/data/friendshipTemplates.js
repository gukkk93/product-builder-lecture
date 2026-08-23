// Friendship-lens compatibility copy for IdolMatch/DramaMatch's "친구"
// relationshipMode — keyed by the same Five Element relation values
// getElementRelation() returns (see utils/saju.js), shared by both idol
// and drama match since this reading is about the user's own life
// (travel, cafe hangouts), not about the idol/actor's profession. No
// romantic framing anywhere — friendship/parasocial-closeness language
// only, same principle already established for pillarSituational in
// idolMatchTemplates.js.
export const friendshipTemplates = {
  en: {
    same: {
      tier: 'Telepathic Best Friends',
      line: "The kind of friendship where you don't have to explain yourself — they just get it.",
      explanation: {
        subheading: "The Kind of Sync You Don't Have to Explain",
        text: "You and your bias run on matching Five Element energy, which basically means you move at the same wavelength — similar taste, similar tempo, similar timing on when to react to what. That kind of sync is genuinely rare between friends, so odds are you'd finish each other's sentences without either of you trying. Not having to explain yourself to a friend turns out to be a bigger relief than people expect.",
      },
      travelStyle: {
        subheading: 'Equally Good at Planning and Winging It',
        text: "Your travel styles probably line up too, which means there's not much room for friction when it's time to plan. If you're both planners, everything clicks into place; if you're both spontaneous, you end up genuinely enjoying the chaos instead of stressing about it. Getting lost together and both just laughing it off with an \"honestly, this is better\" — that scenario probably isn't hard to picture. Compare that to a friendship where one person plans and the other improvises — there'd usually be at least one quiet tension point on a trip like that, and this pairing mostly skips it.",
      },
      cafeChemistry: {
        subheading: 'Three Hours That Feel Like Thirty Minutes',
        text: "Sit down at a cafe together and the conversation probably never really stalls — one of you picks up exactly where the other left off. You've probably looked at the clock and been shocked that three hours had somehow passed. Silence doesn't feel awkward either — you just drift off into your own thoughts and drift right back into talking, no effort required. Compare that to a friendship where you're constantly scrambling for the next topic, and the ease here becomes obvious.",
      },
      howTheySeeYou: {
        subheading: 'The Friend Who Needs No Translation',
        text: "From your bias's side, you probably read as an easy, no-explanation-required kind of friend. You give off the vibe of someone they don't need to be formal around, someone who'd take whatever they say at face value without judging it. Even if they're guarded around other fans or acquaintances, this telepathic-friend energy is probably exactly the kind of presence that lets them actually relax.",
      },
      watchFor: {
        subheading: 'Make Room for a Different Opinion Now and Then',
        text: "When two people click this easily, it can get harder to actually challenge or surprise each other. Trading only expected reactions and familiar takes can quietly turn comfort into boredom if you let it. Deliberately floating a different opinion once in a while, or picking a destination neither of you would normally choose, is a good way to keep this chemistry from going stale.",
      },
    },
    otherGeneratesMe: {
      tier: 'The Friend Who Recharges You',
      line: "The kind of friend whose presence alone makes things feel lighter.",
      explanation: {
        subheading: 'Filled Up Just By Being Around Them',
        text: "Their element feeds yours in the Five Element cycle, so being around your bias probably makes you feel more energized without you doing anything to earn it. You've probably felt genuinely recharged just by sharing space with them, no pressure to make it eventful. This kind of friend doesn't need to plan something exciting — their presence alone tends to make the day better.",
      },
      travelStyle: {
        subheading: 'The One Who Quietly Handles the Itinerary',
        text: "On a trip together, your bias is probably the one who ends up quietly holding the schedule together and keeping the mood light. On a moment you were too drained to decide anything, they've probably been the one to gently ask \"how about this?\" and it was exactly the relief you needed. Compare that to a travel companion where you're both stalling on every decision, and the difference in ease is obvious.",
      },
      cafeChemistry: {
        subheading: 'Comfortable Even in Silence',
        text: "At a cafe, you don't need a big conversation — just sitting there doing your own thing and occasionally catching each other's eye is enough to make it a good time. After a rough day, meeting them and feeling your shoulders drop without either of you saying much — you've probably had that exact moment. Compare that to a hangout where you have to keep the energy up the whole time, and you'll notice how rare this quiet ease actually is.",
      },
      howTheySeeYou: {
        subheading: 'The Friend Who Puts Them At Ease',
        text: "From their side, you probably read as a friend they don't have to perform energy for. Not the flashiest presence, but somehow reassuring just by being there. Even if they're a little tense around other people, this friendship probably lets their shoulders drop without either of you trying.",
      },
      watchFor: {
        subheading: 'Give Back Sometimes, Not Just Receive',
        text: "This kind of ease can quietly slide into you always being the one who receives without noticing it. Being the one to reach out first, or take care of them for once, keeps this friendship healthy over the long run. Just noticing the comfort they give you, instead of treating it as a given, already makes the bond stronger.",
      },
    },
    iGenerateOther: {
      tier: 'The Friend You Look Out For',
      line: 'The kind of friend you find yourself taking care of before they even ask.',
      explanation: {
        subheading: 'The One Who Ends Up Caring First',
        text: "In the Five Element cycle, your energy feeds theirs, which tends to mean you find yourself looking out for them without really deciding to. When they look tired, you're probably the one who checks in first; when they seem to need something, you're probably the one who offers it first. Giving comes more naturally than receiving in this friendship — and instead of feeling like a burden, it tends to feel genuinely satisfying.",
      },
      travelStyle: {
        subheading: 'The One Who Ends Up Playing Tour Guide',
        text: "On a trip, you're probably the one who ends up planning the itinerary and scouting good spots without anyone asking you to. When they looked tired, you've probably been the one to suggest a break, or quietly rearrange the day to make it easier on them. Compare that to a trip where nobody steps up first and there's that faint awkwardness hanging over everything — this chemistry tends to make things easier for both of you instead.",
      },
      cafeChemistry: {
        subheading: 'The One Who Ends Up Listening',
        text: "At a cafe, you naturally end up the one asking the questions and doing more of the listening. When they opened up about something, you've probably been the first to say \"thanks for telling me that\" before they even needed to hear it. Compared to a friendship where you're always the one being listened to, this one-directional generosity of yours might stand out clearly by contrast.",
      },
      howTheySeeYou: {
        subheading: "The Friend Who's Got Their Back",
        text: "From their side, you probably read as the reliable one who steps up and takes care of things. There's a good chance you're the one they remember reaching out first during a hard moment. Sides of themselves they rarely show other people, they're probably more willing to show around a friend who looks out for them the way you do.",
      },
      watchFor: {
        subheading: 'Remember That Caring Takes Energy Too',
        text: "Because looking out for people comes so naturally to you, it's easy to hide it when you're the one running on empty. For this friendship to last, it helps to give yourself permission to actually be cared for sometimes. Building a deliberate back-and-forth, instead of a one-way flow of giving, keeps it sustainable.",
      },
    },
    otherOvercomesMe: {
      tier: "The Friend You Can't Stop Thinking About",
      line: 'Not the easiest friendship, but somehow the one that sticks with you the most.',
      explanation: {
        subheading: "Not Easy, Which Is Exactly Why It Sticks",
        text: "In the Five Element cycle, their energy overcomes yours, so being around your bias probably isn't purely comfortable. You've probably been mildly thrown off by a comment or reaction that came out of nowhere. But that unpredictability is exactly what keeps this friend on your mind — right when you think you've got them figured out, they show you a different side.",
      },
      travelStyle: {
        subheading: 'A Trip That Keeps Going Off-Plan — In a Good Way',
        text: "Even with a plan in place, your bias probably throws it off by suddenly wanting to do something else. It might catch you off guard at first, but going along with it has probably given you the most memorable moments of the trip more than once. Compare that to a trip that goes exactly as planned, and this unpredictable version is the one you end up replaying in your head longer.",
      },
      cafeChemistry: {
        subheading: "You Never Know Where the Conversation's Headed",
        text: "At a cafe, the conversation probably veers into completely unexpected territory more than once — jarring in the moment, but it usually ends up being the conversation you remember best. Compare that to an exchange of predictable questions and predictable answers, and this one has a way of staying with you long after it's over.",
      },
      howTheySeeYou: {
        subheading: 'Hard to Sum Up, Impossible to Stop Thinking About',
        text: "From their side, you probably read as someone hard to define in one sentence — and exactly because of that, someone who sticks in their mind. Surrounded by people who react in predictable ways, your unexpected side probably leaves a real impression. Not easy, maybe, but memorable in a way most friendships aren't.",
      },
      watchFor: {
        subheading: "Enjoy the Tension, But Don't Let It Run Forever",
        text: "The appeal here is unpredictability, but too much of it too often can shift into exhaustion. It's worth deliberately building in some stable, low-key moments together every so often. Enjoy the tension itself, but make sure trust gets built separately and consistently underneath it.",
      },
    },
    iOvercomeOther: {
      tier: 'The Friend Who Has Your Back',
      line: 'The friend who ends up stepping in front and shielding the other, without really deciding to.',
      explanation: {
        subheading: 'The One Who Ends Up Taking the Lead',
        text: "In the Five Element cycle, your energy overcomes theirs, which tends to mean you end up being the one who sorts things out around your bias without really deciding to. There's a good chance you're the one who makes the call without being asked, the one who looks for a solution the moment something goes wrong. From their side, having you around probably comes with a quiet sense of relief.",
      },
      travelStyle: {
        subheading: 'The One Who Steps Up When Things Go Sideways',
        text: "When something unexpected happens on a trip — a booking issue, a wrong turn — you're probably the one who naturally steps in to fix it. You've probably had a moment where they were flustered and you stayed calm and sorted it out, and things resolved fast because of that. Compare that to a trip where nobody steps up and everyone just scrambles, and this pairing clearly comes out ahead.",
      },
      cafeChemistry: {
        subheading: 'The One Who Naturally Steers the Conversation',
        text: "At a cafe, you probably end up steering the conversation, throwing out a new topic right before things get awkward. You might have noticed them going quiet and brought up something else before it became a lull. Moments that would've gotten uncomfortable without you probably slide right past, thanks to your lead.",
      },
      howTheySeeYou: {
        subheading: 'The Friend They Feel Steady Around',
        text: "From their side, you probably read as someone who'd stay calm and handle it no matter what happens. They might not say it out loud, but they probably feel more at ease with you around than they'd admit. Someone who usually has to hold everything together in front of other people might be learning, around you, that it's okay to lean on someone for once.",
      },
      watchFor: {
        subheading: 'Don’t Carry It All — Lean On Them Sometimes Too',
        text: "Always being the one who steps up can leave you without much space to lean on anyone yourself. For this friendship to stay balanced, it helps to be the one who asks for help every once in a while too. Being the reliable one doesn't mean you always have to handle everything perfectly — worth reminding yourself of that too.",
      },
    },
  },
  ko: {
    same: {
      tier: '텔레파시 단짝',
      line: '말 안 해도 통하는, 그런 친구 사이가 될 확률이 높아요.',
      explanation: {
        subheading: '말하지 않아도 통하는 사이',
        text: '오행 상 같은 기운이라 최애랑 나는 사실상 같은 파장으로 움직이는 편이에요 — 취향도, 텐션도, 리액션 타이밍도 자연스럽게 겹치는 경우가 많아요. 친구 사이에서 이런 싱크로율은 꽤 드문 편이라, 말을 반쯤만 해도 무슨 뜻인지 바로 알아듣는 그런 관계가 될 확률이 높아요. 설명하는 데 에너지를 쓸 필요가 없는 친구라는 게, 생각보다 큰 위안이 되는 부분이에요.',
      },
      travelStyle: {
        subheading: '계획도 즉흥도 똑같이 좋아하는 조합',
        text: '여행 스타일까지 은근히 비슷해서, 계획을 세울 때 의견 충돌이 별로 없을 확률이 높아요. 둘 다 꼼꼼하게 일정을 짜는 타입이면 손발이 착착 맞고, 둘 다 즉흥적인 타입이면 오히려 그 무계획함 자체를 즐기게 되는 케미예요. 길을 잃어도 둘 다 비슷한 텐션으로 "오히려 잘됐다"며 웃어넘겼던 적, 상상해보면 낯설지 않을 거예요. 반대로 한쪽만 계획형, 한쪽만 즉흥형인 친구 사이였다면 여행 중 한 번쯤은 은근한 신경전이 있었을 텐데, 이 조합에서는 그런 마찰이 거의 없어요.',
      },
      cafeChemistry: {
        subheading: '3시간이 30분처럼 지나가는 대화',
        text: '카페에 앉으면 대화 주제가 끊기지 않고 자연스럽게 다음 이야기로 넘어가는 편이에요 — 한 사람이 말을 꺼내면 다른 사람이 바로 이어받는 느낌으로요. 시계를 보고 "어, 벌써 세 시간이나 지났네" 하고 놀랐던 경험, 이 조합이라면 낯설지 않을 거예요. 침묵이 흘러도 그게 어색하지 않고, 그냥 각자 딴생각하다가 다시 자연스럽게 대화로 돌아오는 편이고요. 반대로 화제가 자꾸 끊겨서 애써 다음 말을 찾아야 하는 친구 사이와 비교하면, 이 편안함의 차이가 확실히 느껴질 거예요.',
      },
      howTheySeeYou: {
        subheading: '설명이 필요 없는, 편한 존재',
        text: '최애 입장에서 당신은 별다른 설명 없이도 통하는, 붙임성 좋은 친구로 느껴질 확률이 높아요. 격식 차리지 않아도 되는 사람, 어떤 얘기를 해도 있는 그대로 받아줄 것 같은 사람이라는 인상을 은근히 주고 있을 거예요. 다른 팬이나 지인들에게 조심스러운 모습을 보이다가도, 이런 텔레파시형 친구 앞에서는 오히려 편하게 마음을 놓을 것 같은 상대예요.',
      },
      watchFor: {
        subheading: '가끔은 다른 의견도 반가워하기',
        text: '너무 잘 맞으면 오히려 서로에게 새로운 자극을 주기가 어려워질 수 있어요. 다 아는 얘기, 다 예상되는 반응만 주고받다 보면 편안함이 지루함으로 슬쩍 바뀔 수도 있고요. 가끔은 일부러라도 서로 다른 의견을 얘기해보고, 안 가본 곳으로 여행을 떠나보는 것도 이 케미를 오래 신선하게 유지하는 방법이에요.',
      },
    },
    otherGeneratesMe: {
      tier: '편안하게 기대는 친구',
      line: '애쓰지 않아도 옆에 있으면 마음이 놓이는, 그런 존재예요.',
      explanation: {
        subheading: '옆에 있는 것만으로 채워지는 기운',
        text: '오행 상 상대의 기운이 나를 채워주는 관계라, 최애랑 있으면 애쓰지 않아도 자연스럽게 힘이 나는 편이에요. 뭔가를 해야 한다는 부담 없이, 그냥 같이 있는 것만으로 충전되는 느낌을 받았던 적이 있을 거예요. 이런 친구는 굳이 재밌는 이벤트를 만들지 않아도, 존재 자체로 그날 하루를 나아지게 만드는 편이에요.',
      },
      travelStyle: {
        subheading: '일정을 알아서 다 챙겨주는 든든함',
        text: '여행지에서 이 조합이라면, 최애 쪽이 알게 모르게 일정을 챙겨주고 분위기를 편하게 만들어주는 역할을 할 확률이 높아요. 지쳐서 아무 결정도 하기 싫은 순간, 상대가 먼저 "이거 어때?" 하고 물어봐 줘서 마음이 놓였던 경험, 떠올려보면 있을 거예요. 반대로 계속 서로 눈치 보며 결정을 미루는 여행 동행과 비교하면, 이 편안함의 차이가 확실히 느껴질 거예요.',
      },
      cafeChemistry: {
        subheading: '말없이 앉아 있어도 편한 시간',
        text: '카페에서 딱히 대단한 대화 없이 각자 할 일을 하다가 가끔 눈 마주치고 웃는 정도로도 충분히 좋은 시간이 되는 조합이에요. 힘든 하루를 보내고 만났는데 별말 안 해도 마음이 스르르 풀렸던 경험, 있을 거예요. 계속 텐션을 유지해야 하는 만남과 비교하면, 이 조용한 편안함이 얼마나 귀한지 새삼 느끼게 될 거예요.',
      },
      howTheySeeYou: {
        subheading: '옆에 있으면 마음이 놓이는 친구',
        text: '최애 입장에서 당신은 애써 텐션을 맞추지 않아도 되는, 마음 편한 친구로 느껴질 확률이 높아요. 화려하게 챙겨주는 친구는 아니어도, 옆에 있으면 이상하게 안심되는 그런 존재로 기억될 거예요. 다른 사람들 앞에서는 조금 긴장하고 있던 최애도, 이 친구 앞에서는 자연스럽게 어깨에 힘을 빼게 될 확률이 높아요.',
      },
      watchFor: {
        subheading: '받기만 하지 말고 가끔은 먼저 챙기기',
        text: '이 조합은 편안함이 익숙해지다 보면, 나도 모르게 계속 받기만 하는 쪽이 될 수 있어요. 가끔은 먼저 연락하고, 먼저 챙기는 쪽이 되어보는 것도 이 관계를 더 오래, 더 건강하게 유지하는 방법이에요. 받은 편안함을 당연하게 여기지 않고 알아채 주는 것만으로도 관계는 훨씬 단단해져요.',
      },
    },
    iGenerateOther: {
      tier: '내가 먼저 챙기는 친구',
      line: '말 안 해도 먼저 나서서 챙기게 되는, 그런 친구가 될 확률이 높아요.',
      explanation: {
        subheading: '내가 먼저 마음을 쓰게 되는 관계',
        text: '오행 상 내가 상대의 기운을 채워주는 관계라, 최애를 보고 있으면 나도 모르게 먼저 챙기고 싶어지는 편이에요. 힘들어 보이면 먼저 말을 걸고, 뭔가 필요할 것 같으면 먼저 손을 내밀게 되는 쪽이 당신일 확률이 높아요. 받는 것보다 주는 게 더 자연스러운 친구 사이, 그리고 그게 전혀 부담스럽지 않고 오히려 뿌듯하게 느껴지는 조합이에요.',
      },
      travelStyle: {
        subheading: '가이드 자처하게 되는 여행',
        text: '여행지에서 자연스럽게 일정을 짜고 맛집을 찾아보는 쪽이 되기 쉬워요 — 시키지 않아도 먼저 나서서 준비하는 편이라서요. 상대가 지쳐 보이면 먼저 쉬어가자고 하거나, 힘들어할 만한 일정을 슬쩍 조정해줬던 경험, 있을 수도 있어요. 반대로 아무도 먼저 나서지 않는 여행에서 오는 애매한 어색함과 비교하면, 이 케미는 오히려 서로가 편해지는 쪽에 가까워요.',
      },
      cafeChemistry: {
        subheading: '듣는 역할을 자처하게 되는 대화',
        text: '카페에서도 자연스럽게 상대 얘기를 더 많이 들어주는 쪽이 되는 편이에요 — 질문을 먼저 던지고, 리액션도 먼저 해주고요. 상대가 고민을 털어놓았을 때 "잘 얘기해줬다"는 반응을 먼저 보였던 경험, 떠올려보면 있을 거예요. 그렇게 챙겨주는 게 자연스러운 나와 달리, 받기만 하는 관계에 있었다면 그 차이가 크게 느껴질 거예요.',
      },
      howTheySeeYou: {
        subheading: '든든하게 챙겨주는 친구',
        text: '최애 입장에서 당신은 먼저 나서서 챙겨주는, 든든한 친구로 느껴질 확률이 높아요. 힘든 순간에 먼저 손 내밀어준 사람으로 기억될 가능성이 크고요. 다른 사람들에겐 잘 안 보여주는 여린 모습도, 이렇게 먼저 챙겨주는 친구 앞에서는 조금 더 편하게 내보이게 될 거예요.',
      },
      watchFor: {
        subheading: '챙기는 것도 에너지가 필요하다는 걸 잊지 않기',
        text: '먼저 챙기는 게 자연스러운 만큼, 정작 내가 지쳤을 때는 티를 안 내고 넘어가기 쉬워요. 이 관계가 오래가려면, 가끔은 나도 챙김을 받아도 괜찮다는 걸 스스로 허락하는 게 필요해요. 일방적으로 주기만 하는 관계가 아니라, 서로 주고받는 균형을 의식적으로 만들어가는 게 좋아요.',
      },
    },
    otherOvercomesMe: {
      tier: '묘하게 계속 신경 쓰이는 친구',
      line: '편한 친구는 아닌데, 이상하게 자꾸 생각나는 그런 상대예요.',
      explanation: {
        subheading: '쉽지 않아서 오히려 잊히지 않는 관계',
        text: '오행 상 상대가 나를 극하는 관계라, 최애랑 있으면 편하기만 한 건 아닐 확률이 높아요. 예상 못 한 타이밍에 훅 들어오는 말이나 리액션에 살짝 당황했던 적이 있을 수도 있고요. 그런데 그 예측 불가능함이 오히려 계속 신경 쓰이게 만드는 포인트예요 — 이 친구는 다 안다고 생각하는 순간 또 다른 모습을 보여주거든요.',
      },
      travelStyle: {
        subheading: '계획이 자꾸 틀어지는데 그게 은근히 재밌는 여행',
        text: '여행 계획을 세워도 최애 쪽에서 갑자기 다른 걸 하자고 해서 일정이 틀어지는 경우가 종종 있을 거예요. 처음엔 당황스러워도, 막상 따라가 보면 오히려 예상 밖의 순간이 여행에서 제일 기억에 남았던 경험이 있을 수도 있고요. 계획대로만 흘러가는 여행과 비교하면, 이 조합은 예측 불가능한 만큼 더 오래 곱씹게 되는 여행이 돼요.',
      },
      cafeChemistry: {
        subheading: '대화가 어디로 튈지 모르는 재미',
        text: '카페에서 대화하다 보면 갑자기 전혀 예상 못 한 주제로 화제가 튀는 경우가 많을 거예요 — 그 순간엔 당황해도, 지나고 나면 그 대화가 제일 재밌었던 대화로 남는 편이고요. 뻔한 질문과 뻔한 답만 오가는 대화와 비교하면, 이 조합의 대화는 끝나고 나서도 계속 곱씹게 되는 힘이 있어요.',
      },
      howTheySeeYou: {
        subheading: '쉽게 설명이 안 되는, 계속 신경 쓰이는 친구',
        text: '최애 입장에서 당신은 한마디로 정의하기 어려운, 그런데 자꾸 신경 쓰이는 친구로 느껴질 확률이 높아요. 예측 가능한 반응만 보이는 사람들 사이에서, 당신의 예상 밖 매력이 오히려 인상 깊게 남을 거예요. 편하다고는 못 해도, 잊히지 않는 친구로 기억될 가능성이 커요.',
      },
      watchFor: {
        subheading: '긴장을 즐기되 너무 오래 끌지는 않기',
        text: '이 관계의 매력은 예측 불가능함이지만, 그게 너무 잦아지면 피로감으로 바뀔 수도 있어요. 가끔은 서로에게 안정적인 순간을 의도적으로 만들어주는 것도 필요해요. 긴장감 자체를 즐기되, 관계의 기반이 되는 신뢰는 따로 꾸준히 쌓아가는 게 좋아요.',
      },
    },
    iOvercomeOther: {
      tier: '든든한 방패막 친구',
      line: '내가 나서서 지켜주는 쪽이 되는, 그런 친구 사이예요.',
      explanation: {
        subheading: '내가 자연스럽게 앞장서게 되는 관계',
        text: '오행 상 내가 상대를 극하는 관계라, 최애랑 있으면 나도 모르게 앞장서서 상황을 정리하는 쪽이 되는 편이에요. 누가 시키지 않아도 먼저 나서서 결정을 내리고, 문제가 생기면 먼저 해결책을 찾아보는 쪽이 당신일 확률이 높아요. 최애 입장에서는 그런 당신 옆에 있으면 은근히 마음이 놓이는, 그런 케미예요.',
      },
      travelStyle: {
        subheading: '돌발 상황에서 먼저 나서게 되는 여행',
        text: '여행 중 예상치 못한 일이 생기면 자연스럽게 당신이 먼저 나서서 해결하는 쪽이 되기 쉬워요 — 숙소 문제든, 길을 잘못 들었든요. 최애가 당황해할 때 당신이 침착하게 정리해줘서 상황이 금방 풀렸던 경험, 떠올려보면 있을 거예요. 아무도 나서지 않아서 우왕좌왕했던 여행과 비교하면, 이 조합은 확실히 든든해요.',
      },
      cafeChemistry: {
        subheading: '분위기를 자연스럽게 이끄는 대화',
        text: '카페에서도 대화 주제를 자연스럽게 이끌어가는 쪽이 되기 쉬워요 — 어색해질 만한 순간에 먼저 화제를 던져서 분위기를 편하게 만들어주는 역할이요. 최애가 말수가 줄어들 때 눈치채고 먼저 다른 얘기를 꺼내줬던 경험이 있을 수도 있어요. 그런 리드가 없었다면 어색했을 순간들이, 당신 덕분에 자연스럽게 넘어가는 편이에요.',
      },
      howTheySeeYou: {
        subheading: '옆에 있으면 든든한 친구',
        text: '최애 입장에서 당신은 무슨 일이 생겨도 침착하게 정리해줄 것 같은, 든든한 친구로 느껴질 확률이 높아요. 겉으로 티는 안 내도, 당신이 옆에 있으면 알게 모르게 마음이 놓인다는 걸 스스로도 느끼고 있을 거예요. 다른 사람들 앞에서는 스스로 다 챙겨야 했던 최애도, 이 친구 앞에서는 잠깐 기대도 괜찮다는 걸 배우게 될 확률이 높아요.',
      },
      watchFor: {
        subheading: '다 떠안지 말고 가끔은 기대도 보기',
        text: '늘 앞장서다 보면 정작 내가 기댈 자리는 못 만들 때가 많아요. 이 관계가 일방적으로 챙기기만 하는 관계가 되지 않으려면, 가끔은 당신도 먼저 도움을 요청해보는 게 필요해요. 든든한 사람이라고 해서 늘 완벽하게 다 해내야 하는 건 아니라는 걸 스스로에게도 알려주세요.',
      },
    },
  },
};

export function getFriendshipCopy(lang, relation) {
  return (friendshipTemplates[lang] || friendshipTemplates.en)[relation];
}
