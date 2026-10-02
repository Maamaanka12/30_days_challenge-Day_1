# Day 1 — Shaafi Hospital Website

**30 Days Coding Challenge – Day 1**

A responsive, static hospital landing page for **Shaafi Hospital** — built with pure HTML, CSS, and JavaScript. No frameworks, no build step.

## Features

- Sticky header with scroll effect + mobile hamburger menu
- Hero section with stats (15+ years, 50+ doctors, 100K+ patients)
- About section with 24/7 Emergency, Diagnostics, and Expert Team cards
- Services grid: Cardiology, Neurology, Orthopedics, Pediatrics, General Surgery, Diagnostics Lab
- Doctors section (4 profiles)
- Pharmacy / Medicine section with home delivery info
- CTA + footer with contact info, hours, and quick links
- Scroll-reveal animations via IntersectionObserver
- Active nav-link highlighting + smooth scrolling
- Fully responsive (desktop / tablet / mobile)
- `prefers-reduced-motion` support and keyboard `:focus-visible` styles

## Project Structure

```
day 1/
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── hero-bg.jpg
│   ├── about-hospital.jpg
│   ├── doctor1.jpg … doctor4.jpg
│   └── pharmacy.jpg
└── README.md
```

## How to Run This Project

No dependencies, no build step — it's a static site.

**Prerequisites:** any modern browser (Chrome, Edge, Firefox). Optional: Python 3 or Node.js for a local server, or VS Code with Live Server.

```powershell
# Option 1: open directly (simplest)
Start-Process index.html

# Option 2: serve locally with Python (recommended - avoids file:// issues)
python -m http.server 8000
# then visit http://localhost:8000

# Option 3: serve locally with Node
npx serve .
```

**VS Code:** right-click `index.html` → "Open with Live Server".

## Customization

- **Colors / fonts / spacing:** CSS variables in `styles.css` (`:root` block)
- **Content:** edit sections in `index.html` (`#home`, `#about`, `#services`, `#doctors`, `#medicine`, `#contact`)
- **Interactions:** mobile nav, header scroll, scroll-reveal, and smooth scroll live in `script.js`
- **Images:** replace files in `images/` keeping the same filenames

## Contact (demo content)

- Mogadishu, Somalia
- +252 61 123 4567
- info@shaafihospital.so
- Mon – Sat: 8:00 AM – 8:00 PM | Emergency: 24/7 | Pharmacy: 8:00 AM – 10:00 PM

## License

© 2026 Shaafi Hospital. All rights reserved by Abdirahman.
