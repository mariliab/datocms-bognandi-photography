import PostPreview from "../components/post-preview";
import BlockTitle from "../components/block-title";
import Container from "../components/container";

export default function MoreStories({ posts }) {
  return (
    <section className="py-8 lg:py-24 relative bg-beige-light">
      <div className="container mx-auto pl-4 lg:px-4">
        <BlockTitle
          title="Blogg"
          subtitle="Här delar jag med mig av mina erfarenheter från fotograferingar samt en massa fototips."
        />
        <div className="flex gap-x-4 overflow-scroll">
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
      </div>
    </section>
  );
}
