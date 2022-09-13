/* eslint-disable react/prop-types */
import Link from "next/link";
import classes from "./timelineSchool.module.scss";
import SchoolIcon from "../../public/images/icons/school.svg";
import timelineElementsSchool from "./timelineElementsSchool.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function TimelineSchool() {
  return (
    <div className={classes["timeline-container"]}>
      <VerticalTimeline className={classes["vertical-timeline"]}>
        {timelineElementsSchool.map((element) => {
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={{ background: "#577194" }}
              icon={<SchoolIcon />}
              className={classes["vertical-timeline-element"]}
            >
              <h3 className={classes["vertical-timeline-element-title"]}>
                {element.title}
              </h3>
              <h5 className={classes["vertical-timeline-element-subtitle"]}>
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a className={`button ${classes["workButton"]}`} href="/">
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <div className={classes["button-container"]}>
        <div className={classes["btn-light__container"]}>
          <Link href="/doc/Attila_Gyori_2022_09.pdf">
            <a className={classes["btn-dark--outline"]} target="_blank">
              Resume
            </a>
          </Link>
        </div>
        <div className={classes["btn-main__container"]}>
          <Link href="/contact">
            <a className={classes["btn-main"]}>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TimelineSchool;
