# Ohaeng 프로젝트 개발 요약 (Claude Code 인수인계용)

> 새 Claude Code 세션에 붙여넣어 이어서 작업하기 위한 정리본입니다. 이 파일 자체가 레포에 커밋되어 있으니, 새 세션에서 "이 프로젝트 계속 개발할 건데 ohaeng-project-summary.md 읽고 시작해줘"라고만 해도 됩니다.

---

## 1. 프로젝트 개요

- **서비스명**: Ohaeng
- **컨셉**: 영어권 K-pop 팬덤을 타겟으로 한 한국 사주(四柱)/오행(五行) + 오늘의 운세 웹앱
- **차별점**: 서양 별자리 운세(Co-Star 등, 이미 포화된 시장) 대비 한국 고유 오행 이론 + K-pop 팬덤 콘텐츠(아이돌 궁합, "컴백운" 카테고리)로 차별화
- **레포**: [gukkk93/product-builder-lecture](https://github.com/gukkk93/product-builder-lecture) (main 브랜치)
- **배포**: https://product-builder-lecture-cgp.pages.dev/ (Cloudflare Pages, main에 push하면 자동 빌드·배포)

---

## 2. 기술 스택

- **Vite + React** (JS, TypeScript 아님), `react-router-dom`, `react-i18next`
- **`lunar-javascript`**: 사주 계산 핵심 — 실제 절기/60갑자 기반 만세력 라이브러리. 근사치 계산이 아니라 정확한 계산임 (이게 이 프로젝트의 핵심 신뢰 포인트)
- **`html-to-image`**: 결과를 9:16 PNG 공유카드로 렌더링
- **`pretendard`** (npm, self-host, dynamic subset): 브랜드 폰트, 영문+한글 지원
- 별도 UI 프레임워크(Tailwind 등) 없음 — 순수 CSS + CSS 커스텀 프로퍼티(디자인 토큰)

## 3. 사주 계산 로직 (`src/utils/saju.js`)

- `calculateSaju(birth, timeKnown)` → `{ pillars, elementCounts, dominantElement, zodiac, dayGan, dayGanElement }` 반환
- `pillars`: year/month/day/(time) 각각 `{ gan, zhi }` — 실제 천간지지
- `getGanElement`/`getZhiElement`: 천간·지지 → 오행(Wood/Fire/Earth/Metal/Water) 매핑 (export됨, 재사용 가능)
- `getElementRelation(myElement, otherElement)`: 오행 상생상극 관계 판정 (`same`/`otherGeneratesMe`/`iGenerateOther`/`otherOvercomesMe`/`iOvercomeOther`) — **이 앱의 모든 "오늘의 운세"와 "궁합" 로직이 여기서 파생됨**
- `getTodayRelation(saju, date)`: 내 사주 vs 오늘 날짜의 관계
- `getIdolCompatibility(userSaju, idolBirth)`: 내 사주 vs 아이돌 사주의 관계 (아이돌은 출생시간 비공개라 시주 없이 계산)

## 4. 라우트/페이지 구조

| 라우트 | 파일 | 내용 |
|---|---|---|
| `/` | `Landing.jsx` | 생년월일시 입력(양/음력, 년월일 드롭다운, 12지지 시간 드롭다운, 시간모름 옵션) → **"오늘의 운세 보기" / "내 사주 보기" 버튼 2개로 분기** (둘 다 바로 진입 가능, `/result` 안 거쳐도 됨) |
| `/result` | `Result.jsx` | **오늘의 운세만** — 오행 배지, 띠, 5개 카테고리(총운/애정/재물/건강/컴백운), 공유카드 다운로드, "궁합 보기"/"내 사주 자세히" CTA |
| `/saju` | `Saju.jsx` | **내 사주 자체(오늘과 무관)** — 네 기둥(PillarGrid), 일간 설명, 오행 분포 바차트(ElementDistribution), 성격 분석(dominant element + day master 기반 긴 텍스트) |
| `/idol-match` | `IdolMatch.jsx` | 헤더에서 바로 진입 가능("Idol Zone"). 그룹→멤버 선택 → 그 아이돌 본인의 오행/오늘의 운세는 생일 없이도 항상 표시, 내 생일이 있으면 궁합(tier+문구+공유카드)까지 추가 |
| `/partnership` | `Partnership.jsx` | Formspree 제휴 문의 폼 |
| `/guide` | `Guide.jsx` | 사주 vs 별자리 비교, 오행 상생상극 설명, "랜덤 아님" 신뢰 섹션 |
| `/about`, 그 외 | `ComingSoon.jsx` | 미구현 placeholder |

## 5. 콘텐츠 뱅크 (`src/data/`)

- **`fortuneTemplates.js`**: 관계(5종) × 카테고리(5종) = 25 조합 × 5개 문구 = **125개**. `getFortuneLine(lang, relation, category, seed)`로 birthdate+오늘 날짜 해시 기반 선택 → 같은 사람은 하루 동안 같은 문구, 매일 다르게 순환
- **`idolMatchTemplates.js`**: 관계 5종 × 5개 문구 = **25개**. 궁합 tier명 + 문구
- **`sajuProfileTemplates.js`**: 오늘과 무관한 "내 사주" 콘텐츠. dominant element별 성격 프로필(제목+2문단), day master(일간) element별 "진짜 나" 텍스트
- 전부 영어, 캐주얼+팬덤 용어 섞은 톤 통일 (bias, comeback, stream, fancam 등)

## 6. 아이돌 데이터 (`src/data/idols.js`)

- 10개 그룹, 66명: BTS, BLACKPINK, NewJeans, SEVENTEEN, Stray Kids, TWICE, EXO(활동 중인 6명만), TXT, aespa, ATEEZ
- 생일은 **웹 검색으로 개별 교차검증**해서 넣음 (신뢰도 HIGH만 채택)
- EXO는 첸백시 제외(2025-2026 SM 계약 분쟁으로 별도 활동 중), NewJeans는 다니엘 제외(ADOR 소송으로 지위 불확실) — 코드 주석에 사유 명시

## 7. 디자인 시스템

- **`STYLE_GUIDE.md`** (레포 루트): 색상/타이포/스페이싱 토큰, 아이콘 규칙, **"사신도(四神圖) 중심" 브랜드 방향성**을 문서화
- **아이콘**: `public/icons/elements/{wood,fire,earth,metal,water}.png` — 사신도 스타일(청룡/주작/황룡/백호/현무), 사용자가 AI로 생성해서 제공한 실제 에셋. 헤더 로고 옆, 랜딩 배경 텍스처(`FourSymbolsBackdrop.jsx`), 공유카드 워터마크(`ShareCardWatermark.jsx`) 등 브랜드 전반에 확장 적용됨
- **멤버 아바타** (`MemberAvatar.jsx` + `ElementPattern.jsx`): 실사진/AI 합성 얼굴 **절대 사용 안 함** (초상권 리스크 회피, PRD 원문 요구사항). 대신 멤버 본인의 사주 오행을 계산해서 그 오행의 그라디언트+추상 라인 패턴으로 아바타 생성
- **공유카드** (`ShareCard.jsx`, `IdolShareCard.jsx`, 둘 다 `ShareCardFooter.jsx`/`ShareCardWatermark.jsx` 공유): 9:16 PNG, 사이트 URL이 배지 형태로 박혀 있어 바이럴 루프 완성
- **OG 배너**: `public/og-banner.png` — 1200x630, Playwright로 HTML을 직접 렌더링해서 제작한 전용 이미지 (재사용 아이콘 아님)

## 8. 배포/설정

- Cloudflare Pages 빌드 설정: Framework preset None, Build command `npm run build`, Output directory `dist` (Vite 프로젝트라 빌드 스텝 필요 — 처음엔 정적 서빙이었다가 전환함)
- `.claude/settings.json`에 `Bash(npm run build)`, `Bash(npm run dev)`, `PowerShell(git push origin main)` 허용 등록됨 (승인창 감소용)
- **push 정책**: 사용자가 "이제 계속 자동으로 푸쉬해줘"라고 명시적으로 요청함 → 커밋 후 확인 없이 바로 push하는 게 기본 동작임

## 9. 아직 안 한 것 (다음 단계 후보)

- **다국어**: 구조(`react-i18next`, `src/i18n/locales/`)는 준비되어 있으나 영어(`en.json`)만 존재. 스페인어 추가가 우선순위로 논의됐으나 **미착수** (fortuneTemplates.js/idolMatchTemplates.js에도 `es` 블록 추가 필요, 헤더에 언어 토글 UI 필요)
- **리텐션**: 생년월일 localStorage 저장 → 재방문시 자동 채움 — 미착수
- **수익화**: 유료 구독/Stripe 연동 — **실제 Stripe 계정/API 키가 있어야 진행 가능**, 여기서 막힘 (가짜 키로 만들 수 없는 부분)
- **주간 운세 캘린더형 콘텐츠**, **아이돌 궁합 캘린더 연동** — 미착수
- **로그인/히스토리 저장** — 미착수 (PRD상 Could-have)

## 10. 개발 시 주의사항 / 이미 검증된 패턴

- 모든 UI 변경은 Playwright로 실제 브라우저 구동해서 라이트/다크 모드 스크린샷 확인 후 커밋하는 흐름을 계속 써왔음 (콘솔 에러 0건 확인이 기본)
- `getFortuneLine`/`getIdolMatchCopy` 등 문구 뱅크 파일 작성 시 **작은따옴표 문자열 안에 아포스트로피 이스케이프 실수**가 두 번 있었음 — 새 문구 추가할 땐 전부 큰따옴표로 감싸는 걸 권장
- 헤더 네비 항목이 늘어나면 좁은 화면(~480px 이하)에서 2줄로 접히면서 `.page`의 상단 padding과 겹치는 버그가 실제로 있었고 미디어 쿼리로 고쳐둔 상태 — 헤더에 항목 더 추가할 땐 이 부분 재확인 필요
