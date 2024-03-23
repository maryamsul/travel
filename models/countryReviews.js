//hotels with rankings, tourist attractions with fees, history "food they eat, language the speka, their traditions,development", 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recommendationSchema = require('./recommendationSchema.js');
const hotelSchema = require('./hotelSchema.js');

    const attractionSchema = new Schema({
        name: String,
        description: String,
        location: String,
        image: String, // URL or path to the image
        distance: Number, //it is away...km from the city 
        likes: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
      });
    const countrySchema = new Schema({
        name: {
          type: String,
          required: true,
          unique: true,
        },
        history: [String],
        traditionalClothing: [String],
        typesOfFood: [String], // Array of food types
        languagespoken: [String],
        recommendations: ['./recommendationSchema.js'], // Array of recommendations
        touristAttractions: [attractionSchema], // Array of tourist attractions
        hotels: ['./hotelSchema.js'],
  },
  
  {timestamps: true}
);

module.exports = mongoose.model("Country", countrySchema);
const Country = mongoose.model('Country', countrySchema);



async function saveCountry(Country){
try {
    // Create a new instance of the Country model
    const newCountry = new Country({ name: Country });

    const savedCountry = await newCountry.save();

    console.log('Country saved:', savedCountry);
    return savedCountry;
  } catch (error) {
    console.error('Error saving country:', error);
    throw error; // Throw the error to handle it elsewhere if needed
  }
}; 

