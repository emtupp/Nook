import React, { useState } from 'react';
import './Story.css';

export default function Story(props) {
  const description = "Noök is a Canadian lifestyle company focused on creating a cozy atmosphere with a modern design. Our carefully curated products allow our client to express their unique personality through decor. ";
  const story = "Noök was founded in Montreal, Quebec by a close-knit team whose members shared a common vision: providing beautiful, high-quality, affordable products for the home. It is our belief that creating a warm, lovely home should be accessible to everyone.";
  const [ text, setText ] = useState(description)

  return (
    <section className='story'>
      <div className='text'>{text}</div>
      <div className='navigate'>
        <button className='to-description' onClick={() => setText(description)}>About us</button>
        <button className='to-story' onClick={() => setText(story)}>Our story</button>
        <button className='to-products' disabled>Pruducts</button>
      </div>
    </section>
  );
};