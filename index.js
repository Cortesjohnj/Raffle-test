const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());
app.use(routes);

mongoose.connect(
  "mongodb+srv://dbUser:Prueba123@cluster0.x8pis.mongodb.net/dbUser",

  console.log("Connected!")
);

mongoose.connection.on("error", function (e) {
  console.error(e);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
