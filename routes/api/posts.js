const router = require("express").Router();
const userPostsController = require("../../controllers/userPostsController");

// Matches with "/api/posts"
router.route("/")
  .get(userPostsController.findAll)
  .post(userPostsController.create);
  
router.route("/:id")
.put(userPostsController.update);

module.exports = router;
