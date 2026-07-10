# Changelog — MaxFace Dental Care rebuild

All notable changes on the `nextjs-rebuild` branch. One entry per commit.

## [Unreleased]

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
