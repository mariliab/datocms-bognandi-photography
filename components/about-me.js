import { Image } from "react-datocms";
import Container from "./container";

export default function AboutMe({ title = "", text = "", image = null }) {
  return (
    <section className="bg-beige-light py-12 sm:py-24 text-beige-darkest">
      <Container>
        <div className="flex-col-reverse flex flex-col lg:flex-row gap-4 items-stretch max-w-screen-md mx-auto">
          <div className="w-full lg:w-1/2">
            <Image
              data={{
                ...image,
                alt: image?.title,
              }}
              className="object-cover w-full filter grayscale"
            />
          </div>
          <div className="bg-white p-4 lg:p-12 flex flex-col justify-center w-full lg:w-1/2">
            <div>
              <div className="text-8xl font-montagu font-thin leading-3">"</div>
              <h1 className="mb-2 text-2xl mb-4">{title}</h1>
              <p className="font-light mb-4">{text}</p>
              <p className="font-light italic">/Marilia Bognandi</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
