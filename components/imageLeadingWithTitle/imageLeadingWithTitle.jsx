/** @format */
import ImageLeading from "../imageLeading/imageLeading";
import TitleOverlay from "../titleOverlay/titleOverlay";
import classes from "./imageLeadingWithTitle.module.scss";
export default function ImageLeadingWithTitle({ url, title }) {
  return (
    <div className={classes["title-container"]}>
      <ImageLeading imgUrl={url} />
      <div className={classes["overlay-container"]}>
        <TitleOverlay title='' overlayText={title} />
      </div>
    </div>
  );
}
