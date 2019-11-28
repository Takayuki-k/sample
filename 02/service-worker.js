'use NONE';

let CACHE_NAME = 'cache-v1';
let urlsToCache = [
  './',
  './index.html',
  './about.html',
  './contact.html',
  './css/style.css',
  '//stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
  './img/cafe--coffe01.jpg',
  './img/cafe--coffe02.jpg',
  './img/cafe--coffe03.jpg',
  './img/cafe--coffe04.jpg',
  './img/cafe--farmer01.jpg',
  '//code.jquery.com/jquery-3.3.1.slim.min.js',
  '//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
  '//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
  './js/index.js'
];

// install-event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');

        // 指定されたリソースをキャッシュに追加する
      return cache.addAll(urlsToCache);
    })
  )
});

// activate-event
self.addEventListener('activate', (event) => {
  let cacheWhileList = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhileList.indexOf(cacheName) === -1) {
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
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      let fetchRequest = event.request.clone();

      return fetch(fetchRequest).then((response) => {

        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        let responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;

      });
    })
  );
})
