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
    this.setState({
      ball: 0,
      strike: 0
    });
    console.log("hit clicked!", this.state);
  };
  ballHandler = event => {
    //adds +1 to ball state, unless it's at 3, then strike and ball states are set to O

    
    
    this.state.ball < 3 
    
    ? this.setState({
      ball: this.state.ball + 1
    })
    : this.setState({
      ball: 0,
      strike: 0
    })

    

    // this.setState({
    //   ball: this.state.ball + 1
    // });

    console.log("ball clicked!", this.state);
  };
  foulHandler = event => {
    //adds +1 to strike state, unless it's at 2, then it stays at 2.
    console.log("foul clicked!");
  };
  strikeHandler = event => {
    //adds +1 to strike state, unless it's at 2, then strike and ball state are set to 0
    console.log("strike clicked!");
  };

  render() {
    return (
      <div className="container">

        <Display 
          strikes={this.state.strike}
          balls={this.state.ball}
        />

        Square div that shows display.

        <div className="buttons">
          <button 
            onClick={this.hitHandler}
          >
            Hit
          </button>
          <button
            onClick={this.ballHandler}
          >
            Ball
          </button>
          <button
            onClick={this.foulHandler}
          >
            Foul
          </button>
          <button
            onClick={this.strikeHandler}
          >
            Strike
          </button>
        </div>
      </div>
    )};
};

export default Dashboard;