// app/blog-sitemap.xml/route.ts
export const runtime = "edge";
export const dynamic = "force-dynamic";      // never prerender/cache
export const revalidate = 0;                  // no ISR
export const fetchCache = "force-no-store";   // Next.js 14+: all fetches bypass cache

const SITE_BLOG_BASE = "https://kogents.ai/blogs/";
const WP_API = "https://portal.kogents.ai/wp-json/wp/v2/posts";

function cb() {
  // cache-bust value per request
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

/** Always-fresh WP slug fetcher with pagination + cache-busting */
async function fetchAllSlugs(): Promise<string[]> {
  const perPage = 100;

  const mkUrl = (page: number) =>
    `${WP_API}?per_page=${perPage}&page=${page}&_fields=slug,status&_cb=${cb()}`;

  const fetchOpts: RequestInit = {
    cache: "no-store",
    // Extra belt & suspenders for some proxies
    headers: {
      "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate",
      Pragma: "no-cache",
    },
    next: { revalidate: 0 },
  };

  const firstRes = await fetch(mkUrl(1), fetchOpts);
  if (!firstRes.ok) {
    throw new Error(`WP API failed (page 1): ${firstRes.status} ${firstRes.statusText}`);
  }

  const totalPages = Number(firstRes.headers.get("X-WP-TotalPages") || "1");
  const slugs: string[] = [];

  const addSlugs = async (res: Response) => {
    const items: Array<{ slug: string; status?: string }> = await res.json();
    for (const it of items) {
      if (!it?.slug) continue;
      if (it?.status && it.status !== "publish") continue;
      slugs.push(String(it.slug).trim());
    }
  };

  await addSlugs(firstRes);

  const tasks: Promise<void>[] = [];
  for (let page = 2; page <= totalPages; page++) {
    tasks.push(
      fetch(mkUrl(page), fetchOpts).then((r) => {
        if (!r.ok) throw new Error(`WP API failed (page ${page}): ${r.status} ${r.statusText}`);
        return addSlugs(r);
      })
    );
  }
  if (tasks.length) await Promise.all(tasks);

  // de-dupe keep-order
  const seen = new Set<string>();
  const ordered: string[] = [];
  for (const s of slugs) {
    const norm = s.replace(/^\/+|\/+$/g, "");
    if (norm && !seen.has(norm)) {
      seen.add(norm);
      ordered.push(norm);
    }
  }
  return ordered;
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
  try {
    const slugs = await fetchAllSlugs();
    const urls = slugs.map((slug) => `${SITE_BLOG_BASE}${slug.replace(/^\/+|\/+$/g, "")}/`);
    const xml = buildXml(urls);

    return new Response(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        // Kill all downstream caching (browser + proxies + Vercel CDN)
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0, private",
        Pragma: "no-cache",
        Expires: "0",
        "CDN-Cache-Control": "no-store",
        "Vercel-CDN-Cache-Control": "no-store",
        Vary: "*",
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?><error>${xmlEscape(message)}</error>`,
      {
        status: 500,
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0, private",
          Pragma: "no-cache",
          Expires: "0",
          "CDN-Cache-Control": "no-store",
          "Vercel-CDN-Cache-Control": "no-store",
          Vary: "*",
        },
      }
    );
  }
}
