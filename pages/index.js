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
      <Element name='home'>
        <Hero />
      </Element>
      <Element name='specialization'>
        <SpecializationSection />
      </Element>
      <Element name='whoami'>
        <ImageLeading imgUrl={"/images/me-leader55.png"} />

        <WhoMain />
      </Element>
      <Element name='projects'>
        <ImageLeading imgUrl={"/images/ui-ux-unsplash2.png"} />

        <Projects />
      </Element>
      <Element name='contact'>
        <ImageLeading imgUrl={"/images/leader-contact-main2.png"} />

        <Contact />
      </Element>
      <Footer />
    </Layout>
  );
}
