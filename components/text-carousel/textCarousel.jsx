import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import classes from "./textCarousel.module.scss";
import * as gtag from "../../services/gtag";

export default function TextCarousel({ texts }) {
  useEffect(() => {


  }, []);
  const handleClick = (e) => {
    gtag.event({
      action: "borwse_about",
      category: "BrowseDetail",
      label: "borwse_about",
    });
  };

  
  return (
    <div className={classes["carousel-container"]}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        autoPlay={false}
        emulateTouch={true}
      >
        {texts.map((item, i) => (
          <div
            className={`${classes["carousel-content"]} ${classes["noselect"]} `}
            key={i}
          >

            {parse(item)}
          </div>))
        }

      </Carousel>
    </div>
  );
}

