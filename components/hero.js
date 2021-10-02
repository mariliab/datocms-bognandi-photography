import { Image } from "react-datocms";
import PageTitle from "./page-title";
import Container from "./container";
import { createMarkup } from "../utils/help";

export default function Hero({ title = "", text = "", backgroundImage }) {
  return (
    <section className="bg-beige-light py-8 lg:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <img
              src={backgroundImage}
              className="object-cover w-full h-72 max-h-72 lg:h-auto lg:max-h-800px filter grayscale"
            />
          </div>
          <div className="p-4 lg:w-1/2 bg-white md:p-12 2xl:p-24">
            <PageTitle title={title} />
            <div
              className="mb-4 lg:mb-8 font-light text-beige-darkest"
              dangerouslySetInnerHTML={createMarkup(text)}
            />
            <div className="py-0 lg:py-4 flex">
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
