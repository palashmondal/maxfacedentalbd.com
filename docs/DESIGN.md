# MaxFace Dental Care — Design Specification

Baseline: `full page screenshot.png` (2940×19252, desktop ~1470px CSS width @2x).
Section crops for pixel-matching live in `docs/reference/` (00-hero … 09-section, top→bottom).
Source of truth for exact values: `assets/css/css-variable.css`, `assets/css/style.css`,
`assets/css/post-57299.css` (page CSS), `assets/js/function.js` (animation parameters).

## 1. Design tokens (exact, from `css-variable.css`)

| Token | Value | Use |
|---|---|---|
| `--primary` | `#161A2D` | Dark navy — headings, dark section bg, footer |
| `--secondary` | `#F2F7FF` | Light blue-gray — page/section light bg, cards |
| `--accent` | `#316DFF` | Royal blue — CTAs, icons, links, active states |
| `--text` | `#626467` | Body text gray |
| `--white` | `#FFFFFF` | Cards, buttons, text on dark |
| `--divider` | `#161A2D1A` | Light divider |
| `--dark-divider` | `#FFFFFF1A` | Divider on dark |
| Star lime | `#BCFF00` | Rating stars accent |
| Font | `"Sora", sans-serif` | Everything (headings 600/700, body 400) |

**Gradients (blue sections):** dark navy `#161A2D` → accent-blue; page CSS uses
`linear-gradient(180deg, #161A2D00 48.78%, var(--primary))` style overlays — copy exact stops
from `post-57299.css` per section when building.

**Radii:** sections ~40px (rounded blocks floating on white gutters), cards 20px,
inputs/chips 10px, pills/buttons 100px, circles 50%.

**Buttons:** white pill (radius 100px) + blue circular arrow chip attached right;
dark variants invert. Hover: arrow chip/background transitions.

## 2. Page structure (top → bottom)

1. **Header** — dark navy bar, absolute over hero (z-index 100). Tooth logo + wordmark left;
   nav center: Home (active, blue) / Doctor / Services / Blog / Contact Us;
   right: white pill CTA "Dr. Yoshita Mazumder" + blue arrow chip.
2. **Hero** (`docs/reference/00-hero.png`) — navy→blue gradient, rounded, white gutter.
   Left: avatar-stack pill "More than Thousand Satisficed Patients"; H1 "Creating confident
   smiles with care!" (white, ~64px); gray-white intro paragraph with bold spans;
   "Make Appointment Now" button; Google rating card (G logo, 4.9/5 counter, lime stars,
   "Google Business Page"). Right: doctor photo (transparent PNG) over pixel-grid decoration.
   Bottom-center overlapping edge: **rotating circular text badge** "15+ Years Excellence *"
   (blue circle, white ring, plane icon center).
3. **Intro bento** (`01`) — white bg. Blue dotted eyebrow "MAXFACE DENTAL CARE"; large centered
   navy heading (3 lines). Row of 3 cards: (a) photo card w/ dark overlay, title "Why Families
   Count On Us For Dentistry", outline pill tags "Trusted Experts"/"Gentle Care";
   (b) navy→blue gradient card, giant **500+ counter**, caption; (c) `#F2F7FF` card,
   "Personalized Dental Solutions", team photo. Below: "Join us and create smiles… Contact Us"
   (blue underlined link) + G 4.9/5 lime stars "520 reviews".
4. **Why MaxFace** (`02`) — full-bleed rounded gradient section w/ subtle grid-line texture.
   Eyebrow "WHY MaxFace Dental Care" + white heading. Center: tooth-implant PNG inside
   thin-outline bulb/tooth shape. 4 corner feature blocks, each: 48px glass icon tile
   (rounded 10px), white bold title, light-blue body text. Titles: State-of-Art Technology /
   Compassionate and Affordable Care / Patient-Centered Approach / Family-Friendly Environment.
5. **Services** (`03`) — `#F2F7FF` rounded section. Eyebrow "SERVICES @MAXFACE DENTAL CARE",
   navy heading "Complete Dental Care for Every Family in Khilgaon, Bangladesh".
   4 white cards (radius 20px, notched bottom-right corner): blue-dot category label
   (Oral & Maxillofacial Surgery / Endodontist / Surgery / Emergency), bold navy title,
   large thin-line blue icon bottom-left, blue circle arrow (↗) in the notch.
   Below: contact line + "4.9/5 ★(lime) Our 4k Patient Review".
6. **About doctor** (`04`) — white bg, 3 columns.
   (a) doctor-at-clinic photo, radius 20px, white ellipse notch bottom w/ blue plane-arrow chip;
   (b) stacked: white card (3 avatars + blue "+" chip, 4.9/5 counter, caption) then gradient
   card "24/7 / Around the Clock Emergency Service" + 3D tooth + sparkles;
   (c) eyebrow "ABOUT DOCTOR", H2 "Dr. Yoshita Mazumder" + "BDS, BCS, MS (OMS)", bio paragraph,
   2×2 outline pills w/ blue circle icons (Highly Qualified Doctor / Female Doctor /
   15 years of Experience / Affordable Treatment), divider, 2 buttons: "Book An Appointment",
   "Call now: 01344473973".
7. **How it works** (`05`) — dark gradient rounded section, wave-lines decoration top-right.
   Eyebrow "HOW IT WORK", white heading "Step-by-step care for healthy, confident smiles".
   4 translucent cards (white ~8% alpha, radius 20px): outline pill "STEP 02…04" (first card
   shows "Oral and Maxillofacial Surgery"), bold title, body text. Titles: Book Appointment /
   Consultation & Checkup / Personal Treatment Plan / Enjoy a Bright Smile.
   Below: white pill "Free" + "Let's make something great work together. **Get Free Quote**".
8. **Before/After** (`06`) — white bg. Heading "Stunning Smile Transformations Before & After
   Treatment @ MaxFace Dental Care". 4 tabs w/ line icons: Invisalign Treatment (active:
   navy text + blue underline; inactive gray) / Veneers & Bonding / Pediatric Transformations /
   Teeth Whitening. Tab panel: 3 **draggable before/after comparison images** (rounded 20px,
   white vertical divider + circle handle w/ ◂▸). Below: "Free" pill + "…Try Selection" link.
9. **Testimonials** (`07`) — `#F2F7FF` rounded card section. Heading "Happy Patients Sharing
   Their Dental Care Journey @ MaxFace". 3-up **Swiper carousel** (loop, 6 pagination bullets,
   active = blue ring): white cards radius 20px, 5 blue stars, quote text, divider, avatar +
   bold name + treatment label, blue quote glyph right. Real reviews (Palash Mondal /
   Md Jubayer Ahmed / Ananya Kar). Below: "4.9/5 ★ Our 4k Patient Review".
10. **Appointment** (`08`) — dark rounded section, clinic photo bg + dark overlay (**parallax**).
    Left: eyebrow "BOOK AN APPOINTMENT", white H2 "Schedule your visit for a healthier smile",
    paragraph; icon rows: Customer Services "+91 - 123 456 789" (placeholder → replace with
    01344473973), divider, Opening Hours "Monday – Saturday (09:00 – 21:00) / Sunday (Closed)".
    Right: glass panel (blur, radius 20px) "Make an Appointment": First/Last Name row, E-mail,
    Phone No., Service Type select + date input row, full-width blue "Submit Message".
11. **Footer** (`09`) — navy→blue gradient rounded block on black. Top inner bar (glass,
    radius 20px): logo + wordmark, "Subscribe to Free Advices" heading, email input +
    white paper-plane button. Columns: brand/address "411/B, Malibagh Chowdhury Para Road,
    Dhaka-1219 (Inside Nirvana Health Care)" + blurb; Quick Links (Home/About Us/Services/
    Appointment); Our Services (Oral & Maxillofacial Surgery/Orthodontics/Paediatric Dentistry/
    Restorative Dentistry); Chamber Working Hours (Sun–Thurs 4PM–10PM / Saturday 2PM–10PM /
    Friday Closed). Social circles: Maps, YouTube, Facebook, Instagram. Divider,
    centered "Copyright © MaxFace Dental Care | 2026 | All Rights Reserved."

## 3. Animation & effects inventory (all must be reproduced)

Parameters below are copied from `assets/js/function.js` — keep them verbatim.

| # | Effect | Exact behavior | Where |
|---|---|---|---|
| 1 | Preloader | `.theme-preloader` white overlay, spinner ring + tooth logo; `fadeOut(600)` on load | page load |
| 2 | Magic cursor | `#magic-cursor > #ball` — circular cursor follower (GSAP lerp), grows on link hover; body class `tt-magic-cursor` | global |
| 3 | Heading char reveal (style-3) | SplitText chars: from `x:50, opacity:0`, to 0/1, `duration:1, ease:Back.easeOut, stagger:0.02`, ScrollTrigger `start:"top 90%"`, perspective 400 | hero H1, most section H2s |
| 4 | Scrub reveal (style-4) | chars `opacity:.3, x:-7` → 1/0, scrub:1 between `top 92%`–`top 60%` | select headings |
| 5 | Word reveal (style-1/2) | words/chars `x:20, autoAlpha:0`, stagger .05/.03, start `top 85%` | misc |
| 6 | Image clip reveal | `clipPath: inset(0 0% 0 0)` sweep, 1.5s power2.out, start `top 90%` | `.at-animation-image-style-1` |
| 7 | Entrance fadeInUp | Elementor `elementor-invisible` → `fadeInUp` (~15 elements) | cards |
| 8 | Counter count-up | numerator: `data-from-value:0` → `data-to-value` (4.9 / 500), duration 2000ms, on-view | rating cards, 500+ |
| 9 | Rotating text circle | SVG textPath "15+ Years Excellence * ×2" on circle, continuous slow rotation (animate-circle.js); blue disc + plane icon | hero badge, why-choose |
| 10 | Testimonials Swiper | loop mode (duplicate slides), 3 visible, pagination bullets | testimonials |
| 11 | Before/after slider | twentytwenty-style draggable divider (`no_overlay:true`), re-init on tab switch (150ms delay) | transformations tabs |
| 12 | WebGL distortion hover | three.js displacement shader (`hoverEffect`): dispFactor 0→1 on mouseenter of parent container, `speedIn 1.6 / speedOut 1.2`, `Expo.easeOut`, displacement map `image-effect.jpg` | `.at-distortion-effect` images |
| 13 | Shiny glass sweep | `.at-shiny-glass-effect` — CSS diagonal sheen sweep on hover (see `style.css`) | image cards |
| 14 | Parallax bg | ekit parallax, `bg_speed: 0.5` | appointment section |
| 15 | Smooth scroll | smooth-scroll 16.1.3 + `fancy-scrollbar` styling | global |
| 16 | Lazy bg observer | IntersectionObserver adds `e-lazyloaded`, rootMargin 200px | sections |

## 4. Responsive breakpoints (Elementor config)

mobile ≤767, tablet ≤1024, laptop ≤1440, desktop base 1470+. Content max-width ~1400px.

## 5. Known content fixes wanted (approved)

- Appointment/newsletter forms post to dead WordPress demo endpoints → **WhatsApp deep link**
- "+91 - 123 456 789" placeholder → real number 01344473973 (confirm WhatsApp number)
- 8 images hotlinked from `demo.awaikenthemes.com` → localize
- Appointment-section hours (Mon–Sat 09–21) contradict footer chamber hours (Sun–Thurs 4–10PM,
  Sat 2–10PM, Fri closed) → confirm with user which is correct
