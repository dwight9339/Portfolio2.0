import axios from "axios";
import {
  container,
  formCard,
  form,
  submitButton,
  fieldLabel,
  messageFieldLabel,
  field,
  feedbackMessageContainer
} from "styles/contact.module.scss";
import { useState } from "react";

export const successText = "Message sent";
export const failureText = "Unable to send message. Please try again or email david@david-white.dev";

const Contact = () => {
  const [feedbackMessage, setFeedbackMessage] = useState();
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const handleSubmit = async (e) => {
    setSubmitDisabled(true);
    setFeedbackMessage(null);
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    try {
      await axios.post("/api/send-inquiry", {
        name: name.value,
        email: email.value,
        message: message.value
      });
      e.target.reset();
      setFeedbackMessage(successText);
    } catch(err) {
      console.error(err);
      setFeedbackMessage(failureText);
    } finally {
      setSubmitDisabled(false);
    }
  }

  return (
    <div className={container}>
      <div className={formCard}>
        <h1>Contact me</h1>
        {feedbackMessage && <div
          className={feedbackMessageContainer}
        >
          <p 
            data-testid="feedbackMessage"
          >
            {feedbackMessage}
          </p>
        </div>}
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