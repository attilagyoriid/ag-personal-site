/** @format */

import classes from "./videoIntro.module.scss";
import bkgImg from "./bkg.png";

export default function VideoIntro() {
  return (
    <div className={classes["video-container"]}>
      <video autoPlay muted poster={bkgImg}>
        <source src='/video/_intro.mp4' type='video/mp4'></source>
      </video>
    </div>
  );
}
