import Head from "next/head";
import { renderMetaTags, useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import { metaTagsFragment } from "../lib/fragments";
import Layout from "../components/layout";
import Container from "../components/container";
import Navbar from "../components/navbar";
import PageTitle from "../components/page-title";
import About from "../components/about";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
      }
      ${metaTagsFragment}
    `,
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
            environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

function Villkor({ subscription }) {
  const {
    data: { site },
  } = useQuerySubscription(subscription);
  const metaTags = [];

  return (
    <Layout>
      <Head>
        {renderMetaTags(metaTags)}
        <title>Allmänna villkor</title>
        <meta name="robots" content="noindex"></meta>
      </Head>
      <Navbar data={site} />
      <Container>
        <div className="max-w-2xl mx-auto">
          <PageTitle
            title="Allmänna villkor"
            subtitle="Här beskrivs de allmänna villkoren för ett uppdrag, läs igenom dem:"
          />
          <p className="mb-4 mt-8">
            <h3>BOKNING</h3> Vid bokning skall uppdragsgivaren ange uppdragets
            omfattning, ändamålet med fotograferingen, sättet för och
            omfattningen av bildernas användning, tekniska krav och övriga
            anvisningar av betydelse för uppdraget.
          </p>
          <p className="mb-4">
            <h3>AVBESTÄLLNING</h3> Avbeställning av uppdrag skall ske
            skriftligen. Vid avbeställning skall uppdragsgivaren ersätta
            fotografen för eventuella kostnader för egna avbeställningar som har
            samband med den inställda fotograferingen. Uppdragsgivaren skall
            även ersätta fotografen för nedlagd förberedelsetid samt för avbokad
            tid som inte kan nyttjas för annat uppdrag.
          </p>
          <p className="mb-4">
            <h3>BILDURVAL</h3> Fotografen gör ett första urval, sen får kunden
            göra urvalet av de bilder som skall levereras.
          </p>
          <p className="mb-4">
            REKLAMATION Uppdragsgivaren skall snarast granska levererade bilder.
            Bilderna anses alltid godkända när produktionsprocessen för deras
            användning har inletts.
          </p>
          <p className="mb-4">
            <h3>ANVÄNDNINGRÄTT</h3> Bilderna får användas på det sätt och i den
            omfattning som skriftligen avtalats. Annan användning kräver i
            förväg lämnat skriftligt tillstånd från fotografen.
            Användningsrätten får inte upplåtas eller överlåtas till tredje part
            utan fotografens i förväg lämnade skriftliga medgivande.
            Användningsrätten upplåts till uppdragsgivaren/ slutanvändaren när
            full betalning kommit fotografen tillhanda. En upplåtelse av
            rättigheter omfattar inte rättigheter som ingår i gällande eller
            kommande avtalslicenser eller motsvarande licenser, som tecknas av
            fotografens förvaltningsellerintresseorganisation.
          </p>
          <p className="mb-4">
            <h3>EXKLUSIV ANVÄNDNINGSRÄTT</h3> Exklusiv användningsrätt innebär
            att fotografen inte har rätt att upplåta bilden till annan
            bildanvändare under den tid som avtalet mellan uppdragsgivaren och
            fotografen gäller. För att den upplåtna användningsrätten skall vara
            exklusiv krävs att detta avtalats om skriftligen.{" "}
          </p>
          <p className="mb-4">
            <h3>FOTOGRAFENS EGEN ANVÄNDNING</h3> Fotografen har rätt att använda
            bilderna i egen marknadsföring eller för egna projekt, såsom sociala
            medier och hemsida, om inte annat skriftligen angivits för
            uppdraget.
          </p>
          <p className="mb-4">
            <h3>BILDÅTERGIVNING</h3> Bild skall återges med största möjliga
            hänsyn till originalets utförande. Ändring, bearbetning eller
            överföring till annan konstart får inte göras utan fotografens på
            förhand givna skriftliga medgivande.
          </p>
          <p className="mb-4">
            <h3>NAMNANGIVELSE</h3> Vid användning av bild skall fotografens namn
            alltid anges. Vid utebliven namnangivelse skall uppdragsgivaren, på
            fotografens anmaning och utan dröjsmål, erlägga ett normerat
            skadestånd. Kunden skall därutöver omedelbart efter fotografens
            anmaning avbryta varje sådan aktivitet som bryter mot dessa villkor
            samt, där så är möjligt, avhjälpa påtalade brister. Notera att brott
            mot denna klausul inte utesluter att ytterligare brott och
            ersättningsansvar kan föreligga.
          </p>

          <p className="mb-4">
            <h3>OTILLÅTEN ANVÄNDNING M.M.</h3> Vid otillåten användning, ändring
            eller bearbetning av bild förbinder sig uppdragsgivaren, på
            fotografens anmaning och utan dröjsmål, erlägga skälig ersättning
            samt normerat skadestånd. Uppdragsgivaren skall även vidta de
            åtgärder som framgår av andra stycket. Notera att brott mot denna
            klausul inte utesluter att ersättningsansvar även kan föreligga
            enligt föregående klausul.
          </p>
          <p className="mb-4">
            <h3>ÄGANDERÄTT TILL OCH RETUR AV BILDER</h3> Levererade
            bilder,liksom idé- och skissbilder,utgör fotografens egendom. Efter
            avtalad användning skall dessa returneras till fotografen i oskadat
            skick. I det fall enbart digitala bilder har levererats, skall dessa
            raderas av uppdragsgivaren efter avtalad användning.
          </p>
          <p className="mb-4">
            <h3>ANSVAR FÖR TILLHANDAHÅLLET FÖREMÅL</h3> Uppdragsgivaren ansvarar
            för att föremål som lämnas för fotografering har ett
            tillfredsställande försäkringsskydd. Fotografen ansvarar inte för
            skador på eller förlust av sådant föremål.
          </p>
          <p className="mb-4">
            <h3>PERSONBILD</h3> En personbild är ett fotografi där nu levande
            och identifierbar/a person/er förekommer på bilden. Om inte annat
            skriftligen överenskommes ansvarar uppdragsgivaren för att erhålla
            tillstånd som krävs enligt gällande lagstiftning när
            personbildanvänds.
          </p>
          <p className="mb-4">
            <h3>PERSONUPPGIFTER</h3> I den mån fotografen kommer hantera
            personuppgifter för uppdragsgivarens räkning, skall särskilda
            överenskommelser träffas skriftligen mellan uppdragsgivaren och
            fotografen. I övrigt gäller fotografens integritetspolicy för den
            behandling av personuppgifter som fotografen utför.
          </p>
          <p className="mb-4">
            <h3>PRIS OCH BETALNINGSVILLKOR</h3> På angivna priser tillkommer
            mervärdesskatt om 25 %. Om inget annat skriftligen överenskommits
            gäller betalningsfrister och dröjsmålsränta enligt Räntelagen
            (1975:635). Uppdragsgivaren är betalningsansvarig oavsett om bilden
            använts eller ej.
          </p>
          <p className="mb-4">
            <h3>ARKIV</h3> Fotografen förbinder sig att bevara digitala
            bildfiler/originalbilder under en tid av fem (5) år från tidpunkten
            för leverans, om inte annat framgår av lag eller förordning.
          </p>
          <p className="mb-4">
            <h3>SKADAD ELLER FÖRKOMMEN BILD</h3> Uppdragsgivaren ersätta
            fotografen för försvunnen eller skadad bild. Uppdragsgivaren
            debiteras lägst med kostnaden för produktion av det fysiska exemplar
            som skadats eller försvunnit, om inte annat skriftligen
            överenskommits.
          </p>
          <p className="mb-4">
            <h3>TVISTELÖSNING</h3> I den händelse tvist uppstår i anledning av
            tillämpningen av dessa villkor, och denna inte kan lösas genom
            överläggningar mellan parterna, skall tvisten prövas av allmän
            domstol i enlighet med gällande svensk lagstiftning.
          </p>
          <p className="mb-4">
            <h3>ÖVRIGT</h3> Om uppdragsgivaren lägger ned sin verksamhet,
            inställer sina betalningar, blir föremål för ackord eller försätts i
            konkurs, återgår upplåtna rättigheter omedelbart till fotografen
            utan någon ersättning
          </p>
        </div>
      </Container>
    </Layout>
  );
}

export default Villkor;
