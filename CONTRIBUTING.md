# Contributing to App Growth Toolkit

Thank you for wanting to contribute! This guide makes it super easy to add your tool or improve the toolkit.

## 🚀 Quick Start: Adding a Tool

**Mental Model:** "I have a tool → Edit one file → Submit PR → Done!"

### Step 1: Add Your Tool

Edit `/src/config/tools.js` and add your tool to the `tools` array:

```javascript
{
  name: "Your Tool Name",
  description: "Brief description (max 2 lines). Focus on the value it provides.",
  url: "https://yourtool.com",
  category: "screenshots", // See categories below
  pricing: "freemium", // See pricing options below
  platform: "Web", // Examples: Web, iOS, macOS, iOS/Mac, Template, Chrome Extension
  gradient: "from-blue-500 to-purple-500", // Tailwind gradient colors
  emoji: "🚀" // Pick an emoji that represents your tool
}
```

### Categories

Choose the category that best fits your tool:

- `screenshots` - Screenshot & mockup tools
- `appstore` - App Store Connect management
- `aso` - App Store Optimization & landing pages
- `analytics` - Analytics & user tracking
- `monetization` - Revenue, subscriptions, paywalls
- `landing` - Landing page templates & builders

### Pricing Options

- `free` - Completely free
- `freemium` - Free tier + paid features
- `free-paid` - Free version + separate paid version
- `paid` - Paid only

### Gradient Colors

Choose from Tailwind's gradient colors. Popular combinations:

- `from-blue-500 to-cyan-500` - Cool blue
- `from-purple-500 to-pink-500` - Vibrant purple-pink
- `from-green-500 to-teal-500` - Fresh green
- `from-orange-500 to-red-500` - Warm orange-red
- `from-yellow-500 to-orange-500` - Bright yellow-orange
- `from-indigo-500 to-purple-500` - Deep indigo

## 📦 Example: Adding a New Tool

```javascript
// In src/config/tools.js, add to the tools array:

{
  name: "ScreenStudio",
  description: "Professional screen recording with automatic zoom and smooth cursor tracking. Perfect for product demos.",
  url: "https://screenstudio.com",
  category: "screenshots",
  pricing: "paid",
  platform: "macOS",
  gradient: "from-indigo-500 to-blue-500",
  emoji: "🎬"
}
```

That's it! Your tool will now appear in:
- The Featured Tools grid (filterable by category)
- The correct category filter
- With the right pricing badge and colors

## 🎯 Adding a Stack Recommendation

Want to add a recommended stack for a specific stage? Edit `/src/config/stacks.js`:

```javascript
{
  id: "your-stage", // Unique ID (lowercase, no spaces)
  title: "Your Stage Name",
  description: "Who this stack is for",
  emoji: "🚀",
  cost: "$XX-XXX/mo",
  color: "blue", // blue, purple, green, indigo, red, yellow
  popular: false, // Set to true to show "Most Popular" badge
  tools: [
    {
      name: "Tool Name",
      purpose: "What it's used for",
      pricing: "$XX/mo or Free"
    }
  ],
  proTip: "Your advice for founders at this stage"
}
```

## ✅ Before Submitting

1. **Test locally:**
   ```bash
   npm install
   npm run dev
   # Visit http://localhost:8080
   ```

2. **Check your tool appears:**
   - Is it in the Featured Tools grid?
   - Does the category filter work?
   - Are the colors and emoji showing correctly?
   - Does the link work?

3. **Keep descriptions concise:**
   - Max 2 lines (about 100 characters)
   - Focus on the value/benefit, not just features
   - Use action-oriented language

## 📝 Contributing Guidelines

### What We Accept

✅ Tools that help app founders grow their apps
✅ Free or reasonably priced tools with clear value
✅ Active products with good documentation
✅ Tools you actually use and can recommend

### What We Don't Accept

❌ Affiliate links or referral codes
❌ Your own tool without disclosure
❌ Discontinued or abandoned tools
❌ Tools that require enterprise pricing to be useful
❌ Spam or low-quality tools

### Disclosure

If you're adding your own tool:
1. Mention it in your PR description
2. Be objective in the description
3. Make sure it genuinely helps app founders

## 🐛 Found a Bug?

1. Check if it's already reported in [Issues](https://github.com/tddworks/app-growth-toolkit/issues)
2. If not, create a new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

## 💡 Suggesting Features

Have an idea? Open an issue with:
- Clear use case ("As an app founder, I want...")
- Why it would help
- Any examples or mockups

## 📖 Improving Documentation

Documentation improvements are always welcome:
- Fix typos in README.md
- Add missing information
- Clarify confusing sections
- Add examples

## 🔄 Pull Request Process

1. Fork the repo
2. Create a branch: `git checkout -b add-tool-name`
3. Make your changes
4. Test locally
5. Commit: `git commit -m "Add ToolName to screenshot tools"`
6. Push: `git push origin add-tool-name`
7. Create a Pull Request

### PR Title Format

- Adding a tool: `Add ToolName to [category] tools`
- Fixing a bug: `Fix: [brief description]`
- Adding a feature: `Feature: [brief description]`
- Documentation: `Docs: [brief description]`

## 📜 Code of Conduct

- Be respectful and constructive
- Focus on helping app founders
- No spam or self-promotion without value
- Keep discussions on topic

## 🤝 Need Help?

- Open an issue with your question
- Tag it with `question` label
- We're here to help!

## 🎉 Thank You!

Every contribution helps app founders save time and make better decisions. Thank you for being part of this community!

---

**Made with ❤️ by app founders, for app founders**
