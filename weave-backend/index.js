// Loading Modules
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const createError = require("http-errors");
const projectRoutes = require("./Router/projectroutes.js");
const cors = require("cors");
const cookieparser = require("cookie-parser");
dotenv.config();
const PORT = process.env.PORT || 8080;

//Creating an express app
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieparser());

//Routes
app.use(projectRoutes);
app.use("/api/v1/user", require("./Router/login.js"));

//Error middleware
app.use((req, res, next) => {
  next(createError.NotFound());
});

//Listening to the server
app.listen(PORT, (req, res) => {
  console.log(`Server Started on http://localhost:${PORT}`);
});
