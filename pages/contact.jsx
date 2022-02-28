import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import ImageLeadingWithTitle from "../components/imageLeadingWithTitle/imageLeadingWithTitle";

import Layout from "../components/layout/layout";

export default function About() {
  return (
    <Layout
      title="Attila Győri | Contact"
      description="Attila Győri Developer personal site | Contact. Software Developer, Designer, Software Development Engineer in Test, Engineering Manager"
      keywords="contact, development, developer, software, software developer, software engineer, software quality, software testing, software test automation, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation, software test automation, software development engineer in test, engineering manager"
    >
      <ImageLeadingWithTitle url="/images/illustration-contact.png" />
      <Contact />
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
