import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import PhotographyServices from "../components/photography-services";
import Testamonials from "../components/testamonials";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        startpage {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          backgroundImage {
            url
          }
          title
          text
        }
        allPhotoServices(orderBy: _createdAt_ASC) {
          title
          image {
            url
          }
        }
        allTestamonials {
          id
          image {
            url
          }
          name
          text
          title
        }
        allPosts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
          author {
            name
            picture {
              url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100, sat: -100})
            }
          }
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

export default function Index({ subscription }) {
  const {
    data: { allPosts, site, startpage, allPhotoServices, allTestamonials },
  } = useQuerySubscription(subscription);

  const metaTags = startpage.seo.concat(site.favicon);

  return (
    <>
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Navbar />
        <Hero
          title={startpage?.title}
          text={startpage?.text}
          backgroundImage={startpage?.backgroundImage?.url}
        />
        <Testamonials data={allTestamonials} />
        <PhotographyServices data={allPhotoServices} />
        <Container>
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
}
