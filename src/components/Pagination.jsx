import "./Pagination.css";

const Pagination = ({
  currentPage,
  totalPages,
  pageSize,
  setPageSize,
  setCurrentPage,
}) => {
  return (
    <div className="pagination">
      <div className="page-size">
        <label>Rows per page:</label>

        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>

      </div>

      <div className="page-buttons">

        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        <span>
          {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default Pagination;