import { useEffect, useRef, useState } from "react";

export default function Dropdown({
  value,
  onChange,
  options,
  placeholder = "Select",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const normalized = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt,
  );

  const selectedLabel = normalized.find((o) => o.value === value)?.label;

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(option) {
    onChange(option.value);
    setIsOpen(false);
  }

  return (
    <div className="dropdown" ref={ref}>
      <div className="select-row" onClick={() => setIsOpen((o) => !o)}>
        <span>{selectedLabel || placeholder}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <div
            className={`dropdown-option ${!value ? "active" : ""}`}
            onClick={() => {
              onChange(null);
              setIsOpen(false);
            }}
          >
            {placeholder}
          </div>
          {normalized.map((opt) => (
            <div
              key={opt.value}
              onClick={() => handleSelect(opt)}
              className={`dropdown-option ${opt.value === value ? "active" : ""}`}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
