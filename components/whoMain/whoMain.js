/** @format */
import TitleSection from "../titleSection/titleSection";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import classes from "./whoMain.module.scss";
import DownloadButton from "../downloadButton/downloadButton";
import WordCloud from "../wordCloud/wordCloud";
import Link from "next/link";

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
      scale: 1.2,
      duration: 1,
      ease: "expo.easeInOut",
      delay: 0.3,
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
        subText="Seasoned Software Developer with more than 17 years experience and passion for visual design and creative creation"
        className="lead--deep-dark-color"
      />
      <div className={classes["about-section"]}>
        <div ref={sphereSectionRef} className={classes["skill-sphere-section"]}>
          <WordCloud />
          <DownloadButton />
        </div>

        <div ref={textSectionRef} className={classes["text-section"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            molestias repellat quibusdam adipisci quas sed ullam accusantium
            aliquam numquam quidem.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Officiis, molestias repellat quibusdam adipisci
            quas sed ullam accusantium aliquam numquam quidem.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Officiis, molestias repellat
            quibusdam adipisci quas sed ullam accusantium aliquam numquam
            quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Officiis, molestias repellat quibusdam adipisci quas sed ullam
            accusantium aliquam numquam quidem.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officiis, molestias repellat quibusdam
            adipisci quas
          </p>
          <Link href="/about">
            <a className={classes["btn-main"]}>About</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
