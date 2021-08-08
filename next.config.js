const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.MODE === "development",
  },
  reactStrictMode: true,
  generateEtags: false,
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
    localeDetection: false,
  },
  env: {
    VERSION: process.env.VERSION,
    MODE: process.env.MODE,
    APP_NAME: process.env.APP_NAME,
    HOST: process.env.HOST,
    HOSTNAME: process.env.HOSTNAME,
    PORT: process.env.PORT,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  distDir: "build",
  generateBuildId: async () => {
    return new Date().toDateString();
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
});
