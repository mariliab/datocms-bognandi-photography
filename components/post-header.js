import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PageTitle from "../components/page-title";
import Container from "../components/container";

export default function PostHeader({
  title,
  coverImage,
  date,
  category,
  author,
}) {
  return (
    <>
      <div className="bg-beige-lightest mb-8">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="p-4 lg:p-12 w-full lg:w-1/2">
            <p className="text-xs mb-4 uppercase bg-green-darker text-white pt-2 pb-1 px-3 w-fit">
              {category?.name}
            </p>
            <PageTitle title={title} />
            <div className="text-xs mb-4 uppercase">
              <Date dateString={date} />
            </div>
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <CoverImage
            title={title}
            responsiveImage={coverImage.responsiveImage}
          />
        </div>
      </div>
    </>
  );
}
