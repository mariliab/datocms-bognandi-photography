import { Image } from "react-datocms";
import PageTitle from "./page-title";
import Container from "./container";

export default function Hero({ title = "", text = "", backgroundImage }) {
  return (
    <section className="bg-gray-200 py-12 lg:py-24 is-sticky">
      <Container>
        <div className="flex justify-center content-center flex-col lg:flex-row">
          <div className="lg:w-1/3">
            <img
              src={backgroundImage}
              className="object-cover w-full max-h-56 lg:max-h-full"
            />
          </div>
          <div className="flex flex-col self-center p-4 lg:w-1/2 bg-white md:p-12 lg:-ml-24">
            <PageTitle title={title} />
            <p className="mb-8 font-light">{text}</p>
            <button className="py-4 border text-xs tracking-widest font-bold">
              KONTAKTA MIG
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
