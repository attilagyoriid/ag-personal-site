/** @format */
import Head from "next/head";
import { useEffect, useRef } from "react";
// import "./jquery.svg3dtagcloud.min";

export default function WordCloud() {
  const entries = [
    {
      image: "/images/icons/icons8-adobe-after-effects.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Felenope liber",
    },
    {
      image: "/images/icons/icons8-adobe-illustrator.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Officia dolor",
    },
    {
      image: "/images/icons/icons8-adobe-photoshop.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Autem insto",
    },
    {
      image: "/images/icons/icons8-autodesk-maya.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-css3.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-figma.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-github.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-html-5.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-intellij-idea.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-java.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-javascript.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-python.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-react.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-sass.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-selenium.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-spring-logo.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-typescript.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-visual-studio-code.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/icons8-zbrush.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/cucumber-plain.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/docker-plain.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/jenkins-plain.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/jira-plain.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/nextjs-original.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
    {
      image: "/images/icons/redux-original.svg",
      width: "50",
      height: "50",
      url: "http://jquery-plugins.net/",
      target: "_top",
      tooltip: "Veniam isictus",
    },
  ];

  const settings = {
    entries: entries,
    width: 520,
    height: 520,
    radius: "65%",
    radiusMin: 75,
    bgDraw: true,
    bgColor: "#111",
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 800,
    speed: 2,
    fontFamily: "Raleway, Roboto, sans-serif",
    fontSize: "15",
    fontColor: "#31435",
    fontWeight: "normal", //bold
    fontStyle: "normal", //italic
    fontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
    tooltipFontFamily: "Oswald, Arial, sans-serif",
    tooltipFontSize: "11",
    tooltipFontColor: "#fff",
    tooltipFontWeight: "normal", //bold
    tooltipFontStyle: "normal", //italic
    tooltipFontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: "left",
    tooltipDiffX: 0,
    tooltipDiffY: 10,
  };

  useEffect(() => {
    const scriptLoaded = () => {
      const cloud = SVG3DTagCloud(document.getElementById("holder"), settings);
    };
    const script = document.createElement("script");
    script.src = "/js/jquery.svg3dtagcloud.min.js";
    script.async = true;
    script.onload = () => scriptLoaded();

    document.body.appendChild(script);
  }, []);
  return <div id='holder'></div>;
}
