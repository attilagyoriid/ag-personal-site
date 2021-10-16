/** @format */

import TitleSection from "../titleSection/titleSection";
import classes from "./contact.module.scss";

export default function Contact() {
  return (
    <section
      className={`${classes["contact-section"]} ${classes["text-center"]}`}
    >
      <div className={classes.container}>
        <TitleSection
          title='Contact'
          subText='Photography as well as creating digital masterpieces and UI/UX layouts for websites and mobile applications'
        />
      </div>
    </section>
  );
}
