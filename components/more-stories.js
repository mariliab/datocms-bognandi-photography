import PostPreview from "../components/post-preview";
import BlockTitle from "../components/block-title";
import Container from "../components/container";

export default function MoreStories({ posts }) {
  return (
    <section className="py-8 lg:py-24 relative bg-beige-light">
      <Container>
        <BlockTitle
          title="Blogg"
          subtitle="Här delar jag med mig av mina erfarenheter från fotograferingar samt en massa fototips."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 lg:gap-x-4 gap-y-4 md:gap-y-4 mb-32 overflow-hidden">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
