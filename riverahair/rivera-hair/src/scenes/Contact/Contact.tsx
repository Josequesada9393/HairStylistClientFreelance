import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" placeholder="Your message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-image">
        <img src="/path/to/your/image.jpg" alt="Contact" />
      </div>
    </div>
  );
};

export default Contact;
