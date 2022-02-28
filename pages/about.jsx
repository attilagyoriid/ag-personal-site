/** @format */

import Footer from "../components/footer/footer";
import FunFacts from "../components/funFacts/funFacts";
import ImageLeadingWithTitle from "../components/imageLeadingWithTitle/imageLeadingWithTitle";
import Introduction from "../components/introduction/introduction";
import Layout from "../components/layout/layout";
import MoreAbout from "../components/moreAbout/moreAbout";
import PortraitScroll from "../components/portraitScroll/portraitScroll";
import Skills from "../components/skills/skills";
import TitleText from "../components/titleText/titleText";

export default function About() {
  return (
    <Layout
      title="Attila Győri | About"
      description="Attila Győri Developer personal site | About. Software Developer, Designer, Software Development Engineer in Test, Engineering Manager"
      keywords="about, development, developer, software, software developer, software engineer, software quality, software testing, software test automation, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation, software test automation, software development engineer in test, engineering manager"
    >
      <ImageLeadingWithTitle url="/images/intro-whoami.jpg" title="Who Am I" />
      <Introduction />
      <PortraitScroll />

      <TitleText
        bigText="a few facts about me"
        bigTextBoldSubText="facts"
        smallText=""
        textColor="#e9ce84"
      />
      <FunFacts />
      <MoreAbout />

      <Skills />
      <Footer />
    </Layout>
  );
}
export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
