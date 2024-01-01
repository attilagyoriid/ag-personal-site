/** @format */
import TitleSection from "../titleSection/titleSection";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import classes from "./whoMain.module.scss";
import WordCloud from "../wordCloud/wordCloud";
import Link from "next/link";
import * as gtag from "../../services/gtag";

export default function WhoMain() {
  const bkgImgRef = useRef(null);
  const textSectionRef = useRef(null);
  const sphereSectionRef = useRef(null);

  useEffect(() => {
    gsap.from(bkgImgRef.current, {
      scrollTrigger: {
        trigger: bkgImgRef.current,
        start: "top 50%",
      },
      autoAlpha: 0,
      duration: 3,
      ease: "expo.easeInOut",
      delay: 1,
    });

    gsap.from(textSectionRef.current, {
      scrollTrigger: textSectionRef.current,
      autoAlpha: 0,
      scale: 0.5,
      duration: 2,
      ease: "expo.easeInOut",
      delay: 0.8,
    });
    gsap.from(sphereSectionRef.current, {
      scrollTrigger: sphereSectionRef.current,
      autoAlpha: 0,
      x: -500,
      duration: 2,
      stagger: 0.25,
      ease: "expo.easeInOut",
      delay: 1,
    });
  }, []);

  const handleClick = (e) => {
    gtag.event({
      action: "download_cv",
      category: "Download",
      label: "download_cv",
    });
  };
  return (
    <section className={classes["main-who"]}>
      <img
        ref={bkgImgRef}
        className={`${classes["img-bkg"]}`}
        src={"/images/background_logo_yellow.svg"}
        alt="AG site logo image"
      />
      <TitleSection
        title="WHO AM I"
        subText="Seasoned Software Developer with more than 19 years experience and passion for visual design and creative creation"
        className="lead--deep-dark-color"
      />
      <div className={classes["about-section"]}>
        <div ref={sphereSectionRef} className={classes["skill-sphere-section"]}>
          <WordCloud />
          <div
            className={`${classes["btn-dark--outline"]} ${classes["flex-center"]}`}
          >
            <a
              onClick={handleClick}
              href="/doc/Attila_Gyori_2023_12.pdf"
              target="_blank"
              className={classes.dnbtn}
            >
              Download CV
            </a>
          </div>
        </div>

        <div ref={textSectionRef} className={classes["text-section"]}>
          <p>
            Not a Yet Another Average Software Engineer. I'm passionate about
            bringing both the technical and visual aspects of digital products
            to life. I’ve always been someone who has both a creative and a
            logical side. I realized it would be the perfect fit. I could use my
            creative side to design and my logical side to code. I am a Software
            Test Automation Framework Developer and a Full-stack Engineer with
            over 19 years of Information Technology related experience.
            Sometimes I am also get involded in activites such as digital
            multimedia & ui design, graphic craftsmanship, and team management.
            I maintain a passion for technology and helping others get the most
            out of technology by using the appropriate tools, techniques, and
            strategies to ensure clients satisfaction. Regarding the last 5
            years I am functioning as a Development Team Lead as well.
          </p>
          <Link href="/about">
            <a className={`${classes["btn-main"]} ${classes["btn-pulse"]}`}>
              More
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
