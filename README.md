# 齊藤さんの個人ページ

お茶と暮らす日々を伝える、齊藤さんの個人サイト。

## Tech Stack

- [Astro](https://astro.build/) — SSGによる高速・SEOフレンドリーな静的サイト
- [React](https://react.dev/) — インタラクティブなコンポーネント用
- [TailwindCSS v4](https://tailwindcss.com/) — スタイリング
- [Vite](https://vitejs.dev/) — ビルドツール（Astroに内蔵）
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 本番ビルド → dist/
npm run preview  # ビルド後の確認
```

## Deploy (GitHub Actions → GitHub Pages)

`main`へのpushで `.github/workflows/deploy.yml` が起動し、GitHub Pagesにデプロイされます。

リポジトリ側の設定:
1. Settings → Pages → Source を **GitHub Actions** に変更
2. (任意) Settings → Variables → `SITE_URL` に本番URLを設定
3. `astro.config.mjs` の `site` をデプロイURLに合わせて更新

## Structure

```
src/
├── layouts/Layout.astro         # メタタグ・OG・JSON-LD
├── pages/index.astro            # トップページ
├── components/
│   ├── Header.astro
│   ├── Hero.astro               # ファーストビュー
│   ├── About.astro              # どんな人なのか
│   ├── Story.astro              # なぜお茶を始めたのか
│   ├── Activities.astro         # 活動について
│   ├── Contact.astro
│   └── Footer.astro
└── styles/global.css            # Tailwind v4 + theme tokens
```
