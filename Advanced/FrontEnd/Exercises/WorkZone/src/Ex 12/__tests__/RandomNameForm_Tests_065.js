import {act, fireEvent, render, screen, within} from '@testing-library/react';
import '@testing-library/jest-dom'
import TwoLists from "../TwoLists"

test('renders input', () => {
    render(<TwoLists/>);
    const inputs = screen.queryAllByRole("textbox");
    expect(inputs).toHaveLength(1)
});

test('renders input buttons', () => {
    render(<TwoLists/>);
    expect(screen.queryByText("Adicionar nome")).toBeInTheDocument()
    expect(screen.queryByText("Adicionar apelido")).toBeInTheDocument()
});

test('input changes value', () => {
    render(<TwoLists/>);
    const input = screen.getByRole("textbox");
    act(() => {
        fireEvent.change(input, {target: {value: "Hey"}})
    })
    expect(input).toHaveValue("Hey")
});

test('2 empty lists on start', () => {
    render(<TwoLists/>);
    const lists = screen.queryAllByRole("list")
    const listItems = screen.queryAllByRole("listitem")
    expect(lists).toHaveLength(2)
    expect(listItems).toHaveLength(0)
});

test('adds elements to the correct lists', () => {
    render(<TwoLists/>);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, {target: {value: "aloevera"}})

    act(() => {
        screen.queryByText("Adicionar nome").click()
    })

    const listItems = screen.queryAllByRole("listitem")
    expect(listItems).toHaveLength(1)

    fireEvent.change(input, {target: {value: "item2"}})
    act(() => {
        screen.queryByText("Adicionar nome").click()
    })

    fireEvent.change(input, {target: {value: "yahoo"}})
    act(() => {
        screen.queryByText("Adicionar apelido").click()
    })

    fireEvent.change(input, {target: {value: "enwosj2"}})
    act(() => {
        screen.queryByText("Adicionar nome").click()
    })

    expect(screen.queryAllByRole("listitem")).toHaveLength(4)

    expect(within(screen.queryAllByRole("list")[1]).queryAllByRole("listitem")).toHaveLength(1)
    expect(within(screen.queryAllByRole("list")[0]).queryAllByRole("listitem")).toHaveLength(3)
});

test('generates name on click', () => {
    const names = ["Name1", "Name2", "Name3", "Name4", "Name5", "Name6"]
    const surnames = ["Sur1", "Sur2", "Sur3", "Sur4", "Sur5"]
    render(<TwoLists/>);
    const input = screen.getByRole("textbox");

    for (let i = 0; i < names.length; i++) {
        fireEvent.change(input, {target: {value: names[i]}})
        act(() => {
            screen.queryByText("Adicionar nome").click()
        })
    }
    expect(screen.queryAllByRole("listitem")).toHaveLength(6)

    for (let i = 0; i < surnames.length; i++) {
        fireEvent.change(input, {target: {value: surnames[i]}})
        act(() => {
            screen.queryByText("Adicionar apelido").click()
        })
    }
    expect(screen.queryAllByRole("listitem")).toHaveLength(11)
    expect(screen.queryByRole("name")).not.toBeInTheDocument()
    act(() => {
        screen.getByText("Gerar Nome").click()
    })
    expect(screen.queryByRole("name")).toBeInTheDocument()
    expect(screen.queryAllByRole("name")).toHaveLength(1)
});

test('generates random name', () => {
    const names = ["Name1", "Name2", "Name3", "Name4", "Name5", "Name6"]
    const surnames = ["Sur1", "Sur2", "Sur3", "Sur4", "Sur5"]
    render(<TwoLists/>);
    const input = screen.getByRole("textbox");
    for (let i = 0; i < names.length; i++) {
        fireEvent.change(input, {target: {value: names[i]}})
        act(() => {
            screen.queryByText("Adicionar nome").click()
        })
    }
    let generatedNames = []
    for (let i = 0; i < surnames.length; i++) {
        fireEvent.change(input, {target: {value: surnames[i]}})
        act(() => {
            screen.queryByText("Adicionar apelido").click()
        })
    }
    for (let i = 0; i < 10; i++) {
        act(() => {
            screen.getByText("Gerar Nome").click()
        })
        const generatedName = screen.getByRole("name").textContent.split(" ")
        expect(names.includes(generatedName[0])).toBeTruthy()
        expect(surnames.includes(generatedName[1])).toBeTruthy()
        generatedNames.push(screen.getByRole("name").textContent)
    }

    //To make sure not all names are the same
    let uniqueNames = new Array(...new Set(generatedNames))
    expect(uniqueNames.length).toBeGreaterThan(1)
});