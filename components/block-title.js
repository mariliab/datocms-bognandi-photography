import React from "react";

export default function BlockTitle({ title = "", subtitle }) {
  return (
    <div className="mb-8">
      <h2
        id={title.toLowerCase()}
        className="text-3xl lg:text-6xl mb-4 leading-tight break-words lg:break-normal"
      >
        {title}
      </h2>
      <div className="text-current bg-current h-1 w-12 border-2 border-beige mb-4 rounded-full"></div>
      {subtitle && (
        <div>
          <p className="text-base 2xl:text-xl">{subtitle}</p>
        </div>
      )}
    </div>
  );
}
