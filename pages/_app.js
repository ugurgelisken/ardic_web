import Layout from "./layout";
import "bootstrap/dist/css/bootstrap.css";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
});

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });

    const handleRouteChange = (url) => {
      if (typeof window !== "undefined") {
        window.gtag("config", process.env.GA_TRACKING_ID, {
          page_location: url,
        });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout>
     
        <Component {...pageProps} />
     
    </Layout>
  );
}

export default App;
