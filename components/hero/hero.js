/** @format */
import Image from "next/image";
import classes from "./hero.module.scss";
import Typed from "typed.js";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollButton from "../scrollButton/scrollButton";

export default function Hero({ posts }) {
  gsap.registerPlugin(ScrollTrigger);
  // if (typeof window !== "undefined") {
  //   gsap.registerPlugin(ScrollTrigger);
  // }

  const typedTextColors = ["#EBC250", "#FFFFFF", "#2283bb"];
  const el = useRef(null);

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
    // ScrollTrigger.refresh();
    ScrollTrigger.matchMedia({
      // desktop
      "(min-width: 1024px) and (orientation: landscape)": function () {
        gsap.utils.toArray(comparisonSectionRef.current).forEach((section) => {
          // ScrollTrigger.create({
          //   trigger: section,
          //   markers: true,
          //   start: "center center",
          //   // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
          //   end: () => "+=" + section.offsetWidth,
          //   scrub: true,
          //   pin: true,
          //   anticipatePin: 1,
          // });
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
              end: () => "+=" + section.offsetWidth,
              scrub: true,
              pin: containerRef.current,
              anticipatePin: 1,
            },
            defaults: { ease: "none" },
          });
          // animate the container one way...
          tl.fromTo(
            afterImageRef.current,
            { xPercent: 100, x: 0 },
            { xPercent: 0 }
          )
            // ...and the image the opposite way (at the same time)
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
            // ...and the image the opposite way (at the same time)
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

    // gsap.to(heroContentRef.current, {
    //   y: 100,
    //   duration: 2,
    //   ease: "bounce",
    //   opacity: 1,
    //   delay: 8,
    //   scrollTrigger: {
    //     trigger: heroContentRef.current,
    //     markers: true,
    //   },
    // });

    const typed = new Typed(el.current, {
      strings: ["SDET", "Developer", "Visual Creative"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      preStringTyped: function (pos, self) {
        el.current.style.color =
          typedTextColors[Math.floor(Math.random() * typedTextColors.length)];
      },
    });

    // gsap starts
    // gsap.utils.toArray(comparisonSectionRef).forEach((section) => {
    //   let tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: section,
    //       start: "center center",
    //       // makes the height of the scrolling (while pinning) match the width, thus the speed remains constant (vertical/horizontal)
    //       end: () => "+=" + section.offsetWidth,
    //       scrub: true,
    //       pin: true,
    //       anticipatePin: 1,
    //     },
    //     defaults: { ease: "none" },
    //   });
    //   // animate the container one way...
    //   tl.fromTo(afterImageRef, { xPercent: 100, x: 0 }, { xPercent: 0 })
    //     // ...and the image the opposite way (at the same time)
    //     .fromTo(afterImageImgRef, { xPercent: -100, x: 0 }, { xPercent: 0 }, 0)
    //     .fromTo(afterImage2Ref, { xPercent: 100, x: 0 }, { xPercent: 0 })
    //     // ...and the image the opposite way (at the same time)
    //     .fromTo(
    //       afterImage2ImgRef,
    //       { xPercent: -100, x: 0 },
    //       { xPercent: 0 },
    //       0
    //     );
    // });
    // gsap end

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
              className={`${classes["img-gradient"]}`}
              src={"/images/me_code_reflection_overlay.png"}
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
              src={"/images/me_sketch_24_opt_blue_.png"}
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
              src={"/images/me_code_reflection_overlay.png"}
            />
          </div>
        </section>
        <div
          ref={heroContentRef}
          className={`${classes.content} ${classes["px-8"]}`}
        >
          <h1 className={`${classes["py-2"]}`}>
            i am <span>attila</span> the&nbsp;
            <span ref={el}></span>
          </h1>
          <div className={classes.lead}>
            <div>I specialize in software test automation,</div>
            <div>software development and creative design</div>
            <div>{posts}</div>
          </div>
          <div className={classes["button-group"]}>
            <a href="work.html" className={classes["btn-light"]}>
              About
            </a>
            <a href="work.html" className={classes["btn-main"]}>
              Contact
            </a>
          </div>
        </div>
        <ScrollButton />
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
