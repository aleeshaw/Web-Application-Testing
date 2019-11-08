import React from 'react';
import Display from './Display';

class Dashboard extends React.Component {

  state = {
    ball: 0,
    strike: 0
  };

  //Button event handlers
  hitHandler = event => {
    //sets ball and strike state to 0
  };
  ballHandler = event => {
    //adds +1 to ball state, unless it's at 3, then strike and ball states are set to O
  };
  foulHandler = event => {
    //adds +1 to strike state, unless it's at 2, then it stays at 2.
  };
  strikeHandler = event => {
    //adds +1 to strike state, unless it's at 2, then strike and ball state are set to 0
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