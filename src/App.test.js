import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hi EveryOne/i);
  expect(linkElement).toBeInTheDocument();
});
