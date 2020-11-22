import React  from 'react';

import { render, screen } from '@testing-library/react';
import StarMatch from './StarMatch';

test('renders game name', () => {
  render(<StarMatch />);
  const gameName = screen.getByText(/Star Matcher Game/i);
  expect(gameName).toBeInTheDocument();
});

test('renders help text', ()=> {
  render(<StarMatch />);
  const gameName = screen.getByText(/Pick 1 or more numbers that sum to the number of stars/i);
  expect(gameName).toBeInTheDocument();
});
