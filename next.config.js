require("dotenv").config();

module.exports = {
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
  async redirects() {
    return [
      {
        source: '/fototjanster/foretag',
        destination: '/services/personal-branding',
        permanent: true,
      },
      {
        source: '/fototjanster/portratt',
        destination: '/services/personal-branding',
        permanent: true,
      },
      {
        source: '/fototjanster/produkter',
        destination: '/services/produkter',
        permanent: true,
      },
    ]
  },
};
