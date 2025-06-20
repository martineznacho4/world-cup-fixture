require("dotenv").config();
const express = require("express");
const cors = require("cors");

const teams = require("./teams.js");
const matches = require("./matches.js");

const app = express();

app.use(cors());

app.use(express.static("dist"));

//chequear que ambos endpoints funcionan

// all days
app.get("/api/matches", (request, response) => {
  response.send(matches);
});

// all teams
app.get("/api/teams", (request, response) => {
  response.send(teams);
});

//team by id
app.get("/api/teams/:id", (request, response) => {
  response.send(teams.find((team) => team.id.toString() === request.params.id));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server initialized on port: ${PORT}`);
});
