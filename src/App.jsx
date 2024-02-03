import { useEffect, useState } from "react";
import Search from "./components/Search";

const ENDPOINT_API = "https://rickandmortyapi.com/api/character";

function App() {
  const [characters, setCharacter] = useState([]);
  const [search, setSearch] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search) {
      fetch(`${ENDPOINT_API}?name=${search}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.results.length === 0) {
            setError(`No se encontro el personaje ${search}`);
          } else {
            setError(null);
            setCharacter(data.results);
          }
        })
        .catch((error) => {
          setError(`Hubor un error en la busqueda: ${error.message}`);
        });
    }
  }, [search]);

  const handleSearch = (searchTerms) => {
    setSearch(searchTerms);
    setError(null);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div>
        {error}
        {characters.map((character) => (
          <div key={character.id}>
            <div>{character.name}</div>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;
