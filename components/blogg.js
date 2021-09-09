import Image from "next/image";
import PageTitle from "../components/page-title";
import Container from "./container";
import BlogPosts from "../components/blog-posts";

export default function Blogg({ posts }) {
  return (
    <section className="bg-beige-lightest py-8 lg:py-24 relative text-beige-darkest">
      <Container>
        <PageTitle
          title="Blogg"
          subtitle="Intresserad av att veta mer om mig, mina tidigare jobb och olika fototips? Bläddra igenom mina blogginlägg för att hålla dig uppdaterad och för att veta mer om den kreativa fotovärlden."
        />
        <BlogPosts posts={posts} />
      </Container>
    </section>
  );
}
