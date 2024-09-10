import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Git from "../images/github.png"
import Linkedin from "../images/linkedin.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_g35ri6p",
        "template_p08hk6d",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "ukIIoOvI5NBmTB1Rz"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email.");
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="section">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
        <div className="social-buttons">
        <a
          href="https://github.com/CStappas"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          <img
            src={Git}
            alt="GitHub"
            className="social-icon"
            style={{ width: '50px',padding: "10px"}}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/christos-stappas-howarth-a30816114"
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          <img
            src={Linkedin}
            alt="LinkedIn"
            className="social-icon"
            style={{ width: '50px',padding: "10px"}}
          />
        </a>
      </div>
      </form>
    </div>
  );
};

export default Contact;
