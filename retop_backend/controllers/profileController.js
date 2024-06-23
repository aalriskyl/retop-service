const Profile = require('../model/profileModel');
const multer = require('multer');
const path = require('path');

exports.createProfile = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    console.log('Uploaded file:', req.file);

    const { name, phone, address, latitude, longitude } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

    if (!name || !phone || !address || !latitude || !longitude) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newProfile = new Profile({
      name,
      phone,
      imageUrl,
      address,
      location: {
        type: 'Point',
        coordinates: [parseFloat(longitude), parseFloat(latitude)]
      }
    });

    await newProfile.save();
    console.log('New Profile added:', newProfile);
    res.status(201).json({ message: 'Profile added', newProfile });
  } catch (error) {
    console.error('Error creating profile:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};



// Fetch all profiles
exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).send('Internal Server Error');
  }
};
