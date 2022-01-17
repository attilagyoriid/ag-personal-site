import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import classes from "./skills.module.scss";

import Skillbars from "../skillBars/skillbars";
import TitleText from "../titleText/titleText";

export default function Skills() {
  const skillImgRef = useRef(null);
  const buttonGroupRef = useRef(null);
  useEffect(() => {
    gsap.from(skillImgRef.current, {
      scrollTrigger: skillImgRef.current,
      autoAlpha: 0,
      x: -500,
      duration: 1.5,
      stagger: 0.25,
      ease: "expo.easeInOut",
      delay: 0.5,
    });
    gsap.from(buttonGroupRef.current, {
      scrollTrigger: skillImgRef.current,
      autoAlpha: 0,
      y: +100,
      duration: 1,
      stagger: 0.25,
      ease: "expo.easeInOut",
      delay: 4,
    });
  }, []);
  return (
    <div className={classes["skills-container"]}>
      <TitleText
        bigText="skills"
        bigTextBoldSubText="skills"
        textColor="#f5f5f5"
      />
      <div className={classes["skills-container-details"]}>
        <div className={classes["skill-image"]} ref={skillImgRef}>
          <img src="/images/strength.svg" alt="super power image" />
        </div>
        <div className={classes["skill-bar"]}>
          <Skillbars />
          <div className={classes["button-group"]} ref={buttonGroupRef}>
            <Link href="/projects">
              <a className={classes["btn-main"]}>Work</a>
            </Link>
            <Link href="/experience">
              <a className={classes["btn-light"]}>Experience</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
