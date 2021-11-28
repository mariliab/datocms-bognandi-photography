import { Image } from "react-datocms";
import PageTitle from "./page-title";
import Container from "./container";
import { createMarkup } from "../utils/help";

export default function Hero({ title = "", text = "", image }) {
  console.log("image: ", image.src);
  return (
    <section className="bg-beige-light py-12 sm:py-24">
      <div id="mobile" className="flex flex-col items-center lg:hidden">
        <Container>
          <div className="flex">
            <div className="w-1/2">
              <Image
                data={{
                  ...image,
                  alt: image?.title,
                }}
                className="object-cover w-full filter grayscale rounded-full"
              />
            </div>
            <div className="w-1/2 transform -translate-x-4 mt-4 z-100">
              <PageTitle title={title} />
            </div>
          </div>
        </Container>
        <div className="bg-white sm:bg-beige-light pt-12 pb-4 -mt-8">
          <Container>
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
          </Container>
        </div>
      </div>

      <div id="desktop">
        <Container>
          <div className="hidden lg:flex gap-12 items-center">
            <div className="w-1/2">
              <div className="relative">
                <Image
                  data={{
                    ...image,
                    alt: image?.title,
                  }}
                  className="object-cover w-full filter grayscale rounded-full"
                />
              </div>
            </div>
            <div className="w-1/2">
              <PageTitle title={title} />
              <div className="">
                <div
                  className="mb-4 sm:mb-8 font-light text-base lg:text-lg 2xl:text-xl text-beige-darkest"
                  dangerouslySetInnerHTML={createMarkup(text)}
                />
                <div className="py-0 sm:py-4 flex">
                  <a
                    href="mailto:marilia@bognandiphotography.com"
                    className="py-4 px-12 text-base tracking-widest font-bold text-center bg-beige-darkest hover:bg-beige-lightest text-white hover:text-beige-darkest rounded-full"
                  >
                    KONTAKTA MIG
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
