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
              url={"https://attila-gyori.com"}
              appId={""}
            >
              <FacebookMessengerIcon size={22} round />
            </FacebookMessengerShareButton>
          </div>

          <div className={classes["icon"]}>
            <WhatsappShareButton
              url={"https://attila-gyori.com"}
              title={"Attila Gyori Developer"}
              separator=":: "
            >
              <WhatsappIcon size={22} round />
            </WhatsappShareButton>
          </div>
          <div className={classes["icon"]}>
            <EmailShareButton
              url={"https://attila-gyori.com"}
              subject={"Attila Gyori Developer"}
              body="body"
            >
              <EmailIcon size={22} round />
            </EmailShareButton>
          </div>
          <div className={classes["icon"]}>
            <LinkedinShareButton url={"https://attila-gyori.com"}>
              <LinkedinIcon size={22} round />
            </LinkedinShareButton>
          </div>
        </div>
      </div>
    </div>
  );
}
