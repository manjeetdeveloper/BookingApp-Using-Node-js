import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    password: String,
});

export default mongoose.model("books", userSchema);