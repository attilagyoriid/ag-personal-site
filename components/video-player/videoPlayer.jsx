import { useEffect } from "react";
import ReactPlayer from 'react-player/dailymotion';
import * as gtag from "../../services/gtag";
import TitleSection from "../titleSection/titleSection";
import classes from "./videoPlayer.module.scss";
export default function VideoPlayer() {
  const handleOnPlay = (event) => {
    gtag.event({
      action: "video_play",
      category: "VideoPlay",
      label: "video_play",
    });
    console.log('Your video event: ', event);

  };

  useEffect(() => {
   
  }, []);
  return (
    <div className={classes["player__container"]}>
       <TitleSection
        title="hello there"
        subText=""
        className="lead--deep-dark-color"
      />
    <div className={classes["player-wrapper"]}>
      <ReactPlayer
        className={classes["react-player"]}
        width='100%'
        height='100%'      
        url='https://dai.ly/k20f4IXnxLVtqry4Azp'
        pip={false}
        playing={false}
        controls={true}
        light={false}
        onPlay={handleOnPlay}

        volume={0.8}
        config={{
          dailymotion: {

          },
         
        }}
      />
    </div>
    </div>
  );
}
