// Tools Database
// To add a new tool: copy an existing tool object, update the fields, and add it to the array

export const tools = [
  // Screenshot Tools
  {
    name: "Shots.so",
    description: "Animated mockups with magic backgrounds. Perfect for social media and marketing.",
    url: "https://shots.so/",
    category: "screenshots",
    pricing: "free-paid",
    platform: "Web",
    gradient: "from-purple-500 to-pink-500",
    emoji: "🎨"
  },
  {
    name: "BezelBlend",
    description: "Most accurate Apple device bezels. Includes iPhone 17 and App Store sizes.",
    url: "https://apps.apple.com/us/app/bezelblend/id6743046579",
    category: "screenshots",
    pricing: "free",
    platform: "iOS/Mac",
    gradient: "from-blue-500 to-cyan-500",
    emoji: "📱"
  },
  {
    name: "PostSpark",
    description: "Browser frames and annotations. 16+ layouts for quick professional screenshots.",
    url: "https://postspark.app/screenshot",
    category: "screenshots",
    pricing: "freemium",
    platform: "Web",
    gradient: "from-orange-500 to-red-500",
    emoji: "✨"
  },
  {
    name: "Previewed",
    description: "Premium device mockups and animations. Professional quality for websites and pitch decks.",
    url: "https://previewed.app",
    category: "screenshots",
    pricing: "paid",
    platform: "Web",
    gradient: "from-pink-500 to-rose-500",
    emoji: "🎬"
  },

  // App Store Connect Management
  {
    name: "AppNexus",
    description: "Native macOS app for App Store Connect. Built-in screenshot editor and AI descriptions.",
    url: "https://appnexus.app/",
    category: "appstore",
    pricing: "freemium",
    platform: "macOS",
    gradient: "from-indigo-500 to-purple-500",
    emoji: "🚀"
  },
  {
    name: "Helm",
    description: "12x faster App Store updates. AI localization and review management.",
    url: "https://helm-app.com/",
    category: "appstore",
    pricing: "freemium",
    platform: "iOS/Mac",
    gradient: "from-green-500 to-teal-500",
    emoji: "⚡"
  },

  // ASO Tools
  {
    name: "AppNexus ASO",
    description: "AI-powered keywords and descriptions. Free ASO tools built into App Store workflow.",
    url: "https://appnexus.app/",
    category: "aso",
    pricing: "free",
    platform: "macOS",
    gradient: "from-indigo-500 to-blue-500",
    emoji: "🔍"
  },
  {
    name: "Helm ASO",
    description: "Built-in ASO guidance with keyword suggestions. Live preview of App Store listing.",
    url: "https://helm-app.com/",
    category: "aso",
    pricing: "freemium",
    platform: "iOS/Mac",
    gradient: "from-teal-500 to-green-500",
    emoji: "📈"
  },
  {
    name: "AppTweak",
    description: "Keyword research and competitor analysis. Track rankings and optimize visibility.",
    url: "https://apptweak.com",
    category: "aso",
    pricing: "paid",
    platform: "Web",
    gradient: "from-blue-500 to-indigo-500",
    emoji: "🎯"
  },
  {
    name: "Sensor Tower",
    description: "Market intelligence and keyword tracking. Competitive insights for ASO strategy.",
    url: "https://sensortower.com",
    category: "aso",
    pricing: "paid",
    platform: "Web",
    gradient: "from-purple-500 to-indigo-500",
    emoji: "📡"
  },

  // Analytics Tools
  {
    name: "Firebase",
    description: "Google Analytics for mobile apps. Free tier with cross-platform tracking.",
    url: "https://firebase.google.com",
    category: "analytics",
    pricing: "freemium",
    platform: "iOS/Android",
    gradient: "from-yellow-500 to-orange-500",
    emoji: "🔥"
  },
  {
    name: "Mixpanel",
    description: "Product analytics for user behavior. Free up to 100k users per month.",
    url: "https://mixpanel.com",
    category: "analytics",
    pricing: "freemium",
    platform: "Web",
    gradient: "from-purple-500 to-pink-500",
    emoji: "📊"
  },
  {
    name: "Amplitude",
    description: "Behavioral analytics platform. Free up to 10M events per month.",
    url: "https://amplitude.com",
    category: "analytics",
    pricing: "freemium",
    platform: "Web",
    gradient: "from-blue-500 to-purple-500",
    emoji: "📈"
  },

  // Monetization Tools
  {
    name: "RevenueCat",
    description: "Subscription management and paywalls. Free up to $10k MRR.",
    url: "https://revenuecat.com",
    category: "monetization",
    pricing: "freemium",
    platform: "iOS/Android",
    gradient: "from-green-500 to-emerald-500",
    emoji: "💰"
  },
  {
    name: "Adapty",
    description: "Paywall A/B testing and optimization. Boost subscription conversion rates.",
    url: "https://adapty.io",
    category: "monetization",
    pricing: "freemium",
    platform: "iOS/Android",
    gradient: "from-teal-500 to-cyan-500",
    emoji: "💳"
  },
  {
    name: "Qonversion",
    description: "Growth infrastructure with cohort analysis. Attribution and subscription tracking.",
    url: "https://qonversion.io",
    category: "monetization",
    pricing: "freemium",
    platform: "iOS/Android",
    gradient: "from-indigo-500 to-purple-500",
    emoji: "📊"
  },

  // Landing Page Templates
  {
    name: "Eleventy Landing",
    description: "Modern landing page template. Dark mode, lightbox, and device toggle included.",
    url: "https://github.com/tddworks/eleventy-landing-template",
    category: "landing",
    pricing: "free",
    platform: "Template",
    gradient: "from-yellow-500 to-orange-500",
    emoji: "🎨"
  },
  {
    name: "Mobile Landing",
    description: "Astro + React template with animations. Framer Motion, theme system, WCAG compliant.",
    url: "https://github.com/bohd4nx/mobile-landing",
    category: "landing",
    pricing: "free",
    platform: "Template",
    gradient: "from-cyan-500 to-blue-500",
    emoji: "🚀"
  }
];

// Pricing badge configuration
export const pricingBadges = {
  "free": {
    label: "Free",
    color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
  },
  "freemium": {
    label: "Freemium",
    color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
  },
  "free-paid": {
    label: "Free + Paid",
    color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
  },
  "paid": {
    label: "Paid",
    color: "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
  }
};

// Category configuration
export const categories = [
  { id: "all", label: "All Tools", emoji: "" },
  { id: "screenshots", label: "Screenshots", emoji: "📸" },
  { id: "appstore", label: "App Store", emoji: "🏪" },
  { id: "aso", label: "ASO", emoji: "🔍" },
  { id: "analytics", label: "Analytics", emoji: "📊" },
  { id: "monetization", label: "Monetization", emoji: "💰" },
  { id: "landing", label: "Landing Pages", emoji: "🎨" }
];
