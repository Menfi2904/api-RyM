import { useState } from "react";

export default function Search({ onSearch }) {
  const [searchTerms, setSearchTerms] = useState("");

  const handleInputChange = (event) => {
    setSearchTerms(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerms);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Introduce el nombre de algun personaje"
        id="input"
        name="search"
        value={searchTerms}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchClick}>Buscar</button>
    </div>
  );
}
