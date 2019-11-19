let CACHE_NAME = 'cache-v2';
let CACHE_KEYS = [
  CACHE_NAME
];
let urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/contact.html',
  '/css/style.css',
  '//stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
  '/img/cafe--coffe01.jpg',
  '/img/cafe--coffe02.jpg',
  '/img/cafe--coffe03.jpg',
  '/img/cafe--coffe04.jpg',
  '/img/cafe--farmer01.jpg',
  '//code.jquery.com/jquery-3.3.1.slim.min.js',
  '//cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
  '//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
  '/js/index.js'
];

// install-event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
        console.log('Opened cache');

        // 指定されたリソースをキャッシュに追加する
        // return cache.addAll(urlsToCache)
        return cache.addAll(urlsToCache.map(url => new Request(url, {credentials: 'same-origin'})));
      })
  )
});

// activate-event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then( key => {
      return Promise.all(
        keys.filter(keys => {
          return !CACHE_KEYS.includes(key);
        }).map(keys => {
          return caches.delete(key);
        })
      );
    })
  );
});

// fetch-event
self.addEventListener('fetch', event => {
  let online = navigator.online;

  if (online) {

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      // let fetchRequest = event.request.clone()

      return fetch(event.request).then((response) => {
        cloneResponse = response.clone();

        if (response) {
          if (response || response.status == 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, cloneResponse).then(function(){

              });
            });
          }else{
            return response;
          }
          return response;
        }
      }).catch(err => {
        return console.log(err);
      });
    })
  );
}else {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }

      return caches.match("onoffline.html");
      .then(responseNodata => {
        return responseNodata;
      });

    })
  )
}});