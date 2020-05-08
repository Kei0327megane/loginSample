# 書籍レンタル管理システム
 - Firebase
 - React
 - Material Ul

## やったこと
 - material-uiとreactのテンプレページを元にログイン画面を実装
     - 参考サイト：https://mebee.info/2019/12/09/post-4680/
 - Firebaseを導入し、ログイン認証を実装
 - メールアドレスとパスワードを入力するとFirebase側で認証を行う
    - 管理ページ：https://console.firebase.google.com/project/mit-book-management/overview
 - ログイン認証が完了した後にダッシュボード画面(今はテキスト文字が表示されるだけ)に遷移

## やりたいこと
 - firebaseで認証が完了後にIDトークンを取得して次のダッシュボード画面に渡したい。refreshTokenは取れるっぽい。
 - 画面遷移で導入している[react-router]とmaterialUIとの相性が合わない...ログインボタンクリック後のイベント周りで[react-router]はreact.componentのクラス定義で無いと正常に動作しないのだが、クラス定義にするとmaterialUI側がエラーになる
 - サーバ側(Spring Boot)からAPIを叩いて、何かしらの情報を取得する
   - 取得内容は検討中
 - ダッシュボード画面が文字出すだけの画面なので何かしらデザイン作る。(イメージはこんなやつ)
   - 参考イメージ：https://material-ui.com/getting-started/templates/dashboard/.
   - 参考ソース：https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard

 ## メモ
  - clone後は、当ディレクトリ内で"npm install"してください
```
    > npm install
```
  - サーバ側は別リポジトリで管理
    - https://gitlab.com/k-mit/book-management
  - ソースも現状自分のgithubで管理してるけど、gitlabとかに入れたほうが良さげ