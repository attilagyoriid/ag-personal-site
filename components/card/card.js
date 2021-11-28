/** @format */
import { Fragment } from "react";
import Lottie from "react-lottie-player";
import CarouselSwipe from "../carousel/carouselSwipe";
import classes from "./card.module.scss";
import service_creative_animation from "./service_creative_animation.json";
import service_dev_animation from "./service_dev_animation.json";
import service_robot_animation from "./service_robot_animation.json";

export default function Card(props) {
  const texts = [
    `1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Nostrum odio sapiente nobis, incidunt libero, blanditiis similique,
    laudantium placeat eum quaerat hic id! Sed eligendi corporis consequatur, quia non nisi? Quisquam.`,
    `2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Nostrum odio sapiente nobis, incidunt libero, blanditiis similique,
    laudantium placeat eum quaerat hic id! Sed eligendi corporis consequatur, quia non nisi? Quisquam. Nostrum odio sapiente nobis, incidunt libero, blanditiis similique,`,
    `3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Nostrum odio sapiente nobis, incidunt libero, blanditiis similique,
    laudantium placeat eum quaerat hic id! Sed eligendi corporis consequatur, quia non nisi? Quisquam.
    Nostrum odio sapiente nobis, incidunt libero, blanditiis similique,
    laudantium placeat eum quaerat hic id! Sed eligendi corporis consequatur, quia non nisi? 3
    laudantium placeat eum quaerat hic id! Sed eligendi corporis consequatur, quia non nisi? 3`,
  ];

  const type = `text`;

  const carouselAttributes = {
    showArrows: false,
    showThumbs: false,
    swipeable: true,
    emulateTouch: true,
    showStatus: false,
    autoPlay: false,
  };

  return (
    <Fragment>
      <article className={`${classes["content-box"]}`}>
        <div className={classes.inner}>
          {props.cardData.animation.dev && (
            <Lottie
              animationData={service_dev_animation}
              loop
              play
              style={{ height: 200 }}
            />
          )}
          {props.cardData.animation.sdet && (
            <Lottie
              loop
              animationData={service_robot_animation}
              play
              style={{ height: 200 }}
            />
          )}

          {props.cardData.animation.creative && (
            <Lottie
              loop
              animationData={service_creative_animation}
              play
              style={{ height: 200 }}
            />
          )}

          <h1 className={`${classes["content-box-header"]}`}>
            {props.cardData.description}
          </h1>
          <div className={classes["bottom-line"]}></div>
          <div className={`${classes["content-box-blurb"]}`}>
            <CarouselSwipe
              texts={texts}
              type={type}
              carouselAttributes={carouselAttributes}
            />
          </div>
        </div>
      </article>
    </Fragment>
  );
}

export function getStaticProps(context) {
  console.log(context);
  const say = { one: "hello" };
  return {
    props: { say },
  };
}
