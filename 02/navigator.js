// service workerが有効なら、service-worker.js を登録します
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(
      Console.log('true')
    )
    .catch(
      // 登録失敗 :(
      err => console.log('ServiceWorker registration failed: ', err)
    )
}
