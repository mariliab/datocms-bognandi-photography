import { Image } from "react-datocms";
import PageTitle from "./page-title";
import Container from "./container";
import { createMarkup } from "../utils/help";

export default function Hero({ title = "", text = "", image }) {
  console.log("image: ", image.src);
  return (
    <section className="bg-beige-light py-12 sm:py-24">
      <Container>
        <div id="mobile" className="flex flex-col items-center sm:hidden">
          <div className="flex relative">
            <div className="w-1/2">
              <Image
                data={{
                  ...image,
                  alt: image?.title,
                }}
                className="object-cover w-full filter grayscale"
              />
            </div>
            <div className="w-1/2 transform -translate-x-3 mt-3 z-100">
              <PageTitle title={title} />
            </div>
          </div>
          <div className="p-4 pt-8 sm:w-1/2 bg-white md:p-12 2xl:p-24 -m-4">
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
        <div id="i-pad" className="hidden sm:flex flex-col lg:hidden">
          <div className="flex">
            <div className="w-2/3">
              <Image
                data={{
                  ...image,
                  alt: image?.title,
                }}
                className="object-cover w-full filter grayscale"
              />
            </div>
            <div className="transform -translate-x-12 mt-12 z-100">
              <PageTitle title={title} />
            </div>
          </div>

          <div className="p-4 pt-8 bg-white md:p-12 2xl:p-24">
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
        <div id="desktop" className="hidden lg:flex items-end">
          <div className="w-full">
            <div className="relative">
              <Image
                data={{
                  ...image,
                  alt: image?.title,
                }}
                className="object-cover w-full filter grayscale"
              />
              <div className="w-1/2 absolute top-0 inset-x-full -ml-12 mt-12">
                <PageTitle title={title} />
              </div>
            </div>
          </div>
          <div className="flex-initial p-12 bg-white -ml-12 -mb-12 z-10">
            <div
              className="mb-4 sm:mb-8 font-light text-base 2xl:text-xl text-beige-darkest"
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
