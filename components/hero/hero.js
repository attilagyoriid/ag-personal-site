/** @format */
import Image from "next/image";
import classes from "./hero.module.scss";
import Typed from "typed.js";
import { useEffect, useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollButton from "../scrollButton/scrollButton";

export default function Hero({ posts }) {
  gsap.registerPlugin(ScrollTrigger);

  const typedTextColors = ["#EBC250", "#FFFFFF", "#2283bb"];
  const typeEl = useRef(null);

  const comparisonSectionRef = useRef(null);
  const afterImageRef = useRef(null);
  const afterImageImgRef = useRef(null);
  const afterImage2Ref = useRef(null);
  const afterImage2ImgRef = useRef(null);
  const overlayH1Ref = useRef(null);
  const heroContentRef = useRef(null);
  const containerRef = useRef(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1024px) and (orientation: landscape)": function () {
        gsap.utils.toArray(comparisonSectionRef.current).forEach((section) => {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",

              end: () => "+=" + section.offsetWidth,
              scrub: true,
              pin: containerRef.current,
              anticipatePin: 1,
            },
            defaults: { ease: "none" },
          });

          tl.fromTo(
            afterImageRef.current,
            { xPercent: 100, x: 0 },
            { xPercent: 0 }
          )

            .fromTo(
              afterImageImgRef.current,
              { xPercent: -100, x: 0 },
              { xPercent: 0 },
              0
            )
            .fromTo(
              afterImage2Ref.current,
              { xPercent: 100, x: 0 },
              { xPercent: 0 }
            )

            .fromTo(
              afterImage2ImgRef.current,
              { xPercent: -100, x: 0 },
              { xPercent: 0 },
              0
            );
        });
      },
    });
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    gsap.to(overlayH1Ref.current, {
      duration: 4,
      delay: 2,
      opacity: 0,
      y: -80,
      ease: "expo.easeInOut",
    });

    gsap.from(heroContentRef.current, {
      duration: 1,
      delay: 3,
      opacity: 0,
      y: 140,
      ease: "expo.easeInOut",
    });

    const typed = new Typed(typeEl.current, {
      strings: ["SDET", "Developer", "Creative"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      preStringTyped: function (pos, self) {
        typeEl.current.style.color =
          typedTextColors[Math.floor(Math.random() * typedTextColors.length)];
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={classes["home-container"]} ref={containerRef}>
      <header className={classes.header_home}>
        <section
          ref={comparisonSectionRef}
          className={classes.comparisonSection}
        >
          <div
            className={`${classes.comparisonImage} ${classes["beforeImage"]}`}
          >
            <img
              src={"/images/me_code_reflection_overlay.jpg"}
              alt="AG site hero image"
            />
          </div>
          <div
            ref={afterImageRef}
            className={`${classes.comparisonImage} ${classes["afterImage"]}`}
          >
            <img
              ref={afterImageImgRef}
              className={`${classes["img-gradient"]}`}
              alt="AG site hero image"
              src={"/images/me_sketch_24_opt_blue_.jpg"}
            />
          </div>
          <div
            ref={afterImage2Ref}
            className={`${classes.comparisonImage} ${classes["afterImage-2"]}`}
          >
            <img
              ref={afterImage2ImgRef}
              className={`${classes["img-gradient"]}`}
              alt="AG site hero image"
              src={"/images/me_code_reflection_overlay.jpg"}
            />
          </div>
        </section>
        <div ref={heroContentRef} className={`${classes.content}`}>
          <h1 className={classes["typed-text__container"]}>
            <span className={classes["typed-text__leader"]}>
              i am attila the&nbsp;
            </span>

            <span
              className={classes["typed-text__typewright"]}
              ref={typeEl}
            ></span>
          </h1>
          <div className={classes.lead}>
            <div>I specialize in software test automation,</div>
            <div>software development and creative design</div>
            <div>{posts}</div>
          </div>
          <div className={classes["button-group"]}>
            <div className={classes["btn-light__container"]}>
              <Link
                to="whoami"
                spy={true}
                smooth={true}
                duration={1500}
                activeClass="active"
              >
                <a className={classes["btn-light"]}>About</a>
              </Link>
            </div>
            <div className={classes["btn-main__container"]}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={1500}
                activeClass="active"
              >
                <a className={classes["btn-main"]}>Contact</a>
              </Link>
            </div>
          </div>
        </div>
        <li>
          <Link
            to="whoami"
            spy={true}
            smooth={true}
            duration={1500}
            activeClass="active"
          >
            <ScrollButton />
          </Link>
        </li>
      </header>
    </div>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: "getPosts().slice(0, 6)",
    },
    revalidate: 1,
  };
}
