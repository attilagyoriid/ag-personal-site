/** @format */
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import classes from "./videoIntro.module.scss";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import { isIOS, isIpadOS } from "../../utils/platform";
const mainVideo =
  "/video/intro.mp4";
export default function VideoIntro({ title, keywords, description, children }) {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);
  useEffect(() => {
    if (videoParentRef.current) {
      const player = videoParentRef.current.children[0];
      if (player) {
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", "");
        player.autoplay = true;
        player.onplay = () => {
          setLoading(false);
        }
        player.onloadstart = () => {
          setLoading(false);
        }
        player.onended = () => {
          setLoading(false);
          router.push("/home");
        }
        setTimeout(() => {
          const promise = player.play();
          if (promise.then) {
            promise
              .then(() => { })
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = "none";
                setShouldUseImage(true);
              });
          }
        }, 0);
      }

    }
    document.onreadystatechange = function () {

      setLoading(false);
      console.log("do something");

    };
  }, []);

  let videoTag = shouldUseImage ? (
    <div>
      <img src={mainVideo} alt="Muted Video" />
    </div>
  ) : (
    <div
      ref={videoParentRef}
      dangerouslySetInnerHTML={{
        __html: `
        <video
          muted
          autoplay
          playsinline
          preload="metadata"
        >
        <source src="${mainVideo}" type="video/mp4" />
        </video>`
      }}
    />
  );
  return (
    <div className={classes["video-container"]}>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoadingSpinner isLoading={isLoading} />
      {videoTag}
    </div >
  );
}

VideoIntro.defaultProps = {
  title: "Attila Győri | SDET & Developer, Designer and Photographer",
  keywords:
    "development, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation",
  description: "Attila Győri Developer personal site",
};
