const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//ROUTES//

//Create a ToDo

//Get all todo

//get a Todo

//update a todo

//delete a todo

app.listen(8080, () => {
  console.log("Listining on 8080");
});
