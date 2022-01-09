import {
  transporter,
  sendEmail,
} from "../../helpers/transporter.nodemailer.js";
import ContactAdmin from "ejs-compiled-loader!../../public/ContactAdminEmail.ejs";
import ContactClient from "ejs-compiled-loader!../../public/ContactClientEmail.ejs";

export default async function handler(req, res) {
  // Process a POST request
  if (req.method === "POST") {
    try {
      const data = req.body;

      const success = transporter.verify();

      if (success) console.log(`=== Server is ready to take Email ===`);

      const AdminEmail = await sendEmail({
        from: data.email,
        to: process.env.ADMIN_EMAIL,
        subject: `You received a email from ${data.name}`,
        template: ContactAdmin,
        context: {
          ClientName: data.name,
          ClientPhoneNumber: data.phoneNumber,
          ClientEmail: data.email,
          Message: data.message,
          MessageFor: data.messageFor,
          HomePageURL: process.env.WEB_HOST_URL,
          year: new Date().getFullYear(),
        },
      });

      const ClientEmail = await sendEmail({
        from: process.env.ADMIN_EMAIL,
        to: data.email,
        subject: `We received Your request ${data.name} !`,
        template: ContactClient,
        context: {
          MessageFor: data.messageFor,
          Message: data.clientMessage,
          HomePageURL: process.env.WEB_HOST_URL,
          year: new Date().getFullYear(),
        },
      });

      if (ClientEmail && AdminEmail) {
        console.log("Email sent successfully !");
        return res.status(200).json({
          message: "Email sended successfully !",
          Client: ClientEmail,
          admin: AdminEmail,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Internal server Error !" });
    }
  } else {
    // Handle any other HTTP method
    res.status(404).json({ msg: "Page Not found!" });
  }
}
