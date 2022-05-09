import Avatar from "../components/avatar";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  author,
  slug,
  category,
}) {
  return (
    <div className="bg-white w-64 lg:w-1/3 text-beige-darkest relative overflow:hidden">
      <Link as={`/blogg/${slug}`} href="/blogg/[slug]">
        <div className="cursor-pointer w-64 lg:w-full">
          <CoverImage
            slug={slug}
            title={title}
            responsiveImage={coverImage.responsiveImage}
          />
          <div className="p-4">
            <div>
              <p className="text-xs mb-4 uppercase">{category.name}</p>
              <h3 className="text-lg md:text-xl mb-4 leading-tight break-words">
                {title}
              </h3>
              <p className="text-md mb-4 font-light line-clamp-3 lg:line-clamp-6">
                {excerpt}
              </p>
              <Avatar name={author.name} picture={author.picture} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
