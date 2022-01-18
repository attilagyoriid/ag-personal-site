/** @format */

import { Parallax, Background } from "react-parallax";
import classes from "./imageLeading.module.scss";
export default function ImageLeading({ imgUrl, height }) {
  const insideStyles = {
    background: "white",
  };

  const getFileInfo = (file) => {
    const info = file.split(".");
    return { path: info[0], extension: info[1] };
  };

  return (
    <div className={classes["parallax-container"]}>
      <Parallax strength={500} className={classes["parallax-item"]}>
        <Background className={classes["parallax-bg"]}>
          <picture>
            <source
              media="(max-width: 700px)"
              srcSet={`${getFileInfo(imgUrl).path}-700w.${
                getFileInfo(imgUrl).extension
              }`}
              alt="Image Leading"
            />
            <source
              media="(min-width: 700px)"
              srcSet={`${getFileInfo(imgUrl).path}-1920w.${
                getFileInfo(imgUrl).extension
              }`}
              alt="Image Leading"
            />
            <img src={`${imgUrl}`} alt="Image Leading" />
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
