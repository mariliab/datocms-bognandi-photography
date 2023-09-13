import Avatar from "../components/avatar";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function BlogPostPreview({
  title,
  coverImage,
  excerpt,
  author,
  slug,
  category,
}) {
  return (
    <div className="bg-white text-beige-darkest relative">
      <Link as={`/blog/${slug}`} href="/blog/[slug]">
        <div className="cursor-pointer">
          <CoverImage
            slug={slug}
            title={title}
            responsiveImage={coverImage.responsiveImage}
          />
          <div className="p-4">
            <p className="text-xs mb-4 uppercase bg-green-darker text-white pt-2 pb-1 px-3 w-fit">
              {category.name}
            </p>
            <h3 className="text-lg md:text-xl mb-4 leading-tight break-words">
              <p className="hover:underline">{title}</p>
            </h3>
            <p className="text-sm mb-4 font-light">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </Link>
    </div>
  );
}
