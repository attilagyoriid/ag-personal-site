/** @format */

import classes from "./titleOverlay.module.scss";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function TitleOverlay({ title, overlayText }) {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
  const boxRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        duration: 0.8,
        autoAlpha: 1,
        y: -90,
        ease: "linear",
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top center+=150",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <div id='overlay-title' className={classes["title-container"]}>
      <div className={`${classes["section-title"]}`}>{title}</div>
      <div ref={boxRef} className={`${classes["section-title--overlay"]}`}>
        {overlayText}
      </div>
    </div>
  );
}

export default TitleOverlay;
