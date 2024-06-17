const mongoose = require('mongoose');

//membuat toko
const profileSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

//membuat user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

});
profileSchema.index({ location: '2dsphere' });

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
