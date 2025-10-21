// URL redirect configuration
export const redirects = new Map([
  // Old URLs -> New URLs (301 Permanent Redirects)
  ['/pricing/', '/'],
  ['/imprint/', '/'],
  ['/platfroms/jira-ai-integration/', '/platforms/jira-ai-integration/'],
  ['/platfroms/zendesk-ai-integration/', '/platforms/zendesk-ai-integration/'],
  ['/platfroms/ai-agent-for-messenger/', '/platforms/ai-agent-for-messenger/'],
  ['/solutions/feedback-ai-agent/', '/solutions/'],
  ['/api/', '/'],
  ['/platfroms/instagram-agent-ai/', '/platforms/instagram-agent-ai/'],
  ['/status/', '/'],
  ['/agentic-insights/', '/'],
  ['/use-cases/', '/case-studies/'],
  ['/solutions/application-ai-agent/', '/solutions/'],
  ['/platfroms/shopify-ai-agent/', '/platforms/shopify-ai-agent/'],
  ['/documentation/', '/'],
  ['/data-protection/', '/'],
  ['/request-demo/', '/'],
  ['/platfroms/slack-ai-agent/', '/platforms/slack-ai-agent/'],
  ['/platforms/openai/', '/'],
  ['/platforms/anthropic/', '/'],
  ['/platforms/hugging-face/', '/'],
  ['/platforms/whatsapp-agent/', '/platforms/whatsapp-ai-agent/'],
  ['/platforms/instagram-agent/', '/platforms/instagram-agent-ai/'],
  ['/platforms/ai-line-agent/', '/platforms/line-ai-agent/'],
  ['/platforms/ai-zendesk-agent/', '/platforms/zendesk-ai-integration/'],
]);

// Function to get redirect URL
export function getRedirectUrl(pathname: string): string | null {
  // Check exact match first
  if (redirects.has(pathname)) {
    return redirects.get(pathname)!;
  }
  
  // Check without trailing slash
  const pathWithoutSlash = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  if (redirects.has(pathWithoutSlash)) {
    return redirects.get(pathWithoutSlash)!;
  }
  
  return null;
}
