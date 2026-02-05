

## Fix Thumbnail Auto-Centering in Gallery Strip

### The Problem
The centering logic exists but isn't working because:

1. **Timing issue**: The `useEffect` runs before the thumbnail container is fully rendered/measured
2. **Initial render race condition**: When the dialog opens, React renders the component but the DOM might not be ready for scroll calculations

### The Solution
Add a small delay to ensure the container is rendered and measured before attempting to scroll. Also ensure the effect reruns when the dialog opens.

### Changes to `src/components/ProjectDetailDialog.tsx`

**Update the centering useEffect:**

```tsx
// Center the selected thumbnail
useEffect(() => {
  if (thumbnailContainerRef.current && project && !showDots) {
    // Small delay to ensure container is rendered and measured
    const timeoutId = setTimeout(() => {
      const container = thumbnailContainerRef.current;
      if (!container) return;
      
      const itemWidth = THUMBNAIL_SIZE + THUMBNAIL_GAP;
      const containerWidth = container.clientWidth;
      const scrollPosition = (currentImageIndex * itemWidth) - (containerWidth / 2) + (THUMBNAIL_SIZE / 2);
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }, 50);
    
    return () => clearTimeout(timeoutId);
  }
}, [currentImageIndex, project, showDots, open]);
```

**Key fixes:**
- Add `setTimeout` with 50ms delay to ensure DOM is ready
- Add `open` to dependency array so it runs when dialog opens
- Add cleanup function to prevent memory leaks
- Add null check inside timeout callback

