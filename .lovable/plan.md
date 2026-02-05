
## Fix Thumbnail Strip Overlapping Video Controls

### The Problem
The thumbnail strip is positioned at `bottom-4` relative to the gallery container (which is 16:9 aspect ratio). When viewing portrait videos (9:16), the actual video sits centered within this container, and its native controls appear at the bottom of the video content - which overlaps with the thumbnail strip on smaller screens.

### Solution
Move the thumbnail strip outside the main gallery area, positioning it below the video/image but above the content section. This ensures:
- No overlap with video controls at any screen size
- Clear visual separation between media and navigation
- Consistent experience regardless of media aspect ratio

### Changes to `src/components/ProjectDetailDialog.tsx`

**Restructure the layout:**

1. Move the gallery indicators div from inside the gallery section to after it
2. Position it as a separate element between the gallery and content sections
3. Remove the opacity hide/show behavior for videos (no longer needed since it won't overlap)

```text
Current structure:
+---------------------------+
| Gallery (16:9 container)  |
|   +-------------------+   |
|   | Video/Image       |   |
|   |                   |   |
|   +-------------------+   |
|   [Thumbnail Strip]       | <-- inside gallery, overlaps video controls
+---------------------------+
| Content Section           |
+---------------------------+

New structure:
+---------------------------+
| Gallery (16:9 container)  |
|   +-------------------+   |
|   | Video/Image       |   |
|   |                   |   |
|   +-------------------+   |
+---------------------------+
| [Thumbnail Strip]         | <-- separate element, no overlap
+---------------------------+
| Content Section           |
+---------------------------+
```

### Technical Details

**Line changes (~111-173):**
- Move the gallery indicators `<div>` outside the gallery section
- Place it after the closing `</div>` of the gallery section (line 181)
- Update styling to work as a standalone element:
  - Use `flex justify-center py-3 bg-muted/50` for centering
  - Remove absolute positioning classes
  - Remove the video-specific opacity toggle (no longer needed)
  - Keep the thumbnail container styling intact

This approach:
- Completely eliminates the overlap issue at all screen sizes
- Works naturally with both portrait and landscape media
- Makes the thumbnail strip always accessible without hover
- Maintains the centered auto-scroll behavior
