import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  userEmail: String,
  city: String,
  state: String,
  age: Number,
  sex: String,
  bio: String,
  matches: Array, // array of matches' unique identifier (email)
  pic: String // URL of picture
});

export default mongoose.model("users", userSchema);
