import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/App.css";
import GifCard from "../components/CardGif";

const CardsContainer = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log("Al montar el componente");
    axios
      .get(
        "https:api.giphy.com/v1/gifs/trending?api_key=1fo0cB8hZFaSAMxIiPB6J5ihSiGki2Hp"
      )
      .then((res) => {
        setGifs(res.data.data);
        // console.log(gifs);
      })
      .catch((err) => console.log(err));
    return () => {
      console.log("Al borrar el componente");
    };
  }, []);

  return (
    <div>
      <h1>GIFS</h1>
      <div>
        {gifs.map((gif) => (
          <GifCard key={gif.id} src={gif.images.original.url} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
