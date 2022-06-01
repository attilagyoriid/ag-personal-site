import { useEffect } from "react";
import classes from "./creative.module.scss";
export default function Creative() {

  useEffect(() => {
   
  }, []);
  return (
    <div className={classes["leader__container"]}>
      
      
      <div className={classes["leader_text"]} >
        <div className={classes["leader_text__container"]}>
          <div className={classes["leader_text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            impedit, ipsum maxime ex alias libero suscipit? Quibusdam tenetur,
            repudiandae ex facere pariatur molestiae debitis fugit, aperiam
            voluptas alias dolores saepe.
          </div>
        </div>
      </div>
      <div className={classes["leader_text__container"]} >
      
        <div className={classes["leader_img--lead"]}>being a creative...</div>
        <div className={classes["leader_img"]}>
          <img src="/images/illustration-designer_left.png" alt="Creative illustration" />
        </div>
      </div>
    </div>
  );
}
