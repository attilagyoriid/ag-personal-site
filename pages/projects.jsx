/** @format */

import Footer from "../components/footer/footer";
import ImageLeadingWithTitle from "../components/imageLeadingWithTitle/imageLeadingWithTitle";
import Layout from "../components/layout/layout";
import Works from "../components/work/works";

export default function Projects() {
  return (
    <Layout
      title="Attila Győri | Projects"
      keywords="development, developer, software, software developer, software engineer, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation, software test automation, software development engineer in test, Attila Győri, AG, Attila Gyori, Gyori Attila, Győri Attila, work, project, projects"
      description="Attila Győri Software Developer personal site | Projects"
    >
      <ImageLeadingWithTitle url="/images/intro-projects" title="WORKS" />
      <Works />
      <Footer />
    </Layout>
  );

}
