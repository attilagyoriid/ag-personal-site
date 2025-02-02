/* eslint-disable require-jsdoc */
/** @format */
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
export default function HomePage({ title, keywords, description }) {
  const router = useRouter();

  useEffect(() => {
    router.push("/intro");
  }, []);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://platform.linkedin.com/badges/js/profile.js"
          async
          defer
          type="text/javascript"
        ></script>
      </Head>
    </>
  );
}

HomePage.defaultProps = {
  title:
    "Attila Győri | SDET & Software Developer, Designer",
  keywords:
    "Attila Győri, Attila Gyori, Győri Attila, Gyori Attila, AG, development, developer, software, software developer, software engineer, software quality, software testing, software test automation, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation, software test automation, software development engineer in test, team lead, development lead, engineering manager, portfolio, personal site",
  description:
    "Attila Győri Software Developer personal site: Software Developer, Designer, Staff Software Development Engineer in Test, Development Lead",
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 10,
  };
}
