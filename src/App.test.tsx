import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('another test',() => {
  const {getAllByPlaceholderText} = render(<App />)
  const element = getAllByPlaceholderText(/press me/i);
  expect(element).toBeInTheDocument();
})