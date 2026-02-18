

# Add Google Analytics (gtag.js) Tracking

## What we'll do

Add the Google Analytics tracking snippet (measurement ID: `G-WRGK8MG29G`) to `index.html` so every page of your site is tracked automatically.

## Changes

**File: `index.html`**
- Insert the Google tag script right after the opening `<head>` tag (before the charset meta), exactly as Google recommends:
  - An async script loading `gtag.js`
  - The inline configuration script with your measurement ID

This is a single, small change -- no other files need to be modified. Since this is a single-page app, all route navigations will be tracked automatically by gtag.js.

## Technical Details

The following snippet will be added at the top of the `<head>` section:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WRGK8MG29G"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-WRGK8MG29G');
</script>
```

**Note:** After publishing, it may take 24-48 hours for data to start appearing in your Google Analytics dashboard. The tracking will only work on your published domain (`tapanpartners.com`), not in the Lovable preview.

