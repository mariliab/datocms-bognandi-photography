import React from "react";

export default function BlockTitle({
  title = "",
  subtitle = "",
  centered = false,
}) {
  return (
    <div className="mb-8">
      {centered ? (
        <div className="max-w-screen-sm text-center mx-auto">
          <h2 className="text-2xl lg:text-3xl mb-2 leading-tight break-words lg:break-normal font-light uppercase">
            {title}
          </h2>
          {subtitle && (
            <div>
              <p className="text-base 2xl:text-xl font-light max-w-4xl">
                {subtitle}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h2
            id={title.toLowerCase()}
            className="text-3xl lg:text-3xl mb-2 leading-tight break-words lg:break-normal font-extralight uppercase"
          >
            {title}
          </h2>
          {subtitle && (
            <div>
              <p className="text-base 2xl:text-xl font-light">{subtitle}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
