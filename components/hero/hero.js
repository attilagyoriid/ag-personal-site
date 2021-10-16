/** @format */
import classes from "./hero.module.scss";
import Typed from "typed.js";
import { Fragment } from "react";
import { useEffect, useRef } from "react";
export default function Hero({ posts }) {
  const el = useRef(null);
  const typedTextColors = ["#EBC250", "#FFFFFF", "#EF5353"];

  useEffect(() => {
    console.log(posts);
    const typed = new Typed(el.current, {
      strings: ["SDET", "Developer", "Visual Creative"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      preStringTyped: function (pos, self) {
        el.current.style.color =
          typedTextColors[Math.floor(Math.random() * typedTextColors.length)];
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Fragment>
      <header className={classes.header_home}>
        <div className={`${classes.content} ${classes["px-8"]}`}>
          <h1 className={`${classes["py-2"]}`}>
            i am <span>attila</span> the&nbsp;
            <span ref={el}></span>
          </h1>
          <div className={classes.lead}>
            <div>I specialize in software test automation,</div>
            <div>software development and creative design</div>
            <div>{posts}</div>
          </div>
          <div className={classes["button-group"]}>
            <a href='work.html' className={classes["btn-light"]}>
              About
            </a>
            <a href='work.html' className={classes["btn-main"]}>
              Contact
            </a>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: "getPosts().slice(0, 6)",
    },
    revalidate: 1,
  };
}
