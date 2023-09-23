import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import * as ga from "../lib/ga";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    hotjar.initialize(2629196, 6);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
