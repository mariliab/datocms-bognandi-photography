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
        source: "/blogg",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/om-mig",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/fototjanster/foretag",
        destination: "/services/personal-branding",
        permanent: true,
      },
      {
        source: "/fototjanster/portratt",
        destination: "/services/personal-branding",
        permanent: true,
      },
      {
        source: "/fototjanster/produkter",
        destination: "/services/produkter",
        permanent: true,
      },
      {
        source: "/blog/produktlansering-for-accessoarvarumarket-bybanoo",
        destination: "blog/campaign-product-launch-by-banoo-business-bag",
        permanent: true,
      },
      {
        source:
          "/blog/behind-the-scenes-fotografering-med-affiner-fine-jewelry",
        destination: "blog/campaign-product-launch-by-banoo-business-bag",
        permanent: true,
      },
      {
        source:
          "/blog/objektivguide-sa-vaeljer-du-raett-beroende-pa-dina-behov",
        destination:
          "blog/studio-shoot-with-jewelry-brand-affiner-fine-jewelry",
        permanent: true,
      },
    ];
  },
};
