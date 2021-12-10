import { request } from "../../lib/datocms";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { responsiveImageFragment, metaTagsFragment } from "../../lib/fragments";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Blogg from "../../components/blogg";
import BlogPosts from "../../components/blog-posts";

export async function getStaticProps({ preview = false }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        allPosts(orderBy: date_DESC, first: 20) {
          title
          slug
          excerpt
          date
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 800, h: 450 }) {
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
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

function Blog({ subscription }) {
  const {
    data: { allPosts, site },
  } = useQuerySubscription(subscription);

  return (
    <Layout>
      <Navbar data={site} />
      <Blogg posts={allPosts.length > 0 && allPosts} />
    </Layout>
  );
}

export default Blog;
