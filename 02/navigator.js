// service workerが有効なら、service-worker.js を登録します
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js', { scope: '/02/' })
    .then((registration) => {
      // 登録成功
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    }).catch((err) => {
    // 登録失敗 :(
      console.log('ServiceWorker registration failed: ', err)
    })
}
