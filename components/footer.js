import Container from "./container";
import BlockTitle from "./block-title";

export default function Footer() {
  return (
    <footer className="bg-beige-darkest text-beige-light">
      <Container>
        <div className="py-28 flex flex-col flex-col-reverse lg:flex-row lg:items-center">
          <div className="flex flex-col w-1/3">
            <h6 className="font-bold leading-tight text-2xl">BOGNANDI</h6>{" "}
            <h6 className="leading-tight text-2xl">PHOTOGRAPHY</h6>
          </div>
          <div className="flex flex-col mb-8 lg:mb-0">
            <BlockTitle
              title="Kontakt"
              subtitle="Är du intresserad av att boka mig och mina tjänster, eller har du några frågor och funderingar? Tveka inte på att höra av dig!"
            />
            <a
              href="mailto:marilia@bognandiphotography.com"
              className="text-base lg:text-4xl text-white hover:text-beige-light flex items-center"
            >
              marilia@bognandiphotography.com
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
