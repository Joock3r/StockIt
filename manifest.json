const CACHE_NAME = 'stockit-shell-v5';
const APP_SHELL = [
  './index.html',
  './assets/stockit.css',
  './assets/icons.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME && (key.startsWith('stockit-shell-') || key === 'shopping-app-shell-v1')).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const scope = new URL(self.registration.scope);
  if (event.request.method !== 'GET' || url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;
  const key = event.request.mode === 'navigate' ? new URL('./index.html', scope).href : event.request;
  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(key);
      if (cached) return cached;
      const response = await fetch(event.request);
      if (response.ok) await cache.put(key, response.clone());
      return response;
    })
  );
});
