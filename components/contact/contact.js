/** @format */

import axios from "axios";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Social from "../social/social";
import TitleOverlay from "../titleOverlay/titleOverlay";
import { emailSchema } from "../../schemas/emailSchema";
import classes from "./contact.module.scss";

export default function Contact() {
  const handleSubmit = (values, { resetForm }) => {
    axios
      .post("/api/email", values)
      .then((response) => {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        resetForm({});
      })
      .catch((error) => {
        console.log("ejjor" + JSON.stringify(error));
        let erroMessage = "Error sending email!";
        if (error.response) {
          erroMessage = error.response.data.message;
        }
        toast.error(erroMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <section
      className={`${classes["contact-section"]} ${classes["text-center"]}`}
    >
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
            <Formik
              initialValues={{
                name: "",
                subject: "",
                email: "",
                message: "",
              }}
              validationSchema={emailSchema}
              onSubmit={handleSubmit}
            >
              {({
                touched,
                errors,
                isSubmitting,
                values,
                isValid,
                resetForm,
              }) => (
                <Form autoComplete='off'>
                  <div className={classes["input-field"]}>
                    <Field
                      type='text'
                      id='name'
                      name='name'
                      required
                      autoComplete='off'
                      spellCheck='false'
                    />
                    <ErrorMessage
                      component='div'
                      name='name'
                      className={classes["error"]}
                    />
                    <label
                      className={`${classes["disable-select"]} ${
                        touched.name && errors.name ? classes["invalid"] : ""
                      }`}
                      htmlFor='name'
                    >
                      name
                    </label>
                    <span
                      className={`${classes["underline"]} ${
                        touched.name && errors.name ? classes["invalid"] : ""
                      }`}
                    ></span>
                  </div>
                  <div className={classes["input-field"]}>
                    <Field
                      type='text'
                      id='email'
                      name='email'
                      required
                      autoComplete='off'
                      spellCheck='false'
                    />
                    <ErrorMessage
                      component='div'
                      name='email'
                      className={classes["error"]}
                    />
                    <label
                      className={`${classes["disable-select"]} ${
                        touched.email && errors.email ? classes["invalid"] : ""
                      }`}
                      htmlFor='email'
                    >
                      email
                    </label>
                    <span className={classes["underline"]}></span>
                  </div>
                  <div className={classes["input-field"]}>
                    <Field
                      type='text'
                      id='subject'
                      name='subject'
                      required
                      autoComplete='off'
                      spellCheck='false'
                    />
                    <ErrorMessage
                      component='div'
                      name='subject'
                      className={classes["error"]}
                    />
                    <label
                      className={`${classes["disable-select"]} ${
                        touched.subject && errors.subject
                          ? classes["invalid"]
                          : ""
                      }`}
                      htmlFor='subject'
                    >
                      subject
                    </label>
                    <span className={classes["underline"]}></span>
                  </div>
                  <div className={classes["textarea"]}>
                    <Field
                      component='textarea'
                      spellCheck='false'
                      autocomplete='off'
                      id='message'
                      name='message'
                      rows='4'
                      cols='50'
                      className={`${classes["disable-select"]} ${
                        touched.message && errors.message
                          ? classes["invalid"]
                          : ""
                      }`}
                    ></Field>
                    <ErrorMessage
                      component='div'
                      name='message'
                      className={classes["error"]}
                    />
                  </div>
                  <div className={classes["btn-container"]}>
                    <button
                      disabled={!isValid || isSubmitting}
                      className={classes["btn-light"]}
                      type='submit'
                    >
                      Send
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
