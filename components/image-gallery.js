import { Image } from "react-datocms";
import BlockTitle from "../components/block-title";
import Container from "./container";

export default function ImageGallery({ data }) {
  return (
    <section className="bg-gray-200 py-12 lg:py-24 relative">
      <Container>
        <BlockTitle
          title="Portfolio"
          subtitle="Här är lite exempel på bilder som jag älskar att fota"
        ></BlockTitle>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.url} />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
