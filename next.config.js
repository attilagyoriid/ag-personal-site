const withImages = require("next-images");
module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    socialUrls: {
      facebook: "https://www.facebook.com/gyoriattila",
      linkedin: "https://www.linkedin.com/in/attila-gyori-ag",
      github: "https://github.com/attilagyoriid",
      behance: "https://www.behance.net/attila_gyori",
      dribbble: "https://dribbble.com/attila_gyori/shots",
      youtube: "https://www.youtube.com/user/attilagyori/videos",
    },
  },
  withImages,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    imageSizes: [400, 800, 704, 900, 1200, 1400, 1800],
  },
};