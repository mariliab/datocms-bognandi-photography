import React from "react";
import Link from "next/link";
import useIsInView from "../lib/useIsInView";

export default function BlockTitle({
  title = "",
  subtitle = "",
  centered = false,
  linkPath = "",
  linkText = "",
}) {
  const { targetRef, isVisible } = useIsInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.33,
  });

  return (
    <div className="mb-8">
      {centered ? (
        <div className="max-w-screen-sm text-center mx-auto">
          <h2
            ref={targetRef}
            className={`opacity-0 -translate-x-6 text-3xl xl:text-6xl xl:max-w-3xl xl:leading-snug mb-4 ${
              isVisible &&
              "transition-all duration-1000 transform-none opacity-100"
            }`}
          >
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
              ref={targetRef}
              className={`opacity-0 -translate-x-6 text-3xl xl:text-6xl xl:max-w-3xl xl:leading-snug mb-4 ${
                isVisible &&
                "transition-all duration-2000 transform-none opacity-100"
              }`}
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
