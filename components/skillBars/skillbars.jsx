/** @format */

import dynamic from "next/dynamic";
import classes from "./skillbars.module.scss";
const SkillBar = dynamic(() => import("react-skillbars"), {
  ssr: false,
});

export default function Skillbars() {
  const colors = {
    bar: "red",
    title: {
      text: "#abc123",
      background: "#fff",
    },
  };
  const skills1 = [{ type: "Development", level: 85 }];
  const skills2 = [{ type: "Test", level: 95 }];
  const skills3 = [{ type: "Design", level: 70 }];
  return (
    <div id='program-skills' className={classes["skill-container"]}>
      <div className={classes["left"]}>
        <div>Software Development</div>

        {typeof window !== "undefined" ? (
          <SkillBar skills={skills1} colors={colors} height={35} />
        ) : null}
        <div>Software Development Engineer in Test</div>
        {typeof window !== "undefined" ? (
          <SkillBar skills={skills2} colors={colors} height={35} />
        ) : null}
        <div>Graphic Design</div>
        {typeof window !== "undefined" ? (
          <SkillBar skills={skills3} colors={colors} height={35} />
        ) : null}
      </div>
    </div>
  );
}
