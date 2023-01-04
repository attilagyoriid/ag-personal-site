/** @format */
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import NextLink from "next/link";
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
import ActiveLink from "../activeLink/ActiveLinks";

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

function MainNavigation(props) {
  const router = useRouter();

  const [visible, setVisible] = useState(true);

  const [scrollPositionY, setScrollPositionY] = useState();
  const prevScrollPositionY = usePrevious(scrollPositionY);
  const [click, setClick] = useState(false);
  const handleMenuClick = () => setClick(!click);
  const handleMenuClose = () => setClick(false);

  const isPageHome = () => {
    return router.pathname.includes("home");
  };

  const handleScroll = () => {
    setVisible(true);
    // User feedback, navigation stay visible
    // if (scrollPositionY < prevScrollPositionY) {
    //   setVisible(true);
    // } else {
    //   setVisible(false);
    //   handleMenuClose();
    // }
    setScrollPositionY(window.pageYOffset);
  };

  const handleRouteChange = () => {
    setVisible(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("begin", function (to, element) { });

    Events.scrollEvent.register("end", function (to, element) {
    });

    scrollSpy.update();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, [scrollPositionY, prevScrollPositionY]);

  const handleSetActive = (to) => {
  };

  const handleClickOnPageDifferentThanHome = (event) => {
    // User feedback, navigation stop scrolling switxh page
    // if (!isPageHome()) {
    //   router.push("/home");
    // }
  };

  return (
    <nav
      className={`${classes.main_nav}  ${visible ? classes.main_nav_visible : classes.main_nav_invisible
        }`}
    >
      <Logo width="60px" />
      <ul
        className={
          click
            ? `${classes["nav-menu"]} ${classes["active"]}`
            : `${classes["nav-menu"]} `
        }
      >
        <li>
          <ActiveLink activeClassName="active" href="/home"
            onClick={(event) => {
              handleMenuClose(event);
            }}>
            <a className={classes.current}>Home</a>
          </ActiveLink>
          {/* User feedback, navigation stop scrolling switxh page */}
          {/* <Link
            to="home"
            spy={true}
            smooth={true}
            duration={1500}
            onSetActive={handleSetActive}
            activeClass="active"
            onClick={(event) => {
              handleMenuClose(event);
              handleClickOnPageDifferentThanHome(event);
            }}
          >
            <a className={classes.current}>Home</a>
          </Link> */}
        </li>
        {/* {!isPageHome() && ( */}
        <>
          <li>
            <ActiveLink activeClassName="active" href="/experience"
              onClick={(event) => {
                handleMenuClose(event);
              }}>
              <a className={classes.current}>Experience</a>
            </ActiveLink>
            {/* <NextLink
                href="/experience"
                onClick={(event) => {
                  handleMenuClose(event);
                  handleClickOnPageDifferentThanHome(event);
                }}
              >
                <a className={classes.current}>Experience</a>
              </NextLink> */}
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/about"
              onClick={(event) => {
                handleMenuClose(event);
              }}>
              <a className={classes.current}>About</a>
            </ActiveLink>
            {/* <NextLink
                href="/about"
                onClick={(event) => {
                  handleMenuClose(event);
                  handleClickOnPageDifferentThanHome(event);
                }}
              >
                <a className={classes.current}>About</a>
              </NextLink> */}
          </li>

          <li>
            <ActiveLink activeClassName="active" href="/projects"
              onClick={(event) => {
                handleMenuClose(event);
              }}>
              <a className={classes.current}>Projects</a>
            </ActiveLink>
            {/* <NextLink
                href="/projects"
                onClick={(event) => {
                  handleMenuClose(event);
                  handleClickOnPageDifferentThanHome(event);
                }}
              >
                <a className={classes.current}>Work</a>
              </NextLink> */}
          </li>

          <li>
            <ActiveLink activeClassName="active" href="/contact"
              onClick={(event) => {
                handleMenuClose(event);
              }}>
              <a className={classes.current}>Contact</a>
            </ActiveLink>
            {/* <NextLink
                href="/contact"
                onClick={(event) => {
                  handleMenuClose(event);
                  handleClickOnPageDifferentThanHome(event);
                }}
              >
                <a className={classes.current}>Contact</a>
              </NextLink> */}
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/doc/Attila_Gyori_2022_11.pdf" onClick={(event) => {
              handleMenuClose(event);
            }}>
              <a className={classes.current} target="_blank" rel="noopener noreferrer">CV</a>
            </ActiveLink>
            {/* <NextLink
                href="/doc/Attila_Gyori_2022_11.pdf"
                onClick={(event) => {
                  handleMenuClose(event);
                  handleClickOnPageDifferentThanHome(event);
                }}
              >
                <a className={classes.current} target="_blank" rel="noopener noreferrer">
                  CV
                </a>
              </NextLink> */}
          </li>
        </>
        {/* )} */}
        {/* User feedback, navigation stop scrolling switxh page */}
        {/* {isPageHome() && (
          <>
            <li>
              <Link
                activeClass="active"
                to="specialization"
                spy={true}
                smooth={true}
                duration={1500}
                onClick={() => {
                  handleMenuClose();
                }}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="whoami"
                spy={true}
                smooth={true}
                duration={1500}
                onSetActive={handleSetActive}
                activeClass="active"
                onClick={(event) => {
                  handleMenuClose(event);
                }}
              >
                About
              </Link>
            </li>


            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={1500}
                onClick={() => {
                  handleMenuClose();
                }}
              >
                Work
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1500}
                onClick={() => {
                  handleMenuClose();
                }}
              >
                Contact
              </Link>
            </li>
            <li>
              <NextLink
                href="/doc/Attila_Gyori_2022_11.pdf"
                onClick={(event) => {
                  handleMenuClose(event);
                  handleClickOnPageDifferentThanHome(event);
                }}
              >
                <a className={classes.current} target="_blank" rel="noopener noreferrer">
                  CV
                </a>
              </NextLink>
            </li>
          </>
        )} */}
      </ul>
      <div className={classes["nav-icon"]} onClick={handleMenuClick}>
        <div
          className={`${classes["menu-btn"]} ${click ? classes["close"] : ""}`}
        >
          <div className={classes["btn-line"]}></div>
          <div className={classes["btn-line"]}></div>
          <div className={classes["btn-line"]}></div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
