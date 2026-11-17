
## Cloudflare publishing

Production uses native Cloudflare Git builds from `gh-pages`. Run `npm ci`
and `npm run check:deploy` to validate the explicit public assets directory.
Build with `npm run build` and deploy with `npm run deploy`. Cloudflare holds
deployment credentials; the original Pages branch and source history remain
recovery sources. The revision is at `/.well-known/cloudflare-build.json`.

## License

Original project code and documentation are licensed under the
[Apache License 2.0](LICENSE). Third-party dependencies, source excerpts,
assets, and other third-party material retain their respective licenses and
copyright notices; this grant does not relicense that material.

The provenance of `meditate.jpg` and `meditate.svg` has not been established;
those images are excluded from this Apache license grant.
