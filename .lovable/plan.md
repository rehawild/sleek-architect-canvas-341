

## Overlay Thumbnail Gallery Navigation

### What We're Building
Moving the gallery thumbnail selector from below the content section to **inside the main image area**, positioned at the bottom with a semi-transparent background. This is a common "filmstrip overlay" pattern that makes gallery navigation more accessible, especially on smaller screens.

### Visual Layout

```text
+---------------------------------------+
|  [Category Badge]                 [X] |
|                                       |
|         Main Image/Video              |
|                                       |
|  [<]                            [>]   |
|  +-------------------------------+    |
|  | [thumb] [thumb] [thumb] [vid] |    |  <- Semi-transparent overlay
|  +-------------------------------+    |
+---------------------------------------+
|  Project Title              YEAR      |
|  City                       2024      |
|  ...                                  |
```

### Changes

1. **Remove the separate "GALLERY" section** at the bottom of the content area (lines 140-170)

2. **Add thumbnail strip overlay** inside the main gallery section:
   - Position at the bottom of the image area
   - Semi-transparent dark/light background with backdrop blur
   - Horizontally scrollable for many items
   - Smaller thumbnails (around 48-56px) that fit well on mobile
   - Current selection highlighted with a border/ring
   - Video thumbnails will show a small play icon overlay

3. **Keep the existing dot indicators** as a fallback for very small screens or as secondary navigation

4. **Responsive behavior**:
   - On mobile: thumbnails slightly smaller, scrollable horizontally
   - On desktop: centered thumbnails with comfortable spacing

### Technical Details

The implementation will:
- Use `overflow-x-auto` for horizontal scrolling when there are many items
- Apply `bg-background/60 backdrop-blur-sm` for the overlay effect
- Use `flex` layout with `gap-2` for thumbnail spacing
- Add a `Play` icon from lucide-react for video thumbnail indicators
- Keep thumbnails at `aspect-square` with `object-cover` for consistent sizing
