import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
    provider: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const User = mongoose.models?.User || mongoose.model("User", UserSchema);
export default User;
