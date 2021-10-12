/** @format */
import classes from "./titleSection.module.scss";
export default function TitleSection({
  title,
  subText,
  className = "lead--main-color",
}) {
  return (
    <div className={classes["title-container"]}>
      <h2 className={`${classes["section-title"]}`}>{title}</h2>
      <div className={classes["bottom-line"]}></div>
      <p className={`${classes[className]}`}>{subText}</p>
    </div>
  );
}
