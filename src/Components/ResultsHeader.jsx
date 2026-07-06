import Dropdown from "./Dropdown";
import { SORT_OPTIONS } from "../data/constansts";
export default function ResultsHeader({
  onToggleSidebar,
  count,
  appliedSearch,
  sortBy,
  onSortBy,
}) {
  return (
    <div className="results-toolbar">
      <div className="results-title">
        {appliedSearch.city.length > 0 ? (
          <span>Doctors in {appliedSearch.city}</span>
        ) : (
          <span>Doctors in the world</span>
        )}
        <div className="results-sub">Showing {count} of 248 results</div>
      </div>
      <div className="toolbar-actions">
        <button
          className="btn btn-outline btn-lg filters-toggle-btn"
          onClick={onToggleSidebar}
        >
          🎛️ Filters
        </button>
        <div>
          <Dropdown value={sortBy} onChange={onSortBy} options={SORT_OPTIONS} />
        </div>
      </div>
    </div>
  );
}
