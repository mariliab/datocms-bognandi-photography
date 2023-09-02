import BlockTitle from "../components/block-title";
import Container from "./container";
import { Image } from "react-datocms";
import * as NextImage from "next/image";
import Link from "next/link";

export default function PhotographyServices({
  data = [],
  isStartpage = false,
}) {
  return (
    <section className="bg-beige-light relative py-12 lg:py-24 mx-auto">
      <Container>
        {isStartpage ? (
          <div>
            <BlockTitle
              title="Såhär kan vi hjälpa dig"
            />
            <div className="flex flex-col gap-4 lg:gap-12">
              {data.map((item, index) => {
                return (
                  <div key={item.title} className="bg-white flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div className="w-full lg:w-1/2 px-4 py-8 lg:px-16 lg:py-16">
                            <h2 className="text-xl lg:text-6xl uppercase leading-tight mb-2 lg:mb-12">{item.title}</h2>
                            <p className="mb-4 lg:mb-8 text-base lg:text-4xl font-light">{item.subtitle}</p>
                            <Link href={`/services/${item.slug}`}>
                              <div className="flex">
                                <div className="flex-none font-normal text-xs px-12 pt-4 pb-3 bg-beige-dark text-white hover:bg-beige-lightest hover:text-beige-darkest transition-all duration-200">
                                  JAG VILL VETA MER
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="w-full lg:w-1/2">
                          <Image
                            data={{
                            ...item?.featuredImage?.responsiveImage,
                            alt: item?.featuredImage?.responsiveImage?.title,
                            }}
                            className="transform transition duration-300 ease-in-out hover:opacity-100 hover:scale-101"
                          />
                        </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-1 gap-y-4 md:gap-x-4">
            <div className="mr-0 md:mr-12">
              <BlockTitle
                title="Utforska mer"
              />
            </div>
            {data.map((item, index) => {
              return (
                <Link href={`/services/${item.slug}`} key={index}>
                  <div className="flex flex-col justify-center items-center cursor-pointer overflow:hidden">
                    <Image
                      data={{
                        ...item?.featuredImage?.responsiveImage,
                        alt: item?.featuredImage?.responsiveImage?.title,
                      }}
                      className="transform transition duration-300 ease-in-out hover:opacity-100 hover:scale-101"
                    />
                    <div className="mt-4 uppercase text-xs font-normal px-6 pt-3 pb-2 border-1 border-black hover:bg-white transition-all duration-200">
                      {item.title}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
