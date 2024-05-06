import React, { useState } from "react";

import "./contact.css";
import { Link } from "react-router-dom";

function Contact(user) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    phone: "",
  });
  const formSubmit = () => {};
  const inputChnage = (e) => {
    let { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  return (
    <div className="md:px-24 pl-3  py-4 px-4 bg-[#222831]">
      <p className="text-4xl font-serif text-center pt-4 ">Contact Us</p>
      <form
        action={formSubmit}
        className={`grid grid-cols-1 justify-items-center my-20 md:grid-cols-1 formbg`}
      >
        <div className="grid grid-cols-1 md:gap-10 gap-8 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder=" Your Name"
            onChange={inputChnage}
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder=" Your Email"
            onChange={inputChnage}
            className="input"
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone "
            onChange={inputChnage}
            className="input"
          />
          <input
            type="text"
            name="subject"
            placeholder=" Your Subject"
            onChange={inputChnage}
            className="input"
          />
        </div>
        <textarea
          rows="7"
          type="text"
          name="message"
          placeholder=" Your Message"
          onChange={inputChnage}
          className="textarea"
        />
        <button onSubmit="submit" className="savebutton">
          Submit Details
        </button>
      </form>
    </div>
  );
}

export default Contact;
