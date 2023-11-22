import React from "react";
import {
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookShareButton,
  FacebookIcon,
} from "next-share";

export default function Share() {
  return (
    <div>
      <FacebookMessengerShareButton
        url={"https://github.com/next-share"}
        appId={""}
      >
        <FacebookMessengerIcon size={32} round />
      </FacebookMessengerShareButton>
      <FacebookShareButton
        url={"https://github.com/next-share"}
        quote={"next-share is a social share buttons for your next React apps."}
        hashtag={"#nextshare"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
}
