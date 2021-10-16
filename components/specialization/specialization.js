/** @format */
import Card from "../card/card";
import TitleSection from "../titleSection/titleSection";

import classes from "./specialization.module.scss";

const cardList = [
  {
    imgSrc: "/images/services_robot.svg",
    description: "Test Automation",

    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
          risus, a laoreet sit condimentum nisl quis amet nascetur. Sagittis,
          purus auctor vivamus nibh sit nisi enim. Lacus laoreet pulvinar cras
          eget magna eu pellentesque elementum porttitor. Vitae tempus viverra
          risus in ullamcorper etiam ut.`,
  },
  {
    imgSrc: "/images/services_development.svg",
    description: "Development",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
          risus, a laoreet sit condimentum nisl quis amet nascetur. Sagittis,
          purus auctor vivamus nibh sit nisi enim. Lacus laoreet pulvinar cras
          eget magna eu pellentesque elementum porttitor. Vitae tempus viverra
          risus in ullamcorper etiam ut.`,
  },
  {
    imgSrc: "/images/services_creative.svg",
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
  return (
    <section
      className={`${classes["specialize-section-container"]} ${classes["text-center"]}`}
    >
      <div className={classes.container}>
        <TitleSection
          title='I Specialize In'
          subText='Photography as well as creating digital masterpieces and UI/UX layouts for websites and mobile applications'
        />
        <div className={classes.specials}>
          {cardList.map((item, index) => (
            <Card key={item.description} cardData={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
