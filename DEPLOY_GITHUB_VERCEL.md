# GitHub + Vercel Deployment

## Current status
The website has been updated for safer public launch:

- Added workshop/photo gallery section
- Replaced misleading testimonials wording with program highlights
- Fixed booking form preferred-time validation bug
- Aligned booking time slots with evening/weekend availability
- Added consent checkbox
- Improved SEO metadata, canonical URL, JSON-LD, favicon, robots.txt and sitemap.xml
- Improved Privacy Policy, Terms and Disclaimer pages

## Important token security
If a GitHub token was pasted in chat or exposed anywhere, revoke it immediately:

https://github.com/settings/tokens

Create a fresh fine-grained token only when you need to push, then revoke it after the push.

Recommended fine-grained token access:

- Repository access: only `manick1998/saranya_ganesan_psychatist`
- Repository permissions: `Contents` → `Read and write`
- Short expiry, for example 7 or 30 days

## Push from local terminal
From this repository folder:

```bash
git status
git add .
git commit -m "Improve website SEO booking gallery and legal pages"
git push origin main
```

If Git asks for a username/password:

- Username: your GitHub username
- Password: use a fresh GitHub token, not your GitHub account password

## Vercel auto deploy setup

### If Vercel is already connected to this GitHub repo
After GitHub push succeeds, Vercel should deploy automatically.

Check:
https://vercel.com/dashboard

### If Vercel is not connected yet
1. Go to https://vercel.com/new
2. Import Git repository: `manick1998/saranya_ganesan_psychatist`
3. Framework preset: Other / Static
4. Build command: leave empty
5. Output directory: `.`
6. Click Deploy

After this, every `git push` to GitHub will trigger automatic Vercel deployment.
