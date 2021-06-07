import Container from "./container";
import BlockTitle from "./block-title";

export default function Footer() {
  return (
    <footer className="bg-yellow-900 text-white">
      <Container>
        <div className="py-28 flex flex-col flex-col-reverse lg:flex-row items-center">
          <div className="flex flex-col w-1/3">
            <h6 className="font-bold leading-tight text-2xl">BOGNANDI</h6>{" "}
            <h6 className="leading-tight text-2xl">PHOTOGRAPHY</h6>
          </div>
          <div className="flex flex-col">
            <BlockTitle
              title="Kontakt"
              subtitle="Vill du göra en bokning? Eller har du några frågor eller funderingar? Säg gärna hej!"
            />
            <a
              href="mailto:hello@bognandiphotography.com"
              className="text-2xl lg:text-6xl"
            >
              hello@bognandiphotography.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
