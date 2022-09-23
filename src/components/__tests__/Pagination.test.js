import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination from "../Pagination";


test('Pagination Check', () => {
    render(<Pagination linksPerPage={5} totalLinks={10} currentPage={1} />);
    const el = screen.getByTestId("paginate-btn");
    expect(el).toBeInTheDocument();
});

