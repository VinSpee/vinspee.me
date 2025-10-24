import { resolve } from 'path';
import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { staticAdapter } from '@builder.io/qwik-city/adapters/static/vite';

const styledSystemPath = resolve(__dirname, 'styled-system');
const isServerBuild = process.env.QWIK_BUILD === 'ssr';
const deploymentOrigin = process.env.ORIGIN ?? process.env.URL ?? 'https://vinspee.me';

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      staticAdapter({
        origin: deploymentOrigin,
      }),
    ],
    publicDir: 'static',
    resolve: {
      alias: [
        { find: /^styled-system\/?$/, replacement: `${styledSystemPath}/index` },
        { find: /^styled-system\/(.*)$/, replacement: `${styledSystemPath}/$1` },
      ],
    },
    server: {
      port: 5173,
    },
    preview: {
      port: 4173,
    },
    build: {
      outDir: isServerBuild ? 'dist/server' : 'dist',
      rollupOptions: isServerBuild
        ? {
            input: [resolve(__dirname, 'src/entry.ssr.tsx'), '@qwik-city-plan'],
          }
        : undefined,
    },
    ssr: isServerBuild
      ? {
          noExternal: true,
        }
      : undefined,
  };
});
