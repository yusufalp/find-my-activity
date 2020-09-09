import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div>
      <header className='contact-page'>
        <h2>Get in Touch</h2>
      </header>
      <section>
        <form action="" method="get">
          <label htmlFor="">Name</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" />
          <label htmlFor="">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button className="send-button" type="submit">Send</button>
        </form>
      </section>
    </div>
  )
}