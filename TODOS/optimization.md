# TODO: Project Optimization — central checklist

Goal: Centralize all optimization tasks and policies for the project. Focus areas: cache policies, per-PR Web Vitals, webpack chunk-splitting, and library/bundle optimization.

## High-level checklist
- [ ] Define cache policies & CDN strategy
- [ ] Add automated Web Vitals measurement on every PR
- [ ] Enforce bundle size and performance budgets in CI
- [ ] Implement webpack code-splitting & runtime optimizations
- [ ] Audit and optimize third-party libraries
- [ ] Add bundle analysis to developer workflow
- [ ] Monitor and iterate on real-user metrics in staging/production

## Cache policies
- Static assets (build output):
  - Use content-hash filenames (already done by most build tools).
  - Serve with Cache-Control: public, max-age=31536000, immutable.
- HTML / index.html:
  - Cache-Control: no-cache or must-revalidate (so client checks for new index.html).
- API responses:
  - Set proper Cache-Control depending on data freshness (e.g., short max-age for dynamic data, longer for rarely changing resources).
  - Use ETag / Last-Modified for conditional requests.
- CDN:
  - Put all static assets behind CDN (invalidate by filename hash).
  - Prefer cache purging by path only when necessary.
- Service Worker:
  - Optional: use SW for offline caching of shell & critical assets; ensure update flow not to serve stale JS when deploying.
- Local dev tips:
  - Use cache-busting on debug builds; simulate cache headers with local server.

Commands / tools:
- Verify headers: curl -I https://your-cdn/path/file.js
- Purge CDN via provider CLI / API.

## Web Vitals per Pull Request
- Metrics to capture for each PR:
  - LCP (Largest Contentful Paint)
  - INP (or FID if legacy) — responsiveness
  - CLS (Cumulative Layout Shift)
  - TTFB (Time to First Byte) — server perf
  - First Contentful Paint (FCP)
- Approach:
  - Run Lighthouse CI against a deployed preview/staging URL created by the PR (Netlify, Vercel, or CI preview).
  - Or run headless Lighthouse on a canonical set of pages changed by the PR.
  - Optionally, instrument client with web-vitals (npm package) in staging to capture real-user sessions.
- CI integration:
  - Use lighthouse-ci or Google Chrome Lighthouse Action, publish results and fail PR if budgets exceeded.
  - Post a comment on PR with metrics and diffs.
- Example thresholds (start strict, relax per team decision):
  - LCP < 2.5s
  - INP < 200ms
  - CLS < 0.1
  - TTFB < 600ms
- Tools to install:
  - npm i -D @lhci/cli web-vitals
- Example GitHub Action (high-level):
  - 1) Deploy preview
  - 2) Run LHCI against preview URL
  - 3) Upload report & comment PR
  - 4) Fail if budgets exceeded

## Webpack / Build splitting & runtime
- Goals:
  - Separate vendor code from app code
  - Create small route-level bundles via dynamic imports
  - Keep runtime chunk stable to enable long-term caching
- Recommendations:
  - Use dynamic import() for routes and heavy components.
  - Enable splitChunks for vendors and commons.
  - Set runtimeChunk: 'single' to separate webpack runtime.
  - Use filename with contenthash for long-term caching.

- Use webpack-bundle-analyzer and source-map-explorer to inspect bundles.
- Consider HTTP/2 multiplexing and server push impacts (rarely needed with proper splitting).

## Library & dependency optimization
- Audit:
  - Run bundle analyzer and `npm ls` to find large packages.
  - Check duplicates: dedupe or lock versions.
- Replace heavy libs:
  - moment -> date-fns or Day.js
  - lodash -> lodash-es or import specific functions (lodash-es for tree-shaking)
  - big UI libraries -> minimal components or split imports
- Enable tree-shaking:
  - Use ES module builds; ensure package.json "module" field used by bundler.
  - Set "sideEffects": false for own packages if safe.
- Use lighter alternatives or defer loading:
  - Dynamically import heavy libs where used.
  - Vendor chunk for rarely-changing libs.
- Keep dependencies up-to-date and remove unused ones (depcheck).

Commands / tools:
- npm i -D webpack-bundle-analyzer source-map-explorer depcheck
- npx source-map-explorer build/static/js/*.js
- npx webpack-bundle-analyzer dist/stats.json

## CI checks & PR checklist
- On every PR:
  - [ ] Deploy preview to a staging/preview URL automatically.
  - [ ] Run Lighthouse CI against relevant pages and post metrics to PR.
  - [ ] Generate bundle analysis snapshot and post top 10 largest modules.
  - [ ] Fail PR or add warning if critical budgets exceeded (configurable).
  - [ ] Reviewer verifies usage of dynamic imports / no regressions in vendor chunk size.
- PR comment template should include:
  - Lighthouse scores (LCP, INP, CLS, FCP, TTFB) + diff vs base branch
  - Bundle size summary (total, vendor chunk, top 5 modules)
  - Cache header verification for key assets (optional)

## Monitoring & production
- Add Real User Monitoring (RUM) if feasible:
  - Use web-vitals + analytics or a RUM provider to capture LCP/CLS/INP in prod.
  - Keep historical baselines and alerts.
- Track errors & performance regressions in Sentry / Datadog.

## Quick commands (Linux)
- Install tools:
  - npm install -D @lhci/cli webpack-bundle-analyzer source-map-explorer depcheck
- Run bundle analyzer:
  - npx source-map-explorer build/static/js/*.js
  - npx webpack-bundle-analyzer dist/stats.json
- Run Lighthouse CI:
  - npx lhci autorun --upload.target=temporary-public-storage
- Analyze dependencies:
  - npx depcheck
