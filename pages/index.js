/** @format */

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
      <SpecializationSection />
      <ImageLeading imgUrl={"/images/me-leader55.png"} />
      <WhoMain />
      <ImageLeading imgUrl={"/images/ui-ux-unsplash2.png"} />
      <Projects />
      <ImageLeading imgUrl={"/images/leader-contact-main2.png"} />
      <Contact />
      <Footer />
    </Layout>
  );
}
