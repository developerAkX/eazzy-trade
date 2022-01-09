import juice from "juice";
import { htmlToText } from "html-to-text";
import nodemailer from "nodemailer";

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST_URL,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_PORT === 465, // true for 465, false for other ports
  auth: {
    user: process.env.ADMIN_EMAIL, // generated ethereal user
    pass: process.env.ADMIN_PASSWORD, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: process.env.MAIL_PORT === 465,
  },
});

const sendEmail = async (props) => {
  const { template: templateName, context, ...restOfOptions } = props;

  const options = {
    ...restOfOptions,
  };

  if (templateName) {
    const html = templateName(context);
    const text = htmlToText(html);
    const htmlWithStylesInlined = juice(html);
    options.html = htmlWithStylesInlined;
    options.text = text;
  }

  return await transporter.sendMail(options);
};

export { transporter, sendEmail };
