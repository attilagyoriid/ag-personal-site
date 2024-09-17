import { useEffect } from "react";
import * as gtag from "../../services/gtag";
import TitleSection from "../titleSection/titleSection";
import classes from "./videoPlayer.module.scss";
import { Media, Player } from "react-media-player";
export default function VideoPlayer() {
  // ToDo google analytics
  const handleOnPlay = (event) => {
    console.log("plaaaaying");
    gtag.event({
      action: "video_play",
      category: "VideoPlay",
      label: "video_play",
    });
  };

  useEffect(() => {}, []);
  return (
    <div className={classes["player__container"]}>
      <TitleSection
        title="hello there"
        subText=""
        className="lead--deep-dark-color"
      />
      <div className={classes["player-wrapper"]}>
        <Media>
          <Player src="https://youtu.be/0lRBwoC8MWY" />
        </Media>
      </div>
    </div>
  );
}
