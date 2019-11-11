import React from 'react';
import '../styling/Display.css';

const Display = props => {
  return (
    <div className="container">
      <div className="strikes">Strikes: {props.strikes}</div>
      <div className="balls">Balls: {props.balls}</div>
    </div>
  );
};

export default Display;