// import router
const express = require("express");
const router = express.Router();

// import controller
const {createComment} = require("../controller/comment");
const {createPost} = require("../controller/post");
const {getAllPost} = require("../controller/post");
const {likePost} = require("../controller/like");
const {unlikePost} = require("../controller/like");

//define API routes
router.post("/comment/create" , createComment);
router.post("/post/create" , createPost);
router.get("/post/get" , getAllPost);
router.post("/post/like" , likePost);
router.post("/post/unlike" , unlikePost);

// export routes 
module.exports = router ;