import BlockTitle from "../components/block-title";
import { Image } from "react-datocms";
import React, { useState } from "react";

function TestamonialItem({ data }) {
  const [isLongText, setIsLongText] = useState(false);

  return (
    <div className="bg-white px-4 py-8 lg:px-8 min-w-1/2 md:min-w-1/4 w-3/4 md:w-1/3 lg:w-1/3 flex flex-col content-center items-center">
      <div className="w-32">
        <Image className="rounded-full bg-cover filter grayscale mb-4"
        data={{
          ...data.image.responsiveImage,
          alt: data.title,
          }}
        />
        </div>
        <div className="mb-4 text-center">
          <p className="leading-tight">{data.name},</p>
          <p className="font-light leading-tight text-xs">{data.title}</p>
        </div>
      <div className="relative">
        {/* <div className="text-8xl font-montagu font-thin leading-3 text-center absolute right-0 left-0 top-12 z-0 text-white">
          &quot;
        </div> */}
        <div>
          <p className={`text-sm lg:text-base font-light text-justify ${
            !isLongText && "line-clamp-6"
          }`}>{data.text}</p>
        </div>
      </div>
      {!isLongText && (
        <button
          onClick={() => setIsLongText(true)}
          className="text-xs uppercase font-bold hover:text-beige-dark"
        >
          läs mer
        </button>
      )}
    </div>
  );
}

export default function Testamonials({ data }) {
  return (
    <section className="bg-beige-light border-b-1 border-beige-darkest py-12 lg:py-24 relative">
      <div className="container mx-auto pl-5 md:px-4">
        <BlockTitle title="Vad mina kunder säger" />
        <div className="flex gap-4 text-beige-darkest overflow-x-scroll">
          {data.map((item, index) => {
            return <TestamonialItem data={item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
