# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite exists — verify changes visually in the browser.

## Architecture

Single-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, and `next-themes`.

**Key architectural decisions:**
- `src/data/portfolio.ts` is the **single source of truth** for all content (personal info, skills, experience, education, projects, about, contact). Update content here, not inside components.
- All section components (`src/components/sections/`) are Server Components by default. Only add `'use client'` when hooks or browser APIs are required.
- Theme is handled by `next-themes` via `ThemeProvider` wrapping the root layout. The `.dark` class is toggled on `<html>` and drives CSS custom property overrides defined in `globals.css`.
- Scroll reveal animations use `<ScrollReveal>` (`src/components/motion/ScrollReveal.tsx`), a thin Framer Motion wrapper that respects `prefers-reduced-motion`.

**Directory layout:**
```
src/
├── app/           # Next.js routing only (layout.tsx, page.tsx, globals.css)
├── components/
│   ├── layout/    # Header, SkipLink
│   ├── motion/    # ScrollReveal animation wrapper
│   ├── sections/  # Full-page sections (Hero, About, Skills, Experience, Education, Projects, Contact)
│   └── theme/     # ThemeProvider (next-themes), ThemeToggle
└── data/
    └── portfolio.ts  # All site content + TypeScript interfaces
```

## Styling

Tailwind CSS v4 with custom semantic design tokens defined as CSS variables in `globals.css`:
- `bg-surface` / `bg-surface-secondary` — alternating section backgrounds
- `text-text-primary` / `text-text-secondary` — body text
- `text-accent` / `bg-accent` — brand color (blue)
- `border-border` — borders

Dark mode overrides these variables via `.dark { --color-*: ... }`. Always use these semantic tokens rather than hardcoded Tailwind colors so dark mode works automatically.

The `@custom-variant dark` directive in `globals.css` enables the `dark:` variant with the `.dark` class strategy.