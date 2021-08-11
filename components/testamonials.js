import BlockTitle from "../components/block-title";
import Container from "./container";

export default function Testamonials({ data }) {
  return (
    <section className="bg-beige py-12 relative">
      <div className="container mx-auto pl-5 md:px-4">
        <div className="flex gap-x-12 gap-y-12 text-white overflow-auto">
          <div className="w-2/3 md:w-1/3">
            <BlockTitle title="Vad mina kunder säger" />
          </div>
          {data.map((item, index) => {
            return (
              <div className="w-screen md:w-1/3" key={index}>
                <p className="text-sm font-thin text-justify leading-tight w-96 md:w-100">
                  {item.text}
                </p>
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
