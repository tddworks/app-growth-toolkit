# 📱 App Growth Toolkit

A curated landing page showcasing the best tools and resources to help app founders drive revenue, optimize marketing, and accelerate growth.

## ✨ What's Included

### 🎨 Tool Categories

- **Landing Page Templates** - Eleventy & Astro templates for quick launches
- **Screenshot Tools** - Shots.so, PostSpark, BezelBlend for stunning visuals
- **App Store Optimization** - ASO tools, keyword research, competitor analysis
- **Analytics & Growth** - Firebase, Mixpanel, Amplitude tracking tools
- **Monetization Tools** - RevenueCat, Adapty, subscription management
- **Growth Strategies** - Complete playbook from launch to scale

### 📚 Full Documentation

The complete toolkit guide is available in [APP_GROWTH_TOOLKIT.md](APP_GROWTH_TOOLKIT.md) with:
- Detailed tool comparisons with pricing
- Toolkit recommendations by stage (Solo Founders → Scale-ups)
- 12-month growth timeline with checklists
- Monetization strategies & pricing sweet spots
- Free resources and bonus content

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Your site will be running at `http://localhost:8080`

## 🎨 Customization

All content is configured through easy-to-edit files in `src/config/`:

- `appInfo.js` - Site title, description, links
- `features.js` - Tool categories
- `updates.js` - Changelog and what's new
- `reviews.js` - Founder testimonials
- `faq.js` - Frequently asked questions
- `socialLinks.js` - Community links
  },
  storeLinks: {
    apple: "https://apps.apple.com/app/your-app",
    google: "https://play.google.com/store/apps/details?id=your.app"
  }
};
```

### 2️⃣ **Features Section** (`src/config/features.js`)

Add or modify your app's features:

```javascript
export const features = [
  {
    title: "Smart Analytics",
    description: "Get detailed insights into your app usage",
    icon: "📊"  // Use emoji or replace with icon component
  },
  // Add more features...
];
```

### 3️⃣ **User Reviews** (`src/config/reviews.js`)

Showcase user testimonials:

```javascript
export const reviews = [
  {
    author: "Sarah Johnson",
    rating: 5,
    text: "This app completely transformed how I work!",
    avatar: "avatars/sarah.jpg"  // Optional
  },
  // Add more reviews...
];
```

### 4️⃣ **FAQ Section** (`src/config/faq.js`)

Add frequently asked questions:

```javascript
export const faq = [
  {
    question: "Is the app free to use?",
    answer: "Yes! The app is completely free with optional premium features."
  },
  // Add more FAQs...
];
```

### 5️⃣ **Social Media Links** (`src/config/socialLinks.js`)

Add your social media profiles:

```javascript
export const socialLinks = [
  {
    url: "https://instagram.com/yourapp",
    platform: "Instagram",
    label: "Follow us on Instagram"
  },
  // Add more social links...
];
```

### 6️⃣ **Screenshots** (`src/config/screenshots.js` & `public/screenshots/`)

**Step 1:** Add your screenshot images to `public/screenshots/`:

```
public/screenshots/
├── iphone/
│   ├── 1.png  (Recommended: 260x462px, 9:16 ratio)
│   ├── 2.png
│   └── ...
└── ipad/
    ├── 1.png  (Recommended: 360x480px, 4:3 ratio)
    ├── 2.png
    └── ...
```

**Step 2:** Configure the paths in `src/config/screenshots.js`:

```javascript
export const screenshots = {
  basePath: '/screenshots',
  formats: ['avif', 'webp', 'png'],
  iphone: [
    "/screenshots/iphone/1.png",
    "/screenshots/iphone/2.png",
    // Add more...
  ],
  ipad: [
    "/screenshots/ipad/1.png",
    "/screenshots/ipad/2.png",
    // Add more...
  ]
};
```

> 💡 **Tip:** The `public/` directory contents are copied to the root of your site, so `/screenshots/iphone/1.png` maps to `public/screenshots/iphone/1.png`

### 7️⃣ **Updates/Changelog** (`src/config/updates.js`)

Keep users informed about new features and bug fixes:

```javascript
export const updates = [
  {
    version: "1.2.0",
    build: "24",  // Optional build number
    date: "2025-01-15",
    changes: [
      "Added dark mode support with system preference detection",
      "Improved performance with lazy loading images",
      "Fixed iOS 18 navigation bar display issues",
      "New onboarding experience for first-time users"
    ]
  },
  // Add more updates in reverse chronological order (newest first)
];

// Optional: Link to full changelog page
export const changelogUrl = "#";  // Set to your changelog URL or "#" to hide "View all" link
```

**Tips:**
- List updates in **reverse chronological order** (newest first)
- Use clear, user-friendly language
- Group related changes together
- Include version number, optional build number, and release date

## 📁 Project Structure

```
eleventy-landing-template/
├── src/
│   ├── config/              # Centralized configuration
│   │   ├── appInfo.js       # App information
│   │   ├── features.js      # Features list
│   │   ├── screenshots.js   # Screenshot config
│   │   ├── updates.js       # Updates/changelog
│   │   ├── reviews.js       # User reviews
│   │   ├── faq.js          # FAQ items
│   │   ├── socialLinks.js   # Social media links
│   │   └── index.js        # Config aggregator
│   ├── 11ty/               # Eleventy source files
│   │   ├── _data/          # Eleventy data files
│   │   ├── _includes/      # Component templates
│   │   ├── _layouts/       # Page layouts
│   │   └── index.njk       # Homepage
│   └── style.css           # Main stylesheet
├── public/                 # Static assets (copied to root)
│   ├── screenshots/       # App screenshots
│   │   ├── iphone/       # iPhone screenshots
│   │   └── ipad/         # iPad screenshots
│   ├── js/
│   │   └── theme.js      # Theme toggle script
│   └── favicon-512.svg   # App icon
├── assets/                # Images, fonts, etc.
├── eleventy.config.js     # Eleventy configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies
```

## 🎭 Sections Included

- **Hero Section**: Eye-catching header with app name and CTA buttons
- **Features Section**: Grid layout showcasing app features
- **Screenshots Section**: Device previews with iPhone and iPad screenshots
- **Updates Section**: Changelog with version history and release notes
- **Reviews Section**: User testimonials with ratings
- **FAQ Section**: Frequently asked questions
- **Header**: Sticky navigation with theme toggle
- **Footer**: Company info and social links

## 🎨 Customizing Styles

The template uses **Tailwind CSS** for styling. You can customize:

1. **Colors**: Edit `tailwind.config.js` to change the color scheme
2. **Fonts**: Add custom fonts in `tailwind.config.js` theme.extend.fontFamily
3. **Animations**: Modify animations in `src/style.css` or `tailwind.config.js`
4. **Dark Mode**: Styles automatically adapt using Tailwind's dark mode classes

## 🌐 Deployment

### 🟢 **GitHub Pages** (Recommended - Automated)

**Automated deployment included!** The template comes with a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to `main`.

#### Quick Setup:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Source: Select **GitHub Actions**

3. **Done!** Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

**📖 See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions, custom domains, and troubleshooting.**

---

### 🟡 **Netlify**

```bash
# Build command
npm run build

# Publish directory
_site
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### 🔵 **Vercel**

```bash
npm install -g vercel
vercel --prod
```

**Settings:**
- Build Command: `npm run build`
- Output Directory: `_site`

### 🟠 **Cloudflare Pages**

1. Connect GitHub repository
2. Build command: `npm run build`
3. Build output directory: `_site`

### 🔴 **Custom Server**

```bash
npm run build
# Upload _site/ folder to your server
```

## 🔧 Configuration Files

### Eleventy Config (`eleventy.config.js`)

- Configure input/output directories
- Add plugins (i18n included)
- Define filters and global data

### Tailwind Config (`tailwind.config.js`)

- Content paths for purging unused CSS
- Dark mode configuration
- Custom theme extensions
- Plugin configuration

## 📝 Adding New Sections

1. Create a new include file in `src/11ty/_includes/your-section.njk`
2. Add the section data to `src/config/` if needed
3. Include it in `src/11ty/index.njk`:

```njk
{% include "your-section.njk" %}
```

## 🌍 Multi-language Support

The template includes Eleventy's i18n plugin. To add multiple languages:

1. Create language directories: `src/11ty/en/`, `src/11ty/es/`, etc.
2. Add language-specific content
3. Update `eleventy.config.js` with language configuration

## 🐛 Troubleshooting

**Build fails:**
- Ensure Node.js 18+ is installed
- Delete `node_modules` and run `npm install` again

**Styles not loading:**
- Run `npm run build:css` manually
- Check that Tailwind is watching the correct content paths

**Dark mode not working:**
- Clear browser localStorage
- Check that `theme.js` is being loaded

## 📄 License

MIT License - feel free to use this template for personal or commercial projects.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💡 Inspiration

This template was inspired by modern mobile app landing pages and combines the best practices from:
- Mobile Landing Template (Astro-based)
- LinguaSnap Landing Page
- Modern web design patterns

---

**Made with ❤️ using Eleventy and Tailwind CSS**

If you find this template helpful, please consider giving it a ⭐!
