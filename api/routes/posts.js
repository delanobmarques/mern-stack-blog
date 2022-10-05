import express from "express";
//setup router
const router = express.Router(); // const router = require("express").Router();
//import user model
import User from "../models/User.js";
//import post model
import Post from "../models/Post.js";

//CREATE POST ROUTE
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
});

//UPDATE POST ROUTE
router.put("/:id", async(req, res) => {
    try {        
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
          try {
            const updatedPost = await Post.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            );
            res.status(200).json(updatedPost);
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("Not allowed! You can update only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }    
});

//DELETE POST ROUTE
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          await post.delete();
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("Not allowed! You can delete only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET POST ROUTE
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET ALL POSTS ROUTE
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {//if there is a username
        posts = await Post.find({ username }); //get posts from user 
      } else if (catName) { //if there's a category name
        posts = await Post.find({ //get categories names from posts
          categories: {
            $in: [catName],
          },
        });
      } else {// if there's no categories fetch all posts
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
export default router;
// module.exports = router;
