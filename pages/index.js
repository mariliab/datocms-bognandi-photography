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
          text(markdown: true)
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
          }
          name
          text
          title
        }
        allPosts(orderBy: date_DESC, first: 3) {
          title
          slug
          excerpt
          date
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
    data: { site, startpage, allPhotoServicesPages, allTestamonials },
  } = useQuerySubscription(subscription);

  const metaTags = startpage.seo.concat(site.favicon);

  return (
    <>
      <Layout preview={subscription.preview}>
        <Head>{renderMetaTags(metaTags)}</Head>
        <Navbar data={site} />
        <Hero
          title={startpage?.title}
          text={startpage?.text}
          image={startpage?.backgroundImage?.responsiveImage}
        />
        <PhotographyServices data={allPhotoServicesPages} />
        <AboutMe
          title={startpage?.heading}
          text={startpage?.subHeading}
          image={startpage?.portrait.responsiveImage}
        />
        <ImageGallery data={startpage?.gallery} />
        <div className="pb-12 lg:pb-24">
          <img
            src={site?.favicon[3]?.attributes?.href}
            width="200"
            height="auto"
            className="mx-auto"
          />
        </div>
        <Testamonials data={allTestamonials} />
      </Layout>
    </>
  );
}
