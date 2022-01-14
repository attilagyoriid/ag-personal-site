import Link from "next/link";
import classes from "./skills.module.scss";

import Skillbars from "../skillBars/skillbars";
import TitleText from "../titleText/titleText";

export default function Skills() {
  return (
    <div className={classes["skills-container"]}>
      <TitleText
        bigText="skills"
        bigTextBoldSubText="skills"
        textColor="#f5f5f5"
      />
      <div className={classes["skills-container-details"]}>
        <div className={classes["skill-image"]}>
          <img src="/images/strength.svg" alt="super power image" />
        </div>
        <div className={classes["skill-bar"]}>
          <Skillbars />
          <div className={classes["button-group"]}>
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
