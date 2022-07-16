import axios from "axios";
import {
  container,
  formCard,
  form,
  submitButton,
  fieldLabel,
  messageFieldLabel,
  field
} from "styles/contact.module.scss";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    try {
      await axios.post("/api/send-inquiry", {
        name: name.value,
        email: email.value,
        message: message.value
      });
      e.target.reset();
    } catch(err) {
      console.error(err);
    }
    
  }

  return (
    <div className={container}>
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
            
          ></textarea>
          <input 
            type="submit" 
            value="Submit" 
            className={submitButton}
          />
        </form>
      </div>
    </div>
  )
}

export default Contact;