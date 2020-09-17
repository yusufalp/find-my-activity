import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div>
      <header className='contact-page'>
        <h2>Get in Touch</h2>
      </header>
      <section>
        <form
          action="https://formspree.io/xaypjzbq"
          method="POST"
        >
          <label className="send-content">Your email:
            <input className="send-content" type="text" name="_replyto" />
          </label>
          <label className="send-content"> Your message:
            <textarea className="send-content" name="message" rows="8" ></textarea>
          </label>
          <button className="send-button" type="submit">Send</button>
        </form>
      </section>
    </div>
  )
}