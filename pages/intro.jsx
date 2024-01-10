/** @format */
import Head from "next/head";

import VideoIntro from "../components/videoIntro/videoIntro";
export default function IntroPage({ title, keywords, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VideoIntro />
    </>
  );
}

VideoIntro.defaultProps = {
  title: "Attila Győri | SDET & Developer, Designer and Photography enthusiast",
  keywords:
    "development, developer, software, software developer, software engineer, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation, software test automation, software development engineer in test, Attila Győri, AG, Attila Gyori, Gyori Attila, Győri Attila",
  description: "Attila Győri Software Developer personal site",
};
