// service workerが有効なら、service-worker.js を登録します
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js')
    .then(registration => {
      // 登録成功
      registration.onupdatefound = function() {
        registration.update();
      }
    })
    .catch(err => {
      // 登録失敗
  });
}
