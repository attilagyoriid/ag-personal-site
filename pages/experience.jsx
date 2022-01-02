/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
/** @format */

import Footer from "../components/footer/footer";
import ImageLeadingWithTitle from "../components/imageLeadingWithTitle/imageLeadingWithTitle";
import Layout from "../components/layout/layout";

export default function Experience() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Layout>
      <ImageLeadingWithTitle url="/images/intro-path.jpg" title="Experience" />
      <Footer />
    </Layout>
  );
}
