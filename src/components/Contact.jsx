import React, { useState } from 'react';

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      subject === "" ||
      message === ""
    ) {

      alert("Please fill all fields");

    } else {

      alert("Form Submitted Successfully");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (

    <div id="contact" className="contact">

      <div className="contact-left">

        <h1>CONTACT US</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <textarea
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">
            Submit
          </button>

        </form>

      </div>

      <div
        className="contact-right"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7')"
        }}
      ></div>

    </div>

  );
}

export default Contact;