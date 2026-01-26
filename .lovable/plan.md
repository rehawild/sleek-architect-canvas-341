

## Simplify Homepage Contact Section

### Goal
Reduce the homepage Contact section to a focused, minimal design with just email, phone, and a prominent CTA button linking to the full Contact page.

### Current vs. New Layout

```text
Current Homepage Contact:
+------------------------------------------+
| GET IN TOUCH                             |
| Let's Create Something Extraordinary     |
|                                          |
| EMAIL: admin@tapanpartners.com           |
| PHONE: +36 70 228 18 15                  |
| ADDRESS: 1056, Irányi u. 18, Budapest    |
|                                          |
| HOURS: Mon-Fri Open, Sat-Sun Closed      |
| FOLLOW US: Instagram, LinkedIn           |
+------------------------------------------+

Simplified Homepage Contact:
+------------------------------------------+
| GET IN TOUCH                             |
| Let's Create Something Extraordinary     |
|                                          |
|    [Email Icon] admin@tapanpartners.com  |
|    [Phone Icon] +36 70 228 18 15         |
|                                          |
|    [ Get in Touch ] <- Button to /contact|
+------------------------------------------+
```

### Changes to `src/components/Contact.tsx`

1. **Remove address section** (lines 30-37)
2. **Remove hours section** (lines 41-53)
3. **Remove social links section** (lines 56-65)
4. **Simplify layout** - Change from 2-column grid to centered single column
5. **Add "Get in Touch" button** - Link component from react-router-dom to `/contact`
6. **Add Lucide icons** - Mail and Phone icons for visual clarity

### Technical Details

**Imports to add:**
- `Link` from `react-router-dom`
- `Mail`, `Phone` from `lucide-react`

**New structure:**
- Centered content with `text-center` alignment
- Email and phone displayed inline with icons
- Prominent button using the existing Button component with `asChild` for Link wrapper

### Files to Edit
- `src/components/Contact.tsx`

### Result
The homepage Contact section becomes a teaser that encourages users to visit the full Contact page for complete details (address, hours, social links, contact form, and map).

