// service workerが有効なら、service-worker.js を登録します
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
}
