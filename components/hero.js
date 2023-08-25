import { Image } from "react-datocms";
import PageTitle from "./page-title";
import Container from "./container";
import { createMarkup } from "../utils/help";

export default function Hero({ title = "", subtitle = "", image }) {

  return (
    <section className="bg-beige-light py-12 sm:py-24 text-beige-darkest border-b-1 border-beige-darkest">
      <div className="flex flex-col lg:flex-row gap-4 items-center max-w-screen-2xl mx-auto">
        <div className="w-full lg:w-2/3 px-4 md:px-0 pb-8 md:pb-0">
          <p className="text-xs mb-2">BRANDINGFOTOGRAF I STOCKHOLM</p>
          <h1 className="text-3xl xl:text-6xl xl:max-w-3xl xl:leading-snug mb-4">{title}</h1>
          <p className="text-base lg:text-2xl leading-normal font-light mb-8 lg:mb-12">{subtitle}</p>
          <a href="mailto:marilia@bognandiphotography.com" className="font-normal px-12 pt-4 pb-3 bg-beige-dark text-white hover:bg-beige-lightest hover:text-beige-darkest transition-all duration-200" target="_blank" rel="noreferrer">Jag vill boka</a>
        </div>
        <div className="w-full lg:w-1/3">
        <Image
          data={{
            ...image,
            alt: image?.title,
          }}
          className="object-cover w-full"
        />
        </div>
      </div>
    </section>
  );
}
