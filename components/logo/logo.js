/** @format */

import classes from "./logo.module.scss";
import Link from "next/link";

function Logo() {
  return (
    <Link href='/'>
      <a className={classes.logo}>
        <img
          src='images/AG_LOGO.svg'
          alt='AG logo'
          className={classes.logo_img}
        />
      </a>
    </Link>
  );
}

export default Logo;
