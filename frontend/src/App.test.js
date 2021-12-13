import { render, screen } from '@testing-library/react';
import App from './App';

test('renders default links', () => {
  render(<App />);
  const linkElement = screen.getByText(/users balances tokens signup login/i);
  expect(linkElement).toBeInTheDocument();
});
