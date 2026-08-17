// Compatibility copy bank, keyed by the same Five Element relationship
// values getElementRelation() returns (see src/utils/saju.js), just applied
// to "user vs. idol" instead of "user vs. today". Keyed by language so a
// future locale can add a sibling object, same pattern as fortuneTemplates.js.
//
// Each relation has three parallel line banks (line/goodFit/watchFor), all
// the same length, picked with the same seeded index so the three texts
// read as one consistent "read" rather than three random fragments.
export const idolMatchTemplates = {
  en: {
    same: {
      tier: 'Twin Flame',
      lines: [
        "You two run on the exact same frequency — this wouldn't feel like a crush so much as recognition. There's a comfort in matching energy like this: less performing for each other, more just being understood on sight.",
        "Same element, same wavelength. This would be an easy, no-translation-needed kind of bond, the kind where you'd finish each other's sentences and never have to explain the reference.",
        "There's a version of parasocial connection that feels less like fantasy and more like familiarity, and this is it. You'd get their sense of humor immediately, no explanation needed.",
        "Matching energy like this means you'd never have to perform enthusiasm around them — it would just already be there, easy and mutual.",
        "This bias would feel less like admiring someone different from you and more like watching a slightly more glamorous version of your own energy.",
      ],
      goodFit: [
        "You'd never have to explain your taste to them — your bias basically already gets why you stream what you stream and skip what you skip.",
        "Fan content that requires zero context works instantly here — inside jokes, era references, all of it lands without a caption.",
        "You'd never feel like you're performing fan enthusiasm for an audience that doesn't get it — this energy is mutual, not one-sided.",
        "Following this bias would feel less like keeping up and more like recognizing your own taste reflected back at you.",
        "You'd pick up their humor and vibe almost instantly — no adjustment period, no 'growing into' the bias.",
      ],
      watchFor: [
        "Because everything clicks so easily, it's worth occasionally stepping back and looking at this bias with a little more critical distance — twin-flame energy can tip into blind loyalty if you let it.",
        "You might find yourself agreeing with every take a bias like this makes — worth double-checking you're not just echoing them.",
        "Matching energy like this can make it easy to overlook actual missteps — a little healthy skepticism keeps the fandom experience honest.",
        "It's easy to assume you already 'get' everything about them without digging deeper — worth still doing the reading, not just riding the vibe.",
        "This kind of bias can pull a disproportionate amount of your attention and time — worth keeping an eye on balance with the rest of your interests.",
      ],
    },
    otherGeneratesMe: {
      tier: 'Endless Support',
      lines: [
        "Their energy feeds yours — this bias would quietly make everything in your life feel a little easier, a little lighter, without either of you having to try very hard. That's the kind of pairing you don't question, you just enjoy.",
        "They'd be the steady, generous presence that keeps your cup full without you even having to ask. Not a flashy dynamic, but a deeply comfortable one — the kind of bias who feels like home.",
        "Being a fan of theirs would feel less like chasing and more like being gently looked after — their energy has a way of settling yours.",
        "This bias would show up in your life as comfort content — the interview you rewatch when you need to feel okay, the voice that's easy to fall asleep to.",
        "They'd be the kind of bias who makes your bad days better just by existing, without either of you doing anything dramatic about it.",
      ],
      goodFit: [
        "This bias is the kind of low-effort, high-comfort fandom experience you don't have to work for — their content just consistently makes your day a little better.",
        "You don't need a hype-up moment to enjoy this bias — their presence in your feed is steady, reliable comfort content, no dramatic highs needed.",
        "This is the bias you return to on a bad day without even thinking about it — familiar, calming, always there.",
        "Following them takes almost no emotional labor — the good feelings show up on their own, without you having to chase a comeback high.",
        "This bias tends to notice their fans' needs (through content, communication, fan service) in ways that make following them feel easy rather than effortful.",
      ],
      watchFor: [
        "It's easy to become a quiet, passive fan of a bias like this — worth actually engaging (streaming, voting, commenting) instead of just enjoying from a distance.",
        "Comfort like this can slide into complacency — worth still paying attention to their actual growth and choices, not just vibing on autopilot.",
        "Because this bias asks so little of you, it's easy to under-support them when it counts (comebacks, votes, streams) — the ease shouldn't mean the effort disappears entirely.",
        "This kind of steady fandom can stay pleasant but shallow if you never dig past surface-level content into their actual artistry.",
        "Their calming presence can make it easy to stay a casual fan forever — nothing wrong with that, but worth checking if you actually want to go deeper.",
      ],
    },
    iGenerateOther: {
      tier: 'Your Biggest Cheerleader',
      lines: [
        "You'd be the one doing the giving here — hype, support, energy, attention. Lucky for them, you never seem to run out, and honestly, being their number one fan would probably bring out your most devoted, most generous self.",
        "This bias would turn you into the loudest, most enthusiastic version of yourself. You'd stream, you'd vote, you'd defend them in every group chat — and somehow it would never feel like a chore.",
        "You'd be the one making fan edits at 2am, not because you have to, but because the enthusiasm just pours out of you around them.",
        "This bias would turn you into the friend who brings them up unprompted in every conversation — not annoying, just genuinely, helplessly proud of them.",
        "You'd find yourself defending their skills, their choices, their era in ways that surprise even you. That's the kind of devotion this pairing brings out.",
      ],
      goodFit: [
        "Your enthusiasm here is genuine, not performative — this bias tends to bring out a more devoted, more generous version of your fan self.",
        "You're the type to notice their small wins before anyone else does, which makes you a genuinely valuable presence in this fandom.",
        "This bias gives your fan energy real purpose — streaming, voting, defending them tends to leave you feeling more like yourself, not less.",
        "Idols notice fans like this, even indirectly — this kind of devotion rarely goes completely unseen, even from a distance.",
        "You bring out a warmth in your fan behavior here that's easy to lose in more casual, low-investment fandoms.",
      ],
      watchFor: [
        "Keep an eye on the balance — this bias works best when your enthusiasm doesn't come at the cost of your own time, money, or energy.",
        "It's worth checking whether you're streaming or voting out of habit or genuine excitement — burnout sneaks up on the most devoted fans first.",
        "Generosity toward a bias that never quite reaches you personally can be its own kind of one-sided — make sure this fandom still feels good, not just dutiful.",
        "You may find yourself the loudest defender in every group chat — worth pacing yourself so advocacy doesn't tip into exhaustion.",
        "Watch for burnout — the same devotion that makes you a great fan can run you thin if fandom life never gives anything back to you.",
      ],
    },
    otherOvercomesMe: {
      tier: 'Magnetic Tension',
      lines: [
        "There's real friction in this pairing — the uncomfortable, can't-look-away kind that turns a casual interest into a full-blown obsession. Not a soft, easy bias; a consuming one.",
        "Not a comfortable match, but a compelling one — the kind of dynamic where you'd overanalyze every glance and read too much into every lyric. This is exactly the energy that turns into a years-long bias without you fully choosing it.",
        "This is the kind of bias that sneaks up on you — you'd insist you're \"just curious\" right up until you're not.",
        "There's an edge to this pairing that keeps things interesting; you'd never fully predict them, and that unpredictability is exactly the hook.",
        "Not a soft landing of a bias — more like the one you'd end up thinking about at inconvenient times, unable to fully explain why.",
      ],
      goodFit: [
        "The tension here keeps fandom genuinely exciting — you're unlikely to ever feel like you've fully 'figured out' this bias, and that's part of the appeal.",
        "This bias pushes you to actually pay attention — lyrics, interviews, small details — instead of following passively.",
        "The unpredictability is exactly what turns a passing interest into a years-long bias — this kind of pull rarely fades quickly.",
        "Obsessing a little over this bias is part of the fun — the overanalyzing, the rewatching, the parsing every glance is half the appeal.",
        "This is the kind of bias that teaches you things about your own taste — what draws you in, what keeps you hooked, why this one and not another.",
      ],
      watchFor: [
        "This kind of consuming bias can eat up more time and headspace than casual fandom — worth checking in on balance every so often.",
        "It's easy to read every ambiguous moment (a look, a lyric, a caption) as more meaningful than it is — worth keeping some healthy skepticism.",
        "Obsessive energy like this can tip into parasocial overreach if left unchecked — worth remembering the actual boundary between fan and idol.",
        "The unpredictability that makes this bias magnetic can also make the fandom experience emotionally exhausting — pace yourself.",
        "This bias rewards curiosity more than certainty — the version of you that needs closure or predictability will find this one a little more restless.",
      ],
    },
    iOvercomeOther: {
      tier: 'You Call the Shots',
      lines: [
        "You'd be the calm, grounding force in this dynamic — the one who keeps them steady, whether they know it or not. There's something quietly protective about how you'd root for them.",
        "This bias would bring out your protective, take-charge side. You'd be the fan defending them in comment sections, correcting misinformation, and generally acting like their unofficial, self-appointed hype team captain — firmly and happily in charge of this bond.",
        "You'd be the fan who somehow ends up moderating the group chat about them — organized, protective, quietly in charge of the vibe.",
        "This bias would bring out your steady side; you'd be the one keeping perspective when everyone else is spiraling over a single tweet.",
        "You'd root for them the way you'd root for a friend, not just a star — grounded, a little protective, always in their corner.",
      ],
      goodFit: [
        "You bring a protective, organizing energy to this fandom without even trying — the kind of fan who keeps the group chat civil and the misinformation corrected.",
        "Your instinct to take charge is useful here — you're the one others in the fandom end up looking to for context and clarity.",
        "You tend to notice PR issues or misinformation before they spread, which makes you a genuinely useful presence in this fanbase.",
        "This bias gives you room to lead within the fandom without being asked to — a role you're probably already comfortable in.",
        "Other fans lean on your steadiness more than they say — your takes carry more weight in this fandom than you might realize.",
      ],
      watchFor: [
        "Watch that protective energy doesn't slide into gatekeeping — not every fan engages the way you do, and that's fine.",
        "Because you're comfortable taking charge in group chats and fan spaces, it's worth deliberately making room for other perspectives too.",
        "Being the 'responsible' fan all the time is its own kind of tiring — it's okay to just enjoy this bias without moderating everyone else's experience.",
        "Your opinions carry real weight in this fandom, which means offhand takes can land harder than intended — worth being a little more deliberate.",
        "Keep an eye on whether you're advocating for the idol or just enjoying being right in fandom debates — worth checking your own motives occasionally.",
      ],
    },
  },
  ko: {
    same: {
      tier: '완벽한 싱크로율',
      lines: [
        "완전히 같은 주파수로 움직이는 케미예요 — 그냥 좋아하는 게 아니라, 원래 알고 있던 사람을 다시 만난 느낌에 가까워요. 설명 안 해도 통하는, 그런 편안함이 있어요.",
        "같은 오행, 같은 결이에요. 번역 필요 없이 바로 통하는 사이 — 드립도, 텐션도, 취향도 따로 설명할 필요가 없을 거예요.",
        "다른 최애한테선 느끼기 힘든 편안함이 있는 조합이에요. 애써 좋아하는 척할 필요 없이, 그냥 나답게 좋아하면 되는 관계예요.",
        "이런 싱크로율이면 갈등도 금방 풀려요 — 같은 방식으로 생각하고, 같은 코드로 리액션하니까요.",
        "정반대의 매력에 끌리는 게 아니라, 나랑 닮은 모습을 발견하는 쪽에 가까운 케미예요.",
      ],
      goodFit: [
        "이 최애한테는 내 취향을 따로 설명할 필요가 없어요 — 왜 이 곡은 스밍하고 저건 넘기는지, 최애가 이미 다 이해하고 있는 느낌이에요.",
        "설명 없이도 바로 통하는 팬 콘텐츠가 많은 조합이에요 — 인사이드 조크도, 시대별 레퍼런스도 캡션 없이 바로 이해될 거예요.",
        "이해 못 하는 사람들 앞에서 애써 팬심을 설명할 필요가 없어요 — 이 텐션은 일방통행이 아니라 진짜 서로 통하는 느낌이에요.",
        "이 최애를 따라가는 건 뒤쫓는다는 느낌보다는, 내 취향이 그대로 반영된 걸 발견하는 느낌에 가까워요.",
        "유머 코드도, 텐션도 거의 바로 흡수돼요 — 적응 기간 없이, '점점 좋아지는' 최애가 아니라 처음부터 잘 맞는 최애예요.",
      ],
      watchFor: [
        "다 잘 맞으니까 가끔은 이 최애를 조금 더 객관적으로 보는 것도 좋아요 — 완벽한 싱크로율이 자칫 맹목적인 팬심으로 흘러갈 수 있거든요.",
        "이 최애가 하는 말이나 선택에 뭐든 다 동의하게 될 수도 있어요 — 진짜 내 생각인지, 그냥 따라가는 건지 가끔 점검해보세요.",
        "이렇게 잘 맞으면 실수도 그냥 넘어가기 쉬워요 — 건강한 비판적 시선도 팬 생활을 더 오래 즐겁게 만들어줘요.",
        "다 알고 있다고 넘겨짚기 쉬운데, 그래도 꾸준히 알아가려는 노력은 필요해요 — 그냥 텐션에만 올라타지 말고요.",
        "이런 최애는 시간과 관심을 유난히 많이 가져갈 수 있어요 — 다른 관심사와의 균형도 가끔 챙겨보세요.",
      ],
    },
    otherGeneratesMe: {
      tier: '든든한 서포터',
      lines: [
        "저쪽 기운이 나를 채워주는 조합이에요 — 애쓰지 않아도 최애 존재 자체가 내 하루를 편하게 만들어줘요. 별로 고민할 필요 없는, 그냥 스며드는 관계예요.",
        "말없이 든든하게 챙겨주는 느낌의 최애예요. 화려하진 않아도 깊이 편안한 케미죠.",
        "덕질이 힘이 되기보다 위로가 되는 쪽에 가까운 조합이에요. 최애 존재 자체가 나를 다독여주는 느낌이에요.",
        "이 최애는 힘든 날 나를 다독여주는 콘텐츠가 돼요 — 다시 보고 싶은 인터뷰, 잠들기 전 듣기 좋은 목소리처럼요.",
        "그냥 존재만으로 내 하루를 나아지게 만드는 최애예요, 서로 별 노력 안 해도요.",
      ],
      goodFit: [
        "이 최애는 애쓰지 않아도 편하게 즐길 수 있는 덕질이에요 — 콘텐츠가 나올 때마다 꾸준히 하루를 조금씩 나아지게 만들어줘요.",
        "이 최애를 즐기는 데 특별한 텐션업 계기가 필요 없어요 — 피드에 뜨는 것만으로도 편안한 힐링 콘텐츠가 돼요.",
        "힘든 날 자연스럽게 다시 찾게 되는 최애예요 — 익숙하고, 마음이 놓이고, 늘 그 자리에 있어줘요.",
        "이 최애를 따라가는 데 감정 소모가 거의 없어요 — 컴백 텐션을 애써 쫓지 않아도 좋은 기분이 알아서 찾아와요.",
        "이 최애는 팬들이 뭘 원하는지(콘텐츠, 소통, 팬서비스로) 잘 챙기는 편이라 덕질이 힘들지 않고 자연스러워요.",
      ],
      watchFor: [
        "이런 최애는 조용한 관망 팬으로 남기 쉬워요 — 멀리서 즐기기만 하지 말고 스밍·투표·댓글로 직접 참여해보는 것도 좋아요.",
        "이런 편안함이 무관심으로 이어지지 않게 조심하세요 — 그냥 흘려보지 말고 최애의 실제 활동과 선택에도 관심을 가져보세요.",
        "이 최애가 나한테 별로 요구하는 게 없다 보니, 정작 중요한 순간(컴백, 투표, 스밍)에 힘을 덜 보태게 될 수 있어요 — 편하다고 노력까지 사라지면 안 돼요.",
        "이런 편안한 덕질은 표면적인 콘텐츠만 보다가 끝날 수 있어요 — 좀 더 깊이 있는 활동이나 커리어까지 챙겨보는 것도 의미 있어요.",
        "너무 편하다 보니 계속 라이트 팬으로 남게 될 수도 있어요 — 그것도 괜찮지만, 더 깊이 파고들고 싶은 마음이 있는지 가끔 점검해보세요.",
      ],
    },
    iGenerateOther: {
      tier: '무한 팬심 제공자',
      lines: [
        "여기선 내가 주는 쪽이에요 — 애정, 응원, 관심 다요. 다행히 난 잘 마르지 않는 타입이라, 최애의 넘버원 팬 되는 게 오히려 나한테 제일 헌신적인 나를 끌어내줄 거예요.",
        "새벽 2시에 편집 영상 만들고 있는 나 자신을 발견하게 되는 조합이에요. 억지로가 아니라, 그냥 애정이 자연스럽게 흘러넘쳐서요.",
        "단톡방에서 이 최애 얘기 나올 때마다 은근히 자랑스러워하는 그런 나를 발견하게 될 거예요.",
        "이 최애를 지키고, 실력을 변호하고, 어떤 선택이든 응원하게 되는 조합이에요 — 스스로도 놀랄 정도로요.",
        "이 케미는 유난히 헌신적인 팬심을 끌어내요. 스밍도, 투표도, 단톡방 홍보도 다 내가 나서게 될 거예요.",
      ],
      goodFit: [
        "이 최애를 향한 팬심은 억지가 아니라 진심이에요 — 더 헌신적이고 다정한 팬으로서의 내 모습을 끌어내는 조합이에요.",
        "다른 사람보다 먼저 최애의 작은 성과를 알아채는 편이라, 이 팬덤 안에서 은근히 소중한 존재가 돼요.",
        "이 최애는 팬 활동에 진짜 의미를 부여해줘요 — 스밍하고, 투표하고, 지켜주는 게 오히려 나를 더 나답게 만들어줘요.",
        "직접적으로 티는 안 나도 아이돌 쪽에서도 이런 팬을 알아보는 경우가 많아요 — 이런 정성은 멀리서라도 잘 안 사라져요.",
        "여러 최애를 가볍게 좋아할 때는 잘 안 나오는 따뜻한 팬심이 이 최애한테서는 자연스럽게 나와요.",
      ],
      watchFor: [
        "균형을 계속 살펴보세요 — 이 팬심은 내 시간, 돈, 에너지를 희생하지 않는 선에서 즐기는 게 제일 오래가요.",
        "습관적으로 스밍하고 투표하는 건지, 진짜 신나서 하는 건지 가끔 점검해보세요 — 번아웃은 가장 열심인 팬한테 제일 먼저 찾아와요.",
        "일방적으로 마음만 쓰는 팬심도 있어요 — 이 덕질이 여전히 즐거운지, 그냥 의무처럼 느껴지진 않는지 확인해보세요.",
        "단톡방에서 제일 목소리 큰 방어자가 될 수도 있어요 — 지치지 않게 페이스 조절도 필요해요.",
        "번아웃 조심하세요 — 좋은 팬을 만드는 그 헌신이, 아무것도 안 돌아오는 상태가 오래되면 나를 지치게 할 수 있어요.",
      ],
    },
    otherOvercomesMe: {
      tier: '자석 같은 텐션',
      lines: [
        "이 조합엔 진짜 텐션이 있어요 — 불편할 정도로 눈을 못 떼는, 그런 종류의 끌림이요. 편안한 최애라기보단, 확 빠져드는 최애에 가까워요.",
        "편안한 케미는 아니지만, 확실히 매력적인 케미예요 — 눈빛 하나, 가사 하나에도 유난히 신경 쓰이게 되는 그런 상대요.",
        "이 최애는 예상을 자꾸 빗나가요, 그리고 그 예측 불가능함이 바로 매력 포인트예요.",
        "몰래 신경 쓰이기 시작하다가, 어느새 제대로 빠져버리는 그런 타입의 최애예요.",
        "종이 위 스펙만 보면 제일 쉬운 조합은 아니지만, 오히려 오래가는 최애는 이런 케미인 경우가 많아요.",
      ],
      goodFit: [
        "이 텐션 덕분에 덕질이 지루할 틈이 없어요 — 이 최애를 완전히 다 파악했다는 느낌이 잘 안 들거든요, 그게 오히려 매력이에요.",
        "이 최애는 그냥 스쳐 지나가지 않고 가사, 인터뷰, 작은 디테일까지 실제로 챙겨보게 만들어요.",
        "예측 불가능함이야말로 잠깐의 관심을 몇 년짜리 최애로 바꾸는 힘이에요 — 이런 끌림은 쉽게 사그라들지 않아요.",
        "이 최애한테 살짝 집착하는 것도 즐거움의 일부예요 — 과몰입해서 다시 보고, 눈빛 하나 분석하고, 그게 재미의 절반이에요.",
        "이 최애는 내 취향에 대해서도 알려줘요 — 뭐에 끌리는지, 뭐가 계속 붙잡는지, 왜 하필 이 최애인지요.",
      ],
      watchFor: [
        "이렇게 몰입도 높은 최애는 라이트 덕질보다 시간과 정신적 에너지를 더 많이 가져갈 수 있어요 — 가끔은 균형을 점검해보세요.",
        "애매한 순간(눈빛, 가사, 캡션)을 실제보다 더 의미 있게 해석하기 쉬워요 — 적당한 거리감도 필요해요.",
        "이런 몰입 에너지가 과도해지면 파라소셜한 착각으로 이어질 수 있어요 — 팬과 아이돌 사이의 실제 거리를 잊지 않는 게 중요해요.",
        "이 최애를 자석처럼 끌리게 만드는 그 예측 불가능함이, 감정적으로는 조금 지치게 만들 수도 있어요 — 페이스 조절하세요.",
        "이 최애는 확실함보다 궁금증을 계속 자극하는 타입이에요 — 결론이나 예측 가능함이 필요한 성격이라면 조금 불안정하게 느껴질 수 있어요.",
      ],
    },
    iOvercomeOther: {
      tier: '든든한 보호자',
      lines: [
        "이 관계에서 내가 차분하고 든든한 쪽이에요 — 최애가 알아채든 못 알아채든, 은근히 지켜주는 입장이 되는 조합이에요.",
        "보호 본능을 자극하는 최애예요. 댓글창에서 방어해주고, 잘못된 정보 바로잡아주고, 자연스럽게 이 최애의 비공식 홍보대사가 되는 그런 케미요.",
        "이 최애 옆에서 든든한 지원군 역할을 하게 되는 단톡방 멤버가 되는 조합이에요.",
        "이 최애를 응원할 땐 유난히 차분한 쪽이에요 — 다들 트윗 폭풍일 때 혼자 침착하게 상황 정리하는 그런 사람이요.",
        "스타보다는 친구처럼 응원하게 되는 최애예요 — 든든하고, 살짝 보호적이고, 항상 최애 편이에요.",
      ],
      goodFit: [
        "애쓰지 않아도 이 팬덤 안에서 보호자 같은 존재가 돼요 — 단톡방 분위기 지키고, 잘못된 정보 바로잡는 그런 역할이요.",
        "주도하는 성향이 여기서 특히 유용해요 — 팬덤 안에서 다들 맥락이나 정확한 정보를 나한테 물어보게 돼요.",
        "논란이나 잘못된 정보가 퍼지기 전에 먼저 알아채는 편이라, 이 팬베이스 안에서 진짜 쓸모 있는 존재가 돼요.",
        "이 최애는 팬덤 안에서 부탁받지 않아도 자연스럽게 리드하는 역할을 맡게 해줘요 — 이미 편하게 잘하는 역할이에요.",
        "다른 팬들도 말은 안 해도 내 든든함에 많이 기대는 편이에요 — 이 팬덤 안에서 내 의견은 생각보다 무게가 있어요.",
      ],
      watchFor: [
        "보호하려는 마음이 선 넘는 검열로 흐르지 않게 조심하세요 — 모든 팬이 나처럼 덕질하는 건 아니고, 그래도 괜찮아요.",
        "단톡방이나 팬 커뮤니티에서 주도하는 게 편하다 보니, 일부러라도 다른 의견이 들어올 자리를 남겨두는 게 좋아요.",
        "항상 '책임감 있는' 팬으로 있는 것도 나름 피곤한 일이에요 — 남들 덕질까지 관리하지 않고 그냥 즐기기만 해도 괜찮아요.",
        "이 팬덤 안에서 내 의견은 꽤 무게가 있어서, 무심코 한 말도 예상보다 크게 받아들여질 수 있어요 — 조금 더 신중해도 좋아요.",
        "내가 최애를 위해 나서는 건지, 팬덤 논쟁에서 이기고 싶은 건지 가끔 스스로 점검해보세요.",
      ],
    },
  },
};

// Subjective best-to-worst ordering used for group-ranking view — not a
// judgment about the relation itself, just a sort order for "who am I most
// in sync with in this group".
export const RELATION_RANK = ['same', 'otherGeneratesMe', 'iGenerateOther', 'iOvercomeOther', 'otherOvercomesMe'];

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/**
 * Picks compatibility copy for a relation, stable per user+idol pair.
 * Returns the tier name plus three parallel texts (line/goodFit/watchFor)
 * all drawn from the same seeded variant index.
 */
export function getIdolMatchCopy(lang, relation, seedInput) {
  const entry = (idolMatchTemplates[lang] || idolMatchTemplates.en)[relation];
  const seed = hashCode(seedInput);
  const idx = seed % entry.lines.length;
  return { tier: entry.tier, line: entry.lines[idx], goodFit: entry.goodFit[idx], watchFor: entry.watchFor[idx] };
}
