import { useEffect } from "react";
import ReactPlayer from 'react-player'
import TitleSection from "../titleSection/titleSection";
import classes from "./videoPlayer.module.scss";
export default function VideoPlayer() {

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
        url='https://dai.ly/k2PHDBuRahCyQdy1nl4'
        pip={false}
        playing={false}
        controls={true}
        light={"/images/illustration-credo.png"}

        volume={0.8}

      />
    </div>
    </div>
  );
}
