const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const restaurantSchema = new Schema({
    name: {
        type: String,
        default: "",
        required: true,
        unique: true,
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        img: {
            type: String,
            default: "",
        },
        },
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: 'Country', // Reference to the Country model for the country of the hotel
      },
      recommendations: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Recommendation', // Reference to the Recommendation model for recommendations related to the hotel
        },
      ],
      foodtypes: [String],
},
{timestamps: true}
);
module.exports = mongoose.model("restaurant", restaurantSchema);