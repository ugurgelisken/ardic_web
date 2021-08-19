const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  pwa: { dest: "public", runtimeCaching },
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
  generateBuildId: async () => {
    return new Date().toDateString();
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
});
