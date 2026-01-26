

## Portfolio Section Layout Update

### Goal
Revert the section width back to `max-w-7xl` and change the project cards to use a 2-column grid layout like the Work page, with smaller images.

### Changes to `src/components/Portfolio.tsx`

1. **Revert section width**: Change `max-w-5xl` back to `max-w-7xl`

2. **Change layout from stacked to grid**:
   - Replace `space-y-32` with `grid md:grid-cols-2 gap-16 lg:gap-20`

3. **Reduce image height**: 
   - Change `h-[70vh]` to `h-[50vh]` for more compact project cards

4. **Adjust spacing**:
   - Change `mt-8` to `mt-6` for tighter card layout

### Visual Comparison

| Current (Homepage) | After Update |
|-------------------|--------------|
| Full-width stacked | 2-column grid |
| 70vh image height | 50vh image height |
| max-w-5xl | max-w-7xl |

### Technical Details

```text
Before:
+------------------------------------------+
|  [    Full Width Project Image    ]      |
|  Title, City, Clients                    |
|                                          |
|  [    Full Width Project Image    ]      |
|  Title, City, Clients                    |
+------------------------------------------+

After (matching Work page):
+------------------------------------------+
|  [ Project 1 ]     |     [ Project 2 ]   |
|  Title, City       |     Title, City     |
|  Clients           |     Clients         |
+------------------------------------------+
```

