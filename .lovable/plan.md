

# Multi-Language Support: English, Hungarian, Turkish

## Overview
Add a complete internationalization (i18n) system with a language switcher in the navigation. No external libraries needed -- we'll build a lightweight solution using React Context.

## Architecture

### New Files

**1. `src/i18n/types.ts`** -- Type definitions for the translation keys
**2. `src/i18n/en.ts`** -- English translations (default)
**3. `src/i18n/hu.ts`** -- Hungarian translations
**4. `src/i18n/tr.ts`** -- Turkish translations
**5. `src/i18n/LanguageContext.tsx`** -- React context provider with `useLanguage()` hook and `t()` translation function
**6. `src/components/LanguageSwitcher.tsx`** -- Compact language selector (EN / HU / TR buttons)

### Translation Scope

All user-facing text will be extracted into translation files. This covers:

| Area | Strings (approx.) |
|------|-------------------|
| Navigation links | 5 (Home, Work, Services, About, Contact) |
| Hero section | 2 (title, subtitle) |
| Homepage sections (Services teaser, About teaser, Portfolio, Contact CTA) | ~20 |
| Footer | ~10 |
| Work page (headings, descriptions, filter categories, CTA) | ~10 |
| About page (headings, philosophy, team roles, approach items) | ~25 |
| Services page + 6 sub-pages (titles, descriptions, offerings) | ~60 |
| Contact page (labels, hours, social) | ~15 |
| Privacy Policy page | ~25 |
| Cookie consent banner | ~4 |
| Project detail dialog (labels: Year, Clients, Services, View Project) | ~5 |
| SEO titles and descriptions (12 pages) | ~24 |

**Total: ~200 translation keys**

Note: Project data (titles, descriptions, cities, client names) will remain in English as these are proper nouns and industry-specific content. Only UI labels within the project dialog (like "YEAR", "CLIENTS", "SERVICES") will be translated.

### How It Works

1. `LanguageContext` stores the selected language in `localStorage` (key: `language`, default: `en`)
2. Every component calls `const { t } = useLanguage()` to access translations
3. `t("nav.home")` returns the string for the current language
4. The `useSEO` hook will also use translations for page titles/descriptions
5. Language preference persists across sessions

### Language Switcher Design

A minimal inline switcher in the navigation bar (next to the theme toggle):

```
EN | HU | TR
```

- Active language is highlighted (text-foreground), others are muted
- Separated by vertical pipes, matching the site's minimal aesthetic
- On mobile, appears in the mobile menu above the theme toggle

## Modified Files

| File | Change |
|------|--------|
| `src/main.tsx` | Wrap App with `LanguageProvider` |
| `src/components/Navigation.tsx` | Add `LanguageSwitcher`, translate nav links |
| `src/components/Hero.tsx` | Translate subtitle |
| `src/components/About.tsx` | Translate section text |
| `src/components/Contact.tsx` | Translate CTA text |
| `src/components/Services.tsx` | Translate service titles/descriptions |
| `src/components/Portfolio.tsx` | Translate section headings and labels |
| `src/components/Footer.tsx` | Translate all footer text |
| `src/components/CookieConsent.tsx` | Translate cookie banner |
| `src/components/ProjectDetailDialog.tsx` | Translate labels (Year, Clients, Services) |
| `src/components/Breadcrumb.tsx` | No change needed (receives translated props) |
| `src/pages/Index.tsx` | Pass translated SEO strings |
| `src/pages/Work.tsx` | Translate headings, categories, CTA |
| `src/pages/Services.tsx` | Translate service list |
| `src/pages/About.tsx` | Translate all content |
| `src/pages/Contact.tsx` | Translate labels and content |
| `src/pages/PrivacyPolicy.tsx` | Translate all policy text |
| `src/pages/services/*.tsx` (6 files) | Translate service page content |
| `src/hooks/useSEO.ts` | No structural change (receives translated strings) |

## Technical Details

### Translation file structure (example)

```typescript
// src/i18n/en.ts
export const en = {
  nav: {
    home: "HOME",
    work: "WORK",
    services: "SERVICES",
    about: "ABOUT",
    contact: "CONTACT",
  },
  hero: {
    title: "Tapan & Partners",
    subtitle: "architecture & more",
  },
  services: {
    heading: "SERVICES",
    subheading: "What We Do",
    viewAll: "View All Services",
    architectural: {
      title: "Architectural Design",
      description: "Thoughtful spaces shaped by context, craft, and clarity of vision",
      // ... sub-page content
    },
    // ... other services
  },
  // ... etc.
};
```

### Context provider

```typescript
// src/i18n/LanguageContext.tsx
type Language = "en" | "hu" | "tr";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}>();
```

The `t()` function uses dot-notation key lookup (e.g., `t("nav.home")`) and falls back to English if a key is missing in the selected language.

### Implementation order

1. Create translation infrastructure (types, context, English file)
2. Create Hungarian and Turkish translation files
3. Add LanguageSwitcher component
4. Update main.tsx with provider
5. Update all components and pages to use `t()` function

