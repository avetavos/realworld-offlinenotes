// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://projects.avetavos.com',
  base: '/offlinenotes',
  output: 'static',
  integrations: [starlight({
    title: 'OfflineNotes — Real-World Project',
    head: [
      { tag: 'script', attrs: { type: 'module', src: '/offlinenotes/mermaid-init.js' } },
      { tag: 'link', attrs: { rel: 'manifest', href: '/offlinenotes/manifest.webmanifest' } },
      { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/offlinenotes/apple-touch-icon.png' } },
      { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/offlinenotes/icon-192.png' } },
      { tag: 'meta', attrs: { name: 'theme-color', content: '#0D9488' } },
    ],
    defaultLocale: 'en',
    locales: {
      en: { label: 'English', lang: 'en' },
      th: { label: 'ไทย', lang: 'th' },
    },
    customCss: ['./src/styles/custom.css'],
    social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/avetavos/realworld-offlinenotes' }],
    sidebar: [
      { label: 'Introduction', items: [{ autogenerate: { directory: 'introduction' } }] },
      { label: '1 · Setup & Tooling', items: [{ autogenerate: { directory: 'setup' } }] },
      { label: '2 · App Shell', items: [{ autogenerate: { directory: 'app-shell' } }] },
      { label: '3 · IndexedDB Foundation', items: [{ autogenerate: { directory: 'indexeddb' } }] },
      { label: '4 · The Notes UI', items: [{ autogenerate: { directory: 'notes-ui' } }] },
      { label: '5 · Rust → WASM Toolchain', items: [{ autogenerate: { directory: 'wasm-toolchain' } }] },
      { label: '6 · A CRDT in Rust', items: [{ autogenerate: { directory: 'crdt-rust' } }] },
      { label: '7 · Wiring the WASM Core', items: [{ autogenerate: { directory: 'wiring-wasm' } }] },
      { label: '8 · Service Worker (Offline)', items: [{ autogenerate: { directory: 'service-worker' } }] },
      { label: '9 · The Sync Server', items: [{ autogenerate: { directory: 'sync-server' } }] },
      { label: '10 · Push & Pull Sync', items: [{ autogenerate: { directory: 'push-pull' } }] },
      { label: '11 · Background Sync', items: [{ autogenerate: { directory: 'background-sync' } }] },
      { label: '12 · Conflict-free Merge', items: [{ autogenerate: { directory: 'merge-practice' } }] },
      { label: '13 · Deployment', items: [{ autogenerate: { directory: 'deployment' } }] },
      { label: '14 · Wrap-up', items: [{ autogenerate: { directory: 'wrap-up' } }] },
    ],
  }), preact()],
});
