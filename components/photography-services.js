import BlockTitle from "../components/block-title";
import Container from "./container";

export default function PhotographyServices({ data }) {
  return (
    <section className="bg-yellow-100 py-12 lg:py-24">
      <Container>
        <BlockTitle
          title="Fototjänster"
          subtitle="Kika in under kategorierna nedan för att se vilka typer av fotograferingar jag erbjuder."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 lg:gap-x-8 gap-y-4 md:gap-y-8">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-96 bg-cover flex justify-center items-center"
                style={{ backgroundImage: `url(${item.image.url})` }}
              >
                <p className="font-bold text-white text-2xl">{item.title}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
