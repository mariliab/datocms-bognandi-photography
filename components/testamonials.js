import BlockTitle from "../components/block-title";
import Container from "./container";
import React, { useState } from "react";

function TestamonialItem({ data }) {
  const [isLongText, setIsLongText] = useState(false);

  return (
    <div className="min-w-1/2 md:min-w-1/4 w-3/4 md:w-1/3 lg:w-1/3 flex flex-col content-center">
        <img
          className="w-1/2 min-w-36 rounded-full bg-cover filter grayscale"
          src={data.image.url}
          width="144"
          height="144"
          alt={data.name}
        />
        <div className="mb-4">
          <p className="leading-tight">{data.name},</p>
          <p className="font-light leading-tight text-xs">{data.title}</p>
        </div>
      <p
        className={`text-sm lg:text-base font-light text-justify ${
          !isLongText && "line-clamp-6"
        }`}
      >
        {data.text}
      </p>
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
    <section className="bg-beige-light py-12 relative border-b-1 border-beige-darkest">
      <div className="container mx-auto pl-5 md:px-4">
        <BlockTitle title="Vad mina kunder säger" />
        <div className="flex gap-8 text-beige-darkest overflow-x-scroll">
          {data.map((item, index) => {
            return <TestamonialItem data={item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
