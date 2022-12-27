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
        email: "attila.gyori.ag@gmail.com",
        name: "AG",
      },
      templateId: "d-7fc85447ae3847d4bcb5c051d4c099c9",
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
