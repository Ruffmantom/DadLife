const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const postSchema = new Schema({
  userName: { type: String },
  posterId: { type: String },
  postText: { type: String },
//   imgProperties: { type: Object, required: true },
  likes: { type: Number, default: 0 },
  userLiked: { type: Array }
});
const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts;
