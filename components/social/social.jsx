/** @format */
import classes from "./social.module.scss";

export default function Social({ layout }) {
  const orientation =
    layout === "landscape"
      ? "social-icon-container-horizontal"
      : "social-icon-container-vertical";
  return (
    <div className={classes[orientation]}>
      <div className={classes["icon-container"]}>
        <img src='/images/social-icons/linked.svg' alt='Linked In Icon' />
      </div>
      <div className={classes["icon-container"]}>
        <img src='/images/social-icons/git.svg' alt='Linked In Icon' />
      </div>
      <div className={classes["icon-container"]}>
        <img src='/images/social-icons/yout.svg' alt='Linked In Icon' />
      </div>
      <div className={classes["icon-container"]}>
        <img src='/images/social-icons/dribble.svg' alt='Linked In Icon' />
      </div>
      <div className={classes["icon-container"]}>
        <img src='/images/social-icons/face.svg' alt='Linked In Icon' />
      </div>
      <div className={classes["icon-container"]}>
        <img src='/images/social-icons/insta.svg' alt='Linked In Icon' />
      </div>
    </div>
  );
}

Social.defaultProps = {
  layout: "portrait",
};
