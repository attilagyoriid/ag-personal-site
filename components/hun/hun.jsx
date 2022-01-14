import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import classes from "./hun.module.scss";
export default function Hun() {
  const imgContainer = useRef(null);
  const img = useRef(null);

  useEffect(() => {
    gsap.from(imgContainer.current, {
      scrollTrigger: imgContainer.current,
      autoAlpha: 0,
      scale: 0.5,
      duration: 0.75,
      stagger: 0.25,
      delay: 0.3,
    });
  }, []);
  return (
    <div className={classes["hun-container"]} ref={imgContainer}>
      <div className={classes["hun-text"]}>*like the hun</div>
      <div className={classes["hun-image"]}>
        <img src="/images/Attila_the_HUN.png" alt="Attila the Hun" ref={img} />
      </div>
    </div>
  );
}
