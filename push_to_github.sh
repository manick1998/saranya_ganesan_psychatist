#!/usr/bin/env bash
set -euo pipefail

REPO="manick1998/saranya_ganesan_psychatist"
BRANCH="main"

echo "Ready to push Saranya Ganesan website to GitHub: $REPO"
echo "Token will be typed securely and will NOT be saved in this file."
read -r -p "GitHub username: " GH_USER
read -r -s -p "GitHub token: " GH_TOKEN
echo

if [ -z "$GH_USER" ] || [ -z "$GH_TOKEN" ]; then
  echo "Username/token missing. Aborting."
  exit 1
fi

git remote set-url origin "https://github.com/$REPO.git"
git push "https://$GH_USER:$GH_TOKEN@github.com/$REPO.git" "$BRANCH"

unset GH_TOKEN

echo "Push completed. If Vercel is connected to this GitHub repo, deployment will start automatically."
echo "Check Vercel dashboard: https://vercel.com/dashboard"
