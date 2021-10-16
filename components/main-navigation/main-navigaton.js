/** @format */
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Logo from "../logo/logo";

import classes from "./main-navigation.module.scss";

function MainNavigation() {
  const { pathname } = useRouter();

  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    console.log("page offset", window.pageYOffset);
    if (window.pageYOffset > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${classes.main_nav} ${classes["px-8"]} ${
        visible ? "" : classes.main_nav_hidden
      }`}
    >
      <Logo />
      <ul>
        <li>
          <Link href='/posts'>
            <a className={classes.current}>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>About</Link>
        </li>
        <li>
          <Link href='/posts'>Experience</Link>
        </li>
        <li>
          <Link href='/posts'>Work</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
