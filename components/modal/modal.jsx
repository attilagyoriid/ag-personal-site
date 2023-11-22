import React from "react";
import classes from "./modal.module.scss";
export default function Modal() {
  return (
    <div>
      <div className={classes["content-wrapper"]}>
        <label>
          <span className={classes["btn"]}>Click here to open the confirm</span>
          <input type="checkbox" />
          <div className={classes["confirm-modal"]}>
            <div className={classes["modal-form"]}>
              <p>Are you absolutely sure you know what you're doing?</p>
              <button className={classes["btn"]}>Yes</button>
              <button className={classes["btn"]}>No</button>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
