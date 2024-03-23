//best city you ever visited, best airline you had your flight with
//best city for proposals, what is known for, what are your own experiences what vibes you had
const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
const city = mongoose.model('city', citychema);

const citySchema = new Schema({
    name: {
         type: String,
         required: true,
         unique: true,
        },
    rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },
    img: {
        type: String,
        default: "",
    },
    caption:{
        type: String,
        default:"",
        minLength: 250,
        maxLEngth: 2000,
    },
},
    {timestamps: true}
    
);

 module.exports = mongoose.model("city", citySchema);