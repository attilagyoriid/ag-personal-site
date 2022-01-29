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
    <div className={classes["share-container"]}>
      <div className={classes["share"]}>
        <div className={classes["main-icon"]}>
          <img src="/images/icons/icons-share.png" />
        </div>
        <nav>
          <a href="#">
            <i>
              <FacebookMessengerShareButton
                url={"https://attila-gyori.com"}
                appId={"1004362527100544"}
              >
                <FacebookMessengerIcon size={80} round />
              </FacebookMessengerShareButton>
            </i>
          </a>
          <a href="#">
            <i>
              <WhatsappShareButton
                url={"https://attila-gyori.com"}
                title={"Attila Gyori Developer"}
                separator=":: "
              >
                <WhatsappIcon size={80} round />
              </WhatsappShareButton>
            </i>
          </a>
          <a href="#">
            <i>
              <EmailShareButton
                url={"https://attila-gyori.com"}
                subject={"Attila Gyori Developer"}
                body="body"
              >
                <EmailIcon size={80} round />
              </EmailShareButton>
            </i>
          </a>
          <a href="#">
            <i>
              {" "}
              <LinkedinShareButton url={"https://attila-gyori.com"}>
                <LinkedinIcon size={80} round />
              </LinkedinShareButton>
            </i>
          </a>
        </nav>
      </div>
    </div>
  );
}
