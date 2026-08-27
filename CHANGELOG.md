# Changelog — MaxFace Dental Care rebuild

All notable changes on the `nextjs-rebuild` branch. One entry per commit.

## [Unreleased]

### Add teeth grinding (bruxism) blog post, English + Bangla
- New bilingual post: "Teeth Grinding at Night: How Exam Season and
  Deadline Stress Are Wearing Down Dhaka's Teeth" (TMJ & Jaw Care) —
  explains sleep vs awake bruxism, warning signs, and why exam pressure
  (SSC/HSC/admission tests), Dhaka traffic stress and late-night cha/paan
  make it worse locally
- Cites a 2013 Journal of Oral Rehabilitation systematic review on sleep
  bruxism prevalence; covers night guard treatment and stress management
- Linked in `BN_BY_SLUG` under `teeth-grinding-bruxism-stress-bangladesh`

### Add dental veneers blog post, English + Bangla
- New bilingual post: "Dental Veneers: What They Actually Fix, and Where
  the 'Smile Design' Trend Goes Wrong" (Cosmetic Dentistry), explaining
  what a veneer is, what it can and can't treat, and the composite vs
  porcelain trade-off (cost, staining, reversibility, longevity)
- Covers the rise of social-media-driven "smile design" packages that file
  down healthy teeth for a uniform veneer look without an actual exam, plus
  Bangladesh-specific care notes — not using front teeth to open bottles or
  crack shrimp/shutki shells, paan/zarda/gul staining and loosening veneer
  bonds, and night-guard use for grinding-related fractures
- Added to `lib/blog.ts` (English) and `lib/blog-bn.ts` (Bangla), linked via
  `BN_BY_SLUG` in `lib/i18n/posts.ts`; both `/en/blog/` and `/bn/blog/`
  routes build and sitemap.xml picks it up automatically

### Add orthodontic retainer blog post, English + Bangla
- New bilingual post: "Retainers After Braces: Why Stopping Early Undoes
  Your Treatment" (Orthodontics), explaining why teeth relapse without a
  retainer, the three main retainer types (fixed/bonded, removable clear,
  Hawley), and how to care for each
- Covers Bangladesh-specific reasons retention fails — wedding/exam-season
  stress causing missed wear, retainers lost wrapped in tissue at dawats,
  humid weather encouraging bacterial/fungal buildup on damp cases, and
  clear plastic warping from heat (hot cars, hot cha-temperature rinsing)
  — plus early warning signs of relapse
- Added to `lib/blog.ts` (English) and `lib/blog-bn.ts` (Bangla), linked via
  `BN_BY_SLUG` in `lib/i18n/posts.ts`; both `/en/blog/` and `/bn/blog/`
  routes build and sitemap.xml picks it up automatically

### Add dry mouth (xerostomia) blog post, English + Bangla
- New bilingual post: "Dry Mouth: Why It's More Than Just Thirst, and Why
  Your Cavities Are Increasing" (Oral Health), explaining why saliva loss
  removes teeth's natural protection and why patients on Bangladesh's most
  common medicine classes — blood pressure, diabetes, antihistamines — are
  often affected without realising it
- Covers Dhaka-specific drivers (mouth-breathing from dust/pollution,
  Ramadan/heat dehydration), why reaching for paan, zarda, or extra-sweet
  cha to relieve dryness backfires and accelerates gumline decay, warning
  signs, and a practical relief list (hydration habits, sugar-free gum,
  never self-adjusting prescribed medicine, high-fluoride toothpaste,
  more frequent check-ups)
- Added to `lib/blog.ts` (English) and `lib/blog-bn.ts` (Bangla), linked via
  `BN_BY_SLUG` in `lib/i18n/posts.ts`; both `/en/blog/` and `/bn/blog/`
  routes build and sitemap.xml picks it up automatically

### Add dental crowns blog post, English + Bangla
- New bilingual post: "Dental Crowns in Bangladesh: Types, Real Costs, and
  How Long They Actually Last" (Restorative Dentistry), explaining when a
  crown is actually needed vs. a filling, and an honest comparison of the
  three materials offered in Dhaka chambers — metal, PFM, and zirconia —
  with typical local price ranges for each
- Covers why a poorly fitted crown from an unlicensed technician traps
  decay under the margin, how supari/paan/zarda chewing and stress-driven
  bruxism shorten a crown's life, ADA guidance on realistic crown lifespan
  (5–15 years, often 20–30 with good care), and daily aftercare
- Added to `lib/blog.ts` (English) and `lib/blog-bn.ts` (Bangla), linked via
  `BN_BY_SLUG` in `lib/i18n/posts.ts`; both `/en/blog/` and `/bn/blog/`
  routes build and sitemap.xml picks it up automatically

### Add cracked tooth syndrome blog post, English + Bangla
- New bilingual post: "Cracked Tooth Syndrome: The Everyday Habits Silently
  Fracturing Bangladeshi Teeth" (Restorative Dentistry), covering local
  habits that fracture teeth — chewing ice from a water glass, biting
  supari instead of using a nut cutter, opening bottle caps with the
  teeth, students biting pens during exam stress — plus the classic
  "sharp pain on release of bite" symptom pattern and the diagnosis/
  treatment ladder from bonding to crown, root canal, or extraction
- Added to `lib/blog.ts` (English) and `lib/blog-bn.ts` (Bangla), linked via
  `BN_BY_SLUG` in `lib/i18n/posts.ts`; both `/en/blog/` and `/bn/blog/`
  routes build and sitemap.xml picks it up automatically

### Add Ramadan fasting and oral health blog post, English + Bangla
- New bilingual post: "Fasting in Ramadan and Your Teeth: A Dentist's Guide
  for Bangladeshi Patients" (Patient Guide), answering the two questions
  patients ask every Ramadan — does brushing break the fast, and why does
  breath get worse by afternoon — with plain dental facts, deferring actual
  fiqh rulings to religious guidance
- Covers when routine treatment (fillings, scaling, injections) is fine
  during fasting hours vs. when bleeding-risk procedures should wait for
  iftar, why a severe toothache/infection should never be delayed for Eid,
  and the iftar/suhoor cavity risk from khejur, piyaju and jilapi
- Added to `lib/blog.ts` (English) and `lib/blog-bn.ts` (Bangla), linked via
  `BN_BY_SLUG` in `lib/i18n/posts.ts`; both `/en/blog/` and `/bn/blog/`
  routes build and sitemap.xml picks it up automatically

### Add scaling (professional teeth cleaning) blog post, English + Bangla
- New bilingual post: "Scaling (Professional Teeth Cleaning): Myths vs
  Facts" (Preventive Care), debunking the widespread Bangladeshi belief
  that scaling loosens or thins teeth, explaining plaque vs. hardened
  tartar in plain terms, and citing the WHO 2022 Global Oral Health Status
  Report on gum disease prevalence
- Covers why paan, zarda, gul and sweetened cha speed up tartar buildup
  and staining, and how often scaling is needed for regular users
- Added to `lib/blog.ts` (English) and `lib/blog-bn.ts` (Bangla), linked via
  `BN_BY_SLUG` in `lib/i18n/posts.ts`; both `/en/blog/` and `/bn/blog/`
  routes build and sitemap.xml picks it up automatically

### Add jaw fracture / facial trauma blog post
- New post: "Jaw Fracture After a Road Accident: What to Do in the First
  Hour" (Oral Surgery), covering Dhaka road-accident context, first-aid
  steps before reaching a surgeon, why OMFS assessment and imaging matter,
  and what plating/wiring treatment and recovery involve
- Follows BLOG-GUIDELINES.md; sitemap.xml picks it up automatically

### Add recurring mouth ulcers blog post
- New post: "Mouth Ulcers That Keep Coming Back: Causes, Home Care and When
  to Worry" (General Dentistry), covering Bangladesh-specific triggers
  (jhal food, hot cha, paan/zarda, exam-season and Ramadan stress) and
  common nutritional deficiencies flagged by national nutrition surveys
- Distinguishes ordinary aphthous ulcers from warning-sign patterns (same
  spot every time, painless sores past two to three weeks) that need a
  dental exam rather than home remedies
- Follows BLOG-GUIDELINES.md; sitemap.xml picks it up automatically

### Add denture care and dental emergency first-aid blog posts
- New post: "Denture Care 101: Cleaning, Fit, and Knowing When to Replace
  Them" (Restorative Dentistry), citing the WHO Global Oral Health Status
  Report
- New post: "Dental Emergency First Aid: What to Do Before You Reach the
  Chamber" (Patient Guide), citing IADT tooth-avulsion replantation
  guidelines
- Both posts follow BLOG-GUIDELINES.md; sitemap.xml picks them up
  automatically, no manual sitemap edits needed

### Add blog post authoring guidelines
- New BLOG-GUIDELINES.md, included from CLAUDE.md, directing all future
  posts to: take a Bangladesh-specific angle, cite real data/research where
  possible, stay plain-language, use point-based lists where appropriate,
  end with a single clear takeaway, and always route the reader to Maxface
  Dental Care by name

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
