# Saroj Devkota — Premium Portfolio

> Futuristic multidisciplinary portfolio built with Next.js 14, Framer Motion, Three.js & Tailwind CSS.

![Stack](https://img.shields.io/badge/Next.js-14-black?style=flat-square)
![Stack](https://img.shields.io/badge/React-18-61DAFB?style=flat-square)
![Stack](https://img.shields.io/badge/Three.js-0.168-049EF4?style=flat-square)
![Stack](https://img.shields.io/badge/Framer_Motion-11-ff4d6d?style=flat-square)
![Stack](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square)

---

## ✦ Features

- **Cinematic loading screen** with text reveal animation
- **Custom magnetic cursor** with ring follower
- **Lenis smooth scroll** throughout
- **Framer Motion** scroll-reveal animations on every section
- **Three.js / React Three Fiber** 3D star field + floating orb in hero
- **Animated SVG network topology** with traveling packet simulations
- **Interactive particle canvas** in hero (mouse-reactive)
- **Floor-by-floor interior design showcase** with material palettes
- **Filterable certifications wall** with status badges
- **Animated skills matrix** with scroll-triggered bar fills
- **Volunteer timeline** with staggered card reveal
- **Contact form** with API route (Resend / Formspree ready)
- **Blog page** pre-built for future posts
- **Fully responsive** — mobile, tablet, desktop
- **Scroll progress bar**, section eyebrows, gradient text

---

## ✦ Project Structure

```
saroj-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # All CSS variables, animations, base styles
│   │   ├── layout.tsx           # Root layout — fonts, metadata, providers
│   │   ├── page.tsx             # Home page — assembles all sections
│   │   ├── blog/
│   │   │   └── page.tsx         # Blog / journal listing page
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts     # Contact form API route
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Fixed nav with mobile menu
│   │   │   ├── Footer.tsx       # Footer with links & back-to-top
│   │   │   └── SmoothScroll.tsx # Lenis smooth scroll wrapper
│   │   ├── ui/
│   │   │   ├── CustomCursor.tsx # Magnetic cursor + ring
│   │   │   ├── Loader.tsx       # Cinematic loading screen
│   │   │   └── ScrollProgress.tsx # Top progress bar
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Fullscreen hero with particles + 3D
│   │   │   ├── About.tsx        # About + skill groups + academic modules
│   │   │   ├── WebDev.tsx       # Project cards + terminal preview
│   │   │   ├── Networking.tsx   # Animated topology + project cards
│   │   │   ├── InteriorDesign.tsx # Floor switcher + palette showcase
│   │   │   ├── Certifications.tsx # Filterable cert wall
│   │   │   ├── Volunteer.tsx    # Timeline + strength bars
│   │   │   ├── Fitness.tsx      # Dashboard + upcoming certs
│   │   │   ├── Skills.tsx       # Animated skill bars + marquee
│   │   │   └── Contact.tsx      # Form + social links
│   │   └── 3d/
│   │       ├── Scene3D.tsx      # Hero 3D star field + orb (R3F)
│   │       └── Network3D.tsx    # 3D network topology (R3F)
│   ├── data/
│   │   └── portfolio.ts         # ALL content data — edit here
│   ├── hooks/
│   │   ├── useScrollReveal.ts
│   │   └── useMousePosition.ts
│   └── lib/
│       └── utils.ts             # cn(), color maps, helpers
├── public/
│   └── images/                  # Add your own project renders here
├── .env.example
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## ✦ Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/saroj-portfolio.git
cd saroj-portfolio
npm install
```

### 2. Environment Variables

```bash
cp .env.example .env.local
# Fill in your values
```

### 3. Run Development Server

```bash
npm run dev
# Open http://localhost:3000
```

### 4. Build for Production

```bash
npm run build
npm start
```

---

## ✦ Customisation

### Updating Content

All portfolio content lives in one file:

```
src/data/portfolio.ts
```

Edit it to update:
- Projects
- Certifications
- Skills
- Volunteer timeline
- Metrics
- Nav links

### Adding Project Images

1. Drop renders / screenshots into `public/images/`
2. Import and use via `<Image src="/images/your-file.jpg" ... />` in the section components

### Wiring Up the Contact Form

**Option A — Resend (recommended)**
```bash
npm install resend
```
Then uncomment the Resend block in `src/app/api/contact/route.ts` and add `RESEND_API_KEY` to `.env.local`.

**Option B — Formspree**
1. Create a form at [formspree.io](https://formspree.io)
2. Replace the `handleSubmit` function in `Contact.tsx` with a direct `fetch` to your Formspree endpoint

### Enabling 3D Network Scene

The `Network3D.tsx` component is built and ready. To use it inside the Networking section, import it:

```tsx
// In Networking.tsx, replace <NetworkTopology /> with:
import dynamic from 'next/dynamic'
const Network3D = dynamic(() => import('@/components/3d/Network3D').then(m => m.Network3D), { ssr: false })
```

### Enabling Blog (Sanity CMS)

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Install: `npm install next-sanity @sanity/image-url`
3. Add env vars from `.env.example`
4. Create schemas for `post`, `category`, `author`
5. Replace the static `POSTS` array in `blog/page.tsx` with a Sanity GROQ query

---

## ✦ Deployment on Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com) — zero config needed for Next.js.

---

## ✦ Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Framework    | Next.js 14 (App Router)             |
| Language     | TypeScript                          |
| Styling      | Tailwind CSS 3.4                    |
| Animations   | Framer Motion 11                    |
| 3D           | Three.js + React Three Fiber        |
| Smooth Scroll| Lenis                               |
| Type Anim    | react-type-animation                |
| Counters     | react-countup                       |
| Icons        | @tabler/icons-react                 |
| Fonts        | Bebas Neue, Plus Jakarta Sans, JetBrains Mono |
| Deployment   | Vercel                              |

---

## ✦ License

MIT — free to use, fork and modify.

---

*Built with precision by Saroj Devkota · Kathmandu, Nepal*
