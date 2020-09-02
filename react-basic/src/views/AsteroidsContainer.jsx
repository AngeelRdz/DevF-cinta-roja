import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/App.css";
import AsteroidCard from "../components/AsteroidCard";

const AsteroidsContainer = () => {
  const [dangerousAsteroids, setDangerousAsteroids] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDAsteroids();
  }, []);

  const getDAsteroids = async () => {
    try {
      setLoading(true);
      const NASA_URI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-08-24&end_date=2020-08-30&api_key=7s0ep6LwhAf8zcd0EIQDjK1TptDPWvNUIRIXF1S8`;
      const response = await axios.get(NASA_URI);
      const NEOArr = Object.values(response.data.near_earth_objects);
      const flatDates = NEOArr.flat();
      const dangerousAsteroids = flatDates.filter(
        (asteroid) => asteroid.is_potentially_hazardous_asteroid
      );
      console.log(dangerousAsteroids);
      setLoading(false);
      setDangerousAsteroids(dangerousAsteroids);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div>
      <h1>ASTEROIDS</h1>
      <h2>Asteroides potencialmente peligrosos para la tierra</h2>
      <div>
        {loading ? (
          <h5>Cargando...</h5>
        ) : (
          dangerousAsteroids.map((asteroid) => {
            return (
              <div key={asteroid.id}>
                <h1> ID: {asteroid.id} </h1>
                <h1> NAME: {asteroid.name} </h1>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AsteroidsContainer;
