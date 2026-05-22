import { render, screen } from '@testing-library/react';
import App from './App';

test('renders start prompt', () => {
  render(<App />);
  const promptElement = screen.getByText(/press enter to begin/i);
  expect(promptElement).toBeInTheDocument();
});
