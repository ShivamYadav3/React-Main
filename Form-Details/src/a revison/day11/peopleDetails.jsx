import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function PeopleDetails() {
  const data = useLocation();
  const species = data.state;
  const [details, setDetails] = useState([]);

  const multiAPICalls = async (data) => {
    const promises = data.map((u) => axios.get(u));
    const results = await Promise.allSettled(promises);

    return results.map((result) =>
      result.status === "fulfilled" ? result.value : null
    );
  };

  useEffect(() => {
    const dynamicSpecies = multiAPICalls(species.people);
    dynamicSpecies.then((data) => {
      setDetails(data);
      console.log(data);
    });
  }, []);
  return (
    <div>
      {species && (
        <div>
          <div>{species.name}</div>
        </div>
      )}
      {details.length > 0 && (
        <div>
          <div>
            {details.map((item, i) => {
              return (
                <div key={i} className="border">
                  <div>name : {item.data.name}</div>
                  <div>Birth : {item.data.birth_year}</div>

                  {/* <div>SpaceShips : {item.data.starships}</div> */}
                  <div>
                    Films :{" "}
                    {item.data.films
                      .map((data) => data[data.length - 2])
                      .map((data) => {
                        if (data == 1) {
                          return "A New Hope, ";
                        }
                        if (data == 2) {
                          return "The Empire Strikes Back, ";
                        }
                        if (data == 3) {
                          return "Return of the Jedi, ";
                        }
                        if (data == 4) {
                          return "The Phantom Menace, ";
                        }
                        if (data == 5) {
                          return "Attack of the Clones, ";
                        }
                        if (data == 6) {
                          return "Revenge of the Sith, ";
                        } else {
                          return "new";
                        }
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default PeopleDetails;
