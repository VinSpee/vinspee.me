/// <reference lib="WebWorker" />

import { setupServiceWorker } from '@builder.io/qwik-city/service-worker';

declare const self: ServiceWorkerGlobalScope;

setupServiceWorker();

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

export {};
