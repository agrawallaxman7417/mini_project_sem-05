---
name: EventYatra Design System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#40000c'
  on-tertiary-container: '#f83256'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#ffdada'
  tertiary-fixed-dim: '#ffb3b6'
  on-tertiary-fixed: '#40000c'
  on-tertiary-fixed-variant: '#920028'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 42px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.05em
  currency-price:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '800'
    lineHeight: 26px
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 2rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes an energetic, cultural, and premium digital canvas tailored for modern live experiences across India. It balances high-velocity event discovery with absolute checkout clarity. The brand voice is dynamic, celebratory, and reliable—evoking the anticipation of live music, cultural festivals, tech summits, and curated dining experiences.

### Aesthetics & Design Movement
The visual language fuses **Modern Editorial Minimalism** with warm, vibrant accents:
- **Foundations**: Uncluttered canvases, precise typographic scale, and structural rhythm inspired by contemporary international ticketing platforms, infused with the warmth and vibrancy of Indian festivities.
- **Accents**: High-chroma saffron, tangerine, and warm coral accents applied deliberately to calls-to-action, live status indicators, and category flags.
- **Surfaces**: Crisp white layered cards resting on warm off-white backdrops, paired with hairline boundaries (1px) and warm ambient shadows that emulate elevated physical passes and event tickets.

## Colors

The palette employs deep ink neutrals for structural permanence, balanced with solar saffron and festive coral tones that direct eye flow to discovery paths and conversion points.

### Role Mapping
- **Primary (`#0F172A`)**: The deep navy foundation used for primary buttons, prominent typography, active navigation states, and deep dark-mode-ready app bars.
- **Secondary (`#F97316`)**: Saffron Tangerine. Used for conversion anchors, booking CTAs, selected date badges, and highlight tags.
- **Tertiary (`#E11D48`)**: Warm Festive Coral-Red. Reserved for urgency triggers ("Selling Fast", "Last 5 Tickets"), live broadcast pulses, heart/wishlist actions, and promotional callouts.
- **Neutral (`#64748B`)**: Slate secondary. Governs metadata, venue coordinates, timestamps, subtle borders, and unselected navigation tabs.
- **Canvas (`#FDFBF7`)**: Warm ivory-tinted off-white background delivering tactile comfort and reducing glare during extended browsing.
- **Surface (`#FFFFFF`)**: Pure crisp white for elevated cards, modal drawers, and bottom sheets.
- **Border / Hairline (`#E2E8F0`)**: Low-contrast boundary defining event cards, dividers, and input borders.

## Typography

Plus Jakarta Sans powers the entire typographic architecture, pairing geometric crispness with humanistic curves that render cleanly across dense mobile listing feeds.

### Currency Formatting Rules
- The Indian Rupee symbol (`₹`) is styled using the exact font family and weight of its associated numeric value to guarantee matching baseline vertical alignment.
- When displaying promotional or starting prices, format as `₹499 onwards` with the value set to `currency-price` or `label-lg`, while the qualifying suffix `onwards` uses `body-sm` in `#64748B`.
- Use Indian numbering grouping (e.g., `₹1,50,000` rather than `₹150,000`) for high-tier booking summaries and sponsorship amounts.

## Layout & Spacing

The layout is built on a responsive 12-column fluid grid system on desktop, collapsing to 6 columns on tablet, and 4 columns on mobile viewports.

### Breakpoints & Fluid Adaptation
- **Desktop (≥1200px)**: 12-column grid with `margin: 2rem` (max-width container: `1280px`), `gutter: 1.5rem`. Event listing grids default to 3 or 4 columns.
- **Tablet (768px - 1199px)**: 6-column grid with `margin: 1.5rem` and `gutter: 1rem`. Event cards transition to 2 columns.
- **Mobile (<768px)**: 4-column layout with `margin: 1rem` and `gutter: 0.75rem`. Cards render as single vertical columns or horizontally scrollable snap carousels (`scroll-snap-type: x mandatory`).

### Component Spacing Rules
- Card padding: `space-md` (16px) on mobile; `space-lg` (24px) on desktop.
- Ticket tier stack gap: `space-sm` (8px).
- Section vertical separation: `space-xl` (40px) on mobile; `3.5rem` (56px) on desktop.

## Elevation & Depth

Visual hierarchy leverages crisp surface separation through warm, ambient shadows and ghost hairline borders. Rather than heavy dark drops, shadows carry a faint tint of `#0F172A` diffused broadly.

### Elevation Levels
- **Base Level (Canvas)**: `#FDFBF7` with zero elevation.
- **Level 1 (Event Cards, Category Strips)**: Pure `#FFFFFF` background with a subtle border `1px solid #E2E8F0` and ambient shadow: `0px 2px 8px -2px rgba(15, 23, 42, 0.05), 0px 1px 3px rgba(15, 23, 42, 0.03)`.
- **Level 2 (Hovered Cards, Dropdown Menus, Filter Popovers)**: `0px 12px 24px -6px rgba(15, 23, 42, 0.08), 0px 4px 8px -2px rgba(15, 23, 42, 0.04)`. Card transitions use `transform: translateY(-3px)`.
- **Level 3 (Sticky Booking Bars, Floating Map Buttons, Drawer Modals)**: `0px 20px 32px -8px rgba(15, 23, 42, 0.12), 0px 8px 16px -4px rgba(15, 23, 42, 0.06)`.
- **Level 4 (Checkout Modals, Pass QR Dialogs)**: Backdrop blur `backdrop-filter: blur(8px)` with background `rgba(15, 23, 42, 0.6)`. Modal dialog elevated with `0px 25px 50px -12px rgba(15, 23, 42, 0.25)`.

## Shapes

The design uses a balanced rounded shape language (`level 2`), communicating approachable hospitality while maintaining high component utility.

### Component Radii Standards
- **Standard Controls & Badges (`rounded-base`)**: `8px` (`0.5rem`) for text fields, interactive tags, and buttons.
- **Cards & Banners (`rounded-lg`)**: `16px` (`1rem`) for standard event cards, date picker containers, and filter containers.
- **Ticket Stubs & Passes (`rounded-xl`)**: `24px` (`1.5rem`) with decorative inward scalloped punch notches (ticket cutout styling) at joint seams.
- **Floating Badges & Pills (`rounded-full`)**: Fully rounded (`9999px`) for category filters, status indicators ("Filling Fast"), and floating action buttons.

## Components

### Buttons
- **Primary (Booking / Main Action)**: Background `#F97316`, text `#FFFFFF`, font `label-lg`, `border-radius: 8px`, padding `12px 24px`. Hover state: `#EA580C`. Active: scales down to `0.98`.
- **Secondary (Dark Contrast)**: Background `#0F172A`, text `#FFFFFF`. Hover state: `#1E293B`.
- **Outline / Filter Action**: Background `transparent`, border `1.5px solid #E2E8F0`, text `#0F172A`. Hover: background `#F8FAFC`, border `#CBD5E1`.

### Event Card
- Constructed as an elevated surface (`#FFFFFF`, `border-radius: 16px`, `border: 1px solid #E2E8F0`).
- Image container holds a 16:9 ratio with top corners rounded (`16px 16px 0 0`).
- Floating chips positioned absolute `top: 12px`, `left: 12px` displaying date/category badges.
- Footer displays Indian pricing in high visual weight (`₹1,499`) alongside a compact primary action button.

### Badges & Status Chips
- **Category Badges**: Pill-shaped (`9999px`), `padding: 4px 12px`, `font-size: 11px`, `font-weight: 700`. Background `#FFF7ED`, text `#C2410C`.
- **Urgency Indicator ("Selling Fast")**: Pill-shaped, background `#FFF1F2`, text `#E11D48`, accompanied by an animated pulsing dot (`6px` diameter).

### Input Fields & Search Bars
- Background `#FFFFFF`, height `48px`, border `1px solid #E2E8F0`, `border-radius: 8px`, `padding: 0 16px`. Text `#0F172A`, placeholder `#94A3B8`. Focus state applies border `#F97316` and an outer ring of `3px rgba(249, 115, 22, 0.15)`.

### Ticket Tier Selector (Specialized Component)
- Horizontal card list displaying ticket tiers (e.g., "Silver Phase", "VIP Fanpit").
- Border is `1.5px solid #E2E8F0`. Selected state transforms border to `2px solid #F97316` with a soft saffron background tint (`#FFFBF7`).
- Includes integrated stepper counter `[ - ] 1 [ + ]` with disabled states at stock limits.