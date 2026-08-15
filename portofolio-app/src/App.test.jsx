import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

test('renders the portfolio navigation', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const brandElement = screen.getByRole('link', { name: /back to top/i });
  expect(brandElement).toBeInTheDocument();
});

test('renders the contact section', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const contactElement = screen.getByRole('heading', { name: /contact/i });
  expect(contactElement).toBeInTheDocument();
});
