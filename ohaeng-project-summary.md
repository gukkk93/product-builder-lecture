# Ohaeng 프로젝트 개발 요약 (Claude Code 인수인계용)

> 새 Claude Code 세션에 붙여넣어 이어서 작업하기 위한 정리본입니다. 이 파일 자체가 레포에 커밋되어 있으니, 새 세션에서 "이 프로젝트 계속 개발할 건데 ohaeng-project-summary.md 읽고 시작해줘"라고만 해도 됩니다.

---

## 1. 프로젝트 개요

- **서비스명**: Ohaeng
- **컨셉**: K-pop 팬덤(영어권 + 한국어권 모두)을 타겟으로 한 한국 사주(四柱)/오행(五行) + 오늘의 운세 웹앱
- **차별점**: 서양 별자리 운세(Co-Star 등, 이미 포화된 시장) 대비 한국 고유 오행 이론 + K-pop 팬덤 콘텐츠(아이돌 궁합, "컴백운" 카테고리)로 차별화
- **레포**: [gukkk93/product-builder-lecture](https://github.com/gukkk93/product-builder-lecture) (main 브랜치)
- **배포**: https://product-builder-lecture-cgp.pages.dev/ (Cloudflare Pages, main에 push하면 자동 빌드·배포)

---

## 2. 기술 스택

- **Vite + React** (JS, TypeScript 아님), `react-router-dom`, `react-i18next`
- **`lunar-javascript`**: 사주 계산 핵심 — 실제 절기/60갑자 기반 만세력 라이브러리. 근사치가 아니라 정확한 계산 (이게 이 프로젝트의 핵심 신뢰 포인트)
- **`html-to-image`**: 결과를 9:16 PNG 공유카드로 렌더링
- **`pretendard`** (npm, self-host, dynamic subset): 브랜드 폰트, 영문+한글 지원
- 별도 UI 프레임워크(Tailwind 등) 없음 — 순수 CSS + CSS 커스텀 프로퍼티(디자인 토큰)
- **`functions/`(Cloudflare Pages Functions) + `workers-og`(devDependency 아님, dependency) + `wrangler`(devDependency)**: 동적 OG 미리보기 이미지 생성용 — 7-3 참고. Vite 빌드 파이프라인과는 별개로, Cloudflare Pages가 `functions/` 디렉토리를 자동 감지해서 배포함(별도 대시보드 설정 불필요)

## 3. 사주 계산 로직 (`src/utils/saju.js`)

- `calculateSaju(birth, timeKnown)` → `{ pillars, elementCounts, dominantElement, zodiac, dayGan, dayGanElement, dayGanStrength }` 반환
  - `dayGanStrength`: `'strong' | 'weak'` (신강/신약) — 일간이 나머지 글자들의 도움을 얼마나 받는지로 판정
- `getGanElement`/`getZhiElement`: 천간·지지 → 오행 매핑
- `getGanLabel(gan, lang)`/`getZhiLabel(zhi, lang)`: `lang==='ko'`면 한글(갑을병정...), 아니면 로마자 그대로. **lunar-javascript엔 한국어 로케일이 없어서** 직접 매핑 테이블(`GAN_KO`/`ZHI_KO`)을 만들어 넣음
- **`getZodiacLabel(zodiac, lang)`**: 같은 이유로 `saju.zodiac`(`getYearShengXiao()`)도 한국어 로케일이 없어서 `I18n.setLanguage('ko')`를 걸어도 항상 영문("Horse" 등)만 나오던 버그를 같은 패턴(`ZODIAC_KO` 12개 매핑)으로 수정 — 라이브러리가 실제로 반환하는 정확한 영문 스트링(Goat 등, 짐작 아님)을 콘솔로 직접 찍어서 키를 맞춤. `Result.jsx`/`ShareCard.jsx`에서 `saju.zodiac`/`{zodiac}`을 직접 렌더링하던 곳 전부 교체
- `getElementRelation(myElement, otherElement)`: 오행 상생상극 관계 판정 (`same`/`otherGeneratesMe`/`iGenerateOther`/`otherOvercomesMe`/`iOvercomeOther`) — **이 앱의 모든 "오늘의 운세"·"궁합" 로직이 여기서 파생됨**
- `getTodayRelation(saju, date)`: 내 사주 vs 오늘 날짜
- `getCompatibility(mySaju, otherBirth, otherTimeKnown)`: 나 vs 다른 사람(아이돌이든 일반인이든) — 아이돌 궁합/일반 궁합/그룹 랭킹/베스트매치가 전부 이 하나의 함수를 재사용
- `getCompatibilityScore(relation, seedInput)`: 관계(5종)를 1-99 궁합 점수(%)로 변환. 관계별 기준점(same=92 ~ otherOvercomesMe=48) + seed 기반 지터(±3)로 같은 관계라도 쌍마다 살짝 다른 점수가 나옴. 그룹 매치/베스트매치/궁합 보기에 표시되는 "궁합 점수"가 전부 이 함수 하나에서 나옴
- `getGanMeta(gan, lang, { dayGan, isDayPillar })`/`getZhiMeta(zhi, lang, { dayGan })`: 사주팔자 글자 하나(예: 을/해)의 전체 메타데이터를 반환 — `{ category: 'gan'|'zhi', label, hanja, element, yinYang }`, `dayGan`을 넘기면 십성/십이운성까지 추가로 포함. `PillarGrid`가 칸을 탭했을 때 보여주는 글로서리(용어 설명) 패널의 데이터 소스. 음양은 `GAN_YINYANG`/`ZHI_YINYANG` 매핑(십간/십이지 전통 순서 기준 양/음 교대)으로 새로 추가함

## 3-1. 십성·십이운성·대운 (`src/utils/saju.js`, 신규)

세 가지 다 "정확한 계산"이 핵심 신뢰 포인트라는 지침에 따라, UI 붙이기 전에 계산 로직부터 별도로 검증하는 데 집중함. 콘텐츠 문구(성격 설명 등)는 이번 스코프에서 제외 — 라벨(한자+한글/영문)만 포함.

- **십성(十星) — `getTenGod(dayGan, otherGan)`/`getTenGodsForZhi(dayGan, zhi)`/`getTenGodMeta(tenGod, lang)`**: 기존 `getElementRelation` + 천간 음양 일치 여부로 직접 판정(관계 5종 × 음양 같음/다름 2종 = 10종). **lunar-javascript 자체의 `SHI_SHEN` 참조 테이블과 100개 천간 쌍 전부 대조해서 0건 불일치 확인 후 채택**. 단, 라이브러리 자체의 `EightChar.getXxxShiShenZhi()`(지지 지장간 십성) 메서드는 실제 버그가 있어서 **일부러 안 씀** — 이 메서드들은 영문 일간("Ji")과 라이브러리의 `ZHI_HIDE_GAN` 테이블에서 나온 미번역 한자 지장간("癸")을 그대로 이어붙여 딕셔너리 키를 만드는데, `I18n.setLanguage('en')`을 켜도 `ZHI_HIDE_GAN`의 값(키가 아니라 값)은 한자로 남아있어서 항상 `null`을 반환함(이 앱은 항상 영문 I18n을 켜두므로 100% 재현되는 버그). 지장간(`ZHI_HIDE_GAN`, 12지지 표) 자체는 라이브러리 원본 데이터와 대조 검증 후 이 파일 안에 직접 하드코딩
- **십이운성(十二運星) — `getTwelveStage(gan, zhi)`/`getTwelveStageMeta(stage, lang)`**: 천간별 장생(長生) 시작 지지 고정표 + 양간 순행/음간 역행 규칙으로 직접 판정. 위 지장간 버그와는 무관한 별개의 계산 경로라 라이브러리의 `EightChar.getYearDiShi()` 등과 대조 검증(54개 생년월일 × 4기둥 = 216건, 0건 불일치)한 뒤 독자 구현으로 채택. "임관(臨官)"으로도 불리는 4번째 단계는 사용자 요청대로 한국 명리학 관행에 더 가까운 **"건록(建祿)"**으로 라벨링
- **대운(大運) — `getDaeun(birth, timeKnown, gender, count)`**: 위 둘과 달리 **재구현하지 않고 lunar-javascript 내장 기능(`EightChar.getYun(gender, sect).getDaYun(n)`)을 그대로 씀** — 대운 시작 나이는 생일과 가장 가까운 절기 사이 정확한 일수 계산이 필요해서 직접 구현 시 오차 리스크가 크다고 판단. 라이브러리 자체의 메인테이너 테스트 스위트(`Yun.test.js`)를 그대로 재현해서 전부 통과 확인 + 성별·생년월일 조합 6개를 필드 단위로 추가 대조. 성별 파라미터가 방향(순행/역행)에 실제로 영향을 주므로, 프로필 개인화용으로 만들어둔 선택적 성별 필드가 비어있으면 대운표 대신 안내 문구를 보여줌(성별을 억지로 추측하지 않음)
- **UI 반영**: `PillarGrid`의 글로서리 패널에 일간 대비 십성(일주 자체는 "일간(日干)" 배지로 별도 표시)과, 지지의 경우 지장간 십성 전부 + 십이운성을 추가 표시. `DaeunTable.jsx`(신규) — `/saju`에 나이·간지·연도를 가로 스크롤 카드로 보여주는 대운표
- **검증 방식**: 웹 접속이 안 되는 환경이라 외부 만세력 사이트와의 수동 대조 대신, 라이브러리 자체의 검증된 참조 데이터(위 세 항목 각각)와 전수/샘플 대조하는 방식으로 검증함 — 서로 다른 생년월일 3개(남/여 섞어서)를 브라우저에서 직접 입력해 화면에 뜨는 값이 스크립트로 독립 계산한 값과 정확히 일치하는지도 확인(라이트/다크, en/ko)

## 3-2. 베스트매치 로직 (`src/utils/bestMatch.js`)

- `findBestMatch(pool, userSaju, myGender)`: `pool`(사람 목록, 각 항목에 `gender: 'M'|'F'` 필요) 중 내 성별의 **반대 성별**만 걸러서 전원과의 궁합을 계산하고, `getCompatibilityScore`가 가장 높은 1명을 반환. 아이돌 매치(`IdolMatch.jsx`)와 K-드라마 매치(`DramaMatch.jsx`)가 이 함수 하나를 공유 — 사용자가 "둘이 사실상 같은 기능"이라고 지적해서 통합함

## 3-3. `/saju` 도메인 섹션 근거 재설계 (`sajuProfileTemplates.js`)

원래 4개 도메인(romanceStyle/wealthStyle/careerStyle/healthStyle, 5-1의 3단계에서 만듦)이 전부 `dominantElement`+`dayGanStrength` 딱 두 값만 근거로 삼다 보니, 도메인 이름만 다르고 내용은 사실상 같은 메시지가 반복되는 문제가 있었음(사용자가 직접 발견). **각 도메인이 사주 데이터 중 서로 다른 요소를 근거로 쓰도록 재설계**함 — 3-1에서 만든 십성 계산을 재사용:

- **연애 스타일**: 일지(배우자궁 — 전통적으로 배우자 인연을 보는 자리)의 십성 5대 분류. 성별/신강신약 필요 없이 항상 계산 가능
- **재물 성향**: 일간 제외 나머지 7글자 중 재성(財星) 개수 → 없음/보통/많음 3단계
- **커리어 적성**: 같은 방식으로 관성(官星) 개수 → 없음/보통/많음 3단계
- **건강 기질**: `dominantElement`가 아니라 **가장 약한(개수 최소) 오행**을 오행-장기 대응론으로 안내 — 원래 "제일 강한 기운"을 보여주던 것에서 "가장 챙겨야 할 부위"로 관점 전환
- 새 `saju.js` 헬퍼: `getTenGodCategoryCounts(saju)`(글자 위치당 십성 1표 — 지지는 지장간 중 본기 하나만 카운트해서 중복 방지), `getDayBranchTenGodCategory(saju)`, `getWeakestElement(saju)`
- `getDomainInsight(lang, domain, element, strength)` → `getDomainInsight(lang, domain, saju)`로 시그니처 변경, 도메인별로 필요한 값을 내부에서 알아서 계산. `Saju.jsx` 호출부도 맞춰 수정
- **검증**: 서로 다른 생년월일 5개 × en/ko로 브라우저에 직접 입력해서 렌더링된 4개 섹션 텍스트가 (a) 서로 겹치지 않고 (b) 스크립트로 독립 계산한 값(재성/관성 개수·티어, 배우자궁 십성, 최약 오행)과 필드 단위로 정확히 일치하는지 확인. 검증 도중 테스트 스크립트 자체의 시(時) 드롭다운 인덱스 오프바이원 버그를 발견해서 바로잡음(앱 코드 버그 아님) — 재확인 후 5개 날짜 전부 일치

## 4. 라우트/페이지 구조

| 라우트 | 파일 | 내용 |
|---|---|---|
| `/` | `Landing.jsx` | **순수 메뉴 화면** (생년월일 입력 없음). 섹션 순서: "사주 리딩"(오늘의 운세/내 사주/궁합) → "K팝 & K-드라마"(**최애 매치**/아이돌 매치/K-드라마 매치, 이 순서) → "연애"(재회사주/짝사랑사주/속마음사주/썸궁합). "그룹 매치"는 "최애 매치"로 개명(제목+설명 문구, 목적지 페이지 헤딩까지) — "그룹 전체 랭킹"보다 "내 최애와의 궁합"으로 읽히도록 |
| `/result` | `Result.jsx` | 오늘의 운세만 — 오행 배지, 띠, 5개 카테고리(총운/애정/재물/건강/컴백운), 공유카드, "궁합"/"내 사주" CTA. birth 파라미터 없으면 `BirthDateForm`(이름+성별 선택 필드 포함, 아래 참고) 인라인 렌더 |
| `/saju` | `Saju.jsx` | 내 사주 자체(오늘과 무관) — 네 기둥(PillarGrid, 한국어면 한글 표기, 십성·십이운성 글로서리 포함), 일간+신강/신약 배지, **대운표**(성별 입력 시), 오행 분포 바차트, 성격 분석, **공유카드**(`SajuShareCard.jsx`). birth 없으면 이름+성별 선택 필드 포함 인라인 폼 |
| `/compatibility` | `Compatibility.jsx` | **아무 두 사람**(친구/연인) 궁합 — 2단계 위저드(내 생일 → 상대 이름+관계+생일) → 결과+공유카드. 상대 이름/관계(친구·연인·썸·가족·동료)를 입력받아 결과 헤딩("나 & {이름}")과 공유카드에 그대로 반영. 궁합 점수(%) + 왜 이 점수인지 한 줄 설명 포함. 팬덤 용어 없는 별도 문구 뱅크 사용. `?relationship=some`으로 진입하면 관계 선택 스텝을 건너뛰고 "썸"(내부 키는 `some`, 화면 영문 라벨은 "Crush" → **"Situationship"으로 재변경**, 한국어 라벨 "썸"은 그대로)으로 바로 시작 — Landing의 "썸궁합" 메뉴가 이 경로로 링크됨 |
| `/romance` | `Romance.jsx` (신규) | **연애 상황별 궁합** — `?situation=reunion\|crush\|theirFeelings`. `Compatibility.jsx`와 거의 동일한 구조(내 생일 → 상대 이름+생일, 관계 선택 스텝은 없음 — situation 자체가 관계를 암시)지만 `getCompatibility`/`getCompatibilityScore`는 그대로 재사용하고 콘텐츠만 `romanceTemplates.js`(상황별 전용 문구뱅크)에서 가져옴. `reunion`은 결과에 공통 클로징 라인("다시 만나든 아니든, 지금부터가 중요해요")이 한 줄 추가됨(온스크린 결과에만 표시, 공유카드 이미지에는 공간 제약으로 미포함). 공유카드는 `CompatibilityShareCard.jsx` 재사용(헤딩만 situation 라벨로 교체) |
| `/idol-match` | `IdolMatch.jsx` | **베스트매치 추천** — 생일+성별 입력 → 반대 성별 아이돌 풀(31개 그룹, 197명) 전체와 궁합 계산해서 1위를 추천. `?mode=group&group=X&member=Y`는 **그룹 선택 → 멤버 선택(드롭다운 2개, `.select-row`)** → 그 멤버 한 명과의 전체 궁합 상세(사주팔자+점수+설명+공유카드). 한때 자동 랭킹 리스트(`GroupRankList.jsx`, 멤버 전원 점수순 나열 + 탭해서 드릴다운)로 만들었었는데, "예전처럼 멤버를 직접 선택하는 방식으로 바꿔달라"는 피드백으로 **드롭다운 선택 방식으로 재변경** — `GroupRankList.jsx`는 삭제함 |
| `/drama-match` | `DramaMatch.jsx` (신규) | 아이돌 매치와 **완전히 동일한 메커니즘**을 K-드라마 배우 100명(남 50/여 50, `kdramaActors.js`) 대상으로 실행. `findBestMatch`/`MatchResultCard`를 아이돌 매치와 공유 |
| `/contact` | `Contact.jsx` (구 `Partnership.jsx`) | Formspree 문의 폼 — **제휴 문의 전용에서 일반 문의로 범위 확장**. 이름/이메일/문의유형(일반 피드백·버그 제보·제휴 제안·기타)/회사(선택)/내용. 옛 `/partnership` 경로는 `<Navigate>`로 `/contact`에 301성 리다이렉트 |
| `/guide` | `Guide.jsx` | 사주 vs 별자리 비교, 오행 상생상극, "랜덤 아님" 신뢰 섹션 + **궁합 점수 계산법·신강/신약·그룹매치/드라마매치 설명** 3개 섹션 추가 (기능이 늘어날 때마다 여기가 안 따라가고 있다는 피드백으로 보강) |
| `/about`, 그 외 | `ComingSoon.jsx` | 미구현 placeholder |

헤더 우측 상단의 "Idol Zone" 링크는 제거됨(Guide/Contact us/언어토글/다크모드토글만 남음) — 사용자 요청.

**아이돌 멤버 이름 한국어 표시**: `idols.js`의 197명 전원에 `nameKo` 필드 추가(예: `bts-jimin` → `지민`, 외국인 멤버는 한국 매체 표준 표기, 예: `svt-the8`(徐明浩) → `디에잇`, `gidle-yuqi`(宋雨琦) → `우기`). `getMemberName(member, lang)` 헬퍼로 한국어 모드에서만 `nameKo`를 쓰고 없으면 영문 `name`으로 폴백. 아이돌 매치/그룹 매치/공유카드 등 멤버 이름이 나오는 모든 곳에 적용. 이름 검증은 웹 검색 리서치 에이전트로 진행(NamuWiki/Naver/한국어 위키 기준, 스테이지네임 vs 실명 표기 컨벤션이 멤버마다 달라 개별 확인). K-드라마 배우(`kdramaActors.js`)는 이번 범위에서 제외 — 요청 시 후속 작업.

생년월일 입력은 `BirthDateForm.jsx` 하나로 통일 — Result/Saju/Compatibility/IdolMatch(베스트매치+group)/DramaMatch 전부 재사용. 성별 선택은 `GenderSelect.jsx`(IdolMatch/DramaMatch에서 매치 풀 필터링용으로 공용), 매치 결과 카드는 `MatchResultCard.jsx`(아바타+**상대방의 네 기둥 사주(PillarGrid)**+궁합 점수+티어+왜 이 점수인지 설명+공유버튼, 두 페이지 공용)로 분리했다. 원래는 매칭된 상대의 "오늘의 운세"를 보여줬는데 `/result` 페이지와 내용이 겹친다는 피드백으로 **상대방 자신의 사주팔자**를 보여주는 것으로 교체함.

**`/result`·`/saju`에 이름/성별 필드 추가**: `BirthDateForm`에 `collectProfile` prop 추가 — true일 때만 생년월일 위에 이름 입력(선택)과 `GenderSelect` 재사용 성별 선택(선택)이 뜸, Result/Saju에서만 켜져 있고 나머지 페이지는 그대로. 처음 추가할 당시엔 **순수 화면 개인화용**(계산 로직에 전혀 안 들어감)으로 스코프를 정했었음 — "성별에 따라 운세 내용도 달라지게" vs "화면 개인화만" 둘 중 사용자가 후자로 확인해줬기 때문(전자는 fortuneTemplates.js/sajuProfileTemplates.js에 성별 축을 새로 추가해야 하는 훨씬 큰 작업이라 스코프 아웃). 이름이 있으면 "OO님의 오늘의 운세"/"OO님의 사주"로 헤딩이 바뀌고 공유 캡션·동적 OG 미리보기(7-3)에도 반영됨. **이후 대운(3-1 참고) 추가로 `/saju`의 성별 필드는 순수 장식을 넘어 실제 계산(대운 순행/역행 방향)에 쓰이게 됨** — 성별 없으면 대운표 대신 안내 문구만 표시, 추측 안 함. 둘 다 안 넣으면 기존과 완전히 동일하게 동작.

**궁합 점수 설명(`matchCommon.explanation.*`)**: 점수/티어 아래에 "목 오행이 화 오행을 생해줘서 이런 결과가 나온 거예요" 식으로 오행 상생상극 관계를 풀어주는 한 줄이 붙는다. `t('matchCommon.explanation.'+relation, {my, other})` 형태로 IdolMatch/DramaMatch/Compatibility 세 곳에서 동일하게 사용.

**옛 "최애 궁합"(bias 모드)은 제거됨** — 기존 아이돌 매치(그룹+멤버 수동 선택)와 최애 궁합이 사실상 동일한 화면이었다는 사용자 피드백에 따라, 수동 선택 UX를 없애고 위 베스트매치 추천 방식으로 통합했다. (참고: "그룹+멤버 선택해서 궁합 보기" 자체는 완전히 사라진 게 아니라, 위에 적은 대로 그룹 매치 랭킹의 멤버 클릭 드릴다운으로 형태를 바꿔 남아있음)

**공유 가능 페이지 4→5개로 확장**: 오늘의 운세/궁합/아이돌 매치/드라마 매치에 더해 **`/saju`(내 사주 프로필)도 공유 가능**해짐. 그룹 매치의 멤버 상세 드릴다운도 공유카드를 가짐(IdolShareCard 재사용). 전부 `useShareCardDownload`(Web Share API + 다운로드 폴백) + 각 페이지 전용 `shareCaption` i18n 키 + `buildShareUrl(path)`로 해당 기능 경로 링크를 CTA에 포함.

## 5. 콘텐츠 뱅크 (`src/data/`) — **en + ko 완전 병렬**

- **`fortuneTemplates.js`**: 관계(5) × 카테고리(5) × 5개 문구 = **125개**, en/ko 각각. `getFortuneLine(lang, relation, category, seed)`
- **`idolMatchTemplates.js`**: 관계 5종 × 5개 문구 = **25개**, en/ko 각각. tier명도 언어별로 다름 (예: same → en "Twin Flame" / ko "완벽한 싱크로율"). `RELATION_RANK`는 더 이상 정렬에 안 쓰이지만(점수 기반 정렬로 교체) 남아있음
- **`compatibilityTemplates.js`**: idolMatch와 같은 구조지만 **팬덤 용어 없음** (친구/연인 관계에도 자연스럽게), 25개 × en/ko
- **`dramaMatchTemplates.js`** (신규): idolMatch와 같은 5관계 구조지만 K-드라마 시청 어휘로 리라이트(정주행/본방사수/필모 등), 25개 × en/ko
- **`sajuProfileTemplates.js`**: dominant element별 성격 프로필(제목+2문단) + day master별 "진짜 나" 텍스트, en/ko 각각
- **`romanceTemplates.js`** (신규): situation(재회/짝사랑/속마음 3종) × 관계(5종) × 5개 문구 = **150개**(en/ko 합산). `compatibilityTemplates.js`처럼 팬덤 용어 없음, situation별로 문체만 다르게(재회=아직 못 놓는 이유+희망적 클로징, 짝사랑=가볍고 설레는 톤, 속마음=상대 시점으로 서술). 재회 전용 공통 클로징 라인은 `romanceClosing`으로 따로 관리(관계별 25개 문구에 안 넣고 렌더링 시 뒤에 붙임 — 유지보수 편하게). `getRomanceCopy(lang, situation, relation, seed)` / `getRomanceClosing(lang, situation)`
- 한국어는 **직역이 아니라 자연스러운 로컬라이즈** — 최애/스밍/컴백/덕질 같은 팬덤 표현 사용

## 5-1. 인사이트 섹션 확장 작업 (완료 — 1~5단계 전부 완료)

사용자가 5단계 계획을 제시하고 "1단계부터 시작하면 될 것 같아"라고 스코프를 명시적으로 좁혀서 시작했고, "2단계 ㄱㄱ" → "3단계 ㄱㄱ" → "4단계" → "ㄱㄱ" 지시로 다섯 턴에 걸쳐 한 단계씩 이어서 진행해 완료함.

- **1단계**: `matchCommon.explanation.*`(관계 5종, 궁합 점수 아래에 붙는 설명 문구)를 한 줄 요약에서 **3~4문장 문단**으로 확장(en/ko). `src/data/sajuStrengthTemplates.js` 신규(신강/신약 조합 4개 × en/ko, `getSajuStrengthInsight` — **아직 어디에도 연결 안 됨**, Step 1~5 어디서도 안 씀, 향후 보너스 콘텐츠용으로 대기 중). `Compatibility.jsx`가 `compatibility` 네임스페이스에 없던 `theirElement` 키(`idolMatch`에만 있던 복붙 버그)를 호출하던 것도 이때 발견해 수정
- **2단계**: `compatibilityTemplates.js`/`idolMatchTemplates.js`/`dramaMatchTemplates.js`/`romanceTemplates.js` 네 파일 전체에 `goodFit`("잘 맞는 부분")/`watchFor`("관계에서 챙길 점") 2개 문단 뱅크를 관계 5종 × 5개 변형(en/ko) 추가. 기존 `line`과 같은 시드 인덱스로 뽑아서 세 문단이 일관되게 읽히도록 함. `getCompatibilityCopy`/`getIdolMatchCopy`/`getDramaMatchCopy`/`getRomanceCopy` 모두 `{ tier, line, goodFit, watchFor }` 반환
- **3단계**: `sajuProfileTemplates.js`에 `romanceStyle`/`wealthStyle`/`careerStyle`/`healthStyle` 4개 도메인 섹션 추가 — 처음엔 오행 5 × 강약 2 × en/ko로 시작했지만, 내용이 서로 겹친다는 피드백으로 **3-3에서 도메인별로 다른 근거를 쓰도록 재설계됨**(십성/배우자궁/최약오행 기반) — 최신 구조는 3-3 참고
- **4단계**: `src/components/InsightSection.jsx` 신규 — `sections`(`{ title, text }` 배열)를 번호 배지+제목+본문 카드로 `.map()` 렌더링(`.slice()`는 의도적으로 안 씀 — 나중에 페이월 게이팅을 슬라이스만으로 붙일 수 있게). `element`+`intro` prop을 주면 `ElementCharacter`가 말풍선(`.insight-bubble`, `global.css`에 꼬리만 별도 CSS 클래스, 나머지는 인라인 스타일)으로 섹션 목록을 소개
- **5단계(최종) 완료**: `InsightSection`을 실제 결과 화면에 연결
  - `MatchResultCard.jsx`(아이돌/드라마 매치 공용): `explanation` prop을 `insightSections` 배열 prop으로 교체
  - `IdolMatch.jsx`(베스트매치+최애매치 멤버상세)/`DramaMatch.jsx`: `[{explanation}, {goodFit}, {watchFor}]` 3개 섹션을 구성해 `MatchResultCard`에 전달
  - `Compatibility.jsx`/`Romance.jsx`: 기존 이탤릭체 `explanation` 단락을 `<InsightSection sections={...}>`으로 교체(같은 3개 섹션 구성). `Romance.jsx`의 재회 전용 클로징 라인(`closing`)은 그대로 유지, `InsightSection`과는 별개
  - `Saju.jsx`: 성격 분석 카드 아래에 새 카드 추가 — 3단계에서 만든 4개 도메인 섹션을 `ElementCharacter` 말풍선 소개(`saju.domainIntro`)와 함께 렌더링
  - 섹션 순서는 "왜 이 점수인지(흥미) → 잘 맞는 부분(흥미) → 관계에서 챙길 점(구체적 조언)"으로, 사용자가 지정한 "흥미로운 것 먼저, 구체적 조언은 뒤로" 원칙을 따름 — 나중에 앞쪽 1~2개만 무료로 남기고 뒤를 슬라이스로 잠그기 쉽도록
  - 새 i18n 키: `matchCommon.insightTitles.{explanation,goodFit,watchFor}`, `saju.domainHeading`/`domainIntro` (en/ko, parity 확인됨). 도메인 섹션 자체의 제목(`연애 스타일` 등)은 3단계에서 만든 `getDomainInsight`의 `title` 필드를 그대로 씀 — 별도 i18n 키 안 만듦
  - Playwright로 5개 페이지(궁합/로맨스/아이돌매치 베스트+최애매치 그룹모드/드라마매치/내사주) × 라이트·다크 × en/ko 전부 렌더링·콘솔 에러 없음 확인. 공유카드(`CompatibilityShareCard`/`IdolShareCard`)는 `InsightSection`을 렌더링하지 않아 회귀 없음도 스크린샷으로 확인

**완료 기준 충족**: 궁합/아이돌매치/드라마매치/로맨스/내 사주 결과 화면 전부에 인사이트 섹션이 여러 개 순서대로 노출되고, 잠금 UI·결제 버튼·"+N가지 더" 배지는 전부 없이 콘텐츠만 다 열려있는 상태. `sajuStrengthTemplates.js`(1단계 산출물)만 아직 미사용 — 향후 신강/신약 비교 보너스 인사이트로 쓸 수 있게 대기 중

## 6. 아이돌/배우 데이터

- **`src/data/idols.js`**: **31개 그룹, 197명** (남 16개 그룹/여 15개 그룹). 기존 10개(BTS, BLACKPINK, NewJeans, SEVENTEEN, Stray Kids, TWICE, EXO(활동 중인 6명만), TXT, aespa, ATEEZ)에 21개 그룹 추가: ENHYPEN, THE BOYZ, ZEROBASEONE, RIIZE, NCT DREAM, NCT 127, MONSTA X, GOT7, TREASURE, BOYNEXTDOOR(남), IVE, LE SSERAFIM, ITZY, (G)I-DLE, Red Velvet, MAMAMOO, Kep1er, STAYC, fromis_9, NMIXX, VIVIZ(여). 그룹마다 `gender: 'M'|'F'` 필드 추가(베스트매치 성별 필터링용)
- 생일은 **웹 검색으로 개별 교차검증**해서 넣음 (신뢰도 HIGH만 채택). EXO는 첸백시 제외(SM 계약 분쟁), NewJeans는 다니엘 제외(ADOR 소송으로 지위 불확실), ENHYPEN은 희승 제외(2026-03 탈퇴), THE BOYZ는 뉴 제외(2026-08 탈퇴) — 코드 주석에 사유 명시. 한때 단일 소스라 재검증 필요로 표시해뒀던 RIIZE 소희/안톤, GOT7 제이비, Kep1er 히카루/다연, NMIXX 배/지우/규진 8명은 2차 검증 완료 — KProfiles + NamuWiki/Generasia/Kpopping/dbkpop/Kbizoom 중 1개 이상 교차확인, 전부 기존 값과 일치
- **`src/data/kdramaActors.js`**: K-드라마 배우 100명(남 50/여 50), Wikipedia/Wikidata 기준 교차검증. `findBestMatch`에서 아이돌 풀과 동일한 방식으로 사용. **배우 한국어 이름(`nameKo`) 100명 전원 추가 + `getActorName(actor, lang)` 헬퍼** — `idols.js`의 `getMemberName`과 동일 패턴(ko 모드에서 `nameKo` 우선, 없으면 영문 `name` 폴백). 전부 널리 알려진 배우라 표기가 명확해서 별도 리서치 에이전트 없이 직접 채워 넣음(아이돌 작업 때는 해외 출신 멤버의 한글 표기가 실제로 애매한 경우가 있었던 것과 다름). `DramaMatch.jsx`가 언어와 상관없이 항상 영문 `best.candidate.name`을 쓰고 있던 버그(한국어 모드에서도 배우 이름이 영어로 나옴)를 같이 고쳐서 결과 카드/필러 헤딩/궁합 헤딩/공유카드 네 군데 전부 `getActorName`으로 교체함

## 7. 디자인 시스템

- **`STYLE_GUIDE.md`** (레포 루트): 색상/타이포/스페이싱 토큰, 아이콘 규칙 문서화. **"클린 배경" 방향으로 리비전됨** (아래 참고)
- **배경**: 무채색 중립 톤 (`--bg` 라이트 `#fafafa`/다크 `#121214`). 예전엔 보라색 radial-gradient + 배경 전체에 흐린 사신도 아이콘 콜라주(`FourSymbolsBackdrop.jsx`)가 있었는데, 사용자 피드백으로 **완전 제거**함
- **오행 아이콘** (`src/assets/icons/elements/{wood,fire,earth,metal,water}.png` — `public/`에서 이동, 아래 캐시 문제 참고): 이제 **실제 오행 데이터를 나타낼 때만** 사용 — 오행 배지, 공유카드, 헤더 로고. 페이지 배경 장식이나 메뉴 아이콘으로는 더 이상 안 씀. **원래는 청룡/주작/황룡/백호/현무 사신도 그림이었는데, 오행 캐릭터(7-2 참고) 도입 후 그 캐릭터 얼굴만 크롭한 이미지로 전면 교체함** — `src/assets/characters/*.png`(캐릭터 전신)에서 알파 채널 bbox 기준으로 실제 그림 영역을 찾고 위쪽 60%를 얼굴로 간주해 정사각형으로 크롭하는 Python(PIL) 스크립트로 생성, 같은 파일명 그대로 덮어써서 `ElementBadge`/공유카드 3종/헤더 로고 등 소비하는 쪽 6곳은 코드 수정 없이 자동 반영됨(전부 `import` 기반이라 Vite가 내용 해시로 캐시버스팅도 자동 처리)
- **메뉴 아이콘** (`MenuIcon.jsx`): 홈 메뉴 6개 항목용 심플 단색 라인 아이콘(해/막대그래프/벤다이어그램/별/하트/사람) — 사신도 동물 아이콘 재사용 대신 항목 의미에 맞게 새로 그림
- **멤버 아바타** (`MemberAvatar.jsx` + `ElementPattern.jsx`): 실사진/AI 합성 얼굴 **절대 사용 안 함** (초상권 리스크 회피). 멤버 본인 사주의 오행+신강신약을 계산해서 그라디언트+추상 패턴 아바타 생성 — 최대 10종(오행 5 × 강약 2, 강함=진하고 실선 테두리/약함=흐리고 점선 테두리)
- **공유카드** (`ShareCard.jsx`, `IdolShareCard.jsx`, `CompatibilityShareCard.jsx`, 전부 `ShareCardFooter.jsx`/`ShareCardWatermark.jsx` 공유): 9:16 PNG, URL 배지 포함
- **OG 배너**: `public/og-banner.png` — 1200x630, Playwright로 HTML 직접 렌더링해서 만든 전용 이미지. **두 번 리디자인됨** — 1차는 원래 배너가 초기 보라색 그라디언트 브랜딩 그대로라 지금의 클린 무채색 디자인과 안 맞고, 링크 공유 시 미리보기가 옛날 사이트처럼 보인다는 피드백으로 재제작(무채색+연보라 워시 배경 + "Saju Readings/Idol Match/Compatibility" 기능 pill 3개, 이 레이아웃은 지금도 유지). 2차는 가운데 5개 원형 배지에 들어가던 평면 오행 아이콘을 `src/assets/characters/`의 치비 캐릭터 전신 일러스트로 교체. 생성 스크립트를 **`scripts/generate-og-banner.mjs`로 레포에 저장**해둠(이전엔 일회성 스크래치 스크립트라 남아있지 않았음) — HTML/CSS를 Playwright로 1200x630 스크린샷 찍는 방식은 동일, 캐릭터 PNG는 `scripts/generate-og-characters.mjs`와 같은 패턴으로 base64 인라인 임베드. `playwright`를 devDependency로 추가해서 레포 안에서 `node scripts/generate-og-banner.mjs` 단독 실행 가능(브라우저 바이너리는 기존 로컬 캐시 재사용, 버전 1.62.1로 고정). `index.html`의 title/description/OG/Twitter 메타도 "Saju & Today's Fortune"(초기 범위) → "Saju, Idol Match & Compatibility"(현재 범위)로 함께 갱신
- **원형 아이콘 크롭 버그 수정**: 오행 아이콘 PNG(`public/icons/elements/*.png`)가 420×320 비율(정사각형 아님)인데 `object-fit: cover`로 원형 배지를 꽉 채우다 보니 그림 테두리가 잘려 나왔음. `ElementBadge`(`global.css` `.element-badge__icon`), `ShareCard`/`IdolShareCard`/`CompatibilityShareCard`의 원형 아이콘, `Layout.jsx` 헤더 로고까지 전부 `object-fit: contain` + 패딩으로 바꿔서 그림이 원 안에 여백을 두고 온전히 들어오게 통일함. `MemberAvatar`/`ElementPattern`(SVG 벡터 패턴)은 애초에 원 사이즈에 맞춰 그린 거라 해당 없음
- **아이콘 자체가 삐뚤었던 문제도 별도로 수정**: 위 크롭 버그를 고친 뒤에도 원 안 아이콘이 살짝 비뚤어 보였는데, 알고 보니 PNG 원본 안에서 실제 그려진 원형 그림 자체가 캔버스 중앙이 아니라 최대 21px씩 좌우/상하로 치우쳐 있었음. Python(PIL)로 5개 PNG를 실제 그림 기준으로 재크롭해서 정중앙에 오도록 고침
- **아이콘 캐시 무효화 문제 수정**: 위 두 수정을 이미 배포했는데도 사용자가 여전히 예전(잘리고 삐뚤어진) 아이콘을 본다고 보고함 — 원인은 오행 아이콘이 `public/icons/elements/wood.png`처럼 **파일명이 고정된 채로 내용만 바뀌는 방식**이라, 파일 내용이 바뀌어도 URL이 그대로라 브라우저/CDN이 예전 바이트를 계속 캐시해서 보여줬을 가능성이 높음. `src/assets/icons/elements/`로 옮기고 `import`로 불러오도록 바꿔서, 이제 Vite가 빌드 시 파일 내용 해시를 포함한 파일명(`wood-BOoaprF3.png` 등)을 만들어냄 — 앞으로 이 아이콘을 다시 수정해도 파일명이 자동으로 바뀌어 캐시 문제가 재발하지 않음
- **공유카드 점수 강조**: `CompatibilityShareCard`/`IdolShareCard` 둘 다 궁합 점수를 54~64px(카드별로 다름, 내용량에 따라 조정)로 압도적으로 키우고 티어명은 17~18px로 낮춤 — 소셜 공유 시 스크롤을 멈추게 하는 건 결국 숫자라는 판단. `IdolShareCard`엔 원래 점수가 아예 없었는데(온스크린 결과 카드에만 있었음) 이번에 추가함. 긴 문구가 카드 하단 푸터와 겹치지 않도록 두 카드 모두 본문 문단에 `-webkit-line-clamp`(idol/drama 5줄, compatibility 5줄)로 안전장치를 걸어둠
- **공유카드 한글 줄바꿈 버그 수정**: 네 공유카드(`ShareCard`/`SajuShareCard`/`IdolShareCard`/`CompatibilityShareCard`) + `ShareCardFooter`의 한글 텍스트 요소 전부에 `wordBreak: 'keep-all'`이 빠져있어서, 기본 아무 글자에서나 끊는 word-break 동작 때문에 긴 제목/문단이 줄바꿈될 때 "사람"이 "사"/"람"으로 쪼개지는 등 단어 중간에서 잘리는 문제가 있었음(특히 `sajuProfileTemplates.js`의 한국어 title처럼 카드 너비에 딱 안 맞는 짧은 제목에서 두드러짐). 오행 5종 전부 실제로 렌더링해서 확인함
- **`IdolShareCard` 상단 레이아웃 텍스트 중심으로 변경**: 이름 위에 있던 작은 `MemberAvatar`(60px, 오행+신강신약 그라디언트/패턴)를 없앰 — 바로 아래 "나 vs 상대" 비교 아이콘 두 개랑 오행 표시가 중복되는 느낌이었음. 대신 이름 폰트를 21px → 27px로 키워서 그 자리를 텍스트가 채우게 하고, 아이콘 하나 빠진 만큼 gap도 8→6으로 좁힘. 아래쪽 비교 아이콘/점수/티어/설명 등 나머지는 그대로
- **`MatchResultCard`(아이돌/드라마 매치 공용, 온스크린 결과 카드)도 같은 방식으로 변경**: 이름 옆 `MemberAvatar`(48px)를 없애고 이름 폰트를 16px → 21px로 키움 — `IdolShareCard`에서 쓴 것과 동일한 배율(21→27, ×9/7)을 적용한 값
- **사주팔자 글로서리**: `PillarGrid`의 각 칸(갑/을/병/정...)이 탭 가능해짐 — 누르면 그 글자의 한자·천간/지지 구분·오행·음양을 태그로 보여주는 패널이 그리드 아래에 뜬다. 상시 표시 대신 클릭식을 택한 이유: 8칸 전부에 상시 설명을 붙이면 화면이 너무 빽빽해짐. `/saju`의 "일간(日干)" 헤딩 아래에는 짧은 정의 문구를 상시로 추가(용어가 하나뿐이라 인라인이 더 적합하다고 판단)

## 7-2. 오행 캐릭터 (`src/assets/characters/`, `ElementCharacter.jsx`, `LoadingReveal.jsx`)

- **에셋**: `src/assets/characters/{wood,fire,earth,metal,water}.png` — 청룡/주작/황룡/백호/현무를 귀여운 치비 스타일로 그린 마스코트(오행 배지의 작은 원형 아이콘과는 별개, 전신 일러스트). 사용자가 미리 준비해서 레포에 넣어둔 파일을 이번에 실제로 웹에 붙임
- **에셋 문제 발견 및 수정**: 원본 PNG가 1024×1024에 파일당 1.4~1.5MB(5개 합쳐 ~7.3MB)였고, **투명 배경이 아니라 체크무늬 배경이 실제 픽셀로 박혀있었음**(alpha가 사실상 전부 255, 진짜 투명이 아니라 배경 제거 미리보기용 체크무늬가 그대로 내보내진 상태로 추정) — 실제 웹 화면에 렌더링해보고서야 발견함. Python(PIL+NumPy)으로 가장자리에서부터 밝고 채도 낮은(회색·흰색 계열) 연결 영역을 flood-fill로 찾아 alpha=0으로 만드는 방식으로 배경 제거 + 500×500으로 리사이즈 + 128색 팔레트 양자화로 압축 → 파일당 74~128KB(5개 합쳐 ~470KB)로 축소. 원본 파일은 git에 커밋된 적이 없어서(untracked) 되돌릴 백업이 없었음 — 결과물 육안 검수로 캐릭터 라인/디테일 손상 없음 확인
- **`ElementCharacter.jsx`**: `element` prop 받아 해당 캐릭터 렌더링, `size` prop으로 용도별 크기 조절(로딩 리빌 140px, `/saju` 인트로 100px, ComingSoon 120px, 워터마크 260px). 오행 아이콘과 동일하게 `import` 방식(캐시 무효화 자동 적용)
- **`LoadingReveal.jsx`**: 사주 계산은 `lunar-javascript`로 클라이언트에서 즉시 끝나서(서버 호출 없음) 실제 "로딩 시간"이 없음 — 그래서 연출용 최소 표시 시간(1.5초, `REVEAL_MS` 상수)을 의도적으로 넣어서 결과가 계산된 순간 캐릭터+"OO 기운이 당신의 사주를 분석하고 있어요"를 잠깐 보여준 뒤 실제 결과로 전환. `<LoadingReveal element={saju.dominantElement}>{실제 결과 JSX}</LoadingReveal>` 형태로 결과 렌더링 부분만 감싸는 방식이라 각 페이지의 계산 로직은 안 건드림. birth 없이 들어오면(폼만 보여줘야 할 때) 이 컴포넌트를 아예 거치지 않음. 적용된 곳: Result/Saju/Compatibility/Romance/IdolMatch(베스트매치+최애매치 멤버상세)/DramaMatch — 총 7개 결과 분기
- `/saju`엔 로딩 리빌과 별개로 **상시 노출되는 캐릭터 소개 섹션**을 최상단 카드에 추가(ElementBadge 위, "이게 당신의 {{원소}} 기운이에요" 문구)
- `ComingSoon.jsx`의 🚧 이모지를 오행 캐릭터로 교체 — 유저의 원소를 모르는 컨텍스트라 렌더링마다 5개 중 랜덤 선택
- **`ShareCardWatermark.jsx` 개편**(아이콘 얼굴 크롭 작업과 같이 진행): 기존엔 오행 아이콘(우하단, 440px, 14%)+캐릭터(좌상단, 260px, 8%) 두 종류를 같이 깔았는데, 아이콘이 이제 캐릭터 얼굴 크롭이라 둘이 중복되는 느낌이라 **아이콘 워터마크는 없애고 캐릭터 전신 하나로 통일**함. `element` 단일 prop 대신 `elements` 배열을 받아서, 1명이면 기존처럼 우하단에 크게(400px, 13%) 한 명만, **2명이면 우하단(320px)+좌상단(320px) 양쪽 코너에 각자 다른 캐릭터**가 뜨도록 바꿈 — 궁합류 카드(궁합/아이돌매치/드라마매치)에서 나랑 상대 오행이 다를 때 예전엔 상대 쪽만 배경에 나오던 문제를 고침. 호출부 4곳(`CompatibilityShareCard`는 `[myElement, theirElement]`, `IdolShareCard`는 `[userElement, idolElement]`, `SajuShareCard`/`ShareCard`는 `[element]` 한 개짜리 배열)도 같이 수정. 서로 다른 오행 두 캐릭터가 양쪽 모서리에 겹침 없이 뜨는지 Playwright로 실제 확인(같은 오행이 나오지 않게 생일을 직접 계산해서 테스트)

## 7-1. 공유 방식 (`src/hooks/useShareCardDownload.js`)

- **지원되면**(iOS Safari, Android Chrome) `navigator.share({ text })`로 OS 공유시트를 띄움(인스타그램/카카오톡/왓츠앱/메시지 등 설치된 앱이 자동 나열). **지원 안 되면**(대부분 데스크탑) 공유카드를 PNG로 렌더링해서 `<a download>` 방식으로 폴백
- 버튼 라벨도 자동 전환: 공유시트 지원 시 "Share"/"공유하기", 아니면 "Download share card"/"공유카드 다운로드" (`result.shareNative` i18n 키, 원래 있었는데 안 쓰이던 걸 재활용)
- Result/Saju/Compatibility/Romance/IdolMatch(베스트매치+그룹 드릴다운)/DramaMatch 전부 적용. 공유시트 취소(`AbortError`)는 다운로드로 재폴백하지 않고 조용히 종료
- 헤드리스 브라우저엔 Web Share API가 없어서, `navigator.share`를 Playwright로 모킹해서 실제 호출 여부·전달된 텍스트를 검증함 (실기기 공유시트 UI 자체는 직접 확인 필요)
- **중복 링크 버그 수정**: `navigator.share({ files, text, url })`처럼 `url`을 별도 필드로도 같이 보냈더니, 카카오톡 등 일부 공유 대상이 `text`에 이미 포함된 링크(안전장치로 넣어둔 것)와 별도 `url` 필드를 각각 별개의 링크 미리보기로 처리해서 사진 하나에 링크가 2개 붙어 나가는 문제가 있었음 — 사용자가 직접 발견해서 알려줌. `url` 필드를 빼고 `text`에만 링크를 넣도록 고쳐서 사진 1개 + 링크 1개로 정리됨
- **`files` 완전히 제거됨(7-3 참고)**: 이제 링크 자체가 결과를 재현하고, 동적 OG 이미지(7-3)가 미리보기를 담당하므로 공유시트에 PNG 파일을 따로 첨부할 필요가 없어짐 — 공유 가능한 브라우저(대부분의 모바일)에서는 이제 `toPng()` 렌더링 자체를 아예 안 함(링크만 보내면 되니까). 데스크탑 다운로드 폴백은 그대로 PNG 렌더링을 씀

## 7-3. 동적 OG 미리보기 (Cloudflare Pages Functions)

7-1의 백엔드 Q&A(정적 SPA라 결과별 미리보기가 불가능하다는 답)를 실제로 구현함 — Cloudflare Pages Functions로 별도 상시 서버 없이 요청 경로별 메타태그/이미지를 그때그때 생성.

- **`src/utils/shareUrl.js`**: `buildShareUrl(path, extraParams)`로 시그니처 변경. 기본적으로 현재 페이지의 `window.location.search`를 그대로 가져오고(Result/Saju/IdolMatch/DramaMatch는 이미 URL 기반이라 이걸로 재현 파라미터가 다 채워짐), `extraParams`를 병합함(주소창엔 없지만 페이지가 계산해서 알고 있는 값들 — 궁합/로맨스의 상대방 정보, OG 이미지용 element/score/name/tier). `lang`은 항상 자동 포함(localStorage `language` 키 기준). 새 `birthParams(birth, prefix)` 헬퍼로 생년월일 하나를 `{y,m,d,h,cal,timeKnown}` 파라미터 세트로 변환(두 번째 사람은 `t` 프리픽스: `ty/tm/td/th/tcal/ttimeKnown`)
- **`Compatibility.jsx`/`Romance.jsx`가 URL 기반이 아니었던 문제**: 두 페이지 다 내 생일/상대 생일/이름/관계를 순수 React state로만 관리해서, 공유 링크에 아무 재현 정보가 안 들어가고 있었음(다른 4개 페이지는 이미 URL 기반이라 문제없었음). `paramsToBirth`가 prefix 인자를 받도록 바꾸고, `useState`를 URL 파라미터가 있으면 그걸로, 없으면 기존처럼 `null`/빈 값으로 lazy-init하도록 변경 — **평소 사용 흐름은 그대로**(주소창에 계속 값이 안 남음), 공유 버튼 클릭 시 `buildShareUrl`의 `extraParams`로 재현에 필요한 모든 값을 링크에 실어 보냄. 이 링크를 직접 열면(공유받은 사람이 클릭) `useState`의 lazy-init이 URL을 읽어서 폼 입력 없이 바로 같은 결과가 재현됨
- **`functions/og-image.png.js`**: `workers-og` 패키지(`@vercel/og`의 Cloudflare Workers 포팅) 사용, `element/score/name/tier/lang` 쿼리파라미터로 1200×630 PNG를 `ShareCard.jsx`와 같은 톤(오행 그라디언트 + 캐릭터 + 점수)으로 렌더링. `score`가 있으면 궁합/매치 레이아웃(점수 크게), 없으면 `/result`·`/saju`용 오행 단독 레이아웃으로 분기
  - **캐릭터 이미지**: `functions/_lib/characters.js`에 5종 base64 data URI로 내장(자체 정적 자원을 Workers 런타임 안에서 fetch하는 게 불안정하다는 문제 회피). `scripts/generate-og-characters.mjs`로 재생성 가능(캐릭터 아트가 바뀌면 다시 실행)
  - **폰트**: 풀 한글 폰트를 함수에 내장하는 대신, `workers-og`가 제공하는 `loadGoogleFont({family, weight, text})`로 매 요청마다 실제 쓰이는 글자만 Google Fonts API(`css2?...&text=`)에서 서브셋으로 받아옴 — 이 방식의 공식 권장 패턴. 'Noto Sans KR' 사용
  - **`workers-og@0.0.27` 버그 발견 및 우회**: `loadGoogleFont`가 `text` 파라미터를 `encodeURIComponent` 없이 그대로 URL에 이어붙이는 버그가 있어서, 한글(비-ASCII) 서브셋 요청이 전부 조용히 실패하고 모든 한글 글자가 tofu(□)로 렌더링됐음 — 실제로 로컬 테스트에서 발견함. 해결: 호출부에서 `text`를 미리 `encodeURIComponent()`로 인코딩해서 넘기면, 버그 있는 내부 코드가 그 값을 그대로(이미 인코딩된 채로) URL에 붙이게 되어 결과적으로 올바른 요청이 나감 — 패키지 코드 수정 없이 호출 방식만으로 우회
  - **`text-transform: uppercase` 함정**: 앱 이름 라벨에 CSS `text-transform:uppercase`를 썼더니, satori는 실제로 화면에 그려지는(변환된 대문자) 글리프가 필요한데 서브셋 요청은 원본(소문자 섞인) 문자열로 나가서 대문자 글리프가 빠져 있었음 — "Ohaeng"이 "O□□□□□"로 깨짐. CSS 트랜스폼 대신 JS에서 미리 `.toUpperCase()` 해서 그 변환된 문자열 자체를 서브셋 요청과 렌더링 양쪽에 씀
  - `Cache-Control: public, max-age=31536000, immutable` — 쿼리파라미터가 결과를 완전히 결정하므로 안전하게 장기 캐싱, 같은 결과 재요청/재크롤링 시 Cloudflare 엣지 캐시에서 바로 응답
- **`functions/_middleware.js`**: `HTMLRewriter` 기반. `/result`, `/saju`, `/compatibility`, `/idol-match`, `/drama-match`, `/romance` 6개 경로 + 쿼리파라미터가 실제로 있을 때만 개입(파라미터 없는 일반 방문은 그대로 통과, 다른 모든 경로도 그대로 통과). `title`/`og:title`/`og:description`/`og:url`/`og:image`/`twitter:title`/`twitter:description`/`twitter:image`를 요청 파라미터 기반 텍스트 + `/og-image.png?(같은 파라미터 그대로 전달)`로 교체. 페이지 종류별 문구 생성(`buildMeta`)은 `/saju`(캐릭터+오행 타이틀), `/result`(오행+오늘의 운세), 나머지 4개 궁합류(이름+점수+티어) 세 갈래로 분기, `lang` 파라미터로 한/영 텍스트 전환
- **로컬 검증**: `npm run pages:dev`(신규 스크립트: `vite build && wrangler pages dev dist`)로 실제 Cloudflare Workers 런타임을 로컬에서 재현해서 확인 — 오행 5종 전부(en/ko, score 있음/없음 레이아웃 둘 다) 이미지 렌더링, 미들웨어의 메타태그 교체(파라미터 있음/없음 양쪽), `navigator.share` 모킹으로 6개 페이지 전부의 공유 링크가 정확한 파라미터를 담고 `files` 없이 나가는지, 궁합 공유 링크를 직접 열었을 때 생일 재입력 없이 동일한 점수/티어가 그대로 재현되는지까지 전부 Playwright로 확인. (참고: `wrangler pages dev`로 서빙할 때 데스크탑 다운로드 폴백의 `toPng()`가 멈추는 현상을 발견했는데, `npm run dev`(순수 Vite)로는 정상 동작해서 wrangler 로컬 서빙 환경 특유의 문제로 판단 — 실제 배포본(Cloudflare 엣지)에는 해당 안 되는 로컬 전용 이슈로 보임, 실기기 재확인 권장)
- **미착수**: production 배포 후 실제 카카오톡/디스코드 등에서 미리보기가 뜨는지는 배포·실기기 확인 필요(로컬 wrangler 검증까지만 완료)

## 8. 다국어 (i18n)

- `src/i18n/locales/{en,ko}.json` — **완전 병렬 구조** (키 하나도 안 빠짐, 스크립트로 검증함)
- `LanguageToggle.jsx`: 헤더의 EN/KO 버튼, 다크모드처럼 localStorage(`language` 키)에 저장돼 재방문시 유지
- 사주 네 기둥 표기도 언어에 맞게 전환됨 (한국어면 갑을병정 한글, 영어면 Jia/Yi 로마자) — `getGanLabel`/`getZhiLabel` 참고

## 9. 애널리틱스 (`src/utils/analytics.js` + `main.jsx`) — **코드는 완성, 실제 키만 없음**

- `posthog-js` 설치했고 `main.jsx`에서 `import.meta.env.VITE_POSTHOG_KEY`가 있으면 `posthog.init()` 실행 + `window.posthog`에 할당. 키가 없으면 아무것도 안 하고, `analytics.js`의 모든 `track()` 호출은 계속 no-op으로 안전하게 동작
- 이벤트 호출부는 다 심어둠: `home_menu_click`, `birth_form_submit`(페이지별 context 포함), `share_card_download`, `idol_match_submit`(모드별: soulmate/group/drama), `page_view`
- **활성화하려면 (내가 못 하는 부분)**: [posthog.com](https://posthog.com)에서 무료 프로젝트 생성 → Project Settings에서 API 키 복사 → 로컬은 `.env.example`을 `.env.local`로 복사해서 `VITE_POSTHOG_KEY=`에 붙여넣기, 배포는 Cloudflare Pages 프로젝트 설정의 환경 변수에 동일한 이름으로 등록. 그 순간부터 별도 코드 수정 없이 바로 수집 시작됨

## 10. 배포/설정

- Cloudflare Pages 빌드: Framework preset None, Build command `npm run build`, Output directory `dist`
- `.claude/settings.json`에 `Bash(npm run build)`, `Bash(npm run dev)`, `PowerShell(git push origin main)` 허용 등록됨 (승인창 감소용)
- **push 정책**: 사용자가 "계속 자동으로 푸쉬해줘"라고 명시적으로 요청함 → 커밋 후 확인 없이 바로 push하는 게 기본 동작

## 11. 아직 안 한 것

- **스페인어**: 구조는 en/ko와 동일하게 확장하면 되지만 미착수
- **리텐션**: 생년월일 localStorage 저장 → 재방문시 자동 채움 — 미착수
- **수익화**: 유료 구독/Stripe 연동 — **실제 Stripe 계정/API 키 필요**, 여기서 막힘
- **주간 운세 캘린더**, **로그인/히스토리** — 미착수 (PRD상 우선순위 낮음)
- **PostHog 실제 키 발급/입력** — 코드는 다 준비됐고 `VITE_POSTHOG_KEY` 한 줄만 있으면 됨, 위 9번 참고
- 신강/신약을 사주 성격 문구(`sajuProfileTemplates.js`)에도 반영하는 건 스코프 아웃함 (오행 5종만으로 충분하다고 판단)
- **결과별 동적 OG 미리보기 — 완료**(7-3 참고). production 배포 후 실기기/실제 카톡·디스코드 미리보기 확인만 남음

## 12. 개발 시 주의사항 / 이미 겪은 버그

- 모든 UI 변경은 Playwright로 실제 브라우저 구동해서 라이트/다크, 영어/한국어 스크린샷 확인 후 커밋하는 흐름을 계속 씀 (콘솔 에러 0건이 기본 기준)
- 문구 뱅크(`*Templates.js`) 작성 시 **작은따옴표 문자열 안에 아포스트로피 이스케이프 실수**가 반복됐음 — 새 영어 문구 추가할 땐 큰따옴표로 감싸는 걸 권장 (한국어는 아포스트로피가 없어서 이 문제 없음)
- `useEffect`를 컴포넌트의 조건부 early return **뒤에** 넣으면 React Hooks 규칙 위반(hook 개수가 렌더마다 달라짐) — 실제로 한 번 만들었다가 코드 리뷰로 잡음. birth 없을 때 early return 하는 페이지들(Result/Saju/Compatibility)은 전부 return 전에 훅을 배치해야 함
- 헤더 네비가 좁은 화면(~480px 이하)에서 줄바꿈되며 `.page` 상단 padding과 겹치는 버그가 있었고 미디어 쿼리로 고쳐둔 상태 — 헤더에 항목 더 추가할 땐 재확인 필요. `.site-header`는 `align-items: flex-start`(원래 `center`였음) — `center`였을 때는 `header-actions`가 두 줄로 줄바꿈되면 로고가 두 줄 사이 정중앙에 붕 떠버려서, 좁은 화면에서 첫 줄(Guide/Contact us)과 나란히 정렬되도록 수정함. 넓은 화면(한 줄일 때)은 육안상 차이 없음
- Playwright로 `position: fixed` 요소가 있는 페이지를 `fullPage: true` 스크린샷 찍으면 헤더가 여러 번 찍혀 겹쳐 보이는 촬영 아티팩트가 생김(실제 렌더링 버그 아님) — 뷰포트 스크린샷으로 재확인해서 착시였음을 확인한 적 있음
