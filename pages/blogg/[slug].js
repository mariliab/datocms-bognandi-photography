import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import Layout from "../../components/layout";
import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import Navbar from "../../components/navbar";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";

export async function getStaticPaths() {
  const data = await request({ query: `{ allPosts { slug } }` });

  return {
    paths: data.allPosts.map((post) => `/blogg/${post.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const graphqlRequest = {
    query: `
      query PostBySlug($slug: String) {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        post(filter: {slug: {eq: $slug}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          title
          slug
          category {
            name
          }
          content {
            value
            blocks {
              __typename
              ...on ImageBlockRecord {
                id
                image {
                  responsiveImage(imgixParams: {fm: jpg, fit: max, w: 800, h: 600 }) {
                    ...responsiveImageFragment
                  }
                }
              }
            }
          }
          date
          ogImage: coverImage{
            url(imgixParams: {fm: jpg, fit: crop, w: 1600, h: 1200 })
          }
          coverImage {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1600, h: 1200, q: 100 }) {
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

        morePosts: allPosts(orderBy: date_DESC, first: 3, filter: {slug: {neq: $slug}}) {
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

      ${responsiveImageFragment}
      ${metaTagsFragment}
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

export default function Post({ subscription, preview }) {
  const {
    data: { site, post, morePosts },
  } = useQuerySubscription(subscription);

  const metaTags = post.seo.concat(site.favicon);

  return (
    <Layout preview={preview}>
      <Head>{renderMetaTags(metaTags)}</Head>
      <Navbar data={site} />
      <article>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          category={post.category}
          author={post.author}
        />
        <Container>
          <PostBody content={post.content} />
        </Container>
      </article>
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Layout>
  );
}
