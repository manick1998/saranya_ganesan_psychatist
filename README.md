# Saranya Ganesan Psychologist — Online Counselling Website

A responsive static website for **Saranya Ganesan**, focused on **fully online counselling**, mental wellness support, stress-management programs, student wellness and workplace wellbeing workshops.

## Current live-ready details used
- Brand/name: **Saranya Ganesan Psychologist**
- Recognition: **Gold Medalist**
- Phone/WhatsApp: **+91 63833 82948**
- Instagram: **https://www.instagram.com/saranya_psychologist_?igsh=M2xnZ2pkZG16MzY1**
- Experience: **5+ years**
- People reached: **200+**
- Service mode: **Fully online counselling**
- Timing: **Monday–Friday after 6:00 PM to 12:00 AM; Saturday–Sunday flexible**
- Clinic/map: **Not used — online only**

## What is included
- Premium responsive landing page
- Official brand logo integrated in header, footer, favicon and brand sections
- WhatsApp-first booking flow
- Consent checkbox and emergency disclaimer
- Online counselling service sections
- Expanded workshop/photo gallery section
- Anonymized original client feedback section
- Extra client review screenshot/photo wall
- Program highlights section instead of misleading testimonials
- SEO metadata, canonical URL, Open Graph/Twitter image
- JSON-LD structured data
- Privacy Policy, Terms of Service, Disclaimer
- Favicon, sitemap and robots.txt
- Vercel static deployment config

## Files
```txt
index.html        Main landing page
styles.css        Full responsive styling
script.js         Dynamic content, FAQ, booking, WhatsApp form
images/           Real Saranya/workshop photos
fonts/            Self-hosted font files
privacy.html      Privacy policy
terms.html        Terms of service
disclaimer.html   Disclaimer page
images/saranya-logo-mark.png  Official logo mark / favicon
images/saranya-logo.png       Official full brand logo
robots.txt        Search crawler rules
sitemap.xml       Sitemap for search engines
vercel.json       Static deployment config
```

## Local preview
```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

## Deploy to Vercel
1. Push this folder to GitHub.
2. Go to https://vercel.com/new.
3. Import the GitHub repository.
4. Framework: Other / Static.
5. Build command: none.
6. Output directory: `.`
7. Deploy.

## Notes before public launch
- Revoke any GitHub token that was pasted in chat or shared publicly.
- Use workshop/gallery photos only if public-use consent is confirmed.
- If the final domain changes, update canonical URL, `og:url`, `og:image`, JSON-LD URL/image and `sitemap.xml`.
- If an official email ID is available, add it to contact/legal pages.
- Display only verified qualifications/credentials.
