/** @format */

import Footer from "../components/footer/footer";
import ImageLeadingWithTitle from "../components/imageLeadingWithTitle/imageLeadingWithTitle";
import Layout from "../components/layout/layout";
import PortraitScroll from "../components/portraitScroll/portraitScroll";
import Skillbars from "../components/skillBars/skillbars";
import Works from "../components/work/works";

export default function About() {
  return (
    <Layout>
      <ImageLeadingWithTitle url="/images/intro-whoami9.png" title="Who Am I" />
      <Works />
      <PortraitScroll />
      <Skillbars />
      <Footer />
    </Layout>
  );
}
