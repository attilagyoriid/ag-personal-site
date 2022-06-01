import { useEffect } from "react";
import classes from "./developer.module.scss";
export default function Developer() {

  useEffect(() => {
   
  }, []);
  return (
    <div className={classes["dev__container"]}>
      <div className={classes["dev_text"]} >
        <div className={classes["dev_text__container"]}>
          <div className={classes["dev_text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            impedit, ipsum maxime ex alias libero suscipit? Quibusdam tenetur,
            repudiandae ex facere pariatur molestiae debitis fugit, aperiam
            voluptas alias dolores saepe.
          </div>
        </div>
      </div>
      <div className={classes["dev_text__container"]} >
      
        <div className={classes["dev_img--lead"]}>being a developer...</div>
        <div className={classes["dev_img"]}>
          <img src="/images/illustration-dev_left.png" alt="Developer illustration" />
        </div>
      </div>
      
    </div>
  );
}
