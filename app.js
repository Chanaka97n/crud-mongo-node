const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//middlwares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

//Connect
mongoose.connect(process.env.DB_CONN, () => console.log("Connected to db"));

//How to we start Listening to the server
app.listen(3000);
