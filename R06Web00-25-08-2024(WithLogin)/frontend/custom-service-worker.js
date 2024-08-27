self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.webmanifest',
          '/vite.svg',
          // Add other assets you want to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  // src/custom-service-worker.js
import { precacheAndRoute } from 'workbox-precaching';

// Inject precache manifest
precacheAndRoute(self.__WB_MANIFEST);
