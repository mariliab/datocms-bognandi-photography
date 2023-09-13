import Link from "next/link";
import { Image } from "react-datocms";
import Container from "./container";
import isInView from "../lib/isInView";

export default function AboutMe({ title = "", text = "", image = null }) {
  const { targetRef, isVisible } = isInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.33,
  });

  return (
    <section className="bg-beige-light py-12 sm:py-24 text-beige-darkest">
      <Container>
        <div className="flex-col-reverse flex flex-col lg:flex-row items-stretch max-w-screen-md mx-auto">
          <div className="w-full lg:w-1/2">
            <Image
              data={{
                ...image,
                alt: image?.title,
              }}
              className="object-cover w-full"
            />
          </div>
          <div className="bg-white px-4 py-8 lg:px-8 flex flex-col justify-center w-full lg:w-1/2">
            <div
              ref={targetRef}
              className={`opacity-0 ${
                isVisible && " transition-opacity duration-1000 opacity-100"
              }`}
            >
              <h1 className="mb-2 text-2xl mb-4">{title}</h1>
              <p className="font-light mb-4">{text}</p>
              <p className="font-normal italic mb-4">/Marilia Bognandi</p>
              <Link href="/about">
                <div className="flex">
                  <div className="flex-none text-xs font-normal px-12 pt-4 pb-3 bg-green-olive text-white hover:bg-green-darkest transition-all duration-200">
                    MORE ABOUT ME
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
