/** @format */
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import classes from "./skillbars.module.scss";
const SkillBar = dynamic(() => import("react-skillbars"), {
  ssr: false,
});

export default function Skillbars() {
  const colors = {
    bar: "#e9ce84",
    background: "#31435b",
    title: {
      text: "#f5e7bf",
      background: "#597193",
    },
  };
  const skillBarRef = useRef(null);
  const skills1 = [{ type: "Dev", level: 85 }];
  const skills2 = [{ type: "SDET", level: 95 }];
  const skills3 = [{ type: "Design", level: 70 }];
  const skills4 = [{ type: "Leader", level: 85 }];
  useEffect(() => {
    console.dir("stajl: " + skillBarRef.current.style);
  }, []);
  return (
    <div id="program-skills" className={classes["skill-container"]}>
      <div className={classes["skill-description"]}>Team Leadership</div>
      {typeof window !== "undefined" ? (
        <SkillBar skills={skills4} colors={colors} height={25} />
      ) : null}
      <div className={classes["skill-description"]}>
        Software Development Engineer in Test
      </div>
      {typeof window !== "undefined" ? (
        <SkillBar skills={skills2} colors={colors} height={25} />
      ) : null}
      <div className={classes["skill-description"]}>Software Development</div>

      {typeof window !== "undefined" ? (
        <SkillBar
          skills={skills1}
          colors={colors}
          height={25}
          ref={skillBarRef}
        />
      ) : null}
      
      <div className={classes["skill-description"]}>Graphic Design</div>
      {typeof window !== "undefined" ? (
        <SkillBar skills={skills3} colors={colors} height={25} />
      ) : null}

    </div>
  );
}
