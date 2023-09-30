import {act, fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Comments from "../Comments"

test('renders form', () => {
    const comments = [
        {
            postedBy: "ola",
            text: "Gostei muito! SUB!",
            date: new Date(1212125404539),
            likes: 9
        },
        {
            postedBy: "Ricardete",
            text: "Vai mas é trabalhar!",
            date: new Date(1350000000000),
            likes: 1
        }
    ]
    render(<Comments user={{username: "ola", email: "adeus"}} comments={comments}/>);
    const form = screen.queryByRole("form")
    const input = screen.queryByRole("textbox")
    const button = screen.queryByRole("button")
    expect(form).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
});

test('renders paragraphs', () => {
    const comments = [
        {
            postedBy: "ola",
            text: "Gostei muito! SUB!",
            date: new Date(1212125404539),
            likes: 9
        },
        {
            postedBy: "Ricardete",
            text: "Vai mas é trabalhar!",
            date: new Date(1350000000000),
            likes: 1
        }
    ]
    render(<Comments user={{username: "ola", email: "adeus"}} comments={comments}/>);
    const commentBy = screen.queryAllByText(/Por:/)
    expect(commentBy).toHaveLength(2)

    const commentWhen = screen.queryAllByText(/Em:/)
    expect(commentWhen).toHaveLength(2)
});

test('renders paragraphs with text', () => {
    const comments = [
        {
            postedBy: "ola",
            text: "Gostei muito! SUB!",
            date: new Date("10-05-21")
        },
        {
            postedBy: "Ricardete",
            text: "Vai mas é trabalhar!",
            date: new Date("07-10-20")
        }
    ]
    render(<Comments user={{username: "ola", email: "adeus"}} comments={comments}/>);
    const commentBy = screen.queryAllByText(/Por:/)
    expect(commentBy[0]).toHaveTextContent(/Por: ola/)

    const commentWhen = screen.queryAllByText(/Em:/)
    expect(commentWhen[1]).toHaveTextContent(`Em: ${comments[1].date.toString().slice(0, 15)}`)

    expect(screen.queryByText(comments[1].text)).toBeInTheDocument()
});

test('can change inputs value', () => {
    const comments = [
        {
            postedBy: "ola",
            text: "Gostei muito! SUB!",
            date: new Date("10-05-21")
        },
        {
            postedBy: "Ricardete",
            text: "Vai mas é trabalhar!",
            date: new Date("07-10-20")
        }
    ]
    render(<Comments user={{username: "ola", email: "adeus"}} comments={comments}/>);
    const input = screen.getByRole("textbox")
    expect(input.value).toBe("")
    act(() => {
        fireEvent.change(input, {target: {value: 'Good Day'}})
    })
    expect(input.value).toBe("Good Day")
});

test('form adds new comment', () => {
    const comments = [
        {
            postedBy: "ola",
            text: "Gostei muito! SUB!",
            date: new Date("10-05-21")
        }
    ]
    render(<Comments user={{username: "testeName", email: "adeus"}} comments={comments}/>);
    const commentsList = screen.queryAllByText(/Por:/)
    const input = screen.getByRole("textbox")
    const button = screen.queryByRole("button")
    expect(commentsList.length).toBe(1)
    act(() => {
        fireEvent.change(input, {target: {value: 'commentexample'}})
        button.click()
    })
    expect(screen.queryAllByText(/Por:/).length).toBe(2)

});

test('form resets after', () => {
    const comments = [
        {
            postedBy: "ola",
            text: "Gostei muito! SUB!",
            date: new Date("10-05-21")
        },
        {
            postedBy: "Ricardete",
            text: "Vai mas é trabalhar!",
            date: new Date("07-10-20")
        }
    ]
    render(<Comments user={{username: "testeName", email: "adeus"}} comments={comments}/>);
    const input = screen.getByRole("textbox");
    const button = screen.queryByRole("button");
    act(() => {
        fireEvent.change(input, {target: {value: 'commentexample'}});
    });
    expect(screen.queryByRole("textbox").value).toBe('commentexample');
    act(() => {
        button.click();
    })
    expect(screen.queryByRole("textbox").value).toBe('');
});