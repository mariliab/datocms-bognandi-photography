import Image from "next/image";
import PageTitle from "../components/page-title";
import Container from "./container";

export default function About({ data }) {
  return (
    <section className="bg-white py-8 lg:py-24 relative text-beige-darkest">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <PageTitle
              title="Om mig"
              subtitle="Hej! Jag heter Marilia Bognandi. Sen barnsben har jag varit väldigt kreativ, bland annat spelat piano och sjungit i kör. Jag är utbildad civilingenjör inom medieteknik och jobbar som webbutvecklare och som fotograf via enskild firma. Med mitt bildspråk vill jag lyfta fram självförtroende, styrka och ledarskap. Älskar att få människor att känna sig fina på bild. Jag fotograferar med en Sony A7III kamera och de superskarpa objektiven från Zeiss, 55mm f/1.8 samt 35mm f/2.8 samt ett SONY 85mm F/1.8 GM-objektiv."
            ></PageTitle>
            <div className="py-4 mt-4">
              <a
                href="mailto:hello@bognandiphotography.com"
                className="py-4 px-12 text-xs tracking-widest font-bold text-center bg-beige-darkest hover:bg-beige-light text-white hover:text-beige-darkest flex-1 rounded-full"
              >
                KONTAKTA MIG
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <Image
              src="/images/Marilia-Bognandi-studio.JPG"
              width={400}
              height={600}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
