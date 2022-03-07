/** @format */
import Head from "next/head";
import MainNavigation from "../main-navigation/main-navigaton";
import classes from "./layout.module.scss";


export default function Layout({
  title,
  keywords,
  description,
  children,
  ogTitle,
  ogType,
  ogUlr,
  ogImage,
  ogDescription,
}) {
  return (
    <div className={classes["main-container"]}>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={ogUlr} />
        <meta
          property="og:image"
          content="https://attila-gyori.com/images/ag-social_opt.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://attila-gyori.com/images/ag-social_opt.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:alt"
          content="Attila Gyori Software Developer Site"
        />
        <meta property="og:description" content={ogDescription} />

        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Attila Győri | SDET & Software Developer, Designer and Photographer",
  keywords:
    "development, developer, software, software developer, software engineer, coding, programming, design, graphic, illustration, animation, qa, sdet, test automation, software test automation, software development engineer in test, Attila Győri, AG, Attila Gyori, Gyori Attila, Győri Attila",
  description: "Attila Győri Developer personal site",
  ogTitle:
    "Attila Győri | SDET & Software Developer, Designer and Photographer",
  ogType: "website",
  ogUlr: "https://attila-gyori.com/home",
  ogImage: "",
  ogDescription:
    "Attila Győri Software Developer personal site: Software Developer, Designer, Software Development Engineer in Test, Engineering Manager",
};


