import React from "react";
import classes from "./modal2.module.scss";
import { useState, useEffect, useRef, useCallback, Fragment } from "react";

// modal component
const Modal = ({
  headerCloseHandler,
  show,
  enableHeader,
  customTitle,
  title,
  headerBtns,
  isHeaderNoCloseBtn,
  enableFooter,
  footerBtns,
  isCancelClickOnOverlay,
  maxWidth,
  children,
}) => {
  const modalWrapper = useRef(null);

  const shortcutsHandler = useCallback(
    (event) => {
      if (event.key === "Escape" && headerCloseHandler && show)
        headerCloseHandler();
    },
    [headerCloseHandler, show]
  );

  useEffect(() => {
    window.addEventListener("keydown", shortcutsHandler);

    return () => {
      window.removeEventListener("keydown", shortcutsHandler);
    };
  }, [shortcutsHandler]);

  const renderHeader = () => {
    if (enableHeader === false) {
      return;
    }
    return (
      <div className={classes["modal-header"]}>
        <div>
          {customTitle ? (
            customTitle
          ) : (
            <h4 className={classes["modal-title"]}>{title}</h4>
          )}
          <div>
            {headerBtns && renderModalBtns(headerBtns)}
            {!isHeaderNoCloseBtn && (
              <button
                className={classes["header-close-btn"]}
                onClick={headerCloseHandler}
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderFooter = () => {
    if (enableFooter === false) {
      return;
    }
    return (
      <div className={classes["modal-footer"]}>
        {footerBtns && renderModalBtns(footerBtns)}
      </div>
    );
  };

  const renderModalBtns = (buttons) =>
    buttons.map((el, i) => {
      let buttonColorClass = "modal-btn-primary";

      if (el.color === "red") {
        buttonColorClass = "modal-btn-danger";
      } else if (el.color === "grey") {
        buttonColorClass = "modal-btn-secondary";
      } else if (el.color === "green") {
        buttonColorClass = "modal-btn-success";
      } else if (el.color === "yellow") {
        buttonColorClass = "modal-btn-warning";
      } else if (el.color === "lightBlue") {
        buttonColorClass = "modal-btn-info";
      } else if (el.color === "black") {
        buttonColorClass = "modal-btn-dark";
      }

      return (
        <Fragment key={i}>
          <button
            className={`${classes["modal-btn"]} ${classes[buttonColorClass]}`}
            onClick={el.click}
            disabled={el.disabled}
          >
            <span className={classes["btn-content"]}>
              {el.icon && <i className={`fas ${el.icon} icon`} />}
              {el.label}
            </span>
          </button>
        </Fragment>
      );
    });

  return (
    <div
      className={`${classes["modal-window"]} ${
        !show ? classes["inactive-modal"] : ""
      }`}
      onClick={(e) => {
        if (e.target === modalWrapper.current && !isCancelClickOnOverlay) {
          headerCloseHandler();
        }
      }}
    >
      <div className="modal-wrapper" ref={modalWrapper}>
        <div
          className={`${classes["modal"]} ${
            show ? classes["animate-modal"] : ""
          }`}
          style={{ maxWidth: maxWidth ? maxWidth : "" }}
        >
          {renderHeader()}
          <div className={classes["modal-body"]}>{show ? children : null}</div>
          {renderFooter()}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  enableHeader: PropTypes.bool,
  title: PropTypes.string,
  customTitle: PropTypes.node,
  headerBtns: PropTypes.array,
  headerCloseHandler: PropTypes.func,
  isHeaderNoCloseBtn: PropTypes.bool,
  enableFooter: PropTypes.bool,
  footerBtns: PropTypes.array,
  isCancelClickOnOverlay: PropTypes.bool,
  show: PropTypes.bool,
  maxWidth: PropTypes.number,
};

export default Modal;

{
  /* Modal properties
        - enableHeader => boolean value which determines whether to use the modal header or not (default true) 
        - title => modal header text (default empty)
        - customTitle => html node which will replace title
        - headerBtns => array of buttons which will be added to the header on the right ({label: string, '', click: click function, disabled: boolean (default false), icon: string (font awesome class), color: string 'default is blue' (red, blue, green, yellow, lightBlue, black, grey)})
        - headerCloseHandler => a method to close the modal (note: this property is required to be able to close modal on ESCP)
        - isHeaderNoCloseBtn => boolean property which determines whether not to use default header close button
        - enableFooter => boolean value which determines whether to use the modal footer or not (default true)
        - footerBtns => array of buttons similar to headerBtns but in the footer
        - isCancelClickOnOverlay => boolean property which determines whether to cancel the click handler on the modal overlay (default to false)
        - show => boolean value to determine whether to show or hide the modal     
        - maxWidth => number property which determines the maximum with of the modal
         */
}
