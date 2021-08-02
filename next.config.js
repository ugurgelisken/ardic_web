module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "tr"],
    defaultLocale: "en",
    localeDetection: false,
  },
  env: {
    HOST: process.env.HOST,
    HOSTNAME: process.env.HOSTNAME,
    PORT: process.env.PORT,
  },
};
