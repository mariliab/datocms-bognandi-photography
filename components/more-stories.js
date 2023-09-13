import PostPreview from "../components/post-preview";
import BlockTitle from "../components/block-title";

export default function MoreStories({ posts }) {
  return (
    <section className="py-12 lg:py-24 relative bg-beige-light text-beige-darkest">
      <div className="container mx-auto pl-4 lg:px-4">
        <BlockTitle
          title="Blog"
          subtitle="Interested in knowing more about me, my previous jobs and different photography tips? Browse through my blog posts to stay updated and to know more about the creative world of photography."
          linkText="Se all posts"
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
