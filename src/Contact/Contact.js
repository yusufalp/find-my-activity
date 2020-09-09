import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div>
      <header>
        <h1>Get in Touch</h1>
      </header>
      <section>
        <form action="" method="get">
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" />
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
        <button className="send-button" type="submit">Send</button>
      </section>
      <hr />
    </div>
  )
}