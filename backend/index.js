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
const tutoRoutes = require("./routes/tutoRoutes")
const postRoute = require("./routes/postRoute");
const codeSnippetRoutes = require('./routes/codeSnippetRoutes');
const newsletterRoutes = require('./routes/newsLetterRoute');

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
app.use('/api', codeSnippetRoutes);
app.use('/api', newsletterRoutes);
app.use('/api', tutoRoutes); 


//error middleware
app.use(errorHandler);

//port
const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
