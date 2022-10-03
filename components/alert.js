import Container from "./container";
import cn from "classnames";
import Link from "next/link";

export default function Alert({ preview }) {
  return (
    <div
      className={cn("border-b hidden", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is showing draft content.{" "}
              <Link
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </Link>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              This is page is showing published content.{" "}
              <Link
                href="/api/preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </Link>{" "}
              to enter preview mode!
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
