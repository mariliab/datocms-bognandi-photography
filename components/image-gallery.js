import { Image } from "react-datocms";
import BlockTitle from "../components/block-title";
import Container from "./container";

export default function ImageGallery({ data }) {
  return (
    <section className="bg-white py-8 lg:py-24 relative text-beige-darkest">
      <Container>
        <BlockTitle
          title="Portfolio"
          subtitle="Här är lite exempel på bilder som jag älskar att fota"
        ></BlockTitle>
        <div className="grid gap-1 md:gap-4 grid-cols-2 md:grid-cols-3">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index % 5 == 0 ? "col-span-2 md:col-span-1" : "col-span-1"
                }
              >
                <img src={item.url} />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
