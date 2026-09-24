# OfflineNotes — Real-World Project Guide

A bilingual (English / ไทย) step-by-step guide that teaches you to build **OfflineNotes**, a local-first markdown notes app — fully offline via IndexedDB and a Service Worker, with a Rust→WASM CRDT engine that merges concurrent edits conflict-free and a thin sync server for cross-device sync.

It is project **#6** of the Learn Hub [Real-World Projects](https://projects.avetavos.com/taskflow/en/introduction/roadmap/) series — each project rebuilds a real application while adapting a different slice of the Learn Hub courses.

**Live:** https://projects.avetavos.com/offlinenotes/en/

## What you build

| Layer | Tech |
|-------|------|
| UI | TypeScript · Web Components · Astro app shell |
| Storage | IndexedDB (notes, ops, outbox) · Service Worker cache |
| CRDT | Rust · wasm-bindgen · wasm-pack · LWW register + RGA sequence |
| Sync | Hono sync server · push/pull of ops · Background Sync with an online fallback |
| Testing | cargo test + wasm-bindgen-test convergence tests |
| Runtime | static host for the app · Cloudflare Worker + Durable Object for sync |

Features: an installable PWA that works fully offline, a two-pane notes UI built from custom elements, a Rust CRDT compiled to WASM that merges divergent edits deterministically, snapshots and op logs in IndexedDB, and push/pull sync that catches up when the device is back online.

## The guide itself

This repo is an [Astro Starlight](https://starlight.astro.build/) site. The lessons live in `src/content/docs/en/**` and `src/content/docs/th/**`, grouped into 15 modules (app-shell → background-sync → crdt-rust → deployment → indexeddb → introduction → merge-practice → notes-ui → push-pull → service-worker → setup → sync-server → wasm-toolchain → wiring-wasm → wrap-up). Each lesson follows the same shape: *what we're building → why → pros & cons → build it → verify → recap*, with full copy-pasteable code. Every code block is byte-identical between the two languages (`npm run check` enforces it), and the project has been assembled from the lessons and built/run end to end as part of review.

## Run the guide locally

```bash
npm install
npm run dev      # http://localhost:4321/offlinenotes/
npm run build    # static build to dist/
npm run check    # EN/TH parity check
```

## Deployment

Static site (`output: 'static'`, `base: '/offlinenotes'`) served by its own Cloudflare Worker at `projects.avetavos.com/offlinenotes/*`. `npm run deploy` builds, stages `dist/` under `.cf-assets/offlinenotes/` and runs `wrangler deploy`; the whole series can be redeployed with `learn-hub/tools/deploy-realworld.sh`.
