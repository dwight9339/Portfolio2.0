import { createTransport } from "nodemailer";

const sendInquiryEmail = async ({
  name,
  email,
  message
}) => {
  const emailBody = `
    New contact form entry from: ${name}

    Reply to email: ${email}

    Message:
    
    ${message}
  `;

  const {
    INQUIRY_EMAIL_SERVICE,
    INQUIRY_EMAIL_FROM,
    INQUIRY_EMAIL_PW,
    INQUIRY_EMAIL_TO
  } = process.env;
  const transporter = createTransport({
    service: INQUIRY_EMAIL_SERVICE,
    auth: {
      user: INQUIRY_EMAIL_FROM,
      pass: INQUIRY_EMAIL_PW
    }
  });

  await transporter.sendMail({
    from: INQUIRY_EMAIL_FROM,
    to: INQUIRY_EMAIL_TO,
    subject: "Portfolio Inquiry",
    text: emailBody
  });
}

export default sendInquiryEmail;