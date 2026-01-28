# Roadmap: Personal Portfolio Website

**Created:** 2026-01-27
**Depth:** Quick (3-4 phases, critical path)
**Mode:** YOLO (ship fast, validate through deployment)

## Overview

This roadmap delivers a playful, interactive portfolio website that impresses recruiters, clients, and engineers in 3 focused phases. Phase 1 establishes the responsive foundation with dark/light theming. Phase 2 builds all content sections to validate information architecture. Phase 3 adds polish through animations, SEO, accessibility, and deployment. The structure prioritizes getting core content live quickly while maintaining the quality bar of "personally amazed."

## Phases

### Phase 1: Foundation & Setup

**Goal:** Production-ready Next.js foundation with responsive design and theme system

**Dependencies:** None (starting phase)

**Requirements:**
- FOUND-01: Fully responsive across mobile (320px+), tablet (768px+), desktop (1024px+)
- FOUND-02: Mobile-first CSS approach with breakpoint system
- FOUND-03: Dark mode and light mode themes with smooth transitions
- FOUND-04: Theme toggle component accessible from any page
- FOUND-05: User theme preference persists across browser sessions
- FOUND-06: Site loads with Core Web Vitals targets (FCP <1.8s, CLS <0.1)
- FOUND-07: Sticky navigation header with smooth scroll to sections
- FOUND-08: Next.js 16 with Static Site Generation (SSG) for all pages

**Success Criteria:**
1. Developer can view site on mobile device with responsive layout adapting correctly
2. User can toggle between dark and light themes from any page with smooth transition
3. User's theme preference persists after closing and reopening browser
4. Developer can run Lighthouse and see FCP <1.8s, CLS <0.1 targets met
5. User can click navigation links and smoothly scroll to corresponding sections

**Completion:** Phase complete when all 5 success criteria verified and all FOUND requirements met.

**Plans:** 2 plans

Plans:
- [ ] 01-01-PLAN.md — Scaffold Next.js 16 with Tailwind v4 and dark/light theme system
- [ ] 01-02-PLAN.md — Sticky navigation header with responsive mobile menu

---

### Phase 2: Core Content & Sections

**Goal:** All portfolio sections completed with content visible and scannable

**Dependencies:** Phase 1 (needs theme system and responsive foundation)

**Requirements:**

**Hero Section:**
- HERO-01: Hero section displays name prominently
- HERO-02: Hero section displays professional title/role
- HERO-03: Hero section includes engaging tagline or introduction
- HERO-04: Primary CTA button linking to projects or contact
- HERO-05: Hero is visually striking and sets tone for portfolio

**Skills:**
- SKILL-01: Skills displayed with technology icons/logos
- SKILL-02: Skills organized by category (Frontend, Backend, Tools, etc.)
- SKILL-03: Visual presentation makes skills scannable at a glance
- SKILL-04: Skills section includes all relevant technologies from resume

**Work Experience:**
- WORK-01: Work experience displayed as timeline or structured list
- WORK-02: Each position shows job title, company name, and dates
- WORK-03: Each position includes 2-4 key achievements or responsibilities
- WORK-04: Experience section matches resume content accurately

**Education:**
- EDU-01: Education section displays degree/certification
- EDU-02: Education section displays institution name
- EDU-03: Education section displays graduation year or completion date
- EDU-04: Education content matches resume credentials

**Projects:**
- PROJ-01: Projects section displays 6-8 curated projects
- PROJ-02: Each project card shows project title
- PROJ-03: Each project card shows brief description (2-3 sentences)
- PROJ-04: Each project card displays tech stack used
- PROJ-05: Each project card links to live demo (if available)
- PROJ-06: Each project card links to source code repository (if public)
- PROJ-07: Project cards are visually appealing and consistent

**About Me:**
- ABOUT-01: About section includes personal story beyond resume
- ABOUT-02: About section communicates personality and culture fit
- ABOUT-03: About section is concise (3-5 paragraphs maximum)
- ABOUT-04: About section humanizes the developer for potential connections

**Contact:**
- CONTACT-01: Contact section displays email address
- CONTACT-02: Contact section links to GitHub profile
- CONTACT-03: Contact section links to LinkedIn profile
- CONTACT-04: Contact links open in appropriate format (mailto:, new tab)
- CONTACT-05: Contact section includes clear call-to-action

**Success Criteria:**
1. Recruiter can scan entire portfolio and understand skills, experience, and projects within 10 seconds
2. User can navigate to any portfolio section using navigation and see content properly formatted on mobile and desktop
3. User can click project links and reach live demos or source code repositories
4. User can click contact links (email, GitHub, LinkedIn) and reach appropriate destinations
5. Developer shares portfolio with 3 people and receives feedback that content is clear and scannable

**Completion:** Phase complete when all 5 success criteria verified and all section requirements met.

---

### Phase 3: Interactivity & Polish

**Goal:** Playful animations, production deployment, SEO optimization, and full accessibility

**Dependencies:** Phase 2 (needs static content sections to animate)

**Requirements:**

**Animations & Interactivity:**
- ANIM-01: Scroll-triggered reveal animations on section entry
- ANIM-02: Section animations use Intersection Observer (no scroll listeners)
- ANIM-03: Hover effects on project cards (scale, shadow, or transform)
- ANIM-04: Hover effects on navigation links
- ANIM-05: Hover effects on buttons and CTAs
- ANIM-06: Micro-interactions on skill badges or technology icons
- ANIM-07: Animations use only GPU-accelerated properties (transform, opacity)
- ANIM-08: Animations respect prefers-reduced-motion user preference
- ANIM-09: All interactive elements have keyboard navigation support
- ANIM-10: Animations perform smoothly on mobile devices (tested on budget devices)

**SEO & Metadata:**
- SEO-01: Page has unique, descriptive title tag
- SEO-02: Page has meta description optimized for search
- SEO-03: Open Graph tags for social media sharing (og:title, og:description, og:image)
- SEO-04: Twitter Card meta tags for Twitter sharing
- SEO-05: Structured data (JSON-LD) for person/developer schema
- SEO-06: Sitemap.xml generated and accessible
- SEO-07: Robots.txt configured appropriately

**Accessibility:**
- A11Y-01: All interactive elements use semantic HTML (button, a, nav)
- A11Y-02: All images have descriptive alt text
- A11Y-03: Color contrast meets WCAG 2.2 AA standards in both themes
- A11Y-04: Keyboard navigation works for all interactive elements
- A11Y-05: Focus indicators are visible on all focusable elements
- A11Y-06: Skip-to-content link available for screen readers
- A11Y-07: Site is navigable with screen reader (tested with VoiceOver or NVDA)

**Performance:**
- PERF-01: Images optimized with next/image (WebP/AVIF formats)
- PERF-02: Animation libraries loaded with dynamic imports
- PERF-03: Lighthouse Performance score >90 on mobile
- PERF-04: Lighthouse Performance score >95 on desktop
- PERF-05: First Contentful Paint (FCP) under 1.8 seconds
- PERF-06: Cumulative Layout Shift (CLS) under 0.1
- PERF-07: Touch targets are minimum 44x44px on mobile

**Success Criteria:**
1. User sees smooth scroll-triggered animations as sections come into view (no jank on mobile)
2. User with keyboard can navigate entire site using Tab key and activate all interactive elements
3. Developer runs screen reader (VoiceOver/NVDA) and confirms all content is accessible
4. Developer runs Lighthouse and achieves >90 mobile, >95 desktop performance scores
5. User shares portfolio link on LinkedIn/Twitter and sees proper preview card with title, description, and image
6. Site is deployed to production domain and accessible to public

**Completion:** Phase complete when all 6 success criteria verified, all requirements met, and site is live in production.

---

## Progress Tracking

| Phase | Status | Requirements | Completed | Progress |
|-------|--------|--------------|-----------|----------|
| 1 - Foundation & Setup | Planned | 8 | 0/8 | 0% |
| 2 - Core Content & Sections | Pending | 38 | 0/38 | 0% |
| 3 - Interactivity & Polish | Pending | 31 | 0/31 | 0% |

**Overall:** 0/77 requirements completed (0%)

**Next Action:** Execute Phase 1 with `/gsd:execute-phase 1`

---

## Notes

**Phase Structure Rationale:**
- **Quick depth applied:** Research suggested 4-5 phases, compressed to 3 by combining polish + deployment into Phase 3
- **Foundation first:** Theme system, responsive design, and SSG architecture must be established before building features
- **Content before interactivity:** Static sections validate information architecture and establish performance baseline before adding animations
- **Polish bundles efficiently:** SEO, accessibility, performance, and animations are all final touches that can be tested together

**Research Flags:**
- Phase 1: Standard patterns (Next.js 16, Tailwind v4, next-themes), no additional research needed
- Phase 2: Portfolio content structure well-established, no additional research needed
- Phase 3: Standard optimization patterns, no additional research needed. Contact form deferred to post-v1.

**Coverage:** All 63 v1 requirements mapped across 3 phases. Zero orphaned requirements.

---

*Roadmap created: 2026-01-27*
*Phase 1 planned: 2026-01-28*
