// Loading Modules
const express = require("express");
const dotenv = require("dotenv");
const projectRoutes = require("./Router/projectroutes.js");
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT || 8080;

//Creating an express app
const app = express();

//Request Logger
app.use((req, res, next) => {
  console.log(`Processing request for ${req.url}...`);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
//Routes
app.use(projectRoutes);

//Listening to the server
app.listen(PORT, (req, res) => {
  console.log(`Server Started on http://localhost:${PORT}`);
});
