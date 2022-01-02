/** @format */
// import dynamic from "next/dynamic";
import Head from "next/head";
import { Element } from "react-scroll";
import { useEffect, useState } from "react";
// import Hero from "../components/hero/hero";
// import Layout from "../components/layout/layout";
import ImageLeading from "../components/imageLeading/imageLeading";
import WhoMain from "../components/whoMain/whoMain";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
// import Hero from "../components/hero/hero";
import dynamic from "next/dynamic";
import LoadingSpinner from "../components/loadingSpinner/loadingSpinner";

// import SpecializationSection from "../components/specialization/specialization";
// Loading StickerForm component, showing spinner while fetching the component
// Use it like you're use to <StickerForm />
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

// const WhoMain = dynamic(() => import("../components/whoMain/whoMain"), {
//   loading: () => <Loading />,
// });
// const ImageLeading = dynamic(() =>
//   import("../components/imageLeading/imageLeading")
// );

// const Hero2 = dynamic(() => import("../components/hero/hero"), {
//   loading: () => <p>loading...</p>,
// });

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
      <Element name="contact">
        <ImageLeading imgUrl={"/images/leader-contact-main2.png"} />

        <Contact />
      </Element>
      <Footer />
    </Layout>
  );
}

export default Home;
