import { Image } from "react-datocms";
import PageTitle from "./page-title";
import Container from "./container";
import { createMarkup } from "../utils/help";

export default function Hero({ title = "", text = "", image }) {
  return (
    <section className="bg-beige-light py-8 sm:py-24">
      <Container>
        <div className="flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-1/2 h-72 max-h-72 sm:h-auto sm:max-h-800px overflow-hidden">
            <Image
              data={{
                ...image,
                alt: image?.title,
              }}
              className="object-cover w-full filter grayscale -mt-20"
            />
          </div>
          <div className="p-4 sm:w-1/2 bg-white md:p-12 2xl:p-24">
            <PageTitle title={title} />
            <div
              className="mb-4 sm:mb-8 font-light text-beige-darkest"
              dangerouslySetInnerHTML={createMarkup(text)}
            />
            <div className="py-0 sm:py-4 flex">
              <a
                href="mailto:marilia@bognandiphotography.com"
                className="py-4 text-xs tracking-widest font-bold text-center bg-beige-darkest hover:bg-beige-light text-white hover:text-beige-darkest flex-1 rounded-full"
              >
                KONTAKTA MIG
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
