import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/App.css";
import GifCard from "../components/CardGif";

const CardsContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState(["Pokemon"]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Al Montar el componente");
    getGifs();
    return () => {
      console.log("Al borrar el componente");
    };
  }, [query]);

  const getGifs = async () => {
    try {
      setLoading(true);
      const URL = `https://api.giphy.com/v1/stickers/search?q=${query}&api_key=7ejd73FIFeDTTXP814G3kYp9UameVcT7`;
      const res = await axios.get(URL);
      setGifs(res.data.data);
      setLoading(false);
      console.log(gifs);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleInput = (e) => {
    console.log("escribiendo..");
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>GIFS</h1>
      <h3>Buscando: {query}</h3>
      <input type="text" onChange={handleInput}></input>
      <div>
        {loading ? (
          <h5>Cargando...</h5>
        ) : (
          gifs.map((gif) => (
            <GifCard key={gif.id} src={gif.images.original.url} />
          ))
        )}
      </div>
    </div>
  );
};

export default CardsContainer;