# Wasit Ali — Developer Portfolio

A production-ready personal portfolio built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. Designed for Vercel deployment.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Email:** Resend (serverless contact form)
- **Icons:** Lucide React
- **Deployment:** Vercel

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=wasit7449@gmail.com
```

- **RESEND_API_KEY** — Get one at [resend.com](https://resend.com)
- **CONTACT_EMAIL** — The email address that receives contact form submissions

## Project Structure

```
src/
  app/
    layout.tsx          Root layout with metadata, fonts, theme
    page.tsx            Single-page portfolio (all sections)
    api/contact/        Resend-powered contact form endpoint
    not-found.tsx       Custom 404 page
    robots.ts           robots.txt generation
    sitemap.ts          sitemap.xml generation
  components/           Reusable UI components
  data/portfolio.ts     All portfolio content (experience, projects, skills)
  lib/                  Utility functions
```

## Vercel Deployment

1. Push this repository to GitHub
2. Import the repository in [vercel.com/new](https://vercel.com/new)
3. Add environment variables (`RESEND_API_KEY`, `CONTACT_EMAIL`) in the Vercel project settings
4. Deploy — Vercel auto-detects Next.js and handles the build

No additional configuration is required. The project uses the default Next.js build output.

## Features

- Dark/light theme with system preference detection
- Responsive design (mobile-first)
- Scroll-reveal animations (respects `prefers-reduced-motion`)
- SEO metadata, Open Graph, Twitter cards
- Sitemap and robots.txt
- Accessible navigation with keyboard support
- Contact form with server-side email delivery
- Project filtering
- Professional experience timeline
- GitHub repository showcase

## License

Private — All rights reserved.
