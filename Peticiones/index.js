const request = require("request");

const URI = "https://pokeapi.co/api/v2/";

const getDitto = () => {
  //   console.log(request);
  request.get(`${URI}/pokemon/ditto`, (error, response, body) => {
    // console.log(response);
    // console.log(response.statusCode)
    if (response.statusCode === 200) {
      const parsedJson = JSON.parse(response.body);
      console.log(parsedJson);
      console.log(parsedJson.name);
    } else {
      console.log(`Hubo un error de código: ${response.statusCode}`);
    }
  });
};

getDitto();

// Crear función "getPokemonById" que reciba como parametro el nombre del pokemon y lo busque

const getPokemonById = (pokemonId) => {
  request.get(`${URI}/pokemon/${pokemonId}`, (error, response, body) => {
    if (response.statusCode === 200) {
      const parsedJson = JSON.parse(response.body);
      console.log(`Información pokemon:`, parsedJson);
    } else {
      console.log(`Hubo un error de código: ${response.statusCode}`);
    }
  });
};

getPokemonById("bulbasaur");

// Crear función "getPokemonTypes" e imprimirlos en la consola

const getPokemonTypes = () => {
  request.get(`${URI}/type`, (error, response, body) => {
    if (response.statusCode === 200) {
      const parsedJson = JSON.parse(response.body);
      //   console.log(`Tipos de pokemon:`, parsedJson);
      const typesPokemon = parsedJson.results;
      //   console.log(typesPokemon);
      const mappedJson = typesPokemon.map((namePokemon) => namePokemon.name);
      console.log("Tipos de pokemon:", mappedJson);
    } else {
      console.log(`Hubo un error de código: ${response.statusCode}`);
    }
  });
};

getPokemonTypes();

const getPokemonMoves = (pokemonId) => {
  request.get(`${URI}/pokemon/${pokemonId}`, (error, response, body) => {
    if (response.statusCode === 200) {
      const parsedJson = JSON.parse(response.body);
      const movesNames = parsedJson.moves.map((move) => move.move.name);
      console.log(movesNames);
    } else {
      console.log(`Hubo un error de código: ${response.statusCode}`);
    }
  });
};

// NASA

const NASA_URI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-08-01&end_date=2020-08-08&api_key=HwEmH0NlCV9i1NQsIYTae8dfi3embj0cUEpEYoYj`;

const getDangerousAsteroids = () => {
  request.get(`${NASA_URI}`, (error, response) => {
    if (response.statusCode === 200) {
      const body = JSON.parse(response.body);

      const NEOArr = Object.values(body.near_earth_objects);
      // Objeto inicial, tomamos solo los valores del objeto y lo guardamos en la variable NEOArr
      // const near_earth_objects = {
      //   '2020-08-24': [],
      //   '2020-08-25': []
      // }

      const flatDates = NEOArr.flat();
      // console.log("flatDates", flatDates);
      //[[{},{},{}], [{},{},{}], [{},{},{}]] => [{},{},{}, {},{},{}, {},{},{}]

      const dangerousAsteroids = flatDates.filter(
        (asteroid) => asteroid.is_potentially_hazardous_asteroid
      );
      //arreglo filtrado

      console.log(dangerousAsteroids);
    } else {
      console.log(`Hubo un error. Código: ${response.statusCode}`);
      console.log(error, response);
    }
  });
};

getDangerousAsteroids();
