/** @format */

import classes from "./videoIntro.module.scss";
import bkgImg from "./bkg.png";

export default function VideoIntro() {
  return (
    <div className={classes["video-container"]}>
      <video autoPlay muted poster='/video/bkg.png'>
        <source src='/video/intro.mp4' type='video/mp4'></source>
      </video>
    </div>
  );
}
