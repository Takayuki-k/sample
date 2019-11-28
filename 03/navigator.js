// service workerが有効なら、service-worker.js を登録します
window.addEventListener('load', function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
  }
});
