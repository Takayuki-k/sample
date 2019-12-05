// https://qiita.com/OMOIKANESAN/items/5b23fa8ea9ea0d181df5

let CACHE_NAME = 'cache-v8';
let urlsToCache = [
  './',
  './index.html',
  './about.html',
  './contact.html',
  './css/style.css',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
  './img/cafe--coffe01.jpg',
  './img/cafe--coffe02.jpg',
  './img/cafe--coffe03.jpg',
  './img/cafe--coffe04.jpg',
  './img/cafe--farmer01.jpg',
  'https://code.jquery.com/jquery-3.3.1.slim.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
  './js/index.js'
];

// install-event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');

        // 指定されたリソースをキャッシュに追加する
        return cache.addAll(urlsToCache);
    })
  );
});

// active
self.addEventListener('activate', (event) => {
  let cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// fetch-event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
})
