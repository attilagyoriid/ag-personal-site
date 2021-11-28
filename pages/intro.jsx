/** @format */

import dynamic from "next/dynamic";

const VideoIntro = dynamic(() => import("../components/videoIntro/videoIntro"));
export default function IntroPage() {
  return (
    <>
      <VideoIntro />
    </>
  );
}
