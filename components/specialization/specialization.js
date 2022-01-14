/** @format */
import Card from "../card/card";
import TitleSection from "../titleSection/titleSection";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import classes from "./specialization.module.scss";
import ParticlesBkg from "../particlesBkg/particlesBkg";
import Dots from "../dots/dots";

const cardList = [
  {
    imgSrc: "/images/services_robot.svg",
    animation: { sdet: true },
    description: "Test Automation",

    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
          risus, a laoreet sit condimentum nisl quis amet nascetur. Sagittis,
          purus auctor vivamus nibh sit nisi enim. Lacus laoreet pulvinar cras
          eget magna eu pellentesque elementum porttitor. Vitae tempus viverra
          risus in ullamcorper etiam ut.`,
  },
  {
    imgSrc: "/images/services_development.svg",
    animation: { dev: true },
    description: "Development",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
          risus, a laoreet sit condimentum nisl quis amet nascetur. Sagittis,
          purus auctor vivamus nibh sit nisi enim. Lacus laoreet pulvinar cras
          eget magna eu pellentesque elementum porttitor. Vitae tempus viverra
          risus in ullamcorper etiam ut.`,
  },
  {
    imgSrc: "/images/services_creative.svg",
    animation: { creative: true },
    description: "Creative",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
          risus, a laoreet sit condimentum nisl quis amet nascetur. Sagittis,
          purus auctor vivamus nibh sit nisi enim. Lacus laoreet pulvinar cras
          eget magna eu pellentesque elementum porttitor. Vitae tempus viverra
          risus in ullamcorper etiam ut.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue.
          `,
  },
];

export default function SpecializationSection() {
  const cardsRef = useRef(null);
  const cardRef = useRef(null);
  const cardRefsList = [];
  useEffect(() => {
    console.log("cardref", cardRef.current);
    gsap.utils.toArray(cardRefsList).forEach((section, index) => {
      gsap.from(section, {
        scrollTrigger: section,
        autoAlpha: 0,
        scale: 0.5,
        duration: 0.75,
        stagger: 0.25,
        delay: index * 0.3,
      });
    });
  }, []);

  return (
    <section
      className={`${classes["specialize-section-container"]} ${classes["text-center"]}`}
    >
      <div className={classes.container}>
        <TitleSection
          title="I Specialize In"
          subText="Photography as well as creating digital masterpieces and UI/UX layouts for websites and mobile applications"
        />
        <div ref={cardsRef} className={classes.specials}>
          {cardList.map((item, index) => (
            <div
              ref={(el) => {
                cardRefsList.push(el);
              }}
              key={item.description}
              className={classes["card-wrapper"]}
            >
              <Card ref={cardRef} cardData={item} linkUrl="/experience" />
            </div>
          ))}
        </div>
        <Dots url="/experience" />
      </div>
      <ParticlesBkg
        presetName="matrix"
        elementId="specializationParticlesBkg"
      />
    </section>
  );
}
