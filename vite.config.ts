import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Set by the GitHub Pages workflow only — the default `vite build` still
// targets Cloudflare via the lovable config's own default preset.
const isGithubPages = process.env.GITHUB_PAGES === "true";

// The site is served from the custom domain alkanupursingh.com (see
// public/CNAME), so Pages serves it at the domain root rather than under
// /<repo>/ — the base path is plain "/".
const basePath = "/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR
    // error wrapper) — only for the Cloudflare Worker build. The static GitHub
    // Pages build has no live server to wrap, and this Worker-shaped entry
    // (fetch(request, env, ctx)) breaks Nitro's static prerender bundling.
    ...(!isGithubPages && { server: { entry: "server" } }),
    // GitHub Pages has no live server, so full SSR prerendering is off the
    // table. Nitro's own "static"/"github-pages" presets turned out to be
    // broken for this TanStack Start + Nitro version pairing (the prerender
    // crawler 404s on every route). TanStack Start's own SPA mode sidesteps
    // that entirely: it prerenders one static loading shell and the
    // client-side router takes over from there — this app has no
    // server-only data dependencies, so pure CSR is a fine fit.
    ...(isGithubPages && { spa: { enabled: true } }),
  },
  ...(isGithubPages && { vite: { base: basePath } }),
  // Nitro's build targets a live server runtime (Cloudflare Worker, Node,
  // …) — none of which exist on GitHub Pages, so skip it and publish the
  // plain client bundle instead.
  ...(isGithubPages && { nitro: false }),
});
