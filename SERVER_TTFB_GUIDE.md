# Server TTFB guide (custom server)

Your mobile PageSpeed report shows **TTFB ~ 1.2s** (desktop ~0.9s). On a custom server, the fastest way to improve TTFB without touching design or app logic is to tune the reverse proxy + caching + compression.

## 1) Reverse proxy caching (microcache HTML)
If you run **Nginx → Node (Next.js)**, enable a short microcache for the **HTML** response. Even **1–5 seconds** can improve Lighthouse/PSI consistency.

Example (Nginx):

```nginx
# /etc/nginx/conf.d/kogents.conf
proxy_cache_path /var/cache/nginx/next levels=1:2 keys_zone=nextcache:50m
  inactive=60m max_size=2g use_temp_path=off;

map $http_cookie $no_cache {
  default 0;
  ~*preview|auth|session 1;
}

server {
  listen 443 ssl http2;
  server_name kogents.ai www.kogents.ai;

  # gzip/brotli below (section 2)

  location /_next/static/ {
    proxy_pass http://127.0.0.1:3000;
    add_header Cache-Control "public, max-age=31536000, immutable";
  }

  location /assets/ {
    proxy_pass http://127.0.0.1:3000;
    add_header Cache-Control "public, max-age=31536000, immutable";
  }

  location / {
    proxy_cache nextcache;
    proxy_cache_valid 200 301 302 5s;
    proxy_cache_bypass $no_cache;
    proxy_no_cache $no_cache;

    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    # keep-alive upstream
    proxy_set_header Connection "";
  }
}
```

Notes:
- Keep the cache **very short** to avoid serving stale HTML if you have dynamic pages.
- Exclude preview/auth/session traffic from caching.

## 2) Compression (Brotli preferred, gzip OK)
Enable **Brotli** for text assets (HTML, CSS, JS, JSON, SVG).

Example:

```nginx
gzip on;
gzip_comp_level 5;
gzip_types text/plain text/css application/javascript application/json image/svg+xml;

# If brotli module is available:
brotli on;
brotli_comp_level 5;
brotli_types text/plain text/css application/javascript application/json image/svg+xml;
```

## 3) HTTP/2 + TLS
Ensure `http2` is enabled (see config above). This improves multiplexing on mobile networks.

## 4) Node process model (avoid single-thread bottleneck)
Run Next.js in production with a process manager:
- **pm2** in cluster mode (recommended):

```bash
pm2 start npm --name kogents -- start -i max
pm2 save
```

## 5) Upstream keep-alive (Nginx → Node)
Ensure Nginx reuses connections to Node (see `proxy_set_header Connection ""` and `proxy_http_version 1.1`).

## 6) CDN (optional but big win on mobile)
If you can place Cloudflare in front:
- Cache static assets (`/_next/static/*`, `/assets/*`) aggressively (already done).
- Consider **Cache Rules** for HTML with very short TTL if safe.

## Verify
- Re-run PageSpeed Insights after deploying Nginx changes.
- In Chrome DevTools → Network, verify `ttfb` drops and `content-encoding: br` (or gzip) is present.

