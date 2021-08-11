import { Image } from "react-datocms";
import PageTitle from "./page-title";
import Container from "./container";

export default function Hero({ title = "", text = "", backgroundImage }) {
  return (
    <section className="bg-beige-light py-8 lg:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row items-end">
          <div className="w-full lg:w-1/2">
            <img
              src={backgroundImage}
              className="object-cover w-full max-h-64 lg:max-h-800px rounded-t-full"
            />
          </div>
          <div className="p-4 lg:w-1/2 bg-white md:p-12">
            <PageTitle title={title} />
            <p className="mb-8 font-light text-beige-darkest">{text}</p>
            <div className="py-4 flex">
              <a
                href="mailto:hello@bognandiphotography.com"
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
