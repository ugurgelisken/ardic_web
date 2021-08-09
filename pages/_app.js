import Layout from "./layout";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
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
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0.5,
            y: 20,
          },
          animate: {
            opacity: 1,
            y: 0,
            scale: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default App;
