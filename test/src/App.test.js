import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello, REACT!/i);
  expect(textElement).toBeInTheDocument();
});
