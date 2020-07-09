const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    userName: { type: String, required: true },
    description: { type: String, required: true },
    liked: { type: Number, required: true },
    date: { type: Date, default: Date.now }
})
const Post = mongoose.model("Post", postSchema);
module.exports = Post; 