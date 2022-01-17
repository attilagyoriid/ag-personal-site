/* eslint-disable react/prop-types */
import classes from "./timelineSchool.module.scss";
import WorkIcon from "../../public/images/icons/work.svg";
import timelineElementsWork from "./timelineElementsWork.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function TimelineWork() {
  return (
    <div className={classes["timeline-container"]}>
      <VerticalTimeline className={classes["vertical-timeline"]}>
        {timelineElementsWork.map((element) => {
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={{ background: "#e9ce84" }}
              icon={<WorkIcon />}
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
    </div>
  );
}

export default TimelineWork;
