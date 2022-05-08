import Container from "./container";
import { Image } from "react-datocms";

export default function AboutAuthor({ aboutAuthorText = "", image = "" }) {
  return (
    <section className="py-12 lg:py-24 relative text-beige-darkest border-t-1 border-beige-darkest">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-4 max-w-2xl mx-auto">
          {aboutAuthorText && (
            <div
              dangerouslySetInnerHTML={{
                __html: aboutAuthorText,
              }}
            ></div>
          )}
          {image && (
            <div className="w-full">
              <Image
                data={{
                  ...image,
                  alt: image?.title,
                }}
                className="filter grayscale"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
