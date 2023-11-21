import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 300,
  },
  price: {
    type: Number,
    required: true,
    min: 0.01,
  },
  description: {
    type: String,
    minLength: 3,
    maxLength: 400,
  },
  expirationDate: {
    type: Date,
  },
  amount: {
    type: Number,
    min: 0,
    default: 0,
  },
});

export default mongoose.model("Product", productSchema);
