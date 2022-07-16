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
              for="name"
              className={fieldLabel}
            >Name</label>
            <input
              type="text"
              name="name"
              size="30"
            ></input>
          </div>
          <div
            className={field}
          >
            <label 
              for="email"
              className={fieldLabel}
            >Email</label>
            <input
              type="text"
              name="email"
              size="30"
            ></input>
          </div>
          <label 
            for="message"
            className={messageFieldLabel}
          >
            Message
          </label>
          <textarea
            name="message"
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