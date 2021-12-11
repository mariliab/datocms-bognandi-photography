import Container from "./container";
import Link from "next/link";
import { useState } from "react";

function DesktopMenu({ logo = "" }) {
  return (
    <div className="hidden lg:flex justify-around items-center py-4">
      <div className="flex flex-1 gap-x-4">
        <Link href="/" passHref>
          <a className="font-light">PORTFOLIO</a>
        </Link>
        <Link href="/om-mig" passHref>
          <a className="font-light">OM MIG</a>
        </Link>
        <Link href="/blogg" passHref>
          <a className="font-light">BLOGG</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <img src={logo} width="100" height="auto" />
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <Link href="mailto:marilia@bognandiphotography.com" passHref>
          <a className="font-light">KONTAKT</a>
        </Link>
      </div>
    </div>
  );
}

function MobileMenu({ logo = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center lg:hidden py-4">
      <Link href="/">
        <img src={logo} width="50" height="auto" />
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
      <MobileMenuBody isOpen={isOpen} logo={logo} />
    </div>
  );
}

function MobileMenuBody({ isOpen = false, logo = "" }) {
  return (
    <div
      className={`bg-beige-light h-full w-full absolute top-0 left-0 p-4 z-10 transform transition duration-500 ease-in-out ${
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex flex-col justify-between h-full">
        <Link href="/">
          <img src={logo} width="50" height="auto" />
        </Link>
        <div className="flex flex-col gap-y-4 items-center">
          <p className="font-light">SE MER</p>
          <Link href="/om-mig" passHref>
            <a>Om mig</a>
          </Link>
          <Link href="/blogg" passHref>
            <a>Blogg</a>
          </Link>
          <p className="mt-4 font-light">FOTOTJÄNSTER</p>
          <Link href="/fototjanster/portratt" passHref>
            <a>Porträtt</a>
          </Link>
          <Link href="/fototjanster/produkter" passHref>
            <a>Produkter</a>
          </Link>
          <Link href="/fototjanster/foretag" passHref>
            <a>Företag</a>
          </Link>
        </div>
        <div className="py-0 sm:py-4 flex">
          <Link href="mailto:marilia@bognandiphotography.com" passHref>
            <a className="py-4 text-xs tracking-widest font-bold text-center bg-beige-darkest hover:bg-beige-light text-white hover:text-beige-darkest flex-1 rounded-full">
              KONTAKTA MIG
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ data }) {
  return (
    <nav>
      <Container>
        <DesktopMenu logo={data?.favicon[3]?.attributes?.href} />
        <MobileMenu logo={data?.favicon[3]?.attributes?.href} />
      </Container>
    </nav>
  );
}
