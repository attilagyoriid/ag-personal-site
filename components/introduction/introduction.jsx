import Link from "next/link";
import Hun from "../hun/hun";
import TitleText from "../titleText/titleText";
import classes from "./introduction.module.scss";
import * as gtag from "../../services/gtag";
function Introduction() {
  const handleClick = (e) => {
    gtag.event({
      action: "download_cv",
      category: "Download",
      label: "download_cv",
    });
  };
  return (
    <div className={classes["introduction-container"]}>
      <TitleText
        bigText="hi, I am Attila"
        bigTextBoldSubText="Attila"
        smallText=""
      />
      <Hun />
      <div className={classes["introduction-text"]}>
        Hey, Thanks for stopping by. I am a software developer with a passion
        for web design. I enjoy developing simple, clean and slick websites that
        provide real value to the end user.
      </div>

      <div className={classes["button-container"]}>
        <div className={classes["btn-light__container"]}>
          <Link href="/doc/Attila_Gyori_2021.pdf">
            <a
              className={classes["btn-dark--outline"]}
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
