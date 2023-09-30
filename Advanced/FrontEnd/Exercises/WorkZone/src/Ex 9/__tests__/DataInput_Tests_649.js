import {fireEvent, render, screen, within} from '@testing-library/react';
import '@testing-library/jest-dom'
import DataInput from '../DataInput';
import {act} from "react-dom/test-utils";

const mostrarText = "Mostrar"
const alterarText = "Alterar"
const h3Text = "Insere a tua data de nascimento."

test('renders content', () => {
    render(<DataInput/>);
    expect(screen.getByRole("content")).toBeInTheDocument()
});

test('renders heading', () => {
    render(<DataInput/>);
    expect(screen.getByRole("heading")).toBeInTheDocument()
});

test('renders heading correctly', () => {
    render(<DataInput/>);
    expect(screen.getByRole("heading")).toHaveTextContent(h3Text)
});

test('renders button', () => {
    render(<DataInput/>);
    expect(screen.queryAllByRole("button")).toHaveLength(1)
});

test('renders input', () => {
    render(<DataInput/>);
    const content = screen.queryByRole("content")
    expect(content.children[0]).toBeInTheDocument()
});

test('input works', () => {
    const date = "2020-05-30"
    render(<DataInput/>);
    const content = screen.queryByRole("content")
    act(() => {
        fireEvent.change(content.children[0], {target: {value: date}})
    })
    expect(content.children[0].value).toBe(date)
});

test('button changes itself', () => {
    const date = "2020-05-30"
    render(<DataInput/>);
    expect(screen.getByRole("button")).toHaveTextContent(mostrarText)
    expect(screen.getByRole("button")).not.toHaveTextContent(alterarText)
    act(() => {
        screen.getByRole("button").click()
    })
    expect(screen.getByRole("button")).not.toHaveTextContent(mostrarText)
    expect(screen.getByRole("button")).toHaveTextContent(alterarText)
    act(() => {
        screen.getByRole("button").click()
    })
    expect(screen.getByRole("button")).toHaveTextContent(mostrarText)
});

test('button changes view', () => {
    const date = "2020-05-30"
    render(<DataInput/>);
    const content = screen.queryByRole("content")
    act(() => {
        fireEvent.change(content.children[0], {target: {value: date}})
        screen.getByRole("button").click()
    })
    expect(content.children[0]).toHaveTextContent("Nasceste no dia 30 do 05 de 2020!")
});

test('button changes view', () => {
    const date = "2005-12-19"
    render(<DataInput/>);
    const content = screen.queryByRole("content")
    act(() => {
        fireEvent.change(content.children[0], {target: {value: date}})
        screen.getByRole("button").click()
    })
    expect(content.children[0]).toHaveTextContent("Nasceste no dia 19 do 12 de 2005!")
    act(() => {
        screen.getByRole("button").click()
    })
    expect(content.children[0]).not.toHaveTextContent(/nasceste/i)
});