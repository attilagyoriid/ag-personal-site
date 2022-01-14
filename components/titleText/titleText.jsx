import classes from "./titleText.module.scss";
export default function TitleText({
  bigText,
  bigTextBoldSubText,
  smallText,
  bkgColor,
  textColor,
}) {
  const boldSubString = (str, substr) => {
    const outputStr = str.split(substr);
    return {
      pretext: outputStr[0],
      posttext: outputStr[1],
    };
  };

  const bigTextTransformed = boldSubString(bigText, bigTextBoldSubText);
  return (
    <div
      className={classes["title-text__container"]}
      style={{ backgroundColor: bkgColor, color: textColor }}
    >
      <div className={classes["title-text--big"]}>
        {bigTextTransformed.pretext}
        <span>&nbsp;{bigTextBoldSubText}&nbsp;</span>
        {bigTextTransformed.posttext}
        <div className={classes["title-text--small"]}>{smallText}</div>
      </div>
    </div>
  );
}
