// import mongoose
const mongoose = require("mongoose");

// route handler
const postSchema = mongoose.Schema ({
    title:{
        type:String,
        required: true,
    },
    body:{
        type:String,
        required: true,
    },
    likesArray:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"likes",
    },
    commentArray:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"comments",
    }
});

// export
module.exports = mongoose.model("Post" , postSchema);