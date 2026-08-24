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
        subheading: 'Try Throwing In a Different Opinion Sometimes',
        text: "With a match this easy, tossing in a different opinion every once in a while can actually make things more fun. Creating the occasional \"wait, I didn't see that coming\" moment, instead of only trading expected reactions, keeps things lively. Picking a destination neither of you would normally choose could be a fun way to add a new flavor to this easy chemistry.",
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
        subheading: 'Reaching Out First Sometimes Could Be Fun',
        text: "It's easy to settle into always being the one who receives in this kind of ease, so surprising them by reaching out first every once in a while could be a fun change of pace. Bringing them something you know they'd love, without being asked, adds a nice new flavor to this friendship too.",
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
        subheading: 'Let Yourself Be Looked After Sometimes',
        text: "Since looking out for people comes so naturally to you, playfully asking them to take care of you for once could be a fun experiment. They might actually light up at the chance — people often do. Swapping roles every so often adds a nice new layer to this friendship.",
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
        subheading: 'Try a Predictable Day Every Once in a While',
        text: "Unpredictability is the charm here, but a low-key, plans-free day together could be surprisingly fun too. Slipping in one of those ordinary days between all the tension-filled moments might actually be what makes this chemistry last even longer.",
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
        subheading: 'Leaning On Them for Once Could Be Fun Too',
        text: "Since you're usually the one taking the lead, flipping the script and leaning on them for once could be a fun change of pace. Handing over the decision with a \"you pick this time\" is a good way to try it. Trading off who leads and who leans makes this steady chemistry even more colorful.",
      },
    },
    // Independent of the 5 Five Element relations above — compares each
    // person's dominant Ten God category (getTenGodProfile in
    // utils/saju.js) instead, so it's a genuinely separate axis of
    // variety layered on top of the relation-based sections.
    // Full 5x5 Ten God category matrix — the 5 diagonal cells (same
    // category both sides) keep the original "mirrored charm" framing;
    // the 20 off-diagonal cells describe the pairing itself rather than
    // assigning "my role" vs "their role", so each of the 10 unordered
    // pairs (companion-output, companion-wealth, ...) uses one shared
    // text reused for both directions — the description of what two
    // energies bring out in each other doesn't change based on which
    // person is "me".
    chemistryPoints: {
      companion: {
        companion: {
          subheading: 'The Same Kind of Charm, Twice',
          text: "You both run heavy on Companion energy, so your sense of treating each other as equals matches from the start. You find comfort in the same kinds of moments, which is why conversation tends to skip the small talk and go straight to what actually matters.",
        },
        output: {
          subheading: 'Ease Meets Spark',
          text: "One of you runs on Companion energy, the other on Output — an easy, equal footing with a spark of expressiveness layered on top. Comfortable, but never boring.",
        },
        wealth: {
          subheading: 'Ease Meets Care',
          text: "One of you runs on Companion energy, the other on Wealth — an equal-footing kind of ease meeting someone who actually takes care of things. Comfort and practicality both get covered.",
        },
        officer: {
          subheading: 'Ease Meets Seriousness',
          text: "One of you runs on Companion energy, the other on Officer — easy rapport meeting someone who leads with real seriousness. Even in a relaxed vibe, there's a quiet sense of direction.",
        },
        resource: {
          subheading: 'Ease Meets Warmth',
          text: "One of you runs on Companion energy, the other on Resource — easy rapport meeting someone genuinely nurturing. No formality needed for either of you to feel comforted by the other.",
        },
      },
      output: {
        companion: {
          subheading: 'Ease Meets Spark',
          text: "One of you runs on Companion energy, the other on Output — an easy, equal footing with a spark of expressiveness layered on top. Comfortable, but never boring.",
        },
        output: {
          subheading: 'The Same Kind of Charm, Twice',
          text: "You both run heavy on Output energy, so your expressive, playful charm overlaps directly. Being together, your energy just naturally clicks, and you never really have to explain your sense of humor to each other.",
        },
        wealth: {
          subheading: 'Spark Meets Practicality',
          text: "One of you runs on Output energy, the other on Wealth — someone who lifts the mood meeting someone who handles the practical side. The fun stays alive while the details quietly get handled.",
        },
        officer: {
          subheading: 'Spark Meets Discipline',
          text: "One of you runs on Output energy, the other on Officer — free expression meeting someone who keeps things grounded. Right when the energy threatens to spin out, the other one steadies it.",
        },
        resource: {
          subheading: 'Spark Meets Warmth',
          text: "One of you runs on Output energy, the other on Resource — someone who brings the spark meeting someone genuinely comforting. Fun turns into real ease by the end of it.",
        },
      },
      wealth: {
        companion: {
          subheading: 'Ease Meets Care',
          text: "One of you runs on Companion energy, the other on Wealth — an equal-footing kind of ease meeting someone who actually takes care of things. Comfort and practicality both get covered.",
        },
        output: {
          subheading: 'Spark Meets Practicality',
          text: "One of you runs on Output energy, the other on Wealth — someone who lifts the mood meeting someone who handles the practical side. The fun stays alive while the details quietly get handled.",
        },
        wealth: {
          subheading: 'The Same Kind of Charm, Twice',
          text: "You both run heavy on Wealth energy, so your practical, resourceful instincts line up well. When it's time to plan something or take care of business, you tend to already move the same way without needing to adjust for each other.",
        },
        officer: {
          subheading: 'Practicality Meets Discipline',
          text: "One of you runs on Wealth energy, the other on Officer — both practical, both dependable in their own way. Whether it's planning something or keeping a promise, neither of you gives the other much to worry about.",
        },
        resource: {
          subheading: 'Practicality Meets Warmth',
          text: "One of you runs on Wealth energy, the other on Resource — someone practical meeting someone genuinely nurturing. Both the practical stuff and the warmth get covered, quietly.",
        },
      },
      officer: {
        companion: {
          subheading: 'Ease Meets Seriousness',
          text: "One of you runs on Companion energy, the other on Officer — easy rapport meeting someone who leads with real seriousness. Even in a relaxed vibe, there's a quiet sense of direction.",
        },
        output: {
          subheading: 'Spark Meets Discipline',
          text: "One of you runs on Output energy, the other on Officer — free expression meeting someone who keeps things grounded. Right when the energy threatens to spin out, the other one steadies it.",
        },
        wealth: {
          subheading: 'Practicality Meets Discipline',
          text: "One of you runs on Wealth energy, the other on Officer — both practical, both dependable in their own way. Whether it's planning something or keeping a promise, neither of you gives the other much to worry about.",
        },
        officer: {
          subheading: 'The Same Kind of Charm, Twice',
          text: "You both run heavy on Officer energy, so your responsible, deliberate charm mirrors each other's. Keeping promises and taking things seriously both come naturally to you two, and neither has to explain that instinct to the other.",
        },
        resource: {
          subheading: 'Discipline Meets Warmth',
          text: "One of you runs on Officer energy, the other on Resource — someone who leads responsibly meeting someone genuinely warm. Serious and comforting at once, dependable without feeling heavy.",
        },
      },
      resource: {
        companion: {
          subheading: 'Ease Meets Warmth',
          text: "One of you runs on Companion energy, the other on Resource — easy rapport meeting someone genuinely nurturing. No formality needed for either of you to feel comforted by the other.",
        },
        output: {
          subheading: 'Spark Meets Warmth',
          text: "One of you runs on Output energy, the other on Resource — someone who brings the spark meeting someone genuinely comforting. Fun turns into real ease by the end of it.",
        },
        wealth: {
          subheading: 'Practicality Meets Warmth',
          text: "One of you runs on Wealth energy, the other on Resource — someone practical meeting someone genuinely nurturing. Both the practical stuff and the warmth get covered, quietly.",
        },
        officer: {
          subheading: 'Discipline Meets Warmth',
          text: "One of you runs on Officer energy, the other on Resource — someone who leads responsibly meeting someone genuinely warm. Serious and comforting at once, dependable without feeling heavy.",
        },
        resource: {
          subheading: 'The Same Kind of Charm, Twice',
          text: "You both run heavy on Resource energy, so your warm, considerate charm mirrors each other's. Being together, you both put each other at ease in a similar way, which means that warmth ends up doubled instead of just shared.",
        },
      },
    },
    noblemanBonus: {
      subheading: 'This Friendship Might Be Part of Your Nobleman Luck',
      text: "One of your charts carries the Heavenly Nobleman (天乙貴人) — traditionally a sign that good connections show up in your life. Meeting this friend at all might be one of those good connections you could've easily missed.",
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
        subheading: '가끔은 일부러 다른 의견도 던져보기',
        text: '이렇게 잘 맞는 사이일수록, 가끔 서로 다른 의견을 던져보면 오히려 더 재밌어질 수 있어요. 늘 예상되는 반응 대신 "어? 이건 좀 의외인데" 싶은 순간을 만들어보는 것도 좋고요. 안 가본 곳으로 무작정 여행을 떠나보는 것도, 이 편안한 케미에 색다른 재미를 더해줄 거예요.',
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
        subheading: '가끔은 내가 먼저 연락해보는 것도 재밌을 거예요',
        text: '이 편안함에 익숙해지다 보면 계속 받는 쪽에만 머물기 쉬운데, 가끔은 내가 먼저 연락해서 깜짝 놀라게 해주는 것도 재밌을 거예요. 상대가 좋아할 만한 걸 먼저 챙겨서 건네보는 것도, 이 관계에 또 다른 즐거움을 더해줄 수 있고요.',
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
        subheading: '가끔은 나도 챙김을 받아보는 것도 좋을 거예요',
        text: '먼저 챙기는 게 자연스러운 만큼, 가끔은 반대로 나를 챙겨달라고 슬쩍 부탁해보는 것도 재밌는 시도예요. 의외로 상대가 그럴 때 더 좋아하며 나설 수도 있고요. 주고받는 역할을 한 번씩 바꿔보는 것도, 이 케미를 더 풍성하게 만들어줘요.',
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
        subheading: '가끔은 예측 가능한 하루도 즐겨보기',
        text: '예측 불가능함이 이 관계의 매력이지만, 가끔은 아무 계획 없이 그냥 편하게 뒹구는 하루도 은근히 재밌을 거예요. 긴장감 넘치는 순간들 사이사이에 그런 평범한 하루를 끼워 넣어보면, 오히려 이 케미가 더 오래갈 거예요.',
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
        subheading: '가끔은 나도 기대보는 것도 재밌을 거예요',
        text: '늘 앞장서는 쪽이다 보니, 가끔은 반대로 상대에게 기대보는 것도 새로운 재미가 될 수 있어요. "이번엔 네가 정해봐" 하고 슬쩍 넘겨보는 것도 좋고요. 이끄는 역할과 기대는 역할을 번갈아 해보면, 이 든든한 케미가 훨씬 다채로워져요.',
      },
    },
    chemistryPoints: {
      companion: {
        companion: {
          subheading: '같은 결의 매력을 가진 둘',
          text: '둘 다 비겁 기운이 강한 편이라, 서로를 대등하게 대하는 감각 자체가 비슷해요. 같은 포인트에서 편안함을 느끼는 사이라, 대화가 유난히 겉돌지 않고 바로 핵심으로 들어가는 편이에요.',
        },
        output: {
          subheading: '편안함과 텐션이 만나는 조합',
          text: '한쪽은 비겁, 한쪽은 식상 기운이 강한 조합이라, 편하게 통하는 기반 위에 텐션까지 얹어지는 사이예요. 대등하게 편한데 심심할 틈은 없는, 그런 친구 케미예요.',
        },
        wealth: {
          subheading: '대등함과 챙김이 만나는 조합',
          text: '한쪽은 비겁, 한쪽은 재성 기운이 강한 조합이라, 대등하게 통하는 사람과 현실적으로 챙겨주는 사람이 만나는 케미예요. 편한 건 편한 대로, 실속은 실속대로 챙겨지는 사이예요.',
        },
        officer: {
          subheading: '편안함과 진지함이 만나는 조합',
          text: '한쪽은 비겁, 한쪽은 관성 기운이 강한 조합이라, 편하게 통하는 사람과 진지하게 이끄는 사람이 만나는 케미예요. 가벼운 텐션 속에서도 은근히 중심이 잡히는 사이예요.',
        },
        resource: {
          subheading: '편안함과 다정함이 만나는 조합',
          text: '한쪽은 비겁, 한쪽은 인성 기운이 강한 조합이라, 편하게 통하는 사람과 다정하게 품어주는 사람이 만나는 케미예요. 격식 없이도 서로에게 위안이 되는 사이예요.',
        },
      },
      output: {
        companion: {
          subheading: '편안함과 텐션이 만나는 조합',
          text: '한쪽은 비겁, 한쪽은 식상 기운이 강한 조합이라, 편하게 통하는 기반 위에 텐션까지 얹어지는 사이예요. 대등하게 편한데 심심할 틈은 없는, 그런 친구 케미예요.',
        },
        output: {
          subheading: '같은 결의 매력을 가진 둘',
          text: '둘 다 식상 기운이 강한 편이라, 표현하고 장난치는 매력 포인트가 서로 겹쳐요. 그래서 같이 있으면 텐션이 자연스럽게 맞아떨어지고, 서로의 유머 코드를 굳이 설명할 필요가 없어요.',
        },
        wealth: {
          subheading: '텐션과 현실 감각이 만나는 조합',
          text: '한쪽은 식상, 한쪽은 재성 기운이 강한 조합이라, 분위기를 살리는 사람과 현실을 챙기는 사람이 만나는 케미예요. 텐션은 텐션대로 살아있으면서, 뒷정리는 알아서 되는 사이예요.',
        },
        officer: {
          subheading: '자유로움과 책임감이 만나는 조합',
          text: '한쪽은 식상, 한쪽은 관성 기운이 강한 조합이라, 자유롭게 표현하는 사람과 진지하게 다잡아주는 사람이 만나는 케미예요. 텐션이 붕 뜰 때쯤 한쪽이 슬쩍 중심을 잡아주는 사이예요.',
        },
        resource: {
          subheading: '텐션과 다정함이 만나는 조합',
          text: '한쪽은 식상, 한쪽은 인성 기운이 강한 조합이라, 텐션을 올려주는 사람과 다정하게 다독여주는 사람이 만나는 케미예요. 재밌게 놀다가도 결국 마음까지 편해지는 사이예요.',
        },
      },
      wealth: {
        companion: {
          subheading: '대등함과 챙김이 만나는 조합',
          text: '한쪽은 비겁, 한쪽은 재성 기운이 강한 조합이라, 대등하게 통하는 사람과 현실적으로 챙겨주는 사람이 만나는 케미예요. 편한 건 편한 대로, 실속은 실속대로 챙겨지는 사이예요.',
        },
        output: {
          subheading: '텐션과 현실 감각이 만나는 조합',
          text: '한쪽은 식상, 한쪽은 재성 기운이 강한 조합이라, 분위기를 살리는 사람과 현실을 챙기는 사람이 만나는 케미예요. 텐션은 텐션대로 살아있으면서, 뒷정리는 알아서 되는 사이예요.',
        },
        wealth: {
          subheading: '같은 결의 매력을 가진 둘',
          text: '둘 다 재성 기운이 강한 편이라, 현실적이고 실속 있는 감각이 서로 잘 맞아요. 계획을 세우거나 뭔가를 챙길 때, 굳이 맞춰가지 않아도 이미 같은 방식으로 움직이는 편이에요.',
        },
        officer: {
          subheading: '현실 감각과 책임감이 만나는 조합',
          text: '한쪽은 재성, 한쪽은 관성 기운이 강한 조합이라, 둘 다 현실적이고 믿음직한 매력을 가진 사이예요. 계획을 세우든 약속을 지키든, 서로에게 딱히 불안할 일이 없는 케미예요.',
        },
        resource: {
          subheading: '현실 감각과 다정함이 만나는 조합',
          text: '한쪽은 재성, 한쪽은 인성 기운이 강한 조합이라, 현실적으로 챙기는 사람과 다정하게 품어주는 사람이 만나는 케미예요. 실속과 다정함이 같이 채워지는, 은근히 든든한 사이예요.',
        },
      },
      officer: {
        companion: {
          subheading: '편안함과 진지함이 만나는 조합',
          text: '한쪽은 비겁, 한쪽은 관성 기운이 강한 조합이라, 편하게 통하는 사람과 진지하게 이끄는 사람이 만나는 케미예요. 가벼운 텐션 속에서도 은근히 중심이 잡히는 사이예요.',
        },
        output: {
          subheading: '자유로움과 책임감이 만나는 조합',
          text: '한쪽은 식상, 한쪽은 관성 기운이 강한 조합이라, 자유롭게 표현하는 사람과 진지하게 다잡아주는 사람이 만나는 케미예요. 텐션이 붕 뜰 때쯤 한쪽이 슬쩍 중심을 잡아주는 사이예요.',
        },
        wealth: {
          subheading: '현실 감각과 책임감이 만나는 조합',
          text: '한쪽은 재성, 한쪽은 관성 기운이 강한 조합이라, 둘 다 현실적이고 믿음직한 매력을 가진 사이예요. 계획을 세우든 약속을 지키든, 서로에게 딱히 불안할 일이 없는 케미예요.',
        },
        officer: {
          subheading: '같은 결의 매력을 가진 둘',
          text: '둘 다 관성 기운이 강한 편이라, 책임감 있고 신중한 매력 포인트가 서로 닮아 있어요. 약속을 지키는 것도, 진지하게 임하는 태도도 서로 자연스럽게 이해가 되는 사이예요.',
        },
        resource: {
          subheading: '책임감과 다정함이 만나는 조합',
          text: '한쪽은 관성, 한쪽은 인성 기운이 강한 조합이라, 책임감 있게 이끄는 사람과 다정하게 다독여주는 사람이 만나는 케미예요. 진지함과 다정함이 같이 있어서, 믿음직하면서도 편안한 사이예요.',
        },
      },
      resource: {
        companion: {
          subheading: '편안함과 다정함이 만나는 조합',
          text: '한쪽은 비겁, 한쪽은 인성 기운이 강한 조합이라, 편하게 통하는 사람과 다정하게 품어주는 사람이 만나는 케미예요. 격식 없이도 서로에게 위안이 되는 사이예요.',
        },
        output: {
          subheading: '텐션과 다정함이 만나는 조합',
          text: '한쪽은 식상, 한쪽은 인성 기운이 강한 조합이라, 텐션을 올려주는 사람과 다정하게 다독여주는 사람이 만나는 케미예요. 재밌게 놀다가도 결국 마음까지 편해지는 사이예요.',
        },
        wealth: {
          subheading: '현실 감각과 다정함이 만나는 조합',
          text: '한쪽은 재성, 한쪽은 인성 기운이 강한 조합이라, 현실적으로 챙기는 사람과 다정하게 품어주는 사람이 만나는 케미예요. 실속과 다정함이 같이 채워지는, 은근히 든든한 사이예요.',
        },
        officer: {
          subheading: '책임감과 다정함이 만나는 조합',
          text: '한쪽은 관성, 한쪽은 인성 기운이 강한 조합이라, 책임감 있게 이끄는 사람과 다정하게 다독여주는 사람이 만나는 케미예요. 진지함과 다정함이 같이 있어서, 믿음직하면서도 편안한 사이예요.',
        },
        resource: {
          subheading: '같은 결의 매력을 가진 둘',
          text: '둘 다 인성 기운이 강한 편이라, 다정하고 배려 깊은 매력 포인트가 서로 닮아 있어요. 같이 있으면 서로를 편안하게 해주는 방식 자체가 비슷해서, 그 다정함이 자연스럽게 두 배가 돼요.',
        },
      },
    },
    noblemanBonus: {
      subheading: '이 만남 자체가 귀인 기운의 일부일 수도 있어요',
      text: '둘 중 한쪽 사주에 천을귀인이 있는 조합이에요 — 전통적으로 좋은 인연이 따라오는 자리로 읽혀요. 이 친구를 만난 것 자체가, 인생에서 그냥 지나칠 수도 있었던 좋은 인연 중 하나일 수 있어요.',
    },
  },
};

export function getFriendshipCopy(lang, relation) {
  return (friendshipTemplates[lang] || friendshipTemplates.en)[relation];
}

/** Independent of `relation` — compares each person's dominant Ten God
 * category (getTenGodProfile) and looks up the full 5x5 matrix entry for
 * this specific myCategory/otherCategory pair. */
export function getChemistryPoints(lang, myCategory, otherCategory) {
  const bank = (friendshipTemplates[lang] || friendshipTemplates.en).chemistryPoints;
  return bank[myCategory][otherCategory];
}

/** Shown only when at least one of the two charts has the Heavenly Nobleman. */
export function getNoblemanBonus(lang) {
  return (friendshipTemplates[lang] || friendshipTemplates.en).noblemanBonus;
}
