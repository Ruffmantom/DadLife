const router = require("express").Router();
const postRoutes = require("./posts");

// Book routes
router.use("/communityPosts", postRoutes);

module.exports = router;