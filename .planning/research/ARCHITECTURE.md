# Architecture Research

**Domain:** Developer Portfolio Website
**Researched:** 2026-01-26
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                        │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐          │
│  │ Hero │  │Skills│  │ Work │  │  Edu │  │ Proj │          │
│  └───┬──┘  └───┬──┘  └───┬──┘  └───┬──┘  └───┬──┘          │
│      │         │         │         │         │              │
├──────┴─────────┴─────────┴─────────┴─────────┴──────────────┤
│                    Layout Layer                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │            Root Layout (Theme, Nav)                 │    │
│  └─────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                    State Layer                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│  │  Theme   │  │  Scroll  │  │Animation │                   │
│  │ Context  │  │  State   │  │  State   │                   │
│  └──────────┘  └──────────┘  └──────────┘                   │
├─────────────────────────────────────────────────────────────┤
│                    Content Layer                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │       Static Data (JSON/TS constants/MDX)           │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| Root Layout | Theme provider, global navigation, SEO metadata | Server Component with ThemeProvider wrapper |
| Section Components | Render individual portfolio sections (Hero, Skills, etc.) | Mix of Server/Client Components based on interactivity |
| Interactive Elements | Handle scroll reveals, animations, theme toggle | Client Components with animation hooks |
| Theme System | Manage dark/light mode state and persistence | React Context + localStorage + CSS variables |
| Content Module | Export static data for sections | TypeScript constants or JSON files |
| Animation Controller | Orchestrate scroll-triggered animations | Client Component with GSAP/Framer Motion |

## Recommended Project Structure

Based on Next.js App Router best practices for 2026, using the "Store Files Outside app" strategy for clear separation of routing and code.

```
project-root/
├── app/                           # Next.js App Router (routing only)
│   ├── layout.tsx                 # Root layout (theme, metadata, nav)
│   ├── page.tsx                   # Home page (all sections)
│   ├── globals.css                # Global styles
│   └── not-found.tsx              # 404 page
│
├── components/                    # Reusable UI components
│   ├── sections/                  # Full-width portfolio sections
│   │   ├── Hero.tsx               # Hero section with name/title
│   │   ├── Skills.tsx             # Skills grid/cards
│   │   ├── Experience.tsx         # Work experience timeline
│   │   ├── Education.tsx          # Education timeline
│   │   ├── Projects.tsx           # Project cards grid
│   │   ├── About.tsx              # About me section
│   │   └── Contact.tsx            # Contact form/links
│   │
│   ├── ui/                        # Reusable UI primitives
│   │   ├── Button.tsx             # Button variants
│   │   ├── Card.tsx               # Card component
│   │   ├── Timeline.tsx           # Timeline component
│   │   └── Badge.tsx              # Skill badge
│   │
│   ├── layout/                    # Layout components
│   │   ├── Navigation.tsx         # Nav bar with smooth scroll links
│   │   ├── Footer.tsx             # Footer
│   │   └── SectionWrapper.tsx     # Scroll reveal wrapper
│   │
│   └── interactive/               # Interactive elements
│       ├── ThemeToggle.tsx        # Dark/light mode switch
│       ├── ScrollReveal.tsx       # Scroll-triggered reveal
│       └── ProjectCard.tsx        # Interactive project card
│
├── lib/                           # Utilities and helpers
│   ├── animations.ts              # Animation configuration
│   ├── utils.ts                   # Utility functions (cn, etc.)
│   └── constants.ts               # Site-wide constants
│
├── data/                          # Static content
│   ├── skills.ts                  # Skills list with categories
│   ├── experience.ts              # Work experience data
│   ├── education.ts               # Education data
│   ├── projects.ts                # Project details
│   └── personal.ts                # Bio, contact info, social links
│
├── hooks/                         # Custom React hooks
│   ├── useTheme.ts                # Theme management hook
│   ├── useScrollPosition.ts       # Track scroll position
│   └── useIntersectionObserver.ts # Intersection Observer wrapper
│
├── providers/                     # React Context providers
│   └── ThemeProvider.tsx          # Theme context provider
│
├── styles/                        # Additional styles
│   └── animations.css             # Animation keyframes
│
├── types/                         # TypeScript type definitions
│   └── index.ts                   # Shared types
│
├── public/                        # Static assets
│   ├── images/                    # Project screenshots, profile pic
│   ├── icons/                     # Skill icons, logos
│   └── resume.pdf                 # Downloadable resume
│
└── next.config.js                 # Next.js configuration
```

### Structure Rationale

- **app/:** Minimal routing logic only. Single page portfolio uses `page.tsx` to compose all sections.
- **components/:** Organized by purpose (sections, ui, layout, interactive). Sections are full-width, composable units.
- **data/:** Static TypeScript files export content as constants. Easy to maintain, type-safe, no CMS overhead for v1.
- **lib/:** Utilities like animation configs, cn() helper for className merging.
- **hooks/:** Custom React hooks for theme, scroll tracking, and intersection observers.
- **providers/:** Context providers separated for clarity. Theme is the primary global state.
- **public/:** Static assets served as-is. Images optimized with Next.js Image component.

## Architectural Patterns

### Pattern 1: Single Page with Section Components

**What:** Portfolio is a single route (`/`) with full-height sections composed together.

**When to use:** For focused portfolios where all content fits on one scrollable page.

**Trade-offs:**
- Pros: Simple navigation, smooth scrolling, mobile-friendly, fast initial load
- Cons: Less SEO optimization per section, limited scalability if adding blog/case studies

**Example:**
```typescript
// app/page.tsx
import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
```

### Pattern 2: Static Content as TypeScript Constants

**What:** Content stored in typed TypeScript files, imported by components.

**When to use:** When content is developer-managed and changes infrequently. Perfect for v1 without CMS complexity.

**Trade-offs:**
- Pros: Type-safe, fast build time, no API calls, easy to version control
- Cons: Requires code changes for updates, not suitable for non-technical editors

**Example:**
```typescript
// data/projects.ts
export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image: string
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'Full-stack marketplace with payment integration',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: '/images/projects/ecommerce.png',
    github: 'https://github.com/user/ecommerce',
    demo: 'https://demo.com'
  },
  // ... more projects
]

// components/sections/Projects.tsx
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section>
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  )
}
```

### Pattern 3: React Context for Theme

**What:** React Context API manages theme state (dark/light) globally with localStorage persistence.

**When to use:** Theme is low-frequency state accessed by many components. Context avoids prop drilling.

**Trade-offs:**
- Pros: Simple, native React solution, no external dependencies
- Cons: Client-side only, causes re-render of all context consumers

**Example:**
```typescript
// providers/ThemeProvider.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({ theme: 'light', toggleTheme: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme
    if (stored) setTheme(stored)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

// Usage in components
import { useTheme } from '@/providers/ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
}
```

### Pattern 4: Intersection Observer for Scroll Reveals

**What:** Use Intersection Observer API (via hook) to trigger animations when elements enter viewport.

**When to use:** For performance-friendly scroll-triggered reveals and animations.

**Trade-offs:**
- Pros: Performant (no scroll listeners), browser-native API, works with animation libraries
- Cons: Requires polyfill for older browsers (rare in 2026), slightly more complex than scroll listeners

**Example:**
```typescript
// hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, { threshold: 0.1, ...options })

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [options])

  return { ref, isVisible }
}

// components/layout/SectionWrapper.tsx
'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

export function SectionWrapper({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </section>
  )
}
```

### Pattern 5: Server Components by Default, Client Where Needed

**What:** Use React Server Components (RSC) for static content, mark only interactive parts as Client Components.

**When to use:** Always in Next.js App Router. Server Components reduce JavaScript bundle size.

**Trade-offs:**
- Pros: Faster initial load, better SEO, smaller bundle, leverage server
- Cons: Cannot use hooks/event handlers in Server Components, must explicitly mark Client Components

**Example:**
```typescript
// components/sections/Skills.tsx (Server Component - default)
import { skills } from '@/data/skills'
import SkillBadge from '@/components/ui/SkillBadge'

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div className="grid">
        {skills.map(skill => (
          <SkillBadge key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  )
}

// components/ui/SkillBadge.tsx (Client Component if interactive)
'use client'

import { useState } from 'react'

export default function SkillBadge({ name, level }: { name: string; level: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={hovered ? 'scale-110' : ''}
    >
      {name}
    </div>
  )
}
```

## Data Flow

### Content Flow (Static Data)

```
[TypeScript Data Files]
    ↓ (import)
[Server Components] → [Rendered HTML] → [Client]
    ↓ (pass props)
[Client Components] ← [User Interactions]
```

### Key Data Flows

1. **Static Content Rendering:** Data files → Server Components → Static HTML generated at build time
2. **Theme State:** ThemeProvider (Context) → ThemeToggle + Styled Components → localStorage persistence
3. **Scroll Animations:** Scroll Position → Intersection Observer → Animation State → Component Classes
4. **User Interactions:** Click/Hover → Client Component State → Re-render with new styles

### Request Flow (Single Page Portfolio)

```
[User loads /]
    ↓
[Next.js serves static HTML + hydration JS]
    ↓
[Browser renders page] ← [Theme from localStorage]
    ↓
[User scrolls]
    ↓
[Intersection Observers fire] → [Reveal animations trigger]
    ↓
[User toggles theme]
    ↓
[Context updates] → [Components re-render] → [localStorage updates]
```

### State Management Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                    State Categories                          │
├─────────────────────────────────────────────────────────────┤
│ Server State: None (static portfolio, no backend API)       │
├─────────────────────────────────────────────────────────────┤
│ Global Client State: Theme (React Context)                  │
├─────────────────────────────────────────────────────────────┤
│ Local Component State: Hover states, animation triggers     │
│                       (useState in Client Components)        │
└─────────────────────────────────────────────────────────────┘
```

**State Management Decisions:**
- **Theme:** React Context (low-frequency, global state)
- **Scroll Position:** Custom hook with useState (read-only tracking)
- **Animation States:** Local useState or animation library state (GSAP/Framer Motion)
- **No Redux/Zustand needed:** Portfolio is simple, no complex state logic

## Recommended Build Order

Dependencies between components suggest this implementation sequence:

### Phase 1: Foundation
1. **Setup Next.js + TypeScript**
2. **Create project structure** (folders from recommended structure)
3. **Setup globals.css** with CSS variables for theme colors
4. **Create root layout** (`app/layout.tsx`) with metadata

### Phase 2: Theme System
5. **Build ThemeProvider** and useTheme hook
6. **Add ThemeToggle component**
7. **Test theme persistence** (localStorage)

### Phase 3: Layout Components
8. **Create Navigation** component with smooth scroll links
9. **Build SectionWrapper** for consistent section styling
10. **Add Footer** component

### Phase 4: Content & Data
11. **Create all data files** (`data/*.ts`) with real content
12. **Define TypeScript types** (`types/index.ts`)

### Phase 5: Static Sections
13. **Build Hero section** (simplest, no animations initially)
14. **Build Skills section** with grid layout
15. **Build Experience section** with timeline
16. **Build Education section** with timeline
17. **Build Projects section** with card grid
18. **Build About section**
19. **Build Contact section**

### Phase 6: Interactivity
20. **Add Intersection Observer hook**
21. **Implement scroll reveals** on sections
22. **Add animation library** (GSAP or Framer Motion)
23. **Build interactive elements** (hover effects, card animations)

### Phase 7: Polish
24. **Mobile responsive adjustments**
25. **SEO metadata optimization**
26. **Performance optimization** (Image optimization, bundle size)
27. **Accessibility audit** (keyboard nav, ARIA labels, color contrast)

### Dependencies
- **Theme before sections:** Sections need theme colors
- **Data files before sections:** Sections consume data
- **Layout before sections:** Sections render inside layout
- **Static sections before animations:** Get layout working first
- **Intersection Observer before scroll animations:** Animation trigger mechanism

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 0-10k visits/month | Current architecture perfect. Static HTML, no backend, CDN delivery via Vercel/Netlify. |
| 10k-100k visits/month | Add analytics (Vercel Analytics or Google Analytics). Consider edge caching. Optimize images with next/image. |
| 100k+ visits/month | Add blog with MDX for SEO. Consider ISR (Incremental Static Regeneration) if adding dynamic content. Implement advanced performance monitoring. |

### Scaling Priorities

1. **First bottleneck:** Image loading on slow connections
   - **Fix:** Optimize images with next/image, use WebP format, implement lazy loading

2. **Second bottleneck:** JavaScript bundle size if adding complex animations
   - **Fix:** Code-split animation library imports, tree-shake unused code, defer non-critical scripts

3. **Future expansion:** Adding blog or case studies
   - **Fix:** Use MDX for content, create `/blog` route with dynamic routes, implement RSS feed

## Anti-Patterns

### Anti-Pattern 1: Over-Engineering State Management

**What people do:** Add Redux/Zustand for theme and scroll position state.

**Why it's wrong:** Introduces unnecessary complexity, larger bundle size, steeper learning curve. Portfolio state is simple: just theme (context) and local UI state.

**Do this instead:** Use React Context for theme, useState for local component state. Reserve external state libraries for apps with complex data flows.

### Anti-Pattern 2: Using Client Components Everywhere

**What people do:** Mark all components with 'use client' to avoid thinking about RSC.

**Why it's wrong:** Loses Next.js performance benefits (server-side rendering, smaller bundles). Portfolio content is mostly static and benefits from SSR/SSG.

**Do this instead:** Default to Server Components. Only add 'use client' when you need hooks, event handlers, or browser APIs. Keep interactive boundaries small.

### Anti-Pattern 3: Scroll Event Listeners for Animations

**What people do:** Add window.addEventListener('scroll', ...) to trigger animations.

**Why it's wrong:** Fires on every scroll pixel, causing performance issues (jank, stuttering). Especially bad on mobile.

**Do this instead:** Use Intersection Observer API for scroll-triggered reveals. For timeline animations, use GSAP ScrollTrigger or Framer Motion useScroll, which are optimized.

### Anti-Pattern 4: Putting All Content in Components

**What people do:** Hardcode content directly in JSX: `<h2>About Me</h2><p>I'm a developer...</p>`

**Why it's wrong:** Hard to maintain, no type safety, duplication if used in multiple places (like meta tags), difficult to update without touching components.

**Do this instead:** Separate content into `data/` files as typed constants. Import into components. Single source of truth, easy updates, type-safe.

### Anti-Pattern 5: Not Optimizing Images

**What people do:** Use standard `<img>` tags with large PNG/JPEG files from `/public`.

**Why it's wrong:** Portfolio sites are visually heavy (project screenshots, hero images). Unoptimized images cause slow load times, poor Core Web Vitals, bad SEO.

**Do this instead:** Always use Next.js `<Image>` component with proper width/height. Use WebP format. Implement lazy loading. Compress images before adding to project.

### Anti-Pattern 6: Auto-Playing Animations Everywhere

**What people do:** Trigger complex animations immediately on page load, ignoring user preferences.

**Why it's wrong:** Disrespects `prefers-reduced-motion` accessibility setting. Animations can cause motion sickness. Impacts performance on low-end devices.

**Do this instead:** Check `prefers-reduced-motion` media query. Use subtle animations. Make animations opt-in or trigger on interaction/scroll. Respect user preferences.

## Integration Points

### External Services (Potential v2 Features)

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Analytics (Vercel/GA) | Script in root layout, env vars for keys | Track page views, scroll depth |
| Contact Form API | Server Action or API route (`app/api/contact`) | Consider Resend, SendGrid for email |
| Resume Download | Static file in `/public`, link in Contact | `/public/resume.pdf` served as-is |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| Layout ↔ Sections | Props (children rendering) | Layout wraps sections, provides theme context |
| Sections ↔ UI Components | Props (data passing) | Sections are composition of UI components |
| Providers ↔ Components | React Context | ThemeProvider shares theme state |
| Data Files ↔ Components | ES6 imports | Static data imported at build time |
| Hooks ↔ Components | Hook return values | Custom hooks encapsulate reusable logic |

### Component Communication Strategy

```
[Root Layout]
    ↓ (Context Provider)
[ThemeProvider] → [All child components can useTheme()]
    ↓ (Composition)
[Sections] → [UI Components] → [Interactive Elements]
    ↑              ↑                  ↑
    │              │                  │
(import data) (pass props)      (local state)
```

## Mobile-First Responsive Strategy

### Breakpoint Strategy (Tailwind CSS)

```typescript
// Default: Mobile (< 640px)
// sm: Tablet (≥ 640px)
// md: Desktop (≥ 768px)
// lg: Large Desktop (≥ 1024px)
// xl: Extra Large (≥ 1280px)
```

### Key Responsive Patterns

| Component | Mobile | Desktop |
|-----------|--------|---------|
| Navigation | Hamburger menu or bottom tab bar | Horizontal nav bar with smooth scroll |
| Hero | Single column, larger text | Two columns (text + image) |
| Skills | 2-column grid | 4-6 column grid with hover effects |
| Experience/Education | Vertical timeline | Horizontal or zigzag timeline |
| Projects | Single column cards | 2-3 column grid (masonry optional) |
| Contact | Stacked form fields | Side-by-side layout |

### Mobile Considerations

- **Touch targets:** Minimum 44x44px for buttons/links
- **Vertical scrolling:** Horizontal scrolling is anti-pattern on mobile
- **Performance:** Reduce animation complexity on mobile, use `window.matchMedia('(max-width: 768px)')` checks
- **Images:** Use smaller image variants for mobile (srcSet with Next.js Image)
- **Navigation:** Sticky nav or persistent footer nav for quick section jumps

## Sources

**Official Documentation:**
- [Next.js App Router Project Structure](https://nextjs.org/docs/app/getting-started/project-structure) - HIGH confidence
- [Next.js App Router Documentation](https://nextjs.org/docs/app) - HIGH confidence

**Architecture Patterns:**
- [Architecture Pattern for Next.js Applications | Kapsys](https://kapsys.io/user-experience/choosing-an-architecture-pattern-for-next-js-applications) - MEDIUM confidence
- [Next.js Architecture in 2026 — Yogijs.tech](https://www.yogijs.tech/blog/nextjs-project-architecture-app-router) - MEDIUM confidence
- [Mastering Next.js App Router | Medium](https://thiraphat-ps-dev.medium.com/mastering-next-js-app-router-best-practices-for-structuring-your-application-3f8cf0c76580) - MEDIUM confidence

**State Management:**
- [State Management in 2026: Redux, Context API, and Modern Patterns](https://www.nucamp.co/blog/state-management-in-2026-redux-context-api-and-modern-patterns) - MEDIUM confidence

**Animation Libraries:**
- [Beyond Eye Candy: Top 7 React Animation Libraries for Real-Word Apps in 2026 | Syncfusion](https://www.syncfusion.com/blogs/post/top-react-animation-libraries) - MEDIUM confidence
- [Best React Scroll Animation Libraries 2025: Complete Guide](https://zoer.ai/posts/zoer/best-react-scroll-animation-libraries-2025) - MEDIUM confidence
- [React Scroll Animations | Motion](https://motion.dev/docs/react-scroll-animations) - HIGH confidence

**Design Patterns:**
- [20 Top Web Design Trends 2026 | TheeDigital](https://www.theedigital.com/blog/web-design-trends) - MEDIUM confidence
- [Portfolio Design Trends | Colorlib](https://colorlib.com/wp/portfolio-design-trends/) - MEDIUM confidence

**Portfolio Examples:**
- [The Anthology of a Creative Developer: A 2026 Portfolio](https://dev.to/nk2552003/the-anthology-of-a-creative-developer-a-2026-portfolio-56jp) - MEDIUM confidence
- [17 Inspiring Web Developer Portfolio Examples for 2026](https://templyo.io/blog/17-best-web-developer-portfolio-examples-for-2024) - MEDIUM confidence

---
*Architecture research for: Developer Portfolio Website (Next.js)*
*Researched: 2026-01-26*
