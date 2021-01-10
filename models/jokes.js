const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jokeSchema = new Schema({
    joke: { type: String, required: true },
    likes: { type: Number, default:0 }
});
const Jokes = mongoose.model("Jokes", jokeSchema);
module.exports = Jokes;