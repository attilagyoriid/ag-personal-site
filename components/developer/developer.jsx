import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lottie from 'react-lottie';
import developer_animation from "./developer_animation.json";
import classes from "./developer.module.scss";
export default function Developer() {
  const devTextRef = useRef(null);
  const devImgContainerRef = useRef(null);
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: developer_animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    gsap.from(devTextRef.current, {
      scrollTrigger: devTextRef.current,
      autoAlpha: 0,
      x: -200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 1,
    });
    gsap.from(devImgContainerRef.current, {
      scrollTrigger: devImgContainerRef.current,
      autoAlpha: 0,
      x: 200,
      duration: 1.5,
      ease: "expo.easeInOut",
      delay: 1,
    });
  }, []);
  return (
    <div className={classes["dev__container"]}>
      <div className={classes["dev_text"]} ref={devTextRef}>
        <div className={classes["dev_text__container"]}>
          <div className={classes["dev_text"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            impedit, ipsum maxime ex alias libero suscipit? Quibusdam tenetur,
            repudiandae ex facere pariatur molestiae debitis fugit, aperiam
            voluptas alias dolores saepe.
          </div>
        </div>
      </div>
      <div className={classes["dev_img__container"]} ref={devImgContainerRef}>
      
        <div className={classes["dev_img--lead"]}>being a developer...</div>
        <div className={classes["dev_img"]}>
        <Lottie options={defaultOptions}
              height={500}
              width={500} />
        </div>
      </div>
      
    </div>
  );
}
