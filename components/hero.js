import Container from "./container";
import useIsInView from "../lib/useIsInView";

export default function Hero({ title = "", subtitle = "", image }) {
  const { targetRef, isVisible } = useIsInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.33,
  });

  return (
    <section className="bg-beige-light py-12 sm:py-24 text-beige-darkest">
      <Container>
        <div
          ref={targetRef}
          className={`opacity-0 ${
            isVisible && " transition-opacity duration-3000 opacity-100"
          }`}
        >
          <p className="text-xs mb-2">EMPOWERING WOMEN IN BUSINESS BY</p>
          <h1 className="text-4xl xl:text-8xl leading-tight mb-4">{title}</h1>
          <p className="text-base lg:text-2xl leading-normal font-light mb-8 lg:mb-12">
            {subtitle}
          </p>
          <a
            href="mailto:marilia@bognandiphotography.com"
            className="font-normal uppercase text-xs px-12 pt-4 pb-3 bg-green-olive text-white hover:bg-green-darkest transition-all duration-200"
            target="_blank"
            rel="noreferrer"
          >
            I wanna book
          </a>
        </div>
      </Container>
    </section>
  );
}
