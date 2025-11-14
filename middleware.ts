import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Build a map of path -> destination (paths only; protocol/host are added dynamically)
const redirects = new Map<string, string>([
  // ==== YOUR EXISTING ENTRIES (unchanged) ====
  ['/pricing', '/'],
  ['/pricing/', '/'],
  ['/imprint', '/'],
  ['/imprint/', '/'],
  // API routes should not be redirected
  // ['/api', '/'],
  // ['/api/', '/'],
  ['/status', '/'],
  ['/status/', '/'],
  ['/agentic-insights', '/'],
  ['/agentic-insights/', '/'],
  ['/documentation', '/'],
  ['/documentation/', '/'],
  ['/request-demo', '/'],
  ['/request-demo/', '/'],
  ['/data-protection', '/'],
  ['/data-protection/', '/'],

  // Use cases
  ['/use-cases', '/case-studies/'],
  ['/use-cases/', '/case-studies/'],

  // Platform typos
  ['/platfroms', '/platforms/'],
  ['/platfroms/', '/platforms/'],
  ['/platfroms/jira-ai-integration', '/platforms/jira-ai-integration/'],
  ['/platfroms/jira-ai-integration/', '/platforms/jira-ai-integration/'],
  ['/platfroms/zendesk-ai-integration', '/platforms/zendesk-ai-integration/'],
  ['/platfroms/zendesk-ai-integration/', '/platforms/zendesk-ai-integration/'],
  ['/platfroms/ai-agent-for-messenger', '/platforms/ai-agent-for-messenger/'],
  ['/platfroms/ai-agent-for-messenger/', '/platforms/ai-agent-for-messenger/'],
  ['/platfroms/shopify-ai-agent', '/platforms/shopify-ai-agent/'],
  ['/platfroms/shopify-ai-agent/', '/platforms/shopify-ai-agent/'],
  ['/platfroms/slack-ai-agent', '/platforms/slack-ai-agent/'],
  ['/platfroms/slack-ai-agent/', '/platforms/slack-ai-agent/'],

  // Platform redirects
  ['/platforms/openai', '/'],
  ['/platforms/openai/', '/'],
  ['/platforms/anthropic', '/'],
  ['/platforms/anthropic/', '/'],
  ['/platforms/hugging-face', '/'],
  ['/platforms/hugging-face/', '/'],
  ['/platforms/whatsapp-agent', '/platforms/whatsapp-ai-agent/'],
  ['/platforms/whatsapp-agent/', '/platforms/whatsapp-ai-agent/'],
  ['/platforms/ai-line-agent', '/platforms/line-ai-agent/'],
  ['/platforms/ai-line-agent/', '/platforms/line-ai-agent/'],
  ['/platforms/ai-zendesk-agent', '/platforms/zendesk-ai-integration/'],
  ['/platforms/ai-zendesk-agent/', '/platforms/zendesk-ai-integration/'],

  // Add these new lines:
  ['/platforms/instagram-agent-ai', '/platforms/instagram-ai-agent/'],
  ['/platforms/instagram-agent-ai/', '/platforms/instagram-ai-agent/'],

// Solutions group (existing)

  // Solutions group (existing)
  ['/solutions/feedback-ai-agent', '/solutions/'],
  ['/solutions/feedback-ai-agent/', '/solutions/'],
  ['/solutions/application-ai-agent', '/solutions/'],
  ['/solutions/application-ai-agent/', '/solutions/'],

  // Policy
  ['/refuned-policy', '/refund-policy/'],
  ['/refuned-policy/', '/refund-policy/'],

  // Common typos
  ['/platfrom', '/platforms/'],
  ['/platfrom/', '/platforms/'],
  ['/platform', '/platforms/'],
  ['/platform/', '/platforms/'],
  ['/solution', '/solutions/'],
  ['/solution/', '/solutions/'],
  ['/blog', '/blogs/'],
  ['/blog/', '/blogs/'],
  ['/blogs/how-much-does-it-cost-to-build-an-ai-system-2', '/blogs/how-much-does-it-cost-to-build-an-ai-system'],
  ['/case-study', '/case-studies/'],
  ['/case-study/', '/case-studies/'],
  ['/testimonial', '/client-testimonials/'],
  ['/testimonial/', '/client-testimonials/'],
  ['/about', '/about-us/'],
  ['/about/', '/about-us/'],
  ['/contact', '/contact-us/'],
  ['/contact/', '/contact-us/'],
]);

// === EXPLICIT: Solutions URLs you listed (no slash -> slash) ===
const solutionsNoSlashToSlash = [
  '/solutions',
  '/solutions/ai-agent-for-education',
  '/solutions/healthcare-ai-agent',
  '/solutions/customer-service-ai-agent',
  '/solutions/ai-agent-dashboard',
  '/solutions/ai-agent-for-marketing',
  '/solutions/ai-teacher-assistant',
  '/solutions/ai-agent-for-hr',
  '/solutions/ai-agent-event-planner',
  '/solutions/survey-ai-agent',
];

for (const p of solutionsNoSlashToSlash) {
  const key = p.toLowerCase();
  const val = key.endsWith('/') ? key : `${key}/`;
  redirects.set(key, val);
  // also map the already-with-slash to itself (no redirect loop; just a pass-through later)
  redirects.set(val, val);
}

// ----- helpers -----
function getRedirectUrl(pathname: string): string | null {
  const normalized = pathname.toLowerCase().trim();

  // Exact
  if (redirects.has(normalized)) return redirects.get(normalized)!;

  // Try with trailing slash
  if (!normalized.endsWith('/') && normalized !== '/') {
    const withSlash = `${normalized}/`;
    if (redirects.has(withSlash)) return redirects.get(withSlash)!;
  }

  // Try without trailing slash
  if (normalized.endsWith('/') && normalized !== '/') {
    const noSlash = normalized.slice(0, -1);
    if (redirects.has(noSlash)) return redirects.get(noSlash)!;
  }

  return null;
}

function create301Redirect(fromUrl: URL, destinationPathOrAbs: string): NextResponse {
  // Support absolute or relative destinations; always bind to current origin (localhost safe)
  const target = new URL(destinationPathOrAbs, fromUrl.origin);
  const res = NextResponse.redirect(target, 301);
  res.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  res.headers.set('Location', target.toString());
  return res;
}

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;

  // 0) Let these pass through
  if (
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname === '/404.htm' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets/') ||
    pathname === '/favicon.ico' ||
    pathname.includes('.') // static files
  ) {
    return NextResponse.next();
  }

  // Check for www subdomain and redirect to non-www
  const hostname = req.headers.get('host') || url.hostname;
  if (hostname.startsWith('www.')) {
    const newHost = hostname.replace(/^www\./, '');
    const newUrl = new URL(pathname, `https://${newHost}`);
    newUrl.search = url.search;
    const res = NextResponse.redirect(newUrl.toString(), 301);
    res.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    return res;
  }

  // 1) Force HTTPS first (handles http://... cases you listed)
  const isHttps =
    req.headers.get('x-forwarded-proto') === 'https' ||
    req.headers.get('x-forwarded-ssl') === 'on' ||
    url.protocol === 'https:';

  if (!isHttps) {
    const httpsUrl = new URL(url);
    httpsUrl.protocol = 'https:';
    return create301Redirect(url, httpsUrl.toString());
  }

  // 2) Apply mapping (covers your Solutions no-slash -> slash list)
  const mapped = getRedirectUrl(pathname);
  if (mapped && mapped !== pathname) {
    return create301Redirect(url, mapped);
  }

  // 3) Enforce trailing slash globally (since trailingSlash: true)
  // Skip trailing slash enforcement for API routes
  if (pathname !== '/' && !pathname.endsWith('/') && !pathname.startsWith('/api')) {
    const to = url.clone();
    to.pathname = `${pathname}/`;
    return create301Redirect(url, to.toString());
  }

  // 4) Canonical header with trailing slash
  const res = NextResponse.next();
  res.headers.set('Link', `<${url.origin}${pathname}>; rel="canonical"`);
  return res;
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
