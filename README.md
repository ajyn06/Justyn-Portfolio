# Justyn Portfolio

A personal portfolio website built with **Astro**, **SCSS**, and **GSAP** animations.

## 🚀 Tech Stack

- **Astro** - Fast, modern web framework
- **SCSS** - CSS preprocessor with variables, mixins, and nesting
- **GSAP** - Professional-grade animations and scroll effects
- **TypeScript** - Type-safe JavaScript

## 📁 Project Structure

```text
/
├── public/              # Static assets (images, fonts)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Footer.astro
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── pages/           # Route pages
│   │   └── index.astro
│   ├── scripts/         # JavaScript/GSAP animations
│   │   └── animations.ts
│   └── styles/          # Global SCSS styles
│       ├── _variables.scss
│       ├── _mixins.scss
│       └── global.scss
└── package.json
```

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |

## ✨ Features

- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - GSAP-powered scroll and entrance animations
- **Modular SCSS** - Variables, mixins, and organized styling
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Performance** - Astro's static site generation

## 🎨 Customization

1. Update colors in `src/styles/_variables.scss`
2. Modify components in `src/components/`
3. Add your projects in `src/pages/index.astro`
4. Replace placeholder content with your own

## 📝 License

MIT License
