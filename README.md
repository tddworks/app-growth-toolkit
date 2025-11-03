# 📱 App Growth Toolkit

> Curated collection of the best tools and resources to help app founders drive revenue, optimize marketing, and accelerate growth.

**Live Site:** [https://tddworks.github.io/app-growth-toolkit/](https://tddworks.github.io/app-growth-toolkit/)

---

## 🎯 What is This?

App Growth Toolkit is a comprehensive resource for app founders at every stage - from solo founders just starting out to teams scaling to 10K+ users. We curate the best tools across 7 essential categories and provide stage-based stack recommendations.

### ✨ Features

- **20+ Curated Tools** - Hand-picked by successful app founders
- **7 Tool Categories** - Screenshots, App Store, ASO, Reviews, Analytics, Monetization, Landing Pages
- **3 Stage-Based Stacks** - Recommendations for Solo Founders, Growing Apps, and Scale-Ups
- **Easy Filtering** - Click any category to filter tools
- **Always Updated** - Open source and accepting contributions

---

## 🛠️ Tool Categories

### 📸 Screenshots
Create stunning App Store screenshots with device mockups and backgrounds.
- Shots.so, BezelBlend, PostSpark, Previewed

### 🏪 App Store Connect
Manage your App Store presence faster with native apps.
- AppNexus, Helm

### 🔍 ASO (App Store Optimization)
Boost organic downloads with keyword research and competitor analysis.
- AppNexus ASO, Helm ASO, AppTweak, Sensor Tower, Kōmori

### ⭐ Reviews Management
Monitor and respond to user reviews across all app stores.
- AppFollow

### 📊 Analytics
Track user behavior and optimize conversions.
- Firebase, Mixpanel, Amplitude

### 💰 Monetization
Maximize revenue with subscription management and paywall testing.
- RevenueCat, Adapty, Qonversion

### 🎨 Landing Pages
Launch beautiful marketing sites quickly.
- Eleventy Landing Template, Mobile Landing (Astro)

---

## 📚 Stack Recommendations

### 🚀 Solo Founder ($0-10/mo)
Perfect for bootstrappers and those just starting out.
- BezelBlend, AppNexus, Firebase, Eleventy Landing
- **All core features are free**

### 📈 Growing App ($50-85/mo) ⭐ Most Popular
For apps with 1K-10K users and steady growth.
- BezelBlend, PostSpark Pro, AppNexus, Helm Pro, Mixpanel, RevenueCat, AppTweak
- **Time savings pay for the tools**

### 🚁 Scale-Up ($950+/mo)
For apps with 10K+ users in rapid expansion.
- BezelBlend, AppNexus, Helm Teams, Amplitude, RevenueCat, Sensor Tower, Apple Search Ads
- **Focus on retention and LTV**

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/tddworks/app-growth-toolkit.git
cd app-growth-toolkit

# Install dependencies
npm install

# Start development server
npm run dev
```

Your site will be running at `http://localhost:8080`

---

## 🤝 Contributing

We welcome contributions! Whether you want to add a new tool, suggest a stack, or improve the site.

### Adding a New Tool

**Simple:** Edit one file → Submit PR → Done!

1. **Edit `src/config/tools.js`** and add your tool:

```javascript
{
  name: "Your Tool Name",
  description: "Brief description (max 2 lines). Focus on the value it provides.",
  url: "https://yourtool.com",
  category: "screenshots", // screenshots, appstore, aso, analytics, monetization, landing
  pricing: "freemium", // free, freemium, free-paid, paid
  platform: "Web", // Web, iOS, macOS, iOS/Mac, Template, Chrome Extension
  gradient: "from-blue-500 to-purple-500", // Tailwind gradient colors
  emoji: "🚀" // Pick an emoji that represents your tool
}
```

2. **Test locally:** Run `npm run dev` and verify it appears correctly

3. **Submit a PR** with your changes

**See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines and examples.**

### Adding a Stack Recommendation

Edit `src/config/stacks.js` to add stage-based recommendations:

```javascript
{
  id: "your-stage",
  title: "Your Stage Name",
  description: "Who this stack is for",
  emoji: "🚀",
  cost: "$XX-XXX/mo",
  color: "blue", // blue, purple, green, indigo, red, yellow
  popular: false,
  tools: [
    { name: "Tool Name", purpose: "What it's used for", pricing: "$XX/mo or Free" }
  ],
  proTip: "Your advice for founders at this stage"
}
```

---

## 🎨 Customization

All content is configured through files in `src/config/`:

- **`tools.js`** - All featured tools with categories and pricing
- **`stacks.js`** - Stage-based stack recommendations
- **`features.js`** - Tool category cards on homepage
- **`appInfo.js`** - Site title, description, links
- **`socialLinks.js`** - Community links (GitHub, Twitter, etc.)

### Example: Changing Site Info

Edit `src/config/appInfo.js`:

```javascript
export const appInfo = {
  title: "Your Toolkit Name",
  description: "Your description",
  storeLinks: {
    apple: "https://github.com/yourusername/your-repo",
    google: "https://github.com/yourusername/your-repo"
  }
};
```

---

## 📁 Project Structure

```
app-growth-toolkit/
├── src/
│   ├── config/              # Configuration files
│   │   ├── tools.js         # All tools database
│   │   ├── stacks.js        # Stack recommendations
│   │   ├── features.js      # Category cards
│   │   ├── appInfo.js       # Site info
│   │   └── index.js         # Config aggregator
│   ├── 11ty/               # Eleventy templates
│   │   ├── _includes/      # Reusable components
│   │   │   ├── hero.njk
│   │   │   ├── features.njk
│   │   │   ├── featured-tools.njk
│   │   │   └── recommendations.njk
│   │   └── index.njk       # Homepage
│   └── style.css           # Main stylesheet
├── public/                 # Static assets
│   ├── favicon-512.svg
│   └── js/
│       └── theme.js        # Dark mode toggle
├── CONTRIBUTING.md         # Contribution guide
├── APP_GROWTH_TOOLKIT.md   # Full toolkit documentation
├── eleventy.config.js      # Eleventy config
└── tailwind.config.js      # Tailwind config
```

---

## 🌐 Deployment

### GitHub Pages (Automated)

The repository includes a GitHub Actions workflow for automatic deployment.

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Source: Select **GitHub Actions**

3. **Done!** Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/app-growth-toolkit/
   ```

### Other Platforms

**Netlify / Vercel / Cloudflare Pages:**
- Build command: `npm run build`
- Output directory: `_site`

---

## 🛠️ Built With

- **[Eleventy](https://www.11ty.dev/)** (v3.1.2) - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** (v3.4.13) - Utility-first CSS
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** - Templating engine

---

## 📄 License

Apache License 2.0 - feel free to use and adapt for your needs.

See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgments

This toolkit features tools created by amazing developers and companies:
- BezelBlend, AppNexus, Helm, Shots.so, PostSpark, and many more

Special thanks to all contributors who help keep this resource up-to-date!

---

## 📖 Additional Resources

- **[APP_GROWTH_TOOLKIT.md](APP_GROWTH_TOOLKIT.md)** - Complete guide with detailed tool comparisons, pricing, and growth strategies
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Detailed contribution guidelines with examples

---

**Made with ❤️ by app founders, for app founders**

If this resource helped you, please consider:
- ⭐ Starring this repository
- 🔄 Sharing with other app founders
- 🤝 Contributing your favorite tools

---

## 🔗 Links

- **Live Site:** [https://tddworks.github.io/app-growth-toolkit/](https://tddworks.github.io/app-growth-toolkit/)
- **GitHub:** [https://github.com/tddworks/app-growth-toolkit](https://github.com/tddworks/app-growth-toolkit)
- **Issues:** [Report bugs or suggest tools](https://github.com/tddworks/app-growth-toolkit/issues)
