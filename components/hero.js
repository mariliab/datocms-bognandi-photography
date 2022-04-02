import { Image } from "react-datocms";
import PageTitle from "./page-title";
import Container from "./container";
import { createMarkup } from "../utils/help";

export default function Hero({ title = "", text = "", image }) {
  return (
    <section className="sticky top-0 -z-1">
      <div className="flex items-center max-w-screen-2xl mx-auto">
        <Image
          data={{
            ...image,
            alt: image?.title,
          }}
          className="object-cover w-full"
        />
      </div>
    </section>
  );
}
