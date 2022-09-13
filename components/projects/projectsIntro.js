/** @format */

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Link from "next/link";
import CarouselSwipe from "../carousel/carouselSwipe";
import TitleSection from "../titleSection/titleSection";
import classes from "./projectsIntro.module.scss";
import ParticlesBkg from "../particlesBkg/particlesBkg";
export default function ProjectsIntro() {
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
        subText="Selected sample of public projects I have worked on previously"
        className="lead--deep-dark-color"
      />
      <div className={classes["projects-section"]}>
        <div
          ref={projectDescriptionRef}
          className={classes["description-section"]}
        >
          <p>
            I have published a selection of my work-flow/product improvement projects on github.  
            Among these selections, you will find test automation framework code core base, 
            review process aiding solutions, and a test catalog to help test automation engineers 
            browse and reuse pre-existing implementations or organize tests into suits.  
            Additionally, you will find graphics and UI design, 3D models, logo presentation, 
            photography and photo composition.  I have also included examples of website code base 
            I implemented along with Java, Javascript, and Python algorithms. 
            You will further find examples of tech company projects I have worked on over the years.  
            My main focus is on back-end and Test Automation. But regarding the last two-three years I have been getting invloved in 
            the javascript technology realm, front-end development and UI design. 
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
