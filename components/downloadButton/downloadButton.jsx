/** @format */
import classes from "./downloadButton.module.scss";
function DownloadButton() {
  return (
    <div className={classes["btn-container"]}>
      <a
        href='/doc/Attila_Gyori_2021.pdf'
        target='_blank'
        className={classes.dnbtn}
      ></a>
    </div>
  );
}

export default DownloadButton;
