

# SEO Improvements: Per-Page Titles and Meta Descriptions

## Problem

Right now, every page on the site shares the same `<title>` and `<meta name="description">` from `index.html`. This means Google sees the same title/description for `/work`, `/about`, `/services`, etc. -- hurting rankings and click-through rates.

## Solution

### 1. Create a `useSEO` hook
A small custom hook (`src/hooks/useSEO.ts`) that updates `document.title` and the `<meta name="description">` tag on each page mount. No new dependencies needed.

### 2. Add the hook to every page
Each page will call `useSEO()` with a unique title and description tailored for search:

| Page | Title | Description |
|------|-------|-------------|
| Home (Index) | Tapan & Partners -- Architecture & Interior Design in Budapest | Budapest-based architecture and interior design studio specializing in residential, commercial, and renovation projects. |
| Work | Our Work -- Tapan & Partners | Explore our portfolio of architectural and interior design projects across residential, commercial, and industrial sectors in Budapest. |
| Services | Services -- Tapan & Partners | Architectural design, interior design, renovation, construction management, consultation, and furniture design services in Budapest. |
| About | About -- Tapan & Partners | Meet the team behind Tapan & Partners. Founded in 2024, we create thoughtful architectural and interior design solutions in Budapest. |
| Contact | Contact -- Tapan & Partners | Get in touch with Tapan & Partners. Visit our design office and showroom at Iranyi u. 18, Budapest. |
| Privacy Policy | Privacy Policy -- Tapan & Partners | Privacy policy for Tapan & Partners website, covering data collection, cookies, and your GDPR rights. |
| Architectural Design | Architectural Design -- Tapan & Partners | Custom architectural design services in Budapest. From concept to completion, we create spaces shaped by context and craft. |
| Interior Design | Interior Design -- Tapan & Partners | Professional interior design services in Budapest. Curated environments balancing function with refined aesthetics. |
| Renovation | Renovation & Adaptive Reuse -- Tapan & Partners | Renovation and adaptive reuse services in Budapest. Breathing new life into existing structures with modern sensibility. |
| Construction | Construction & Project Management -- Tapan & Partners | Construction supervision and project management in Budapest. Seamless execution from concept to completion. |
| Consultation | Consultation & Advisory -- Tapan & Partners | Architecture and design consultation in Budapest. Strategic guidance for design direction, feasibility, and planning. |
| Furniture Design | Furniture Design -- Tapan & Partners | Bespoke furniture design in partnership with Mekan Furniture. Custom pieces crafted for your space. |

## Files Changed

- **New:** `src/hooks/useSEO.ts` -- the custom hook
- **Modified:** All 12 page files to add the `useSEO()` call (one line each)
  - `src/pages/Index.tsx`
  - `src/pages/Work.tsx`
  - `src/pages/Services.tsx`
  - `src/pages/About.tsx`
  - `src/pages/Contact.tsx`
  - `src/pages/PrivacyPolicy.tsx`
  - `src/pages/services/ArchitecturalDesign.tsx`
  - `src/pages/services/InteriorDesign.tsx`
  - `src/pages/services/Renovation.tsx`
  - `src/pages/services/Construction.tsx`
  - `src/pages/services/Consultation.tsx`
  - `src/pages/services/FurnitureDesign.tsx`

## Technical Details

The `useSEO` hook will use `useEffect` to:
1. Set `document.title` to the provided title
2. Find or create the `<meta name="description">` tag and update its `content` attribute
3. Restore the original title/description on unmount (cleanup)

This is lightweight, requires zero new dependencies, and follows the existing hook pattern in the project (`src/hooks/`).
