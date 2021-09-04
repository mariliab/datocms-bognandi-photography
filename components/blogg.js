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
          subtitle="Här delar jag med mig av mina erfarenheter från fotograferingar samt en massa fototips."
        />
        <BlogPosts posts={posts} />
      </Container>
    </section>
  );
}
