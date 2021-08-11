import Container from "./container";
import BlockTitle from "./block-title";

export default function Footer() {
  return (
    <footer className="bg-beige-dark text-beige-light">
      <Container>
        <div className="py-28 flex flex-col flex-col-reverse lg:flex-row lg:items-center">
          <div className="flex flex-col w-1/3">
            <h6 className="font-bold leading-tight text-2xl">BOGNANDI</h6>{" "}
            <h6 className="leading-tight text-2xl">PHOTOGRAPHY</h6>
          </div>
          <div className="flex flex-col mb-8 lg:mb-0">
            <BlockTitle
              title="Kontakt"
              subtitle="Vill du göra en bokning? Eller har du några frågor eller funderingar? Säg gärna hej!"
            />
            <a
              href="mailto:hello@bognandiphotography.com"
              className="text-2xl lg:text-4xl text-white hover:text-beige-light"
            >
              hello@bognandiphotography.com
            </a>
            <p className="mt-8">
              Kolla in min{" "}
              <a href="https://www.instagram.com/bognandiphotography/">
                Instagram
              </a>
            </p>
          </div>
        </div>
      </Container>
      <div className="text-center py-4 bg-white">
        <p className="text-beige-darkest">© 2021 Bognandi Photography</p>
      </div>
    </footer>
  );
}
