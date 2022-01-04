// import juice from "juice";
// import { htmlToText } from "html-to-text";
// import nodemailer from "nodemailer";
// import path from "path";
// import fs from "fs";
// import ejs from "ejs";

// var transporter = nodemailer.createTransport({
//   // service: "gmail",
//   // secure: process.env.NODE_ENV !== "development",
//   // auth: {
//   //   type: "OAuth2",
//   //   user: process.env.EMAIL,
//   //   pass: process.env.WORD,
//   //   clientId: process.env.OAUTH_CLIENTID,
//   //   clientSecret: process.env.OAUTH_CLIENT_SECRET,
//   //   refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//   //   accessToken: accessToken(),
//   // },
// });

// const sendEmail = async (props) => {
//   const { template: templateName, context, ...restOfOptions } = props;

//   const templatePath = path.join(__dirname, `../Emails/${templateName}.ejs`);

//   const options = {
//     ...restOfOptions,
//   };

//   if (templateName && fs.existsSync(templatePath)) {
//     const template = fs.readFileSync(templatePath, "utf-8");
//     const html = ejs.render(template, context);
//     const text = htmlToText(html);
//     const htmlWithStylesInlined = juice(html);

//     options.html = htmlWithStylesInlined;
//     options.text = text;
//   }

//   return transporter.sendMail(options);
// };

// export { transporter, sendEmail };
