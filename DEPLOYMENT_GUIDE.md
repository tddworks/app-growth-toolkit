# Deployment Guide

## GitHub Pages Deployment

Your template includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

### Setup Instructions

#### 1. Push Your Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Eleventy landing page template"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

#### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Save the settings

#### 3. Trigger Deployment

The workflow will automatically run when you:
- Push to the `main` branch
- Manually trigger from the **Actions** tab

**First deployment:**
```bash
# Make a small change (optional)
git commit --allow-empty -m "Trigger initial deployment"
git push
```

#### 4. View Your Site

After deployment completes (usually 1-2 minutes):
- Visit: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- Or check the **Actions** tab for the deployment URL

### Workflow Details

**File:** `.github/workflows/deploy.yml`

**What it does:**
1. ✅ Checks out your code
2. ✅ Sets up Node.js 20
3. ✅ Installs dependencies (`npm ci`)
4. ✅ Builds Tailwind CSS (`npm run build:css`)
5. ✅ Builds Eleventy site (`npx @11ty/eleventy`)
6. ✅ Uploads `_site/` directory
7. ✅ Deploys to GitHub Pages

**Triggers:**
- 🔄 Automatic: Push to `main` branch
- 🔘 Manual: Click "Run workflow" in Actions tab

### Custom Domain (Optional)

To use a custom domain like `yourapp.com`:

#### 1. Add CNAME File

Create a file named `CNAME` in the root directory:

```bash
echo "yourapp.com" > CNAME
```

#### 2. Update Eleventy Config

Edit `eleventy.config.js`:

```javascript
eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });
```

#### 3. Configure DNS

Add these DNS records with your domain provider:

**For apex domain (yourapp.com):**
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

#### 4. Enable in GitHub Settings

1. Go to **Settings** → **Pages**
2. Enter your custom domain
3. Check "Enforce HTTPS"
4. Wait for DNS propagation (up to 24 hours)

### Troubleshooting

#### Build Fails

**Check the Actions tab:**
1. Click on the failed workflow
2. Expand the failed step to see error details
3. Common issues:
   - Missing dependencies in `package.json`
   - Node version mismatch
   - Build script errors

**Fix:**
```bash
# Test build locally first
npm run build

# If it works locally, commit and push
git add .
git commit -m "Fix build issues"
git push
```

#### Site Shows 404

**Possible causes:**
1. GitHub Pages not enabled in Settings
2. Wrong source selected (should be "GitHub Actions")
3. Deployment still in progress (check Actions tab)

**Fix:**
1. Go to **Settings** → **Pages**
2. Ensure source is set to **GitHub Actions**
3. Wait for deployment to complete

#### Images/Assets Not Loading

**Issue:** Assets have wrong paths

**Fix:** Update paths to be relative or use correct base path

```javascript
// eleventy.config.js
return {
  // If repo is not at root (e.g., /my-repo/)
  pathPrefix: "/my-repo/"
};
```

#### CSS Not Applied

**Issue:** Tailwind CSS not building

**Check build logs:**
- Look for "Build Tailwind CSS" step
- Ensure it completes successfully

**Fix:** Verify `build:css` script in `package.json`

### Environment Variables (Optional)

To use environment variables:

#### 1. Add Secrets

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add your secrets

#### 2. Use in Workflow

Edit `.github/workflows/deploy.yml`:

```yaml
- name: Build Eleventy site
  run: npx @11ty/eleventy
  env:
    API_KEY: ${{ secrets.API_KEY }}
    SITE_URL: ${{ secrets.SITE_URL }}
```

### Other Deployment Options

#### Netlify

1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `_site`

**Deploy button:**
```markdown
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/YOUR_REPO)
```

#### Vercel

```bash
npm install -g vercel
vercel --prod
```

**Build settings:**
- Framework Preset: Other
- Build Command: `npm run build`
- Output Directory: `_site`

#### Cloudflare Pages

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Build output directory: `_site`

### Continuous Deployment

Every time you push to `main`:

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Workflow automatically:
# 1. Builds your site
# 2. Deploys to GitHub Pages
# 3. Your site updates in 1-2 minutes
```

### Monitoring Deployments

**Check deployment status:**
1. Go to **Actions** tab
2. See all workflow runs
3. Green ✓ = Success
4. Red ✗ = Failed (click for details)

**Deployment URL:**
- Check the `deploy` job output
- Look for the deployed URL
- Usually: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

**Need help?** Open an issue or check GitHub Pages documentation.
