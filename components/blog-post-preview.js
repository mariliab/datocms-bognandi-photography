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
      <Link as={`/blogg/${slug}`} href="/blogg/[slug]">
        <div className="cursor-pointer">
          <CoverImage
            slug={slug}
            title={title}
            responsiveImage={coverImage.responsiveImage}
          />
          <div className="p-4">
            <p className="text-xs mb-4 uppercase">{category.name}</p>
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
