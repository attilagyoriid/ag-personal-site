/** @format */
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
// import useScrollPosition from "../../hooks/useScrollPosition";
import Logo from "../logo/logo";

import classes from "./main-navigation.module.scss";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

function MainNavigation(props) {
  console.log("props", props);
  const { pathname } = useRouter();

  const [visible, setVisible] = useState(true);
  const [scrollPositionY, setScrollPositionY] = useState();
  const prevScrollPositionY = usePrevious(scrollPositionY);

  const handleScroll = () => {
    if (scrollPositionY < prevScrollPositionY) {
      console.log("invisible");
      setVisible(true);
    } else {
      console.log("visible");
      setVisible(false);
    }
    setScrollPositionY(window.pageYOffset);
    console.log("page offset", scrollPositionY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPositionY, prevScrollPositionY]);

  return (
    <nav
      className={`${classes.main_nav} ${classes["px-8"]} ${
        visible ? classes.main_nav_visible : classes.main_nav_invisible
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
