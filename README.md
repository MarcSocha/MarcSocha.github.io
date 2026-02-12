# Finetunes Landing Page

A simple, static website for the Finetunes mobile app.

## File Structure

```
finetunes-site/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive functionality
├── assets/             # Images and media
│   ├── logo3_resize_bkgd.png
│   └── logo3_color_no.svg
└── README.md           # This file
```

## How to Use

### Local Development
1. Open `index.html` in any web browser
2. No server or build tools required!

### Deployment
Upload all files to any web host:
- Netlify: Drag and drop the entire folder
- Vercel: Connect to GitHub and deploy
- GitHub Pages: Push to repository and enable Pages
- Any traditional web host: Upload via FTP

## Customization

### Update App Store Links
In `index.html`, replace the `#` in the download button `href` attributes:
```html
<a href="YOUR_APP_STORE_LINK" class="btn btn-primary">
```

### Change Colors
Edit the color variables in `styles.css`:
- Primary: `#1A365D`
- Background: `#ECE7DA`
- Accent Light Blue: `#159DC2`
- Accent Blue Text: `#007293`
- Orange Accent: `#F56565`

### Add More Prompts
Edit the `prompts` array in `script.js`:
```javascript
const prompts = [
    "Your new prompt here...",
    // Add more prompts
];
```

Then add corresponding dots in `index.html`.

## Browser Support
Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## License
All rights reserved © 2025 Finetunes
