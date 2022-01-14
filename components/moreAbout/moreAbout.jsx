import ImgGallery from "../imgGallery/imgGallery";
import classes from "./moreAbout.module.scss";
export default function MoreAbout() {
  return (
    <div className={classes["more__container"]}>
      <div className={classes["more_text__container"]}>
        <div className={classes["more_text--lead"]}>more about.</div>
        <div className={classes["more_text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          impedit, ipsum maxime ex alias libero suscipit? Quibusdam tenetur,
          repudiandae ex facere pariatur molestiae debitis fugit, aperiam
          voluptas alias dolores saepe.
        </div>
      </div>
      <div className={classes["more_gallery"]}>
        <div className={classes["more_gallery__container"]}>
          <div className={classes["img_gallery"]}>
            <ImgGallery />
          </div>
        </div>
      </div>
    </div>
  );
}
