import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Container from "../../components/container";
import PhotographyServices from "../../components/photography-services";
import { Image } from "react-datocms";
import Link from "next/link";
import Head from "next/head";

export async function getStaticPaths() {
  const data = await request({ query: `{ allPhotoServicesPages { slug } }` });

  return {
    paths: data.allPhotoServicesPages.map(
      (page) => `/fototjanster/${page.slug}`
    ),
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
        allPhotoServicesPages(orderBy: _createdAt_ASC) { 
          slug
          title
          featuredImage {
            url
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
            responsiveImage(imgixParams: {fm: jpg, fit: crop, crop: faces, w: 1600, h: 900 }) {
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
            responsiveImage(imgixParams: {fm: jpg, fit: crop, fit: max }) {
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
      <Navbar />
      <section className="bg-beige-lightest relative text-beige-darkest">
        <Image
          data={{
            ...featuredImage.responsiveImage,
            alt: featuredImage.responsiveImage.title,
          }}
        />
        <div className="hidden lg:flex justify-center items-center absolute top-0 w-full h-full">
          <Container>
            <div className="w-1/3 bg-beige-lightest p-8">
              <h1 className="text-3xl md:text-6xl leading-none text-black uppercase font-bold w-min mb-4 md:mb-8">
                {title}
              </h1>
              <div className="text-current bg-current h-1 w-24 border-2 border-beige mb-4 lg:mb-8 rounded-full"></div>
              <h2 className="mt-4 text-xl leading-relaxed font-light">
                {description}
              </h2>
            </div>
          </Container>
        </div>
        <div className="py-8 lg:py-12 lg:hidden">
          <Container>
            <h1 className="text-3xl md:text-6xl leading-none text-black uppercase font-bold w-min mb-4 md:mb-8">
              {title}
            </h1>
            <div className="text-current bg-current h-1 w-24 border-2 border-beige mb-4 lg:mb-8 rounded-full"></div>
            <h2 className="mt-4 text-xl leading-relaxed font-light">
              {description}
            </h2>
          </Container>
        </div>
      </section>
      {gallery.length > 0 && (
        <section className="py-8 lg:py-24 text-beige-darkest">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-1 md:gap-4">
              {gallery.map((image, index) => {
                return (
                  <div
                    key={index}
                    className={
                      image.responsiveImage.width > image.responsiveImage.height
                        ? "col-span-2 md:col-span-1"
                        : index % 3 == 0
                        ? "col-span-2 md:col-span-1"
                        : "col-span-1"
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
      <Container>
        <div className="my-8 text-right">
          <p>
            Behöver du hjälp med att ta liknande bilder?{" "}
            <Link href="mailto:hello@bognandiphotography.com">
              Kontakta mig
            </Link>
          </p>
        </div>
      </Container>
      <PhotographyServices data={allPhotoServicesPages} />
    </Layout>
  );
}
