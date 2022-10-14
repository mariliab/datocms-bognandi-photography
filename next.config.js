require("dotenv").config();

module.exports = {
  future: {
    webpack5: true,
  },
  env: {
    NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
      process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
  },
  images: {
    domains: ["scontent-arn2-2.cdninstagram.com", "instagram.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};
