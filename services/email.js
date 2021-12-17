/** @format */

const sgMail = require("@sendgrid/mail");

module.exports = class Email {
  constructor(user) {
    this.fromEmail = process.env.SENDGRID_ME_EMAIL;
    this.fromName = process.env.SENDGRID_ME_NAME;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    this.to = user.email;
    this.userName = user.name;
    this.message = user.message;
    this.message_subject = user.subject;
  }

  async send() {
    const mailOptions = {
      nickname: "AG",
      to: this.to,
      bcc: this.fromEmail,
      from: {
        email: this.fromEmail,
        name: this.fromName,
      },
      reply_to: {
        email: "no-reply@ag.com",
        name: "AG",
      },
      templateId: "d-09440aa1df6643d7a41617e6577f0300",
      dynamic_template_data: {
        message_subject: this.message_subject,
        email_content: this.message,
        user_name: this.userName,
      },
    };

    await sgMail
      .send(mailOptions)
      .then(() => {})
      .catch((err) => {
        console.error(err);
        console.error(`Message send failed: ${user.email}`);
      });
  }
};
