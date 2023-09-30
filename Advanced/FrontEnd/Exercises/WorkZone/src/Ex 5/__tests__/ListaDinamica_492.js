import {act, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import React from "react";
import {render, unmountComponentAtNode} from "react-dom";

import ListaComApagar from "../ListaComApagar";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


it("renders headings", async () => {
    const testArray = [
        {
            name: "alface",
            price: 204.35,
            key: 1994
        },
        {
            name: "carrinho de compras",
            price: 2,
            key: 1222
        },
        {
            name: "teste4",
            price: 1.1,
            key: 2020
        }
    ]
    act(() => {
        render(<ListaComApagar itens={testArray}/>, container);
    });

    //renders h3
    const titles = await screen.findAllByRole("heading")
    const testArrayTitles = testArray.map(i => {
        return i.name
    })
    const titlesNames = titles.map(t => t.innerHTML)
    expect(titlesNames).toEqual(testArrayTitles)
});

it("renders text contents", async () => {
    const testArray = [
        {
            name: "alface",
            price: 204.35,
            key: 1994
        },
        {
            name: "carrinho de compras",
            price: 2,
            key: 1222
        },
        {
            name: "teste4",
            price: 1.1,
            key: 2020
        }
    ]
    act(() => {
        render(<ListaComApagar itens={testArray}/>, container);
    });

    //renders paragraphs (prices)
    const testArrayPrices = testArray.map(i => {
        return `${i.price} €`
    })
    const paragraphs = await screen.findAllByText(/€/i)
    expect(paragraphs).toHaveLength(3)
    for (let i = 0; i < paragraphs.length; i++) {
        expect(paragraphs[i].innerHTML).toBe(testArrayPrices[i])
    }
});

it("renders buttons", async () => {
    const testArray = [
        {
            name: "alface",
            price: 204.35,
            key: 1994
        },
        {
            name: "carrinho de compras",
            price: 2,
            key: 1222
        },
        {
            name: "teste4",
            price: 1.1,
            key: 2020
        }
    ]
    act(() => {
        render(<ListaComApagar itens={testArray}/>, container);
    });

    //renders buttons
    const buttons = await screen.findAllByRole("button")
    expect(buttons).toHaveLength(3)
});

it("deletes sucessfuly", async () => {
    const testArray = [
        {
            name: "alface",
            price: 204.35,
            key: 1994
        },
        {
            name: "carrinho de compras",
            price: 2,
            key: 1222
        },
        {
            name: "teste4",
            price: 1.1,
            key: 2020
        }
    ]
    act(() => {
        render(<ListaComApagar itens={testArray}/>, container);
    });

    //3 buttons
    const buttons = await screen.findAllByRole("button")
    expect(buttons).toHaveLength(3)

    //delete middle item
    act(() => {
        buttons[1].click()
    });
    const buttons2 = await screen.findAllByRole("button")

    //now 2 buttons
    expect(buttons2).toHaveLength(2)

    //check if it deletes middle item
    const titles = await screen.findAllByRole("heading")
    expect(titles).toHaveLength(2)
    let testArrayTitles = [];
    testArray.forEach((ele, i) => {
        if (i !== 1) testArrayTitles.push(ele.name)
    })
    const titlesNames = titles.map(t => t.innerHTML)
    expect(titlesNames).toEqual(testArrayTitles)

});