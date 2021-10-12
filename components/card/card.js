/** @format */
import { Fragment } from "react";
import CarouselSwipe from "../carousel/carouselSwipe";
import classes from "./card.module.scss";
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
          <img
            className={`${classes["content-box-thumb"]}`}
            src={props.cardData.imgSrc}
            alt={props.cardData.description}
          />
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
