/** @format */
import classes from "./downloadButton.module.scss";
import * as gtag from "../../services/gtag";
function DownloadButton() {
  const handleClick = (e) => {
    gtag.event({
      action: "download_cv",
      category: "Download",
      label: "download_cv",
    });
  };
  return (
    <div className={classes["btn-container"]}>
      <a
        onClick={handleClick}
        href="/doc/Attila_Gyori_2021.pdf"
        target="_blank"
        className={classes.dnbtn}
      ></a>
    </div>
  );
}

export default DownloadButton;
