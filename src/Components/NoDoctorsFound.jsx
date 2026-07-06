
export default function NoDoctorsFound({ onClearFilters }) {
  return (
    <div className="empty-state">
      {/* Search/Doctor visual icon */}
      <svg
        className="empty-state-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        <path d="M16 12V10a4 4 0 0 0-8 0v2"></path>
      </svg>

      <h3 className="empty-state-title">No Doctors Found</h3>

      <p className="empty-state-desc">
        We couldn't find any doctors matching your search criteria. Try
        adjusting your filters or search term.
      </p>

      {/* Optional action button to reset search */}
      {onClearFilters && (
        <div className="empty-state-action">
          <button className="btn btn-default" onClick={onClearFilters}>
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
