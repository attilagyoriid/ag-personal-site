/** @format */
import { Fragment } from "react";
import classes from "./hero.module.scss";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
export default function Hero() {
  const el = useRef(null);
  const typedTextColors = ["#EBC250", "#FFFFFF", "#EF5353"];

  useEffect(() => {
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
        <div className={`${classes.content} ${classes["px-4"]}`}>
          <h1 className={`${classes["py-2"]}`}>
            i am <span class='bold'>attila</span> the&nbsp;
            <span ref={el}></span>
          </h1>
          <p className={classes.lead}>
            <div>I specialize in software test automation,</div>
            <div>software development and creative design</div>
          </p>
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
