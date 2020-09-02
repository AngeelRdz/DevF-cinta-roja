import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/App.css";
import AsteroidCard from "../components/AsteroidCard";

const CardsContainer = () => {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    console.log("Al montar el componente de Asteroides");
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-08-01&end_date=2020-08-08&api_key=HwEmH0NlCV9i1NQsIYTae8dfi3embj0cUEpEYoYj"
      )
      .then((res) => {
        setAsteroids(res.data.near_earth_objects);
        const NEOEntries = Object.entries(res.data.near_earth_objects);
        console.log(NEOEntries);
        NEOEntries.forEach((array) => {
          const key = array[0];
          const value = array[1];
          const mappedNameAsteroids = value.map((asteroid) => asteroid.name);
          asteroids[key] = mappedNameAsteroids;
          console.log(key);
          console.log(value);
          console.log(mappedNameAsteroids);
        });
        console.log(asteroids);
      })
      .catch((err) => console.log(err));
    return () => {
      console.log("Al borrar el componente de Asteroides");
    };
  }, []);

  return (
    <div>
      <h1>ASTEROIDS</h1>
      <div>
        {Object.values(asteroids).map((asteroid) => (
          <AsteroidCard name={asteroid.name} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
