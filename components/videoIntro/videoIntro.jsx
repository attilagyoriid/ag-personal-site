/** @format */
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import classes from "./videoIntro.module.scss";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import { isIOS,isIpadOS } from "../../utils/platform";

export default function VideoIntro({ title, keywords, description, children }) {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const videoParentRef = useRef();
  useEffect(() => {
    if (videoParentRef.current && (isIOS() || isIpadOS())) {
      const player = videoParentRef.current;
      if (player) {
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted","");
        player.autoplay = true;
        setTimeout(()=>{
          const promise = player.play();
        },0);
      }

    }
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
        ref={videoParentRef}
        muted={true}
        playsinline={true}
        autoPlay={true}


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
     
    </div >
  );
}

VideoIntro.defaultProps = {
  title: "Attila Győri | SDET & Developer, Designer and Photographer",
  keywords:
    "development, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation",
  description: "Attila Győri Developer personal site",
};
