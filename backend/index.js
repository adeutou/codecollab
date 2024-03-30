const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();
var cookieParser = require("cookie-parser");

const errorHandler = require("./middleware/error");

//import routes
const authRoutes = require("./routes/authRoutes");
const postRoute = require("./routes/postRoute");

//database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.error("Erreur de connexion à MongoDB", err));

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
  })
);
app.use(cookieParser());
app.use(cors());

//ROUTES MIDDLEWARE
app.use("/api", authRoutes);
app.use("/api", postRoute);

//error middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
