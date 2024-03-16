import sendInquiryEmail from "utils/sendInquiryEmail";

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.status = 400;
  }
}

const checkEmailFormat = (str) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(str).toLowerCase());
};

const sendInquiry = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name) throw new ValidationError("Please include a name");
    if (!email) throw new ValidationError("Please include an email");
    if (!checkEmailFormat(email)) throw new ValidationError("Invalid email");
    if (!message) throw new ValidationError("Please include a message");

    await sendInquiryEmail(req.body);
    res.status(200).send();
  } catch(err) {
    const status = err.name && err.name === "ValidationError" ? err.status : 500;
    res.status(status).json({ msg: `${err}`});
  }
}

export default sendInquiry;