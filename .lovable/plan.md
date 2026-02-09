

# Fix Social Media Preview (WhatsApp Thumbnail)

## The Problem
When you share `tapanpartners.com` on WhatsApp (or Facebook, LinkedIn, etc.), it shows "ARCH STUDIO - Minimal Architecture & Design" with the old template image. This is because `index.html` still has the old template's meta tags.

## What Will Change

Update `index.html` with:
- **Title**: "Tapan & Partners" (instead of "ARCH STUDIO")
- **Description**: A proper description of the firm
- **Author**: "Tapan & Partners"
- **OG Title & Description**: Updated for WhatsApp/social previews
- **OG Image**: A screenshot of the actual site (we can upload one or take a fresh one)
- **Twitter tags**: Updated to match

## Important Note
After this change is deployed, WhatsApp and other platforms **cache** old previews. It may take some time for the new preview to show up. You can also try pasting the link fresh in a new chat.

## Technical Details

**File to modify:** `index.html`

All 7 meta tags in the `<head>` section will be updated:
1. `<title>` tag
2. `<meta name="description">`
3. `<meta name="author">`
4. `<meta property="og:title">`
5. `<meta property="og:description">`
6. `<meta property="og:image">` (new screenshot needed)
7. `<meta name="twitter:site">` (remove @lovable_dev reference)
8. `<meta name="twitter:image">` (new screenshot)

I will ask you what description you'd like for the firm before making changes.

