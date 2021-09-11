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
        page(filter: {slug: {eq: "om-mig"}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          id
          content {
            subtitle
            text(markdown: true)
            title
            image {
              responsiveImage {
                ...responsiveImageFragment
              }
            }
            cta
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

function Om({ subscription }) {
  const {
    data: { site, page },
  } = useQuerySubscription(subscription);

  const metaTags = page.seo.concat(site.favicon);

  return (
    <Layout>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Navbar />
      <About data={page} />
    </Layout>
  );
}

export default Om;
