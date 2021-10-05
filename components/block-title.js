import React, { useState } from "react";

export default function BlockTitle({ title = "", subtitle }) {
  const [isLongText, setIsLongText] = useState(false);

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
        <p className={`${!isLongText && "line-clamp-2 lg:line-clamp-6"}`}>
          {subtitle}
        </p>
      )}
      {!isLongText && subtitle && subtitle.length > 100 && (
        <button
          onClick={() => setIsLongText(true)}
          className="flex lg:hidden text-xs uppercase font-bold hover:text-beige-light"
        >
          läs mer
        </button>
      )}
    </div>
  );
}
