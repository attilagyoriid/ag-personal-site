/** @format */

import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import SpecializationSection from "../components/specialization/specialization";
import styles from "../styles/Home.module.css";
import ImageLeading from "../components/imageLeading/imageLeading";
import WhoMain from "../components/whoMain/whoMain";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <SpecializationSection />
      <ImageLeading imgUrl={"/images/me-leader55.png"} />
      <WhoMain />
      <ImageLeading imgUrl={"/images/ui-ux-unsplash2.png"} />
    </Layout>
  );
}
