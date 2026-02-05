

## Responsive Gallery Navigation with Dot Indicators & Gradient Fade

### What We're Building
Enhancing the gallery thumbnail strip with two improvements:
1. **Mobile dot indicators** - On smaller screens, replace thumbnails with minimal dot indicators when there are many items (saves space)
2. **Gradient fade edges** - On desktop when thumbnails overflow, add smooth gradient masks on left/right edges to indicate more content

### Visual Layout

**Desktop (thumbnails with gradient edges when overflowing):**
```text
+-----------------------------------------------+
|                                               |
|              Main Image                       |
|                                               |
|  [<]                                    [>]   |
|     ░▒[thumb][thumb][thumb][thumb][thumb]▒░   |
|       ↑                               ↑       |
|    gradient                       gradient    |
+-----------------------------------------------+
```

**Mobile (dot indicators for many items):**
```text
+---------------------------+
|                           |
|       Main Image          |
|                           |
|  [<]                [>]   |
|       ● ○ ○ ○ ○ ○ ●       |
+---------------------------+
```

### Changes to `src/components/ProjectDetailDialog.tsx`

1. **Import the `useIsMobile` hook** from `@/hooks/use-mobile` to detect screen size

2. **Add threshold constant** - Define when to switch to dots (e.g., more than 4 items on mobile)

3. **Conditional rendering logic:**
   - **Mobile + many items**: Show dot indicators (small circles)
   - **Desktop or few items**: Show thumbnail strip with gradient edges

4. **Gradient mask implementation:**
   - Wrap the thumbnail container with a parent that has gradient pseudo-elements
   - Use CSS mask or gradient overlays on left/right edges
   - Only show gradients when content overflows (more than ~5 thumbnails)

5. **Dot indicator styling:**
   - Small circles (`w-2 h-2 rounded-full`)
   - Current: filled white, Others: semi-transparent
   - Same pill container background as thumbnails

### Technical Details

```text
Dot Indicator Structure:
<div className="flex gap-2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full">
  {gallery.map((_, index) => (
    <button
      className={`w-2 h-2 rounded-full transition-all ${
        index === current ? "bg-white scale-125" : "bg-white/50"
      }`}
    />
  ))}
</div>

Gradient Fade (for thumbnails):
- Parent container: relative, overflow-hidden
- Before/after pseudo-elements with linear gradients
- Or use CSS mask-image for cleaner fade effect
- Using Tailwind: custom inline styles or utility classes for gradients
```

### Responsive Behavior

| Condition | Display |
|-----------|---------|
| Mobile + ≤4 items | Thumbnails (no gradient needed) |
| Mobile + >4 items | Dot indicators |
| Desktop + ≤5 items | Thumbnails (no gradient) |
| Desktop + >5 items | Thumbnails with gradient edges |

