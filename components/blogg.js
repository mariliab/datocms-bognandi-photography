import PageTitle from "../components/page-title";
import Container from "./container";
import BlogPosts from "../components/blog-posts";

export default function Blogg({ posts, categories = [] }) {
  return (
    <section className="bg-beige-light border-b-1 border-beige-darkest text-beige-darkest py-12 lg:py-24 relative">
      <Container>
        <PageTitle
          title="Blogg"
          subtitle="Intresserad av att veta mer om mig, mina tidigare jobb och olika fototips? Bläddra igenom mina blogginlägg för att hålla dig uppdaterad och för att veta mer om den kreativa fotovärlden."
        />
        <BlogPosts posts={posts} categories={categories} />
      </Container>
    </section>
  );
}
