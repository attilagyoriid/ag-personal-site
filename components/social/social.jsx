/** @format */
import classes from "./social.module.scss";
import getConfig from "next/config";

export default function Social({ layout }) {
  const {
    publicRuntimeConfig: { socialUrls },
  } = getConfig();

  const orientation =
    layout === "landscape"
      ? "social-icon-container-horizontal"
      : "social-icon-container-vertical";

  return (
    <div className={classes[orientation]}>
      {layout === "landscape" ? (
        <div className={classes["icon-container"]}>
          <a
            target="_blank"
            href="mailto:gyoriattila@yahoo.com"
            rel="noopener noreferrer"
          >
            <img src="/images/social-icons/email.svg" alt="Email Icon" />
          </a>
        </div>
      ) : (
        ""
      )}
      <div className={classes["icon-container"]}>
        <a target="_blank" href={socialUrls.linkedin} rel="noopener noreferrer">
          <img src="/images/social-icons/linked.svg" alt="Linked In Icon" />
        </a>
      </div>
      <div className={classes["icon-container"]}>
        <a target="_blank" href={socialUrls.github} rel="noopener noreferrer">
          <img src="/images/social-icons/git.svg" alt="Git In Icon" />
        </a>
      </div>
      <div className={classes["icon-container"]}>
        <a target="_blank" href={socialUrls.youtube} rel="noopener noreferrer">
          <img src="/images/social-icons/yout.svg" alt="Youtube In Icon" />
        </a>
      </div>
      <div className={classes["icon-container"]}>
        <a target="_blank" href={socialUrls.dribbble} rel="noopener noreferrer">
          <img src="/images/social-icons/dribble.svg" alt="Dribble In Icon" />
        </a>
      </div>
      <div className={classes["icon-container"]}>
        <a target="_blank" href={socialUrls.facebook} rel="noopener noreferrer">
          <img src="/images/social-icons/face.svg" alt="Facebook In Icon" />
        </a>
      </div>
      <div className={classes["icon-container"]}>
        <a
          target="_blank"
          href={socialUrls.behance}
          rel="noopener noreferrer"
        >
          <img src="/images/social-icons/behance.svg" alt="Behance In Icon" />
        </a>
      </div>
    </div>
  );
}

Social.defaultProps = {
  layout: "portrait",
};
