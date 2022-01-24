import { useEffect, useRef } from "react";
import Lottie from "react-lottie-player";
import { gsap } from "gsap";
import classes from "./funFacts.module.scss";
import funFacts from "./funFacts-animation.json";

export default function FunFacts() {
  const funFactsImgRef = useRef(null);
  useEffect(() => {
    gsap.from(funFactsImgRef.current, {
      scrollTrigger: funFactsImgRef.current,
      autoAlpha: 0,

      y: 200,
      duration: 1.5,
      stagger: 0.25,
      ease: "expo.easeInOut",
      delay: 0.5,
    });
  }, []);
  return (
    <section className={classes["facts_container"]}>
      <div className={classes["facts__img_container"]}>
        <div className={classes["text-intro"]}>things I really like</div>
        <div className={classes["area"]}>
          <ul className={classes["circles"]}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={classes["animation"]} ref={funFactsImgRef}>
          <Lottie
            style={{ height: "100%" }}
            animationData={funFacts}
            loop
            play
          />
        </div>
      </div>
    </section>
  );
}
