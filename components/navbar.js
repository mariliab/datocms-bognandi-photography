import Container from "./container";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function DesktopMenu({ logo = "", activeRoute = "" }) {
  const routes = [
    { path: "/", name: "Start" },
    { path: "/about", name: "About" },
    { path: "/blog", name: "Blog" },
  ];

  return (
    <div className="hidden lg:flex justify-around items-center py-4">
      <div className="flex flex-1 space-x-4">
        {routes.map((route) => {
          return (
            <Link
              href={route.path}
              key={route.path}
              className={`${
                activeRoute === route.path && "font-normal underline"
              } font-light uppercase hover:underline`}
            >
              {route.name}
            </Link>
          );
        })}
      </div>
      <div>
        <Link href="/">
          <img
            src={logo}
            width="100"
            height="auto"
            alt="Bognandi Photography logga"
          />
        </Link>
      </div>
      <div className="flex flex-1 justify-end">
        <a
          href="mailto:marilia@bognandiphotography.com"
          className="font-normal px-6 pt-3 pb-2 border-1 border-black hover:bg-beige-lightest transition-all duration-200"
          target="_blank"
          rel="noreferrer"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

function MobileMenu({ logo = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden py-4">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <div className="flex items-center">
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
              style={{ width: "1rem", height: "0.15rem" }}
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
        </div>
        <div className="flex justify-center items-center">
          <Link href="/">
            <img
              src={logo}
              width="50"
              height="auto"
              alt="Bognandi Photography logga"
            />
          </Link>
        </div>
        <div className="flex justify-end items-center">
          <a
            href="mailto:marilia@bognandiphotography.com"
            className="font-normal hover:bg-beige-lightest transition-all duration-200"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
          <MobileMenuBody isOpen={isOpen} logo={logo} />
        </div>
      </div>
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
        <div className="flex justify-center">
          <Link href="/">
            <img src={logo} width="50" height="auto" />
          </Link>
        </div>
        <div className="flex flex-col gap-y-4 items-center">
          <p className="font-light">SEE MORE</p>
          <Link href="/about">About</Link>
          <Link href="/blogg">Blog</Link>
          <p className="mt-4 font-light">We help you with</p>
          <Link href="/services/personal-branding">Personal branding</Link>
          <Link href="/services/fashion-startup-branding">
            Fashion startup branding
          </Link>
        </div>
        <div className="py-0 sm:py-4 flex">
          <Link
            href="mailto:marilia@bognandiphotography.com"
            className="py-4 text-xs tracking-widest font-bold text-center bg-beige-darkest hover:bg-beige-light text-white hover:text-beige-darkest flex-1 rounded-full"
          >
            CONTACT ME
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ data }) {
  const router = useRouter();
  return (
    <nav>
      <Container>
        <DesktopMenu
          logo={data?.favicon[3]?.attributes?.href}
          activeRoute={router.route}
        />
        <MobileMenu logo={data?.favicon[3]?.attributes?.href} />
      </Container>
    </nav>
  );
}
