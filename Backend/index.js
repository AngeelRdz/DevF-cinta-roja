const express = require("express");

const app = express();

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Aplicación inicializada en el puerto: ${PORT}`);
});

app.get("/api/saludo", (request, response) => {
  response.send({ message: "Hola" });
});

app.get("/api/despedida", (request, response) => {
  response.send({ message: "Adiós" });
});

// Parametro en URL
// http://localhost:3000/mascota/Pote
app.get("/mascota/:name", (req, res) => {
  const { name } = req.params;
  console.log(req.params);
  res.send({ petName: name });
});

// Query en URL
// http://localhost:3000/pet/search?search_query=Pote=perro&Camila=perro&search_query=bailando
app.get("/pet/search?", (req, res) => {
  const { search_query } = req.query;
  res.send({ search_query: search_query });
});

app.get("/pet/:name/:owner/", (req, res) => {
  const { name, owner } = req.params;

  res.send({ msg: `Dueño de ${name} es ${owner}` });
});
