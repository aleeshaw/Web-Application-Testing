import React from 'react';

const Display = props => {
  return (
    <div className="container">
      Takes in props from the dash and they show up here
      <div className="strikes">{props.strikes}</div>
      <div className="balls">{props.balls}</div>
    </div>
  )
}

export default Display;