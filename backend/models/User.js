const mongoose = require('mongoose');
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Cant't be blank"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, "invalid email"],
  },
  password: {
    type: String,
    required: [true, "Cant't be blank"],
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
