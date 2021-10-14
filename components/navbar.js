import Container from "./container";
import Link from "next/link";
import { useState } from "react";

function DesktopMenu() {
  return (
    <div className="hidden lg:flex justify-between items-center py-4">
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
          <Link href="/om-mig">Om mig</Link>
          <Link href="/blogg">Blogg</Link>
          <Link href="mailto:marilia@bognandiphotography.com">Kontakt</Link>
        </ul>
      </div>
    </div>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center lg:hidden py-4">
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
      <button
        style={{ width: "1.5rem", height: "1.375rem" }}
        className="flex flex-col gap-1 justify-around focus:outline-none z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          style={{ width: "1.5rem", height: "0.15rem" }}
          className={`bg-black relative transform transition duration-300 ease-in-out rounded-full origin-bottom-left ${
            isOpen && "rotate-45"
          }`}
        ></div>
        <div
          style={{ width: "1.5rem", height: "0.15rem" }}
          className={`bg-black relative transform transition duration-300 ease-in-out rounded-full origin-center ${
            isOpen && "opacity-0"
          }`}
        ></div>
        <div
          style={{ width: "1.5rem", height: "0.15rem" }}
          className={`bg-black relative transform transition duration-300 ease-in-out rounded-full origin-top-left ${
            isOpen && "-rotate-45"
          }`}
        ></div>
      </button>
      <MobileMenuBody isOpen={isOpen} />
    </div>
  );
}

function MobileMenuBody({ isOpen }) {
  return (
    <div
      className={`bg-beige-light h-full w-full absolute top-0 left-0 p-4 z-10 transform transition duration-500 ease-in-out ${
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
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
        <div className="flex flex-col gap-y-4 items-center">
          <p>Se mer</p>
          <Link href="/om-mig">Om mig</Link>
          <Link href="/blogg">Blogg</Link>
          <p className="mt-4">Fototjänster</p>
          <Link href="/fototjanster/portratt">Porträtt</Link>
          <Link href="/fototjanster/produkter">Produkter</Link>
          <Link href="/fototjanster/foretag">Företag</Link>
        </div>
        <div className="py-0 sm:py-4 flex">
          <a
            href="mailto:marilia@bognandiphotography.com"
            className="py-4 text-xs tracking-widest font-bold text-center bg-beige-darkest hover:bg-beige-light text-white hover:text-beige-darkest flex-1 rounded-full"
          >
            KONTAKTA MIG
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav>
      <Container>
        <DesktopMenu />
        <MobileMenu />
      </Container>
    </nav>
  );
}
