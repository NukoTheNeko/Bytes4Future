import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Lista from "../Lista"

test('renders with title', () => {
    const itemsTest = []
    render(<Lista itens={itemsTest} titulo="TituloTest"/>);
    const title = screen.queryByRole("heading")
    expect(title).toBeInTheDocument()
});

test('renders without title', () => {
    const itemsTest = []
    render(<Lista itens={itemsTest}/>);
    const title = screen.queryByRole("heading")
    expect(title).not.toBeInTheDocument()
});

test('renders correct amount', () => {
    const itemsTest = ["akN 23", "kAb5", "ple)n8", "oas", "ririA8dn", "n5Fa0"]
    render(<Lista itens={itemsTest} titulo="sampleTitle"/>);
    const title = screen.queryByRole("heading")
    expect(title).toBeInTheDocument()

    const items = screen.queryAllByRole("listitem")
    expect(items.length).toBe(itemsTest.length)
});

test('renders list', () => {
    const itemsTest = ["akN 23", "kAb5", "ple)n8"]
    render(<Lista itens={itemsTest} titulo="sampleTitle"/>);
    const title = screen.queryByRole("heading")
    expect(title).toBeInTheDocument()

    const items = screen.queryAllByRole("listitem")
    const itemNames = items.map(item => item.textContent)
    expect(items.length).toBe(3)
    expect(itemNames).toEqual(itemsTest)
});
