# GitHub + Vercel Automatic Deployment

## Current status
The website is updated and committed locally.

Commit:
```txt
6231666 Update online counselling website with real branding and images
```

## One-time GitHub push
Run this in terminal:

```bash
cd /home/user/project
./push_to_github.sh
```

It will ask:
- GitHub username
- GitHub token

Token is typed securely in terminal and is not saved inside the project.

## Vercel auto deploy setup

### If Vercel already connected to this GitHub repo
After GitHub push succeeds, Vercel will deploy automatically.

Check:
https://vercel.com/dashboard

### If Vercel is not connected yet
1. Go to https://vercel.com/new
2. Import Git repository:
   `manick1998/saranya_ganesan_psychatist`
3. Framework preset: Other
4. Build command: leave empty
5. Output directory: `.`
6. Click Deploy

After this, every `git push` to GitHub will trigger automatic Vercel deployment.

## Important
If you pasted a GitHub token in chat, revoke it after use:
https://github.com/settings/tokens
