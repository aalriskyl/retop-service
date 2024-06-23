const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Secret key for JWT token
const JWT_SECRET = process.env.JWT_SECRET || 'your_default_secret_key';

// Register new user
exports.createUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const user = new User({ name, password: hashedPassword });

    // Save the user to the database
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Internal Server Error');
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { name, password } = req.body;
  const dataUser = await User.findOne({ $or: [{ name: name }] });
  
  if (dataUser) {
    // if the username exists
    const passwordUser = await bcrypt.compare(password, dataUser.password);
    
    if (passwordUser) {
      // if the password is correct
      const data = {
        id: dataUser._id,
      };
      const token = jwt.sign(data, JWT_SECRET);  // Use the JWT_SECRET variable here
      return res.status(201).json({
        message: "berhasil",
        token: token,
        role: dataUser.role, // retrieve the role from dataUser
      });
    } else {
      // if the password is incorrect
      return res.status(404).json({
        status: false,
        message: "Password yang dimasukkan salah",
      });
    }
  } else {
    // if the username doesn't exist
    return res.status(404).json({
      status: false,
      message: "Username atau Email yang dimasukkan salah",
    });
  }
};
