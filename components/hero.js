import Container from "./container";

export default function Hero({ title = "", subtitle = "", image }) {

  return (
    <section className="bg-beige-light border-b-1 border-beige-darkest py-12 sm:py-24 text-beige-darkest">
      <Container>
          <p className="text-xs mb-2">FOTOGRAF I STOCKHOLM</p>
          <h1 className="text-6xl xl:text-8xl xl:max-w-4xl leading-tight mb-4">{title}</h1>
          <p className="text-base lg:text-2xl leading-normal font-light mb-8 lg:mb-12">{subtitle}</p>
          <a href="mailto:marilia@bognandiphotography.com" className="font-normal uppercase text-xs px-12 pt-4 pb-3 bg-beige-dark text-white hover:bg-beige-lightest hover:text-beige-darkest transition-all duration-200" target="_blank" rel="noreferrer">Jag vill boka</a>
      </Container>
    </section>
  );
}
