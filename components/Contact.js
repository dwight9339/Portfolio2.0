import axios from "axios";
import {
  container,
  formCard,
  form
} from "styles/contact.module.scss";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    try {
      await axios.post("/api/send-inquiry", {message});
    } catch(err) {
      console.error(err);
    }
    
  }

  return (
    <div className={container}>
      <div className={formCard}>
        <h1>Contact me</h1>
        <form onSubmit={handleSubmit} className={form}>
          <label for="message">Message</label>
          <input type="text" name="message"></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default Contact;