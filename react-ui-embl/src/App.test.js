import React from 'react';
import { render } from '@testing-library/react';
import MainComponent from './MainComponent';

test('renders learn react link', () => {
  const { getByText } = render(<MainComponent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
