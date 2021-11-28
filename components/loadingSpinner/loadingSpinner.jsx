/** @format */
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";
import classes from "./loadingSpinner.module.scss";

export default function LoadingSpinner(props) {
  const override = css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 900;
  `;
  return (
    <>
      {props.isLoading && (
        <div className={classes["loading-container"]}>
          <ScaleLoader loading={props.isLoading} css={override} size={150} />;
        </div>
      )}
    </>
  );
}
