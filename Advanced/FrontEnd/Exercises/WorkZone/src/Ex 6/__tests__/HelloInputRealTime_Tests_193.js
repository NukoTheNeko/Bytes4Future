import {act, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import HelloInput from '../HelloInput';

test('renders input', () => {
    render(<HelloInput/>);
    expect(screen.getByRole("textbox")).toBeInTheDocument()
});

test('renders text', () => {
    render(<HelloInput/>);
    expect(screen.queryByText("Hello, !")).toBeInTheDocument()
});

test('inputs changes value', () => {
    const string = "NA83blxF"
    render(<HelloInput/>);
    expect(screen.getByRole("textbox").value).toBe("")
    act(() => {
        fireEvent.change(screen.getByRole("textbox"), {target: {value: string}})
    })
    expect(screen.getByRole("textbox").value).toBe(string)
});

test('inputs changes text', () => {
    const string = "cpN20s"
    render(<HelloInput/>);
    act(() => {
        fireEvent.change(screen.getByRole("textbox"), {target: {value: string}})
    })
    expect(screen.queryByText(`Hello, ${string}!`)).toBeInTheDocument()
});
