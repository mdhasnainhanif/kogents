// app/blog-sitemap.xml/route.ts
const SITE = "https://kogents.ai";

export const runtime = "edge";

// Paste your raw links exactly as provided
const RAW_LINKS = `
https://kogents.ai/blogs/ai-health-assistants/
https://kogents.ai/blogs/automated-patient-intake/
https://kogents.ai/blogs/virtual-nursing-assistant/
https://kogents.ai/blogs/agentic-ai-in-customer-experience/
https://kogents.ai/blogs/ai-agents-in-customer-support-challenges/
https://kogents.ai/blogs/ai-agents-for-customer-support-in-debt-collection/
https://kogents.ai/blogs/ai-conversational-agents-for-dealership-customer-service/
https://kogents.ai/blogs/how-ai-agents-work/
https://kogents.ai/blogs/artificial-intelligence-crm/
https://kogents.ai/blogs/whatsapp-crm-integration/
https://kogents.ai/blogs/how-ai-is-changing-marketing/
https://kogents.ai/blogs/ai-in-marketing/
https://kogents.ai/blogs/ai-in-marketing/
https://kogents.ai/blogs/ai-for-students/
https://kogents.ai/blogs/artificial-intelligence-dashboard/
https://kogents.ai/blogs/automated-grading-system/
https://kogents.ai/blogs/ai-for-teachers/
https://kogents.ai/blogs/ai-vs-machine-learning/
https://kogents.ai/blogs/ai-tutoring-for-students/
https://kogents.ai/blogs/mental-health-ai/
https://kogents.ai/blogs/ai-doctor-diagnosis/
https://kogents.ai/blogs/hipaa-compliant-ai/
https://kogents.ai/blogs/remote-health-monitoring/
https://kogents.ai/blogs/ai-patient-scheduling/
https://kogents.ai/blogs/improve-customer-interactions/
`.trim();

function normalize(url: string): string | null {
  try {
    const u = new URL(url.trim());
    if (!u.hostname.endsWith("kogents.ai")) return null;
    if (!u.pathname.startsWith("/blogs/")) return null;
    // force trailing slash, strip fragments
    u.hash = "";
    if (!u.pathname.endsWith("/")) u.pathname += "/";
    return u.origin + u.pathname + (u.search || "");
  } catch {
    return null;
  }
}

function xmlEscape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildXml(urls: string[]): string {
  const body = urls
    .map(
      (u) => `
  <url>
    <loc>${xmlEscape(u)}</loc>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}
</urlset>`;
}

export async function GET() {
  // keep input order but drop duplicates after normalizing
  const seen = new Set<string>();
  const ordered: string[] = [];

  for (const line of RAW_LINKS.split(/\r?\n/)) {
    const cleaned = normalize(line);
    if (!cleaned) continue;
    if (!seen.has(cleaned)) {
      seen.add(cleaned);
      ordered.push(cleaned);
    }
  }

  const xml = buildXml(ordered);

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, max-age=86400",
    },
  });
}
