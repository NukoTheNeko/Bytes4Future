import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import HelloWorld from "../HelloWorld"

test('renders without name', () => {
  render(<HelloWorld />);
  const linkElement = screen.getByText(`Hello, stranger.`);
  expect(linkElement).toBeInTheDocument();
});

test('renders with name', () => {
  render(<HelloWorld name="Rafa" />);
  const linkElement = screen.getByText(`Hello, Rafa.`);
  expect(linkElement).toBeInTheDocument();
});