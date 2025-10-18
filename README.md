# 概要
RiseTech 中級コーディング課題「建築会社サイト」の静的コーディングの実装

# サイト確認URL
https://mana0831.github.io/raise-home/

# CSSについて
## CSS設計
PDFLOCSS
* ディレクトリ構成はFLOCSSと同じ
* 要素をモジュールごとに分割するのではなくページとセクションごとに分割する

参考URL：
[https://github.com/hiloki/flocss](https://github.com/hiloki/flocss)
[https://zenn.dev/wagashi_osushi/books/94efd21a66ccaa](https://zenn.dev/wagashi_osushi/books/94efd21a66ccaa)


## ディレクトリ構成

```
├── foundation
│   ├── _base.scss
│   └── _index.scss
├── global
│   ├── _color.scss
│   ├── _font.scss
│   ├── _function.scss
│   ├── _mixin.scss
│   └── _variables.scss
├── layout
│   ├── _footer.scss
│   ├── _header.scss
│   └── _main.scss
├── object
│   ├── component
│   │   ├── _button.scss
│   │   └── _heading.scss
│   ├── project
│   │   ├── _access.scss
│   │   ├── _company.scss
│   │   ├── _contact.scss
│   │   └── _home.scss
│   └── utility
│       └── _utility.scss
└── style.scss

```

## ブレイクポイント

| 名称 | px     | 備考                  |
| ---- | ------ | --------------------- |
| xs   | 320px  |                       |
| sm   | 480px  | フォントサイズ 1.5    |
| mmd  | 600px  |                       |
| md   | 768px  | フォントサイズ 1.3125 |
| lg   | 1024px |                       |
| xl   | 1200px | フォントサイズ 1.2    |
| xxl  | 1500px |                       |
| xxxl | 1921px |                       |

---


# z-index の設定

- ヘッダーロゴ：`999`
- ハンバーガーボタン：`9999`
---

## アニメーションの設定
### hoverアニメーション

---

# img の属性

```html
<img width="681" height="450" loading="lazy" alt="" />
```

---
