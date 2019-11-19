// service workerが有効なら、service-worker.js を登録します
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(
      // 登録成功
      req => console.log('ServiceWorker registration successful: ')
    ).catch(
      // 登録失敗 :(
      err => console.log('ServiceWorker registration failed: ', err)
    );
}
