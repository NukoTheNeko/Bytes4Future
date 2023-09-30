import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import CheckBox from "../Checkbox"
import { act } from 'react-dom/test-utils';

test('renders with prop initialState', () => {
    render(<CheckBox initialState={false} />);
    const linkElement = screen.getByText(`Inativo`);
    expect(linkElement).toBeInTheDocument();
});

test('renders whats supposed', () => {
    render(<CheckBox initialState={false} />);
    const linkElement = screen.queryByText(`Hello, Rafa.`);
    expect(linkElement).not.toBeInTheDocument();
});

test('renders button', () => {
    render(<CheckBox initialState={false} />);
    const button = screen.queryByRole('button')
    expect(button).toBeInTheDocument();
});

test('changes state and phrase accordingly', () => {
    render(<CheckBox initialState={true} />);
    const button = screen.queryByRole('button')
    act(() => {
        button.click()
    })
    const linkElement = screen.getByText(`Inativo`);
    expect(linkElement).toBeInTheDocument();
});

test('changes state and phrase accordingly 3', () => {
    render(<CheckBox initialState={false} />);
    const button = screen.queryByRole('button')
    act(() => {
        button.click()
    })
    const linkElement = screen.queryByText(`Ativo`);
    expect(linkElement).toBeInTheDocument();
    act(() => {
        button.click()
    })
    const linkElement2 = screen.queryByText(`Inativo`);
    expect(linkElement2).toBeInTheDocument();
    const linkElement3 = screen.queryByText(`Ativo`);
    expect(linkElement3).not.toBeInTheDocument();
});

