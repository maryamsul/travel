const mongoose = require ("mongoose");
const Schema = mongoose.Schema; 
//here i mean by recommendation, to any tourist attractions: museum, zoo, beach, restuarants, hotels, citis, countries
const recommendationSchema = new Schema ({
    recommendations :{
    type: String, 
    default: "",
    maxLength: 1000,
    minLength: 250, 
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
      },
    img: String, 
    hashtags: [String],
    likes: [
        {
            type: Schema.Types.ObjectID,
            ref: "User",
        },
    ],

},
},
{timestamps: true}
);
module.exports = mongoose.model("recommendations", recommendationSchema);