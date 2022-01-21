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
  const imgUrl = "/images/icons/";
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
            {type === "text" ? item : ""}
            {type === "img" ? (
              <div className={classes["img-container"]}>
                <img src={item} />
              </div>
            ) : (
              ""
            )}
            {type === "links" ? (
              <div className={classes["img-grid"]}>
                {item[0] && (
                  <div className={classes["img-wrapper"]}>
                    <img src={imgUrl + item[0]} />
                  </div>
                )}
                {item[1] && (
                  <div className={classes["img-wrapper"]}>
                    <img src={imgUrl + item[1]} />
                  </div>
                )}
                {item[2] && (
                  <div className={classes["img-wrapper"]}>
                    <img src={imgUrl + item[2]} />
                  </div>
                )}
                {item[3] && (
                  <div className={classes["img-wrapper"]}>
                    <img src={imgUrl + item[3]} />
                  </div>
                )}
                {item[4] && (
                  <div className={classes["img-wrapper"]}>
                    <img src={imgUrl + item[4]} />
                  </div>
                )}
                {item[5] && (
                  <div className={classes["img-wrapper"]}>
                    <img src={imgUrl + item[5]} />
                  </div>
                )}
                {item[6] && (
                  <div className={classes["img-wrapper"]}>
                    <img src={imgUrl + item[6]} />
                  </div>
                )}
                {item[7] && (
                  <div className={classes["img-wrapper"]}>
                    <img className={classes["image"]} src={imgUrl + item[7]} />
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
