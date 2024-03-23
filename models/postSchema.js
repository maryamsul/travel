const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    postOwner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
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
        requried: true,
    },
    caption: {
        type: String,
        default:"",
        requried: true,
    },
    content: {
        type: String,
        default: "",
        maxLength: 1000,
        required: true,
    },
    video: {
        type: String,
        deafult: "",
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    savedBy: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User', 
        },
      ],
      repostedBy: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User', 
        },
      ],
},
    {timestamps: true}

);
module.exports = mongoose.model("Post", PostSchema);