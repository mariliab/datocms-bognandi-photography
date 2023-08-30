import Head from "next/head";
import { useQuerySubscription } from "react-datocms";
import { request } from "../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Layout from "../components/layout";
import Container from "../components/container";
import Navbar from "../components/navbar";
import Testamonials from "../components/testamonials";

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
      {
        site: _site {
          favicon: faviconMetaTags {
            ...metaTagsFragment
          }
        }
        allTestamonials {
            id
            image {
              url
              responsiveImage(imgixParams: {fm: jpg, w: 400, h: 600, fit: max }) {
                ...responsiveImageFragment
              }
            }
            name
            text
            title
        }
        page(filter: {slug: {eq: "personal-branding-packages"}}) {
          seo: _seoMetaTags {
            ...metaTagsFragment
          }
          id
          content {
            subtitle
            title
            image {
              responsiveImage {
                ...responsiveImageFragment
              }
            }
            cta
            description {
              value
            }
          }
          featuredImage {
            responsiveImage {
              ...responsiveImageFragment
            }
          }
          slug
          subtitle
          title
        }
      }
      ${metaTagsFragment}
      ${responsiveImageFragment}
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

const packagesData = {
    pageTitle: "Fotopaket för Personal Branding",
    generalFeatures: [
      "Flexibel stylinghjälp finns tillgänglig vid förfrågan för att säkerställa ditt varumärkes visuella sammanhang.",
      "Platsrekommendationer ges för att passa din unika identitet.",
      "Alla paket inkluderar naturliga och autentiska högupplösta bilder som visar ditt sanna jag.",
      "Fotograferingar genomförs inom centrala Stockholm, utanför tillkommer en kostnad för t&r.",
    ],
    packageList: [
      {
        title: "1. Brand Boost",
        description: "Perfekt för att uppdatera dina profilbilder.",
        features: [
          "Inkluderar bilder för 1 månads daglig sociala medieuppdateringar.",
          "Naturliga och autentiska högupplösta bilder.",
          "Perfekt för att uppdatera profilbilder, bakgrundsbilder bilder, om mig-sidor m.m.",
        ],
        investment: "10 000 kr",
      },
      {
        title: "2. Branding bildbank",
        description: "För de som publicerar dagligen eller flera gånger per vecka på sociala medier och vill ha content för 3 månader.",
        features: [
          "Professionellt redigerade högupplösta bilder.",
          "Inkluderar bilder för 3 månaders daglig sociala medieuppdateringar.",
          "Du får tillgång till en mångsidig 'bildbank' som fångar DITT personliga varumärke.",
          "Personlig konsultation för att anpassa fotograferingen till ditt personliga varumärkes känsla.",
        ],
        investment: "15 000 kr",
      },
      {
        title: "3. ALL IN - Branding Bildbank",
        description: "För de som publicerar dagligen eller flera gånger per vecka på sociala medier och vill ha content för 6+ månader.",
        features: [
          "Få ALLA professionellt redigerade högupplösta bilder från fotograferingen. (200+ bilder)",
          "Du får tillgång till en mångsidig 'bildbank' som fångar DITT personliga varumärke.",
          "Säg Bye Bye till opersonliga stockbilder - ha dina egna för att utstråla autencitet.",
          "Personlig konsultation för att anpassa fotograferingen till ditt personliga varumärkes känsla.",
          "Bonus: Fyll i en brandundersökning för att guida fotograferingens kreativa riktning.",
          "Specialerbjudande: Hänvisa oss till en vän och få 10% rabatt på din nästa session!",
        ],
        investment: "25 000 kr",
      },
    ],
  };

function Packages({ subscription }) {
  const {
    data: { site, page, allTestamonials },
  } = useQuerySubscription(subscription);

//   const metaTags = page.seo.concat(site.favicon);

  return (
    <Layout>
      <Head>
      <meta name="robots" content="noindex"></meta>
      </Head>
      <Navbar data={site} />
      <div className="bg-beige-lightest py-12 lg:py-24 relative text-beige-darkest">
      <Container>
      <h1 className="text-3xl font-semibold mb-6">{packagesData.pageTitle}</h1>
      <div>
        <h2 className="text-xl font-semibold mb-4">Generell information:</h2>
        <ul className="list-none list-inside mb-6">
          {packagesData.generalFeatures.map((feature, index) => (
            <li key={index}><span>-</span> {feature}</li>
          ))}
        </ul>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {packagesData.packageList.map((packageItem, index) => (
          <div key={index} className="bg-white p-4 lg:p-12 flex flex-col justify-between">
            <div>
            <h2 className="uppercase text-xl font-semibold mb-2">{packageItem.title}</h2>
            <p className="mb-4 font-bold">{packageItem.description}</p>
            <ul className="list-none list-inside">
              {packageItem.features.map((feature, index) => (
                <li key={index} className="mb-4"><span>-</span> {feature}</li>
              ))}
            </ul>
            </div>
            <div>
            <p className="mt-4 font-bold">Investering: {packageItem.investment}</p>
            <br></br>
            <a href="mailto:marilia@bognandiphotography.com" className="font-normal px-12 pt-4 pb-3 bg-beige-dark text-white hover:bg-beige-lightest hover:text-beige-darkest transition-all duration-200" target="_blank" rel="noreferrer">Jag är redo att boka</a>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs mt-4">Priser visas ex. moms</p>
    </Container>
    </div>
    <Testamonials data={allTestamonials} />
    </Layout>
  );
}

export default Packages;


