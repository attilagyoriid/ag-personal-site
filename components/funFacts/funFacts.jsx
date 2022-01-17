import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import classes from "./funFacts.module.scss";

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
        <img
          src="/images/fun-facts-main.svg"
          alt="Few Facts about me"
          ref={funFactsImgRef}
        />
      </div>
    </section>
  );
}
