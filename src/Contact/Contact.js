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
          <label>Your email:
            <input type="text" name="_replyto" />
          </label>
          <label> Your message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  )
}