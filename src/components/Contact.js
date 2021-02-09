import React from 'react';
import './Contact.css';

export default function Contact(props) {
  return (
    <section className='contact-box'>
      <div className='contact-title'>
        Contact info
      </div>
      <div className='contact-info'>
        <p><strong>email</strong>: text@text.com</p>
        <p><strong>phone</strong>: 000-000-0000</p>
        <p><strong>P.O. Box</strong>: Some adress</p>
        <p><strong>Amazon</strong>: Some Hyperlink</p>
        <p><strong>Etsy</strong>: Some Hyperlink</p>
      </div>
    </section>
  );
};