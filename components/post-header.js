import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PageTitle from "../components/page-title";
import Container from "../components/container";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <div className="bg-beige-lightest mb-8">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="p-4 lg:p-12 w-full lg:w-1/2">
            <PageTitle title={title} />
            <div className="mb-4">
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
