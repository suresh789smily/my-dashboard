import React, { useState } from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

function Footer() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      name === "" ||
      phone === "" ||
      email === ""
    ) {

      alert("Please fill all fields");

    } else {

      alert("Form Submitted Successfully");

      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (

    <footer className="footer">

      <div className="icons">

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube />
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

      </div>

      <h1>SUNKOM POWER</h1>

      <p>Great Value, Unbeatable Technology</p>

      <form
        className="subscribe"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          Submit
        </button>

      </form>

    </footer>

  );
}

export default Footer;