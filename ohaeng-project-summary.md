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

## 3. 사주 계산 로직 (`src/utils/saju.js`)

- `calculateSaju(birth, timeKnown)` → `{ pillars, elementCounts, dominantElement, zodiac, dayGan, dayGanElement, dayGanStrength }` 반환
  - `dayGanStrength`: `'strong' | 'weak'` (신강/신약) — 일간이 나머지 글자들의 도움을 얼마나 받는지로 판정
- `getGanElement`/`getZhiElement`: 천간·지지 → 오행 매핑
- `getGanLabel(gan, lang)`/`getZhiLabel(zhi, lang)`: `lang==='ko'`면 한글(갑을병정...), 아니면 로마자 그대로. **lunar-javascript엔 한국어 로케일이 없어서** 직접 매핑 테이블(`GAN_KO`/`ZHI_KO`)을 만들어 넣음
- `getElementRelation(myElement, otherElement)`: 오행 상생상극 관계 판정 (`same`/`otherGeneratesMe`/`iGenerateOther`/`otherOvercomesMe`/`iOvercomeOther`) — **이 앱의 모든 "오늘의 운세"·"궁합" 로직이 여기서 파생됨**
- `getTodayRelation(saju, date)`: 내 사주 vs 오늘 날짜
- `getCompatibility(mySaju, otherBirth, otherTimeKnown)`: 나 vs 다른 사람(아이돌이든 일반인이든) — 아이돌 궁합/일반 궁합/그룹 랭킹/베스트매치가 전부 이 하나의 함수를 재사용
- `getCompatibilityScore(relation, seedInput)`: 관계(5종)를 1-99 궁합 점수(%)로 변환. 관계별 기준점(same=92 ~ otherOvercomesMe=48) + seed 기반 지터(±3)로 같은 관계라도 쌍마다 살짝 다른 점수가 나오게 함. 그룹 매치/베스트매치 결과에 표시되는 "궁합 점수"가 전부 이 함수 하나에서 나옴

## 3-1. 베스트매치 로직 (`src/utils/bestMatch.js`)

- `findBestMatch(pool, userSaju, myGender)`: `pool`(사람 목록, 각 항목에 `gender: 'M'|'F'` 필요) 중 내 성별의 **반대 성별**만 걸러서 전원과의 궁합을 계산하고, `getCompatibilityScore`가 가장 높은 1명을 반환. 아이돌 매치(`IdolMatch.jsx`)와 K-드라마 매치(`DramaMatch.jsx`)가 이 함수 하나를 공유 — 사용자가 "둘이 사실상 같은 기능"이라고 지적해서 통합함

## 4. 라우트/페이지 구조

| 라우트 | 파일 | 내용 |
|---|---|---|
| `/` | `Landing.jsx` | **순수 메뉴 화면** (생년월일 입력 없음). "사주 리딩"(오늘의 운세/내 사주/궁합) + "K팝 아이돌"(아이돌 매치/K-드라마 매치/그룹 매치) 2개 섹션, 리스트형 메뉴 6개 항목 |
| `/result` | `Result.jsx` | 오늘의 운세만 — 오행 배지, 띠, 5개 카테고리(총운/애정/재물/건강/컴백운), 공유카드, "궁합"/"내 사주" CTA. birth 파라미터 없으면 `BirthDateForm` 인라인 렌더 |
| `/saju` | `Saju.jsx` | 내 사주 자체(오늘과 무관) — 네 기둥(PillarGrid, 한국어면 한글 표기), 일간+신강/신약 배지, 오행 분포 바차트, 성격 분석. birth 없으면 인라인 폼 |
| `/compatibility` | `Compatibility.jsx` | **아무 두 사람**(친구/연인) 궁합 — 2단계 위저드(내 생일 → 상대 이름+관계+생일) → 결과+공유카드. 상대 이름/관계(친구·연인·썸·가족·동료)를 입력받아 결과 헤딩("나 & {이름}")과 공유카드에 그대로 반영. 팬덤 용어 없는 별도 문구 뱅크 사용 |
| `/idol-match` | `IdolMatch.jsx` | **베스트매치 추천** — 생일+성별 입력 → 반대 성별 아이돌 풀(31개 그룹, 197명) 전체와 궁합 계산해서 1위를 추천. `?mode=group&group=X`는 그대로 유지(그룹 전체 멤버와의 궁합 점수 랭킹, `GroupRankList.jsx`) |
| `/drama-match` | `DramaMatch.jsx` (신규) | 아이돌 매치와 **완전히 동일한 메커니즘**을 K-드라마 배우 100명(남 50/여 50, `kdramaActors.js`) 대상으로 실행. `findBestMatch`/`MatchResultCard`를 아이돌 매치와 공유 |
| `/partnership` | `Partnership.jsx` | Formspree 제휴 문의 폼 |
| `/guide` | `Guide.jsx` | 사주 vs 별자리 비교, 오행 상생상극 설명, "랜덤 아님" 신뢰 섹션 |
| `/about`, 그 외 | `ComingSoon.jsx` | 미구현 placeholder |

생년월일 입력은 `BirthDateForm.jsx` 하나로 통일 — Result/Saju/Compatibility/IdolMatch(베스트매치+group)/DramaMatch 전부 재사용. 성별 선택은 `GenderSelect.jsx`(IdolMatch/DramaMatch 공용), 매치 결과 카드는 `MatchResultCard.jsx`(아바타+오늘의 운세+궁합 점수+티어+공유버튼, 두 페이지 공용)로 분리했다.

**옛 "최애 궁합"(bias 모드)은 제거됨** — 기존 아이돌 매치(그룹+멤버 수동 선택)와 최애 궁합이 사실상 동일한 화면이었다는 사용자 피드백에 따라, 수동 선택 UX를 없애고 위 베스트매치 추천 방식으로 통합했다.

## 5. 콘텐츠 뱅크 (`src/data/`) — **en + ko 완전 병렬**

- **`fortuneTemplates.js`**: 관계(5) × 카테고리(5) × 5개 문구 = **125개**, en/ko 각각. `getFortuneLine(lang, relation, category, seed)`
- **`idolMatchTemplates.js`**: 관계 5종 × 5개 문구 = **25개**, en/ko 각각. tier명도 언어별로 다름 (예: same → en "Twin Flame" / ko "완벽한 싱크로율"). `RELATION_RANK`는 더 이상 정렬에 안 쓰이지만(점수 기반 정렬로 교체) 남아있음
- **`compatibilityTemplates.js`**: idolMatch와 같은 구조지만 **팬덤 용어 없음** (친구/연인 관계에도 자연스럽게), 25개 × en/ko
- **`dramaMatchTemplates.js`** (신규): idolMatch와 같은 5관계 구조지만 K-드라마 시청 어휘로 리라이트(정주행/본방사수/필모 등), 25개 × en/ko
- **`sajuProfileTemplates.js`**: dominant element별 성격 프로필(제목+2문단) + day master별 "진짜 나" 텍스트, en/ko 각각
- 한국어는 **직역이 아니라 자연스러운 로컬라이즈** — 최애/스밍/컴백/덕질 같은 팬덤 표현 사용

## 6. 아이돌/배우 데이터

- **`src/data/idols.js`**: **31개 그룹, 197명** (남 16개 그룹/여 15개 그룹). 기존 10개(BTS, BLACKPINK, NewJeans, SEVENTEEN, Stray Kids, TWICE, EXO(활동 중인 6명만), TXT, aespa, ATEEZ)에 21개 그룹 추가: ENHYPEN, THE BOYZ, ZEROBASEONE, RIIZE, NCT DREAM, NCT 127, MONSTA X, GOT7, TREASURE, BOYNEXTDOOR(남), IVE, LE SSERAFIM, ITZY, (G)I-DLE, Red Velvet, MAMAMOO, Kep1er, STAYC, fromis_9, NMIXX, VIVIZ(여). 그룹마다 `gender: 'M'|'F'` 필드 추가(베스트매치 성별 필터링용)
- 생일은 **웹 검색으로 개별 교차검증**해서 넣음 (신뢰도 HIGH만 채택). EXO는 첸백시 제외(SM 계약 분쟁), NewJeans는 다니엘 제외(ADOR 소송으로 지위 불확실), ENHYPEN은 희승 제외(2026-03 탈퇴), THE BOYZ는 뉴 제외(2026-08 탈퇴) — 코드 주석에 사유 명시. RIIZE 소희/안톤, GOT7 제이비, Kep1er 히카루/다연, NMIXX 배/지우/규진은 단일 소스 기반이라 코드 주석에 "정확도 재검증 필요"로 별도 표시해둠
- **`src/data/kdramaActors.js`** (신규): K-드라마 배우 100명(남 50/여 50), Wikipedia/Wikidata 기준 교차검증. `findBestMatch`에서 아이돌 풀과 동일한 방식으로 사용

## 7. 디자인 시스템

- **`STYLE_GUIDE.md`** (레포 루트): 색상/타이포/스페이싱 토큰, 아이콘 규칙 문서화. **"클린 배경" 방향으로 리비전됨** (아래 참고)
- **배경**: 무채색 중립 톤 (`--bg` 라이트 `#fafafa`/다크 `#121214`). 예전엔 보라색 radial-gradient + 배경 전체에 흐린 사신도 아이콘 콜라주(`FourSymbolsBackdrop.jsx`)가 있었는데, 사용자 피드백으로 **완전 제거**함
- **사신도 아이콘** (`public/icons/elements/{wood,fire,earth,metal,water}.png`, 청룡/주작/황룡/백호/현무): 이제 **실제 오행 데이터를 나타낼 때만** 사용 — 오행 배지, 멤버 아바타, 공유카드 워터마크. 페이지 배경 장식이나 메뉴 아이콘으로는 더 이상 안 씀
- **메뉴 아이콘** (`MenuIcon.jsx`): 홈 메뉴 6개 항목용 심플 단색 라인 아이콘(해/막대그래프/벤다이어그램/별/하트/사람) — 사신도 동물 아이콘 재사용 대신 항목 의미에 맞게 새로 그림
- **멤버 아바타** (`MemberAvatar.jsx` + `ElementPattern.jsx`): 실사진/AI 합성 얼굴 **절대 사용 안 함** (초상권 리스크 회피). 멤버 본인 사주의 오행+신강신약을 계산해서 그라디언트+추상 패턴 아바타 생성 — 최대 10종(오행 5 × 강약 2, 강함=진하고 실선 테두리/약함=흐리고 점선 테두리)
- **공유카드** (`ShareCard.jsx`, `IdolShareCard.jsx`, `CompatibilityShareCard.jsx`, 전부 `ShareCardFooter.jsx`/`ShareCardWatermark.jsx` 공유): 9:16 PNG, URL 배지 포함
- **OG 배너**: `public/og-banner.png` — 1200x630, Playwright로 HTML 직접 렌더링해서 만든 전용 이미지

## 8. 다국어 (i18n)

- `src/i18n/locales/{en,ko}.json` — **완전 병렬 구조** (키 하나도 안 빠짐, 스크립트로 검증함)
- `LanguageToggle.jsx`: 헤더의 EN/KO 버튼, 다크모드처럼 localStorage(`language` 키)에 저장돼 재방문시 유지
- 사주 네 기둥 표기도 언어에 맞게 전환됨 (한국어면 갑을병정 한글, 영어면 Jia/Yi 로마자) — `getGanLabel`/`getZhiLabel` 참고

## 9. 애널리틱스 (`src/utils/analytics.js`) — **스텁, 미활성**

- PostHog 실제 프로젝트 키가 없어서 `window.posthog`가 없으면 전부 no-op
- 이벤트 호출부는 다 심어둠: `home_menu_click`, `birth_form_submit`(페이지별 context 포함), `share_card_download`, `idol_match_submit`(모드별), `page_view`
- **활성화하려면**: 실제 PostHog 프로젝트 만들고 `main.jsx`에 `posthog.init(key, {api_host})` 한 줄만 추가하면 됨

## 10. 배포/설정

- Cloudflare Pages 빌드: Framework preset None, Build command `npm run build`, Output directory `dist`
- `.claude/settings.json`에 `Bash(npm run build)`, `Bash(npm run dev)`, `PowerShell(git push origin main)` 허용 등록됨 (승인창 감소용)
- **push 정책**: 사용자가 "계속 자동으로 푸쉬해줘"라고 명시적으로 요청함 → 커밋 후 확인 없이 바로 push하는 게 기본 동작

## 11. 아직 안 한 것

- **스페인어**: 구조는 en/ko와 동일하게 확장하면 되지만 미착수
- **리텐션**: 생년월일 localStorage 저장 → 재방문시 자동 채움 — 미착수
- **수익화**: 유료 구독/Stripe 연동 — **실제 Stripe 계정/API 키 필요**, 여기서 막힘
- **주간 운세 캘린더**, **로그인/히스토리** — 미착수 (PRD상 우선순위 낮음)
- **PostHog 실제 연동** — 프로젝트 키 필요, 위 8번 참고
- 신강/신약을 사주 성격 문구(`sajuProfileTemplates.js`)에도 반영하는 건 스코프 아웃함 (오행 5종만으로 충분하다고 판단)
- idols.js 상단 주석에 표시해둔 단일 소스 생일들(RIIZE 소희/안톤, GOT7 제이비, Kep1er 히카루/다연, NMIXX 배/지우/규진) 2차 교차검증 — 미착수

## 12. 개발 시 주의사항 / 이미 겪은 버그

- 모든 UI 변경은 Playwright로 실제 브라우저 구동해서 라이트/다크, 영어/한국어 스크린샷 확인 후 커밋하는 흐름을 계속 씀 (콘솔 에러 0건이 기본 기준)
- 문구 뱅크(`*Templates.js`) 작성 시 **작은따옴표 문자열 안에 아포스트로피 이스케이프 실수**가 반복됐음 — 새 영어 문구 추가할 땐 큰따옴표로 감싸는 걸 권장 (한국어는 아포스트로피가 없어서 이 문제 없음)
- `useEffect`를 컴포넌트의 조건부 early return **뒤에** 넣으면 React Hooks 규칙 위반(hook 개수가 렌더마다 달라짐) — 실제로 한 번 만들었다가 코드 리뷰로 잡음. birth 없을 때 early return 하는 페이지들(Result/Saju/Compatibility)은 전부 return 전에 훅을 배치해야 함
- 헤더 네비가 좁은 화면(~480px 이하)에서 줄바꿈되며 `.page` 상단 padding과 겹치는 버그가 있었고 미디어 쿼리로 고쳐둔 상태 — 헤더에 항목 더 추가할 땐 재확인 필요
- Playwright로 `position: fixed` 요소가 있는 페이지를 `fullPage: true` 스크린샷 찍으면 헤더가 여러 번 찍혀 겹쳐 보이는 촬영 아티팩트가 생김(실제 렌더링 버그 아님) — 뷰포트 스크린샷으로 재확인해서 착시였음을 확인한 적 있음
