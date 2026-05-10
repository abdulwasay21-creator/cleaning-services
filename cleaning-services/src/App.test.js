import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders the hero heading', () => {
  render(<App />);
  const heading = screen.getByText(/Professional Office Cleaning for Businesses in GTA/i);
  expect(heading).toBeInTheDocument();
});
