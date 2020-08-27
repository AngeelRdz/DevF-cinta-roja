// const error = false

// const promiseTest = new Promise((resolve, reject) => {
//   if (!error) {
//     resolve('Cuando la promesa es resuelta')
//   } else {
//     reject('Cuando falla')
//   }
// })

// promiseTest
//   .then(resolve => {
//     console.log(resolve);
//   } )
//   .catch(error => {
//     console.log(error);
//   })

const request = require("request");
const URI = `https://pokeapi.co/api/v2`;

const getPokemonById = (id) => {
  return new Promise((resolve, reject) => {
    request.get(`${URI}/pokemon/${id}`, (error, response, body) => {
      if (response.statusCode === 200) {
        const body = JSON.parse(response.body);
        resolve(body.name);
      } else {
        reject(`Hubo un error. ${response.body}`);
      }
    });
  });
};

// getPokemonById('ditto')
//   .then(resolve => console.log(resolve))
//   .catch(error => console.log(error))

const axios = require("axios");

const getPokeById = (id) => {
  return axios.get(`${URI}/pokemon/${id}`);
};

getPokeById(18)
  .then((response) => {
    const statusCode = response.status;
    const body = response.data;
    console.log(body.name, statusCode);
  })
  .catch((error) => console.log(error));

const asyncPokeId = async () => {
  try {
    const response = await axios.get(`${URI}/pokemon/${id}`);
    if (response.status === 200) {
      const body = response.data;
      return body;
    } else {
      throw new Error("Mensaje de error");
    }
  } catch (error) {
    console.log(error.message);
  }
};

const getPokemoves = (pokemonId) => {
  return axios.get(`${URI}/pokemon/${pokemonId}`);
};

getPokemoves(1)
  .then((response) => {
    const movesNames = response.data.moves.map((move) => move.move.name);
    console.log("Moves::", movesNames);
  })
  .catch((error) => console.log(error));

const NASA_URI = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-08-22&end_date=2020-08-28&api_key=HwEmH0NlCV9i1NQsIYTae8dfi3embj0cUEpEYoYj`;

// const getDangerousAsteroids = () => {
//   return axios.get(`${NASA_URI}`);
// };

// getDangerousAsteroids()
//   .then((response) => {
//     const dataAsteroids = response.data;
//     const NEOArray = Object.values(dataAsteroids.near_earth_objects);
//     // console.log("Info::", NEOArray);
//     const flatDates = NEOArray.flat();
//     // console.log("Flat::", flatDates);
//     const dangerousAsteroids = flatDates.filter(
//       (asteroid) => asteroid.is_potentially_hazardous_asteroid
//     );
//     console.log("¿Cuales son peligrosos?::", dangerousAsteroids);
//     console.log("¿Cuales son los peligrosos?::", dangerousAsteroids.length);
//   })
//   .catch((error) => console.log(error.response.data.error_message));

const getDangerousAsteroidsExercise = () => {
  return axios.get(`${NASA_URI}`);
};

getDangerousAsteroidsExercise()
  .then((response) => {
    const dataAsteroids = response.data;
    // console.log(dataAsteroids);
    const NEOArray = Object.entries(dataAsteroids.near_earth_objects);
    console.log(NEOArray);
    const map = new Map(Object.entries(NEOArray));
    console.log(map);
    const map2 = new Map(Object.values(map.name));
    console.log(map2);
  })
  .catch((error) => console.log(error));