import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Image from "next/image";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="bg-white w-60 lg:w-1/3 text-beige-darkest relative">
      <Link as={`/blogg/${slug}`} href="/blogg/[slug]">
        <div className="cursor-pointer">
          <CoverImage
            slug={slug}
            title={title}
            responsiveImage={coverImage.responsiveImage}
          />
          <div className="p-4">
            <h3 className="text-2xl md:text-3xl mb-4 leading-tight break-words">
              <a className="hover:underline">{title}</a>
            </h3>
            <div className="text-xs mb-4 uppercase">
              <Date dateString={date} />
            </div>
            <p className="text-md mb-4 font-light">{excerpt}</p>
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
