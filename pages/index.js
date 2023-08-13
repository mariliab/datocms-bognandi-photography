import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import PhotographyServices from "../components/photography-services";
import Testamonials from "../components/testamonials";
import ImageGallery from "../components/image-gallery";
import Hero from "../components/hero";
import AboutMe from "../components/about-me";
import Navbar from "../components/navbar";
import InstagramFeed from "../components/instagram-feed";

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
            responsiveImage(imgixParams: {fm: jpg, fit: max, w: 1600, h: 900, q: 100 }) {
              ...responsiveImageFragment
            }
          }
          title
          subtitle
          gallery {
            url
            responsiveImage(imgixParams: {fm: jpg, fit: max, w: 600 }) {
              ...responsiveImageFragment
            }
          }
          portrait {
            responsiveImage(imgixParams: {fm: jpg, w: 400, h: 600, fit: max }) {
              ...responsiveImageFragment
            }
          }
          heading
          subHeading
        }
        allPhotoServicesPages(orderBy: _createdAt_ASC) { 
          slug
          title
          subtitle
          featuredImage {
            responsiveImage(imgixParams: {fm: jpg, w: 400, h: 600, fit: max }) {
              ...responsiveImageFragment
            }
          }
        }
        allTestamonials {
          id
          image {
            url
            responsiveImage(imgixParams: {fm: jpg, w: 400, h: 600, fit: max }) {
              ...responsiveImageFragment
            }
          }
          name
          text
          title
        }
        firstPosts: allPosts(orderBy: date_DESC, first: 3) {
          title
          slug
          excerpt
          date
          category {
            name
          }
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 600, h: 400 }) {
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

  // const INSTAGRAM_FEED_API_URL = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=${process.env.INSTAGRAM_FEED_ACCESS_TOKEN}`;
  // const response = await fetch(INSTAGRAM_FEED_API_URL);
  // const posts = await response.json();

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
      // posts: posts.data,
    },
  };
}

export default function Index({ subscription, posts }) {
  const {
    data: {
      site,
      startpage,
      allPhotoServicesPages,
      allTestamonials,
      firstPosts,
    },
  } = useQuerySubscription(subscription);

  const metaTags = startpage.seo.concat(site.favicon);

  return (
    <>
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Navbar data={site} />
        <Hero
          title={startpage?.title}
          subtitle={startpage?.subtitle}
          image={startpage?.backgroundImage?.responsiveImage}
        />
        <PhotographyServices data={allPhotoServicesPages} isStartpage />
        <Testamonials data={allTestamonials} />
        <AboutMe
          title={startpage?.heading}
          text={startpage?.subHeading}
          image={startpage?.portrait.responsiveImage}
        />
        {firstPosts.length > 0 && <MoreStories posts={firstPosts} />}
        {/* <InstagramFeed posts={posts || []} /> */}
      </Layout>
    </>
  );
}
