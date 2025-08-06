const Like = require("../models/like") ;
const Post = require("../models/post");

// like a post
 exports.likePost = async (req,res) => {
    try{
        const {post , user} = req.body ;
        const like = new Like({
            post , user ,
        });
        const savedLike = await like.save();
        const updatedPost = await Post.findByIdAndUpdate(post , 
            {$push : {likes : savedLike._id}},
            {new:true},
        );
        res.status(200).json({
            post : updatedPost,
        })
    }
    catch(error){
        res.status(500).json({
            Error : "Error while liking post"
        })
    }
 }

// dislike a post
exports.unlikePost = async (req,res) => {
    try{
        const {post , like} = req.body ;
        const deletedPost = await Like.findOneAndDelete({post : post , _id : like});
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull :{likes : deletedPost}},  {new : true});
        res.status(200).json({
            post : updatedPost,
        });
    }
    catch(error){
        res.status(500).json({
            Error : "Error while unlking post"
        })
    }
}