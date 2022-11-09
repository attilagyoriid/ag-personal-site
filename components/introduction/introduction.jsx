import Link from "next/link";
import { useEffect, useState } from "react";
import Hun from "../hun/hun";
import TitleText from "../titleText/titleText";
import { getNumberOfYearsFrom } from "../../utils/date";
import classes from "./introduction.module.scss";
import * as gtag from "../../services/gtag";

function Introduction() {
  const [years, setYears] = useState();
  useEffect(() => {
    setYears(getNumberOfYearsFrom(2016));

  }, []);
  const handleClick = (e) => {
    gtag.event({
      action: "download_cv",
      category: "Download",
      label: "download_cv",
    });
  };
  getNumberOfYearsFrom
  return (
    <div className={classes["introduction-container"]}>
      <TitleText
        bigText="hi, I am Attila"
        bigTextBoldSubText="Attila"
        smallText=""
      />
      <Hun />
      <div className={classes["introduction-text"]}>
        Hey, Thanks for stopping by. I am a Software Engineer with a passion
        for graphic and web design having extensive experience in the fields of Software QA especially STLC and Test Automation.
        I am a Development Team Lead for the last {years} years.

      </div>

      <div className={classes["button-container"]}>
        <div className={classes["btn-light__container"]}>
          <Link href="/doc/Attila_Gyori_2022_11.pdf">
            <a
              className={`${classes["btn-dark--outline"]} ${classes["btn-pulse"]}`}
              onClick={handleClick}
              target="_blank"
            >
              Resume
            </a>
          </Link>
        </div>
        <div className={classes["btn-main__container"]}>
          <Link href="/contact">
            <a className={classes["btn-main"]}>Contact</a>
          </Link>
        </div>
      </div>
      <div className={classes["bottom-line"]}></div>
    </div>
  );
}

export default Introduction;
