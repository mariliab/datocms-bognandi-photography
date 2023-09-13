import PageTitle from "../components/page-title";
import Container from "./container";
import BlogPosts from "../components/blog-posts";

export default function Blogg({ posts, categories = [] }) {
  return (
    <section className="bg-beige-light text-beige-darkest py-12 lg:py-24 relative">
      <Container>
        <PageTitle
          title="Blog"
          subtitle="Interested in knowing more about me, my previous jobs and different photography tips? Browse through my blog posts to stay updated and to know more about the creative world of photography."
        />
        <BlogPosts posts={posts} categories={categories} />
      </Container>
    </section>
  );
}
