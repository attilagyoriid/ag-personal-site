/** @format */
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
  Scroll,
} from "react-scroll";
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
  const router = useRouter();
  console.log("router " + router.pathname);

  const [visible, setVisible] = useState(true);
  const [scrollPositionY, setScrollPositionY] = useState();
  const prevScrollPositionY = usePrevious(scrollPositionY);
  const [click, setClick] = useState(false);
  const handleMenuClick = () => setClick(!click);
  const handleMenuClose = () => setClick(false);

  const handleScroll = () => {
    if (scrollPositionY < prevScrollPositionY) {
      setVisible(true);
    } else {
      setVisible(false);
      handleMenuClose();
    }
    setScrollPositionY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", to, element, arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", to, element, arguments);
    });

    scrollSpy.update();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, [scrollPositionY, prevScrollPositionY]);

  const handleSetActive = (to) => {
    console.log("set active", to);
  };

  return (
    <nav
      className={`${classes.main_nav}  ${
        visible ? classes.main_nav_visible : classes.main_nav_invisible
      }`}
    >
      <Logo />
      <ul
        className={
          click
            ? `${classes["nav-menu"]} ${classes["active"]}`
            : `${classes["nav-menu"]} `
        }
      >
        <li>
          <Link
            to='home'
            spy={true}
            smooth={true}
            duration={1500}
            onSetActive={handleSetActive}
            hashSpy={true}
            activeClass='active'
            onClick={handleMenuClose}
          >
            <a className={classes.current}>Home</a>
          </Link>
        </li>
        <li>
          <Link
            to='whoami'
            spy={true}
            smooth={true}
            duration={1500}
            onSetActive={handleSetActive}
            hashSpy={true}
            activeClass='active'
            onClick={handleMenuClose}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='specialization'
            spy={true}
            smooth={true}
            duration={1500}
            hashSpy={true}
            onClick={handleMenuClose}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            duration={1500}
            hashSpy={true}
            onClick={handleMenuClose}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            duration={1500}
            hashSpy={true}
            onClick={handleMenuClose}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className={classes["nav-icon"]} onClick={handleMenuClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
    </nav>
  );
}

export default MainNavigation;
