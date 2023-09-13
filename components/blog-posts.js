import { useState } from "react";
import BlogPostPreview from "../components/blog-post-preview";
import BlogFilter from "../components/blog-filter";

export default function BlogPosts({ posts, categories }) {
  const [activeFilters, setActiveFilters] = useState([]);

  const filteredPosts =
    activeFilters.length > 0
      ? posts.filter((post) => {
          return activeFilters.some((filter) => {
            return (
              filter.slug === post.category.slug &&
              filter.slug === post.category.slug
            );
          });
        })
      : posts;

  return (
    <section className="text-beige-darkest">
      <BlogFilter
        activeFilters={activeFilters}
        allFilters={[{ slug: "All", name: "All" }, ...categories]}
        onSelectFilters={setActiveFilters}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <BlogPostPreview
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
    </section>
  );
}
