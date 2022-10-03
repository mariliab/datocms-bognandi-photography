import { useRef, useState, useEffect } from "react";
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
    <section className="bg-beige-light py-12 sm:py-24 text-beige-darkest">
      <Container>
        <div className="flex-col-reverse flex flex-col lg:flex-row gap-4 items-stretch max-w-screen-md mx-auto">
          <div className="w-full lg:w-1/2">
            <Image
              data={{
                ...image,
                alt: image?.title,
              }}
              className="object-cover w-full filter grayscale"
            />
          </div>
          <div className="bg-white p-4 lg:p-12 flex flex-col justify-center w-full lg:w-1/2">
            <div
              ref={containerRef}
              className={`opacity-0 ${
                isVisible && " transition-opacity duration-1000 opacity-100"
              }`}
            >
              <div className="text-8xl font-montagu font-thin leading-3">
                &quot;
              </div>
              <h1 className="mb-2 text-2xl mb-4">{title}</h1>
              <p className="font-light mb-4">{text}</p>
              <p className="font-normal italic">/Marilia Bognandi</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
