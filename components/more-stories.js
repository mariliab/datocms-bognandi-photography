import PostPreview from "../components/post-preview";
import BlockTitle from "../components/block-title";

export default function MoreStories({ posts }) {
  return (
    <section className="py-12 lg:py-24 relative bg-beige-light text-beige-darkest">
      <div className="container mx-auto pl-4 lg:px-4">
        <BlockTitle
          title="Blogg"
          subtitle="Intresserad av att veta mer om mig, mina tidigare jobb och olika tips? Bläddra igenom mina blogginlägg för att hålla dig uppdaterad och för att veta mer om vår kreativa värld."
          linkPath="blogg"
          linkText="Se alla inlägg"
        />
        <div className="flex space-x-4 overflow-x-scroll">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
