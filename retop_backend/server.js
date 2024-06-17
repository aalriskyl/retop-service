const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const profileRoutes = require('./routes/profileRoutes');
// const RouteUser = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/toko', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Routes
app.use('/profiles', profileRoutes);
// app.use ('/user', )


// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Gracefully handle server shutdown
process.on('SIGINT', () => {
  console.log('Server is shutting down...');
  server.close(() => {
    console.log('Server has been shut down.');
    process.exit(0);
  });
});
