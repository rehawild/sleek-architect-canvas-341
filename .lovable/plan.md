

## True Gradient Fade for Thumbnail Strip

### The Problem
The current implementation uses `bg-gradient-to-r from-black/60 to-transparent` which simply overlays a dark gradient on top of the thumbnails. This creates a darkening effect, not a true fade-to-transparency effect where the thumbnails themselves become transparent at the edges.

### The Solution
Use CSS `mask-image` to create a true fade effect. This technique makes the actual content fade to transparent at the edges, rather than putting a colored overlay on top.

### Visual Difference

**Current (dark overlay):**
```text
[dark][thumb][thumb][thumb][thumb][dark]
  ↑                                  ↑
  Just darkened, still visible
```

**Desired (true fade):**
```text
  ░░▒▓[thumb][thumb][thumb][thumb]▓▒░░
  ↑                                  ↑
  Actually fading to transparent
```

### Implementation

Replace the gradient overlay divs with a CSS mask on the thumbnail container itself:

```tsx
<div 
  className="flex gap-1.5 px-3 py-2 bg-black/50 backdrop-blur-md rounded-full overflow-x-auto scrollbar-hide"
  style={showGradients ? {
    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
  } : undefined}
>
  {/* thumbnails */}
</div>
```

### Changes to `src/components/ProjectDetailDialog.tsx`

1. **Remove the gradient overlay divs** - Delete the left and right gradient `<div>` elements (lines 112-114 and 150-153)

2. **Apply mask-image to the thumbnail container** - Add inline style with `maskImage` CSS property that creates a true fade from transparent on both edges

3. **Keep the wrapper `<div className="relative">`** - Still needed for positioning, but no longer for gradient overlays

### Technical Details

The CSS `mask-image` property works by using a gradient as a transparency mask:
- `transparent` at the edges = content becomes fully transparent
- `black` in the middle = content is fully visible
- The gradient creates a smooth transition between visible and transparent

The `15%` and `85%` values control how far into the container the fade extends.

