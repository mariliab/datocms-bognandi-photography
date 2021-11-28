import BlockTitle from "../components/block-title";
import Container from "./container";
import React, { useState } from "react";

function TestamonialItem({ data }) {
  const [isLongText, setIsLongText] = useState(false);

  return (
    <div className="min-w-1/2 md:min-w-1/4 w-3/4 md:w-1/3 lg:w-1/3">
      <p
        className={`text-sm font-light text-justify ${
          !isLongText && "line-clamp-6 lg:line-clamp-3"
        }`}
      >
        {data.text}
      </p>
      {!isLongText && (
        <button
          onClick={() => setIsLongText(true)}
          className="text-xs uppercase font-bold hover:text-beige-light"
        >
          läs mer
        </button>
      )}
      <div className="flex items-center mt-4">
        <img
          className="w-14 h-14 min-w-14 rounded-full bg-cover filter grayscale"
          src={data.image.url}
        />
        <div className="ml-4">
          <p className="leading-tight">{data.name},</p>
          <h6 className="font-thin leading-tight text-xs">{data.title}</h6>
        </div>
      </div>
    </div>
  );
}

export default function Testamonials({ data }) {
  return (
    <section className="bg-beige-light py-12 relative border-t-1 border-b-1 border-beige-darkest">
      <div className="container mx-auto pl-5 md:px-4">
        <div className="flex gap-x-8 gap-y-8 text-beige-darkest overflow-x-scroll">
          <div className="min-w-1/3 md:min-w-0 w-2/4 md:w-1/3 lg:w-1/3">
            <BlockTitle title="Vad mina kunder säger" />
          </div>
          {data.map((item, index) => {
            return <TestamonialItem data={item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
