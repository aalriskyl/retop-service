const Profile = require('../model/profileModel');

exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.createProfile = async (req, res) => {
  try {
    const { name, phone, location } = req.body;
    const profile = new Profile({ name, phone, location });
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    console.error('Error creating profile:', error);
    res.status(500).send('Internal Server Error');
  }
};

