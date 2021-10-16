/** @format */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./carouselSwipe.module.scss";
export default function CarouselSwipe({
  texts,
  type,
  carouselAttributes,
  stylesOverride = {},
}) {
  return (
    <div
      className={classes["carousel-container"]}
      style={{ ...stylesOverride }}
    >
      <Carousel {...carouselAttributes}>
        {texts.map((item, i) => (
          <div
            className={`${classes["carousel-content"]} ${classes["noselect"]} `}
            key={i}
          >
            {type === "text" ? (
              item
            ) : (
              <div className={classes["img-container"]}>
                <img src={item} />
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
