import mongoose from 'mongoose';

// creating a mongoose category schema
const CategorySchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
    },
    { timestamps: true }
  );
  
  //export category model schema
  module.exports = mongoose.model("Category", CategorySchema);