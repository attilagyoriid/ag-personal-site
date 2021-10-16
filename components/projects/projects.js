/** @format */

import CarouselSwipe from "../carousel/carouselSwipe";
import TitleSection from "../titleSection/titleSection";
import classes from "./projects.module.scss";
export default function Projects() {
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
  return (
    <section className={classes["main-projects"]}>
      <TitleSection
        title='PUBLIC PROJECTS'
        subText='Seasoned Software Developer with more than 17 years experience and passion for visual design and creative creation'
        className='lead--deep-dark-color'
      />
      <div className={classes["projects-section"]}>
        <div className={classes["description-section"]}>
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
            adipisci quas accusantium aliquam numquam quidem.Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Officiis, molestias repellat
            quibusdam adipisci quas
          </p>
        </div>
        <div className={classes["project-carousel-section"]}>
          <div className={classes["project-carousel-section-content"]}>
            <CarouselSwipe
              texts={[
                "/images/services_robot.svg",
                "/images/services_robot.svg",
                "/images/services_robot.svg",
                "/images/services_robot.svg",
              ]}
              type={"img"}
              carouselAttributes={carouselAttributes}
              stylesOverride={stylesOverrideList}
            />
          </div>
          <div>
            <a href='work.html' className={`${classes["btn-dark--outline"]}`}>
              More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
