import Link from "next/link";
import classes from "./dots.module.scss";
export default function Dots({ url = "/" }) {
  return (
    <div className={classes["dot-container"]}>
      <Link href={url}>
        <div className={classes["dot-elastic"]}></div>
      </Link>
    </div>
  );
}
