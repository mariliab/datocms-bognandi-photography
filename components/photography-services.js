import BlockTitle from "../components/block-title";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";

export default function PhotographyServices({ data }) {
  return (
    <section className="bg-beige-dark text-beige-light py-8 lg:py-24 relative">
      <Container>
        <BlockTitle
          title="Fototjänster"
          subtitle="Kika in under kategorierna nedan för att se vilka typer av fotograferingar jag erbjuder."
        />
        <div className="grid grid-cols-3 md:grid-cols-3 gap-x-1 gap-y-1 md:gap-x-4 md:gap-y-4">
          {data.map((item, index) => {
            return (
              <Link href={`/fototjanster/${item.slug}`} key={index}>
                <div className="flex justify-center items-center relative bg-black cursor-pointer">
                  <img
                    src={item.featuredImage.url}
                    className="filter grayscale opacity-75"
                  />
                  <p className="text-white text-xs lg:text-xl font-bold absolute uppercase tracking-widest">
                    {item.title}
                  </p>
                  <div className="text-xs absolute bottom-4 right-4">
                    <Image
                      src="/images/arrow-thin-right-white.svg"
                      alt="se mer"
                      width="14"
                      height="14"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
