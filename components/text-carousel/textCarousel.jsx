import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import classes from "./textCarousel.module.scss";
import * as gtag from "../../services/gtag";

export default function TextCarousel({ texts }) {
  const [years, setYears] = useState();
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
            {item}
          </div>))
        }

      </Carousel>
    </div>
  );
}

