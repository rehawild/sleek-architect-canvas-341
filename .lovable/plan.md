

# Fix Direct URL Access (SPA Routing on Vercel)

## The Problem
Navigating within the site works fine because React Router handles it client-side. But typing a URL like `tapanpartners.com/about` directly into the browser asks Vercel's server for a file at `/about`, which doesn't exist -- so it returns 404.

## The Fix
Create a single configuration file at the project root:

### `vercel.json` (new file)
A Vercel configuration that rewrites all routes to `index.html`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This tells Vercel: "No matter what URL is requested, serve `index.html` and let the React app decide what to show."

## What This Fixes
- Direct access to `/about`, `/work`, `/services/*`, `/contact`, `/privacy-policy`, and all other routes
- Browser refresh on any page
- Shared links opening correctly

## Deployment
After this change is pushed to GitHub, Vercel will automatically redeploy with the new configuration. All routes will work immediately.

