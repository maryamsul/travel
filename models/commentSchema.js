const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    commentOwner: {
        type: Schema.Types.ObjectID,
        ref: "User",
    },
    parentPost:{
        type: Schema.Types.ObjectID,
        ref: "Post",
    },
    Content: {
        type: String,
        default: "",
        maxLength: 1000,
        minLength: 250,
    },
    replies: [
        {
          text: String,
          author: {
            type: Schema.Types.ObjectId,
            ref: 'User', 
        },
    },
        ],
          likes: [
            {
              type: Schema.Types.ObjectId,
              ref: 'User', 
            },
          ],
    

},
{timestamps: true}
);
module.exports = mongoose.model("Comment", commentSchema);