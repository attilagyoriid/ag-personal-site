import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from 'react-lottie';
import leader_animation from "./leader_animation.json";
import classes from "./leader.module.scss";
export default function Leader() {
  const leaderImgRef = useRef(null);
  const leaderTextContainerRef = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: leader_animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    gsap.from(leaderImgRef.current, {
      scrollTrigger: leaderImgRef.current,
      autoAlpha: 0,
      x: -200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 1,
    });
    gsap.from(leaderTextContainerRef.current, {
      scrollTrigger: leaderTextContainerRef.current,
      autoAlpha: 0,
      x: 200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 1,
    });
  }, []);
  return (
    <div className={classes["leader__container"]}>
      
      <div className={classes["leader_img__container"]} ref={leaderImgRef}>
      
        <div className={classes["leader_img--lead"]}>being a leader...</div>
        <div className={classes["leader_img"]}>
        <Lottie options={defaultOptions}
                height={600}
                width={600} />
        </div>
      </div>
      <div className={classes["leader_text"]} >
        <div className={classes["leader_text__container"]} ref={leaderTextContainerRef}>
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
