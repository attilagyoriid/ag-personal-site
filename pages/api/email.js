/** @format */

import { validateEmail } from "../../middleware/validateEmail";
import { emailSchema } from "../../schemas/emailSchema";
import Email from "../../services/email";

const handler = async (req, res) => {
  const user = { ...req.body };

  try {
    await new Email(user).send();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error sending email. Please try again." });
  }
  res.status(200).json({ message: "Email sent successfully" });
};

export default validateEmail(emailSchema, handler);
