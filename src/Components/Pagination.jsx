export default function Pagination({ currentPage, onCurrentPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  function handleNextPagination() {
    if (currentPage === totalPages) return;
    onCurrentPage(currentPage + 1);
  }
  function handlePrevPagination() {
    if (currentPage > 1) onCurrentPage(currentPage - 1);
  }
  return (
    <div className="pagination">
      <button
        className="btn btn-outline btn-icon-lg"
        onClick={handlePrevPagination}
      >
        ‹
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`btn btn-icon-lg ${page === currentPage ? "btn-default" : "btn-outline"}`}
          onClick={() => onCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      {totalPages > 5 ? (
        <>
          <span className="ellipsis">…</span>
          <button className="btn btn-outline btn-icon-lg"></button>
        </>
      ) : (
        ""
      )}

      <button
        className="btn btn-outline btn-icon-lg"
        onClick={handleNextPagination}
      >
        ›
      </button>
    </div>
  );
}
