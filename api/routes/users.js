import express from "express";
//setup router
const router = express.Router(); // const router = require("express").Router();
//import user model
import User from "../models/User.js";
//import post model
import Post from "../models/Post.js";
//import bcrypt hashing library
import bcrypt from 'bcryptjs';

//UPDATE USER REOUTE
router.put("/:id", async(req, res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            },{new:true}); //update and send updated user
            res.status(200).json(updatedUser);
        } catch (err) {
          res.status(500).json(err);
        }
    } else{
        res.status(401).json("Not Allowed! You can update only your account.")
    }
    
});

//DELETE USER ROUTE
router.delete("/:id", async(req, res) => {
    if(req.body.userId === req.params.id){
        try {
            const user = await User.findById(req.params.id); //************ It should be if(user) condition
            
            try {
                await Post.deleteMany({username: user.username}); //delete all posts from user
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted ...");
            } catch (err) {
              res.status(500).json(err);
            }

        } catch (err){
            res.status(404).json("User not found!");
        }
        
    } else{
        res.status(401).json("Not Allowed! You can delete only your account.")
    }    
});

//GET USER ROUTE
router.get("/:id", async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
        
    }catch(err){
        res.status(500).json(err)
    }
})

  
export default router;
// module.exports = router;
