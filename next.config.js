module.exports = {
  reactStrictMode: true,
  generateEtags: false,
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
    localeDetection: false,
  },
  env: {
    APP_NAME: process.env.APP_NAME,
    HOST: process.env.HOST,
    HOSTNAME: process.env.HOSTNAME,
    PORT: process.env.PORT,
    PUBLIC_GOOGLE_ANALYTICS: process.env.PUBLIC_GOOGLE_ANALYTICS,
  },
};
