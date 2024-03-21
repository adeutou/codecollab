const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONG_URI)
  .then(console.log("Connecting to db "))

  .catch((error) => {
    console.log(error);
  });

