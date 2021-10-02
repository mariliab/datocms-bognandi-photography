import { hotjar } from "react-hotjar";
import { useEffect } from "react";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(2629196, 6);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
