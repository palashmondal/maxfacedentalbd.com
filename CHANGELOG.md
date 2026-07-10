# Changelog — MaxFace Dental Care rebuild

All notable changes on the `nextjs-rebuild` branch. One entry per commit.

## [Unreleased]

### Update Google Business card link
- Hero's "Google Business Page" card now links to
  https://maps.app.goo.gl/iuEprZ4gZawq8gNEA instead of the previous
  share.google URL

### Skip the "5.0" frame in rating counter
- The cubic ease-out curve reached values that rounded to "5.0" a few
  frames before the animation actually finished, so the sequence briefly
  showed "5.0" before snapping to "5". Counter now clamps the displayed
  value to one decimal step short of the target (4.9) while still
  animating, so it reads "...4.8, 4.9, 5" with no "5.0" in between.

### Animate the rating number itself
- Add `from` and `snapToWholeAtEnd` to the shared Counter component so it can
  count up from a non-zero start and drop the trailing ".0" once it lands on
  a whole number
- Hero's Google Business rating now animates 1.0 → 1.1 → 1.2 … → 5 (over
  1.6s, triggered on scroll into view) instead of showing a static "5/5"

### Animated 5/5 stars on Google Business card
- New `StarRating` component: 5 stars pop in sequentially (1→5) with a
  staggered scale/rotate animation, triggered once when scrolled into view
  (IntersectionObserver, respects prefers-reduced-motion)
- Hero's Google Business card now shows 5/5 with this animation instead of
  static "★★★★★" text

### Bigger, better-centered rotating badge, linked to Maps
- Enlarge the "15+ Years Excellence" badge from 160px to 210px and increase
  the text-path radius/textLength to match, so the circular text hugs the
  ring evenly instead of leaving uneven gaps
- Badge is now a link to the clinic's Google Maps location
  (https://maps.app.goo.gl/XR74vcFzUs7QV8Jg6), opening in a new tab, with a
  hover lift/shadow effect

### Link Google Business card
- Hero's "Google Business Page" card now links out to the real Google
  Business profile (https://share.google/KvOTxHkh2qv7CQfyB) in a new tab
- Add a hover effect: lighter background, visible border, and a lift with
  shadow so the card reads as clickable

### Shorten hero to reduce blank space under CTA
- Reduce doctor photo height from 80vh to 66vh; since hero height follows
  the tallest column, this shrinks the whole hero and removes the large
  empty blue gap that had opened up below the "Make Appointment Now" button
  once the text content moved to the top

### Smaller header CTA
- Add a `size="sm"` variant to the shared ArrowButton and use it for the
  header's "Dr. Yoshita Mazumder" pill so it doesn't dominate the nav bar,
  without affecting the larger buttons elsewhere on the page

### Restore original background-image treatment for pixel-grid decoration
- Replace the small absolutely-positioned `<img>` decoration with the theme's
  original approach: hero-image-bg-prime.png as a CSS `background-image` on
  the image column itself (`background-position: bottom left 80px`,
  `no-repeat`, `background-size: cover`)

### Bigger hero text
- Increase hero H1 from 52px to 68px and the intro paragraph from 16px to 19px

### Center pixel-grid decoration behind head
- Re-anchor hero-image-bg-prime.png from the right edge (matching the
  right-aligned doctor photo) and enlarge it to 58% width so the checkered
  pattern sits directly behind her head/shoulders, matching the reference

### Move hero text block up
- Hero content column (avatar pill, heading, paragraph, CTAs) now aligns to
  the top of the row instead of the bottom, so it stays near the header
  instead of trailing the now much-taller doctor photo; the photo itself
  stays grounded at the hero's bottom edge

### Reposition hero pixel-grid decoration
- Move hero-image-bg-prime.png from a large full-height overlay behind the
  photo to a small translucent block beside the doctor's head/shoulder,
  matching its role as a decorative accent rather than a background fill

### Bigger hero doctor photo
- Increase the doctor photo (and its pixel-grid backdrop) from 62vh to 80vh;
  since the hero's height is driven by the tallest grid column, this also
  makes the blue hero section noticeably taller

### Even hero gutter
- Hero top margin now equals `--section-gutter`, matching the left/right
  margins exactly instead of a smaller custom value

### Tighten white gutters sitewide
- Reduce --section-gutter from 30px to 16px (affects every section's side
  margins consistently) and the hero's top margin from 14px to 8px

### Trim hero top gutter
- Reduce the hero's top white margin from 30px (--section-gutter) to 14px so
  it reads as a slim reveal rather than matching the full side gutter width

### Hero top gutter
- Add a top white margin above the hero equal to `--section-gutter`, matching
  the existing left/right gutters, so the hero box is framed on all four
  sides at rest (header shifts down in lockstep; still snaps flush to the
  browser's top edge once scrolled)

### Header: boxy-at-rest, pinned-on-scroll
- Header now has two states instead of always-fixed: at rest it's transparent
  and inset by the same gutter as the hero, so the nav visually sits inside
  the hero's rounded box (matches the reference screenshot exactly); past a
  40px scroll threshold it becomes `position: fixed`, attaches flush to the
  browser's top edge (square top corners), rounds only the bottom two
  corners, and gains a blurred dark background — while keeping the same
  left/right white gutters as every other section instead of going edge-to-edge

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
