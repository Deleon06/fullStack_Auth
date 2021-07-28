import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
  username: { type: String, require: true },
  email: { type: String, required: true },
  //select false allows for the password to not be saved
  password_digest: { type: String, required: true, select: false },
},
  { timestamps: true }
);

export default mongoose.model("User", UseSchema)