import mongoose from 'mongoose';

// creating a mongoose user schema
const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      profilePic: {
        type: String,
        default: "",
      },
    },
    { timestamps: true }
  );

  //export user model schema
//   module.exports = mongoose.model("User", userSchema);

//turning schema into a model
const User = mongoose.model('User', userSchema);
//export mongoose model 
export default User;