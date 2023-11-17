import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 32,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 32,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
