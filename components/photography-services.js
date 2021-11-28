import BlockTitle from "../components/block-title";
import Container from "./container";
import Image from "next/image";
import Link from "next/link";

export default function PhotographyServices({ data }) {
  return (
    <section className="bg-beige-light text-beige-darkest pb-12 lg:pb-24 relative">
      <Container>
        <div className="block lg:hidden">
          <BlockTitle
            title="Fototjänster"
            subtitle="Jag erbjuder tre olika typer av fotograferingar. Detaljbilder på dina produkter, streetstyle, porträtt, eller behöver du kanske en professionell bild tagen i din arbetsmiljö? Oavsett ditt behov hjälper jag dig att förverkliga din vision!"
          />
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-x-1 gap-y-1 md:gap-x-4 md:gap-y-4">
          <div className="hidden lg:block">
            <BlockTitle
              title="Fototjänster"
              subtitle="Jag erbjuder tre olika typer av fotograferingar. Detaljbilder på dina produkter, streetstyle, porträtt, eller behöver du kanske en professionell bild tagen i din arbetsmiljö? Oavsett ditt behov hjälper jag dig att förverkliga din vision!"
            />
          </div>
          {data.map((item, index) => {
            return (
              <Link href={`/fototjanster/${item.slug}`} key={index}>
                <div className="flex justify-center items-center relative bg-black cursor-pointer overflow:hidden">
                  <img
                    src={item.featuredImage.url}
                    className="filter opacity-75 transform transition duration-300 ease-in-out hover:opacity-100 hover:scale-101"
                  />
                  <p className="text-white text-xs lg:text-xl font-bold absolute uppercase tracking-widest pointer-events-none">
                    {item.title}
                  </p>
                  <div className="text-xs absolute bottom-4 right-4">
                    {/* change to import {Image} from "react-datocms"; */}
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
