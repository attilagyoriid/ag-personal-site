/** @format */

import TitleOverlay from "../titleOverlay/titleOverlay";
import classes from "./contact.module.scss";

export default function Contact() {
  return (
    <section
      className={`${classes["contact-section"]} ${classes["text-center"]}`}
    >
      <div className={classes.container}>
        <TitleOverlay title='LET’S WORK TOGETHER' overlayText='CONTACT' />
      </div>
    </section>
  );
}
