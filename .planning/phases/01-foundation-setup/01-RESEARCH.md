# Phase 1: Foundation & Setup - Research

**Researched:** 2026-01-28
**Domain:** Next.js 16 foundation with Tailwind CSS v4, responsive design, and theme system
**Confidence:** HIGH

## Summary

This phase establishes a Next.js 16 project with App Router, Tailwind CSS v4, and next-themes for dark/light mode. Next.js 16 was released in late 2025 and requires React 19.2 and Node.js 20.9+. It uses Turbopack as the default bundler and supports `output: 'export'` for full SSG. Tailwind CSS v4 has a fundamentally different setup from v3: configuration is done in CSS (not JavaScript), uses `@tailwindcss/postcss` plugin, and auto-detects content files.

The dark mode system uses next-themes (v0.4.6) with Tailwind v4's `@custom-variant` for class-based dark mode. This avoids flash of unstyled content (FOUC) and persists user preference via localStorage. The responsive design uses Tailwind's mobile-first breakpoint system with no additional libraries needed.

**Primary recommendation:** Use `create-next-app` to scaffold, then configure Tailwind v4 dark mode with next-themes using the `@custom-variant` approach for zero-FOUC theme switching.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| next | 16.1+ | Framework (App Router, SSG) | Latest stable, Turbopack default, `output: 'export'` for static |
| react | 19.2 | UI library | Required by Next.js 16 |
| react-dom | 19.2 | React DOM renderer | Required by Next.js 16 |
| typescript | 5.2+ | Type safety | Required by project spec |
| tailwindcss | 4.1+ | Utility-first CSS | v4 has CSS-based config, auto content detection |
| @tailwindcss/postcss | 4.1+ | PostCSS integration for Tailwind v4 | Required for Next.js integration |
| next-themes | 0.4.6 | Theme persistence & toggle | De facto standard, avoids FOUC, localStorage persistence |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| postcss | latest | CSS processing pipeline | Required by @tailwindcss/postcss |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| next-themes | Custom CSS + localStorage | next-themes handles FOUC, SSR hydration, system preference detection -- do not hand-roll |
| Tailwind CSS | CSS Modules | Tailwind is the locked decision; faster to prototype, consistent design tokens |

**Installation:**
```bash
npx create-next-app@latest . --typescript --eslint --app --src-dir --import-alias "@/*" --tailwind
npm install next-themes
```

## Architecture Patterns

### Recommended Project Structure
```
src/
├── app/
│   ├── layout.tsx        # Root layout with ThemeProvider
│   ├── page.tsx          # Home page (single-page portfolio)
│   └── globals.css       # Tailwind imports + theme variables + custom variants
├── components/
│   ├── layout/
│   │   ├── Header.tsx    # Sticky nav with theme toggle
│   │   └── Footer.tsx    # Site footer
│   ├── theme/
│   │   └── ThemeProvider.tsx  # Client component wrapping next-themes
│   │   └── ThemeToggle.tsx    # Dark/light mode toggle button
│   └── ui/               # Shared UI components (buttons, etc.)
├── lib/
│   └── constants.ts      # Breakpoints, nav links, site metadata
└── types/
    └── index.ts          # Shared TypeScript types
```

### Pattern 1: ThemeProvider as Client Component Wrapper
**What:** Wrap next-themes ThemeProvider in a client component, use it in the server-rendered root layout.
**When to use:** Always -- required for App Router compatibility.
**Example:**
```typescript
// src/components/theme/ThemeProvider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
```

```typescript
// src/app/layout.tsx (Server Component)
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Pattern 2: Tailwind v4 Dark Mode with CSS Custom Variant
**What:** Use `@custom-variant` in CSS instead of `tailwind.config.js` darkMode setting (which no longer exists in v4).
**When to use:** Always with Tailwind v4 + next-themes class-based approach.
**Example:**
```css
/* src/app/globals.css */
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
  --color-background: #ffffff;
  --color-foreground: #0a0a0a;
  --color-background-dark: #0a0a0a;
  --color-foreground-dark: #ededed;
}
```

### Pattern 3: Static Export Configuration
**What:** Configure Next.js for full static site generation.
**When to use:** This project -- portfolio is fully static.
**Example:**
```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
```

### Pattern 4: Smooth Scroll with CSS
**What:** Use CSS `scroll-behavior: smooth` on html element rather than JavaScript.
**When to use:** For anchor-based section navigation.
**Example:**
```css
/* In globals.css */
html {
  scroll-behavior: smooth;
}
```

### Anti-Patterns to Avoid
- **Using `tailwind.config.js` for v4:** Tailwind v4 uses CSS-based configuration. Do not create a JS config file unless importing legacy v3 config.
- **Putting ThemeProvider directly in layout.tsx:** The root layout is a Server Component. next-themes requires a Client Component wrapper.
- **Using `data-theme` attribute with class-based Tailwind dark:** Pick one approach. Use `attribute="class"` with `@custom-variant dark (&:where(.dark, .dark *))`.
- **Forgetting `suppressHydrationWarning` on `<html>`:** next-themes modifies the html element before hydration; without this attribute React will warn.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Dark mode persistence | Custom localStorage + useEffect | next-themes | Handles FOUC, SSR, system preference, hydration mismatch |
| Responsive breakpoints | Custom media query system | Tailwind's built-in breakpoints (sm, md, lg, xl) | Mobile-first, well-tested, consistent |
| CSS reset/normalize | Custom reset stylesheet | Tailwind's Preflight (included automatically) | Battle-tested, covers edge cases |
| Theme transition | Custom CSS transition logic | CSS `transition` on `background-color` and `color` properties | Simple CSS, no JS needed |

**Key insight:** This phase is entirely standard patterns with mature libraries. Every requirement maps to a well-known solution. Zero custom infrastructure needed.

## Common Pitfalls

### Pitfall 1: Tailwind v4 Config Confusion
**What goes wrong:** Developer creates `tailwind.config.js` and expects v3 syntax to work.
**Why it happens:** Most tutorials online are for v3. v4 moved to CSS-based config.
**How to avoid:** Use `@import "tailwindcss"` in globals.css, configure with `@theme` and `@custom-variant` directives. No JS config file.
**Warning signs:** Classes not applying, dark mode not toggling.

### Pitfall 2: Flash of Wrong Theme (FOUC)
**What goes wrong:** Page briefly shows light theme before switching to dark (or vice versa).
**Why it happens:** next-themes injects a script to set the theme before React hydrates. If setup is wrong, the script doesn't run early enough.
**How to avoid:** Use `suppressHydrationWarning` on `<html>`, ensure ThemeProvider wraps the entire app in root layout.
**Warning signs:** Brief flash of opposite theme on page load.

### Pitfall 3: Hydration Mismatch with Theme
**What goes wrong:** React hydration errors in console about mismatched content.
**Why it happens:** Server renders one theme, client detects a different preference.
**How to avoid:** Add `suppressHydrationWarning` to `<html>` tag. Use next-themes which handles this correctly.
**Warning signs:** Console warnings about hydration mismatch.

### Pitfall 4: Static Export Incompatibilities
**What goes wrong:** Build fails when using `output: 'export'` with dynamic features.
**Why it happens:** Static export cannot use server-side features like `headers()`, `cookies()`, or dynamic routes without `generateStaticParams`.
**How to avoid:** Avoid server-only APIs. This portfolio is a single page, so this should not be an issue.
**Warning signs:** Build errors mentioning dynamic server functions.

### Pitfall 5: CLS from Theme Toggle
**What goes wrong:** Layout shifts when switching themes because elements resize.
**Why it happens:** Different themes have different font rendering or element sizing.
**How to avoid:** Use CSS custom properties for colors only, not for sizing. Keep layout identical between themes.
**Warning signs:** CLS score increases after adding theme support.

## Code Examples

### Theme Toggle Component
```typescript
// src/components/theme/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
```

### Sticky Header with Smooth Scroll Navigation
```typescript
// src/components/layout/Header.tsx
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="font-bold text-lg">Portfolio</a>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
```

### Responsive Breakpoint Usage
```typescript
// Mobile-first approach with Tailwind breakpoints
// No prefix = mobile (320px+)
// sm: = 640px+
// md: = 768px+ (tablet)
// lg: = 1024px+ (desktop)
// xl: = 1280px+

<div className="px-4 md:px-8 lg:px-16">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
    {/* content */}
  </div>
</div>
```

### Theme-Aware CSS Variables
```css
/* src/app/globals.css */
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
  /* Light theme colors */
  --color-surface: #ffffff;
  --color-surface-secondary: #f9fafb;
  --color-text-primary: #111827;
  --color-text-secondary: #6b7280;
  --color-accent: #2563eb;
  --color-border: #e5e7eb;
}

/* Dark theme overrides via .dark class */
.dark {
  --color-surface: #0f172a;
  --color-surface-secondary: #1e293b;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #94a3b8;
  --color-accent: #3b82f6;
  --color-border: #334155;
}

/* Smooth theme transition */
* {
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

html {
  scroll-behavior: smooth;
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `tailwind.config.js` | CSS-based config with `@theme`, `@custom-variant` | Tailwind v4 (Jan 2025) | No JS config file needed |
| `darkMode: 'class'` in tailwind config | `@custom-variant dark (...)` in CSS | Tailwind v4 | Dark mode configured in CSS |
| `middleware.ts` | `proxy.ts` | Next.js 16 (Dec 2025) | Rename if using middleware |
| Implicit caching in App Router | Explicit `"use cache"` directive | Next.js 16 | Not relevant for static export |
| Turbopack opt-in | Turbopack default | Next.js 16 | Faster dev/builds out of the box |

**Deprecated/outdated:**
- `tailwind.config.js` / `tailwind.config.ts`: Still works via `@config` directive but not the v4 way
- `middleware.ts`: Renamed to `proxy.ts` in Next.js 16
- Node.js 18: No longer supported by Next.js 16 (requires 20.9+)

## Open Questions

1. **Next.js 16 `create-next-app` Tailwind version**
   - What we know: `create-next-app` with `--tailwind` flag scaffolds a Tailwind project
   - What's unclear: Whether it scaffolds with v4 by default in latest `create-next-app`
   - Recommendation: Run `create-next-app` and verify. If v3, manually upgrade to v4 setup.

2. **`output: 'export'` with Next.js 16 Cache Components**
   - What we know: `output: 'export'` is documented as supported in Next.js App Router
   - What's unclear: Whether `cacheComponents: true` conflicts with static export
   - Recommendation: Do not enable `cacheComponents` -- not needed for a static portfolio site

## Sources

### Primary (HIGH confidence)
- [Next.js 16 Blog Post](https://nextjs.org/blog/next-16) - Features, React 19.2, Turbopack, proxy.ts
- [Next.js Static Exports Guide](https://nextjs.org/docs/app/guides/static-exports) - `output: 'export'` configuration
- [Tailwind CSS v4 Next.js Guide](https://tailwindcss.com/docs/guides/nextjs) - Installation, PostCSS setup
- [Tailwind CSS v4 Announcement](https://tailwindcss.com/blog/tailwindcss-v4) - CSS-based config, `@theme`, performance
- [next-themes GitHub](https://github.com/pacocoursey/next-themes) - v0.4.6, API, App Router support

### Secondary (MEDIUM confidence)
- [Next.js 16.1 Review](https://staticmania.com/blog/next.js-16.1-review) - 16.1 features, Turbopack FS caching
- [shadcn/ui Dark Mode docs](https://ui.shadcn.com/docs/dark-mode/next) - next-themes + Tailwind pattern
- [Tailwind v4 dark mode with next-themes](https://www.sujalvanjare.com/blog/dark-mode-nextjs15-tailwind-v4) - `@custom-variant` approach

### Tertiary (LOW confidence)
- None -- all findings verified with official sources

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - All libraries verified via official docs and release announcements
- Architecture: HIGH - Patterns from official Next.js and next-themes documentation
- Pitfalls: HIGH - Well-documented issues across multiple sources

**Research date:** 2026-01-28
**Valid until:** 2026-02-28 (stable ecosystem, 30-day validity)
