# 🖤 Stable Diffusion プロンプトメーカー・ベース

このリポジトリはAI画像生成プロンプトを自由に組み立てられる「自作プロンプトメーカー」テンプレです。

HTML／CSS／JS／JSONが分割されていてカスタマイズ簡単。
data.jsonを編集して選択肢を増減、style.cssでデザイン調整、script.jsで生成文を変更。
index.htmlを開けばすぐ動作。GitHub Pagesで公開も可能　https://mochipj2025.github.io/present.prompt/

■ファイル構成
present.prompt/
├── index.html   … 画面＆UI本体
├── style.css    … 見た目
├── data.json    … 選択肢データ
└── script.js    … 生成ロジック

■使い方
1. このリポジトリをダウンロードorクローン（git clone https://github.com/mochipj2025/present.prompt.git　）
2. index.htmlを開く
3. data.json編集で項目追加、style.cssで見た目変更、script.jsで生成文変更

■GitHub Pages公開
リポジトリ4ファイルをアップし、Settings > Pages > main > /(root)で公開
https://mochipj2025.github.io/present.prompt/ でアクセス

■ChatGPTやClaudeでのカスタマイズ
「髪型」「背景」など新項目追加や画面反映、data.jsonやJS/HTMLの修正もAIに日本語で依頼可能

MITライセンス／#プロンプトメーカー で感想歓迎
