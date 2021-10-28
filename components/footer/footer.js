/** @format */

import Logo from "../logo/logo";
import classes from "./footer.module.scss";
export default function Footer() {
  return (
    <div className={classes["footer-container"]}>
      <Logo />
      <div>soveg</div>
      <div>soveg</div>
    </div>
  );
}
