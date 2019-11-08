import React from 'react'; 
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

test('renders display component', () => {
  rtl.render(<Dashboard />);
});
