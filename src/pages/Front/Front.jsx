import React from 'react';
import "./Front.css";

const Front = () => {
  return (
    <div className='front'>
      <picture>
        <source media="(max-width: 700px)" srcSet="/frontMob.png" />
        <img src="/front3.png" alt="Front" />
      </picture>
    </div>
  );
}

export default Front;
