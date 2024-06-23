const express = require('express');
const multer = require('multer');
const path = require('path');
const profileController = require('../controllers/profileController');
const userController = require('../controllers/userController');

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Validation middleware
const validateProfileData = (req, res, next) => {
  const { name, phone, address, latitude, longitude } = req.body;

  if (!name || !phone || !address || !latitude || !longitude) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  next();
};

// Routes
router.post('/register', userController.createUser);
router.get('/', profileController.getAllProfiles);
router.post('/', upload.single('image'), validateProfileData, profileController.createProfile);
router.post('/login', userController.loginUser);

module.exports = router;
