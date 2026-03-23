import React, { useState } from 'react';

export default function RandomColor() {
  const [color, setColor] = useState('#ffffff');

  const hex = '0123456789ABCDEF';
  const changeColor = () => {
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hex.length);
      newColor += hex[randomIndex];
    }
    setColor(newColor);
    // console.log(newColor);
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: color,
          height: '25vh',
          padding: '20px',
          margin: '20px',
        }}
      >
        <h1>Random Color</h1>
        <button onClick={changeColor}>Generate color</button>
      </div>
    </div>
  );
}
