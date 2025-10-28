# TODO: Upgrade to React 19 — step-by-step

Goal: Safely upgrade the project to React 19, enable native SSR usage, and prepare the codebase for microfrontends via Module Federation. Preserve stability, CI checks, and rollout/rollback paths.

## High-level plan
- [ ] Audit current code & dependencies
- [ ] Create safety branch + CI preview environement
- [ ] Bump React & React DOM to v19 in a single PR with tests
- [ ] Migrate client hydration & server-rendering code to React 19 patterns
- [ ] Add Module Federation readiness (webpack configuration + shared React)
- [ ] Gradual rollout to staging, monitor RUM, then production

## Prerequisites
- Ensure Node version meets React 19 requirements (upgrade Node if needed).
- Lock current working state: create branch and a reproducible build artifact.
- Ensure all important libraries (router, SSR frameworks, state managers) are compatible or have upgrade paths.

## Pre-upgrade checks
- List direct and transitive React usages:
  - grep -R --line-number "react" src || true
  - npm ls react react-dom || true
- Run dependency health checks:
  - npx depcheck
  - npx npm-check-updates -u  (optional for review)
- Create CI job that deploys PR previews and runs automated performance checks.

## Upgrade steps (safe, minimal PR)
1. Create branch: git checkout -b upgrade/react-19
2. Update packages:
   - npm install react@^19 react-dom@^19
   - or with yarn/pnpm: yarn add react@^19 react-dom@^19
3. Run static checks and tests:
   - npm run lint && npm test
4. Fix compile/runtime issues from type/peer mismatches (update @types/react, SSR libs, router, etc.)

Commands (Linux):
- npm install react@^19 react-dom@^19
- npm i -D @types/react @types/react-dom  (if using TypeScript)

## Client-side migration notes
- Replace deprecated hydration APIs according to React 19 migration docs:
  - Update entry where you mount the app to use the recommended React 19 client API (follow official migration guide).
- Ensure StrictMode, concurrent features, and any new concurrency APIs are opt-in and tested carefully.
- Where components depended on lifecycle behaviors, re-test for concurrent rendering assumptions.

## Server-side / SSR migration
- Update server bundle and SSR renderer to use React 19 server APIs and streaming SSR if available.
- Steps:
  - Update server rendering entrypoint to React 19 server render API (follow official docs).
  - Ensure server output uses appropriate streaming or non-streaming fallback depending on hosting constraints.
  - Validate headers and caching strategies for SSR (see optimization.md cache policies).
- Test:
  - Compare HTML output vs previous version for critical pages.
  - Validate hydration on client preview; check for mismatches logged by React.

## Module Federation & microfrontend readiness
- Add/adjust webpack configuration to support Module Federation and share React as a singleton to avoid duplicate React instances.

- Ensure remote and host both share compatible React versions and mark react/react-dom as singleton.
- Consider output.module and experiments.outputModule if using native ESM federation (check webpack & Node support).

## Dependency & library considerations
- Audit heavy or React-integrated libs (UI libs, router, state management) and upgrade them first if necessary.
- Prefer libraries that support SSR and concurrent rendering.
- For state libraries or context-heavy modules, verify hydration correctness.

## Testing & CI
- Add these CI steps to the PR pipeline:
  - Build server and client bundles with React 19.
  - Deploy preview and run automated end-to-end tests.
  - Run Lighthouse CI / Web Vitals capture on preview and fail if budgets are violated.
  - Bundle analysis: run webpack-bundle-analyzer and post top offenders.
- Add a smoke test script that asserts SSR HTML renders and client hydrates without errors.

## Rollback plan
- Keep previous build artifacts and a clear rollback process:
  - Tag current production commit before upgrade.
  - If severe regressions appear, revert PR and redeploy previous release.
- Log clear revert steps in the PR description.

## Checklist (quick)
- [ ] Create upgrade branch & CI preview
- [ ] Upgrade react & react-dom packages
- [ ] Upgrade related libs and types
- [ ] Migrate client mount/hydration code
- [ ] Migrate SSR server renderer
- [ ] Add Module Federation shared config with react singleton
- [ ] Run unit, e2e, and performance tests
- [ ] Deploy to staging, monitor RUM, then production

## References & notes
- Follow the official React 19 migration guide and release notes for exact API changes.
- Keep PRs small and focused; prefer multiple incremental PRs if many changes are required.
- Coordinate with infra team for SSR hosting and Module Federation distribution (CDN, CORS, caching).