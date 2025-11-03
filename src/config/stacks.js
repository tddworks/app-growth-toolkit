// Stack Recommendations by Stage
// To add or modify a stack: edit the corresponding object below

export const stacks = [
  {
    id: "solo",
    title: "Solo Founder",
    description: "Just starting out or bootstrapping",
    emoji: "🚀",
    cost: "$0-10/mo",
    color: "blue",
    tools: [
      {
        name: "BezelBlend",
        purpose: "Screenshots",
        pricing: "Free"
      },
      {
        name: "Shots.so",
        purpose: "Social media",
        pricing: "Free tier"
      },
      {
        name: "AppNexus",
        purpose: "App Store mgmt",
        pricing: "Free"
      },
      {
        name: "Firebase",
        purpose: "Analytics",
        pricing: "Free tier"
      },
      {
        name: "Eleventy Template",
        purpose: "Landing page",
        pricing: "Free"
      }
    ],
    proTip: "All core features are free. Focus on building first, optimize later."
  },

  {
    id: "growing",
    title: "Growing App",
    description: "1K-10K users, steady growth",
    emoji: "📈",
    cost: "$50-85/mo",
    color: "purple",
    popular: true, // Set to true to show "Most Popular" badge
    tools: [
      {
        name: "BezelBlend",
        purpose: "Screenshots",
        pricing: "Free"
      },
      {
        name: "PostSpark Pro",
        purpose: "Marketing visuals",
        pricing: "$10/mo"
      },
      {
        name: "AppNexus",
        purpose: "App Store mgmt",
        pricing: "Free"
      },
      {
        name: "Helm Pro",
        purpose: "App Store",
        pricing: "$20/mo"
      },
      {
        name: "Mixpanel",
        purpose: "Analytics",
        pricing: "Free"
      },
      {
        name: "RevenueCat",
        purpose: "Subscriptions",
        pricing: "Free"
      },
      {
        name: "AppTweak",
        purpose: "ASO",
        pricing: "$30/mo"
      },
      {
        name: "AppFlight.ai",
        purpose: "ASO",
        pricing: "$19 one-time"
      }
    ],
    proTip: "Invest in ASO and faster workflows. Time savings pay for tools."
  },

  {
    id: "scaleup",
    title: "Scale-Up",
    description: "10K+ users, rapid expansion",
    emoji: "🚁",
    cost: "$950+/mo",
    color: "green",
    tools: [
      {
        name: "BezelBlend",
        purpose: "Screenshots",
        pricing: "Free"
      },
      {
        name: "AppNexus",
        purpose: "App Store mgmt",
        pricing: "Free"
      },
      {
        name: "Helm Teams",
        purpose: "Collaboration",
        pricing: "$50/mo"
      },
      {
        name: "Amplitude",
        purpose: "Analytics",
        pricing: "$50/mo"
      },
      {
        name: "RevenueCat",
        purpose: "Revenue",
        pricing: "$250/mo"
      },
      {
        name: "Sensor Tower",
        purpose: "ASO",
        pricing: "$100/mo"
      },
      {
        name: "Apple Search Ads",
        purpose: "UA",
        pricing: "$500+/mo"
      }
    ],
    proTip: "Focus on retention and LTV. Build a team and delegate operations."
  }
];

// Add your own custom stack
// Example:
// {
//   id: "enterprise",
//   title: "Enterprise",
//   description: "100K+ users, multiple apps",
//   emoji: "🏢",
//   cost: "$5000+/mo",
//   color: "indigo",
//   popular: false,
//   tools: [
//     {
//       name: "Tool Name",
//       purpose: "What it does",
//       pricing: "$XXX/mo"
//     }
//   ],
//   proTip: "Your advice for this stage"
// }
