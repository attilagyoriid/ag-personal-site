import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from 'react-lottie';
import designer_animation from "./designer_animation.json";
import classes from "./creative.module.scss";
export default function Creative() {
  const leaderTextRef = useRef(null);
  const leaderImgContainerRef = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: designer_animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    gsap.from(leaderTextRef.current, {
      scrollTrigger: leaderTextRef.current,
      start: "center center",
      autoAlpha: 0,
      x: -200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 2,

    });
    gsap.from(leaderImgContainerRef.current, {
      scrollTrigger: leaderImgContainerRef.current,
      start: "top center",
      autoAlpha: 0,
      x: 200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 2,
 
    });
  }, []);
  return (
    <div className={classes["leader__container"]}>
      
      
      <div className={classes["leader_text"]} ref={leaderTextRef}>
        <div className={classes["leader_text__container"]}>
          <div className={classes["leader_text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            impedit, ipsum maxime ex alias libero suscipit? Quibusdam tenetur,
            repudiandae ex facere pariatur molestiae debitis fugit, aperiam
            voluptas alias dolores saepe.
          </div>
        </div>
      </div>
      <div className={classes["leader_img__container"]} ref={leaderImgContainerRef}>
      
        <div className={classes["leader_img--lead"]}>being a creative...</div>
        <div className={classes["leader_img"]}>
          <Lottie options={defaultOptions}
                height={700}
                width={700} />
        </div>
      </div>
    </div>
  );
}
