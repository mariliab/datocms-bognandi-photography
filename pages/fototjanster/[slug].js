import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import PageTitle from "../../components/page-title";
import BlockTitle from "../../components/block-title";
import Container from "../../components/container";
import PhotographyServices from "../../components/photography-services";
import { Image } from "react-datocms";
import Link from "next/link";

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
        allPhotoServicesPages(orderBy: _createdAt_ASC) { 
          slug
          title
          featuredImage {
            url
          }
        }
        photoServicesPage(filter: {slug: {eq: $slug}}) {
          slug
          title
          description
          featuredImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 800 }) {
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
          portfolioItem {
            id
            title
            description(markdown: true)
            images {
              responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 400, h: 600 }) {
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
          }
        }
      }
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
    data: { photoServicesPage, allPhotoServicesPages },
  } = useQuerySubscription(subscription);

  const {
    title,
    description,
    featuredImage,
    portfolioItem,
  } = photoServicesPage;

  console.log("portfolioItem ", JSON.stringify(portfolioItem, null, 2));
  return (
    <Layout>
      <Navbar />
      <section className="bg-beige-lightest relative text-beige-darkest">
        <Image data={featuredImage.responsiveImage} />
        <div className="py-8 lg:py-12">
          <Container>
            <h1 className="text-3xl md:text-6xl leading-none text-black uppercase font-bold w-min mb-4 md:mb-8">
              {title}
            </h1>
            <div className="text-current h-1 w-24 border-2 border-beige mb-4 lg:mb-8 rounded-full"></div>
            <p className="mt-4 text-xl leading-relaxed tracking-widest font-light">
              {description}
            </p>
          </Container>
        </div>
      </section>
      {portfolioItem.map((item, index) => {
        return (
          <section key={index} className="py-8 lg:py-24 text-beige-darkest">
            <Container>
              <div className="grid gap-1 md:gap-4 grid-cols-2 md:grid-cols-3">
                <div className="pr-3">
                  <BlockTitle title={item.title} subtitle={item.description} />
                </div>
                {item.images.map((image, index) => {
                  return (
                    <div key={index}>
                      <Image data={image?.responsiveImage} />
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>
        );
      })}
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
