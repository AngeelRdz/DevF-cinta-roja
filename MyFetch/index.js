const axios = require("axios");

const fetchMyApi = () => {
  return axios.get(`http://localhost:9000/pet/Pote/Gunter`);
};

fetchMyApi()
  .then((response) => {
    const statusCode = response.status;
    console.log(response.data);
    return response.data;
  })
  .catch((error) => console.log(error.message));
