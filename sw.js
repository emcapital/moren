const CACHE_NAME = 'moren-v1';
const ASSETS = [
  '/',
  '/index.html',
  './components/receipt.html',
  './components/warranty.html',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});