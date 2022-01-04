// import { transporter, sendEmail } from "../../server/transporter.nodemailer.js";

export default async function handler(req, res) {
  // Process a POST request
  if (req.method === "POST") {
    try {
      const data = req.body;

      // const success = transporter.verify();

      // if (success)
      //   console.log(
      //     `=== Server is ready to take messages: ${JSON.stringify(success)} ===`
      //   );

      // const AdminEmail = await sendEmail({
      //   from: data.email,
      //   to: process.env.EMAIL,
      //   subject: `You received a email from ${data.name}`,
      //   template: "ContactAdminEmail",
      //   context: {
      //     ClientName: `${data.name}`,
      //     ClientEmail: data.email,
      //     Message: data.message,
      //     HomePageURL: process.env.HomePageURL,
      //   },
      // });

      // const ClientEmail = await sendEmail({
      //   from: process.env.EMAIL,
      //   to: data.email,
      //   subject: `We received Your request ${data.name} !`,
      //   template: "ContactClientEmail",
      //   context: {
      //     Title: `Thank You for contacting us ${data.name}`,
      //     Message: `We received your email and reply you soon...`,
      //     HomePageURL: process.env.HomePageURL,
      //   },
      // });

      // if (ClientEmail && AdminEmail) {
      //   console.log("Email sent successfully !");
      //   return res.status(200).json({
      //     message: "Email sended successfully !",
      //     Client: ClientEmail,
      //     admin: AdminEmail,
      //   });
      // }

      console.log(data);
      return res.status(200).json({
        message: "Feature Coming Soon...",
      });
    } catch (error) {
      res.status(500).json({ msg: "Internal server Error !" });
    }
  } else {
    // Handle any other HTTP method
    res.status(404).json({ msg: "Page Not found!" });
  }
}
