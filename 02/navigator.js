// service workerが有効なら、service-worker.js を登録します
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js', {scope: '/02'})
    .then(() => {
      // 登録成功
    console.log('ServiceWorker registration with scope: 02');
  });
}
