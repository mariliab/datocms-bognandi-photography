import Container from "./container";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="flex flex-col">
              <h6 className="font-bold leading-tight text-2xl">BOGNANDI</h6>{" "}
              <h6 className="leading-tight text-2xl">PHOTOGRAPHY</h6>
            </div>
          </Link>
          <div>
            <ul className="flex gap-x-4">
              <Link href="/om">Link</Link>
              <Link href="/om">Link</Link>
              <Link href="/om">Link</Link>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}
