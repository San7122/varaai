# 🚀 Deploy VaraAI to GitHub Pages (FREE)

## Step 1 — Create GitHub Account
Go to https://github.com and sign up (free)

## Step 2 — Create a New Repository
1. Click the "+" icon → "New repository"
2. Name it: `varaai`
3. Set it to **Public**
4. Click "Create repository"

## Step 3 — Update Your Repo Name in 2 Files

### File 1: vite.config.js
Change this line:
```js
base: '/varaai/',  // ← must match your repo name exactly
```

### File 2: package.json
Change this line:
```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/varaai"
```
Replace YOUR-GITHUB-USERNAME with your actual GitHub username.

## Step 4 — Upload Your Code to GitHub

Open terminal/command prompt in the varaai folder and run:

```bash
git init
git add .
git commit -m "Initial VaraAI website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/varaai.git
git push -u origin main
```

## Step 5 — Enable GitHub Pages
1. Go to your repo on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Source" → select **GitHub Actions**
5. Save

## Step 6 — Wait ~2 Minutes ⏳
GitHub will automatically build and deploy your site!

## Step 7 — Visit Your Live Website! 🎉
Your site will be live at:
```
https://YOUR-USERNAME.github.io/varaai
```

---

## Auto-Deploy (Bonus!)
Every time you push changes to GitHub, your site updates automatically!
No manual steps needed after the first setup.

---

## Troubleshooting
- Site shows blank? Check that `base` in vite.config.js matches your repo name
- Build failed? Check the Actions tab on GitHub for error details
- Still stuck? Email: hello@varaai.in
