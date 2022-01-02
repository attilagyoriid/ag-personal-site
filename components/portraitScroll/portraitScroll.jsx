/** @format */
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import classes from "./portraitScroll.module.scss";

export default function PortraitScroll() {
  const portraitContainer = useRef(null);
  const imageScale = useRef(null);
  useEffect(() => {
    gsap.set(imageScale.current, {
      xPercent: -50,
      yPercent: -50,
      autoAlpha: 0,
    });
    gsap.to(imageScale.current, {
      scale: 10,
      autoAlpha: 1,

      scrollTrigger: {
        trigger: portraitContainer.current,
        start: "top 10%",
        pin: portraitContainer.current,
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={portraitContainer} className={classes["portrait-container"]}>
      <div ref={imageScale} className={classes["img-scale"]}>
        <Image
          width={1920}
          height={1080}
          layout="responsive"
          src={"/images/me-leader.png"}
          alt="Attila Portrait"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
