# Phase 2: Core Content & Sections - Context

**Gathered:** 2026-02-02
**Status:** Ready for planning

<domain>
## Phase Boundary

Display all portfolio content sections (Hero, Skills, Work Experience, Education, Projects, About, Contact) in a scannable, visually cohesive full-page layout. Users should be able to quickly understand skills, experience, and projects. Animations and polish are handled in Phase 3.

</domain>

<decisions>
## Implementation Decisions

### Hero Section
- **Height:** Full viewport height on desktop - maximum visual impact
- **Visual elements:** 3D interactive elements (Three.js or Spline) that respond to mouse/scroll - technically impressive and playful
- **CTAs:** Multiple buttons - one linking to projects, one to contact section
- **Text content:** Claude's discretion on copy length (balance between minimal and brief intro)

### Section Layout Pattern
- **Width:** Full-width sections extending edge-to-edge (with appropriate padding)
- **Visual separation:** Alternating background colors between sections (light gray vs theme background)
- **Section headers:** Large, bold headings for clear hierarchy and scannability
- **Vertical spacing:** Generous spacing (100-150px) between sections - let content breathe

### Project Showcase
- **Layout:** 3-column grid on desktop (responsive to 2-column on tablet, 1-column on mobile)
- **Card content:** Full details visible upfront - project image/icon, title, full description (2-3 sentences), tech stack badges, and links
- **Images:** Icon or small thumbnail for each project - keeps focus on text description
- **Featured projects:** All projects equal treatment - uniform grid, no special emphasis

### Skills & Experience
- **Skills display:** Icon grid with technology logos and labels - visual and immediately recognizable
- **Work experience:** Vertical timeline layout showing career progression with dates on left, experience cards on right
- **Skill grouping:** Claude's discretion on whether to categorize (Frontend/Backend/Tools) based on skill diversity
- **Proficiency indicators:** No proficiency levels or years shown - just skill names and icons for clean appearance

### Claude's Discretion
- Hero text length and specific copy (balance visual impact with context)
- Exact spacing values and responsive breakpoint adjustments
- Skill categorization approach (unified grid vs organized sections)
- About Me section length and tone
- Contact section layout and presentation
- Education section format (timeline vs simple list)
- Empty state handling if content is missing

</decisions>

<specifics>
## Specific Ideas

- Full viewport hero establishes "amazed and impressed" goal immediately
- 3D elements should be playful but perform well on mobile (use appropriate optimization)
- Projects are the main portfolio content - make them scannable with full details visible
- Timeline for work experience shows career progression visually
- No subjective skill ratings - presence in the skills section indicates competency

</specifics>

<deferred>
## Deferred Ideas

None - discussion stayed within phase scope. Animations, hover effects, scroll-triggered reveals, and performance optimization are all Phase 3 concerns.

</deferred>

---

*Phase: 02-core-content--sections*
*Context gathered: 2026-02-02*
