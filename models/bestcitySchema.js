const mongoose = require('mongoose');
const User = require('./userSchema.js'); // Import the User model
const City = require('./citySchema.js'); // Import the City model

// Generate new ObjectId for userId and cityId
const userId = mongoose.Types.ObjectId(); // New ObjectId for user
const cityId = mongoose.Types.ObjectId(); // New ObjectId for city
async function markBestCity(userId, cityId) {
  try {
    // Update the user's bestCity field with the city ID
    await User.findByIdAndUpdate(userId, { bestCity: cityId });

    // Increment the bestCityCount field of the city by 1
    await City.findByIdAndUpdate(cityId, { $inc: { bestCityCount: 1 } });

    console.log('User marked best city successfully.');
  } catch (error) {
    console.error('Error marking best city:', error);
  }
}
markBestCity(userId, cityId);
const bestCitySchema = new Schema ({
bestCityCount:  {
    type: Number,
    default: 0,
  },
},
  { timestamps: true });
    
  module.exports = mongoose.model("best city", bestCitySchema);