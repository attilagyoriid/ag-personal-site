/** @format */
import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import classes from "./videoIntro.module.scss";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";

export default function VideoIntro({ title, keywords, description, children }) {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    document.onreadystatechange = function () {
     
        setLoading(false);
        console.log("do something");
  
    };
  }, []);

  return (
    <div className={classes["video-container"]}>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoadingSpinner isLoading={isLoading} />
      <video
        autoPlay
        muted
        onPlay={() => {
          setLoading(false);
        }}
        onLoadStart={() => {
          setLoading(false);
        }}
        onEnded={() => {
          setLoading(false);
          router.push("/home");
        }}
      >
        <source src="/video/intro.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

VideoIntro.defaultProps = {
  title: "Attila Győri | SDET & Developer, Designer and Photographer",
  keywords:
    "development, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation",
  description: "Attila Győri Developer personal site",
};
