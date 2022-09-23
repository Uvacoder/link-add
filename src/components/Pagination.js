import Button from "./Button";

export default function Pagination({ paginate, totalLinks, linksPerPage, currentPage }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalLinks / linksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex items-center justify-center py-4 gap-x-3" data-testid="paginate-btn">
            {pageNumbers.map(number => (
                <Button  key={number} onClick={() => paginate(number)} design={currentPage === number ? "primary" : "gray"}>{number}</Button>
            ))}
        </div>
    )
}