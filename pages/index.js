/** @format */
import { Element } from "react-scroll";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import SpecializationSection from "../components/specialization/specialization";
import ImageLeading from "../components/imageLeading/imageLeading";
import WhoMain from "../components/whoMain/whoMain";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Element name='specialization'>
        <SpecializationSection />
      </Element>
      <ImageLeading imgUrl={"/images/me-leader55.png"} />
      <Element name='whoami'>
        <WhoMain />
      </Element>
      <ImageLeading imgUrl={"/images/ui-ux-unsplash2.png"} />
      <Element name='projects'>
        <Projects />
      </Element>
      <ImageLeading imgUrl={"/images/leader-contact-main2.png"} />
      <Element name='contact'>
        <Contact />
      </Element>
      <Footer />
    </Layout>
  );
}
