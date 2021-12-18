import BlockTitle from "../components/block-title";
import Container from "./container";
import { Image } from "react-datocms";
import Link from "next/link";

export default function PhotographyServices({
  data = [],
  isStartpage = false,
}) {
  return (
    <section className="relative py-12 lg:py-24 mx-auto bg-beige-lightest">
      <Container>
        {isStartpage ? (
          <div>
            <p
              className="text-center uppercase mb-2"
              style={{ fontSize: "10px" }}
            >
              Välkommen till
            </p>
            <BlockTitle
              title="Bognandi photography"
              subtitle="Jag erbjuder tre olika typer av fotograferingar. Behöver du detaljbilder på dina produkter, streetstyle porträtt, eller kanske en professionell bild tagen i din arbetsmiljö? Oavsett ditt behov hjälper jag dig att förverkliga din vision!"
              centered
            />
          </div>
        ) : (
          <div className="mb-4 uppercase">Se mer</div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-1 gap-y-4 md:gap-x-4">
          {data.map((item, index) => {
            return (
              <Link href={`/fototjanster/${item.slug}`} key={index}>
                <div className="flex flex-col justify-center items-center cursor-pointer overflow:hidden">
                  <Image
                    data={{
                      ...item?.featuredImage?.responsiveImage,
                      alt: item?.featuredImage?.responsiveImage?.title,
                    }}
                    className="transform transition duration-300 ease-in-out hover:opacity-100 hover:scale-101"
                  />
                  <div className="mt-4 font-normal px-6 pt-3 pb-2 border-1 border-black hover:bg-white transition-all duration-200">
                    {item.title}
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
