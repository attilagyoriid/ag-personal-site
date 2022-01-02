/** @format */

import Logo from "../logo/logo";
import Social from "../social/social";
import classes from "./footer.module.scss";
export default function Footer() {
  return (
    <div className={classes["footer-container"]}>
      <div className={classes["logo"]}>
        <Logo />
      </div>

      <div className={classes["text"]}>
        <div>MANUFACTURED</div>
        <div className={classes["by"]}>by attila győri</div>
        <div className={classes["date"]}>&copy;2021</div>
      </div>
      <div className={classes["social-block"]}>
        <Social layout="landscape" />
      </div>
    </div>
  );
}
