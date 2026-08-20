# Ohaeng 프로젝트 개발 요약 (Claude Code 인수인계용)

> 새 Claude Code 세션에 붙여넣어 이어서 작업하기 위한 정리본입니다. 이 파일 자체가 레포에 커밋되어 있으니, 새 세션에서 "이 프로젝트 계속 개발할 건데 ohaeng-project-summary.md 읽고 시작해줘"라고만 해도 됩니다.

---

## 1. 프로젝트 개요

- **서비스명**: Ohaeng
- **컨셉**: K-pop 팬덤(영어권 + 한국어권 모두)을 타겟으로 한 한국 사주(四柱)/오행(五行) + 오늘의 운세 웹앱
- **차별점**: 서양 별자리 운세(Co-Star 등, 이미 포화된 시장) 대비 한국 고유 오행 이론 + K-pop 팬덤 콘텐츠(아이돌 궁합, "컴백운" 카테고리)로 차별화
- **레포**: [gukkk93/product-builder-lecture](https://github.com/gukkk93/product-builder-lecture) (main 브랜치)
- **배포**: https://getohaeng.com/ (Cloudflare Pages, main에 push하면 자동 빌드·배포. 원래 `product-builder-lecture-cgp.pages.dev`였다가 커스텀 도메인으로 마이그레이션함 — `ShareCard.jsx`의 `SITE_URL`, `functions/og-image.png.js`의 `siteLabel`, `index.html`의 OG/Twitter 메타 전부 새 도메인으로 교체 완료)

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
- `getCompatibilityScore(relation, seedInput, myStrength, otherStrength)`: 관계(5종)를 1-99 궁합 점수(%)로 변환. 관계별 기준점(same=92 ~ otherOvercomesMe=48) + **신강/신약 보정**(`myStrength`/`otherStrength`가 둘 다 주어지면: 서로 다르면(신강+신약) +4, 같으면(신강+신강 또는 신약+신약) -2, base에 먼저 적용) + seed 기반 지터(±3, 보정 적용 후). 신강/신약 파라미터는 선택적(기존 호출부 하위호환) — 이 앱의 실제 5개 호출부(`bestMatch.js`/`Compatibility.jsx`/`Romance.jsx`/`IdolMatch.jsx` 그룹모드)는 전부 양쪽 `dayGanStrength`를 넘겨줌. 그룹 매치/베스트매치/궁합 보기에 표시되는 "궁합 점수"가 전부 이 함수 하나에서 나옴. **주의**: 197명(아이돌)/100명(배우)처럼 풀이 큰 베스트매치에서는 "여러 후보 중 최댓값 선택"이라는 구조 자체 때문에 상위권(97~99점)에 결과가 몰리는 경향이 있음 — 20명 유저로 테스트했을 때 아이돌 풀 기준 75%가 99점이었음(순수 통계적 현상, 극값 선택은 표본이 많을수록 분포 상단에 몰림). 신강/신약 보정으로 "한 유저의 같은 관계(same) 안에서 서로 다른 상대별 점수 다양성"은 확실히 넓어졌지만(87~99, 예시로 든 87/91/95 전부 실제로 나옴), "여러 유저 각각의 베스트매치 최고점수" 자체의 다양성은 구조적 한계로 완전히는 안 풀림 — 더 줄이려면 지터 범위 확대나 "최댓값 대신 상위 N명 중 무작위 선택" 같은 별도 설계 변경이 필요함(이번 스코프 밖)
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

## 3-4. 신살·귀인·연운·삼재 계산 로직 (`src/utils/saju.js`, 신규 — UI 미연결)

3-1과 동일한 원칙 적용: lunar-javascript에 참조 데이터가 있으면 대조, 없으면 전통 조견표를 직접 하드코딩한 뒤 독립 검증. 이번엔 넷 다(신살/귀인/연운/삼재) **라이브러리에 birth-chart 신살류 메서드 자체가 없음**을 소스 직접 확인 후(`SHEN_SHA`/`DAY_SHEN_SHA`라는 비슷한 이름의 테이블이 있지만 이건 일진(日辰) 기준 만세력 길흉일 기능이라 용도가 완전히 다름) 처음부터 전통 조견표로 구현. **UI에는 아직 안 붙임** — 계산 로직 + 라벨(한자+한글/영문)만 이번 스코프, 성격 설명 문구는 검증 끝난 뒤 별도 작업(`sajuStrengthTemplates.js`처럼 나중에 유료 전용 섹션으로 묶을 수 있게 대기)

- **신살(神殺) — `getShensha(saju, lang)`**: 도화살/역마살/화개살 3종만 우선 구현(요청대로). 지지 12개를 4개 삼합(三合) 그룹(寅午戌/申子辰/巳酉丑/亥卯未)으로 묶고, 년지·일지 둘 다를 기준으로(전통적으로 둘 다 쓰임) 그룹별 고정 타겟 지지가 사주 어디에나 있으면 해당 신살 성립 — 어느 쪽 기준으로 성립했는지 `bases: ['year'|'day']`로 반환. 역마=자기 그룹 생지(生支)의 충(沖) 지지, 화개=자기 그룹 묘지(墓支) 그대로(그래서 자기 자신의 기준 지지와 겹치는 경우도 있음 — 정상), 도화는 별도 고정표
- **귀인(貴人) — `getNobleman(saju, lang)`**: 천을귀인(天乙貴人)만 우선 구현. 일간 → 최대 2개 타겟 지지 조견표("甲戊庚牛羊，乙己鼠猴鄉..." 전통 가결 그대로 대조), 그중 실제 사주에 있는 지지만 `present`로 반환
- **연운(年運) — `getYearRelation(saju, year)`/`getYearRelations(saju, fromYear, count=5)`**: 기존 `getTodayRelation`과 완전히 같은 오행 상생상극 로직을, "오늘" 대신 특정 연도의 년주(年柱)에 적용. 년주는 `Solar.fromYmd(year, 6, 15)`(연중 안전 지점, 입춘 경계 문제 회피)로 구해서 `calculateSaju`가 이미 쓰는 것과 동일한 라이브러리 경로를 재사용
- **삼재(三災) — `getSamjae(saju, fromYear)`**: 년지가 속한 삼합 그룹의 "역마 지지부터 3년 연속"이 삼재 구간이라는 사실을 발견(4개 그룹 전부에서 역마 지지로 시작해 화개 지지로 끝나는 패턴이 정확히 일치함을 확인) — 별도 테이블 없이 위 신살 섹션의 역마 테이블을 재사용해서 도출. `fromYear` 기준 12년 이내에서 가장 가까운 삼재 구간(진행 중이면 그 구간, 아니면 다음 구간)을 찾아 `{ years: [3개 연도], samjaeZhis, isCurrent }`로 반환
- **검증**: (1) 테스트 스크립트에 saju.js와는 완전히 별개로 각 조견표를 처음부터 다시 손으로 옮겨 적어서, 서로 다른 생년월일 5개에 대해 실제 구현 결과와 전부 대조(0건 불일치) (2) 잘 알려진 공개 사실 2건과 교차 확인 — "호랑이·말·개띠(寅午戌)의 삼재는 신유술년"과 "원숭이·쥐·용띠(申子辰)의 삼재는 인묘진년"이 계산 결과와 정확히 일치 (3) 천을귀인 표는 "甲戊庚牛羊..." 가결과 한 글자씩 대조 (4) `npm run build` + 기존 페이지(`/`, `/result`, `/saju`) Playwright 재확인으로 회귀 없음(콘솔 에러 0건) 확인 — 이 모듈이 아직 어디서도 안 쓰이므로 사실상 존재하지 않는 코드지만, 다른 export들과 섞여 있어 빌드 깨짐 여부만 체크

## 3-5. 사주 인생 그래프 — 자물쇠 미리보기 (`getLifeScoreTimeline`, `LifeScoreChart.jsx`)

**결제 연동 없이 시각적 티저만** — Stripe는 아직 안 붙임. `/saju`의 대운표 카드 바로 아래에 새 카드로 배치.

- **`getLifeScoreTimeline(birth, timeKnown, gender, dominantElement)`** (`saju.js`): 새 계산이 아니라 기존 로직 재조합 — `getDaeun`으로 8개 대운 시기를 가져온 뒤, 각 시기 간지의 **천간 오행**(대운 항목의 `ganElement` — `getYearPillar`/`getDayElement`가 "날짜의 오행"을 늘 천간 하나로만 읽는 것과 같은 관례)과 `dominantElement` 사이 관계를 `getElementRelation`으로 판정하고, `getCompatibilityScore(relation, seed)`를 그대로 재사용해 1-99 점수로 변환(새 기준점 테이블 안 만듦 — 기존 `RELATION_SCORE`를 그대로 씀). 8개 시기를 2개씩 묶어 초년기/청년기/중년기/말년기 4단계로 평균 점수도 같이 반환. 대운과 동일하게 성별 필요 — `Saju.jsx`에서 `gender ? getLifeScoreTimeline(...) : null` 패턴으로 대운과 나란히 처리(성별 없으면 안내 문구만)
- **`LifeScoreChart.jsx`** (신규): `ElementDistribution`과 같은 톤(차트 라이브러리 없이 순수 CSS) — 8개 시기를 세로 막대로, 막대는 각 시기 천간 오행 색상, 아래에 초년/청년/중년/말년 4단계 라벨(2개 막대씩 span)
- 잠금 UI 자체(당시 `LockedPreview.jsx`)는 **3-6에서 `PremiumLock.jsx`로 이름을 바꾸고 앱 전체 공용 컴포넌트로 확장됨** — 아래 참고
- **검증**: Playwright로 성별 입력 시 그래프 실루엣(흐릿한 막대)+자물쇠+안내문구가 뜨는지, 성별 미입력 시 대운표와 동일하게 안내 문구만 뜨는지, en/ko·라이트/다크 4가지 조합 스크린샷으로 확인. 콘솔 에러 0건

## 3-6. 프리미엄 잠금 UI 전면 확장 (`PremiumLock.jsx`, `InsightSection`의 `locked` 지원)

3-5에서 `LifeScoreChart` 하나에만 쓰던 잠금 컴포넌트를 앱 전체 프리미엄 콘텐츠에 쓰는 공용 패턴으로 확장. **여전히 Stripe 연동 없음 — 순수 시각적 처리만.**

- **`LockedPreview.jsx` → `PremiumLock.jsx`로 이름 변경**: 구현은 동일(blur(6px)+opacity 0.55 오버레이 + 🔒 아이콘 + 안내 문구), 이름만 범용성에 맞게 변경. `saju.premiumLockedNote` 문구도 "프리미엄에서 전체 그래프를 확인할 수 있어요"(그래프 전용 표현)에서 **"프리미엄에서 확인 가능"**(범용 표현)으로 같이 수정 — 이제 차트뿐 아니라 텍스트 섹션에도 쓰이므로
- **`InsightSection.jsx`에 `locked` 지원 추가**: `sections` 배열 각 항목에 `locked?: boolean` 필드를 추가할 수 있고, `locked: true`인 섹션은 그 섹션 하나(번호 배지+제목+본문 카드)만 개별적으로 `PremiumLock`으로 감싸서 렌더링 — 잠긴 섹션 여러 개가 연달아 있으면 각자 따로 블러+자물쇠가 뜸(하나로 묶어서 감싸지 않음, 스펙대로). 여전히 `.slice()` 안 씀 — 배열을 구성하는 시점에 어떤 항목이 잠기는지 `locked` 플래그로 전부 결정되고 컴포넌트 자체는 그대로 전체 배열을 렌더링
- **각 페이지 `sections` 배열에 `locked` 적용**: *(이 잠금 비율 자체는 5-3에서 다시 완화됨 — 아이돌/드라마/로맨스매치는 3개 무료로, `/saju` 도메인은 2개 무료로 늘어남. 아래는 이 작업 당시의 최초 비율)*
  - `IdolMatch.jsx`(베스트매치+최애매치 그룹모드)/`DramaMatch.jsx`/`Romance.jsx`(재회·짝사랑·속마음 공용): `[explanation, goodFit]`은 `locked:false`, `situational×5` + `watchFor`는 `locked:true` — 8개 중 2개만 무료
  - `Compatibility.jsx`: `[explanation, goodFit]`은 `locked:false`, `watchFor`는 `locked:true`(이 페이지는 애초에 situational 확장 대상이 아니었어서 3개 섹션 구조 그대로, 5-3 이후도 변경 없음)
  - `Saju.jsx` 도메인 섹션 4개(연애/재물/커리어/건강 스타일): **연애 스타일(romanceStyle)만 무료**로 남기고 나머지 3개(재물/커리어/건강)는 잠금 — 흥미 유발용 티저 1개 구조
- **`sajuStrengthTemplates.js` 연결 — 요청과 다르게 `Compatibility.jsx`에 배치함(중요)**: 원래 지시는 "Saju.jsx에 새 섹션으로 추가"였는데, `getSajuStrengthInsight(lang, myStrength, theirStrength)`는 애초에(5-1의 1단계 산출물) **"나 vs 상대방" 두 사람의 신강/신약을 비교하는 관계형 콘텐츠**("이 관계 안에서", "상대는" 같은 문장으로 씀)라서, 상대방이 없는 `/saju`(솔로 프로필 페이지)에 붙이면 문맥이 안 맞고 읽었을 때 이상함(예: "둘 다 신강이라 이 관계에서 존재감 없이 묻히지 않아요" 같은 문장이 혼자 보는 페이지에 뜨는 상황). 그래서 이미 `mySaju.dayGanStrength`/`compatibility.otherSaju.dayGanStrength` 둘 다 갖고 있는 `Compatibility.jsx`에 4번째 섹션(`locked:true`)으로 대신 연결함 — `matchCommon.insightTitles.strengthMatch`("신강신약 궁합") 신규 키 추가. `/saju`에는 이 콘텐츠를 붙이지 않음
- **신살/귀인/연운/삼재 — `Saju.jsx`에 새 카드로 추가(`saju.extraHeading`, "신살·귀인·연운·삼재")**: 계산 로직만 있고 성격 설명 문구가 없는 상태라, 각각 실제 계산 결과를 반영한 **한 줄 프리뷰**만 작성(전부 `locked:true`) — 문장 자체는 최소한이지만 플레이스홀더가 아니라 실제 계산값을 반영함:
  - 신살: `getShensha(saju, lang)` 결과가 있으면 "이런 신살이 있어요: {{라벨들}}", 없으면 "특별히 두드러지는 신살은 없어요"
  - 귀인: `getNobleman(saju, lang)`의 `hasNobleman` 여부로 "천을귀인이 있어요"/"천을귀인은 없어요"
  - 연운: `getYearRelation(saju, 올해)`의 관계(5종)마다 새로 쓴 한 줄씩(`saju.yearLuckOneLiner.*`, 5개 × en/ko) — 예: "2026년은 나와 같은 기운으로 흘러가요"
  - 삼재: `getSamjae(saju, 올해)`가 `isCurrent`면 "지금이 삼재 시기예요 ({{시작}}~{{끝}}년)", 아니면 "다음 삼재는 {{시작}}~{{끝}}년이에요"
- **검증**: Playwright로 6개 결과 화면(아이돌매치 베스트+그룹모드, 드라마매치, 궁합, 로맨스, 사주) 전부에서 각 인사이트 섹션 제목 옆에 자물쇠가 정확히 스펙대로 붙는지(무료 섹션엔 안 붙고 잠금 섹션에만 붙는지) DOM 검사로 전수 확인 — 전부 일치. 라이트/다크 스크린샷으로 블러+자물쇠+안내문구가 시각적으로 자연스러운지, 무료 섹션(연애 스타일, 각 매치 페이지의 explanation+goodFit)은 블러 없이 선명하게 보이는지 확인. 콘솔 에러 0건

## 3-7. `/saju` 12챕터 구조 확장 — 도메인 4개 서브토픽 + 십성/십이운성 신규 챕터

3-3에서 만든 4개 도메인(연애/재물/직업/건강)이 각자 "총운" 문단 하나씩만 갖고 있던 걸, **총운 + 서브토픽 3개**로 이뤄진 챕터로 확장(1단계), 그리고 지금까지 `PillarGrid`의 탭식 글로서리에만 있던 십성·십이운성 정보를 **정식 챕터 콘텐츠로 승격**(2단계)한 작업. 두 단계를 한 번에 진행함.

- **`getDomainInsight` → `getDomainChapter`(`sajuProfileTemplates.js`)**: 기존 `getDomainInsight(lang, domain, saju)`(총운 하나만 반환)는 그대로 남겨두고, 그 위에 `getDomainChapter(lang, domain, saju, daeun)`을 신규로 얹음 — 내부적으로 `getDomainInsight`를 그대로 재사용해서 첫 번째 항목(총운)을 만들고, 도메인별 서브토픽 3개를 추가해서 `{ title, sections: [4개] }`를 반환. `Saju.jsx`는 이제 `getDomainInsight`가 아니라 `getDomainChapter`를 호출함(예전 `getDomainInsight` 자체는 여전히 export돼있고 내부적으로 재사용되므로 죽은 코드 아님)
  - **재물운**: 총운(기존 유지) + **시기별 분석**(대운 재사용 — `getCurrentDaeunPeriod(daeun, year)` 신규 헬퍼로 "지금이 몇 번째 대운 시기인지" 찾고, 그 시기 천간 오행과 `dominantElement`의 오행 관계를 재물 관점 3단계(좋음/보통/조심)로 해석하는 `WEALTH_TIMING_TIER` 매핑 신규 — 재성 위치(내가 극함)면 좋음, 비겁·인성(같음/생받음)이면 보통, 식상·관성(내가 생함/나를 극함)이면 조심, 전통 재성 이론 기반의 자체 설계 판단 기준이라 코드 주석에 근거 명시) + **소비습관**(기존 재성 개수 tier 재사용, 새 문구) + **행운 아이템**(dominantElement별 색상/사물, 전통 오행 상징 그대로 5종 고정)
  - **애정운**: 총운(기존 유지) + **이성이 느끼는 매력**(배우자궁 십성 기준, "내가 뭘 원하는지"였던 기존 로직과 달리 "상대가 나를 어떻게 느끼는지" 관점으로 새로 작성) + **피해야 할 유형**(`dominantElement`를 극하는 오행 = "나를 극하는" 오행을 상극 유형으로 판정 — `getOvercomingElement(element)` 신규 헬퍼(`saju.js`), OVERCOMES 테이블 역방향 조회. "페이스가 안 맞을 수 있어요" 정도의 부드러운 톤 유지, 절대적 경고 아님) + **결혼 시기 조언**(신강신약 × 배우자궁 십성 = 2×5=10 조합, 구체적 나이 언급 없이 "때가 무르익으면" 톤 유지)
  - **직업운**: 총운(기존 유지) + **재능**(dominantElement별 재능 문장 5개 + 관성 개수 tier별 보충절 3개를 조합해서 반환 — 15개 조합을 다 따로 쓰는 대신 "베이스 문장 + tier 절"을 이어붙이는 방식으로 콘텐츠량 관리) + **잘 맞는 직장 유형**(기존 관성 개수 tier 재사용, "총운"과는 다른 관점 — 적성 설명이 아니라 실제 직장 형태를 짚어주는 새 문구) + **도와줄 사람들**(`getNobleman` 재사용, 있음/없음 2종)
  - **건강운**: 총운(기존 유지, 최약 오행 기반) + **부상 위험 부위**(최약 오행-신체 대응론을 관절/근육 등으로 구체화한 새 문구 5종) + **잘 맞는 운동**(요청대로 목=유산소·스트레칭/화=고강도인터벌/토=근력운동/금=규칙적루틴/수=수영·유연성 고정 매핑) + **식습관**(오행별 맛·색 음식 전통 대응론 5종)
  - 서브토픽 제목(`subtopicTitles`)은 도메인 총운의 `title`과 같은 방식으로 콘텐츠 뱅크 자체에 내장(i18n JSON이 아니라 `sajuProfileTemplates.js` 안에 en/ko로 직접 보관) — 이 파일의 기존 컨벤션(관계 티어명 등도 항상 콘텐츠 뱅크 쪽에 있음)을 그대로 따름
- **십성/십이운성 신규 챕터 (`sajuTenGodTemplates.js`, 신규 파일)**: `PillarGrid` 글로서리(탭해야만 보이던 부가 정보)에 있던 개념을 독립된 챕터 콘텐츠로 승격
  - `saju.js` 신규 계산 헬퍼 2개: **`getTenGodProfile(saju)`** — `getTenGodCategoryCounts`(3-3에서 만듦)로 8글자(또는 6글자) 전체를 집계해서 5대 분류(비겁/식상/재성/관성/인성) 중 최다 카테고리 반환(동률 시 고정 순서로 타이브레이크). **`getTwelveStageProfile(saju)`** — 일간 기준 지지 3~4개의 십이운성 단계를 계산(3-1에서 만든 `getTwelveStage` 재사용)해서, 왕성 계열(건록·제왕)과 쇠약 계열(사·절·묘) 중 어느 쪽이 더 많은지로 `'vigorous'|'declining'|'balanced'` 판정
  - 콘텐츠 4개: **"나의 십성은?"**(최다 카테고리 기반 기질 설명, 5종) + **"내가 맺는 관계"**(요청받은 전통 상징 그대로 — 비겁=형제·동료/식상=아랫사람/재성=재물·아버지/관성=상사·배우자/인성=어머니·윗사람 — 관성만 성별 3분기: 남성 사주엔 "아내", 여성 사주엔 "남편", 성별 미입력이면 중립적으로 "배우자"라고만 언급) + **"매력 포인트"**(최다 카테고리 5종 × 귀인 유무 2종 = 10 조합) + **"나의 에너지 흐름"**(왕성/쇠약/균형 3단계)
  - `getTenGodChapter(lang, saju, gender)` 하나로 4개 다 계산해서 `{ title, intro, sections: [4개] }` 반환 — `Saju.jsx`에서 이 결과를 그대로 카드 하나에 렌더링, 4개 전부 `locked: true`로 강제
- **`Saju.jsx` UI 구조 변경**: 예전엔 4개 도메인이 카드 하나 안에 항목 4개(도메인당 1개)로 뭉쳐 있었는데, 이제 각 도메인이 총운+서브토픽 3개(총 4항목)를 가지게 되면서 **도메인당 별도 카드**로 분리함 — "More About You" 안내 카드(기존 `saju.domainHeading`/`domainIntro`, 예전엔 `InsightSection`의 말풍선 인트로였던 걸 이번엔 단순 카드 제목+캡션으로 변경) 하나 다음에, `romanceStyle`/`wealthStyle`/`careerStyle`/`healthStyle` 카드 4개가 각자 `InsightSection`(4항목)을 갖고 이어지고, 그다음에 십성/십이운성 카드(4항목) 하나가 새로 추가됨. 기존 "신살·귀인·연운·삼재" 카드는 그대로 맨 끝에 유지
- **잠금 규칙**: 기존에 무료였던 두 총운(연애 스타일, 재물 총운)은 각 도메인 챕터의 1번 항목(총운)만 그대로 `locked:false` 유지 — 이미 잠겨있던 커리어/건강 총운은 안 건드림(그대로 잠금). 이번에 새로 추가되는 서브토픽 12개(도메인 4×3)와 십성/십이운성 챕터 4개는 **전부 `locked:true`**
- **검증**: (1) `saju.js`에 안 든 별도 스크립트로 `getTenGodProfile`/`getTwelveStageProfile`/`getOvercomingElement`를 처음부터 다시 구현해서, 서로 다른 생년월일 5개(시간 있음/없음 섞어서)에 대해 실제 구현 결과와 전부 대조 — 0건 불일치 (2) Playwright로 같은 5개 생년월일 × en/ko에서 8개 카드(도메인 4 + 십성 1 + 신살 1 + 그 외 기존 카드) 전부의 잠금 상태·항목 개수가 스펙대로 나오는지, 재능/결혼시기조언처럼 조합형 문구가 "undefined" 없이 자연스럽게 이어지는지 DOM 텍스트로 전수 확인 — 전부 일치, 콘솔 에러 0건 (3) 라이트/다크 풀페이지 스크린샷으로 8개 카드가 카드마다 자연스럽게 구분되고, 무료 총운(1번 항목)만 선명하고 나머지 3개는 블러+자물쇠로 일관되게 보이는지 확인

## 3-8. 잠금 UI 구조 개편(제목 상시 노출) + 대운·인생그래프 카드 통합 + 신살/귀인/연운/삼재 콘텐츠 완성

사용자가 "구조 먼저, 콘텐츠 나중" 순서를 명시해서 3단계로 진행함(각 단계 순서가 중요했음).

- **1단계 — `PremiumLock` 적용 위치를 카드 전체에서 본문으로 좁힘**: 기존엔 `InsightSection`이 번호 배지+제목+본문을 통째로 하나의 `card` div로 만들어서 그 전체를 `PremiumLock`으로 감쌌는데(잠기면 제목까지 블러 처리됨), 이제 카드의 헤더 행(배지+제목)은 `PremiumLock` **바깥에** 항상 그대로 렌더링하고, `subheading`+본문 문단만 `PremiumLock`으로 감싼 `body` 프래그먼트로 분리함 — 잠긴 섹션도 "이게 무슨 주제인지"는 항상 보이고, 실제 읽을거리만 블러+자물쇠 처리되는 구조로 바뀜. `PremiumLock.jsx`엔 `minHeight: 92`를 추가해서, 본문만 감싸다 보니 블러 영역이 짧아진 경우에도 자물쇠 아이콘+안내문구+버튼이 들어갈 공간이 항상 확보되도록 함. `saju.premiumLockedNote`("프리미엄에서 확인 가능") 문구 자체는 안 건드림
- **2단계 — `DaeunTable.jsx`+`LifeScoreChart.jsx`를 한 카드로 통합**: 별도였던 "대운" 카드와 "사주 인생 그래프" 카드를 하나(`saju.daeunLifeHeading`: "대운 & 인생그래프")로 합침. `DaeunTable.jsx`는 삭제하고, `LifeScoreChart.jsx`가 두 컴포넌트의 역할을 전부 흡수 — 막대마다 기존엔 나이만 있던 라벨 아래에 간지(예: "을묘")를 추가로 표시(`getGanZhiLabel(gan, zhi, lang)` 신규 헬퍼, `saju.js` — 한국어는 붙여쓰기, 영문은 띄어쓰기로 조합), 차트 맨 아래엔 원래 `DaeunTable`에 있던 순행/역행 안내 문구(`daeunForward`/`daeunBackward`, 문구 자체는 안 바꿈)를 그대로 유지. `Saju.jsx`에서 `daeun`/`lifeScore` 둘 다 있어야 렌더링되는 조건은 동일(성별 미입력 시 `daeunLifeNeedGender` 안내문 하나로 통합)
- **3단계 — 신살/귀인/연운/삼재 콘텐츠를 한 줄 프리뷰에서 소제목+1~2문단으로 확장**: `saju.shenshaContent`/`noblemanContent`/`yearLuckContent`/`samjaeContent` 신규 콘텐츠 뱅크(en/ko) 추가
  - **신살**: 도화살/역마살/화개살 각각 "오해받기 쉬운 부정적 통념 → 실제로는 이런 강점" 구조로 재해석(예: 도화살=매력·인기, 역마살=이동과 새로운 인연에 강한 기운, 화개살=몰입력·예술적 감각) — 전통적으로 부정적으로 읽히기 쉬운 개념들을 절대 불안 유발형으로 쓰지 않는다는 기존 원칙 그대로 적용. 여러 신살이 동시에 있으면(0~3개) `subheading`은 발견된 라벨을 이어붙이고(`shensha.map(s=>s.label).join(' · ')`), `text`는 각 유형의 문단을 `\n\n`로 이어붙임. 하나도 없으면 `noneSubheading`/`noneText`("치우치지 않은 안정형")로 대체
  - **귀인**: 있음/없음 2가지 — 있으면 "도와줄 사람이 있어요", 없으면 "스스로 길을 개척하는 타입"으로 프레이밍(없다고 나쁜 게 아니라 자립적이라는 강점으로 재해석)
  - **연운**: 기존엔 올해 한 해만 봤는데, `getYearRelations(saju, currentYear, 2)`(기존 함수 그대로 재사용, 새 계산 없음)로 올해+내년 두 해를 다 봄 — `subheading`은 올해 관계 기준 5종 중 하나, `text`는 올해 문단+내년 문단을 이어붙임(관계가 다르면 자연스럽게 서로 다른 내용이 됨)
  - **삼재**: 진행중(`current`)/예정(`upcoming`) 2가지 — "삼재 = 나쁜 3년"이 아니라 "변화가 많은 3년, 잘 대비하면 도약의 발판"으로 재해석, 건강·의사결정에 조금 더 신경 쓰라는 건설적 조언으로 마무리
  - **통합 카드 하단 요약(2단계 결과물에 추가)**: `lifeScore.periods`(이미 계산된 8개 대운 시기 점수) 중 `Math.max`/`Math.min`으로 가장 좋은/조심할 시기 1개씩을 새 계산 없이 골라서, `saju.daeunLifeBestNote`/`daeunLifeCautionNote`(나이+간지 보간)로 짧은 해설 2줄을 차트 바로 아래(같은 `PremiumLock` 안, 즉 그래프와 함께 블러됨)에 추가
- **검증**: Playwright로 (1) `/saju`의 잠긴 섹션 19개 전부에서 제목(배지+헤딩)이 블러 밖에 있고 본문만 블러 안에 있는지 DOM 스타일 검사로 전수 확인(처음엔 검증 스크립트 자체의 blur 감지 로직이 조상 방향으로만 찾아서 오탐이 났었는데, 자손 방향도 검사하도록 스크립트를 고쳐서 재확인 — 19/19 전부 통과) (2) "대운 & 인생그래프" 헤딩이 1개만 있고 예전 "대운" 단독 헤딩은 더 이상 없는지 확인 (3) 잠금 해제 후 막대 라벨에 나이+간지+점수가 실제로 다 찍히는지, 카드 하단 베스트/케어 문장에 실제 계산된 나이·간지가 보간되는지 확인 (4) 신살/귀인/연운/삼재 4개 섹션이 실제 사주 데이터를 반영한 소제목+문단으로 렌더링되는지(플레이스홀더 아님) 텍스트 내용으로 확인 — en/ko 둘 다 전부 통과, 콘솔 에러 0건

## 3-9. 아이돌/드라마 매치에 "만나면?" 시나리오 섹션 추가 (`meetingScenario`)

기존 6개 인사이트 섹션(설명/좋은 점/기둥별 3개/주의점)에 **"팬미팅에서 만난다면?"**(아이돌, `idolMatch.meetingScenarioTitle`)/**"시사회에서 마주친다면?"**(드라마, `dramaMatch.meetingScenarioTitle`) 섹션을 goodFit 바로 뒤, 기둥별 섹션 앞에 추가해서 총 7개로 늘림 — 실제 존재하는 팬 이벤트(팬미팅/시사회) 상황에서 케미가 어떨지 예측하는 신규 콘텐츠. 연애/결혼 프레이밍은 기존 `pillarSituational`의 "팬-최애 감정 언어 유지, couple/연인 프레이밍 금지" 원칙을 그대로 따름(3-9도 마찬가지로 couple/partner/boyfriend/girlfriend/커플/연인/사귀/결혼 키워드 0건 확인).

- **콘텐츠 뱅크**: `idolMatchTemplates.js`/`dramaMatchTemplates.js`의 관계 5종 각 항목에 `meetingScenario: { subheading, text }` 필드를 `goodFit`과 `watchFor` 사이에 추가(en/ko). `getIdolMatchCopy`/`getDramaMatchCopy` 반환 객체에도 `meetingScenario` 필드 추가 — seed 없이 관계당 고정 1개(기존 `goodFit`/`watchFor`와 같은 패턴). 관계별 톤: `same`=대화가 술술 풀림, `otherGeneratesMe`=긴장보다 편안함이 먼저, `iGenerateOther`=내가 먼저 에너지를 건넴, `otherOvercomesMe`=처음엔 긴장되지만 오래 기억에 남음, `iOvercomeOther`=내가 분위기를 편하게 이끔
- **섹션 순서**: `IdolMatch.jsx`(베스트매치+그룹모드 둘 다)/`DramaMatch.jsx`의 `insightSections` 배열이 `[explanation, goodFit, meetingScenario, ...situational(3개), watchFor]`로 변경 — `meetingScenario`는 신규 궁금증 유발용 콘텐츠라 `locked: true`로 고정, 기존 6개 섹션의 순서·잠금 상태는 그대로 안 건드림
- **검증**: Playwright로 아이돌매치/드라마매치 결과 화면에 새 섹션 제목이 정확히 뜨는지, 인사이트 섹션 총 개수가 6→7개로 늘었는지(번호 배지 카운트) en/ko 둘 다 확인. `idolMatchTemplates.js`/`dramaMatchTemplates.js` 전체 텍스트를 정규식으로 스캔해서 금지 키워드(couple/partner/boyfriend/girlfriend/커플/연인/사귀/결혼) 0건 확인(기존 파일 상단 주석에 있던 "couple/partner 프레이밍 금지"라는 설명 문구 자체는 규칙 설명이라 제외하고 판단). 3-8과 동일한 잠금 구조(제목 선명/본문만 블러) 원칙이 새 섹션에도 자동 적용되는지 확인(스크린샷으로 육안 확인). 라이트/다크, 콘솔 에러 0건

## 3-10. `sajuProfileTemplates.js` 도메인 챕터를 "청월당 스타일" 서사로 3~4배 확장

3-7에서 만든 4개 도메인(연애/재물/커리어/건강) × 4항목(총운+서브토픽3) = 16개 콘텐츠 슬롯을 en/ko 전부 다시 썼음 — 그 안에서 관계/오행/카테고리별로 갈라지는 세부 변형까지 합치면 실제로는 76개 변형(연애 25 + 재물 15 + 커리어 16 + 건강 20) × 2개 언어 = 152개 문단을 새로 작성한 작업. 이 4개 도메인만 우선 진행하고, 궁합류·십성챕터·신살귀인 등 다른 콘텐츠 뱅크는 반응을 보고 확장 여부를 나중에 결정하기로 스코프를 명확히 좁힘.

- **문체 원칙 — 세 요소를 섞어 기존 1~2문장을 4문장 안팑으로 확장**: (1) **구체적 행동/장면 묘사** — 십성·오행 같은 추상 개념을 실제 일상 장면(소개팅 자리, 회식, 운동 후 다음 날 등)으로 풀어씀 (2) **반문형 회상 유도** — "~했던 적 있을 거예요", "떠올려보면" 같은 표현으로 독자가 자기 경험과 바로 연결짓게 유도 (3) **대조 확인** — "반대로", "~와 비교하면" 구조로 그 특성을 한 번 더 각인. 톤은 기존 원칙(불안 유발형 금지, 건설적) 그대로 유지 — 분량이 늘어난 건 서사가 깊어진 거지, 경고나 걱정거리가 늘어난 게 아님
- **연애(romanceStyle) — 25개 변형**: `overall`(배우자궁 십성 5종) + `attraction`(같은 5종, "상대가 느끼는 매력" 관점) + `avoidType`(페이스 안 맞는 오행 5종) + `marriageTiming`(신강/신약 × 배우자궁 십성 5종 = 10개). 결혼 시기 조언은 여전히 나이·시기를 구체적으로 언급하지 않는 기존 원칙 유지, 대신 "그 신호가 뭔지"를 장면으로 더 구체화함
- **재물(wealthStyle) — 15개 변형**: `overall`(재성 개수 3단계) + `timing`(대운 3단계, `needGender`는 기능적 안내문이라 원문 유지) + `spendingHabit`(3단계) + `luckyItem`(오행별 상징 5종 — 원래 짧은 사물 나열이었는데, "그 아이템이 실제로 마음을 다독여준 순간"이라는 장면을 붙여서 같은 원칙으로 확장)
- **커리어(careerStyle) — 16개 콘텐츠 조각**: `overall`(관성 개수 3단계) + `talent`(오행별 base 5종 + 구조 tier별 officerNote 3종 — 여전히 `Saju.jsx`에서 `${base} ${officerNote}` 문자열로 이어붙이는 기존 구조 그대로 유지, 둘 다 길이를 늘려서 이어붙인 결과가 자연스럽게 3~4배가 되도록 설계) + `workplaceType`(3단계) + `helpers`(귀인 있음/없음 2종)
- **건강(healthStyle) — 20개 변형**: `overall`(최약 오행 5종) + `injuryRisk`(5종) + `exercise`(5종) + `diet`(5종) — 전통 오행-장기/음식 대응론 자체(간·담, 심장·소장 등)는 안 건드리고, "그 신호를 실제로 느꼈을 법한 순간"만 덧붙이는 식으로 확장
- **검증**: 서로 다른 생년월일 5개(시간·성별 섞어서) × en/ko로 `/saju`를 렌더링해서, 4개 도메인 카드 전부 4개 섹션이 빠짐없이 나오는지, 텍스트에 `undefined`가 섞여 나오지 않는지(특히 `talent`의 문자열 이어붙이기 부분 — 베이스 문장과 tier 문장이 깨지지 않고 자연스럽게 연결되는지) DOM 텍스트 길이·내용으로 전수 확인 — EN 카드당 텍스트 길이가 기존 대비 확연히 늘어난 2200~3100자, KO는 950~1400자로 확인됐고(이 수치엔 카드 제목·잠금 안내문 등 본문 외 텍스트도 섞여 있어 순수 배수 비교는 아니지만, 기존 1~2문장짜리 원문과 비교하면 압도적으로 길어진 게 스크린샷상으로도 명확함) 전부 통과. 라이트/다크 스크린샷으로 무료 섹션(각 도메인 1번 항목)이 늘어난 분량으로도 자연스럽게 읽히는지, 서사 구조(장면→회상 유도→대조)가 실제로 느껴지는지 육안 확인. 콘솔 에러 0건

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
- **`idolMatchTemplates.js`**: 관계 5종 × 5개 문구(line/goodFit/watchFor 각각) = **25개**, en/ko 각각. tier명도 언어별로 다름 (예: same → en "Twin Flame" / ko "완벽한 싱크로율"). `RELATION_RANK`는 더 이상 정렬에 안 쓰이지만(점수 기반 정렬로 교체) 남아있음. **`situational` 필드 추가(5-2 참고)** — 관계별로 컴백/브이라이브/팬미팅/콘서트/포토카드 5개 구체적 상황에 맞춘 문구를 담고 있고, seed로 1개만 뽑는 다른 필드들과 달리 **항상 5개 전부** 반환됨
- **`compatibilityTemplates.js`**: idolMatch와 같은 구조지만 **팬덤 용어 없음** (친구/연인 관계에도 자연스럽게), 25개 × en/ko. `situational` 없음 — 이건 아이돌/드라마 매치 전용
- **`dramaMatchTemplates.js`** (신규): idolMatch와 같은 5관계 구조지만 K-드라마 시청 어휘로 리라이트(정주행/본방사수/필모 등), 25개 × en/ko. `situational`도 동일 패턴이되 상황 자체를 드라마 맥락으로 재정의(새 작품 들어갈 때/인터뷰/팬미팅/시사회/스틸컷) — 아이돌 어휘(컴백/브이라이브/콘서트/포토카드)를 그대로 쓰지 않고 기존 "K-드라마 시청 어휘로 리라이트" 원칙을 상황 이름에도 동일하게 적용함
- **`sajuProfileTemplates.js`**: dominant element별 성격 프로필(제목+2문단) + day master별 "진짜 나" 텍스트, en/ko 각각
- **`romanceTemplates.js`** (신규): situation(재회/짝사랑/속마음 3종) × 관계(5종) × 5개 문구 = **150개**(en/ko 합산). `compatibilityTemplates.js`처럼 팬덤 용어 없음, situation별로 문체만 다르게(재회=아직 못 놓는 이유+희망적 클로징, 짝사랑=가볍고 설레는 톤, 속마음=상대 시점으로 서술). 재회 전용 공통 클로징 라인은 `romanceClosing`으로 따로 관리(관계별 25개 문구에 안 넣고 렌더링 시 뒤에 붙임 — 유지보수 편하게). `getRomanceCopy(lang, situation, relation, seed)` / `getRomanceClosing(lang, situation)`. **`situational` 필드 추가(5-2 참고)** — situation×관계 조합마다 구체적 연애 순간 5개(재회/짝사랑은 예: 연락 고민될 때/우연히 마주칠 때, 속마음은 상대 시점 서술)를 담고 있고, 항상 5개 전부 반환됨
- 한국어는 **직역이 아니라 자연스러운 로컬라이즈** — 최애/스밍/컴백/덕질 같은 팬덤 표현 사용

## 5-1. 인사이트 섹션 확장 작업 (완료 — 1~5단계 전부 완료)

사용자가 5단계 계획을 제시하고 "1단계부터 시작하면 될 것 같아"라고 스코프를 명시적으로 좁혀서 시작했고, "2단계 ㄱㄱ" → "3단계 ㄱㄱ" → "4단계" → "ㄱㄱ" 지시로 다섯 턴에 걸쳐 한 단계씩 이어서 진행해 완료함.

- **1단계**: `matchCommon.explanation.*`(관계 5종, 궁합 점수 아래에 붙는 설명 문구)를 한 줄 요약에서 **3~4문장 문단**으로 확장(en/ko). `src/data/sajuStrengthTemplates.js` 신규(신강/신약 조합 4개 × en/ko, `getSajuStrengthInsight` — **아직 어디에도 연결 안 됨**, Step 1~5 어디서도 안 씀, 향후 보너스 콘텐츠용으로 대기 중). `Compatibility.jsx`가 `compatibility` 네임스페이스에 없던 `theirElement` 키(`idolMatch`에만 있던 복붙 버그)를 호출하던 것도 이때 발견해 수정
- **2단계**: `compatibilityTemplates.js`/`idolMatchTemplates.js`/`dramaMatchTemplates.js`/`romanceTemplates.js` 네 파일 전체에 `goodFit`("잘 맞는 부분")/`watchFor`("관계에서 챙길 점") 2개 문단 뱅크를 관계 5종 × 5개 변형(en/ko) 추가. 기존 `line`과 같은 시드 인덱스로 뽑아서 세 문단이 일관되게 읽히도록 함. `getCompatibilityCopy`/`getIdolMatchCopy`/`getDramaMatchCopy`/`getRomanceCopy` 모두 `{ tier, line, goodFit, watchFor }` 반환
- **3단계**: `sajuProfileTemplates.js`에 `romanceStyle`/`wealthStyle`/`careerStyle`/`healthStyle` 4개 도메인 섹션 추가 — 처음엔 오행 5 × 강약 2 × en/ko로 시작했지만, 내용이 서로 겹친다는 피드백으로 **3-3에서 도메인별로 다른 근거를 쓰도록 재설계됨**(십성/배우자궁/최약오행 기반) — 최신 구조는 3-3 참고
- **4단계**: `src/components/InsightSection.jsx` 신규 — `sections`(`{ title, text }` 배열)를 번호 배지+제목+본문 카드로 `.map()` 렌더링(`.slice()`는 의도적으로 안 씀 — 나중에 페이월 게이팅을 슬라이스만으로 붙일 수 있게). `element`+`intro` prop을 주면 `ElementCharacter`가 말풍선(`.insight-bubble`, `global.css`에 꼬리만 별도 CSS 클래스, 나머지는 인라인 스타일)으로 섹션 목록을 소개. **실제로 게이팅이 붙을 때(3-6)는 슬라이스가 아니라 항목별 `locked` 플래그 방식으로 결정됨** — 그래도 이 컴포넌트 자체(`.map()`으로 전체 배열 렌더링)는 안 바뀜, 예측대로 컴포넌트 수정 없이 확장됨
- **5단계(최종) 완료**: `InsightSection`을 실제 결과 화면에 연결
  - `MatchResultCard.jsx`(아이돌/드라마 매치 공용): `explanation` prop을 `insightSections` 배열 prop으로 교체
  - `IdolMatch.jsx`(베스트매치+최애매치 멤버상세)/`DramaMatch.jsx`: `[{explanation}, {goodFit}, {watchFor}]` 3개 섹션을 구성해 `MatchResultCard`에 전달
  - `Compatibility.jsx`/`Romance.jsx`: 기존 이탤릭체 `explanation` 단락을 `<InsightSection sections={...}>`으로 교체(같은 3개 섹션 구성). `Romance.jsx`의 재회 전용 클로징 라인(`closing`)은 그대로 유지, `InsightSection`과는 별개
  - `Saju.jsx`: 성격 분석 카드 아래에 새 카드 추가 — 3단계에서 만든 4개 도메인 섹션을 `ElementCharacter` 말풍선 소개(`saju.domainIntro`)와 함께 렌더링
  - 섹션 순서는 "왜 이 점수인지(흥미) → 잘 맞는 부분(흥미) → 관계에서 챙길 점(구체적 조언)"으로, 사용자가 지정한 "흥미로운 것 먼저, 구체적 조언은 뒤로" 원칙을 따름 — 나중에 앞쪽 1~2개만 무료로 남기고 뒤를 슬라이스로 잠그기 쉽도록
  - 새 i18n 키: `matchCommon.insightTitles.{explanation,goodFit,watchFor}`, `saju.domainHeading`/`domainIntro` (en/ko, parity 확인됨). 도메인 섹션 자체의 제목(`연애 스타일` 등)은 3단계에서 만든 `getDomainInsight`의 `title` 필드를 그대로 씀 — 별도 i18n 키 안 만듦
  - Playwright로 5개 페이지(궁합/로맨스/아이돌매치 베스트+최애매치 그룹모드/드라마매치/내사주) × 라이트·다크 × en/ko 전부 렌더링·콘솔 에러 없음 확인. 공유카드(`CompatibilityShareCard`/`IdolShareCard`)는 `InsightSection`을 렌더링하지 않아 회귀 없음도 스크린샷으로 확인

**완료 기준 충족**: 궁합/아이돌매치/드라마매치/로맨스/내 사주 결과 화면 전부에 인사이트 섹션이 여러 개 순서대로 노출되고, 잠금 UI·결제 버튼·"+N가지 더" 배지는 전부 없이 콘텐츠만 다 열려있는 상태. `sajuStrengthTemplates.js`(1단계 산출물)만 아직 미사용 — 향후 신강/신약 비교 보너스 인사이트로 쓸 수 있게 대기 중. **(3-6에서 상태 변경됨)** 이후 프리미엄 잠금 UI가 실제로 붙으면서 이 "전부 열려있는" 상태는 끝남 — `sajuStrengthTemplates.js`도 `Compatibility.jsx`에 잠긴 섹션으로 연결됨

## 5-2. 아이돌/드라마/로맨스 매치 — situational 섹션 5개 추가 (3개 → 8개)

*(아이돌/드라마 매치의 situational 구조는 5-3에서 "구체적 팬 상황 5개"→"기둥별 궁합 분석 3개"로 다시 재설계됨 — 8개가 아니라 6개가 됨. 로맨스는 이 5-2의 구조 그대로 유지됨, 5-3 참고)*

5-1에서 아이돌매치/드라마매치/궁합/로맨스는 인사이트 섹션이 3개(왜 이 점수인지/잘 맞는 부분/관계에서 챙길 점)였는데, 아이돌매치·드라마매치·로맨스(3종) 세 곳은 구체적 순간 5개를 각각 다루는 섹션을 그 사이에 끼워 넣어 **8개**로 확장함. 먼저 아이돌/드라마 매치(팬 생활 장면: 컴백/브이라이브/팬미팅/콘서트/포토카드)에 적용한 뒤, 같은 방식을 로맨스(재회/짝사랑/속마음, 일반 연애 장면)에도 이어서 적용함. **궁합(Compatibility)만 3개 그대로** — 특정 관계 유형(친구/연인/썸/가족/동료)을 아우르는 범용 콘텐츠라 "구체적 순간 5개"라는 틀 자체가 안 맞는다고 판단해 이번 확장 대상에서 제외함

- **데이터**: `idolMatchTemplates.js`/`dramaMatchTemplates.js`(각 관계 5종)와 `romanceTemplates.js`(각 situation×관계 = 3×5=15 조합)에 `situational: [5개 문구]` 필드 신규 추가(en/ko 각각) — 기존 `lines`/`goodFit`/`watchFor`처럼 seed로 1개만 뽑는 게 아니라 **항상 5개 전부** 반환. `getIdolMatchCopy`/`getDramaMatchCopy`/`getRomanceCopy`의 리턴 객체에 `situational` 배열이 추가됨(기존 `tier`/`line`/`goodFit`/`watchFor`는 시그니처·동작 그대로 유지). 로맨스의 재회 전용 공통 클로징 라인(`romanceClosing`)은 이번 재구성과 완전히 무관하게 그대로 유지됨
- **상황 어휘는 페이지/situation마다 다름**: 아이돌 매치는 컴백 시즌/브이라이브/팬미팅/콘서트/포토카드, 드라마 매치는 새 작품 들어갈 때/인터뷰/팬미팅/시사회/스틸컷(기존 "K-드라마는 자체 시청 어휘로 리라이트" 원칙을 상황 이름에도 동일 적용). 로맨스는 팬덤 용어 없이 일반 연애 상황으로 — 재회는 연락 고민/SNS로 소식/우연히 마주침/친구 통해 소식/기념일·생일, 짝사랑은 매일 연락 확인/우연히 마주침/SNS 볼 때/친구 앞에서 티 안 내기/고백 고민, 속마음은 상대 시점 서술(메시지 받을 때·다른 사람 얘기 나올 때·힘든 일 생길 때·만남 끝날 때·여럿이 있을 때 상대가 느낄 법한 것). 상황 제목은 `idolMatch.situationalTitles`/`dramaMatch.situationalTitles`(고정 5개)와 `romance.{reunion,crush,theirFeelings}.situationalTitles`(situation별로 서로 다른 5개) i18n 키로 관리
- **watchFor 톤**: 아이돌/드라마 매치는 원래 순화된 톤을 그대로 유지, 로맨스는 원래 있던 질문형 성찰 톤을 그대로 유지 — 둘 다 이번 재구성에서 안 건드림
- **섹션 조합**: `IdolMatch.jsx`(베스트매치+최애매치 그룹모드)/`DramaMatch.jsx`/`Romance.jsx`가 `sections` 배열을 `[explanation, goodFit, ...situational×5, watchFor]` 순서로 8개 구성 — situational 5개는 `situationalTitles[i]`를 제목으로, `copy.situational[i]`를 본문으로 매핑
- **seed 역할 축소**: seed는 여전히 `line`/`goodFit`/`watchFor`가 같은 조합(유저+아이돌/배우, 또는 두 생년월일)에서 매번 같은 텍스트로 재현되게 하는 데 쓰이지만, situational 5개를 고르는 데는 더 이상 안 씀(전부 다 보여주니까 고를 필요가 없어짐)
- **검증**: Playwright로 아이돌매치(베스트매치+최애매치 그룹모드)/드라마매치/로맨스(재회·짝사랑·속마음 3종) 전부, en/ko 각각에서 섹션 제목이 정확히 `[이 점수가 나온 이유, 잘 맞는 부분, 상황 5개(순서대로), 관계에서 챙길 점]` 8개로 뜨는지 텍스트 순서까지 확인. `idolMatchTemplates`/`dramaMatchTemplates`/`romanceTemplates`의 모든 situation×관계×언어 조합(로맨스는 3×5×2=30개)이 `situational` 5개를 빠짐없이 갖고 있는지도 스크립트로 전수 확인. 콘솔 에러 0건
- **완료 기준**: 지금은 결제/페이월이 없어서 8개 다 열려있는 채로 노출 — 나중에 Stripe 붙을 때 몇 번째 섹션부터 잠글지만 정하면 되는 구조(5-1에서 `InsightSection`이 `.slice()` 없이 `sections` 배열 전체를 그대로 렌더링하도록 설계해둔 덕분에, 이번에도 컴포넌트 수정 없이 배열 구성만 바꿔서 확장 가능했음)

## 5-3. 아이돌/드라마 매치 — 기둥별 궁합 분석으로 재설계 + 잠금 비율 완화 + 운세 주의사항

세 가지를 한 번에 진행: (1) 아이돌/드라마 매치의 situational 섹션을 "구체적 팬 상황 5개"(5-2 산물)에서 "기둥별 궁합 분석"으로 재설계, (2) 아이돌/드라마/로맨스매치·`/saju`의 잠금 비율 완화, (3) `/result`(오늘의 운세)에 안전한 영역의 "주의사항" 문구 추가.

- **`getPillarCompatibility(mySaju, otherSaju)`** (`saju.js`, 신규): 년/월/일 기둥(둘 다 시간 정보 있으면 시주까지)을 각 기둥의 **천간 오행**끼리 `getElementRelation`으로 비교해서 `{ pillar, relation, myElement, otherElement }` 배열 반환. 시간 정보 없는 쪽이 있으면 시주는 배열에서 자동 제외 — 아이돌/배우는 항상 생시가 비공개라(`calculateSaju(..., false)`로 계산됨) 아이돌/드라마 매치는 **항상 3기둥**(년/월/일)만 나옴, 유저가 자기 생시를 입력했어도 마찬가지(그룹모드에서 유저 시간 입력 있어도 3기둥으로 정상 동작하는 것까지 확인)
- **콘텐츠 뱅크 재작성 — `pillarSituational`** (`idolMatchTemplates.js`/`dramaMatchTemplates.js` 각각 신규 export): 기존 "관계별 5개 구체 상황"(5-2 산물, 컴백/브이라이브/팬미팅/콘서트/포토카드 등) 구조를 통째로 **기둥(4) × 관계(5) = 20개** 매트릭스로 교체 — `pillarSituational[lang][pillar][relation]`. 기둥별 관점: 년주=왜 하필 끌렸는지(첫인상), 월주=취향이 통해 편한 이유, 일주=진짜 매력을 알아보는 눈(비중 크게), 시주=사소한 디테일까지 좋아지는 이유. **문구는 전부 팬-최애 감정적 친밀감의 언어**("왜 끌렸는지"/"왜 편한지"/"왜 매력을 알아보는지") — "커플처럼 잘 맞다" 식 연인 프레이밍은 의도적으로 전혀 안 씀(Playwright로 en "couple/partner/boyfriend/girlfriend", ko "커플/연인/사귀" 문자열이 렌더링된 텍스트에 하나도 없는지 전수 확인). 이 값은 **관계별 tier/line/goodFit/watchFor가 쓰는 "전체 관계"와는 별개** — 두 사람이 전체로는 같은 오행(same)이어도 특정 기둥끼리는 다른 관계(예: 일주가 iOvercomeOther)가 나올 수 있고, 실제로 그렇게 각 기둥이 자기 고유의 관계값으로 렌더링됨(전체 관계 하나로 통일해서 억지로 맞추지 않음)
- **`getIdolMatchCopy`/`getDramaMatchCopy` 시그니처 변경**: `(lang, relation, seedInput)` → `(lang, relation, seedInput, pillarCompat)` — `situational` 반환값이 고정 5개 문자열 배열에서 `pillarCompat` 순서(년→월→일[→시]) 그대로의 `{ pillar, text }` 배열로 바뀜(가변 길이, 보통 3개). 호출부(`IdolMatch.jsx` 베스트매치+그룹모드, `DramaMatch.jsx`)에서 `getPillarCompatibility(userSaju, 상대Saju)` 결과를 넘겨줌
- **섹션 구성**: `sections = [explanation, goodFit, ...기둥별 3개, watchFor]` — 8개(5-2)에서 **6개**로 줄어듦(기둥이 항상 3개라 가변이라기보단 사실상 고정 6개가 됨, 시주가 들어갈 일이 구조적으로 없어서). 섹션 제목은 새 `matchCommon.pillarTitles.{year,month,day,time}` i18n 키(아이돌/드라마 공용) — 기존 `idolMatch.situationalTitles`/`dramaMatch.situationalTitles`(5개짜리 고정 배열)는 더 이상 안 쓰여서 제거함
- **잠금 비율 완화(전 페이지 재계산)**:
  - 아이돌/드라마/로맨스매치: `explanation`/`goodFit`은 그대로 무료, **기둥별(또는 situational) 첫 번째 항목도 무료**로 풀어서(항상 배열 0번째 = 년주 또는 상황1) 6개 중 3개/8개 중 3개가 무료가 됨. 나머지(월주/일주 + `watchFor`, 또는 situational 2~5번 + `watchFor`)는 잠금
  - `/saju` 도메인: 연애 스타일에 더해 **재물 성향도 무료**로 풀어서 4개 중 2개 무료(커리어/건강만 잠금)
  - 신강신약 궁합(Compatibility)·신살/귀인/연운/삼재·인생그래프는 **그대로 잠금 유지**(처음부터 프리미엄 전용으로 기획된 것들이라 이번엔 안 건드림)
  - **로맨스매치는 콘텐츠 구조를 재설계하지 않음(의도적 스코프 유지)**: 요청의 "기둥별 궁합 분석" 재설계는 문면상 아이돌/드라마 매치 전용(팬-최애 감정 언어는 로맨스의 "일반 연애 상황, 팬덤 용어 없음" 원칙과 안 맞음)이었는데, 잠금 비율 지시에서만 로맨스가 아이돌/드라마와 함께 "6~7개 중 3개 무료"로 묶여 언급됨 — 콘텐츠는 5-2의 기존 5개 상황 구조 그대로 두고, **잠금 로직만 동일한 패턴(situational[0]도 무료)으로 맞춤**. 결과적으로 로맨스는 8개 중 3개 무료(explanation/goodFit/situational 첫 항목), 나머지 로맨스 전용 구조(상황명 i18n, `romanceClosing` 등)는 전혀 안 건드림
- **`/result` 운세 주의사항(`caution`) — 전부 무료 유지**: `fortuneTemplates.js`의 관계 5종 각각에 `caution: { overall, love, wealth, health, comeback }` 필드 신규 추가(관계 5종 × 카테고리 5종 = 25개, en/ko 각각 총 50개) — `getFortuneLine`처럼 seed로 여러 변형 중 하나를 뽑는 게 아니라, 카테고리당 **고정 한 줄**(짧은 실용 팁이라 변형이 굳이 필요 없다고 판단). `getFortuneCaution(lang, relation, category)` 신규 함수. 톤은 재물/건강/타이밍처럼 **안전한 실용 조언**만(예: 재물="큰돈 쓰는 결정은 신중하게", 건강="컨디션 관리 챙기기") — 애정 카테고리도 "이별 조심"류 관계 불안 자극이 아니라 "고백/진지한 대화를 서두르지 마세요" 정도의 안전한 톤으로 작성. `/result`는 애초부터 계속 무료 원칙이었던 페이지라 이 필드도 잠그지 않음 — `Result.jsx`가 각 카테고리 본문(`.fortune-row__text`) 아래에 작은 보조 문구(`.fortune-row__caution`, 12px 회색)로 `{{result.cautionLabel}} {{caution}}` 형태로 표시
- **검증**: Playwright로 (1) 아이돌매치 베스트매치+그룹모드(유저 생시 있음/없음 둘 다), 드라마매치 — en/ko 각각 기둥별 섹션이 정확히 3개(년/월/일) 렌더링되고 커플 프레이밍 문자열이 전혀 없는지 확인 (2) 6개 결과 화면(아이돌매치 베스트+그룹모드/드라마매치/로맨스-재회/`/saju`) 전부 DOM 잠금 상태 검사로 "명시한 비율대로" 무료/잠금이 정확히 나뉘는지 전수 확인 — 전부 스펙과 일치 (3) `/result` en/ko에서 5개 카테고리 전부 caution 문구가 실제 계산된 관계값 기준으로 노출되는지 확인 (4) 라이트/다크 스크린샷으로 무료 섹션은 선명, 잠금 섹션은 각각 개별 블러+자물쇠로 일관되게 보이는지 확인. 콘솔 에러 0건

## 5-4. 전역 프리뷰 잠금 해제 스위치 + 콘텐츠 서사 깊이 확장(청월당 스타일) + 카테고리 리네임

사용자가 D(전역 해제)→A(카테고리명 변경)→B(콘텐츠 대폭 확장)→C(잠금 비율 재조정) 순서로 지정한 작업. **D를 제일 먼저 반영**해서 이후 작업물을 바로 눈으로 확인할 수 있게 한 뒤, 나머지를 이어서 진행함.

- **D. `src/config.js` 신규 — `PREVIEW_MODE_UNLOCK_ALL`**: `PremiumLock.jsx`가 이 값이 `true`면 `locked` 여부와 상관없이 `children`을 그대로 렌더링(블러·자물쇠 오버레이 전부 스킵)하도록 早리턴 추가. **지금은 `true`로 켜둔 상태**(전체 콘텐츠가 시각적으로 다 열려 보임) — 마케팅 시작 시점에 이 값 하나만 `false`로 바꾸면, 그동안 쌓아온 개별 `locked:true/false` 플래그들이 전부 그대로 살아있는 채로 원래 잠금 정책이 복원됨(각 페이지의 `locked` 로직 자체는 하나도 안 건드림). 검증 시에는 이 값을 잠깐 `false`로 내려서 실제 잠금 상태가 스펙대로 나오는지 DOM 블러 검사로 전수 확인한 뒤 다시 `true`로 복구함
- **A. `comeback` → `fandom` 카테고리 리네임**: `fortuneTemplates.js`의 5번째 카테고리 키를 `comeback`에서 `fandom`으로 전체 교체(관계 5종 × en/ko, 문구 배열 + `caution` 필드 전부). `Result.jsx`의 `CATEGORIES` 배열, `ShareCard.jsx`의 `comebackLine` prop(→`fandomLine`)도 같이 변경. i18n `categories.comeback`(`"Comeback Luck"`/`"컴백운"`) → `categories.fandom`(`"Fandom Luck"`/`"덕질운"`). `landing.items.fortune.description`의 안내 문구("총운부터 컴백운까지" 등)도 새 이름에 맞게 같이 수정. 문구 내용 자체(덕메·콘텐츠·알림 언급)는 이미 "덕질"이라는 더 넓은 카테고리에 자연스럽게 들어맞아서 크게 안 고침 — `idols.js`의 "EXO comeback lineup" 같은 실제 K-pop 컴백을 가리키는 무관한 문구는 그대로 둠(카테고리 키가 아니라 그냥 단어 사용)
- **C. 잠금 비율 — "각 챕터/도메인 첫 항목은 항상 무료"로 통일**: `/saju` 도메인 4개(연애/재물/커리어/건강) 전부 총운(1번 항목)을 `locked:false`로 통일(전에는 연애·재물만 무료였음 — 이번에 커리어·재물 총운까지 새로 품). 십성/십이운성 챕터도 대표 항목("나의 십성은?", 1번)만 무료로 전환(전엔 4개 다 잠김). `Saju.jsx`의 `domainChapters`/`tenGodChapter` 매핑을 도메인별 예외 목록(`FREE_DOMAINS`) 없이 그냥 `locked: i !== 0`로 단순화
- **B. 콘텐츠 서사 깊이 확장 — "청월당 스타일" 구조 참고, 톤은 절대 불안 유발형 아님**: 궁합류 페이지(궁합보기/아이돌매치/드라마매치/로맨스매치)의 `explanation`/`goodFit`/`watchFor` 섹션을 기존 1~3문장에서 **소제목(`subheading`) + 2문단(`text`, `\n\n`로 구분)** 구조로 확장. `InsightSection.jsx`가 `section.subheading`(있으면 강조색 볼드 한 줄)과 `section.text.split('\n\n')`(문단별 `<p>` 렌더링)을 지원하도록 확장됨 — 컴포넌트 자체의 구조 변경은 이 두 가지뿐, 나머지(번호 배지, `locked` 처리)는 그대로
  - **`matchCommon.explanation.*`**(i18n, 관계 5종): 문자열 하나였던 걸 `{ subheading, text }` 객체로 승격, 이 키를 공유하는 4개 페이지(궁합보기/아이돌매치/드라마매치/로맨스매치) 전부 자동으로 깊어짐. `Compatibility.jsx`/`Romance.jsx`/`IdolMatch.jsx`(베스트매치+최애매치)/`DramaMatch.jsx` 호출부를 `t('...explanation')` 한 번 호출에서 `.subheading`/`.text` 두 번 호출로 분리
  - **`compatibilityTemplates.js`/`idolMatchTemplates.js`/`dramaMatchTemplates.js`/`romanceTemplates.js`의 `goodFit`/`watchFor`**: 기존엔 관계(또는 상황×관계)당 5개 시드 변형 배열이었는데, 문단이 훨씬 길어진 지금은 5개 변형을 다 깊이 있게 쓰는 게 비현실적이라 **관계(×상황)당 고정 1개의 `{ subheading, text }`로 통합**(시드 뽑기 로직 제거 — `line`/`tier`는 기존 5변형 시드 방식 그대로 유지, `goodFit`/`watchFor`만 이렇게 바뀜). `getCompatibilityCopy`/`getIdolMatchCopy`/`getDramaMatchCopy`/`getRomanceCopy` 네 함수 전부 이 변경을 반영해 시그니처는 그대로 두고 반환값 모양만 바꿈. **이건 사용자가 명시한 "분량과 서사 깊이"를 "5개 변형 다양성"보다 우선한 명시적 스코프 판단**이라 여기 남겨둠 — 관계별 텍스트 다양성 자체는 대신 아이돌/드라마 매치의 기둥별(년/월/일) 섹션이 이미 담당하고 있음
  - **`idolMatchTemplates.js`/`dramaMatchTemplates.js`의 `pillarSituational`**(년주/월주/일주/시주 × 관계 5종): 기존 1문장짜리 항목을 2문장으로 확장(각 항목은 이미 자기 고유 제목 — pillarTitles — 을 갖고 있어서 별도 `subheading`은 안 넣음, 번호 배지+제목이 이미 "소제목" 역할을 함). "explanation을 기둥별 궁합 분석으로 확장"이라는 요청을, 이미 별도 섹션으로 존재하던 기둥별 항목들(지난 세션에서 만듦)을 깊게 만드는 방향으로 해석함 — `explanation` 필드 자체를 기둥별 콘텐츠로 대체/병합하면 기둥마다 다른 잠금 상태(년주만 무료)를 개별적으로 유지하던 기존 설계가 깨지기 때문에, 대신 `matchCommon.explanation`(전체 관계 기반 설명)과 기둥별 섹션(각 기둥 고유 관계 기반)을 별개로 유지한 채 양쪽 다 깊이만 더함. 이 판단은 사용자에게 명시적으로 플래그함
  - **`romanceTemplates.js`**: `goodFit`/`watchFor` 확장은 위와 동일한 패턴(상황×관계 15조합 × 고정 1개). `situational`(구체적 순간 5개, 5-2에서 만든 것)과 원래 질문형 성찰 톤은 이번에 안 건드림 — 분량만 늘리고 톤 유지 원칙 그대로 지킴
  - **검증**: `PREVIEW_MODE_UNLOCK_ALL`을 잠깐 `false`로 내린 상태에서 Playwright로 6개 결과 화면(궁합/아이돌매치/드라마매치/로맨스/내사주) × en/ko 전부 DOM 잠금 상태가 "각 챕터 첫 항목만 무료"로 정확히 나오는지 전수 확인 — 전부 일치. 별도 Node 스크립트로 4개 콘텐츠 뱅크 파일의 `goodFit`/`watchFor`가 전부 `{subheading, text}` 형태를 갖췄는지, `getXxxCopy` 함수들이 깨지지 않았는지 구조 검증(전부 통과). en/ko 키 병렬 검증(0건 불일치). 라이트/다크 스크린샷으로 소제목(강조색)+여러 문단이 카드 안에서 자연스럽게 읽히는지, "커플/연인" 뉘앙스가 아이돌/드라마 매치 텍스트에 없는지("couple", "partner", "boyfriend", "girlfriend", "커플", "연인", "사귀" 키워드 검색) 확인 — 전부 클린. 콘솔 에러 0건. 마지막에 `PREVIEW_MODE_UNLOCK_ALL`을 다시 `true`로 복구한 뒤 최종 빌드 확인

## 5-5. 유저별 프리미엄 잠금 해제 (`PremiumContext`, `utils/premiumUnlock.js`) — Stripe 연동 전 실사용 흐름

> **[5-6에서 대체됨]** 이 섹션이 설명하는 "단일 boolean(`premiumUnlocked`) 하나로 전체를 잠금/해제"하는 설계는 **5-6에서 상품별 독립 잠금으로 전면 교체됨**(하나 풀면 전부 풀리는 구조적 결함이 있었음). 아래 내용은 그 이전 설계의 기록으로 남겨두고, 현재 실제 동작하는 구조는 5-6을 참고할 것.

5-4에서 만든 `PREVIEW_MODE_UNLOCK_ALL`은 "개발자가 전체 리뷰할 때 잠깐 켜는 스위치"였을 뿐, 실제 방문자에게 노출되는 라이브 흐름이 아니었음. 이번엔 방문자 본인이 잠긴 섹션에서 직접 버튼을 눌러 잠금을 풀 수 있는 **진짜 유저용 흐름**을 만들고, `PREVIEW_MODE_UNLOCK_ALL`은 다시 `false`로 되돌림 — 이제부터 실제로 콘텐츠가 잠겨 보이는 게 기본 상태.

- **`src/utils/premiumUnlock.js`**(신규): `theme`/`language`와 동일한 flat localStorage 패턴 — `isPremiumUnlocked()`(`localStorage.getItem('premiumUnlocked') === 'true'`), `setPremiumUnlocked(value)`. **Stripe 연동 시 재사용 지점**을 파일 최상단 주석에 명시해둠: "Checkout 성공 콜백(또는 서버 확인이 필요하면 webhook 핸들러)에서 이 파일의 `setPremiumUnlocked(true)`를 그대로 호출하면 됨 — 이 파일 자체는 그 시점에 수정 불필요"
- **`src/context/PremiumContext.jsx`**(신규): `premiumUnlock.js`의 값으로 초기화된 React state + `setPremiumUnlocked` 함수를 Context로 제공하는 `PremiumProvider`, 소비용 `usePremium()` 훅. **App.jsx에서 `<Routes>` 바깥을 감싸는 최상위**에 배치(라우트 이동해도 상태 유지) — 이렇게 해야 한 페이지 안에 잠긴 섹션이 여러 개 있어도(`/saju`엔 19개) 버튼 하나 눌렀을 때 전부 같은 React state를 구독하고 있어서 **리로드 없이 즉시 다 같이 풀림**
- **`PremiumLock.jsx` 수정**: 렌더링 조건이 `PREVIEW_MODE_UNLOCK_ALL` 단독 체크에서 `PREVIEW_MODE_UNLOCK_ALL || isPremiumUnlocked`(Context)로 확장. 잠긴 상태의 오버레이 안에 새 버튼 추가(`saju.premiumUnlockButton`: "Try it free now"/"지금 무료로 체험해보기") — 클릭 시 `setPremiumUnlocked(true)` 호출
- **`Footer.jsx`에 재잠금 테스트 링크 추가**: `isPremiumUnlocked`가 true일 때만(잠금 풀린 상태에서만) 푸터 하단에 작은 밑줄 텍스트 버튼(`footer.relockPremium`: "Lock premium content again (testing)"/"프리미엄 잠금 다시 걸기 (테스트용)") 노출 — 클릭하면 `setPremiumUnlocked(false)`. 개발자도구로 매번 localStorage 지우지 않고도 잠금/해제 두 상태를 반복 테스트할 수 있게 하는 용도라고 요청받아 그대로 남겨둠(정식 UX는 아님, 사용자가 "선택, 개발 편의용"이라고 명시)
- **`config.js`의 `PREVIEW_MODE_UNLOCK_ALL`을 다시 `false`로**: 이제부터 실제 방문자에게는 콘텐츠가 잠긴 채로 보이고, 위 유저별 버튼이 진짜 해제 경로가 됨. 이 값은 앞으로 개발자가 전체 리뷰할 때만 잠깐 `true`로 켰다가 다시 꺼두는 용도로 계속 남겨둠(용도 자체가 5-4와 달라진 걸 주석에도 반영)
- **검증**: Playwright로 `/saju`(잠긴 섹션 19개짜리 페이지)에서 (1) 잠금 상태에서 잠긴 섹션 수/무료 섹션 수(19/5, 5-4 스펙 그대로)부터 확인 (2) 잠긴 섹션 중 아무 버튼이나 하나 클릭 → **같은 페이지의 다른 18개 잠긴 섹션도 리로드 없이 즉시 다 같이 풀리는지**(0개 잠금으로) 확인 (3) `localStorage.premiumUnlocked === 'true'`로 저장됐는지 확인 (4) 페이지 새로고침 후에도 계속 24개 전부 풀린 상태로 유지되는지 확인 (5) 푸터의 "잠금 다시 걸기" 클릭 → 다시 19/5로 원상복구되고 localStorage도 `'false'`로 바뀌는지 확인 — en/ko 둘 다 전부 일치. 라이트/다크 스크린샷으로 잠금 상태(블러+자물쇠+버튼)와 해제 상태(전체 선명) 둘 다 확인, 콘솔 에러 0건

## 5-6. 프리미엄 잠금을 상품 단위로 독립화 (`saju`/`compatibility`/`idolMatch`/`dramaMatch`/`romance`)

5-5의 단일 boolean 설계는 "하나 풀면 전부 풀린다"는 구조적 결함이 있었음(사용자가 직접 지적) — 사주 콘텐츠를 풀었더니 아이돌매치/궁합/로맨스/드라마매치까지 전부 같이 풀려버리는 게 실제 결제 전환에는 맞지 않는 동작이라, 5개 상품(`saju`/`compatibility`/`idolMatch`/`dramaMatch`/`romance`) 각각 독립적으로 잠기고 풀리도록 전면 재설계함.

- **`src/utils/premiumUnlock.js` 전면 재작성**: flat boolean 하나 대신, localStorage 키 `premiumUnlockedProducts` 하나에 **JSON 객체**로 저장(`{saju, compatibility, idolMatch, dramaMatch, romance}`, 각 boolean). `PRODUCTS` 배열도 이 파일에서 export(5개 키의 단일 소스, `Guide.jsx`가 재사용). `getUnlockedProducts()`(전체 객체, 없는 키는 `false`로 정규화)/`isProductUnlocked(key)`/`setProductUnlocked(key, value)`(그 키만 갱신, 나머지는 그대로 — `JSON.parse` 실패나 저장값 없음은 빈 객체로 안전하게 폴백). **Stripe 연동 재사용 지점**을 파일 최상단 주석에 명시: "나중에 Stripe 결제 성공 시 결제한 상품 키를 알아내서 `setProductUnlocked(그키, true)` 호출하면 됨"
- **`PremiumContext.jsx` 재작성**: `unlockedProducts`(5개 키 전체 객체) + `unlockProduct(key)`를 제공. 상위 위치(App.jsx, `<Routes>` 바깥)는 그대로라 여러 섹션이 즉시 같이 갱신되는 성질은 유지되지만, 이제 "같이 갱신"되는 범위가 **그 상품 하나로 좁혀짐**. `lockProduct(key)`도 함께 추가함(사용자 스펙엔 명시 안 됐지만, Guide.jsx 재잠금 UI가 상품별로 끌 방법이 필요해서 대칭적으로 추가) — `usePremium()`은 Provider 밖에서 부르면 에러
- **`PremiumLock.jsx` — `product` prop 필수화**: 잠금 조건이 `PREVIEW_MODE_UNLOCK_ALL || unlockedProducts[product]`로 바뀜. `product`를 안 넘기면 `import.meta.env.DEV`에서 `console.error`(런타임 크래시는 안 시킴, 개발 중 실수 조기 발견용 — 이 레포는 `prop-types` 안 씀). 오버레이 버튼 문구를 상품 한정 느낌으로 조정(`saju.premiumUnlockButton`: "Try this content free"/"이 콘텐츠 무료로 체험하기" — 이전 5-5의 범용 문구 "Try it free now"에서 교체), 클릭 시 `unlockProduct(product)`(그 상품만 풀림)
- **`InsightSection.jsx`/`MatchResultCard.jsx`로 `product` 전달**: `InsightSection`이 `product` prop을 받아 내부에서 만드는 모든 `PremiumLock`에 그대로 넘김 — 각 페이지는 `InsightSection` 호출 시 `product`를 한 번만 지정하면 되고 섹션 배열 항목마다 따로 안 넣어도 됨. `IdolMatch.jsx`/`DramaMatch.jsx`는 `InsightSection`을 직접 안 부르고 공용 `MatchResultCard.jsx`를 거치므로, `MatchResultCard`에 별도 이름의 pass-through prop `insightProduct`를 추가(`InsightSection` 자신의 `product`와 이름이 겹치지 않도록)
- **5개 페이지 wiring**: `Saju.jsx`(도메인 4개 카드 + 십성/십이운성 챕터 카드 + 신살·귀인·연운·삼재 카드 + `LifeScoreChart`의 `PremiumLock`까지 전부 `product="saju"`) / `Compatibility.jsx`(`"compatibility"`) / `Romance.jsx`(`"romance"`) / `IdolMatch.jsx`(베스트매치+최애매치 그룹모드 두 `MatchResultCard` 호출부 모두 `insightProduct="idolMatch"`) / `DramaMatch.jsx`(`insightProduct="dramaMatch"`)
- **개발용 재잠금 UI — Footer.jsx에서 Guide.jsx로 이동**: 5-5의 "잠금 다시 걸기" 링크(전체를 한 번에 껐다 켜던 단일 링크)를 완전히 제거하고, `Footer.jsx`는 원래의 단순한 형태(Privacy/Terms 링크 + 저작권)로 되돌림. 대신 `Guide.jsx` 맨 아래에 새 카드("Premium Unlock Testing"/"프리미엄 잠금 테스트")를 추가해서 5개 상품 각각의 상태(잠김/해제됨)와 "다시 잠그기" 버튼을 한 줄씩 나열 — 해당 상품이 이미 잠긴 상태면 버튼은 비활성화됨. 테스트 중 특정 상품 하나만 재잠금하고 나머지는 그대로 둔 채 반복 검증할 수 있게 하려는 목적(정식 유저 플로우 아님, dev 편의용으로 명시)
- **검증**: Playwright로 (1) `/saju`에서 "체험하기" 클릭 시 saju 콘텐츠만 풀리고 `/idol-match`/`/compatibility`/`/romance`/`/drama-match`는 그대로 잠긴 채인지 확인 (2) 반대로 idolMatch만 풀었을 때 saju가 안 풀리는지 확인 (3) `/compatibility`가 saju/idolMatch/dramaMatch/romance를 순서대로 전부 풀어나가는 동안에도 계속 "2 locked/2 free"로 변하지 않는지(진짜 독립성 증명) 확인 (4) `localStorage.premiumUnlockedProducts`가 JSON 객체로 정확히 그 상품 키만 갱신되는지 확인 (5) 페이지 새로고침 후에도 상품별 상태가 개별로 유지되는지 확인 (6) `Guide.jsx`의 재잠금 UI로 특정 상품 하나만 다시 잠갔을 때 그 상품만 잠기고 나머지는 안 건드리는지 확인 — en/ko 둘 다 전부 일치, 콘솔 에러 0건. 최초 구현 시 오버레이 버튼 문구를 5-5의 범용 문구 그대로 남겨뒀던 걸(상품 한정 문구로 바꾸라는 스펙을 놓침) 리뷰 중 자체적으로 발견해서 수정한 뒤 전체 재검증 — 통과. `verify-guide-{light,dark}.png`/`verify-locked-overlay-{light,dark}.png` 스크린샷으로 라이트/다크 둘 다 오버레이 문구와 Guide.jsx 새 카드 스타일이 자연스러운지 육안 확인(검증 후 삭제)

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
- **공유카드 점수 강조**: `CompatibilityShareCard`/`IdolShareCard` 둘 다 궁합 점수를 54~64px(카드별로 다름, 내용량에 따라 조정)로 압도적으로 키우고 티어명은 17~18px로 낮춤 — 소셜 공유 시 스크롤을 멈추게 하는 건 결국 숫자라는 판단. `IdolShareCard`엔 원래 점수가 아예 없었는데(온스크린 결과 카드에만 있었음) 이번에 추가함. 긴 문구가 카드 하단 푸터와 겹치지 않도록 두 카드 모두 본문 문단에 `-webkit-line-clamp`로 안전장치를 걸어둠(**이후 7-4에서 콘텐츠가 헤드라인+첫 문단 방식으로 바뀌면서, 실제 잘림 제어는 `truncateForShareCard` 헬퍼가 담당하도록 교체됨 — line-clamp는 보조 안전장치로만 남음**)
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
- **"이미지로 저장" 버튼 추가**: 위에서 `files`를 뺀 이후로 모바일에서는 공유시트가 링크만 보내고 PNG 실물을 받을 방법이 없었는데(공유 대상이 자체적으로 OG 이미지를 못 뿌리는 경우, 또는 인스타 스토리처럼 파일 자체가 필요한 곳엔 못 씀), "공유하기" 버튼 옆에 별도의 "이미지로 저장"(`saveImageLabel`) 버튼을 추가해서 이 갭을 메움. 훅에 `saveImage(filename, analyticsContext)`를 새로 노출 — 기존 `download()`의 PNG 렌더링+`<a download>` 로직(`renderCardToFile`로 공통 추출)을 그대로 재사용하되, `navigator.share` 지원 여부와 무관하게 **항상** PNG를 렌더링해서 다운로드함. 기존 "공유하기" 버튼(`download()`)의 동작(지원되면 링크만 보내는 공유시트, 안 되면 PNG 폴백)은 완전히 그대로 둠 — 둘은 서로 다른 액션이라 라벨도 분리(`result.saveImageButton`: "Save image"/"이미지로 저장"). Result/Saju/Compatibility/Romance는 `.result-actions`에 버튼 하나 더 추가하는 식으로, IdolMatch(베스트매치+그룹 드릴다운)/DramaMatch는 공용 `MatchResultCard.jsx`에 `onSaveImage`/`saveImageLabel`/`savingImage` prop 3개를 추가하는 식으로 적용. 애널리틱스는 `share_card_download` 이벤트의 `context`에 `-image` 접미사를 붙여서(`${analyticsContext}-image`) 같은 이벤트 스키마 안에서 공유 대비 저장 비율을 구분할 수 있게 함
  - **검증 방법 특이사항**: Playwright 헤드리스 컨텍스트에서 `toPng()` 렌더링(폰트 서브셋 로딩 포함)이 첫 클릭에 8~10초 정도 걸려서, 기본 8초 타임아웃으로 테스트했을 때 실제로는 다운로드가 정상 발생했는데도 타임아웃으로 실패 처리된 적이 있었음(앱 버그 아님, 테스트 타임아웃을 20초로 늘려서 해결). `navigator.share`를 모킹한 상태에서 "공유하기"를 눌러도 PNG 다운로드가 안 뜨는지 확인하는 테스트에서도, 한 번은 `page.once('download')` 리스너가 이후의 "이미지로 저장" 클릭이 발생시킨 다운로드까지 잘못 붙잡아서 오탐(공유 버튼이 PNG도 다운로드하는 것처럼 보임)이 났었음 — 리스너를 `on`+수동 `off`로 특정 구간에만 걸리게 고쳐서 재확인, 실제로는 공유 버튼이 다운로드를 전혀 발생시키지 않음을 확인함(둘 다 테스트 스크립트 자체의 문제였고 앱 코드는 처음부터 의도대로 동작했음). Result/Saju/Compatibility/Romance/IdolMatch(베스트매치+그룹매치)/DramaMatch 7개 결과 화면 전부에서 공유 지원/미지원 두 모드 × 두 버튼 조합을 실제 다운로드 이벤트로 확인, 콘솔 에러 0건

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

## 7-4. 공유카드 콘텐츠를 "헤드라인 + 첫 문단"으로 개편, 워터마크 가시성 개선

기존 `IdolShareCard`/`CompatibilityShareCard`는 짧은 시드 문구(`line`, `getXxxCopy`가 관계당 5개 변형 중 하나를 시드로 골라주던 것)를 그대로 보여줬는데, 이제 두 카드 다 "청월당 스타일"로 깊어진 콘텐츠(3-9의 `meetingScenario`, 5-4의 `matchCommon.explanation`)를 헤드라인(`subheading`)+첫 문단만 잘라서 보여주는 방식으로 교체함. `SajuShareCard`는 콘텐츠 소스(기존 성격 프로필 총운) 그대로 유지 요청이라 안 건드림 — 단, 검증 중 발견한 렌더링 버그(아래 참고)는 4개 카드 공통이라 여기서 같이 고침.

- **콘텐츠 교체**: `IdolShareCard.jsx`(아이돌매치+드라마매치 공용)는 `line` prop을 없애고 `subheading`/`text` prop으로 교체 — 호출부(`IdolMatch.jsx` 베스트매치+그룹모드, `DramaMatch.jsx`)가 각각 `compatCopy.meetingScenario`/`memberCopy.meetingScenario`의 `subheading`/`text`를 넘김("팬미팅에서 만난다면?"/"시사회에서 마주친다면?" 콘텐츠, 3-9 참고). `CompatibilityShareCard.jsx`(궁합보기+로맨스 공용)도 같은 방식으로 `explanation.subheading`/`explanation.text`(이미 두 페이지에 계산돼 있던 값, 신규 계산 없음)를 넘기도록 호출부 수정
- **표시 방식**: 두 카드 다 `tier` 아래에 헤드라인급 소제목(`subheading`, IdolShareCard 21px/CompatibilityShareCard 22px, 둘 다 굵게)을 새로 추가하고, 본문은 `text.split('\n\n')[0]`(첫 문단만) + `textAlign: 'left'`(카드 전체는 계속 가운데 정렬 유지, 본문 문단만 좌측 정렬로 바꿔서 여러 줄일 때 자연스럽게 읽히게 함). 카드 높이는 640→690으로 소폭 조정
- **`-webkit-line-clamp` 자동 말줄임표가 `html-to-image` PNG 추출에서 안 살아나는 버그 발견 및 수정**: 다운로드 검증 중, 긴 문단이 잘리는 지점에서 "…" 없이 문장 중간에서 뚝 끊기는 걸 실제 PNG에서 발견함(브라우저 화면에서는 `-webkit-line-clamp`가 자동으로 말줄임표를 붙여주지만, `toPng()`가 만드는 정적 스냅샷엔 그 UA 생성 장식이 안 넘어감) — **4개 공유카드 전부에 있던 기존 버그**였고 이번 작업으로 처음 발견됨. `ShareCard.jsx`에 `truncateForShareCard(text, lang)` 헬퍼 신규 export — 말줄임표를 실제 텍스트 "…"로 직접 붙여서 렌더링(단어 중간이 아니라 마지막 공백 기준으로 자름). 언어별로 길이 상한을 다르게 둠(`ko: 150자`, `en: 260자`) — 한글 음절이 로마자보다 시각적으로 넓어서 같은 글자 수라도 한글이 더 많은 줄을 차지하기 때문. `IdolShareCard`/`CompatibilityShareCard`의 새 `text` prop과, **콘텐츠는 안 건드리기로 했던 `SajuShareCard`의 기존 `profileLine`**에도 동일하게 적용(콘텐츠 소스는 그대로, 잘림 방식만 통일) — `-webkit-line-clamp`는 만약을 위한 안전장치로 값만 살짝 늘려서(5~6→7~8) 남겨둠, 실제 길이 제어는 이제 `truncateForShareCard`가 담당
- **`ShareCardWatermark` 워터마크 가시성 개선**: 캐릭터 워터마크 opacity를 0.13→0.22로 올려서(1명/2명 케이스 동일 비율 적용) 배경에서 실제로 인지 가능한 수준으로 눈에 띄게 함 — `ShareCard.jsx`(Result)/`SajuShareCard.jsx`도 같은 컴포넌트를 공유하므로 이 변경은 4개 카드 전부에 자동 적용됨(콘텐츠 변경 없이 순수 표현 방식 개선)
- **검증**: 실제 헤드리스 브라우저로 4개 카드 전부(`/result`, `/saju`, `/idol-match`, `/drama-match`, `/compatibility`, `/romance` — `IdolShareCard`/`CompatibilityShareCard`는 페이지 2개씩 공유) "이미지로 저장" 버튼을 실제로 클릭해서 **다운로드된 PNG 파일을 직접 열어 확인**(오프스크린 요소를 그냥 스크린샷하는 방식은 `position: fixed; top/left: -9999px` 레이아웃 때문에 엉뚱한 요소가 찍히는 촬영 아티팩트가 있어서 폐기하고, 실제 다운로드 플로우로 재검증함) — en/ko 각 카드마다 헤드라인이 굵게 강조되고, 첫 문단이 좌측 정렬로 자연스럽게 읽히며, 길이가 넘치면 "…"로 깔끔하게 끊기는지, 워터마크 캐릭터가 실제로 눈에 띄는지 육안 확인. 라이트/다크 사이트 테마는 카드 자체 그라디언트 배경과 무관하다는 것도 다크모드 다운로드로 재확인. 콘솔 에러 0건

## 8. 다국어 (i18n)

- `src/i18n/locales/{en,ko}.json` — **완전 병렬 구조** (키 하나도 안 빠짐, 스크립트로 검증함)
- `LanguageToggle.jsx`: 헤더의 EN/KO 버튼, 다크모드처럼 localStorage(`language` 키)에 저장돼 재방문시 유지
- 사주 네 기둥 표기도 언어에 맞게 전환됨 (한국어면 갑을병정 한글, 영어면 Jia/Yi 로마자) — `getGanLabel`/`getZhiLabel` 참고
- **브랜드명 로컬라이즈**: `app.name` 값이 en/ko로 분리됨 — 영어는 "Ohaeng" 그대로(영어권 유저한텐 이게 실질적 브랜드명), 한국어는 **"오행"**으로 변경. `t('app.name')`을 쓰는 헤더 로고(`Layout.jsx`)와 공유카드 4종(`ShareCard`/`SajuShareCard`/`IdolShareCard`/`CompatibilityShareCard`)이 이 키 하나로 자동 반영됨
  - **후속 정리 — 완료**: 처음엔 `app.name` 키만 바꿨는데, `ko.json` 안에 `app.name`을 안 거치고 문구 뱅크마다 직접 "Ohaeng"이 하드코딩된 자리가 20곳 더 있었음(`landing.title`, 각 페이지 `shareCaption`/`shareCardFooter`, `guide.*`, `privacy.*`, `terms.*`) — 전부 브랜드가 자기 자신을 지칭하는 문장이라 "실제 고유명사 인용/이메일 제목 같은 관리용 텍스트" 예외에 해당하는 곳은 없어서 전부 "오행"으로 일괄 교체. `landing.title`의 "Ohaeng 🔮"/"오행 🔮"에서 이모지도 제거(en/ko 둘 다) — 헤더 로고 등 다른 자리엔 같은 이모지가 없었음을 확인(있는 건 `public/favicon.svg`의 브라우저 탭 아이콘뿐인데, 이건 별개의 디자인 자산이라 이번 범위에서 안 건드림)

## 9. 애널리틱스 (`src/utils/analytics.js` + `main.jsx`) — **실제 키 등록·배포 완료, 정상 작동 중**

- `posthog-js` 설치, `main.jsx`에서 `import.meta.env.VITE_POSTHOG_KEY`가 있으면 `posthog.init()` 실행 + `window.posthog`에 할당. 키가 없으면 아무것도 안 하고, `analytics.js`의 모든 `track()` 호출은 계속 no-op으로 안전하게 동작
- 이벤트 호출부는 다 심어둠: `home_menu_click`, `birth_form_submit`(페이지별 context 포함), `share_card_download`, `idol_match_submit`(모드별: soulmate/group/drama), `page_view`
- **실제 키 발급·등록 완료**: 로컬 `.env.local`(gitignore의 `*.local` 패턴에 자동으로 걸림)과 Cloudflare Pages 환경변수 둘 다 등록됨. 환경변수는 다음 빌드부터 반영되므로, 등록 직후 빈 커밋으로 재배포해서 반영시킴. 재배포 후 `window.posthog.config.token`이 실제 키와 일치하는 것까지 배포본에서 직접 확인함
- **디버깅 이력 — 해결 완료**: "오토캡처는 잡히는데 커스텀 이벤트(`page_view` 등)가 PostHog Activity에 안 보인다"는 리포트를 받아서 조사함. `window.posthog.capture`를 앱 부팅 전에 가로채서 실제 호출 여부·이벤트명·파라미터를 로깅하는 방식으로 로컬/실배포(getohaeng.com) 둘 다 확인 — **`track()`은 매번 정확한 이벤트명·파라미터로 정상 호출됨**(코드 문제 아님). 이 세션의 Playwright 환경 자체가 PostHog SDK의 `navigator.webdriver` 봇 감지에 걸려서 오토캡처·커스텀 이벤트 둘 다 실제 네트워크 전송이 0건이라, "실제 도착 여부"는 이 환경에서 검증 불가했음. `analytics.js`의 `track()`에 `console.log('[analytics] capture: ...')`를 상시 추가해서 실제 브라우저에서 직접 확인하도록 안내함
  - 후속으로 "콘솔 로그가 강력 새로고침 후에도 전혀 안 찍힌다"는 리포트를 받아 배포 자체를 의심 → Cloudflare 대시보드/API 접근이 안 되는 환경(`wrangler whoami` 미인증)이라 간접적이지만 확정적인 방법으로 검증: `git fetch`로 콘솔로그 커밋이 `origin/main`의 조상인지 확인(push 성공 확인) → 로컬에서 같은 커밋으로 빌드해서 나온 번들 파일명(`index-CaHN91-B.js`)이 실제 getohaeng.com이 로딩하는 스크립트 태그와 정확히 일치하는지 확인 → 그 번들을 실제로 다운로드해서 `"[analytics] capture"` 문자열이 포함돼있는지 grep으로 확인, 3단계 전부 통과해서 **코드는 확실히 프로덕션에 배포돼 있음**을 결론. 사용자가 이후 실제 devtools에서 로그/이벤트 도착을 직접 확인하고 "완료됐어" 확인함

## 9-1. 리텐션 — 생년월일 기억하기 (`src/utils/birthMemory.js`, `BirthDateForm.jsx`)

theme/language 토글과 동일한 localStorage 패턴(`ThemeToggle.jsx`/`LanguageToggle.jsx`의 flat get/set)을 생년월일처럼 여러 필드로 된 값에 맞게 확장한 버전.

- **`birthMemory.js`**: `loadBirthMemory()`/`saveBirthMemory(fields)` — 단일 키 `'birthDate'`에 JSON으로 저장, `localStorage` 예외(프라이빗 브라우징/용량초과)는 try/catch로 흡수하고 조용히 무시(기억 기능은 있으면 좋은 것이지 실패해도 폼 제출 자체를 막으면 안 됨). `saveBirthMemory`는 **덮어쓰기가 아니라 병합**(`{ ...existing, ...fields }`) — 이름/성별 필드가 없는 폼(IdolMatch/DramaMatch)이 나중에 저장해도 앞서 Result/Saju에서 저장해둔 이름/성별이 안 날아가게 하기 위함
- **`BirthDateForm.jsx`**: 신규 `remember` boolean prop(옵트인, 기본 꺼짐) — true면 마운트 시 저장된 값으로 모든 `useState` 초기값을 채우고(자동 제출은 안 함, 유저가 확인 후 눌러야 제출됨), 제출 시 `saveBirthMemory` 호출. `collectProfile`(이름/성별 입력 UI 유무)과는 별개 축이라서 두 prop을 각자 필요한 곳에 독립적으로 켬 — "내 생일" 폼인지 "상대 생일" 폼인지를 암묵적으로 추론하지 않고 8개 호출부마다 명시적으로 `remember`를 넣거나 뺐음
- **적용 현황**: `remember` 켜짐 — Result(+`collectProfile`)/Saju(+`collectProfile`)/DramaMatch/IdolMatch(베스트매치+그룹모드 2곳)/Compatibility의 "내 생일" 단계/Romance의 "내 생일" 단계, 총 7곳. `remember` **의도적으로 안 켬** — Compatibility·Romance의 "상대방 생일" 단계 2곳(상대 생일은 매번 새로 입력받아야 하므로 저장 대상에서 명시적으로 제외)
- **검증**: Playwright로 (1) `/result`에서 이름+성별+생일 입력 후 제출 → localStorage에 저장 확인 (2) `/saju`·`/idol-match`·`/drama-match`·`/compatibility`(내 생일 단계)·`/romance`(내 생일 단계)를 각각 새로 열었을 때 드롭다운이 전부 미리 채워지는지 확인 (3) Compatibility/Romance의 "상대방 생일" 단계는 "내 생일" 제출 후에도 계속 빈 채로 남는지 확인 (4) localStorage가 아예 없는 새 브라우저 컨텍스트에서는 기존과 동일하게 빈 폼으로 뜨는지 확인 — 전부 통과, 콘솔 에러 0건

## 9-2. Privacy Policy / Terms of Use + 전역 푸터 (`Privacy.jsx`, `Terms.jsx`, `Footer.jsx`)

- **라우트**: `/privacy`, `/terms` 신규 — `Guide.jsx`와 동일한 카드 나열 패턴(제목+부제 → 카드별 소제목+본문). 각 페이지 마지막 카드에 `/contact`로 가는 버튼 포함
- **전역 푸터**: `Footer.jsx` 신규 — Privacy Policy/Terms of Use 링크 + `© {{year}} Ohaeng. All rights reserved.`(연도는 `new Date().getFullYear()`로 항상 최신). `Layout.jsx`의 `<Outlet />` 뒤에 렌더링해서 모든 페이지에 공통 적용
- **sticky-footer 레이아웃**: 기존엔 전역 푸터가 아예 없었고 `.page`가 `min-height: 100vh`라 내용이 짧은 페이지(`/about` 등)에서 푸터를 그냥 붙이면 뷰포트 하단이 아니라 카드 바로 아래(화면 중간)에 붕 떠버림. `#root`를 `display:flex; flex-direction:column; min-height:100%`로, `.page`는 `min-height:100vh` 대신 `flex: 1 0 auto`로 바꿔서 — 내용이 짧으면 푸터가 뷰포트 맨 아래에 붙고, 내용이 길면 그 아래로 자연스럽게 밀려나는 표준 sticky-footer 플렉스 패턴으로 교체
- **Privacy 내용(사실 기준)**: (1) 생년월일/이름/성별은 정적 SPA 구조상 브라우저 안에서만 계산되고 서버에 저장 안 됨 (2) 궁합/로맨스의 상대방 이름/생일도 동일 (3) 공유 링크의 동적 OG 미리보기 이미지(이름/점수 포함, 생년월일 원본 미포함, 7-3 참고)는 Cloudflare 엣지에 캐싱될 수 있음 (4) PostHog로 익명 이용 분석(방문 페이지·클릭) 수집 — `analytics.js`(9번 참고)가 실제로 보내는 파라미터를 직접 확인해서 생년월일 등 개인 식별 정보가 전혀 안 들어간다는 것 검증 후 서술 (5) 로컬 저장소는 테마/언어 설정과, "내 생일 기억하기"(9-1 참고) 기능이 저장하는 생년월일(+선택적 이름/성별)에만 쓰이고 전부 기기 안에만 남음
- **Terms 내용**: 오락 목적(entertainment purposes only) 면책 문구, 서비스 소개, Contact 링크
- **i18n**: `footer.*`(3개 키), `privacy.*`(12개 키), `terms.*`(8개 키) en/ko 완전 병렬 추가. "최종 수정일"은 작성 시점 날짜를 정적 텍스트로 박아둠(코드로 자동 계산 안 함) — 내용이 실제로 바뀔 때 수동으로 갱신하면 됨
- **검증**: Playwright로 `/privacy`·`/terms` 라이트/다크·en/ko 렌더링, 푸터 링크 텍스트·저작권 문구가 언어별로 정확히 바뀌는지, 짧은 페이지(`/about`)에서 푸터가 뷰포트 하단에 붙는지, 긴 페이지(`/`)에서 레이아웃 깨짐 없는지까지 스크린샷으로 확인. 콘솔 에러 0건

## 10. 배포/설정

- Cloudflare Pages 빌드: Framework preset None, Build command `npm run build`, Output directory `dist`
- `.claude/settings.json`에 `Bash(npm run build)`, `Bash(npm run dev)`, `PowerShell(git push origin main)` 허용 등록됨 (승인창 감소용)
- **push 정책**: 사용자가 "계속 자동으로 푸쉬해줘"라고 명시적으로 요청함 → 커밋 후 확인 없이 바로 push하는 게 기본 동작
- **프리미엄 잠금 — 두 겹 구조(5-4, 5-6 참고)**: (1) `src/config.js`의 `PREVIEW_MODE_UNLOCK_ALL` — **현재 `false`**, 개발자가 전체 리뷰할 때만 잠깐 `true`로 켰다가 다시 꺼두는 용도. (2) `PremiumContext`/`utils/premiumUnlock.js` — 방문자가 잠긴 섹션의 "이 콘텐츠 무료로 체험하기" 버튼을 눌러 localStorage(`premiumUnlockedProducts`, 상품별 JSON 객체)에 저장하는 **실제 라이브 잠금 해제 흐름**(현재 정식 동작 중, `saju`/`compatibility`/`idolMatch`/`dramaMatch`/`romance` 5개 상품이 각자 독립적으로 잠기고 풀림). Stripe 연동 시 결제 성공 콜백에서 결제한 상품 키로 `setProductUnlocked(그키, true)`만 호출하면 되도록 이미 설계해둠 — `premiumUnlock.js` 자체는 그때 수정 불필요

## 11. 아직 안 한 것

- **스페인어**: 구조는 en/ko와 동일하게 확장하면 되지만 미착수
- **리텐션 — 완료**(9-1 참고). 생년월일(+선택 입력했다면 이름/성별)을 localStorage에 저장해 "내 생일" 폼에 재방문시 자동 채움, 상대방 생일 폼은 저장 대상에서 제외
- **수익화**: 유료 구독/Stripe 연동 — **실제 Stripe 계정/API 키 필요**, 여기서 막힘. 다만 결제 성공 시 해당 상품의 잠금만 풀어주는 쪽(`utils/premiumUnlock.js`의 `setProductUnlocked(productKey, true)`, 5-6 참고)은 이미 준비돼있어서, Stripe 붙을 때 Checkout 성공 콜백/webhook에서 결제한 상품 키를 알아내 이 함수 하나만 호출하면 됨
- **주간 운세 캘린더**, **로그인/히스토리** — 미착수 (PRD상 우선순위 낮음)
- **PostHog 실제 키 — 완료**(위 9번 참고). 오토캡처는 확인됐고, 커스텀 이벤트가 대시보드에 실제로 도착하는지는 사용자가 직접 브라우저에서 확인 필요(코드는 검증 완료)
- 신강/신약을 사주 성격 문구(`sajuProfileTemplates.js`)에도 반영하는 건 스코프 아웃함 (오행 5종만으로 충분하다고 판단)
- **결과별 동적 OG 미리보기 — 완료**(7-3 참고). production 배포 후 실기기/실제 카톡·디스코드 미리보기까지 사용자가 직접 확인 완료

## 12. 개발 시 주의사항 / 이미 겪은 버그

- 모든 UI 변경은 Playwright로 실제 브라우저 구동해서 라이트/다크, 영어/한국어 스크린샷 확인 후 커밋하는 흐름을 계속 씀 (콘솔 에러 0건이 기본 기준)
- 문구 뱅크(`*Templates.js`) 작성 시 **작은따옴표 문자열 안에 아포스트로피 이스케이프 실수**가 반복됐음 — 새 영어 문구 추가할 땐 큰따옴표로 감싸는 걸 권장 (한국어는 아포스트로피가 없어서 이 문제 없음)
- `useEffect`를 컴포넌트의 조건부 early return **뒤에** 넣으면 React Hooks 규칙 위반(hook 개수가 렌더마다 달라짐) — 실제로 한 번 만들었다가 코드 리뷰로 잡음. birth 없을 때 early return 하는 페이지들(Result/Saju/Compatibility)은 전부 return 전에 훅을 배치해야 함
- 헤더 네비가 좁은 화면(~480px 이하)에서 줄바꿈되며 `.page` 상단 padding과 겹치는 버그가 있었고 미디어 쿼리로 고쳐둔 상태 — 헤더에 항목 더 추가할 땐 재확인 필요. `.site-header`는 `align-items: flex-start`(원래 `center`였음) — `center`였을 때는 `header-actions`가 두 줄로 줄바꿈되면 로고가 두 줄 사이 정중앙에 붕 떠버려서, 좁은 화면에서 첫 줄(Guide/Contact us)과 나란히 정렬되도록 수정함. 넓은 화면(한 줄일 때)은 육안상 차이 없음
- Playwright로 `position: fixed` 요소가 있는 페이지를 `fullPage: true` 스크린샷 찍으면 헤더가 여러 번 찍혀 겹쳐 보이는 촬영 아티팩트가 생김(실제 렌더링 버그 아님) — 뷰포트 스크린샷으로 재확인해서 착시였음을 확인한 적 있음
