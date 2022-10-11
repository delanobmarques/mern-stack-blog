import mongoose from 'mongoose';

// creating a mongoose post schema
const postSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        unique: true,
      },
      desc: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
        required: false,
      },
      username: {
        type: String,
        required: true,
      },
      categories: {
        type: Array,
        required: false,
      },
    },
    { timestamps: true }
  );  

//turning schema into a model
const Post = mongoose.model('Post', postSchema);
//export mongoose model 
export default Post;