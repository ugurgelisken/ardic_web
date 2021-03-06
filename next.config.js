module.exports = {
  webpack5: false,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    config.devServer = {
      historyApiFallback: true,
      contentBase: "./",
      hot: true
    }
    return config;
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  trailingSlash: false,
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
    return new Date().toDateString()
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};
