/** @format */

import { Parallax, Background } from "react-parallax";
import classes from "./imageLeading.module.scss";
export default function ImageLeading({ imgUrl, height }) {
  const insideStyles = {
    background: "white",
  };

  return (
    <div className={classes["parallax-container"]}>
      <Parallax strength={500} className={classes["parallax-item"]}>
        <Background className={classes["parallax-bg"]}>
          <picture>
            <source
              media="(max-width: 700px)"
              srcSet={`${imgUrl}-700w.jpg`}
              alt="Image Leading"
            />
            <source
              media="(min-width: 700px)"
              srcSet={`${imgUrl}-1920w.jpg`}
              alt="Image Leading"
            />
            <img src={`${imgUrl}.jpg`} alt="Image Leading" />
          </picture>
        </Background>
        <div style={{ height: height }}>
          <div style={insideStyles}></div>
        </div>
      </Parallax>
    </div>
  );
}
ImageLeading.defaultProps = {
  height: 600,
};
