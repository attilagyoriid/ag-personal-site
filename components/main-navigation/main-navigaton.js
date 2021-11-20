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
      className={`${classes.main_nav} ${classes["px-8"]} ${
        visible ? classes.main_nav_visible : classes.main_nav_invisible
      }`}
    >
      <Logo />
      <ul>
        <li>
          <Link
            to='home'
            spy={true}
            smooth={true}
            duration={1500}
            onSetActive={handleSetActive}
            hashSpy={true}
            activeClass='active'
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
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
