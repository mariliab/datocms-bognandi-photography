import Container from "./container";
import BlockTitle from "./block-title";

export default function Footer() {
  return (
    <footer className="bg-beige-light text-beige-darkest">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12">
          <div className="flex flex-col w-full lg:w-1/4 gap-4 lg:gap-12">
            <BlockTitle
              title="Kontakt"
              subtitle="Är du intresserad av att boka mig och mina tjänster, eller har du några frågor och funderingar? Tveka inte på att höra av dig!"
            />
          </div>
          <div className="flex flex-col">
            <a
              href="mailto:marilia@bognandiphotography.com"
              className="text-base lg:text-4xl text-white hover:text-beige-lightest flex items-center"
              target="_blank"
              rel="noreferrer"
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
      <div className="bg-beige-light py-4 border-t-1 border-beige-darkest text-beige-darkest text-xs">
        <Container>
          <div className="flex justify-between space-x-4 items-center">
            <div className="justify-self-center">
              © {new Date().getFullYear()} Bognandi Photography
            </div>
            <div className="self-end max-w-xs text-right italic">
              This website was built by M. Bognandi using React.js, Next.js,
              Tailwind css, Dato cms, Vercel
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
