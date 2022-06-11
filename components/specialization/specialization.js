/** @format */
import Card from "../card/card";
import TitleSection from "../titleSection/titleSection";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import classes from "./specialization.module.scss";
import ParticlesBkg from "../particlesBkg/particlesBkg";
import Dots from "../dots/dots";

export default function SpecializationSection({ withThreeDotsLink, data }) {
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
          subText="Test Automation, Backend and Front-end Development along with creating digital masterpieces and UI layouts for websites and mobile applications"
        />
        <div ref={cardsRef} className={classes.specials}>
          {data.map((item, index) => (
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
        {withThreeDotsLink && <Dots url="/experience" />}
      </div>
      <ParticlesBkg
        presetName="matrix"
        elementId="specializationParticlesBkg"
      />
    </section>
  );
}

SpecializationSection.defaultProps = {
  withThreeDotsLink: true,
};
