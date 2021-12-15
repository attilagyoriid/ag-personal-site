/** @format */

import { validateEmail } from "../../middleware/validateEmail";
import { emailSchema } from "../../schemas/emailSchema";

const handler = (req, res) => {
  res.status(200).json({ message: "Email sent successfully" });
};

export default validateEmail(emailSchema, handler);
