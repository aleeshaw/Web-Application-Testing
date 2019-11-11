import React from 'react';

const Display = props => {
  return (
    <div className="container">
      Takes in props from the dash and they show up here
      <div className="strikes">Strikes: {props.strikes}</div>
      <div className="balls">Balls: {props.balls}</div>
    </div>
  )
}

export default Display;