
## Cloudflare publishing

Production uses native Cloudflare Git builds from `gh-pages`. Run `npm ci`
and `npm run check:deploy` to validate the explicit public assets directory.
Build with `npm run build` and deploy with `npm run deploy`. Cloudflare holds
deployment credentials; the original Pages branch and source history remain
recovery sources. The revision is at `/.well-known/cloudflare-build.json`.
