// Screenshot gallery configuration
// Place your screenshot images in: public/screenshots/iphone/ and public/screenshots/ipad/
// Recommended sizes:
// - iPhone: 260px width, 9:16 aspect ratio (e.g., 260x462px)
// - iPad: 360px width, 4:3 aspect ratio (e.g., 360x480px)

export const screenshots = {
  count: 5,  // Total number of screenshots
  basePath: 'screenshots',  // Base path (public/ contents are copied to root)
  formats: ['avif', 'webp', 'png', 'svg'],  // Supported formats in order of preference
  iphone: [
    "screenshots/iphone/1.svg",
    "screenshots/iphone/2.svg",
    "screenshots/iphone/3.svg",
    "screenshots/iphone/4.svg",
    "screenshots/iphone/5.svg"
  ],
  ipad: [
    "screenshots/ipad/1.svg",
    "screenshots/ipad/2.svg",
    "screenshots/ipad/3.svg"
  ]
};
