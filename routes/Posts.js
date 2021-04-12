const express = require("express");
const router = express.Router();

const {
    create,
  getAllPosts,
  getUserPosts,
  removePost,
  adminRemovePost,
} = require("../controllers/Posts");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

//what i want to accomplish
// need a route for creating a new post
router.post("/post/create/:userId", requireSignin, isAuth, create); //works!
// need a route to get all posts for the community page.
router.get("/community/posts/:userId", requireSignin, isAuth, getAllPosts); // works
// need to get all users posts on profile page.
router.get("/posts/:userId", requireSignin, isAuth, getUserPosts); // works
// need a route for deleting posts that are the users
router.delete("/post/delete/:userId/:postId/:userPostId", requireSignin, isAuth, removePost);
// need a route for deleting posts for admin
router.delete(
  "/admin/post/delete/:userId/:postId",
  requireSignin,
  isAuth,
  isAdmin,
  adminRemovePost
);

// router.get('/user/:userId', requireSignin, isAuth, read);
// router.post('/user/:userId', requireSignin, isAuth, read);
// router.delete('/user/:userId', requireSignin, isAuth, read);

router.param("userId", userById);

module.exports = router;
