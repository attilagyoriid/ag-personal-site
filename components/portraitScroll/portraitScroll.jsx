/** @format */
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import classes from "./portraitScroll.module.scss";

export default function PortraitScroll() {
  const portraitContainer = useRef(null);
  const imageScale = useRef(null);
  const imageRef = useRef(null);
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 1024px) and (orientation: landscape)": function () {
        gsap.set(imageScale.current, {
          autoAlpha: 0,
          scale: 0,
          y: 100,
        });
        gsap.to(imageScale.current, {
          scale: 1,
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: portraitContainer.current,
            start: "top top",
            end: "bottom bottom",
            pinSpacing: true,
            pin: true,
            scrub: true,
            stagger: 0.2,
            toggleActions: "play none none none",
            markers: true,
            once: true,
          },
        });
      },
      "(max-width: 1024px)": function () {
        gsap.set(imageScale.current, {
          autoAlpha: 0,
          scale: 0,
          y: 100,
        });
        gsap.to(imageScale.current, {
          scale: 1,
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: portraitContainer.current,
            start: "top 20%",
            end: "bottom 20%",
            pinSpacing: true,
            pin: true,
            scrub: true,
            stagger: 0.2,
            toggleActions: "play none none none",
            markers: true,
            once: true,
          },
        });
      },
    });
  }, []);

  return (
    <div ref={portraitContainer} className={classes["portrait-container"]}>
      <div ref={imageScale} className={classes["img-scale"]}>
        <picture ref={imageRef}>
          <source
            media="(max-width: 700px)"
            srcSet={"/images/me-700w.png"}
            alt="Attila Gyori Portrait"
          />
          <source
            media="(min-width: 700px)"
            srcSet={"/images/me-1920w.png"}
            alt="Attila Gyori Portrait"
          />
          <img src={"/images/me.png"} alt="Image Leading" />
        </picture>
      </div>
    </div>
  );
}
