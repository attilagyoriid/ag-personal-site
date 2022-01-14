/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
/** @format */

import Footer from "../components/footer/footer";
import ImageLeadingWithTitle from "../components/imageLeadingWithTitle/imageLeadingWithTitle";
import Layout from "../components/layout/layout";
import SpecializationSection from "../components/specialization/specialization";
import TimelineSchool from "../components/timeline/timelineSchool";
import TimelineWork from "../components/timeline/timelineWork";

export default function Experience() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Layout
      title="Attila Győri | Experience"
      description="Attila Győri Developer personal site | Experience"
    >
      <ImageLeadingWithTitle url="/images/intro-path" title="Experience" />
      <SpecializationSection withoutThreeDotsLink={false} />
      <ImageLeadingWithTitle url="/images/intro-study" title="Studies" />
      <TimelineSchool />
      <ImageLeadingWithTitle url="/images/career_final_2" title="Work" />
      <TimelineWork />
      <Footer />
    </Layout>
  );
}
