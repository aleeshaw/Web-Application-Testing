import React from 'react'; 
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Display from './Display';

test('renders display component', () => {
  rtl.render(<Display />);
});