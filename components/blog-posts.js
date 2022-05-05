import BlogPostPreview from "../components/blog-post-preview";
import BlockTitle from "../components/block-title";
import Container from "../components/container";

export default function BlogPosts({ posts }) {
  return (
    <section className="text-beige-darkest pt-8">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <BlogPostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            category={post.category}
          />
        ))}
      </div>
    </section>
  );
}
