import BlockTitle from "../components/block-title";
import Container from "./container";

export default function PhotographyServices({ data }) {
  return (
    <section className="bg-gray-900 text-gray-100 py-12 lg:py-24 relative">
      <Container>
        <BlockTitle
          title="Fototjänster"
          subtitle="Kika in under kategorierna nedan för att se vilka typer av fotograferingar jag erbjuder."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center relative"
              >
                <img src={item.image.url} className="filter grayscale" />
                <p className="font-bold text-white text-3xl absolute">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
