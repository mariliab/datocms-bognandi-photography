import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Image } from "react-datocms";
import Container from "./container";

export default function AboutMe({ title = "", text = "", image = null }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.33,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <section className="bg-beige-light border-b-1 border-beige-darkest py-12 sm:py-24 text-beige-darkest">
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
          <div className="bg-white p-4 lg:p-12 flex flex-col justify-center w-full lg:w-1/2">
            <div
              ref={containerRef}
              className={`opacity-0 ${
                isVisible && " transition-opacity duration-1000 opacity-100"
              }`}
            >
              <h1 className="mb-2 text-2xl mb-4">{title}</h1>
              <p className="font-light mb-4">{text}</p>
              <p className="font-normal italic mb-4">/Marilia Bognandi</p>
              <Link href="/om-mig">
                <div className="flex">
                  <div className="flex-none text-xs font-normal px-12 pt-4 pb-3 bg-beige-dark text-white hover:bg-beige-lightest hover:text-beige-darkest transition-all duration-200">MER OM MIG</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
