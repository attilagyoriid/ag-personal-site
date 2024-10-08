/** @format */
import Card from "../card/card";
import TitleSection from "../titleSection/titleSection";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import classes from "./specialization.module.scss";
import ParticlesBkg from "../particlesBkg/particlesBkg";
import Dots from "../dots/dots";

export default function SpecializationSection({ withThreeDotsLink, data }) {
  const cardsRef = useRef(null);
  const cardRef = useRef(null);
  const cardRefsList = [];
  useEffect(() => {
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
          subText="Test automation, and back-end/front-end development with the goal of creating digital masterpieces and UI layouts for websites and digit applications"
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
        <Link href="/experience">
          <a className={`${classes["btn-main"]}`}>More</a>
        </Link>
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
