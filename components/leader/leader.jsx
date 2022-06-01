import { useEffect } from "react";
import classes from "./leader.module.scss";
export default function Leader() {

  useEffect(() => {
   
  }, []);
  return (
    <div className={classes["leader__container"]}>
      
      <div className={classes["leader_text__container"]} >
      
        <div className={classes["leader_img--lead"]}>being a leader...</div>
        <div className={classes["leader_img"]}>
          <img src="/images/illustration-leader_left.png" alt="Leader illustration" />
        </div>
      </div>
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
      
    </div>
  );
}
