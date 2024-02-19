import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    role: String
}, {
    collection: "user"
});

export default mongoose.model("users", UserSchema);