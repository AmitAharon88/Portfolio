import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0ovac7k', 'template_a242gj7', form.current, 'W_9wG_jbJuh29VK6O')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Your message have been sent')
  };

  return (
   <div id='contactSection'>
      <h1 id='contact' className='contactHeader' >Contact</h1>
      <form id='form' ref={form} onSubmit={sendEmail}>
         <input className='input' type="text" name="user_name" placeholder='Name' />
         <br/>
         <input className='input' type="email" name="user_email" placeholder='Email' />
         <br/>
         <textarea className='input' name="message" rows='8' placeholder='Looking forward to hearing from you!' />
         <br/>
         <input id='button' type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;