# ポートフォリオ03

## URL
[https://takayuki-k.github.io/sample/03/](https://takayuki-k.github.io/sample/03/)  
![QR](./readMeImg/GR.jpg)  

## 説明
html/cssのポートフォリオです。  
画面を小さくした方がより綺麗に見えます。  
上部のナビゲーションはrwd時にトグルボタンを使わないパターンとして考えました。  

PWAテスト中  

### 2019/10/16  
google APIの設定ミスにより、オフライン表示もできなくなりました...  

### 2019/12/02  
cacheの保存可能、アンドロイドでホーム画面に追加に通知確認。  
アンドロイド,PC-Chromeで機内モードは可能。  

### 2019/12/08  
PC-Chromeで機内モードが不可能に（）  

### 2020/05/06
PWA対応するように修正しました。  
index.htmlに記述していた下記文言を削除しました。

```
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDkyaELxRD-gEDhNrEhsGpGpTiYQMZbrBk",
    authDomain: "pwa-test-2-34125.firebaseapp.com",
    databaseURL: "https://pwa-test-2-34125.firebaseio.com",
    projectId: "pwa-test-2-34125",
    storageBucket: "pwa-test-2-34125.appspot.com",
    messagingSenderId: "196377403428",
    appId: "1:196377403428:web:6940386de05a65816ff8b1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
```


![index](./readMeImg/index-01.jpg)