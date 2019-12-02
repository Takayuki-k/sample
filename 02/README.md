# ポートフォリオ02

## URL
[https://takayuki-k.github.io/sample/02/](https://takayuki-k.github.io/sample/02/)  

## 説明
html/css/jQueryのポートフォリオです。  
「お問い合わせ」のページはやたらjQuery書いています。  
画像圧縮で表示速度が劇的に速くなって大事だなと実感しました…  

style.cssでmedia queryを使用してrwdに対応しているのではなく、  
Bootstrapのmedia queryを使用してrwdにしているのも特徴です。  

PWAテスト中  
ホーム画面に追加の通知がこないのが問題です。  
キャッシュはしている模様です（機内モードでも表示できます）  

### 2019/10/16  
google APIの設定ミスにより、オフライン表示もできなくなりました...  

### 2019/12/02  
cacheの保存可能、アンドロイドでホーム画面に追加に通知確認。  
アンドロイド,PC-Chromeで機内モードは可能。  

また、  
```
A cookie associated with a cross-site resource at http://www.cloudflare.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.
```
のメッセージが出現(Chrome使用)  
