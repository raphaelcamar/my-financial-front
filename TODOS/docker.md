# TODO: Dockerfile & docker-compose — step-by-step optimization

Goal: Update Dockerfile(s) and docker-compose setup to follow best practices and produce optimized, secure, cache-friendly images for both SPA and SSR scenarios. Provide dev / prod recipes, caching tips, and safety checks.

## Quick checklist
- [ ] Add .dockerignore
- [ ] Convert to multi-stage builds
- [ ] Pin base images and use smaller images (alpine / slim / nginx)
- [ ] Use npm ci / yarn --frozen-lockfile and copy package*.json first to leverage cache
- [ ] Create non-root runtime user
- [ ] Add HEALTHCHECK and labels
- [ ] Use buildkit cache mounts for faster CI builds
- [ ] Provide separate compose files for dev and prod (or profiles)
- [ ] Add resource limits, restart policy, networks, and secrets handling
- [ ] Scan images (Trivy) and enable multi-arch build if needed

## Preparation
1. Add .dockerignore (root):
   - node_modules
   - build
   - dist
   - .git
   - .env.local
   - .DS_Store
2. Enable Docker BuildKit in CI and locally:
   - export DOCKER_BUILDKIT=1
   - In GitHub Actions / CI set DOCKER_BUILDKIT=1

## Recommended Production Dockerfile — SPA (served by nginx)
Use multi-stage: build with Node, serve with nginx static image.