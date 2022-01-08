/** @format */


import { Element } from "react-scroll";
import dynamic from "next/dynamic";
import LoadingSpinner from "../components/loadingSpinner/loadingSpinner";

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
    <Layout>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="specialization">
        <SpecializationSection />
      </Element>
      <Element name="whoami">
        <ImageLeading imgUrl={"/images/me-leader_main.png"} />

        <WhoMain />
      </Element>
      <Element name="projects">
        <ImageLeading imgUrl={"/images/ui-ux-unsplash_main.png"} />

        <Projects />
      </Element>

      <Footer />
    </Layout>
  );
}

export default Home;
