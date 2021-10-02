import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String
});

export default mongoose.model("users", userSchema);
