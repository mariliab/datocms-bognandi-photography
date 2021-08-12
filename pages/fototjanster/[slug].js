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

  const { title, featuredImage, portfolioItem } = photoServicesPage;

  console.log("portfolioItem ", JSON.stringify(portfolioItem, null, 2));
  return (
    <Layout>
      <Navbar />
      <section className="bg-beige-lightest relative text-beige-darkest mb-8 lg:mb-4">
        <Image data={featuredImage.responsiveImage} />
        <div className="absolute -bottom-6 left-0 md:left-20">
          <Container>
            <h1 className="text-3xl md:text-6xl leading-none text-black uppercase font-bold bg-beige-light px-4 py-2">
              {title}
            </h1>
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
      <PhotographyServices data={allPhotoServicesPages} />
    </Layout>
  );
}
