const express = require("express");
const router = express.Router();

const {
  createPost,
  getAllPosts,
  getUserPosts,
  removePost,
  adminRemovePost,
} = require("../controllers/post");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

//what i want to accomplish
// need a route for creating a new post
router.post("/post/create/userId", requireSignin, isAuth, createPost);
// need a route to get all posts for the community page.
router.get("/posts", requireSignin, isAuth, getAllPosts);
// need to get all users posts on profile page.
router.get("/posts/userId", requireSignin, isAuth, getUserPosts);
// need a route for deleting posts that are the users
router.delete("/post/delete/userId/postId", requireSignin, isAuth, removePost);
// need a route for deleting posts for admin
router.delete(
  "/post/delete/userId/postId",
  requireSignin,
  isAuth,
  isAdmin,
  adminRemovePost
);

// router.get('/user/:userId', requireSignin, isAuth, read);
// router.post('/user/:userId', requireSignin, isAuth, read);
// router.delete('/user/:userId', requireSignin, isAuth, read);

router.param("userId", userById);
