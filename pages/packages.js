import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Layout from "../components/layout";
import Container from "../components/container";
import Navbar from "../components/navbar";
import PageTitle from "../components/page-title";
import About from "../components/about";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        page(filter: {slug: {eq: "personal-branding-packages"}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          id
          content {
            subtitle
            title
            image {
              responsiveImage {
                ...responsiveImageFragment
              }
            }
            cta
            description {
              value
            }
          }
          featuredImage {
            responsiveImage {
              ...responsiveImageFragment
            }
          }
          slug
          subtitle
          title
        }
      }
      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

const packagesData = {
    pageTitle: "Personal Branding Photography Packages",
    generalFeatures: [
      "Flexible styling assistance available upon request to ensure your brand's visual cohesiveness.",
      "Expert location recommendations provided to match your unique brand identity.",
      "All packages include natural and authentic high-resolution images that showcase your true essence.",
      "Photoshoots are done within central Stockholm, outside of that taxi round trip is added."
    ],
    packageList: [
      {
        title: "1. Brief Brand Boost",
        description: "Perfect for updating your personal brand visuals.",
        features: [
          "Includes images for 1 month daily social media updates",
          "Natural and authentic high-resolution photos.",
          "Ideal for updating profile pictures, feature images, about me pages, and more.",
        ],
        investment: "10000 kr",
      },
      {
        title: "2. Branding Makeover",
        description: "For those who post daily or several times per week on social media and want content for 3 months.",
        features: [
          "Professionally edited high-resolution photos.",
          "Includes images for 3 months daily social media updates",
          "Access a versatile 'Image Bank' that captures your brand's essence.",
          "Personalized consultation to tailor the shoot to your brand's vibe.",
        ],
        investment: "15000 kr",
      },
      {
        title: "3. Branding ALL IN",
        description: "For those who post daily or several times per week on social media and want content for 6+ months.",
        features: [
          "Receive ALL professionally edited high-res photos from the shoot. (200+ images)",
          "Access a versatile 'Image Bank' that captures your brand's essence.",
          "Say goodbye to impersonal stock images—have your own to maintain authenticity.",
          "Personalized consultation to tailor the shoot to your brand's vibe.",
          "Bonus: Fill out a brand survey to guide the shoot's creative direction.",
          "Special Offer: Refer a friend and receive 10% off your next session!",
        ],
        investment: "25000 kr",
      },
    ],
  };

function Packages({ subscription }) {
  const {
    data: { site, page },
  } = useQuerySubscription(subscription);

//   const metaTags = page.seo.concat(site.favicon);

  return (
    <Layout>
      <Head>
      <meta name="robots" content="noindex"></meta>
      </Head>
      <Navbar data={site} />
      <div className="bg-beige-lightest py-12 lg:py-24 relative text-beige-darkest">
      <Container>
      <h1 className="text-3xl font-semibold mb-6">{packagesData.pageTitle}</h1>
      <div>
        <h2 className="text-xl font-semibold mb-4">General Features:</h2>
        <ul className="list-none list-inside mb-6">
          {packagesData.generalFeatures.map((feature, index) => (
            <li key={index}><span>-</span> {feature}</li>
          ))}
        </ul>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {packagesData.packageList.map((packageItem, index) => (
          <div key={index} className="bg-white p-4 lg:p-12 flex flex-col justify-between">
            <div>
            <h2 className="uppercase text-xl font-semibold mb-2">{packageItem.title}</h2>
            <p className="mb-4 font-bold">{packageItem.description}</p>
            <ul className="list-none list-inside">
              {packageItem.features.map((feature, index) => (
                <li key={index} className="mb-4"><span>-</span> {feature}</li>
              ))}
            </ul>
            </div>
            <div>
            <p className="mt-4 font-bold">Investment: {packageItem.investment}</p>
            <br></br>
            <a href="mailto:marilia@bognandiphotography.com" className="font-normal px-12 pt-4 pb-3 bg-beige-dark text-white hover:bg-beige-lightest hover:text-beige-darkest transition-all duration-200" target="_blank" rel="noreferrer">I am ready to book</a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs mt-4">Prices are ex. VAT</p>
    </Container>
    </div>
    </Layout>
  );
}

export default Packages;


