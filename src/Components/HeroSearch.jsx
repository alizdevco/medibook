import { memo, useState } from "react";

const HeroSearch = memo(function ({ onSearch }) {
  const [nameInput, setNameInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  function handleNameChange(e) {
    const value = e.target.value;
    setNameInput(value);
    if (value === "") {
      onSearch({ name: "", city: cityInput });
    }
  }
  function handleCityChange(e) {
    const value = e.target.value;
    setCityInput(value);
    if (value === "") {
      onSearch({ name: nameInput, city: "" });
    }
  }
  function handleSearchClick() {
    onSearch({ name: nameInput, city: cityInput });
  }
  return (
    <div className="hero-search">
      <div className="hero-search-field">
        <input
          type="text"
          placeholder="Search by doctor name or specialty"
          value={nameInput}
          onChange={handleNameChange}
        />
      </div>
      <div className="hero-search-divider"></div>
      <div className="hero-search-field">
        <input
          type="text"
          placeholder="City or ZIP"
          value={cityInput}
          onChange={handleCityChange}
        />
      </div>
      <button className="btn btn-default btn-lg" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
});
export default HeroSearch;
