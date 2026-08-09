import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Set by the GitHub Pages workflow only — the default `vite build` still
// targets Cloudflare via the lovable config's own default preset.
const isGithubPages = process.env.GITHUB_PAGES === "true";

// GitHub Actions sets GITHUB_REPOSITORY to "owner/repo" — derive the Pages
// project-page base path ("/repo/") from it so this doesn't silently break
// if the repo is ever renamed. Falls back to the current repo name for local
// GITHUB_PAGES=true test builds, where that env var isn't set.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "legal-light-glow";

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
  // Project page (not a <user>.github.io root page), so it's served from
  // /<repo>/ rather than the domain root.
  ...(isGithubPages && { vite: { base: `/${repoName}/` } }),
  // Nitro's build targets a live server runtime (Cloudflare Worker, Node,
  // …) — none of which exist on GitHub Pages, so skip it and publish the
  // plain client bundle instead.
  ...(isGithubPages && { nitro: false }),
});
