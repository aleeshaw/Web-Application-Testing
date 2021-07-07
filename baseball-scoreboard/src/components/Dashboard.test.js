import React from 'react'; 
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';


const mockState = {
  ball: 1,
  strike: 1
};

 const mockClick = obj => {
  obj.strike < 2 
  ? obj.strike + 1
  : obj.strike - 2;
  return obj.strike + 1;
};

test("adds one to strike state, unless < 2, then set's to 0", () => {
  expect(mockClick(mockState)).toBe(2);
  expect(mockClick(mockState)).not.toBe(3);
});

//can add more specific scenario tests where there batter strikes out, gits a hit, etc.

test('renders display component', () => {
  rtl.render(<Dashboard />);
});

//TODO go through the documentation and look for simulation tips...Also this stackoverflow link https://stackoverflow.com/questions/42984108/testing-react-event-handlers 