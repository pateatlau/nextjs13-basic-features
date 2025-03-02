import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './page';

test('renders heading', async () => {
  render(<Home />);
  const title = screen.getByText(/Nextjs 13 Basic Features/i);
  expect(title).toBeInTheDocument();
});

test('renders a list of 2 Links', async () => {
  render(<Home />);
  const links = await screen.findAllByRole('link');
  expect(links).toHaveLength(2);
});

test('renders a list of Links', async () => {
  render(<Home />);
  const links = await screen.findByRole('button');
  expect(links).toHaveTextContent(/click me/i);
});
