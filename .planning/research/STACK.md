# Stack Research

**Domain:** Developer Portfolio Website
**Researched:** 2026-01-26
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| **Next.js** | 16.x | React framework with SSR/SSG | Latest stable release (Oct 21, 2025). Turbopack stable for 2-5x faster builds. Built-in optimizations for images, fonts, scripts. Perfect for SEO-critical portfolios. Required by project constraints. |
| **React** | 19.2 | UI library | Ships with Next.js 16. Includes new hooks (useActionState, useFormStatus, useOptimistic) and View Transitions for smooth page animations. |
| **TypeScript** | 5.2+ | Type safety | 70%+ of React developers use TypeScript in 2025. Better refactoring, autocomplete, and component prop validation. React 19 improved type inference reduces manual annotations. |
| **Tailwind CSS** | 4.1+ | Utility-first CSS framework | CSS-first configuration (no tailwind.config.js). Native dark mode support via @custom-variant. OKLCH color format for perceptually uniform colors. Industry standard for fast, maintainable styling. |
| **Node.js** | 20.9+ | Runtime | Required by Next.js 16. Node 18 no longer supported. |

### Animation & Interaction

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **Framer Motion** | 12.27+ | Declarative React animations | Primary animation library. 12M+ monthly downloads. Declarative API with gesture support, layout animations, and AnimatePresence. Perfect for hover effects, page transitions, micro-interactions. React-specific, no cleanup hassles. |
| **GSAP** | 3.x | Timeline-based animations | Optional for complex scroll-triggered sequences and timeline control. Use ScrollTrigger plugin for parallax effects. Better for pixel-perfect, design-heavy animations. More verbose than Framer Motion but unmatched performance. |
| **Lenis** | 1.x | Smooth scroll | Lightweight smooth scrolling library. Renamed from @studio-freight/lenis. Built-in autoRaf option. Essential for polished portfolio feel. Integrates perfectly with GSAP ScrollTrigger. |

### UI Components & Styling

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **shadcn/ui** | Latest | Unstyled, accessible component primitives | Copy-paste components built on Radix UI. Full dark mode support via CSS variables. Tailwind v4 compatible. Components for forms, dialogs, tooltips. Not a package dependency—you own the code. |
| **next-themes** | 0.4+ | Dark mode management | Zero-flash dark mode. Syncs theme across tabs. Integrates with Tailwind's dark: variant. Saves preference to localStorage. Industry standard for Next.js theming. |
| **Lucide React** | Latest | Icon library | 1,500+ clean, consistent stroke icons. Tree-shakeable. Fully customizable. Community fork of Feather Icons. Preferred over Heroicons for icon variety despite single style. |
| **clsx** + **tailwind-merge** | Latest | Conditional class utilities | clsx for conditional classes, tailwind-merge to resolve conflicts. Standard pattern: `cn(...inputs)` utility. Essential for component reusability and avoiding style conflicts. |

### Forms & Validation

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **React Hook Form** | 7.x | Form state management | Minimal re-renders, built-in validation, TypeScript support. Industry standard. Pairs perfectly with Zod for schema validation. |
| **Zod** | 3.x | Schema validation | TypeScript-first validation. Integrates with React Hook Form via @hookform/resolvers. Type-safe forms with runtime validation. |
| **Resend** | Latest | Email sending | Modern email API for contact forms. Official Next.js documentation. Simpler than Nodemailer for most portfolios. Free tier sufficient for portfolio contact forms. |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| **ESLint** | Linting | Use eslint-config-next for Next.js rules. Include eslint-config-prettier to avoid conflicts. |
| **Prettier** | Code formatting | Install eslint-plugin-prettier and eslint-config-prettier. Enable "format on save" in VS Code. |
| **Turbopack** | Bundler | Default in Next.js 16. 10x faster Fast Refresh. Filesystem caching in development. |
| **Vercel** | Hosting & deployment | Created by Next.js team. Zero-config deployment. Automatic HTTPS, global CDN. Free tier generous. |

### Monitoring & Analytics

| Tool | Version | Purpose | Notes |
|------|---------|---------|-------|
| **@vercel/analytics** | Latest | Web analytics | Track page views, user behavior. Privacy-focused. Zero config on Vercel. |
| **@vercel/speed-insights** | Latest | Performance monitoring | Automatic Web Vitals tracking. Route change detection. Visualizes Core Web Vitals. Does not track in dev mode. |

## Installation

```bash
# Create Next.js 16 app with TypeScript
npx create-next-app@latest my-portfolio --typescript --tailwind --app --turbopack

# Core dependencies
npm install framer-motion lenis next-themes lucide-react

# UI utilities
npm install clsx tailwind-merge

# Forms (if needed for contact form)
npm install react-hook-form zod @hookform/resolvers resend

# Optional: Advanced animations
npm install gsap

# Dev dependencies
npm install -D eslint-config-prettier eslint-plugin-prettier prettier

# Vercel analytics (after deploying to Vercel)
npm install @vercel/analytics @vercel/speed-insights
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| **Framer Motion** | GSAP | Choose GSAP if you need: (1) Timeline-based sequencing with precise control, (2) Plugin ecosystem (ScrollTrigger, SplitText, Draggable), (3) Maximum runtime performance (handles 1000s of simultaneous animations). GSAP better for design-heavy, Awwwards-style sites. |
| **Tailwind CSS** | CSS Modules / Styled Components | CSS Modules if you prefer component-scoped styles. Styled Components if your team is committed to CSS-in-JS. But Tailwind is faster to write, easier to maintain, and standard in 2025. |
| **Next.js 16** | Next.js 15 | Use Next.js 15 if you need stable middleware.ts (Next.js 16 replaces it with proxy.ts). Otherwise, use 16 for Turbopack stability and performance. |
| **Resend** | Nodemailer | Use Nodemailer if: (1) Self-hosting email server, (2) Need full SMTP control, (3) Already have email infrastructure. Resend is simpler for most portfolios. |
| **Lucide React** | Heroicons | Use Heroicons if: (1) You're heavily invested in Tailwind UI, (2) You need solid style icons (Lucide is stroke-only). Lucide offers 5x more icons (1,500 vs 300). |
| **shadcn/ui** | Radix UI directly | Use Radix UI directly if you want zero abstraction. shadcn/ui is just pre-styled Radix components you can customize. Most developers prefer shadcn for speed. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| **Create React App (CRA)** | No longer maintained. Replaced by Vite and Next.js. Slow build times, no SSR. | Next.js for SEO, Vite for client-only SPAs |
| **Node.js 18** | Not supported by Next.js 16. Security updates ending soon. | Node.js 20.9+ (or Node.js 22 LTS) |
| **Webpack** | Replaced by Turbopack in Next.js 16. Slower dev server, slower builds. | Turbopack (default in Next.js 16) |
| **@studio-freight/lenis** | Deprecated. Package renamed. | lenis (new package name) |
| **next lint command** | Removed in Next.js 16. | npx eslint . (use ESLint directly) |
| **AMP support in Next.js** | Removed in Next.js 16. Google deprecated AMP for most use cases. | Standard responsive Next.js pages |
| **React Three Fiber** for simple portfolios | Overkill for most portfolios. Hurts mobile performance. Long initial load times. | Framer Motion + GSAP for 2D animations. Only use R3F if 3D is core to brand. |
| **next-themes alternatives** (usehooks-ts, custom solutions) | next-themes is battle-tested with zero-flash, tab sync, System preference. | next-themes (maintained, 200K+ weekly downloads) |

## Stack Patterns by Variant

**If building a minimal, text-focused portfolio:**
- Skip Lenis (native scroll is fine)
- Skip GSAP (Framer Motion only)
- Consider skipping shadcn/ui (plain Tailwind may suffice)

**If building a design-heavy, Awwwards-style portfolio:**
- Add GSAP + ScrollTrigger
- Add Lenis for smooth scroll
- Consider React Three Fiber for 3D elements (if core to brand)
- Use shadcn/ui sparingly (custom components for unique design)

**If building an interactive, playful portfolio (your use case):**
- Framer Motion (primary animations)
- Lenis (smooth scroll)
- GSAP optional (if complex scroll sequences needed)
- shadcn/ui for functional components (forms, dialogs)
- Custom Tailwind for unique interactive elements

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| Next.js 16.x | React 19.2+ | Next.js 16 requires React 19. Ships together. |
| Next.js 16.x | TypeScript 5.2+ | TypeScript 5.1 no longer supported. Use 5.2+. |
| Next.js 16.x | Node.js 20.9+ | Node 18 dropped. Node 22 LTS also supported. |
| Tailwind CSS 4.x | shadcn/ui latest | shadcn/ui CLI initializes with Tailwind v4 support. Components updated for v4. |
| Framer Motion 12.x | React 19+ | Full React 19 compatibility. Uses modern React features. |
| next-themes 0.4+ | Next.js 16 App Router | Fully supports App Router. Use ThemeProvider in root layout. |
| React Hook Form 7.x | Zod 3.x | Use @hookform/resolvers for integration. Standard pattern. |
| GSAP 3.x | Next.js 16 | Use gsap.registerPlugin() for plugins. Requires useLayoutEffect workarounds in React. |
| Lenis 1.x | GSAP 3.x | Perfect pairing. Lenis updates ScrollTrigger automatically. |

## Dark Mode Implementation Notes

**Architecture:**
1. Tailwind CSS 4.1 provides `@custom-variant dark` for styling
2. next-themes handles theme state, persistence, System preference detection
3. shadcn/ui uses CSS variables that automatically adapt to dark mode
4. Result: Zero-flash dark mode with tab sync and System preference support

**Setup:**
```typescript
// tailwind.config.ts (Tailwind v4)
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

// app/providers.tsx
import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}

// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

## Performance Optimization Notes

**For fast, animated portfolios:**
1. Use Next.js Image component for all images (automatic optimization)
2. Enable Turbopack (default in Next.js 16)
3. Use Framer Motion's `layoutId` for shared element transitions
4. Lazy-load heavy 3D components with dynamic imports
5. Use `loading="lazy"` for below-fold images
6. Keep animations under 60fps with `will-change: transform` CSS
7. Test on mobile devices—animations that work on desktop may jank on mobile

**Vercel deployment optimizations:**
- Automatic image optimization via Vercel CDN
- Edge functions for fast serverless API routes
- ISR (Incremental Static Regeneration) for dynamic content
- Speed Insights tracks Core Web Vitals automatically

## Sources

**Official Documentation (HIGH confidence):**
- [Next.js 16 Release](https://nextjs.org/blog/next-16) — Features, release date, breaking changes
- [Tailwind CSS v4.1 Dark Mode](https://tailwindcss.com/docs/dark-mode) — @custom-variant syntax
- [shadcn/ui Theming](https://ui.shadcn.com/docs/theming) — CSS variables, dark mode setup
- [Motion for React](https://motion.dev/) — Framer Motion (rebranded)
- [React 19 Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) — TypeScript compatibility

**Verified Community Resources (MEDIUM confidence):**
- [Next.js Best Practices 2025](https://www.raftlabs.com/blog/building-with-next-js-best-practices-and-benefits-for-performance-first-teams/)
- [Framer Motion vs GSAP Comparison](https://semaphore.io/blog/react-framer-motion-gsap)
- [Setting Up Next.js 15 with ShadCN & Tailwind CSS v4](https://dev.to/darshan_bajgain/setting-up-2025-nextjs-15-with-shadcn-tailwind-css-v4-no-config-needed-dark-mode-5kl)
- [Lenis Smooth Scrolling in Next.js](https://devdreaming.com/blogs/nextjs-smooth-scrolling-with-lenis-gsap)
- [React Hook Form + Zod Validation](https://www.contentful.com/blog/react-hook-form-validation-zod/)
- [next-themes GitHub](https://github.com/pacocoursey/next-themes) — Official repo with 5K+ stars
- [Lucide React Icons](https://lucide.dev/guide/packages/lucide-react) — Official documentation
- [clsx + tailwind-merge Pattern](https://ayberkyavas.com/blogs/wtf-is-clsx-twmerge-cn-in-tailwindcss)
- [Resend with Next.js](https://resend.com/docs/send-with-nextjs) — Official integration guide
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights/quickstart) — Official docs

**Ecosystem Discovery (MEDIUM confidence):**
- [TypeScript Best Practices 2025](https://medium.com/@CodersWorld99/react-19-typescript-best-practices-the-new-rules-every-developer-must-follow-in-2025-3a74f63a0baf)
- [ESLint + Prettier in Next.js 16](https://medium.com/@edmondhashani/set-up-prettier-in-next-16-960d27a7cd4e)
- [3D Portfolio with React Three Fiber + GSAP](https://github.com/adrianhajdin/3d-portfolio) — Advanced pattern
- [React Animation Libraries 2025](https://dev.to/ciphernutz/top-react-animation-libraries-framer-motion-gsap-react-spring-and-more-4854)

---
*Stack research for: Developer Portfolio Website (Next.js, Playful & Interactive)*
*Researched: 2026-01-26*
*Confidence: HIGH (all core technologies verified with official docs or Context7)*
