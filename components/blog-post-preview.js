import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Image from "next/image";

export default function BlogPostPreview({
  title,
  coverImage,
  date,
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
            <div className="text-xs mb-4 uppercase">
              <Date dateString={date} />
            </div>
            <p className="text-sm mb-4 font-light">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="text-xs absolute bottom-4 right-4">
            <Image
              src="/images/arrow-thin-right-black.svg"
              alt="se mer"
              width="14"
              height="14"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
