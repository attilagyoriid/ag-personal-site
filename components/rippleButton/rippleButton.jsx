import classes from "./rippleButton.module.scss";
export default function RippleButton() {
  return (
    <div className={classes["button__wrap"]}>
      <div className={classes["button"]}></div>
    </div>
  );
}
