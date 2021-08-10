import Container from "./container";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="flex flex-col">
              <h6 className="font-bold leading-tight text-2xl cursor-pointer">
                BOGNANDI
              </h6>{" "}
              <h6 className="leading-tight text-2xl cursor-pointer">
                PHOTOGRAPHY
              </h6>
            </div>
          </Link>
          <div>
            <ul className="flex gap-x-4">
              <Link href="/om">Om mig</Link>
              <Link href="/om">Blogg</Link>
              <Link href="/om">Kontakt</Link>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}
