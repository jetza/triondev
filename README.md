# TRIONDEV - Digital Studio Website

Moderni, performantni i SEO optimizovani web sajt za digitalni studio TRIONDEV.

## 🚀 Tehnologije

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animations**: Framer Motion
- **i18n**: next-intl (SR/EN)
- **Forms**: React Hook Form + Zod
- **Theme**: next-themes (Light/Dark Mode)

## 📁 Struktura Projekta

```
triondev/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── PricingSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Logo.tsx
│   │   ├── Navigation.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── LanguageSwitch.tsx
│   │   └── Footer.tsx
│   └── forms/             # Form components
├── lib/
│   ├── data/              # Mock data
│   │   └── projects.ts
│   ├── utils/             # Utility functions
│   │   └── cn.ts
│   └── api/               # API utilities (for future)
├── locales/
│   ├── sr/                # Serbian translations
│   │   └── common.json
│   └── en/                # English translations
│       └── common.json
├── public/
│   └── assets/
│       ├── logos/         # Brand logos (SVG)
│       └── images/        # Images & media
├── styles/
│   └── globals.css        # Global styles
├── types/
│   └── index.ts           # TypeScript types
├── i18n.ts                # i18n configuration
└── tailwind.config.ts     # Tailwind configuration
```

## 🎨 Design System

### Colors

- **Primary**: `#D81B60` (Ciklama)
- **Dark**: `#0B0B0F`
- **Light**: `#FFFFFF`

### Typography

- **Headings**: Montserrat
- **Body**: Inter

## 🌐 Jezici

Sajt podržava:

- 🇷🇸 Srpski (default)
- 🇬🇧 English (implementacija u fazi 2)

## ⚙️ Development

### Instalacija

```bash
npm install
```

### Pokretanje dev servera

```bash
npm run dev
```

Sajt će biti dostupan na `http://localhost:3000`

### Build za produkciju

```bash
npm run build
npm start
```

### Export static site (za Azure Static Web Apps)

```bash
npm run build
```

## 📦 Paketi Usluga

### 1. Landing Page

- **Cena**: 1.200-1.800€ (fiksno)
- 1 stranica
- Osnovna SEO optimizacija
- Kontakt forma
- Rok: 7-14 dana

### 2. Web Sajt (do 5 strana)

- **Cena**: 2.500-4.500€
- Do 5 stranica
- Premium dizajn
- Napredna SEO
- CMS
- Rok: 3-4 nedelje

### 3. Custom Aplikacija

- **Cena**: od 5.000€
- Neograničene funkcionalnosti
- Admin panel
- API integracije
- Procena po projektu

## 🔧 Sledeći Koraci

### Faza 2 - Backend Integration

1. **Azure Functions** - Serverless backend
2. **PostgreSQL** - Baza podataka
3. **Email Service** - Resend ili SendGrid
4. **CAPTCHA** - Turnstile ili hCaptcha
5. **Admin Panel** - Za upravljanje sadržajem
6. **i18n Routing** - Kompletna implementacija SR/EN

### Faza 3 - Advanced Features

1. **Blog System** - CMS za članke
2. **AI Chatbot** - Treniran na sadržaju sajta
3. **Analytics Dashboard** - Praćenje performansi
4. **Newsletter** - Email marketing integracija

## 📱 Responsive

Sajt je fully responsive i optimizovan za:

- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1920px+)

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader friendly

## 🔍 SEO

- Meta tags
- Open Graph
- Structured data (JSON-LD)
- Sitemap
- Robots.txt

## 📄 License

© 2026 TRIONDEV. All rights reserved.
