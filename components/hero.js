import { Image } from "react-datocms";
import PageTitle from "./page-title";
import Container from "./container";

export default function Hero({ title = "", text = "", backgroundImage }) {
  return (
    <section className="bg-beige-light py-8 lg:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src={backgroundImage}
              className="object-cover w-full max-h-56 lg:max-h-full"
            />
          </div>
          <div className="flex flex-col self-center p-4 lg:w-1/2 bg-white md:p-12">
            <PageTitle title={title} />
            <p className="mb-8 font-light">{text}</p>
            <a
              href="mailto:hello@bognandiphotography.com"
              className="py-4 border text-xs tracking-widest font-bold text-center text-black bg-gray-900 hover:bg-white text-white hover:text-black"
            >
              KONTAKTA MIG
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
