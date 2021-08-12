import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import PageTitle from "../../components/page-title";
import Container from "../../components/container";

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
        photoServicesPage(filter: {slug: {eq: $slug}}) {
          slug
          title
          featuredImage {
            url
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
    data: { photoServicesPage },
  } = useQuerySubscription(subscription);

  return (
    <Layout>
      <Navbar />
      <section className="bg-beige-lightest py-8 lg:py-24 relative text-beige-darkest">
        <Container>
          <PageTitle title={photoServicesPage.title} />
        </Container>
      </section>
    </Layout>
  );
}
