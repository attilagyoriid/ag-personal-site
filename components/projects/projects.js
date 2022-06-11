/** @format */

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Link from "next/link";
import CarouselSwipe from "../carousel/carouselSwipe";
import TitleSection from "../titleSection/titleSection";
import classes from "./projects.module.scss";
import ParticlesBkg from "../particlesBkg/particlesBkg";
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
        subText="Selected list of projects I have worked on, over the years"
        className="lead--deep-dark-color"
      />
      <div className={classes["projects-section"]}>
        <div
          ref={projectDescriptionRef}
          className={classes["description-section"]}
        >
          <p>
            I published some of my work-flow / process improvement projects on github. Among others,
            you can find Test Automation Framework core code base, Review Process aiding solutions,
            Test Catalog to help Test Automation Engineers to browse and reuse already existing implementations or
            organize their tests into suits. But there are some graphics and ui design, 3d models, logo presentation, photography and 
            photo compositing available as well.I also published some website code base I implemented 
            and java, javascript and python algorithms.
            You can also find references to Tech Company projects I have been working on over the years.
            My main focus is on back-end and Test Automation. But regarding the last two-three years I have been getting invloved in 
            the javascript technolgy realm along with fornt-end development and UI design. 
            There are always someting new to learn, be it a process, and approach or a new technolgy in this ever evolving profession.
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
      <ParticlesBkg
        presetName="bubble"
        elementId="projectsParticlesBkg"
      />
    </section>
  );
}
