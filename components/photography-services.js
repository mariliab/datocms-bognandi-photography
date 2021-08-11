import BlockTitle from "../components/block-title";
import Container from "./container";

export default function PhotographyServices({ data }) {
  return (
    <section className="bg-beige-dark text-gray-100 py-8 lg:py-24 relative">
      <Container>
        <BlockTitle
          title="Fototjänster"
          subtitle="Kika in under kategorierna nedan för att se vilka typer av fotograferingar jag erbjuder."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-1 gap-y-1 md:gap-x-4 md:gap-y-4">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center relative bg-black"
              >
                <img
                  src={item.image.url}
                  className="filter grayscale opacity-75"
                />
                <p className="font-bold text-white text-3xl absolute">
                  {item.title}
                </p>
                <p className="text-white text-xs absolute bottom-4 right-4">
                  SE MER
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
