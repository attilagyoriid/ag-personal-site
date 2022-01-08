/** @format */

import { Parallax } from "react-parallax";
import { useMediaQuery } from "react-responsive";
import classes from "./imageLeading.module.scss";
export default function ImageLeading({ imgUrl }) {
  const insideStyles = {
    background: "white",
  };
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <div className={classes["parallax-container"]}>
      <Parallax
        bgImage={imgUrl}
        strength={500}
        className={classes["parallax-item"]}
        bgClassName={classes["parallax-bg"]}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}></div>
        </div>
      </Parallax>
    </div>
  );
}
