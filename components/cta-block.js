import Container from "./container";

export default function CtaBlock({
  title = "Like what you see?",
  text = "Get in touch if you have any questions or concerns about a photo shoot, or are ready to know more.",
  ctaText = "I wanna book a photoshooot",
}) {
  return (
    <section className="bg-beige-lightest py-12 lg:py-24 relative text-beige-darkest">
      <Container>
        <div className="bg-white w-full lg:w-1/3 mx-auto py-12 px-4 lg:px-8 text-center">
          <h2 className="text-2xl xl:text-4xl xl:max-w-3xl xl:leading-snug mb-4">
            {title}
          </h2>
          <p className="mb-8">{text}</p>
          <a
            href="mailto:marilia@bognandiphotography.com"
            className="font-normal uppercase text-xs px-12 pt-4 pb-3 bg-green-olive text-white hover:bg-green-darkest transition-all duration-200"
            target="_blank"
            rel="noreferrer"
          >
            {ctaText}
          </a>
        </div>
      </Container>
    </section>
  );
}
