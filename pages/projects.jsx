/** @format */

import Footer from "../components/footer/footer";
import ImageLeadingWithTitle from "../components/imageLeadingWithTitle/imageLeadingWithTitle";
import Layout from "../components/layout/layout";
import Works from "../components/work/works";

export default function Projects() {
  return (
    <Layout>
      <ImageLeadingWithTitle url='/images/intro-projects.png' title='WORKS' />
      <Works />
      <Footer />
    </Layout>
  );
}
