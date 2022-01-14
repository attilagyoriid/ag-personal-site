/** @format */

import classes from "./logo.module.scss";
import Link from "next/link";

function Logo({ width }) {
  return (
    <Link href="/home">
      <div className={classes["logo-container"]}>
        <a className={classes.logo}>
          <img
            src="images/AG_LOGO.svg"
            alt="AG logo"
            className={classes.logo_img}
            style={{ width: { width }, height: width }}
          />
        </a>
      </div>
    </Link>
  );
}


export default Logo;
