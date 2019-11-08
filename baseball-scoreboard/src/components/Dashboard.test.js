import React from 'react'; 
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

test('renders display component', () => {
  rtl.render(<Dashboard />);
});

test('hitHandler: adds sets both ball and strike state to 0', () => {
  expect(this.state.ball).toBe(0);
  expect(this.state.strike).toBe(0);
});

test("ballHandler: adds +1 to ball state, unless it's at 3, then strike and ball states are set to O", () => {
  expect(this.state.ball).toBe(this.state.ball+1);
  expect(this.state.ball).not.toBe(4);
})
//I don't think this will accurately reflect the event handler.
//TODO go through the documentation and look for simulation tips...Also this stackoverflow link https://stackoverflow.com/questions/42984108/testing-react-event-handlers 