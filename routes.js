const express = require("express");
const { createRaffle, listRaffles } = require("./controllers/raffle.controler");
// const { createTicket } = require("./controllers/ticket.controller");

const app = express.Router();

app.post("/raffles", createRaffle);
app.get("/raffles", listRaffles);
app.get("/raffles/:id");
app.post("/raffles/:raffle_id/tickets");
app.post("/raffles/:id/play");

module.exports = app;
