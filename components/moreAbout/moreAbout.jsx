import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ImgGallery from "../imgGallery/imgGallery";
import classes from "./moreAbout.module.scss";
export default function MoreAbout() {
  const moreTextRef = useRef(null);
  const moreGalleryRef = useRef(null);
  useEffect(() => {
    gsap.from(moreTextRef.current, {
      scrollTrigger: moreTextRef.current,
      autoAlpha: 0,
      x: -200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 0.5,
    });
    gsap.from(moreGalleryRef.current, {
      scrollTrigger: moreGalleryRef.current,
      autoAlpha: 0,
      y: 200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 0.5,
    });
  }, []);
  return (
    <div className={classes["more__container"]}>
      <div className={classes["more_text__container"]} ref={moreTextRef}>
        <div className={classes["more_text--lead"]}>more about.</div>
        <div className={classes["more_text"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          impedit, ipsum maxime ex alias libero suscipit? Quibusdam tenetur,
          repudiandae ex facere pariatur molestiae debitis fugit, aperiam
          voluptas alias dolores saepe.
        </div>
      </div>
      <div className={classes["more_gallery"]} ref={moreGalleryRef}>
        <div className={classes["more_gallery__container"]}>
          <div className={classes["img_gallery"]}>
            <ImgGallery />
          </div>
        </div>
      </div>
    </div>
  );
}
