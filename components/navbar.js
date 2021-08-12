import Container from "./container";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="grid">
              <h6 className="font-bold text-xl md:text-2xl cursor-pointer leading-tight md:leading-tight">
                BOGNANDI
              </h6>
              <h6 className="text-xl md:text-2xl cursor-pointer leading-tight md:leading-tight font-thin">
                PHOTOGRAPHY
              </h6>
            </div>
          </Link>
          <div>
            <ul className="flex gap-x-4">
              <Link href="/om">Om mig</Link>
              <Link href="mailto:hello@bognandiphotography.com">Kontakt</Link>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}
