import { useEffect, useState } from "react";
import Search from "./components/Search";

const ENDPOINT_API = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCharacter] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (search) {
      fetch(`${ENDPOINT_API}?name=${search}`)
        .then((res) => res.json())
        .then((data) => setCharacter(data.results));
    }
  }, [search]);

  const handleSearch = (searchTerms) => {
    setSearch(searchTerms);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div>
        {characters.map((character) => (
          <div key={character.id}>
            <div>{character.name}</div>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
