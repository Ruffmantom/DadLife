const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/userPosts"
);

const postSeed = [
    {
        userName: "ToolManBob",
        description: "Had the best time with my little dude at the skatepark today, the boy knows how to drop in!",
        date: new Date(Date.now()),
        liked: 0
    },
    {
        userName: "BulletTooth21",
        description: "Beach day with the goon! this little girl is spoiled! Love her to the moon and back",
        date: new Date(Date.now()),
        liked: 0
    },
    {
        userName: "Ruffmantom",
        description: "First time being a dad, his name is Mathew and coming in at 6 pounds 7 ounces.",
        date: new Date(Date.now()),
        liked: 0
    },
    {
        userName: "YouBetYa",
        description: "Just found this joke, How does a penguin build its house? Igloos it together.",
        date: new Date(Date.now()),
        liked: 0
    },
    {
        userName: "BulletTooth21",
        description: "Beach day with the goon! this little girl is spoiled! Love her to the moon and back",
        date: new Date(Date.now()),
        liked: 0
    },
    {
        userName: "Ruffmantom",
        description: "First time being a dad, his name is Mathew and coming in at 6 pounds 7 ounces.",
        date: new Date(Date.now()),
        liked: 0
    },
    {
        userName: "YouBetYa",
        description: "Just found this joke, How does a penguin build its house? Igloos it together.",
        date: new Date(Date.now()),
        liked: 0
    }

]
db.Post
    .remove({})
    .then(()=> db.Post.collection.insertMany(postSeed))
    .then(data => {
        console.log(data.result.n + "posts have been entered!");
        process.exit(0);
    })
    .catch(err =>{
        console.log(err);
        process.exit(1);
    })