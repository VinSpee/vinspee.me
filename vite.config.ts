import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      staticAdapter({
        // You can set your production origin to generate absolute URLs
        // origin: 'https://vinspee.me',
      }),
    ],
    publicDir: 'static',
    server: {
      port: 5173,
    },
    preview: {
      port: 4173,
    },
    build: {
      outDir: 'dist',
    },
  };
});
