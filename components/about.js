import Image from "next/image";
import PageTitle from "../components/page-title";
import Container from "./container";

export default function About({ data }) {
  return (
    <section className="bg-white py-8 lg:py-24 relative text-beige-darkest">
      <Container>
        <div className="flex">
          <PageTitle
            title="Om mig"
            subtitle="Hej! Jag heter Marilia Bognandi. Sen barnsben har jag varit väldigt kreativ, bland annat spelat piano och sjungit i kör. Jag är utbildad civilingenjör inom medieteknik och jobbar som webbutvecklare och som fotograf via enskild firma. Med mitt bildspråk vill jag lyfta fram självförtroende, styrka och ledarskap. Älskar att få människor att känna sig fina på bild. Jag fotograferar med en Sony A7III kamera och de superskarpa objektiven från Zeiss, 55mm f/1.8 samt 35mm f/2.8 samt ett SONY 85mm F/1.8 GM-objektiv."
          ></PageTitle>
          <Image src="/images/hej.jpg" width="100%" height="auto" />
        </div>
      </Container>
    </section>
  );
}
