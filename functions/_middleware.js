import enLocale from '../src/i18n/locales/en.json';
import koLocale from '../src/i18n/locales/ko.json';

// Routes whose query params fully describe a specific result (birthdate,
// match, compatibility pair, ...) rather than just the bare landing state
// for that feature. Bare visits (no query params) fall straight through to
// the static index.html — no reason to touch those.
const RESULT_PATHS = new Set(['/result', '/saju', '/compatibility', '/idol-match', '/drama-match', '/romance']);

function buildMeta({ pathname, lang, element, name, score, tier }) {
  const locale = lang === 'ko' ? koLocale : enLocale;
  const appName = locale.app.name;
  const elementLabel = element ? locale.elements[element] : null;

  if (pathname === '/saju') {
    const title = tier
      ? `${tier} — ${appName}`
      : lang === 'ko'
      ? `내 사주: ${elementLabel} — ${appName}`
      : `My Saju: ${elementLabel} — ${appName}`;
    const description =
      lang === 'ko'
        ? `${elementLabel} 기운을 가진 사람의 사주 프로필을 확인해보세요.`
        : `See what a ${elementLabel}-dominant saju chart looks like.`;
    return { title, description };
  }

  if (pathname === '/result') {
    const title =
      lang === 'ko' ? `오늘의 오행 운세: ${elementLabel} — ${appName}` : `Today's Ohaeng fortune: ${elementLabel} — ${appName}`;
    const description =
      lang === 'ko' ? `${elementLabel} 기운으로 보는 오늘의 운세를 확인해보세요.` : `See today's fortune through ${elementLabel} energy.`;
    return { title, description };
  }

  // /compatibility, /idol-match, /drama-match, /romance — all share the
  // same name+score+tier shape.
  const scoreText = score ? `${score}%` : '';
  const title =
    name && scoreText
      ? lang === 'ko'
        ? `${name} 궁합 결과 ${scoreText} — ${appName}`
        : `${scoreText} match with ${name} — ${appName}`
      : appName;
  const description = tier || (lang === 'ko' ? '내 오행 궁합을 확인해보세요.' : 'Check your Five Element compatibility.');
  return { title, description };
}

class MetaRewriter {
  constructor(title, description, imageUrl, pageUrl) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.pageUrl = pageUrl;
  }

  element(el) {
    const property = el.getAttribute('property');
    const name = el.getAttribute('name');

    if (property === 'og:title' || name === 'twitter:title') el.setAttribute('content', this.title);
    else if (property === 'og:description' || name === 'twitter:description') el.setAttribute('content', this.description);
    else if (property === 'og:image' || name === 'twitter:image') el.setAttribute('content', this.imageUrl);
    else if (property === 'og:url') el.setAttribute('content', this.pageUrl);
  }
}

class TitleRewriter {
  constructor(title) {
    this.title = title;
  }

  element(el) {
    el.setInnerContent(this.title);
  }
}

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  if (!RESULT_PATHS.has(url.pathname) || [...url.searchParams.keys()].length === 0) {
    return next();
  }

  const response = await next();
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) return response;

  const params = url.searchParams;
  const lang = params.get('lang') === 'ko' ? 'ko' : 'en';
  const { title, description } = buildMeta({
    pathname: url.pathname,
    lang,
    element: params.get('element'),
    name: params.get('name'),
    score: params.get('score'),
    tier: params.get('tier'),
  });
  const imageUrl = `${url.origin}/og-image.png?${params.toString()}`;

  return new HTMLRewriter()
    .on('title', new TitleRewriter(title))
    .on('meta', new MetaRewriter(title, description, imageUrl, url.toString()))
    .transform(response);
}
