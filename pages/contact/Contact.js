import axios from "axios";
import {
  container,
  formCard,
  form,
  submitButton,
  fieldLabel,
  messageFieldLabel,
  field,
  myMessage,
  messageFade
} from "styles/contact.module.scss";
import { useState } from "react";

const Contact = () => {
  const [messageClass, setMessageClass] = useState();
  const [message, setMessage] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const showMessage = (msg) => {
    setMessageClass(myMessage);
    setMessage(msg);
    setTimeout(() => setMessageClass(messageFade), 2000);
  }

  const handleSubmit = async (e) => {
    setSubmitDisabled(true);
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    try {
      await axios.post("/api/send-inquiry", {
        name: name.value,
        email: email.value,
        message: message.value
      });
      e.target.reset();
      showMessage("Message sent");
    } catch(err) {
      console.error(err);
      showMessage("Unable to send message");
    } finally {
      setSubmitDisabled(false);
    }
  }

  return (
    <div className={container}>
      <div className={messageClass}>
        <p>{message}</p>
      </div>
      <div className={formCard}>
        <h1>Contact me</h1>
        <form onSubmit={handleSubmit} className={form}>
          <div
            className={field}
          >
            <label 
              htmlFor="name"
              className={fieldLabel}
            >Name</label>
            <input
              type="text"
              name="name"
              size="30"
              required
              data-testid="nameField"
            ></input>
          </div>
          <div
            className={field}
          >
            <label 
              htmlFor="email"
              className={fieldLabel}
            >Email</label>
            <input
              type="email"
              name="email"
              size="30"
              data-testid="emailField"
              required
            ></input>
          </div>
          <label 
            htmlFor="message"
            className={messageFieldLabel}
          >
            Message
          </label>
          <textarea
            name="message"
            required
            style={{
              width: "300px",
              height: "200px"
            }}
            data-testid="messageField"
          ></textarea>
          <input 
            type="submit" 
            value="Submit" 
            className={submitButton}
            disabled={submitDisabled}
            data-testid="submitButton"
          />
        </form>
      </div>
    </div>
  )
}

export default Contact;