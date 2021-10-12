/** @format */
import TitleSection from "../titleSection/titleSection";

import classes from "./whoMain.module.scss";
export default function WhoMain() {
  return (
    <section className={classes["main-who"]}>
      <TitleSection
        title='WHO AM I'
        subText='Seasoned Software Developer with more than 17 years experience and passion for visual design and creative creation'
        className='lead--deep-dark-color'
      />
      <div className={classes["about-section"]}>
        <div className={classes["skill-sphere-section"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            molestias repellat quibusdam adipisci quas sed ullam accusantium
            aliquam numquam quidem.
          </p>
        </div>
        <div className={classes["text-section"]}>
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
            adipisci quas
          </p>
          <a href='work.html' className={classes["btn-main"]}>
            About
          </a>
        </div>
      </div>
    </section>
  );
}
