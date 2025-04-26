const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: false,
  tls: {
    rejectUnauthorized: false
  }
});

transporter.sendMail({
  from: process.env.SMTP_FROM,
  to: process.env.SMTP_TO,
  subject: "TEST",
  text: "Ce message est parti depuis mon serveur Postfix !",
}, (err, info) => {
  if (err) return console.error("❌ Erreur d'envoi :", err);
  console.log("✅ Envoyé :", info.response);
});
