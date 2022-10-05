import express from "express";
//setup router
const router = express.Router(); // const router = require("express").Router();
//import user model
import User from "../models/User.js";
//import bcrypt hashing library
import bcrypt from 'bcryptjs';

//REGISTER NEW USER ROUTE
router.post("/register", async(req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: hashedPass,
        });    
        //save new user 
        const user = await newUser.save();
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json(err);
      }
});

//LOGIN EXISTING USER ROUTE
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });//finding unique user
      !user && res.status(400).json("Wrong credentials! (user)");//if there is no user 
      console.log('........user............')
      
      const validated = await bcrypt.compare(req.body.password, user.password);//compare typed password with encrypted one in db
      !validated && res.status(400).json("Wrong credentials! (password)");
      console.log('........password...........')
      
      // res.status(200).json(user);
      const { password, ...others } = user._doc;//send everything but user password
      res.status(200).json(others);

    // ************ TO DO ************
    // returns error if wrong user 
    //******************************* */

      // if(user && validated) {
      //   console.log('user and password ok')
      //   return res.status(200).json(others);
      // }else{
      //   return res.status(400).json("Wrong credentials!");//if there is no user 
      // }


      // }else if(!user) {
      //   console.log('NO user!!! ')
      //   return res.status(400).json("Wrong credentials!");//if there is no user 
      // }else if(!validated) {
      //   console.log('NO passwprd!!! ')
      //   return res.status(400).json("Wrong credentials!");
      // }

    } catch (err) {
      console.log(`Something went wrong...${err}`)
      return res.status(500).json(err);
    }
  });
  
export default router;
// module.exports = router;
