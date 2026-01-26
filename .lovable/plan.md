

## Navigation Update: Brand Name & Home Link

### Goal
Update the navigation to display the full brand name "Tapan & Partners" and add "HOME" as the first navigation link for maximum clarity.

### Changes to `src/components/Navigation.tsx`

1. **Update logo text**: Change "T&P" to "Tapan & Partners" (line 30)

2. **Add HOME to navigation links**: Insert HOME as the first item in the `navLinks` array (line 10-15)

### Updated Navigation Structure

```text
Before:
[T&P]                    WORK | SERVICES | ABOUT | CONTACT    [Theme]

After:
[Tapan & Partners]       HOME | WORK | SERVICES | ABOUT | CONTACT    [Theme]
```

### Technical Details

The `navLinks` array will be updated to:
```text
{ href: "/", label: "HOME" }      <- New first item
{ href: "/work", label: "WORK" }
{ href: "/services", label: "SERVICES" }
{ href: "/about", label: "ABOUT" }
{ href: "/contact", label: "CONTACT" }
```

The existing `isActive` function already handles the "/" path correctly, so HOME will show an active underline when on the homepage.

### Files to Edit
- `src/components/Navigation.tsx`

