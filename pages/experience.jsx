/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
/** @format */

import Footer from "../components/footer/footer";
import ImageLeadingWithTitle from "../components/imageLeadingWithTitle/imageLeadingWithTitle";
import Layout from "../components/layout/layout";
import TimelineSchool from "../components/timeline/timelineSchool";
import TimelineWork from "../components/timeline/timelineWork";
import CardFlip from "../components/card/cardFlip";

export default function Experience() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Layout
      title="Attila Győri | Experience"
      description="Attila Győri Developer personal site | Experience. Software Developer, Designer, Software Development Engineer in Test, Engineering Manager"
      keywords="development, developer, software, software developer, software engineer, software quality, software testing, software test automation, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation, software test automation, software development engineer in test, engineering manager"
    >
      <ImageLeadingWithTitle url="/images/intro-path.jpg" title="Experience" />
      <CardFlip />
      <ImageLeadingWithTitle url="/images/intro-study.jpg" title="Studies" />
      <TimelineSchool />
      <ImageLeadingWithTitle url="/images/illustration-work.jpg" title="Work" />
      <TimelineWork />
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
