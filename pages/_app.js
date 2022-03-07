/** @format */

import "../styles/globals.scss";
import { motion } from "framer-motion";
import nProgress from "nprogress";
import { Router, useRouter } from "next/router";
import "nprogress/nprogress.css";
import Script from "next/script";
import * as gtag from "../services/gtag";
import { useEffect } from "react";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps, router }) {
  const routerX = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    routerX.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      routerX.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [routerX.events]);
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
            scale: 1,
          },
          animate: {
            opacity: 1,
            scale: 1,
          },
          exit: {
            opacity: 0,
            scale: 0.4,
          },
        }}
        transition={{ duration: 0.9 }}
      >
        <Component {...pageProps} key={router.route} />
      </motion.div>
    </>
  );
}

export default MyApp;

