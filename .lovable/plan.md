

## Intuitive Website Improvements Plan

### Phase 1: Navigation Enhancements

**1.1 Active Page Indicator**
- Update `Navigation.tsx` to use React Router's `Link` component instead of `<a>` tags
- Add active state styling using `useLocation()` hook to highlight the current page
- Add an underline or bold effect to show which page the user is on

**1.2 Mobile Menu Auto-Close**
- Close the mobile menu automatically when a user clicks a navigation link
- Add smooth transition animation for mobile menu open/close

---

### Phase 2: Visual Feedback Improvements

**2.1 Service Items Enhancement**
- Add arrow icons (using lucide-react's `ArrowRight`) to service items
- Improve hover states with subtle slide animation on the arrow
- Make the entire service card feel more interactive

**2.2 Portfolio Project Links**
- Make portfolio/work items clickable (prepare structure for individual project pages)
- Add "View Project" text or arrow that appears on hover
- Add subtle cursor pointer indication

**2.3 Hero Scroll Indicator**
- Replace the text "SCROLL" with an animated chevron/arrow
- Add smooth bounce animation to draw attention
- Make it clickable to smooth-scroll to the next section

---

### Phase 3: Call-to-Action & Footer

**3.1 Fix Broken CTA Links**
- Change Work page CTA from `#contact` to `/contact` page link
- Style CTAs as subtle buttons or more prominent links

**3.2 Add Site-Wide Footer**
- Create a `Footer.tsx` component with:
  - Quick navigation links
  - Contact information (email, phone, address)
  - Social media links (Instagram, LinkedIn)
  - Copyright notice
- Add footer to all pages

---

### Phase 4: Accessibility & Polish

**4.1 Breadcrumb Navigation**
- Add breadcrumbs to service detail pages (Home > Services > Architectural Design)
- Helps users understand their location in the site hierarchy

**4.2 Loading States**
- Add smooth page transitions between routes
- Subtle fade-in animations when content loads

**4.3 Contact Form**
- Add an actual contact form to the Contact page/section
- Include fields: Name, Email, Project Type, Message
- Add form validation and success feedback

---

### Summary of Files to Modify/Create

| File | Action |
|------|--------|
| `src/components/Navigation.tsx` | Update with React Router Links, active states |
| `src/components/Footer.tsx` | Create new site-wide footer |
| `src/components/Services.tsx` | Add arrow icons and enhanced hover |
| `src/components/Portfolio.tsx` | Make projects clickable |
| `src/components/Hero.tsx` | Improve scroll indicator |
| `src/pages/Work.tsx` | Fix CTA link |
| `src/pages/Index.tsx` | Add Footer component |
| All other pages | Add Footer component |
| Service detail pages | Add breadcrumb navigation |

