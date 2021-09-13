import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PageTitle from "../components/page-title";
import Container from "../components/container";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <CoverImage title={title} responsiveImage={coverImage.responsiveImage} />
      <div className="bg-beige-lightest py-8 mb-8">
        <Container>
          <PageTitle title={title} />
          <div className="flex justify-between items-center">
            <div className="text-lg">
              <Date dateString={date} />
            </div>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </Container>
      </div>
    </>
  );
}
