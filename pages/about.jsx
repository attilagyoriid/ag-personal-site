/** @format */

import Footer from "../components/footer/footer";
import ImageLeadingWithTitle from "../components/imageLeadingWithTitle/imageLeadingWithTitle";
import Layout from "../components/layout/layout";
import PortraitScroll from "../components/portraitScroll/portraitScroll";
import Skillbars from "../components/skillBars/skillbars";
import Works from "../components/work/works";

export default function About() {
  return (
    <Layout
      title="Attila Győri | About"
      keywords="development, developer, software, software developer, software engineer, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation, software test automation, software development engineer in test, Attila Győri, AG, Attila Gyori, Gyori Attila, Győri Attila, about, story"
      description="Attila Győri Sfotware Developer personal site | About"
    >
      <ImageLeadingWithTitle url="/images/intro-whoami9.png" title="Who Am I" />
      <Works />
      <PortraitScroll />
      <Skillbars />
      <Footer />
    </Layout>
  );
}
