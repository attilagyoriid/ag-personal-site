import Link from "next/link";
import Hun from "../hun/hun";
import TitleText from "../titleText/titleText";
import classes from "./introduction.module.scss";
function Introduction() {
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
      <div>
        <Link href="/contact">
          <a className={classes["btn-dark--outline"]}>Contact</a>
        </Link>
      </div>
      <div className={classes["bottom-line"]}></div>
    </div>
  );
}

export default Introduction;
