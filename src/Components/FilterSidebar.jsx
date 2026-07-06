import { memo, useCallback } from "react";
import { SPECIALTIES, CITIES, INSURANCES } from "../data/constansts";
import Dropdown from "./Dropdown";
const FilterSidebar = memo(function ({ filters, initialValue, isOpen }) {
  const handleMinRating = useCallback(
    function (val) {
      return filters.setMinRating(val);
    },
    [filters.setMinRating],
  );
  return (
    <div className={`filter-sidebar ${isOpen ? "mobile-open" : ""}`}>
      <div className="filter-sidebar-head">
        <h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sliders-horizontal size-4 text-primary"
            aria-hidden="true"
          >
            <path d="M10 5H3"></path>
            <path d="M12 19H3"></path>
            <path d="M14 3v4"></path>
            <path d="M16 17v4"></path>
            <path d="M21 12h-9"></path>
            <path d="M21 19h-5"></path>
            <path d="M21 5h-7"></path>
            <path d="M8 10v4"></path>
            <path d="M8 12H3"></path>
          </svg>
          Filters
        </h2>
        <button className="clear-all-btn" onClick={() => initialValue()}>
          clear all
        </button>
      </div>
      <div className="filter-group">
        <SpecialtyCheckBox filters={filters} />
      </div>
      <div className="filter-group">
        <SelectCity filters={filters} />
      </div>
      <div className="filter-group">
        <Insurance filters={filters} />
      </div>
      <div className="filter-group">
        <RangeSlider
          value={filters.minRating}
          onChange={handleMinRating}
          min={0}
          max={5}
        />
      </div>
      <div className="filter-group">
        <Availability filters={filters} />
      </div>
    </div>
  );
});
function SpecialtyCheckBox({ filters }) {
  function toggleSpecialty(item) {
    filters.setSpecialty((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item],
    );
  }
  return (
    <>
      <h3 className="filter-group-title">Specialty</h3>
      {SPECIALTIES.map((item) => (
        <label key={item} className="check-row">
          <input
            type="checkbox"
            checked={filters.specialty.includes(item)}
            onChange={() => toggleSpecialty(item)}
          />
          <div className="check-box">
            {filters.specialty.includes(item) && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <span>{item}</span>
        </label>
      ))}
    </>
  );
}
function SelectCity({ filters }) {
  return (
    <>
      <h3 className="filter-group-title">city</h3>

      <Dropdown
        value={filters.city}
        onChange={filters.setCity}
        options={CITIES}
        placeholder="All cities"
      />
    </>
  );
}
function Insurance({ filters }) {
  function toggleInsurance(item) {
    filters.setInsurance((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item],
    );
  }
  return (
    <>
      <h3 className="filter-group-title">Insurance</h3>
      {INSURANCES.map((item) => (
        <label key={item} className="check-row">
          <input
            type="checkbox"
            checked={filters.insurance.includes(item)}
            onChange={() => toggleInsurance(item)}
          />
          <div className="check-box">
            {filters.insurance.includes(item) && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <span>{item}</span>
        </label>
      ))}
    </>
  );
}
const RangeSlider = memo(function ({ value, onChange, min = 0, max = 100 }) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="range-slider">
      <h3 className="filter-group-title">Minimum rating</h3>
      <div className="range-track">
        <div className="range-fill" style={{ width: `${percentage}%` }} />
        <div className="range-thumb" style={{ left: `${percentage}%` }} />
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0,
            cursor: "pointer",
            width: "100%",
          }}
        />
      </div>
      <span className="range-value">{value}</span>
    </div>
  );
});
function Availability({ filters }) {
  return (
    <>
      <h3 className="filter-group-title">Availability</h3>
      <div
        className="toggle-row"
        onClick={() => filters.setAvailableOnly((x) => !x)}
      >
        <span className="label">Available only</span>
        <div className={`switch ${filters.availableOnly ? "on" : ""} `}>
          <div className="switch-knob" />
        </div>
      </div>
    </>
  );
}
export default FilterSidebar;
