/** @format */

import { Element } from "react-scroll";
import dynamic from "next/dynamic";
import LoadingSpinner from "../components/loadingSpinner/loadingSpinner";
import dataSpecDescription from "../components/specialization/dataSpecDescription.js";

const Layout = dynamic(() => import("../components/layout/layout"), {
  loading: () => <LoadingSpinner isLoading={true} />,
});
const Hero = dynamic(() => import("../components/hero/hero"), {
  loading: () => <LoadingSpinner isLoading={true} />,
});

const SpecializationSection = dynamic(
  () => import("../components/specialization/specialization"),
  {
    loading: () => <LoadingSpinner isLoading={true} />,
  }
);

const ImageLeading = dynamic(
  () => import("../components/imageLeading/imageLeading"),
  {
    loading: () => <LoadingSpinner isLoading={true} />,
  }
);

const WhoMain = dynamic(() => import("../components/whoMain/whoMain"), {
  loading: () => <LoadingSpinner isLoading={true} />,
});

const Projects = dynamic(() => import("../components/projects/projects"), {
  loading: () => <LoadingSpinner isLoading={true} />,
});

const Contact = dynamic(() => import("../components/contact/contact"), {
  loading: () => <LoadingSpinner isLoading={true} />,
});
const Footer = dynamic(() => import("../components/footer/footer"), {
  loading: () => <LoadingSpinner isLoading={true} />,
});

function Home() {
  return (
    <Layout
      title="Attila Győri | Home"
      description="Attila Győri Developer personal site | Home. Software Developer, Designer, Software Development Engineer in Test, Engineering Manager"
      keywords="Attila Győri, Attila Gyori, Győri Attila, Gyori Attila, AG, development, developer, software, software developer, software engineer, software quality, software testing, software test automation, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation, software test automation, software development engineer in test, team lead, development lead, engineering manager, portfolio, personal site"
    >
      <Element name="home">
        <Hero />
      </Element>
      <Element name="specialization">
        <SpecializationSection data={dataSpecDescription} />
      </Element>
      <Element name="whoami">
        <ImageLeading imgUrl={"/images/me-leader_main.jpg"} />

        <WhoMain />
      </Element>
      <Element name="projects">
        <ImageLeading imgUrl={"/images/ui-ux-unsplash_main.jpg"} />

        <Projects />
      </Element>
      <Element name="contact">
        <ImageLeading imgUrl={"/images/contact.jpg"} />
        <Contact />
      </Element>
      <Footer />
    </Layout>
  );
}

export default Home;

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
