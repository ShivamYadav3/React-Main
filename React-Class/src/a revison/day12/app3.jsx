import React, { useState, useEffect } from "react";
import axios from "axios";

const App3 = () => {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        nextPage || "https://swapi.dev/api/people"
      );
      setCharacters((prevCharacters) => [
        ...prevCharacters,
        ...response.data.results,
      ]);
      setNextPage(response.data.next);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.url}>
            <a href={`/characters/${character.url.split("/").slice(-2, -1)}`}>
              {character.name}
            </a>
          </li>
        ))}
      </ul>
      {nextPage && <button onClick={fetchCharacters}>Load More</button>}
    </div>
  );
};

export default App3;
