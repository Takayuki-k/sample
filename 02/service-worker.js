const CACHE_NAME = 'cache-v1';
const urlsToCache = [
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

// activate-event
self.addEventListener('activate', (event) => {
    var cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // ホワイトリストにないキャッシュ(古いキャッシュ)は削除する
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

                  // 重要：リクエストを clone する。リクエストは Stream なので
                  // 一度しか処理できない。ここではキャッシュ用、fetch 用と2回
                  // 必要なので、リクエストは clone しないといけない
                let fetchRequest = event.request.clone();

                return fetch(fetchRequest)
                    .then((response) => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                          // 重要：レスポンスを clone する。レスポンスは Stream で
                          // ブラウザ用とキャッシュ用の2回必要。なので clone して
                          // 2つの Stream があるようにする
                        let responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                                .then((cache) => {
                                    cache.put(event.request, responseToCache);
                                });

                        return response;
                    });
            })
    );
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener('fetch', (event) => {});