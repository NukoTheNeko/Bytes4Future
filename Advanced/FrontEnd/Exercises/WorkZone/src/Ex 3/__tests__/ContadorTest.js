import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Contador from "../Contador"
import { act } from 'react-dom/test-utils';

test('renders with initial state 0', () => {
    render(<Contador />);
    const linkElement = screen.queryByText(`0`);
    expect(linkElement).toBeInTheDocument();
});

test('renders with plus button', () => {
    render(<Contador />);
    const plusButton = screen.queryByText("+")
    expect(plusButton).toBeInTheDocument()
});

test('renders with minus button', () => {
    render(<Contador />);
    const minusButton = screen.queryByText("+")
    expect(minusButton).toBeInTheDocument()
});

test('renders correct buttons', () => {
    render(<Contador />);
    const plusButton = screen.queryByText("*")
    expect(plusButton).not.toBeInTheDocument()
});

test('increments', () => {
    render(<Contador />);
    const linkElement = screen.queryByText(`0`);
    const plusButton = screen.queryByText("+")
    const cycles = 10
    for(let i = 1; i <= cycles; i++) {
        act(() => {
            plusButton.click()
        })
    }
    expect(linkElement).toHaveTextContent(`${cycles}`);
});

test('disables decrement button', () => {
    render(<Contador />);
    const minusButton = screen.queryByText("-")
    expect(minusButton).toBeDisabled()
});

test('decrements', () => {
    render(<Contador />);
    const linkElement = screen.queryByText(`0`);
    const plusButton = screen.queryByText("+")
    const minusButton = screen.queryByText("-")
    const cycles = 10
    for(let i = 1; i <= cycles; i++) {
        act(() => {
            plusButton.click()
        })
    }
    const cycles2 = 13
    for(let i = 1; i <= cycles2; i++) {
        act(() => {
            minusButton.click()
        })
    }
    expect(linkElement).toHaveTextContent(`0`);
    expect(minusButton).toBeDisabled()
});