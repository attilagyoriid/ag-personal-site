/** @format */

import "../styles/globals.scss";
import { motion } from "framer-motion";
import nProgress from "nprogress";
import { Router, useRouter } from "next/router";
import "nprogress/nprogress.css";


Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps, router }) {
  return (
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
  );
}

export default MyApp;

