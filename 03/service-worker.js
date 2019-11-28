// https://qiita.com/OMOIKANESAN/items/5b23fa8ea9ea0d181df5

let CACHE_NAME = 'cache-v4';
let urlsToCache = [
  './',
  './index.html',
  './css/index.css',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
  './img/bg_01.jpg',
];

// install-event
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');

        // 指定されたリソースをキャッシュに追加する
        return cache.addAll(urlsToCache);
    })
  );
});

// fetch-event
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
})
