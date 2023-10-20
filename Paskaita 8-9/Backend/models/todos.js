import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 10,
  },
  description: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 15,
  },
  dateOfCreation: {
    type: Date,
    default: Date.now,
  },
  isFinished: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Todo", todoSchema);
