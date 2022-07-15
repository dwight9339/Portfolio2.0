import sendInquiryEmail from "utils/sendInquiryEmail";

const sendInquiry = async (req, res) => {
  const { message } = req.body;

  try {
    await sendInquiryEmail(message);
    res.status(200).send();
  } catch(err) {
    console.error(err);
    res.status(500).send();
  }
}

export default sendInquiry;