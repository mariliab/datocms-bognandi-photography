import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Container from "../../components/container";
import PhotographyServices from "../../components/photography-services";
import { Image } from "react-datocms";
import Head from "next/head";
import CtaBlock from "../../components/cta-block";

export async function getStaticPaths() {
  const data = await request({ query: `{ allPhotoServicesPages { slug } }` });

  return {
    paths: data.allPhotoServicesPages.map((page) => `/services/${page.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
      query PortfolioPageBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        allPhotoServicesPages(filter: {slug: {neq: $slug}}, orderBy: _createdAt_ASC) { 
          slug
          title
          featuredImage {
            responsiveImage(imgixParams: {fm: jpg, w: 400, h: 600, fit: max }) {
              ...responsiveImageFragment
            }
          }
        }
        photoServicesPage(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          slug
          title
          description
          featuredImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1600 }) {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
          }
          gallery {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, fit: max, w: 600 }) {
              ...responsiveImageFragment
            }
          }
        }
      }
      ${metaTagsFragment}
      ${responsiveImageFragment}
    `,
    preview,
    variables: {
      slug: params.slug,
    },
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

export default function PhotoService({ subscription, preview }) {
  const {
    data: { site, photoServicesPage, allPhotoServicesPages },
  } = useQuerySubscription(subscription);

  const metaTags = photoServicesPage.seo.concat(site.favicon);

  const { title, description, featuredImage, gallery } = photoServicesPage;

  return (
    <Layout>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Navbar data={site} />

      {/* DESKTOP */}
      <section className="text-beige-darkest bg-beige-lightest">
        <Container>
          <div className="flex flex-col lg:flex-row">
            <div className="mx-auto w-full lg:w-1/2">
              <Image
                data={{
                  ...featuredImage.responsiveImage,
                  alt: featuredImage.responsiveImage.title,
                }}
              />
            </div>
            <div className="flex justify-center items-center w-full lg:w-1/2">
              <div className="px-0 py-8 lg:px-8 bg-beige-lightest">
                <h1 className="text-3xl md:text-6xl leading-none text-black uppercase font-light mb-4">
                  {title}
                </h1>
                <h2 className="mt-4 text-xl leading-relaxed font-light">
                  {description}
                </h2>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {gallery.length > 0 && (
        <section className="py-12 lg:py-24 bg-white text-beige-darkest">
          <Container>
            <div className="grid grid-cols-masonry-xs md:grid-cols-masonry-lg justify-center gap-1 md:gap-4">
              {gallery.map((image, index) => {
                return (
                  <div
                    key={index}
                    className={
                      image.responsiveImage.width > image.responsiveImage.height
                        ? "row-span-1"
                        : "row-span-2"
                    }
                  >
                    <Image
                      data={{
                        ...image?.responsiveImage,
                        alt: image?.responsiveImage.title,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}
      <CtaBlock />
      <div
        style={{
          background: "linear-gradient(0deg, #ffffff 30%, #ddcdc1 30%)",
        }}
      >
        <PhotographyServices data={allPhotoServicesPages} />
      </div>
    </Layout>
  );
}
