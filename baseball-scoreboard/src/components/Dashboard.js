import React from 'react';
import Display from './Display';

class Dashboard extends React.Component {

  state = {
    balls: 0,
    strikes: 0
  };

  render() {


    return (
    <div className="container">

      <Display />

      Square div that shows display.

      <div className="buttons">
        <button>Hit</button>
        <button>Ball</button>
        <button>Foul</button>
        <button>Strike</button>
      </div>
    </div>
  )};
};

export default Dashboard;