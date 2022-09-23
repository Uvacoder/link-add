import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

beforeEach(() => {
    render(<App />)
});

test("New link add and list check", () => {
    const newLinkAddBtn = screen.getByTestId("new-link-add-dialog-btn");
    const inputField = screen.getByPlaceholderText('Link...');
    const saveBtn = screen.getByTestId("new-link-add-save-btn");
    const listItemText = screen.getByTestId("list-item-text");

    userEvent.click(newLinkAddBtn);

    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveDisplayValue('asdasd');

    userEvent.type(inputField, "https://gizilenerji.com");
    expect(inputField).toHaveDisplayValue("https://gizilenerji.com");

    userEvent.click(saveBtn);

    expect(listItemText).toHaveTextContent("https://gizilenerji.com");

});