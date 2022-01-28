import React from "react";
import classes from "./shareButton.module.scss";

import {
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
export default function ShareButton() {
  return (
    <div className={classes["share-button__container"]}>
      <div className={classes["btn_wrap"]}>
        <span>share</span>
        <div className={classes["container"]}>
          <div className={classes["icon"]}>
            <FacebookMessengerShareButton
              url={"https://github.com/next-share"}
              appId={""}
            >
              <FacebookMessengerIcon size={22} round />
            </FacebookMessengerShareButton>
          </div>

          <div className={classes["icon"]}>
            <WhatsappShareButton
              url={"https://github.com/next-share"}
              title={
                "next-share is a social share buttons for your next React apps."
              }
              separator=":: "
            >
              <WhatsappIcon size={22} round />
            </WhatsappShareButton>
          </div>
          <div className={classes["icon"]}>
            <EmailShareButton
              url={"https://github.com/next-share"}
              subject={"Next Share"}
              body="body"
            >
              <EmailIcon size={22} round />
            </EmailShareButton>
          </div>
          <div className={classes["icon"]}>
            <LinkedinShareButton url={"https://github.com/next-share"}>
              <LinkedinIcon size={22} round />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </div>
  );
}
