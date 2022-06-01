import { useEffect } from "react";
import ReactPlayer from 'react-player'
import classes from "./videoPlayer.module.scss";
export default function VideoPlayer() {

  useEffect(() => {
   
  }, []);
  return (
    <div className={classes["player__container"]}>
    <div className={classes["player-wrapper"]}>
      <ReactPlayer
        className={classes["react-player"]}
        width='100%'
        height='100%'
        url='https://www.youtube.com/watch?v=Go8nTmfrQd8&ab_channel=MarvelEntertainment'
        pip={false}
        playing={false}
        controls={false}
        light={"/images/illustration-credo.png"}

        volume={0.8}

      />
    </div>
    </div>
  );
}
