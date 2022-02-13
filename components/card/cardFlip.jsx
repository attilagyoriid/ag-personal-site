import { useState } from "react";
import RippleButton from "../rippleButton/rippleButton";
import classes from "./cardFlip.module.scss";
import cardList from "./dataIconsList.js";

export default function CardFlip() {
  const [isHover, toggleHover] = useState(false);

  const handleTouchEvent = (e) => {
    toggleHover(!isHover);
  };
  const iconBaseUrl = "/images/icons/";

  return (
    <div className={`${classes["wrapper"]}`}>
      <div className={`${classes["cols"]}`}>
        {cardList.map((item, index) => (
          <div
            key={item.description}
            className={`${classes["col"]} ${isHover ? classes["hover"] : ""}`}
            onTouchStart={handleTouchEvent}
            onTouchEnd={handleTouchEvent}
          >
            <div className={`${classes["container"]}`}>
              <div
                className={`${classes["front"]} ${classes[item.bkgImgClass]}`}
              >
                <div className={`${classes["inner"]}`}>
                  <p>{item.description}</p>

                  <div className={`${classes["img-grid"]}`}>
                    {item.icons.map((icon) => (
                      <img src={`${iconBaseUrl}${icon}`} key={icon} />
                    ))}
                  </div>
                </div>
                <RippleButton />
              </div>
              <div className={`${classes["back"]}`}>
                <div className={`${classes["inner"]}`}>
                  <div
                    className={`${classes["card__title"]} ${classes["card__title--1"]}`}
                  >
                    <h4 className={`${classes["card__heading"]}`}>
                      {item.description}
                    </h4>
                  </div>
                  <div className={`${classes["card__details"]}`}>
                    <ul>
                      {item.backList.map((listItem) => (
                        <li key={listItem}>{listItem}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
