import classes from "./codersRank.module.scss";
export default function CodersRank() {

  return (
    <div className={classes["widget_container"]}>
      <a href="https://profile.codersrank.io/user/attilagyoriid/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cr-ss-service.azurewebsites.net/api/ScreenShot?widget=summary&username=attilagyoriid&show-header=true&--badge-bg-color=#5A7193&min-width=100&width=100&badges=8&show-avatar=true&style=--header-bg-color:%23000;--border-radius:10px"
        />
      </a>
    </div>
  );
}
