const mongoose = require("mongoose");

// route handler
const likeSchema = mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId ,
        ref: "Post" , // reference to the post model
    },
    user:{
        type: String,
        required: true ,
    }
});

// export
module.exports = mongoose.model("likes" , likeSchema);