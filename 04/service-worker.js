// https://qiita.com/OMOIKANESAN/items/5b23fa8ea9ea0d181df5

let CACHE_NAME = 'cache-v4';
let urlsToCache = [
  './',
  './index.html',
  './css/index.css',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css',
  './img/bg01.png',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js',
  './js/index.js',
  'js/imagesloaded.pkgd.min.js' ,
  'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js'
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
