import {act, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import HelloInput from '../HelloInput';

const buttonText = "Apresentar"

test('renders input', () => {
    render(<HelloInput/>);
    expect(screen.getByRole("textbox")).toBeInTheDocument()
});

test('inputs changes value', () => {
    const string = "nSo2mjjA"
    render(<HelloInput/>);
    expect(screen.getByRole("textbox").value).toBe("")
    act(() => {
        fireEvent.change(screen.getByRole("textbox"), {target: {value: string}})
    })
    expect(screen.getByRole("textbox").value).toBe(string)
});

test('has button', () => {
    render(<HelloInput/>);
    expect(screen.queryAllByRole("button")).toHaveLength(1)
    expect(screen.getByRole("button")).toHaveTextContent(buttonText)
});

test('button click shows text and removes button', () => {
    const inputString = "GnaoE0xo"
    const expected = `Hello, ${inputString}!`
    render(<HelloInput/>);
    act(() => {
        fireEvent.change(screen.getByRole("textbox"), {target: {value: inputString}})
    })
    expect(screen.queryByText(expected)).not.toBeInTheDocument()
    act(() => {
        screen.getByRole("button").click()
    })
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
    expect(screen.queryByText(expected)).toBeInTheDocument()
});