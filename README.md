# Wasit Mirani — Developer Portfolio

A premium, production-ready developer portfolio built with modern web technologies.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist Sans & Geist Mono
- **Deployment:** Vercel

## Features

- Responsive design (mobile-first)
- Dark/light theme toggle
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- SEO optimized (Open Graph, Twitter cards, sitemap, robots.txt)
- Accessible (ARIA labels, keyboard navigation, focus states)
- Static rendering for optimal performance
- Contact form via mailto
- GitHub repository showcase

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Environment Variables

No environment variables are required for the base portfolio. If you add GitHub API integration, create a `.env.local` file:

```
GITHUB_TOKEN=your_token_here
```

## Deployment on Vercel

1. Push this repository to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js — no configuration needed
4. Deploy

Or use the Vercel CLI:

```bash
npx vercel
```

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page
│   ├── not-found.tsx     # 404 page
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots configuration
├── components/           # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── TechStack.tsx
│   ├── WhatIBuild.tsx
│   ├── EngineeringProcess.tsx
│   ├── Services.tsx
│   ├── GitHubSection.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   ├── ScrollReveal.tsx
│   └── Icons.tsx
├── data/
│   └── portfolio.ts      # All portfolio data
└── lib/
    └── utils.ts          # Utility functions
```

## License

All rights reserved. © 2026 Wasit Mirani.
