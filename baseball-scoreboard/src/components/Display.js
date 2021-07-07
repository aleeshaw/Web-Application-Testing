import React from 'react';
import '../styling/Display.css';

const Display = props => {
  return (
    <div className="container display">
      <div className="display-info">
        <p>Strikes</p> 
        <div className="number-info">
          {props.strikes}
        </div>
      </div>
      <div className="display-info">
        <p>Balls</p> 
        <div className="number-info">
          {props.balls}
        </div>
      </div>
    </div>
  );
};

export default Display;