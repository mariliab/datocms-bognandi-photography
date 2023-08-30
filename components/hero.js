import { Image } from "react-datocms";
import PageTitle from "./page-title";
import Container from "./container";
import { createMarkup } from "../utils/help";

export default function Hero({ title = "", subtitle = "", image }) {

  return (
    <section className="bg-beige-light border-b-1 border-beige-darkest py-12 sm:py-24 text-beige-darkest">
      <div className="flex flex-col lg:flex-row gap-4 items-center max-w-screen-2xl mx-auto">
        <div className="w-full lg:w-2/3 px-4 xl:px-0">
          <p className="text-xs mb-2">BRANDINGFOTOGRAF I STOCKHOLM</p>
          <h1 className="text-6xl xl:text-8xl xl:max-w-3xl leading-tight mb-4">{title}</h1>
          <p className="text-base lg:text-2xl leading-normal font-light mb-8 lg:mb-12">{subtitle}</p>
          <a href="mailto:marilia@bognandiphotography.com" className="font-normal px-12 pt-4 pb-3 bg-beige-dark text-white hover:bg-beige-lightest hover:text-beige-darkest transition-all duration-200" target="_blank" rel="noreferrer">Jag vill boka</a>
        </div>
      </div>
    </section>
  );
}
