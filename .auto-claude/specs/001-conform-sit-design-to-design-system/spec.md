# Specification: Conform Site Design to Teaouse Design System

## Overview

Transform the Teaouse storefront from a generic Medusa e-commerce template into a calm, premium, illustrated tea brand experience. The implementation will apply the Teaouse Design System across all UI components, establishing consistent colors (Tea Green, Warm Wood, Cream Paper, Ink Brown), typography (Playfair Display for headings, Inter for body), and interaction patterns that embody the brand's philosophy of "ritual over speed, warmth over sharpness, and story over noise."

## Workflow Type

**Type**: feature

**Rationale**: This is a comprehensive design system implementation requiring coordinated changes across configuration files, global styles, and multiple UI components. It introduces new visual patterns rather than modifying existing business logic, making it a feature implementation that builds upon the existing Medusa starter template.

## Task Scope

### Services Involved
- **main** (primary) - Next.js storefront application where all design changes will be implemented

### This Task Will:
- [ ] Configure Tailwind CSS with Teaouse design tokens (colors, typography, border-radius, shadows)
- [ ] Import and configure Google Fonts (Playfair Display, Inter, Caveat)
- [ ] Update global CSS with design system base styles
- [ ] Transform navigation header to wood-toned, calm aesthetic
- [ ] Update footer with design system colors and typography
- [ ] Redesign hero section with Teaouse branding
- [ ] Apply card styles with soft shadows and paper/wood tones
- [ ] Update form inputs with design system styling
- [ ] Update modals with rounded corners and soft styling
- [ ] Update buttons and interactive links with Tea Green accent
- [ ] Replace generic "Medusa Store" branding with "Teaouse"
- [ ] Remove all sharp corners and high-contrast elements

### Out of Scope:
- Adding new illustration assets or mascot images
- Implementing animations beyond allowed fade-in and gentle slide
- Database or backend changes
- Adding new pages or routes
- E-commerce functionality changes

## Service Context

### Main (Next.js Storefront)

**Tech Stack:**
- Language: TypeScript
- Framework: Next.js
- Styling: Tailwind CSS with @medusajs/ui-preset
- Key directories: `src/app`, `src/modules`, `src/styles`, `src/lib`

**Entry Point:** `src/app/layout.tsx`

**How to Run:**
```bash
npm run dev
```

**Port:** 8000

## Files to Modify

| File | Service | What to Change |
|------|---------|---------------|
| `tailwind.config.js` | main | Add Teaouse color palette, typography, border-radius tokens |
| `src/styles/globals.css` | main | Add font imports, CSS custom properties, base styles |
| `src/app/layout.tsx` | main | Configure Google Fonts with next/font |
| `src/modules/layout/templates/nav/index.tsx` | main | Apply wood-toned header, cream background, update branding |
| `src/modules/layout/templates/footer/index.tsx` | main | Apply design system colors, update branding to "Teaouse" |
| `src/modules/layout/components/side-menu/index.tsx` | main | Update menu panel colors to warm wood/cream palette |
| `src/modules/home/components/hero/index.tsx` | main | Redesign with Teaouse branding, cream background, Tea Green CTA |
| `src/modules/products/components/thumbnail/index.tsx` | main | Update card shadow and rounded corners |
| `src/modules/products/components/product-preview/index.tsx` | main | Apply Ink Brown text color |
| `src/modules/common/components/modal/index.tsx` | main | Apply rounded corners, soft styling |
| `src/modules/common/components/input/index.tsx` | main | Update border radius, focus states to Tea Green |
| `src/modules/common/components/interactive-link/index.tsx` | main | Update to Tea Green color |
| `src/app/[countryCode]/(main)/layout.tsx` | main | Ensure cream paper background applied |

## Files to Reference

These files show patterns to follow:

| File | Pattern to Copy |
|------|----------------|
| `tailwind.config.js` | Existing color and theme extension pattern |
| `src/styles/globals.css` | CSS layer structure for base/components/utilities |
| `src/modules/layout/templates/nav/index.tsx` | Component structure and Tailwind class usage |
| `src/modules/products/components/thumbnail/index.tsx` | Container/card pattern with clx conditional classes |

## Patterns to Follow

### Tailwind Color Extension Pattern

From `tailwind.config.js`:

```javascript
colors: {
  grey: {
    0: "#FFFFFF",
    5: "#F9FAFB",
    // ...
  },
},
```

**Key Points:**
- Extend theme.extend.colors object
- Use semantic naming for design tokens
- Provide full palette for primary colors

### CSS Component Classes Pattern

From `src/styles/globals.css`:

```css
@layer components {
  .content-container {
    @apply max-w-[1440px] w-full mx-auto px-6;
  }

  .contrast-btn {
    @apply px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-200 ease-in;
  }
}
```

**Key Points:**
- Use @layer components for reusable patterns
- Apply Tailwind utilities via @apply
- Include transition for hover states

### clx Conditional Class Pattern

From `src/modules/products/components/thumbnail/index.tsx`:

```typescript
import { clx } from "@medusajs/ui"

<Container
  className={clx(
    "relative w-full overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large",
    className,
    {
      "aspect-[11/14]": isFeatured,
      "aspect-[9/16]": !isFeatured && size !== "square",
    }
  )}
>
```

**Key Points:**
- Use clx for conditional Tailwind classes
- Base classes first, then conditional object
- Import from @medusajs/ui

## Requirements

### Functional Requirements

1. **Color System Implementation**
   - Description: Implement the four primary UI colors and six secondary story colors as Tailwind design tokens
   - Acceptance: All UI elements use the defined color palette; no pure white (#FFFFFF) or pure black (#000000) visible in UI

2. **Typography System**
   - Description: Configure Playfair Display for H1-H3, Inter for body text, Caveat for accents
   - Acceptance: Headings render in Playfair Display; body text renders in Inter; fonts load without FOUT

3. **Navigation Redesign**
   - Description: Transform header to horizontal, wood-toned navigation with cream background
   - Acceptance: Header uses Warm Wood (#8B5A2B) for text, Cream Paper (#FAF6EF) for background

4. **Button Styling**
   - Description: Apply 12-16px rounded corners, solid fill, subtle hover darken
   - Acceptance: All buttons have visible rounded corners; hover state darkens without scaling

5. **Card Styling**
   - Description: Apply soft shadows, paper/wood tones, rounded corners to product cards
   - Acceptance: Product thumbnails have soft shadow and rounded-large corners

6. **Brand Update**
   - Description: Replace "Medusa Store" branding with "Teaouse" throughout
   - Acceptance: All instances of "Medusa Store" replaced with "Teaouse"

### Edge Cases

1. **Medusa UI Preset Conflicts** - Override @medusajs/ui-preset styles carefully; use CSS specificity or !important sparingly
2. **Dark Mode** - Ensure design system works with data-mode="light"; disable dark mode if conflicting
3. **Mobile Responsive** - Verify color and typography changes render correctly on mobile breakpoints
4. **Font Loading Failure** - Provide fallback font stack for graceful degradation

## Implementation Notes

### DO
- Follow the color palette strictly: Tea Green (#7FAE5A), Warm Wood (#8B5A2B), Cream Paper (#FAF6EF), Ink Brown (#3A2A1F)
- Use `next/font/google` for font optimization and no FOUT
- Reuse existing `content-container` class for layout consistency
- Apply `rounded-xl` (12px) or `rounded-2xl` (16px) for button border-radius
- Use `transition-colors duration-200 ease-in` for hover states
- Add `bg-cream-paper` to body/main backgrounds

### DON'T
- Create new CSS files when globals.css can be extended
- Use pure white (#FFFFFF) or pure black (#000000)
- Add bounce, elastic, or aggressive animations
- Use gradients (unless extremely subtle)
- Add exclamation marks or hustle language in UI text
- Use condensed fonts or all-caps headings

## Development Environment

### Start Services

```bash
npm run dev
```

### Service URLs
- Storefront: http://localhost:8000

### Required Environment Variables
- `NEXT_PUBLIC_MEDUSA_BACKEND_URL`: Medusa backend URL
- `REVALIDATE_SECRET`: Cache revalidation secret (if configured)

## Success Criteria

The task is complete when:

1. [ ] Tailwind config includes all Teaouse color tokens
2. [ ] Google Fonts (Playfair Display, Inter) load correctly
3. [ ] Navigation header displays wood-toned styling with cream background
4. [ ] Footer displays design system colors and "Teaouse" branding
5. [ ] Hero section reflects Teaouse brand identity
6. [ ] Product cards have soft shadows and rounded corners
7. [ ] All buttons have 12-16px rounded corners
8. [ ] Form inputs use design system focus states
9. [ ] No pure white or pure black visible in UI
10. [ ] No console errors
11. [ ] Existing tests still pass
12. [ ] Visual verification via browser confirms calm, premium aesthetic

## QA Acceptance Criteria

**CRITICAL**: These criteria must be verified by the QA Agent before sign-off.

### Unit Tests
| Test | File | What to Verify |
|------|------|----------------|
| Tailwind Config | `tailwind.config.js` | Config exports without errors, contains teaouse color keys |
| Layout Render | `src/app/layout.tsx` | Component renders without hydration errors |

### Integration Tests
| Test | Services | What to Verify |
|------|----------|----------------|
| Navigation | nav + side-menu | Side menu opens/closes correctly with new styling |
| Product Grid | products + thumbnail | Product cards render with updated styles |

### End-to-End Tests
| Flow | Steps | Expected Outcome |
|------|-------|------------------|
| Homepage Load | 1. Navigate to / | Hero displays with Teaouse branding, cream background, no errors |
| Navigation | 1. Open menu 2. Click Store | Menu styled correctly, navigation works |
| Product Browse | 1. Go to /store 2. View products | Product cards display with soft shadows, rounded corners |
| Footer Verify | 1. Scroll to footer | Footer shows "Teaouse" branding, design system colors |

### Browser Verification (if frontend)
| Page/Component | URL | Checks |
|----------------|-----|--------|
| Homepage | `http://localhost:8000/` | Cream background, Teaouse hero, wood-toned nav |
| Store | `http://localhost:8000/store` | Product cards with soft shadows |
| Product Detail | `http://localhost:8000/products/[any]` | Typography hierarchy correct |
| Cart | `http://localhost:8000/cart` | Buttons have rounded corners |
| Account | `http://localhost:8000/account` | Form inputs styled correctly |

### Color Verification Checklist
| Element | Expected Color | Hex |
|---------|----------------|-----|
| Header background | Cream Paper | #FAF6EF |
| Header text | Warm Wood | #8B5A2B |
| Body text | Ink Brown | #3A2A1F |
| Primary buttons | Tea Green | #7FAE5A |
| Links | Tea Green | #7FAE5A |
| Page background | Cream Paper | #FAF6EF |

### Typography Verification Checklist
| Element | Expected Font |
|---------|---------------|
| H1-H3 headings | Playfair Display |
| Body paragraphs | Inter |
| UI text/labels | Inter |
| Accent quotes (if any) | Caveat |

### QA Sign-off Requirements
- [ ] All unit tests pass
- [ ] All integration tests pass
- [ ] All E2E tests pass
- [ ] Browser verification complete on Chrome, Firefox, Safari
- [ ] Mobile responsive verification (375px, 768px breakpoints)
- [ ] No regressions in existing functionality
- [ ] Code follows established patterns (clx usage, Tailwind classes)
- [ ] No security vulnerabilities introduced
- [ ] No pure white (#FFFFFF) or pure black (#000000) in visible UI
- [ ] All "Medusa Store" references replaced with "Teaouse"
- [ ] Fonts load without FOUT (flash of unstyled text)
- [ ] No bounce, elastic, or aggressive animations present
