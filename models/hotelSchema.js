const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema ({
    name: {
        type: String,
        default: "",
        required: true,
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
      pricePerNight: {
        type: Number,
        required: true,
      },
      // Other fields for the hotel
    }, { timestamps: true });
    
    module.exports = mongoose.model("hotel", hotelSchema);