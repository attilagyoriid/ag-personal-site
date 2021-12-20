/** @format */
import Head from "next/head";
import MainNavigation from "../main-navigation/main-navigaton";
import classes from "./layout.module.scss";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div className={classes["main-container"]}>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Attila Győri | SDET & Developer, Designer and Photographer",
  keywords:
    "development, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation",
  description: "Attila Győri Developer personal site",
};
