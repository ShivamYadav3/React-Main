import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const App2 = () => {
  const [speciesData, setSpeciesData] = useState({});
  const [peopleData, setPeopleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  console.log("re");

  const fetchData = useCallback(async (url) => {
    try {
      const response = await axios.get(url);
      setSpeciesData(response.data);
      setPeopleData(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData(`https://swapi.dev/api/species?page=${currentPage}`);
  }, [currentPage]);

  const handleNextClick = () => {
    if (nextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (prevPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>Star Wars Species Data</h1>
      <div style={styles.cardContainer}>
        {peopleData.map((species, index) => (
          <div key={index} style={styles.card}>
            <Link to={`/people-details`} state={species}>
              <h2>Name: {species.name}</h2>
            </Link>
          </div>
        ))}
      </div>

      <div style={styles.buttonContainer}>
        <button onClick={handlePrevClick} disabled={!prevPage}>
          Previous
        </button>
        <button onClick={() => setCurrentPage(1)}>1</button>
        <button onClick={() => setCurrentPage(2)}>2</button>
        <button onClick={() => setCurrentPage(3)}>3</button>
        <button onClick={() => setCurrentPage(4)}>4</button>
        <button onClick={handleNextClick} disabled={!nextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    width: "300px",
  },
  buttonContainer: {
    marginTop: "20px",
  },
};

export default App2;
