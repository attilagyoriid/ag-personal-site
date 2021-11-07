/** @format */
import TitleSection from "../titleSection/titleSection";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import classes from "./whoMain.module.scss";
import DownloadButton from "../downloadButton/downloadButton";

export default function WhoMain() {
  const bkgImgRef = useRef(null);

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
      delay: 0.5,
    });
  }, []);
  return (
    <section className={classes["main-who"]}>
      <img
        ref={bkgImgRef}
        className={`${classes["img-bkg"]}`}
        src={"/images/background_logo_yellow.svg"}
        alt='AG site logo image'
      />
      <TitleSection
        title='WHO AM I'
        subText='Seasoned Software Developer with more than 17 years experience and passion for visual design and creative creation'
        className='lead--deep-dark-color'
      />
      <div className={classes["about-section"]}>
        <div className={classes["skill-sphere-section"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            molestias repellat quibusdam adipisci quas sed ullam accusantium
            aliquam numquam quidem.
          </p>
          <DownloadButton />
        </div>
        <div className={classes["text-section"]}>
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
          <a href='work.html' className={classes["btn-main"]}>
            About
          </a>
        </div>
      </div>
    </section>
  );
}
