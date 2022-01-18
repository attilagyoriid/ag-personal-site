import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import ImageLeadingWithTitle from "../components/imageLeadingWithTitle/imageLeadingWithTitle";

import Layout from "../components/layout/layout";

export default function About() {
  return (
    <Layout
      title="Attila Győri | About"
      keywords="development, contact, email, developer, software, software developer, software engineer, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation, software test automation, software development engineer in test, Attila Győri, AG, Attila Gyori, Gyori Attila, Győri Attila, about, story"
      description="Attila Győri Software Developer personal site | Contact"
    >
      <ImageLeadingWithTitle url="/images/intro-whoami" title="CONTACT" />
      <Contact />
      <Footer />
    </Layout>
  );
}
