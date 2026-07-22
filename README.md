# Dr. Saranya Ganesan — Psychology Website

A single-page marketing + appointment site for a clinical psychologist, built with **plain HTML, CSS, and JavaScript** (no framework, no build step).

## Features
- Fully responsive, animated single-page design (hero, services, about, testimonials, resources, FAQ, booking, contact).
- Self-hosted fonts (Inter + Playfair Display) and local images — works fully offline.
- Booking form that opens a pre-filled WhatsApp message with all client details.
- Google Maps embed, Instagram + WhatsApp links, crisis-hotline notices.
- SEO: meta tags, OpenGraph/Twitter, `Psychologist` JSON-LD.

## Local preview
```bash
# option 1 — just open the file
open index.html        # or double-click it

# option 2 — local server (recommended)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to Vercel (automatic, from GitHub)
1. Push this folder to a GitHub repo (see below).
2. Go to https://vercel.com/new → **Import Git Repository** → select your repo.
3. Vercel auto-detects it as a static site (`framework: other`, `outputDirectory: .`).
   - No build command needed.
4. Click **Deploy**. After that, every `git push` to the repo triggers an automatic redeploy.

### Push to GitHub
```bash
git init            # (already done locally)
git add -A
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

## Before going live — replace placeholders
- WhatsApp / phone number: `919500113659` (currently set)
- Email: `hello@saranyaganesan.com`
- Clinic address: `123, Wellness Centre, Anna Nagar, Chennai`
- Testimonials in `script.js` are sample text — swap for real, consent-based quotes.

## File structure
```
psychologist-site/
├── index.html        # all sections
├── styles.css        # design system + responsive
├── script.js         # content rendering + interactions
├── images/           # hero.jpg, why.jpg, about.jpg
├── fonts/            # self-hosted woff2 + fonts.css
├── vercel.json       # static deploy config
└── .gitignore
```
