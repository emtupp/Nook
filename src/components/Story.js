import React from 'react';
import './Story.css';

export default function Story(props) {
  return (
    <section className='story'>
      <div className='description'>Noök is a Canadian lifestyle company focused on creating a cozy atmosphere with a modern design. Our carefully curated products allow our client to express their unique personality through decor. </div>
      <div className='navigate'>
        <button className='to-description'>About us</button>
        <button className='to-story'>Our story</button>
        <button className='to-products' disabled>Pruducts</button>
      </div>
    </section>
  );
};