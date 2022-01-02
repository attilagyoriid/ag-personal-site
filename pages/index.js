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
      </Head>
    </>
  );
}

HomePage.defaultProps = {
  title: "Attila Győri | SDET & Developer, Designer and Photographer",
  keywords:
    "development, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation",
  description: "Attila Győri Developer personal site",
};
