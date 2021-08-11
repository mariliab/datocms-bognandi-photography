import BlockTitle from "../components/block-title";
import Container from "./container";

export default function Testamonials({ data }) {
  return (
    <section className="bg-beige-dark py-12 relative">
      <div className="container mx-auto pl-5 md:px-4">
        <div className="flex gap-x-8 gap-y-8 text-white overflow-x-scroll">
          <div className="min-w-1/4 md:min-w-0 w-2/4 md:w-1/3 lg:w-1/3">
            <BlockTitle
              title="Vad mina kunder säger"
              subtitle="Mina kunder är främst företagare som behöver bilder i marknadsföringssyfte och kan variera från personal branding till produktfotografering."
            />
          </div>
          {data.map((item, index) => {
            return (
              <div
                className="min-w-1/2 md:min-w-1/4 w-3/4 md:w-1/3 lg:w-1/3"
                key={index}
              >
                <p className="text-sm font-light text-justify">{item.text}</p>
                <div className="flex items-center mt-4">
                  <img
                    className="w-14 h-14 min-w-14 rounded-full bg-cover filter grayscale"
                    src={item.image.url}
                  />
                  <div className="ml-4">
                    <p className="leading-tight">{item.name},</p>
                    <h6 className="font-thin leading-tight">{item.title}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
