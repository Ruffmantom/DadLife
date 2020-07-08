const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    usernName: { type: String, required: true },
    decsription: { type: String, required: true },
    liked: { type: Number, required: true },
    date: { type: Date, default: Date.now }
})
const Post = mongoose.model("Post", postSchema);
module.exports = Post;