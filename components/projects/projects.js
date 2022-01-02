/** @format */

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Link from "next/link";
import CarouselSwipe from "../carousel/carouselSwipe";
import TitleSection from "../titleSection/titleSection";
import classes from "./projects.module.scss";
export default function Projects() {
  const projectDescriptionRef = useRef(null);
  const projectCarouselSectionRef = useRef(null);

  const carouselAttributes = {
    showArrows: false,
    showThumbs: false,
    swipeable: true,
    emulateTouch: true,
    showStatus: false,
    centerMode: true,
    centerSlidePercentage: 50,
    autoPlay: true,
    infiniteLoop: true,
    stopOnHover: true,
  };

  const stylesOverrideList = { maxWidth: "700px" };

  useEffect(() => {
    gsap.from(projectDescriptionRef.current, {
      scrollTrigger: projectDescriptionRef.current,
      autoAlpha: 0,
      scale: 0.5,
      duration: 1,
      stagger: 0.25,
      ease: "expo.easeInOut",
      delay: 0.4,
    });
    gsap.from(projectCarouselSectionRef.current, {
      scrollTrigger: projectCarouselSectionRef.current,
      autoAlpha: 0,
      x: 100,
      duration: 1,
      stagger: 0.25,
      ease: "expo.easeInOut",
      delay: 1.2,
    });
  }, []);

  return (
    <section className={classes["main-projects"]}>
      <TitleSection
        title="PUBLIC PROJECTS"
        subText="Seasoned Software Developer with more than 17 years experience and passion for visual design and creative creation"
        className="lead--deep-dark-color"
      />
      <div className={classes["projects-section"]}>
        <div
          ref={projectDescriptionRef}
          className={classes["description-section"]}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            molestias repellat quibusdam adipisci quas sed ullam accusantium
            aliquam numquam quidem.Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div
          ref={projectCarouselSectionRef}
          className={classes["project-carousel-section"]}
        >
          <div className={classes["project-carousel-section-content"]}>
            <CarouselSwipe
              texts={[
                "/images/projects/ch.png",
                "/images/projects/electron.png",
                "/images/projects/graphic_design.png",
                "/images/projects/java_algo.png",
                "/images/projects/python_algo.png",
                "/images/projects/selenium.png",
                "/images/projects/web_design.png",
                "/images/projects/zbrush.png",
              ]}
              type={"img"}
              carouselAttributes={carouselAttributes}
              stylesOverride={stylesOverrideList}
            />
          </div>
          <div>
            <Link href="/projects">
              <a className={`${classes["btn-dark--outline"]}`}>More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
