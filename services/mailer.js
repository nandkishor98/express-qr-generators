const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "nandyadav720@gmail.com",
      pass: "selhsaxcjavcoehg",
    },
  });
  
  transporter.verify(function (error, success)  {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  
  const sendEmail = async (payload) => {
    const { from, to, message, subject } = payload;
     const info = await transporter.sendMail({
      from: from.toString(), 
      to: to.toString, 
      subject: subject, 
      html: JSON.toString(), 
    });
    return info.messageId;
  
  }
  
  module.exports = { sendEmail };
  