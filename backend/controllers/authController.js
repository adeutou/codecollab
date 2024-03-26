const bcrypt = require('bcrypt');
const User = require('../models/User');

// Controller function for user sign-up
const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
      // Check if user already exists
      let existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({
        username,
        email,
        password: hashedPassword
      });
  
      await newUser.save();
      
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'User not found' });
    }
};

// Controller function for user sign-in
const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
      // Find user by email
      const user = await User.findOne({ email });
      
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      res.status(200).json({ message: 'Sign-in successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
  signup,
  signin
};
