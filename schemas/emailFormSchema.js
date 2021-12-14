/** @format */

import * as Yup from "yup";

export const emailFormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("Name is required")
    .min(3, "Name should be of minimum 3 characters length"),
  subject: Yup.string()
    .trim()
    .required("Subject is required")
    .min(8, "Subject should be of minimum 8 characters length"),
  email: Yup.string("Enter your email")
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  message: Yup.string()
    .trim()
    .required("Message is required")
    .min(20, "Message should be of minimum 20 characters length"),
});
