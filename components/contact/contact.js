/** @format */

import Social from "../social/social";
import TitleOverlay from "../titleOverlay/titleOverlay";
import classes from "./contact.module.scss";

export default function Contact() {
  return (
    <section
      className={`${classes["contact-section"]} ${classes["text-center"]}`}
    >
      <div className={classes["title-container"]}>
        <TitleOverlay title='LET’S WORK TOGETHER' overlayText='CONTACT' />
      </div>
      <div className={classes["contact-container"]}>
        <div className={classes["social-container"]}>
          <div className={classes["social-title"]}>Social</div>
          <Social />
          <div className={classes["email-container"]}>
            <div className={classes["email-icon"]}>
              <img src='/images/social-icons/mail.svg' alt='Email Icon' />
            </div>
            <div className={classes["email-content"]}>
              gyoriattila@yahoo.com
            </div>
          </div>
        </div>

        <div className={classes["form-container"]}>
          <div className={classes["form-content"]}>
            <form action='' autoComplete='off'>
              <div className={classes["input-field"]}>
                <input type='text' id='name' required />
                <label className={classes["disable-select"]} for='name'>
                  name
                </label>
                <span className={classes["underline"]}></span>
              </div>
              <div className={classes["input-field"]}>
                <input type='text' id='email' required />
                <label className={classes["disable-select"]} for='email'>
                  email
                </label>
                <span className={classes["underline"]}></span>
              </div>
              <div className={classes["input-field"]}>
                <input type='text' id='subject' required />
                <label className={classes["disable-select"]} for='subject'>
                  subject
                </label>
                <span className={classes["underline"]}></span>
              </div>
              <div className={classes["textarea"]}>
                <textarea
                  id='w3review'
                  name='w3review'
                  rows='4'
                  cols='50'
                  className={classes["textarea-effect"]}
                ></textarea>
              </div>
              <div className={classes["btn-container"]}>
                <a href='work.html' className={classes["btn-light"]}>
                  Send
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
