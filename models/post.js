const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const postSchema = new Schema({
    user: {
        type: ObjectId,
        ref: "User",
    },
    postText: { type: String, required: true },
    liked: { type: Number, required: true },
});
const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts;