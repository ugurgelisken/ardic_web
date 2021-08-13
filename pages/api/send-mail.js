const sendMail = (req, res) => {
  res.status(200);

  let nodemailer = require("nodemailer");
  const dotenv = require("dotenv");
  dotenv.config();

  const mailData = {
    from: `${req.body.name} <${req.body.email}>`,
    to: process.env.MAIL_TO,
    subject: `${process.env.APP_NAME} | Contact Form`,
    text: `${req.body.message}`,
    html: `<p>${req.body.message}</p>`,
  };

  const transporter = nodemailer.createTransport({
    tls: {
      rejectUnauthorized: false,
    },
    port: process.env.MAIL_PORT,
    secure: true,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    logger: true,
    debug: false,
  });

  transporter.sendMail(mailData, function (error, info) {
    if (error) {
      console.log("[ ! ] Mail not sent. ", error);
      return res.status(500).json({ status: 500, ...error });
    }
    console.log("[ ✓ ] Mail sent sucessfully. Info: ", info);
    return res.status(200).json({ status: 200, ...info });
  });
};

export default sendMail;
