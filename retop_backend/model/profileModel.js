const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  imageUrl: { type: String },
  address: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true }
  }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
