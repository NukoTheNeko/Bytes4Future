import {act, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import PasswordInput from '../PasswordInput';

const weak = "Password Fraca";
const normal = "Password Média";
const strong = "Password Forte";

test('renders input', () => {
    render(<PasswordInput/>);
    expect(screen.getByRole("input")).toBeInTheDocument()
});
test('feedback is not rendered initially', () => {
    render(<PasswordInput/>);
    expect(screen.queryByRole("feedback")).not.toBeInTheDocument()
});
test('input changes value', () => {
    render(<PasswordInput/>);
    act(() => {
        fireEvent.change(screen.getByRole("input"), {target: {value: "hey"}})
    })
    expect(screen.getByRole("input")).toHaveValue("hey")
});
test('input is password', () => {
    render(<PasswordInput/>);
    act(() => {
        fireEvent.change(screen.getByRole("input"), {target: {value: "hey"}})
    })
    expect(screen.getByRole("input")).toHaveAttribute("type", "password")
});
test('shows feedback', () => {
    render(<PasswordInput/>);
    act(() => {
        fireEvent.focus(screen.getByRole("input"))
        fireEvent.change(screen.getByRole("input"), {target: {value: "hey"}})
    })
    expect(screen.getByRole("feedback")).toBeInTheDocument()
});

test('shows feedback - weak', () => {
    render(<PasswordInput/>);
    act(() => {
        fireEvent.focus(screen.getByRole("input"))
        fireEvent.change(screen.getByRole("input"), {target: {value: "hey"}})
    })
    expect(screen.getByRole("feedback")).toHaveTextContent(weak)
});
test('shows feedback - normal', () => {
    render(<PasswordInput/>);
    act(() => {
        fireEvent.focus(screen.getByRole("input"))
        fireEvent.change(screen.getByRole("input"), {target: {value: "hAnad2oa"}})
    })
    expect(screen.getByRole("feedback")).toHaveTextContent(normal)
});
test('shows feedback - strong', () => {
    render(<PasswordInput/>);
    act(() => {
        fireEvent.focus(screen.getByRole("input"))
        fireEvent.change(screen.getByRole("input"), {target: {value: "asdijsadwansa"}})
    })
    expect(screen.getByRole("feedback")).toHaveTextContent(strong)
});