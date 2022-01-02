/** @format */

import classes from "./scrollButton.module.scss";
export default function ScrollButton() {
  return (
    <div className={classes["scrollButton-container"]}>
      <section id={classes["button-section"]} className={classes.button}>
        <a href="#thanks">
          <span></span>
        </a>
      </section>
    </div>
  );
}
