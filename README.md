# Techie Tanmay Blog

This is my personal blog and portfolio, built by first cloning the [Astro Cactus](https://github.com/chrismwilliams/astro-theme-cactus) theme and making extensive customizations to fit my style and content.

## Demo 💻

Check out the [Demo](https://0xtechietanmay.vercel.app), hosted on Vercel

## Quick Start

Clone the repo and install dependencies:

```bash
git clone https://github.com/tanmay1193/techietanmay.git
cd techietanmay
npm install   # or pnpm install
npm run dev   # or pnpm dev
```

## Commands

| Command             | Action                                 |
| :------------------ | :------------------------------------- |
| `npm install`       | Install dependencies                   |
| `npm run dev`       | Start local dev server                 |
| `npm run build`     | Build production site                  |
| `npm run preview`   | Preview the built site locally         |
| `npm run postbuild` | Build static search index for Pagefind |

## Configure

* Update `src/site.config.ts` with your site info and social links.
* Add blog posts in `src/content/post`
* Add snippets in `src/content/snippet`
* Add notes in `src/content/note`
* Add projects in `src/data/projects.ts`
* Add notes in `src/content/note`
* Customize styles in `src/styles/global.css`.
* Edit `src/components/SocialList.astro` to link your profiles.
* Update resume in `src/pages/cv.astro` and you can place you resume pdf file in `/public`

## Features

* Fully responsive and SEO-friendly.
* Dark & Light mode with custom TailwindCSS styles.
* Markdown & MDX support for posts and notes.
* Automatic open graph images via Satori.
* Pagefind static search integration.
* Webmentions support.

## Deploy

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tanmay1193/techietanmay) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tanmay1193/techietanmay)
