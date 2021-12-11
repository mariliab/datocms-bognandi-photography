import { Image } from "react-datocms";
import BlockTitle from "../components/block-title";
import Container from "./container";

export default function ImageGallery({ data }) {
  return (
    <section className="py-12 lg:py-24 relative text-beige-darkest">
      <Container>
        <BlockTitle
          title="Portfolio"
          subtitle="Utvalda favoriter för att visa på bredden av arbeten som jag skapar!"
          centered
        ></BlockTitle>
        <div className="grid gap-1 md:gap-4 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index % 5 == 0 ? "col-span-2 md:col-span-1" : "col-span-1"
                }
              >
                <Image
                  data={{
                    ...item?.responsiveImage,
                    alt: item?.responsiveImage.title,
                  }}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
