// import model
const Post = require("../models/post");
const Comment = require("../models/comment");

exports.createComment = async (req,res) => {
    try{
        // fetch data from req body
        const {post , user , body} = req.body ;
        // create object of the comment
        const comment = new Comment({
            post , user , body 
        });
        // save this new object into the database
        const savedComment = await comment.save();
        // find post using ID and add new comment to it's comment array
        const updatedPost = await Post.findByIdAndUpdate( post, 
            {$push : {commentArray: savedComment._id}},
            {new : true}
        )
        .populate("commentArray") 
        .exec() ;

        res.json({
            post : updatedPost ,
             
        });
    }
    catch(err) {
        return res.status(500).json({
            Error : "Error while creating comments",
        });
    }
}