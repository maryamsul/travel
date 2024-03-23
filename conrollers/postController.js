const { request } = require("express");
const Post = require("../models/postSchema.js");
const User = require("../models/userSchema.js"); 

exports.createPost = async (req, res) => {
    try { 
        const postOwner= await User.findbyID(req.body("postOwner"));
        if(!postOwner){
            return res
            .status(401)
            .json({messsage: "Please log in to post!"});

        }
        const newPost = await Post.create({
            postOwner: request.body["postOwner"],
            img: request.body ["img"],
            caption: request.body ["caption"],
            content: request.body["content"],
        });
    
    return res
    .status(201)
    .json({data:newpost, message: "Post created successfully"});

   } catch (err){
        console.log(err);
        res.status(500).json({message:err.message});
    }
};

exports.deletepost = async (req, res) => {
    try{
        const user = await User.findByID(req.body["postOwner"])
        if(!user){
            return res.status(404).json({message : "User trying to delete the post not found!"});
        }
        const post = await Post.findByID(req.params["post ID"]);
        if(!post){
            return res.status(404).json({message: "Post is not found"});

        }
        if(UserTRyingToDelete._id.toString() === post.postOwner.toString()) {
            return res.status(404).json({message: "user is not allowed to delete a post"});

        }
        await post.deleteOne();
        return res.status(200).json({message: "Post deleted successfully!"});
    } catch (err){
        console.log(err);
        res.status(500).json({message:err.message});
    }
exports.like = async (req,res) => {
    try{
        const post = await Post.findbyID(req.params["postID"]);
        if (!post)
        return res.status(401).json({message : "Login to like the post"});
    if (!post.likes.includes(red.bpdy["userID"])) {
    await post.UpdateOne({$push:{ likes: req.body["userID"] } } );
    return res.status(200).json({message:"The post has been liked!"});

    } else {
        await post.UpdateOne( { $pull:{likes: req.body["UserID"] } } ) ;
        return res.status(200).json({message : "this post has been disliked!"} ) ;
    }
} catch (err) {
    console.log(err);
    res.status(500).json({message: err.message});
}
}
};