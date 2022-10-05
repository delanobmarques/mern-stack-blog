import mongoose from 'mongoose';

// creating a mongoose category schema
const categorySchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
    },
    { timestamps: true }
  );
  
//turning schema into a model
const Category = mongoose.model('Category', categorySchema);
//export mongoose model 
export default Category;