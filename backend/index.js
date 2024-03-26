const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

//Connect to MongoDB Atlas with updated options
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));

//Routes

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});