# Changelog — MaxFace Dental Care rebuild

All notable changes on the `nextjs-rebuild` branch. One entry per commit.

## [Unreleased]

### Header/Hero refinements (per updated reference screenshot)
- Reduce section corner radius 40px → 24px sitewide to match the current design
- Header is now `position: fixed` (persistent on scroll) with a translucent
  backdrop-blur background and a slim white bottom border, replacing the
  scroll-away absolute header
- Shrink hero vertical padding/title size and cap the doctor photo to 62vh so
  it fits within the first viewport on load instead of overflowing below the fold

### Phase 4 — Functionality & SEO
- Appointment form and newsletter submit via WhatsApp deep link
  (wa.me/8801344473973 with a prefilled message) — no backend needed
- tel: links on all phone CTAs; nav/footer anchors wired to sections
- OpenGraph metadata, Dentist JSON-LD schema (address, hours, rating),
  local favicon, robots.txt + sitemap.xml

### Phase 5 — Performance & export
- `output: "export"` — fully static site in `maxface-app/out/`, deploys to any host
- Recompressed JPGs (q72) and pruned 25 unused images: public/images 8.5MB → 3.4MB
- GSAP dynamic-imported; no jQuery, no three.js; fonts self-hosted; zero external requests
- Production build + static export verified end-to-end in headless Chrome

### Phase 3 — Animations
- Preloader overlay (600ms fade like the theme, but capped ~1s, not load-gated)
- Magic cursor follower (rAF lerp, grows over interactive elements, desktop only)
- GSAP SplitText char reveal on all headings — original "style-3" parameters
  verbatim (x:50, back.out, stagger 0.02, trigger top 90%); dynamic-imported
- fadeInUp entrances on card grids (replaces Elementor elementor-invisible)
- Shiny-glass hover sweep CSS copied verbatim from theme style.css
- Rotating badge, counters, Swiper autoplay, compare sliders already live from
  Phase 2. All motion respects prefers-reduced-motion.
- Deliberate deviations: appointment parallax uses fixed background attachment
  instead of ekit JS parallax; the three.js WebGL distortion hover was dropped
  (~600KB for a subtle effect) in favor of the theme's own shiny-glass sweep

### Phase 2 — Sections (static, pixel-matched)
- Build all 11 sections as React components in `maxface-app/components/`:
  Header, Hero (+RotatingBadge), IntroBento (+Counter), WhyMaxface, Services,
  AboutDoctor, HowItWorks, BeforeAfter (+CompareSlider), Testimonials (Swiper),
  Appointment (WhatsApp form), Footer
- All content centralized in `lib/site.ts`; zero external URLs — every image local
- Replace placeholder "+91 - 123 456 789" with the clinic's real number; unify the
  appointment-section hours with the footer chamber hours (original contradicted itself)
- Counter, compare slider, tabs, and carousel re-implemented without jQuery

### Phase 1 — Scaffold
- Next.js 16 app in `maxface-app/` (TypeScript, App Router, CSS Modules)
- gsap + swiper from npm; Sora self-hosted via next/font
- 55 images localized into `public/images/` (incl. 12 previously hotlinked to the
  demo site); design tokens in `globals.css`

### Phase 0 — Baseline
- Add `docs/DESIGN.md`: full design + animation specification extracted from the
  Elementor scrape and `full page screenshot.png`
- Add `docs/reference/*.png`: screenshot section crops used for pixel-matching
- Add this CHANGELOG
