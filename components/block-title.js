import React from "react";
import Link from "next/link";

export default function BlockTitle({
  title = "",
  subtitle = "",
  centered = false,
  linkPath = "",
  linkText = "",
}) {
  return (
    <div className="mb-8">
      {centered ? (
        <div className="max-w-screen-sm text-center mx-auto">
          <h2 className="text-2xl lg:text-3xl mb-2 leading-tight break-words lg:break-normal font-light uppercase">
            {title} {linkText}
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
          <div className="flex justify-between items-center mr-4 lg:mr-0">
            <h2
              id={title.toLowerCase()}
              className="text-3xl lg:text-3xl mb-2 leading-tight break-words lg:break-normal font-extralight uppercase"
            >
              {title}
            </h2>
            {linkPath && (
              <div className="mb-4 underline">
                <Link href={`/${linkPath}`}>
                  {linkText ? linkText : "Se mer"}
                </Link>
              </div>
            )}
          </div>
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
