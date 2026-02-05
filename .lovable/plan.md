
## Fix Thumbnail Strip Centering

### Root Cause
The thumbnail container doesn't have a constrained width, so it expands to fit all thumbnails. When there's no overflow, `scrollTo()` has no effect because there's nothing to scroll.

### Solution
Give the thumbnail container a fixed maximum width that's smaller than the total width of all thumbnails, forcing it to scroll. Then the centering logic will work.

### Changes to `src/components/ProjectDetailDialog.tsx`

**Update the thumbnail container div (line 132-138):**

```tsx
<div 
  ref={thumbnailContainerRef}
  className="flex gap-1.5 px-3 py-2 bg-black/50 backdrop-blur-md rounded-full overflow-x-auto scrollbar-hide max-w-[280px]"
  style={showGradients ? {
    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
  } : undefined}
>
```

**Key fix:**
- Add `max-w-[280px]` (approximately 5-6 thumbnails visible) to constrain the container width
- This forces overflow/scrolling behavior when there are more than ~5 thumbnails
- The existing `scrollTo` centering logic will now work correctly
- The gradient mask will provide visual fade on edges indicating more content

### Technical Details
- Each thumbnail is 40px + 6px gap = 46px
- Max-width of 280px shows ~5-6 thumbnails at a time
- When navigating, the selected thumbnail smoothly scrolls to center
- The gradient mask (already implemented) fades edges for polish
