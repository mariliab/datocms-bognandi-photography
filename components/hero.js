import { Image } from "react-datocms";
import PageTitle from "./page-title";
import Container from "./container";

export default function Hero({ title = "", text = "", backgroundImage }) {
  return (
    <section className="bg-yellow-50 py-12 lg:py-24">
      <Container>
        <div className="flex justify-center content-center flex-col flex-col-reverse lg:flex-row">
          <div className="lg:w-1/2">
            <img src={backgroundImage} />
          </div>
          <div className="flex flex-col self-center p-4 lg:w-1/2 bg-white p-12 lg:-ml-24">
            <PageTitle title={title} />
            {text}
          </div>
        </div>
      </Container>
    </section>
  );
}
