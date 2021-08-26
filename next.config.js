module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
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
    BASE_URL: process.env.BASE_URL,
    HOSTNAME: process.env.HOSTNAME,
    PORT: process.env.PORT,
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  generateBuildId: async () => {
    return new Date().toDateString();
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};
