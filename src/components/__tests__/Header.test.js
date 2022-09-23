import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../Header";

beforeEach(() => {
    render(<Header />)
});

test('Header clock control', () => {
    const current = new Date();
    let hour = current.getHours().toString();
    let minutes = current.getMinutes().toString();
    const timer = screen.getByTestId("timer");

    expect(timer).toHaveTextContent(`${hour.length === 1 ? "0" + hour : hour}:${minutes.length === 1 ? "0" + minutes : minutes}`);
});

test('Header language button in the document control', () => {
    const langBtn = screen.getByTestId("lang-btn");
    expect(langBtn).toBeInTheDocument();
});