/** @format */
import { Fragment } from "react";
import Lottie from "react-lottie-player";
import Link from "next/link";
import classes from "./card.module.scss";
import service_creative_animation from "./service_creative_animation.json";
import service_dev_animation from "./service_dev_animation.json";
import service_robot_animation from "./service_robot_animation.json";
import CarouselSwipe from "../carousel/carouselSwipe";

export default function Card(props) {
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

          <Link href={props.linkUrl}>
            <h1 className={`${classes["content-box-header"]}`}>
              {props.cardData.description}
            </h1>
          </Link>
          <div className={classes["bottom-line"]}></div>
          <div className={`${classes["content-box-blurb"]}`}>
            <CarouselSwipe
              texts={props.cardData.text}
              type={props.cardData.type}
              carouselAttributes={props.cardData.carouselAttributes}
            />
          </div>
        </div>
      </article>
    </Fragment>
  );
}


