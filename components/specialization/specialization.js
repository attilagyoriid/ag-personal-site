/** @format */
import Card from "../card/card";
import classes from "./specialization.module.scss";

export default function SpecializationSection() {
  return (
    <section
      className={`${classes["specialize-section-a"]} ${classes["text-center"]} ${classes["py-2"]}`}
    >
      <div className={classes.container}>
        <h2 className={`${classes["section-title"]}`}>I Specialize In</h2>
        <div className={classes["bottom-line"]}></div>
        <p className={`${classes["lead--main-color"]}`}>
          Photography as well as creating digital masterpieces and UI/UX layouts
          for websites and mobile applications
        </p>
        <div className={classes.specials}>
          <div>
            <i className={`fas fa-file-alt fa-2x`}></i>
            <h3>Concepting</h3>

            <Card />
          </div>
          <div>
            <i className='fas fa-desktop fa-2x'></i>
            <h3>UI/UX</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              molestias repellat quibusdam adipisci quas sed ullam accusantium
              aliquam numquam quidem.
            </p>
          </div>
          <div>
            <i className='fas fa-object-ungroup fa-2x'></i>
            <h3>Visual Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              molestias repellat quibusdam adipisci quas sed ullam accusantium
              aliquam numquam quidem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
